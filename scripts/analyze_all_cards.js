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
const report = {};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match any element with class containing type-card or service-card inside a types section
  const cardRegex = /<div class="type-card"[\s\S]*?<\/div>\s*<\/div>/gi;
  // Let's find cards more reliably
  const cardStarts = [...content.matchAll(/<div class=["']type-card["'][^>]*>/gi)];
  if (cardStarts.length > 0) {
    const cardTitles = [];
    cardStarts.forEach(cs => {
      const idx = cs.index;
      // find next h3 or h4
      const h3Match = content.slice(idx, idx + 400).match(/<h[34][^>]*>(.*?)<\/h[34]>/i);
      if (h3Match) {
        cardTitles.push(h3Match[1].replace(/<[^>]+>/g, '').trim());
      }
    });
    report[file] = {
      cardCount: cardStarts.length,
      titles: cardTitles
    };
  }
});

console.log('Files with type-card class:', Object.keys(report).length);
// Let's see some samples
Object.entries(report).slice(0, 10).forEach(([f, data]) => {
  console.log(`${f} (${data.cardCount} cards):`, data.titles);
});
