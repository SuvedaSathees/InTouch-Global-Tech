import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const mod = await import('@/components/sections/team-round-table');
    return NextResponse.json({ ok: true, keys: Object.keys(mod) });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
