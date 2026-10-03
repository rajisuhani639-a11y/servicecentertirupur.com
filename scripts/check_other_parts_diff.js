const fs = require('fs');
const path = require('path');

['ac', 'fridge', 'tv'].forEach(folder => {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  let duplicatesFound = 0;
  files.forEach(f => {
    const content = fs.readFileSync(path.join(folder, f), 'utf8');
    let idx = content.search(/<h2[^>]*>[^<]*(?:Types|Models)[^<]*<\/h2>/i);
    if (idx === -1) return;
    const secEnd = content.indexOf('</section>', idx);
    const secHtml = content.slice(idx, secEnd !== -1 ? secEnd : idx + 8000);
    const cards = secHtml.split('<div class="type-card"');
    const partsInFile = [];
    for (let i = 1; i < cards.length; i++) {
      const pMatch = cards[i].match(/(?:Common Parts Checked:|Parts involved:|Parts Checked:)([\s\S]*?)(?=<\/div>|<\/p>|<ul)/i);
      if (pMatch) {
        const partsText = pMatch[1].replace(/<[^>]+>/g, '').trim();
        if (partsInFile.includes(partsText)) {
          console.log(`Duplicate parts in ${folder}/${f}: ${partsText.slice(0, 40)}`);
          duplicatesFound++;
        } else {
          partsInFile.push(partsText);
        }
      }
    }
  });
  console.log(`${folder}: ${duplicatesFound} duplicates found.`);
});
