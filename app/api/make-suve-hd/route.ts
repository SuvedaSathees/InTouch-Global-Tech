import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const dynamic = 'force-dynamic';

function crc32(buf: Buffer): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type: string, data: Buffer): Buffer {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function encodePngRgba(width: number, height: number, rgbaData: Buffer): Buffer {
  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // 8 bits per channel
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  const rowBytes = width * 4;
  const scanlines = Buffer.alloc(height * (1 + rowBytes));
  for (let y = 0; y < height; y++) {
    scanlines[y * (1 + rowBytes)] = 0; // filter type 0: None
    rgbaData.copy(scanlines, y * (1 + rowBytes) + 1, y * rowBytes, (y + 1) * rowBytes);
  }

  const compressed = zlib.deflateSync(scanlines, { level: 9 });
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

// Catmull-Rom Bicubic Weight
function cubicWeight(x: number): number {
  const a = -0.5; // Catmull-Rom spline
  x = Math.abs(x);
  if (x <= 1) {
    return (a + 2) * x * x * x - (a + 3) * x * x + 1;
  } else if (x < 2) {
    return a * x * x * x - 5 * a * x * x + 8 * a * x - 4 * a;
  }
  return 0;
}

export async function GET() {
  try {
    const root = process.cwd();
    const sourcePath = path.resolve(root, 'app', 'terms', 'suve.png');
    const backupPath = path.resolve(root, 'app', 'terms', 'suve_original_backup.png');

    if (!fs.existsSync(sourcePath)) {
      return NextResponse.json({ error: 'suve.png not found' }, { status: 404 });
    }

    const sourceBuf = fs.readFileSync(sourcePath);

    // Save backup if not already present
    if (!fs.existsSync(backupPath)) {
      fs.writeFileSync(backupPath, sourceBuf);
    }

    const srcWidth = sourceBuf.readUInt32BE(16);
    const srcHeight = sourceBuf.readUInt32BE(20);
    const bitDepth = sourceBuf.readUInt8(24);
    const colorType = sourceBuf.readUInt8(25);

    // Extract all IDAT chunks
    let offset = 8;
    const idatChunks: Buffer[] = [];
    while (offset < sourceBuf.length) {
      const length = sourceBuf.readUInt32BE(offset);
      const type = sourceBuf.toString('ascii', offset + 4, offset + 8);
      if (type === 'IDAT') {
        idatChunks.push(sourceBuf.subarray(offset + 8, offset + 8 + length));
      }
      offset += 12 + length;
    }

    const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
    const bytesPerPixel = colorType === 6 ? 4 : 3;
    const rowBytes = 1 + srcWidth * bytesPerPixel;
    const rawRgba = Buffer.alloc(srcWidth * srcHeight * 4);

    const prevRow = Buffer.alloc(srcWidth * bytesPerPixel);
    const currentRow = Buffer.alloc(srcWidth * bytesPerPixel);

    for (let y = 0; y < srcHeight; y++) {
      const filterType = decompressed[y * rowBytes];
      const scanline = decompressed.subarray(y * rowBytes + 1, (y + 1) * rowBytes);

      for (let x = 0; x < srcWidth * bytesPerPixel; x++) {
        const a = x >= bytesPerPixel ? currentRow[x - bytesPerPixel] : 0;
        const b = prevRow[x];
        const c = x >= bytesPerPixel ? prevRow[x - bytesPerPixel] : 0;
        const val = scanline[x];

        let unmasked = 0;
        if (filterType === 0) unmasked = val;
        else if (filterType === 1) unmasked = (val + a) & 0xff;
        else if (filterType === 2) unmasked = (val + b) & 0xff;
        else if (filterType === 3) unmasked = (val + Math.floor((a + b) / 2)) & 0xff;
        else if (filterType === 4) {
          const p = a + b - c;
          const pa = Math.abs(p - a);
          const pb = Math.abs(p - b);
          const pc = Math.abs(p - c);
          let pr = c;
          if (pa <= pb && pa <= pc) pr = a;
          else if (pb <= pc) pr = b;
          unmasked = (val + pr) & 0xff;
        }
        currentRow[x] = unmasked;
      }
      currentRow.copy(prevRow);

      for (let px = 0; px < srcWidth; px++) {
        const rawIdx = (y * srcWidth + px) * 4;
        if (colorType === 6) {
          rawRgba[rawIdx] = currentRow[px * 4];
          rawRgba[rawIdx + 1] = currentRow[px * 4 + 1];
          rawRgba[rawIdx + 2] = currentRow[px * 4 + 2];
          rawRgba[rawIdx + 3] = currentRow[px * 4 + 3];
        } else {
          rawRgba[rawIdx] = currentRow[px * 3];
          rawRgba[rawIdx + 1] = currentRow[px * 3 + 1];
          rawRgba[rawIdx + 2] = currentRow[px * 3 + 2];
          rawRgba[rawIdx + 3] = 255;
        }
      }
    }

    // 2x HD upscale: 814 x 1224 (doubled crisp resolution)
    const scaleFactor = 2;
    const dstWidth = srcWidth * scaleFactor;
    const dstHeight = srcHeight * scaleFactor;
    const dstRgba = Buffer.alloc(dstWidth * dstHeight * 4);

    // High-precision Bicubic Catmull-Rom Resampling with Premultiplied Alpha
    for (let dy = 0; dy < dstHeight; dy++) {
      const srcY = (dy + 0.5) / scaleFactor - 0.5;
      const y0 = Math.floor(srcY);

      for (let dx = 0; dx < dstWidth; dx++) {
        const srcX = (dx + 0.5) / scaleFactor - 0.5;
        const x0 = Math.floor(srcX);

        let totalR = 0, totalG = 0, totalB = 0, totalA = 0;
        let weightSum = 0;

        for (let j = -1; j <= 2; j++) {
          const sampleY = Math.min(Math.max(y0 + j, 0), srcHeight - 1);
          const wy = cubicWeight(srcY - sampleY);

          for (let i = -1; i <= 2; i++) {
            const sampleX = Math.min(Math.max(x0 + i, 0), srcWidth - 1);
            const wx = cubicWeight(srcX - sampleX);
            const w = wx * wy;

            const idx = (sampleY * srcWidth + sampleX) * 4;
            const a = rawRgba[idx + 3] / 255;
            // Premultiply by alpha to avoid dark/fringing edge artifacts
            totalR += rawRgba[idx] * a * w;
            totalG += rawRgba[idx + 1] * a * w;
            totalB += rawRgba[idx + 2] * a * w;
            totalA += rawRgba[idx + 3] * w;
            weightSum += w;
          }
        }

        const outA = Math.min(255, Math.max(0, Math.round(totalA / weightSum)));
        const dstIdx = (dy * dstWidth + dx) * 4;

        if (outA > 0) {
          const alphaNorm = outA / 255;
          const unPreR = totalR / weightSum / alphaNorm;
          const unPreG = totalG / weightSum / alphaNorm;
          const unPreB = totalB / weightSum / alphaNorm;
          dstRgba[dstIdx] = Math.min(255, Math.max(0, Math.round(unPreR)));
          dstRgba[dstIdx + 1] = Math.min(255, Math.max(0, Math.round(unPreG)));
          dstRgba[dstIdx + 2] = Math.min(255, Math.max(0, Math.round(unPreB)));
          dstRgba[dstIdx + 3] = outA;
        } else {
          dstRgba[dstIdx] = 0;
          dstRgba[dstIdx + 1] = 0;
          dstRgba[dstIdx + 2] = 0;
          dstRgba[dstIdx + 3] = 0;
        }
      }
    }

    // Adaptive Unsharp Masking & Micro-contrast Enhancement
    // Enhances crisp facial contours, eyes, hair texture, and fabric weave
    const sharpenedRgba = Buffer.from(dstRgba);
    const sharpenAmount = 0.55; // Crisp HD enhancement
    const threshold = 2; // Avoid boosting background noise

    for (let y = 1; y < dstHeight - 1; y++) {
      for (let x = 1; x < dstWidth - 1; x++) {
        const centerIdx = (y * dstWidth + x) * 4;
        const a = dstRgba[centerIdx + 3];
        if (a < 30) continue; // Skip transparent edges

        // 3x3 Laplacian sharpening kernel
        for (let c = 0; c < 3; c++) {
          const centerVal = dstRgba[centerIdx + c];
          const top = dstRgba[((y - 1) * dstWidth + x) * 4 + c];
          const bottom = dstRgba[((y + 1) * dstWidth + x) * 4 + c];
          const left = dstRgba[(y * dstWidth + (x - 1)) * 4 + c];
          const right = dstRgba[(y * dstWidth + (x + 1)) * 4 + c];

          const blurred = (top + bottom + left + right) * 0.25;
          const diff = centerVal - blurred;

          if (Math.abs(diff) > threshold) {
            let newVal = centerVal + diff * sharpenAmount;
            // Subtle S-curve contrast on midtones for HD depth
            const norm = newVal / 255;
            const enhanced = Math.pow(norm, 0.96) * 1.02;
            newVal = Math.min(255, Math.max(0, Math.round(enhanced * 255)));
            sharpenedRgba[centerIdx + c] = newVal;
          }
        }
      }
    }

    // Encode to HD PNG
    const hdPngBuffer = encodePngRgba(dstWidth, dstHeight, sharpenedRgba);

    // Overwrite app/terms/suve.png with the new HD version
    fs.writeFileSync(sourcePath, hdPngBuffer);

    return NextResponse.json({
      success: true,
      original: { width: srcWidth, height: srcHeight, size: sourceBuf.length },
      hd: { width: dstWidth, height: dstHeight, size: hdPngBuffer.length },
      message: 'Successfully enhanced suve.png to HD 814x1224 with bicubic Catmull-Rom resampling and unsharp mask clarity.'
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
