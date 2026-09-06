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

  // 4. Sync Royal Suvai Video
  const vidSrc = path.join(__dirname, 'app', '_1', 'royalsuvai.mp4');
  const vidDir = path.join(__dirname, 'public', 'videos');
  if (!fs.existsSync(vidDir)) fs.mkdirSync(vidDir, { recursive: true });
  if (fs.existsSync(vidSrc)) {
    fs.copyFileSync(vidSrc, path.join(vidDir, 'royalsuvai.mp4'));
    const imgDir = path.join(__dirname, 'public', 'images');
    fs.copyFileSync(vidSrc, path.join(imgDir, 'royalsuvai.mp4'));
  }

  // 5. Sync EV Mobile Application Images
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
} catch (err) {
  console.error('Error syncing project assets:', err);
}

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
