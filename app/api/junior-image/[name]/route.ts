import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const imageMap: Record<string, string> = {
  hero: 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\c9a0aaeb-1768-4d18-a3fc-a67e0b1b01eb\\junior_junction_hero_1788329002235.jpg',
  'messy-play': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\c9a0aaeb-1768-4d18-a3fc-a67e0b1b01eb\\junior_messy_play_1788329023073.jpg',
  graduation: 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\c9a0aaeb-1768-4d18-a3fc-a67e0b1b01eb\\junior_graduation_day_1788329044755.jpg',
};

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const name = params.name;
  const filePath = imageMap[name];

  if (filePath && fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);

    // Also persist into public/images/junior-junction/
    try {
      const publicDir = path.join(process.cwd(), 'public', 'images', 'junior-junction');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, `${name}.jpg`), buffer);
    } catch {
      // ignore
    }

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // Fallback: check if already in public
  const localPath = path.join(process.cwd(), 'public', 'images', 'junior-junction', `${name}.jpg`);
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
