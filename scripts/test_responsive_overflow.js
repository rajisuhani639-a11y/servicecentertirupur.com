const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];
const executablePath = edgePaths.find(p => fs.existsSync(p));

if (!executablePath) {
  console.error('Edge executable not found');
  process.exit(1);
}

const viewports = [
  { width: 320, height: 640, name: '320px (Small Mobile)' },
  { width: 360, height: 740, name: '360px (Standard Mobile)' },
  { width: 375, height: 667, name: '375px (iPhone SE)' },
  { width: 390, height: 844, name: '390px (iPhone 12/13/14)' },
  { width: 412, height: 915, name: '412px (Pixel / Samsung Galaxy)' },
  { width: 430, height: 932, name: '430px (iPhone Pro Max)' },
  { width: 768, height: 1024, name: '768px (Tablet)' },
  { width: 1024, height: 768, name: '1024px (Small Desktop)' },
  { width: 1280, height: 800, name: '1280px (Standard Desktop)' },
  { width: 1366, height: 768, name: '1366px (Laptop)' },
  { width: 1440, height: 900, name: '1440px (Large Desktop)' },
  { width: 1920, height: 1080, name: '1920px (FHD Desktop)' }
];

const testFiles = [
  'index.html',
  'servicecenter/index.html',
  'servicecenter/samsung-service-center-karur.html',
  'servicecenter/voltas-service-center-karur.html',
  'ac/voltas-ac-repair-service-in-karur.html',
  'sitemap.html'
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let totalIssues = 0;

  for (const relFile of testFiles) {
    const fileUrl = 'file:///' + path.resolve(__dirname, '..', relFile).replace(/\\/g, '/');
    console.log(`\nTesting page: ${relFile}`);

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(fileUrl, { waitUntil: 'load' });

      const overflowData = await page.evaluate(() => {
        const docWidth = document.documentElement.offsetWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const windowWidth = window.innerWidth;
        const hasOverflow = scrollWidth > windowWidth + 1; // 1px threshold for subpixel

        let overflowingElements = [];
        if (hasOverflow) {
          const all = document.querySelectorAll('*');
          all.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > windowWidth + 1) {
              overflowingElements.push({
                tag: el.tagName,
                className: el.className,
                id: el.id,
                right: rect.right,
                width: rect.width
              });
            }
          });
        }

        return {
          windowWidth,
          scrollWidth,
          hasOverflow,
          overflowCount: overflowingElements.length,
          samples: overflowingElements.slice(0, 3)
        };
      });

      if (overflowData.hasOverflow) {
        console.error(`  ❌ [FAIL] ${vp.name}: Scroll width ${overflowData.scrollWidth}px > Viewport ${vp.width}px!`);
        overflowData.samples.forEach(s => {
          console.error(`     Element <${s.tag} class="${s.className}" id="${s.id}"> right edge: ${s.right}px`);
        });
        totalIssues++;
      } else {
        console.log(`  ✓ [PASS] ${vp.name}: Clean (0 horizontal overflow)`);
      }
    }
  }

  await browser.close();

  console.log('\n====================================================');
  if (totalIssues === 0) {
    console.log('RESPONSIVENESS TEST PASSED: 0 horizontal overflow issues across all viewports (320px - 1920px)!');
  } else {
    console.error(`RESPONSIVENESS TEST FAILED: ${totalIssues} overflow issues detected.`);
    process.exit(1);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
