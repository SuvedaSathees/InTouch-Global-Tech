import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cwd = process.cwd();
    const dirname = __dirname;
    const resolvedPath = path.resolve(cwd, 'app', 'icon.png');
    const exists = fs.existsSync(resolvedPath);
    return NextResponse.json({ cwd, dirname, resolvedPath, exists });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
