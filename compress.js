const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

const files = [
  'logo-branco.png',
  'icon-preparar.png',
  'arrow-curva.png',
  'icon-aplicar.png',
  'icon-sustentar.png',
  'foto1.jpeg',
  'foto2.jpeg'
];

async function main() {
  console.log('Starting image compression...');
  for (const file of files) {
    const srcPath = path.join(publicDir, file);
    if (!fs.existsSync(srcPath)) {
      console.log(`Skipping ${file}: file does not exist`);
      continue;
    }
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const destPath = path.join(publicDir, `${baseName}.webp`);

    const statsBefore = fs.statSync(srcPath);
    console.log(`Optimizing ${file} (${(statsBefore.size / 1024).toFixed(1)} KB)...`);

    try {
      // Compress and convert to webp
      await sharp(srcPath)
        .webp({ quality: 80 })
        .toFile(destPath);

      const statsAfter = fs.statSync(destPath);
      console.log(`-> Saved as ${baseName}.webp (${(statsAfter.size / 1024).toFixed(1)} KB) - Reduction of ${(((statsBefore.size - statsAfter.size) / statsBefore.size) * 100).toFixed(1)}%`);
    } catch (err) {
      console.error(`Error compressing ${file}:`, err.message);
    }
  }
}

main();
