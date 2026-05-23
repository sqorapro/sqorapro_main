const { chromium } = require('playwright');
const path = require('path');

const SITES = [
  { url: 'https://altyn-ascent.sqorapros.workers.dev', out: 'altyn-ascent.png' },
  { url: 'https://architectural-serenity.sqorapros.workers.dev', out: 'architectural-serenity.png' },
  { url: 'https://golden-ratio-law.sqorapros.workers.dev', out: 'golden-ratio-law.png' },
];

(async () => {
  const browser = await chromium.launch();
  for (const site of SITES) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    const outPath = path.join(__dirname, site.out);
    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    console.log('Screenshot saved:', outPath);
    await page.close();
  }
  await browser.close();
})();
