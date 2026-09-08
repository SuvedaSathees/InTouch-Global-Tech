import { NextResponse } from 'next/server';
import os from 'os';

export const dynamic = 'force-dynamic';

export async function GET() {
  const interfaces = os.networkInterfaces();
  const addresses: { iface: string; address: string }[] = [];

  for (const [name, ifaceList] of Object.entries(interfaces)) {
    if (!ifaceList) continue;
    for (const net of ifaceList) {
      // IPv4 and non-internal
      if ((net.family === 'IPv4' || (net as any).family === 4) && !net.internal) {
        addresses.push({ iface: name, address: net.address });
      }
    }
  }

  return NextResponse.json({ addresses });
}
