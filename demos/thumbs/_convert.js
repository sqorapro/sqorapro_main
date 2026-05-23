const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convertToWebp(name, quality = 55) {
  const input = path.join(__dirname, name + '.png');
  const output = path.join(__dirname, name + '.webp');
  await sharp(input)
    .resize(900)
    .webp({ quality })
    .toFile(output);
  const size = fs.statSync(output).size;
  console.log(`${name}.webp — ${(size / 1024).toFixed(1)} kb (quality ${quality})`);
  return size;
}

(async () => {
  for (const name of ['altyn-ascent', 'architectural-serenity', 'golden-ratio-law']) {
    let q = 65;
    let size = Infinity;
    while (size > 100 * 1024 && q >= 20) {
      size = await convertToWebp(name, q);
      if (size > 100 * 1024) q -= 10;
    }
  }
  console.log('Done.');
})();
