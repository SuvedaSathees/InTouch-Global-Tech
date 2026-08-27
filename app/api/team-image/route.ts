import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\46042038-f595-43f5-913a-552d00753f33\\.user_uploaded\\media_1787759979978.jpg';
  
  if (fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);
    
    // Also save a copy to public/images for static serving
    try {
      const publicDir = path.join(process.cwd(), 'public', 'images');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, 'team-workspace-table.jpg'), buffer);
    } catch (e) {
      // ignore
    }

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }
  
  return new NextResponse('Image not found', { status: 404 });
}
