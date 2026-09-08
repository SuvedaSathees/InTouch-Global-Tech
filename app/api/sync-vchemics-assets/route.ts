import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const root = process.cwd();
    const v1Src = path.join(root, 'app', '_1', 'v1 image.png');
    const v2Src = path.join(root, 'app', '_1', 'v2 image.png');

    const destDir = path.join(root, 'public', 'images', 'vchemics');
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const results: Record<string, string> = {};

    if (fs.existsSync(v1Src)) {
      const v1Buf = fs.readFileSync(v1Src);
      fs.writeFileSync(path.join(destDir, 'hero.png'), v1Buf);
      fs.writeFileSync(path.join(destDir, 'hero.jpg'), v1Buf);
      fs.writeFileSync(path.join(destDir, 'v1.png'), v1Buf);
      fs.writeFileSync(path.join(destDir, 'v1 image.png'), v1Buf);
      results.v1 = `Successfully copied v1 image (${v1Buf.length} bytes)`;
    } else {
      results.v1 = 'v1 source not found';
    }

    if (fs.existsSync(v2Src)) {
      const v2Buf = fs.readFileSync(v2Src);
      fs.writeFileSync(path.join(destDir, 'products.png'), v2Buf);
      fs.writeFileSync(path.join(destDir, 'products.jpg'), v2Buf);
      fs.writeFileSync(path.join(destDir, 'v2.png'), v2Buf);
      fs.writeFileSync(path.join(destDir, 'v2 image.png'), v2Buf);
      results.v2 = `Successfully copied v2 image (${v2Buf.length} bytes)`;
    } else {
      results.v2 = 'v2 source not found';
    }

    return NextResponse.json({ success: true, results });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
