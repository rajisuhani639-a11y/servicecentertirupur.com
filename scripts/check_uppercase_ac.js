const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (file === '.git' || file === 'node_modules') return;
    if (fs.statSync(p).isDirectory()) {
      searchDir(p);
    } else if (p.endsWith('.html') || p.endsWith('.xml') || p.endsWith('.js')) {
      const content = fs.readFileSync(p, 'utf8');
      if (content.includes('/AC/') || content.includes('href="AC/')) {
        console.log('Found uppercase AC in:', p);
      }
    }
  });
}

searchDir('.');
console.log('Uppercase AC check complete.');
