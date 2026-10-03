const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && f !== 'node_modules' && f !== '.git') {
      res = res.concat(walk(p));
    } else if (f.endsWith('.html')) {
      res.push(p);
    }
  });
  return res;
}

const files = walk(ROOT_DIR);
let imgErrors = 0;
let totalImgs = 0;
let assetErrors = 0;
let totalAssets = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  
  // 1. Check img tags
  const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  imgMatches.forEach(src => {
    totalImgs++;
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return;
    }
    let resolved;
    if (src.startsWith('/')) {
      resolved = path.join(ROOT_DIR, src.substring(1));
    } else {
      resolved = path.resolve(path.dirname(f), src);
    }
    if (!fs.existsSync(resolved)) {
      console.error(`Broken img in ${path.relative(ROOT_DIR, f)}: ${src} -> ${resolved}`);
      imgErrors++;
    }
  });

  // 2. Check link rel=icon, stylesheet, manifest
  const linkMatches = [...content.matchAll(/<link[^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
  linkMatches.forEach(href => {
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
      return;
    }
    totalAssets++;
    let resolved;
    if (href.startsWith('/')) {
      resolved = path.join(ROOT_DIR, href.substring(1));
    } else {
      resolved = path.resolve(path.dirname(f), href);
    }
    if (!fs.existsSync(resolved)) {
      console.error(`Broken asset link in ${path.relative(ROOT_DIR, f)}: ${href} -> ${resolved}`);
      assetErrors++;
    }
  });
});

console.log(`========================================`);
console.log(`Asset & Image Audit Completed:`);
console.log(`HTML files scanned: ${files.length}`);
console.log(`Total <img> tags: ${totalImgs} | Broken: ${imgErrors}`);
console.log(`Total <link> assets: ${totalAssets} | Broken: ${assetErrors}`);
console.log(`========================================`);
