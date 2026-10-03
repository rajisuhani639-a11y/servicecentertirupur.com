const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

const rootDir = path.resolve(__dirname, '..');

let totalLinksChecked = 0;
let brokenLinks = 0;
let brokenAssets = 0;

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Check hrefs
  const hrefMatches = content.match(/href="([^"#:]+)"/g) || [];
  hrefMatches.forEach(hm => {
    totalLinksChecked++;
    const raw = hm.replace('href="', '').replace('"', '');
    if (raw.startsWith('tel:') || raw.startsWith('mailto:') || raw.startsWith('http') || raw.startsWith('javascript:')) return;

    let targetPath;
    if (raw.startsWith('/')) {
      targetPath = path.join(rootDir, raw.slice(1));
    } else {
      targetPath = path.join(path.dirname(file), raw);
    }

    if (!fs.existsSync(targetPath)) {
      console.log(`Broken href in ${file}: "${raw}" -> resolved: ${targetPath}`);
      if (raw.includes('.html')) brokenLinks++;
      else brokenAssets++;
    }
  });

  // Check srcs
  const srcMatches = content.match(/src="([^"#:]+)"/g) || [];
  srcMatches.forEach(sm => {
    totalLinksChecked++;
    const raw = sm.replace('src="', '').replace('"', '');
    if (raw.startsWith('http') || raw.startsWith('data:') || raw.startsWith('javascript:')) return;

    let targetPath;
    if (raw.startsWith('/')) {
      targetPath = path.join(rootDir, raw.slice(1));
    } else {
      targetPath = path.join(path.dirname(file), raw);
    }

    if (!fs.existsSync(targetPath)) {
      console.log(`Broken src in ${file}: "${raw}" -> resolved: ${targetPath}`);
      brokenAssets++;
    }
  });
});

console.log('==============================================');
console.log(`Total links & assets checked: ${totalLinksChecked}`);
console.log(`Broken internal HTML links: ${brokenLinks}`);
console.log(`Broken asset references: ${brokenAssets}`);
console.log('==============================================');
