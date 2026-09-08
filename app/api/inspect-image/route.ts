import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const root = process.cwd();
    const dir = path.join(root, 'app', 'terms');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
    const stats: Record<string, any> = {};
    for (const f of files) {
      const p = path.join(dir, f);
      const buf = fs.readFileSync(p);
      if (buf.length > 24) {
        const w = buf.readUInt32BE(16);
        const h = buf.readUInt32BE(20);
        stats[f] = { size: buf.length, width: w, height: h };
      }
    }
    return NextResponse.json({ stats });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
