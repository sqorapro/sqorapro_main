const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('https://proud-dream-8109.sqorapros.workers.dev', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  const outPath = path.join(__dirname, 'tg-miniapp.png');
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 800 } });
  console.log('Screenshot saved:', outPath);
  await browser.close();
})();
