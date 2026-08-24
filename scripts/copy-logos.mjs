import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('app', 'logo copy');
const destDir = path.resolve('public', 'logos');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.svg') || file.endsWith('.jpg')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
      console.log(`Copied: ${file}`);
    }
  }
}
