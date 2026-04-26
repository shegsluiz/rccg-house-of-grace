const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const optimizedDir = path.join(publicDir, 'optimized');

if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

const files = fs.readdirSync(publicDir);
const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Found ${imageFiles.length} images to optimize.`);

imageFiles.forEach(file => {
  const input = path.join(publicDir, file);
  const ext = path.extname(file);
  const name = path.basename(file, ext);
  const output = path.join(optimizedDir, `${name}.webp`);

  console.log(`Optimizing ${file} -> ${name}.webp`);
  try {
    // We use sharp-cli via npx. We also resize large images to a max width of 1920px.
    execSync(`npx -y sharp-cli -i "${input}" -o "${output}" resize 1920 --withoutEnlargement`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to optimize ${file}:`, err.message);
  }
});

console.log('Optimization complete.');
