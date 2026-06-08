const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2
  });
  const fileUrl = 'file://' + path.resolve(__dirname, 'og-template.html').replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800); // let webfonts settle
  await page.screenshot({ path: 'og-image.png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();
  console.log('og-image.png created');
})();
