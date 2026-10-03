const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const tvDir = path.join(rootDir, 'tv');
const b1 = require('./tv_brands_1_to_10.js');
const b2 = require('./tv_brands_11_to_20.js');
const b3 = require('./tv_brands_21_to_31.js');
const allBrands = [...b1, ...b2, ...b3];

const filesToTest = [
  { filePath: path.join(rootDir, 'tv-repair-service-in-karur.html'), relDir: rootDir, name: 'tv-repair-service-in-karur.html' },
  ...allBrands.map(b => ({
    filePath: path.join(tvDir, b.slug),
    relDir: tvDir,
    name: `tv/${b.slug}`
  }))
];

let brokenLinks = 0;
let totalLinksChecked = 0;

filesToTest.forEach(item => {
  if (!fs.existsSync(item.filePath)) {
    console.error(`File missing: ${item.name}`);
    brokenLinks++;
    return;
  }
  const content = fs.readFileSync(item.filePath, 'utf8');
  
  // Check hrefs
  const hrefMatches = content.matchAll(/href="([^"]+)"/g);
  for (const match of hrefMatches) {
    let href = match[1];
    if (href.startsWith('tel:') || href.startsWith('https://') || href.startsWith('http://') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }
    const cleanHref = href.split('#')[0].split('?')[0];
    if (cleanHref) {
      totalLinksChecked++;
      const targetPath = cleanHref.startsWith('/')
        ? path.join(rootDir, cleanHref)
        : path.resolve(item.relDir, cleanHref);
      if (!fs.existsSync(targetPath)) {
        console.log(`Broken href in ${item.name}: ${href} (resolved: ${targetPath})`);
        brokenLinks++;
      }
    }
  }

  // Check src
  const srcMatches = content.matchAll(/src="([^"]+)"/g);
  for (const match of srcMatches) {
    let src = match[1];
    if (src.startsWith('https://') || src.startsWith('http://') || src.startsWith('data:')) {
      continue;
    }
    const cleanSrc = src.split('?')[0];
    if (cleanSrc) {
      totalLinksChecked++;
      const targetPath = cleanSrc.startsWith('/')
        ? path.join(rootDir, cleanSrc)
        : path.resolve(item.relDir, cleanSrc);
      if (!fs.existsSync(targetPath)) {
        console.log(`Broken src in ${item.name}: ${src} (resolved: ${targetPath})`);
        brokenLinks++;
      }
    }
  }
});

console.log(`Finished link check across ${filesToTest.length} files. Total references checked: ${totalLinksChecked}. Broken links: ${brokenLinks}`);
