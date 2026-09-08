import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const imageMap: Record<string, string> = {
  hero: path.join(process.cwd(), 'app', '1', 'j1.png'),
  'messy-play': path.join(process.cwd(), 'app', '1', 'j2.png'),
  celebrations: path.join(process.cwd(), 'app', '1', 'j2.png'),
  portfolio: path.join(process.cwd(), 'app', '1', 'p1.png'),
  job1: path.join(process.cwd(), 'app', '1', 'job1.png'),
  job_old: path.join(process.cwd(), 'app', '1', 'job_old.png'),
  magnertiaerp: path.join(process.cwd(), 'app', '1', 'magnertiaerp.png'),
  roboticerp: path.join(process.cwd(), 'app', '1', 'roboticerp.png'),
  'ev-website': path.join(process.cwd(), 'app', '1', 'ev website.png'),
  mobile1: path.join(process.cwd(), 'app', '1', 'mobile1 .png'),
  mobile2: path.join(process.cwd(), 'app', '1', 'mobile2.png'),
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
    const isPng = filePath.endsWith('.png');

    // Persist into respective public folder
    try {
      if (name === 'portfolio') {
        const portDir = path.join(process.cwd(), 'public', 'images', 'portfolio-website');
        if (!fs.existsSync(portDir)) {
          fs.mkdirSync(portDir, { recursive: true });
        }
        fs.writeFileSync(path.join(portDir, 'hero.png'), buffer);
        fs.writeFileSync(path.join(portDir, 'hero.jpg'), buffer);
      } else if (name === 'magnertiaerp') {
        const magDir = path.join(process.cwd(), 'public', 'images', 'magnertia-erp');
        if (!fs.existsSync(magDir)) {
          fs.mkdirSync(magDir, { recursive: true });
        }
        fs.writeFileSync(path.join(magDir, 'magnertiaerp.png'), buffer);
        fs.writeFileSync(path.join(magDir, 'hero.png'), buffer);
        fs.writeFileSync(path.join(magDir, 'hero.jpg'), buffer);
      } else if (name === 'roboticerp') {
        const rpcDir = path.join(process.cwd(), 'public', 'images', 'rpc-erp');
        if (!fs.existsSync(rpcDir)) {
          fs.mkdirSync(rpcDir, { recursive: true });
        }
        fs.writeFileSync(path.join(rpcDir, 'roboticerp.png'), buffer);
        fs.writeFileSync(path.join(rpcDir, 'hero.png'), buffer);
        fs.writeFileSync(path.join(rpcDir, 'hero.jpg'), buffer);
      } else if (name === 'job1' || name === 'job_old') {
        const jobDir = path.join(process.cwd(), 'public', 'images', 'job-campus');
        if (!fs.existsSync(jobDir)) {
          fs.mkdirSync(jobDir, { recursive: true });
        }
        fs.writeFileSync(path.join(jobDir, `${name}.png`), buffer);
        if (name === 'job1') {
          fs.writeFileSync(path.join(jobDir, 'hero.png'), buffer);
          fs.writeFileSync(path.join(jobDir, 'hero.jpg'), buffer);
        }
      } else if (name === 'ev-website') {
        const evDir = path.join(process.cwd(), 'public', 'images', 'ev-station');
        if (!fs.existsSync(evDir)) {
          fs.mkdirSync(evDir, { recursive: true });
        }
        fs.writeFileSync(path.join(evDir, 'ev-website.png'), buffer);
        fs.writeFileSync(path.join(evDir, 'hero.png'), buffer);
        fs.writeFileSync(path.join(evDir, 'hero.jpg'), buffer);
      } else if (name === 'mobile1' || name === 'mobile2') {
        const mobDir = path.join(process.cwd(), 'public', 'images', 'ev-mobile');
        if (!fs.existsSync(mobDir)) {
          fs.mkdirSync(mobDir, { recursive: true });
        }
        fs.writeFileSync(path.join(mobDir, `${name}.png`), buffer);
        if (name === 'mobile1') {
          fs.writeFileSync(path.join(mobDir, 'app-screen-1.png'), buffer);
          fs.writeFileSync(path.join(mobDir, 'app-screen-1.jpg'), buffer);
        } else {
          fs.writeFileSync(path.join(mobDir, 'app-screen-2.png'), buffer);
          fs.writeFileSync(path.join(mobDir, 'app-screen-2.jpg'), buffer);
        }
      } else {
        const publicDir = path.join(process.cwd(), 'public', 'images', 'junior-junction');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        if (isPng) {
          fs.writeFileSync(path.join(publicDir, `${name}.png`), buffer);
        }
        fs.writeFileSync(path.join(publicDir, `${name}.jpg`), buffer);
      }
    } catch {
      // ignore
    }

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': isPng ? 'image/png' : 'image/jpeg',
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
