const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') {
        res = res.concat(getHtmlFiles(full));
      }
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const htmlFiles = getHtmlFiles('.');
let brokenCount = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const hrefs = [...content.matchAll(/href=["']([^"'#?]+)["']/gi)].map(m => m[1]);

  hrefs.forEach(h => {
    if (h.startsWith('http://') || h.startsWith('https://') || h.startsWith('tel:') || h.startsWith('mailto:') || h.startsWith('javascript:')) return;
    if (h.endsWith('.css') || h.endsWith('.js') || h.endsWith('.png') || h.endsWith('.jpg') || h.endsWith('.svg') || h.endsWith('.ico') || h.endsWith('.webmanifest')) return;
    
    let target = '';
    if (h.startsWith('/')) {
      target = '.' + h;
    } else {
      target = path.join(dir, h);
    }
    
    if (!fs.existsSync(target)) {
      brokenCount++;
      if (brokenCount <= 10) {
        console.log('Broken link in ' + file + ' -> ' + h + ' (resolved: ' + target + ')');
      }
    }
  });
});

console.log('Link verification complete. Broken links found:', brokenCount);
