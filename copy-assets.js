const fs = require('fs');
const path = require('path');

const src1 = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\83027945-99fe-401c-8741-483f0aa0065e\\.user_uploaded\\media_1787831415021.jpg';
const src2 = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\83027945-99fe-401c-8741-483f0aa0065e\\.user_uploaded\\media_1787831419411.jpg';

const dest1 = path.join(__dirname, 'public', 'images', 'konecranes.jpg');
const dest2 = path.join(__dirname, 'public', 'images', 'lorry.jpg');

fs.copyFileSync(src1, dest1);
fs.copyFileSync(src2, dest2);
console.log('Successfully copied assets!');
