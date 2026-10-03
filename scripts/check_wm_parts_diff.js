const fs = require('fs');
const path = require('path');

const wmFiles = fs.readdirSync('washing-machine').filter(f => f.endsWith('.html'));

wmFiles.forEach(f => {
  const content = fs.readFileSync(path.join('washing-machine', f), 'utf8');
  let idx = content.search(/<h2[^>]*>[^<]*(?:Types|Models)[^<]*<\/h2>/i);
  if (idx === -1) return;
  const secEnd = content.indexOf('</section>', idx);
  const secHtml = content.slice(idx, secEnd !== -1 ? secEnd : idx + 8000);
  const cards = secHtml.split('<div class="type-card"');
  if (cards.length > 2) {
    const card1Parts = (cards[1].match(/Common Parts Checked:<\/strong>(.*?)(?=<\/div>|<\/p>|<ul)/i) || ['',''])[1].trim();
    const card2Parts = (cards[2].match(/Common Parts Checked:<\/strong>(.*?)(?=<\/div>|<\/p>|<ul)/i) || ['',''])[1].trim();
    if (card1Parts === card2Parts && card1Parts.length > 0) {
      console.log(`DUPLICATE PARTS in ${f}:`);
      console.log('  Parts:', card1Parts);
    }
  }
});
console.log('Verification of WM card parts differentiation complete.');
