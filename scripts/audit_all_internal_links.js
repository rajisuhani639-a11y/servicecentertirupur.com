const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') res = res.concat(walk(p));
    } else if (f.endsWith('.html')) res.push(p);
  });
  return res;
}

const files = walk(ROOT_DIR);
console.log('Total HTML files:', files.length);

let broken = 0;
let checked = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const dir = path.dirname(f);
  
  const regex = /href=["']([^"'#]+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    let link = match[1].trim();
    if (!link || link.startsWith('http://') || link.startsWith('https://') || link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('javascript:') || link.startsWith('whatsapp:')) continue;
    
    checked++;
    let resolved;
    if (link.startsWith('/')) {
      resolved = path.join(ROOT_DIR, link.slice(1));
    } else {
      resolved = path.join(dir, link);
    }
    
    // Normalize path if pointing to directory or root
    if (link === '/' || link === '') {
      resolved = path.join(ROOT_DIR, 'index.html');
    }

    if (!fs.existsSync(resolved)) {
      console.error(`[BROKEN LINK] in ${path.relative(ROOT_DIR, f)} -> "${link}" (resolved: ${path.relative(ROOT_DIR, resolved)})`);
      broken++;
    }
  }
});

console.log(`========================================`);
console.log(`Internal Link Audit Completed!`);
console.log(`Checked: ${checked} links | Broken: ${broken}`);
console.log(`========================================`);
