const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const blogFiles = fs.readdirSync(path.join(ROOT_DIR, 'blog')).filter(f => f.endsWith('.html'));

let brokenLinks = [];
let totalLinks = 0;

blogFiles.forEach(file => {
  const filePath = path.join(ROOT_DIR, 'blog', file);
  const html = fs.readFileSync(filePath, 'utf8');
  const matches = [...html.matchAll(/href=["']([^"'#?]+)["']/g)];
  
  matches.forEach(m => {
    const url = m[1];
    if (url.startsWith('http') || url.startsWith('tel:') || url.startsWith('mailto:') || url === '#') return;
    totalLinks++;
    
    let resolved;
    if (url.startsWith('/')) {
      resolved = path.join(ROOT_DIR, url.slice(1));
    } else {
      resolved = path.resolve(path.join(ROOT_DIR, 'blog'), url);
    }
    
    if (!fs.existsSync(resolved)) {
      brokenLinks.push({ file, link: url, resolved });
    }
  });
});

console.log('Total internal links checked in blog files:', totalLinks);
if (brokenLinks.length === 0) {
  console.log('✓ All internal links in all blog pages are 100% valid!');
} else {
  console.error('Broken links found:', brokenLinks);
  process.exit(1);
}
