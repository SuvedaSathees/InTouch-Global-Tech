import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\46042038-f595-43f5-913a-552d00753f33\\wooden_boardroom_table_1787759067670.jpg';
  
  if (fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }
  
  return new NextResponse('Image not found', { status: 404 });
}
