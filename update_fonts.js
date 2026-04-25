const fs = require('fs');
const file = '/Users/mac/Downloads/rccg-house-of-grace/src/pages/AboutUs.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove the Google Fonts import
content = content.replace(/@import url\('https:\/\/fonts\.googleapis\.com.*?;\n/g, '');

// Remove all font-family lines from CSS
content = content.replace(/[ \t]*font-family:[^;]+;\n/g, '');

// Remove the inline fontFamily from the main div
content = content.replace(/fontFamily: "'DM Sans', sans-serif",\n\s*/g, '');

fs.writeFileSync(file, content);
