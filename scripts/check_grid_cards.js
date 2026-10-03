const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getHtmlFiles('.');
const typeCardStats = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match heading with Types
  const headingMatch = content.match(/<h2[^>]*>([^<]*Types[^<]*)<\/h2>/i);
  if (headingMatch) {
    const heading = headingMatch[1];
    const pos = content.indexOf(headingMatch[0]);
    // Find the enclosing or following grid
    const afterHeading = content.slice(pos, pos + 10000);
    // Find grid div
    const gridMatch = afterHeading.match(/<div class=["'](services-grid|types-grid|fridge-types-grid|grid[^"']*)["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
    if (gridMatch) {
      // Find cards inside this grid
      const cards = [...gridMatch[2].matchAll(/<div class=["']type-card["'][\s\S]*?<\/div>\s*(?=<div class=["']type-card["']|$)/gi)];
      const cardTitles = [];
      const h3s = [...gridMatch[2].matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)];
      h3s.forEach(h => cardTitles.push(h[1].replace(/<[^>]+>/g, '').trim()));
      typeCardStats.push({ file, heading, cardCount: h3s.length, titles: cardTitles });
    } else {
      typeCardStats.push({ file, heading, cardCount: 0, note: 'No grid found' });
    }
  }
});

console.log('Files with Types heading and grid:', typeCardStats.filter(s => s.cardCount > 0).length);
console.log('Files with Types heading but no grid:', typeCardStats.filter(s => s.cardCount === 0).length);
typeCardStats.filter(s => s.cardCount === 0).forEach(s => console.log('NO GRID:', s.file, s.heading));
