const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\46042038-f595-43f5-913a-552d00753f33\\.user_uploaded\\media_1787759979978.jpg';
const destDir = path.join(process.cwd(), 'public', 'images');
const dest = path.join(destDir, 'team-workspace-table.jpg');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('Copied successfully to', dest);
