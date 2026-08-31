const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'app', 'terms', 'sri.png');
const destDir = path.join(__dirname, '..', 'public', 'images');
const dest1 = path.join(destDir, 'sri.png');
const dest2 = path.join(__dirname, '..', 'public', 'sri.png');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest1);
  fs.copyFileSync(src, dest2);
  console.log('Successfully copied sri.png to', dest1, 'and', dest2);
} else {
  console.error('Source file not found:', src);
}
