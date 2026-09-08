import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const imageMap: Record<string, string> = {
  hero: path.join(root, 'app', '_1', 'v1 image.png'),
  products: path.join(root, 'app', '_1', 'v2 image.png'),
  v1: path.join(root, 'app', '_1', 'v1 image.png'),
  v2: path.join(root, 'app', '_1', 'v2 image.png'),
  'v1-image': path.join(root, 'app', '_1', 'v1 image.png'),
  'v2-image': path.join(root, 'app', '_1', 'v2 image.png'),
};

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const name = params.name;
  const filePath = imageMap[name];

  if (filePath && fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);

    // Also persist into public/images/vchemics/
    try {
      const publicDir = path.join(process.cwd(), 'public', 'images', 'vchemics');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, `${name}.jpg`), buffer);
      fs.writeFileSync(path.join(publicDir, `${name}.png`), buffer);
    } catch {
      // ignore
    }

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': filePath.endsWith('.png') ? 'image/png' : 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  const localPath = path.join(process.cwd(), 'public', 'images', 'vchemics', `${name}.jpg`);
  if (fs.existsSync(localPath)) {
    const buffer = fs.readFileSync(localPath);
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  return new NextResponse('Image not found', { status: 404 });
}
