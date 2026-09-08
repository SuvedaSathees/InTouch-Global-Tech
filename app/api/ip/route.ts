import { NextResponse } from 'next/server';
import os from 'os';

export const dynamic = 'force-dynamic';

export async function GET() {
  const interfaces = os.networkInterfaces();
  const ips: { name: string; address: string; url: string }[] = [];

  for (const [name, netList] of Object.entries(interfaces)) {
    if (!netList) continue;
    for (const net of netList) {
      // In Node 18+, family can be 'IPv4' or number 4
      const isIPv4 = net.family === 'IPv4' || (net.family as unknown as number) === 4;
      if (isIPv4 && !net.internal) {
        ips.push({
          name,
          address: net.address,
          url: `http://${net.address}:3000`
        });
      }
    }
  }

  return NextResponse.json({
    success: true,
    message: 'Mobile URLs',
    ips,
  });
}
