import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const root = process.cwd();
    const apiDir = path.resolve(root, 'app', 'api');
    const dirs = ['delete-app-icons', 'favicon-setup', 'run-favicon-setup'];
    const deleted = [];
    for (const d of dirs) {
      const full = path.join(apiDir, d);
      if (fs.existsSync(full)) {
        fs.rmSync(full, { recursive: true, force: true });
        deleted.push(d);
      }
    }
    return NextResponse.json({ success: true, deleted });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
