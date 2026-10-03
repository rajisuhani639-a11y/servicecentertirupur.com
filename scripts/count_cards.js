const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
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

const allHtml = getHtmlFiles('.');
console.log('Total HTML files:', allHtml.length);

let totalTypeCards = 0;
let cardsWithPricing = 0;
let cardsWithParts = 0;

allHtml.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const cardMatches = content.match(/<div class=["']type-card["'][\s\S]*?<\/div>\s*<\/div>/gi);
  if (cardMatches) {
    totalTypeCards += cardMatches.length;
    cardMatches.forEach(card => {
      if (/₹|price|pricing|charge|cost/i.test(card)) {
        cardsWithPricing++;
      }
      if (/part|parts checked|parts involved/i.test(card)) {
        cardsWithParts++;
      }
    });
  }
});

console.log('Total type cards found:', totalTypeCards);
console.log('Cards with pricing:', cardsWithPricing);
console.log('Cards with parts:', cardsWithParts);
