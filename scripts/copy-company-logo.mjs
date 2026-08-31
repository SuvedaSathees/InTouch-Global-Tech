import fs from 'fs';
import path from 'path';

const source = path.resolve('app', 'terms', 'logo intouch.png');
const destPublic = path.resolve('public', 'logo.png');
const destImages = path.resolve('public', 'images', 'logo.png');

if (fs.existsSync(source)) {
  fs.copyFileSync(source, destPublic);
  if (!fs.existsSync(path.dirname(destImages))) {
    fs.mkdirSync(path.dirname(destImages), { recursive: true });
  }
  fs.copyFileSync(source, destImages);
  console.log('Successfully copied logo to public/logo.png and public/images/logo.png');
} else {
  console.error('Source logo not found:', source);
}
