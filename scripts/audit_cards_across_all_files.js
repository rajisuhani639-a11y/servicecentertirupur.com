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

const all = getHtmlFiles('.');
let totalCardsFound = 0;
let cardsMissingPricing = 0;
const sampleCards = [];

all.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let idx = content.search(/<h2[^>]*>[^<]*(?:Types|Models|Appliances We Service)[^<]*<\/h2>/i);
  if (idx === -1) return;
  
  const secEnd = content.indexOf('</section>', idx);
  const secHtml = content.slice(idx, secEnd !== -1 ? secEnd : idx + 8000);
  
  // Find cards
  const cards = secHtml.split('<div class="type-card"');
  if (cards.length > 1) {
    for (let i = 1; i < cards.length; i++) {
      totalCardsFound++;
      const card = cards[i];
      const h3Match = card.match(/<h[34][^>]*>(.*?)<\/h[34]>/i);
      const title = h3Match ? h3Match[1].replace(/<[^>]+>/g, '').trim() : 'Unknown';
      const hasPricing = /type-pricing-box|Estimated Service Charges|Estimated Price|Visit\/inspection|Doorstep Inspection/i.test(card);
      const hasParts = /Parts Checked|Parts involved/i.test(card);
      if (!hasPricing) {
        cardsMissingPricing++;
      }
      if (sampleCards.length < 5) {
        sampleCards.push({ file, title, hasParts, hasPricing });
      }
    }
  }
});

console.log('Total type cards in Types sections:', totalCardsFound);
console.log('Cards missing pricing:', cardsMissingPricing);
console.log('Sample cards:', sampleCards);
