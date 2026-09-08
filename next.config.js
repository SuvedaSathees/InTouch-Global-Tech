/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

try {
  // 1. Sync Magnertia ERP
  const magSrc = path.join(__dirname, 'app', '_1', 'magnertiaerp.png');
  const magDir = path.join(__dirname, 'public', 'images', 'magnertia-erp');
  if (!fs.existsSync(magDir)) fs.mkdirSync(magDir, { recursive: true });
  if (fs.existsSync(magSrc)) {
    fs.copyFileSync(magSrc, path.join(magDir, 'magnertiaerp.png'));
    fs.copyFileSync(magSrc, path.join(magDir, 'hero.png'));
    fs.copyFileSync(magSrc, path.join(magDir, 'hero.jpg'));
  }

  // 2. Sync Robotics ERP
  const rpcSrc = path.join(__dirname, 'app', '_1', 'roboticerp.png');
  const rpcDir = path.join(__dirname, 'public', 'images', 'rpc-erp');
  if (!fs.existsSync(rpcDir)) fs.mkdirSync(rpcDir, { recursive: true });
  if (fs.existsSync(rpcSrc)) {
    fs.copyFileSync(rpcSrc, path.join(rpcDir, 'roboticerp.png'));
    fs.copyFileSync(rpcSrc, path.join(rpcDir, 'hero.png'));
    fs.copyFileSync(rpcSrc, path.join(rpcDir, 'hero.jpg'));
  }

  // 3. Sync EV Website
  const evSrc = path.join(__dirname, 'app', '_1', 'ev website.png');
  const evDir = path.join(__dirname, 'public', 'images', 'ev-station');
  if (!fs.existsSync(evDir)) fs.mkdirSync(evDir, { recursive: true });
  if (fs.existsSync(evSrc)) {
    fs.copyFileSync(evSrc, path.join(evDir, 'ev-website.png'));
    fs.copyFileSync(evSrc, path.join(evDir, 'hero.png'));
    fs.copyFileSync(evSrc, path.join(evDir, 'hero.jpg'));
  }

  // 4. Sync EV Mobile Application Images
  const mobDir = path.join(__dirname, 'public', 'images', 'ev-mobile');
  if (!fs.existsSync(mobDir)) fs.mkdirSync(mobDir, { recursive: true });

  const mob1Src = path.join(__dirname, 'app', '_1', 'mobile1 .png');
  const mob1SrcAlt = path.join(__dirname, 'app', '_1', 'mobile1.png');
  const actualMob1 = fs.existsSync(mob1Src) ? mob1Src : fs.existsSync(mob1SrcAlt) ? mob1SrcAlt : null;
  if (actualMob1) {
    fs.copyFileSync(actualMob1, path.join(mobDir, 'mobile1.png'));
    fs.copyFileSync(actualMob1, path.join(mobDir, 'app-screen-1.png'));
    fs.copyFileSync(actualMob1, path.join(mobDir, 'app-screen-1.jpg'));
  }

  const mob2Src = path.join(__dirname, 'app', '_1', 'mobile2.png');
  if (fs.existsSync(mob2Src)) {
    fs.copyFileSync(mob2Src, path.join(mobDir, 'mobile2.png'));
    fs.copyFileSync(mob2Src, path.join(mobDir, 'app-screen-2.png'));
    fs.copyFileSync(mob2Src, path.join(mobDir, 'app-screen-2.jpg'));
  }

  // 5. Sync Vchemics Website Images
  const vchemicsDir = path.join(__dirname, 'public', 'images', 'vchemics');
  if (!fs.existsSync(vchemicsDir)) fs.mkdirSync(vchemicsDir, { recursive: true });

  const v1Src = path.join(__dirname, 'app', '_1', 'v1 image.png');
  if (fs.existsSync(v1Src)) {
    fs.copyFileSync(v1Src, path.join(vchemicsDir, 'v1 image.png'));
    fs.copyFileSync(v1Src, path.join(vchemicsDir, 'v1.png'));
    fs.copyFileSync(v1Src, path.join(vchemicsDir, 'hero.png'));
    fs.copyFileSync(v1Src, path.join(vchemicsDir, 'hero.jpg'));
  }

  const v2Src = path.join(__dirname, 'app', '_1', 'v2 image.png');
  if (fs.existsSync(v2Src)) {
    fs.copyFileSync(v2Src, path.join(vchemicsDir, 'v2 image.png'));
    fs.copyFileSync(v2Src, path.join(vchemicsDir, 'v2.png'));
    fs.copyFileSync(v2Src, path.join(vchemicsDir, 'products.png'));
    fs.copyFileSync(v2Src, path.join(vchemicsDir, 'products.jpg'));
  }
} catch (err) {
  console.error('Error syncing project assets:', err);
}

// Automatically print local network IP in terminal for mobile testing
try {
  const os = require('os');
  const nets = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if ((net.family === 'IPv4' || net.family === 4) && !net.internal) {
        ips.push({ iface: name, ip: net.address });
      }
    }
  }
  if (ips.length > 0) {
    console.log('\n\x1b[36m%s\x1b[0m', '════════════════════════════════════════════════════════════');
    console.log('\x1b[1m\x1b[32m%s\x1b[0m', '  📱 MOBILE TESTING URL:');
    ips.forEach(item => {
      console.log(`     • [${item.iface}]: \x1b[1m\x1b[33mhttp://${item.ip}:3000\x1b[0m`);
      console.log(`       Direct Vchemics: \x1b[34mhttp://${item.ip}:3000/projects/vchemics-website\x1b[0m`);
    });
    console.log('\x1b[36m%s\x1b[0m\n', '════════════════════════════════════════════════════════════');
  }
} catch (e) {}

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
