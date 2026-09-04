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
  ihdrData.writeUInt8(8, 8);
  ihdrData.writeUInt8(6, 9);
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  const rowBytes = width * 4;
  const scanlines = Buffer.alloc(height * (1 + rowBytes));
  for (let y = 0; y < height; y++) {
    scanlines[y * (1 + rowBytes)] = 0;
    rgbaData.copy(scanlines, y * (1 + rowBytes) + 1, y * rowBytes, (y + 1) * rowBytes);
  }

  const compressed = zlib.deflateSync(scanlines, { level: 9 });
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

function makeIcoFromPng(pngBuf: Buffer, width: number, height: number): Buffer {
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(1, 4);

  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(width >= 256 ? 0 : width, 0);
  dirEntry.writeUInt8(height >= 256 ? 0 : height, 1);
  dirEntry.writeUInt8(0, 2);
  dirEntry.writeUInt8(0, 3);
  dirEntry.writeUInt16LE(1, 4);
  dirEntry.writeUInt16LE(32, 6);
  dirEntry.writeUInt32BE(pngBuf.length, 8);
  dirEntry.writeUInt32LE(22, 12);

  return Buffer.concat([icoHeader, dirEntry, pngBuf]);
}

export async function GET() {
  try {
    const root = process.cwd();
    const sourcePath = path.resolve(root, 'app', 'terms', 'logo intouch.png');

    if (!fs.existsSync(sourcePath)) {
      return NextResponse.json({ error: 'Source logo not found' }, { status: 404 });
    }

    const sourceBuf = fs.readFileSync(sourcePath);
    const srcWidth = sourceBuf.readUInt32BE(16);
    const srcHeight = sourceBuf.readUInt32BE(20);

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
    const rowBytes = 1 + srcWidth * 4;
    const rawRgba = Buffer.alloc(srcWidth * srcHeight * 4);

    const prevRow = Buffer.alloc(srcWidth * 4);
    const currentRow = Buffer.alloc(srcWidth * 4);

    for (let y = 0; y < srcHeight; y++) {
      const filterType = decompressed[y * rowBytes];
      const scanline = decompressed.subarray(y * rowBytes + 1, (y + 1) * rowBytes);

      for (let x = 0; x < srcWidth * 4; x++) {
        const a = x >= 4 ? currentRow[x - 4] : 0;
        const b = prevRow[x];
        const c = x >= 4 ? prevRow[x - 4] : 0;
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
        rawRgba[(y * srcWidth * 4) + x] = unmasked;
      }
      currentRow.copy(prevRow);
    }

    // Isolate iG emblem strictly (x < 225)
    const splitX = 225;
    let minX = srcWidth, maxX = 0, minY = srcHeight, maxY = 0;
    for (let y = 0; y < srcHeight; y++) {
      for (let x = 0; x < splitX; x++) {
        const alpha = rawRgba[(y * srcWidth + x) * 4 + 3];
        if (alpha > 20) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    const emblemW = maxX - minX + 1;
    const emblemH = maxY - minY + 1;
    const squareSize = Math.max(emblemW, emblemH);
    const pad = Math.round(squareSize * 0.08); // 8% padding
    const targetSize = squareSize + (pad * 2);

    const squareRgba = Buffer.alloc(targetSize * targetSize * 4);
    const offsetX = pad + Math.floor((squareSize - emblemW) / 2);
    const offsetY = pad + Math.floor((squareSize - emblemH) / 2);

    for (let ey = 0; ey < emblemH; ey++) {
      for (let ex = 0; ex < emblemW; ex++) {
        const srcX = minX + ex;
        const srcY = minY + ey;
        const srcIdx = (srcY * srcWidth + srcX) * 4;

        const dstX = offsetX + ex;
        const dstY = offsetY + ey;
        const dstIdx = (dstY * targetSize + dstX) * 4;

        squareRgba[dstIdx] = rawRgba[srcIdx];
        squareRgba[dstIdx + 1] = rawRgba[srcIdx + 1];
        squareRgba[dstIdx + 2] = rawRgba[srcIdx + 2];
        squareRgba[dstIdx + 3] = rawRgba[srcIdx + 3];
      }
    }

    function resizeRgba(src: Buffer, sw: number, sh: number, dw: number, dh: number): Buffer {
      const dst = Buffer.alloc(dw * dh * 4);
      for (let dy = 0; dy < dh; dy++) {
        for (let dx = 0; dx < dw; dx++) {
          const gx = (dx + 0.5) * (sw / dw) - 0.5;
          const gy = (dy + 0.5) * (sh / dh) - 0.5;
          const gxi = Math.max(0, Math.min(sw - 2, Math.floor(gx)));
          const gyi = Math.max(0, Math.min(sh - 2, Math.floor(gy)));
          const tx = gx - gxi;
          const ty = gy - gyi;

          const dstIdx = (dy * dw + dx) * 4;

          for (let c = 0; c < 4; c++) {
            const c00 = src[(gyi * sw + gxi) * 4 + c];
            const c10 = src[(gyi * sw + gxi + 1) * 4 + c];
            const c01 = src[((gyi + 1) * sw + gxi) * 4 + c];
            const c11 = src[((gyi + 1) * sw + gxi + 1) * 4 + c];
            const top = c00 * (1 - tx) + c10 * tx;
            const bottom = c01 * (1 - tx) + c11 * tx;
            dst[dstIdx + c] = Math.round(top * (1 - ty) + bottom * ty);
          }
        }
      }
      return dst;
    }

    const rgba128 = resizeRgba(squareRgba, targetSize, targetSize, 128, 128);
    const png128 = encodePngRgba(128, 128, rgba128);

    const rgba64 = resizeRgba(squareRgba, targetSize, targetSize, 64, 64);
    const png64 = encodePngRgba(64, 64, rgba64);

    const rgba32 = resizeRgba(squareRgba, targetSize, targetSize, 32, 32);
    const png32 = encodePngRgba(32, 32, rgba32);

    const ico32 = makeIcoFromPng(png32, 32, 32);

    const publicDir = path.resolve(root, 'public');
    const appDir = path.resolve(root, 'app');
    const publicImagesDir = path.resolve(publicDir, 'images');

    if (!fs.existsSync(publicImagesDir)) {
      fs.mkdirSync(publicImagesDir, { recursive: true });
    }

    fs.writeFileSync(path.resolve(publicDir, 'logo.png'), sourceBuf);
    fs.writeFileSync(path.resolve(publicImagesDir, 'logo.png'), sourceBuf);

    fs.writeFileSync(path.resolve(publicDir, 'icon.png'), png128);
    fs.writeFileSync(path.resolve(appDir, 'icon.png'), png128);

    fs.writeFileSync(path.resolve(publicDir, 'apple-icon.png'), png128);
    fs.writeFileSync(path.resolve(appDir, 'apple-icon.png'), png128);

    fs.writeFileSync(path.resolve(publicDir, 'favicon.ico'), ico32);
    fs.writeFileSync(path.resolve(appDir, 'favicon.ico'), ico32);

    fs.writeFileSync(path.resolve(publicDir, 'icon-32.png'), png32);
    fs.writeFileSync(path.resolve(publicDir, 'icon-64.png'), png64);

    return NextResponse.json({
      success: true,
      splitX,
      emblemBounds: { minX, maxX, minY, maxY, emblemW, emblemH, targetSize }
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
