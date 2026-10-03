const fs = require('fs');
const path = require('path');

const scDir = 'servicecenter';
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

console.log(`Found ${files.length} service center HTML files.`);

const results = [];

files.forEach(f => {
  const fullPath = path.join(scDir, f);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Extract brand from H1 or title
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const brandTitle = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  // Extract cards from "Home Appliances We Service"
  const sec3Match = content.match(/<h2>[^<]*Home Appliances We Service<\/h2>[\s\S]*?<\/section>/i);
  const cards = [];
  if (sec3Match) {
    const cardMatches = sec3Match[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi);
    if (cardMatches) {
      cardMatches.forEach(cm => {
        cards.push(cm.replace(/<[^>]+>/g, '').trim());
      });
    }
  }

  // Extract appliance sections (e.g. acSection, refrigeratorSection, etc.)
  const sectionMatches = content.match(/<section[^>]*id="([a-zA-Z0-9]+Section)"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/gi);
  const appSections = [];
  if (sectionMatches) {
    sectionMatches.forEach(sm => {
      const id = sm.match(/id="([a-zA-Z0-9]+Section)"/i)[1];
      const h2 = sm.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)[1].replace(/<[^>]+>/g, '').trim();
      appSections.push({ id, h2 });
    });
  }

  results.push({
    file: f,
    brandTitle,
    cardCount: cards.length,
    cards,
    sectionCount: appSections.length,
    appSections
  });
});

console.log('Sample 5 results:');
results.slice(0, 5).forEach(r => {
  console.log(`\nFile: ${r.file} (${r.brandTitle})`);
  console.log(`  Cards (${r.cardCount}): ${r.cards.join(' | ')}`);
  console.log(`  Sections (${r.sectionCount}): ${r.appSections.map(s => s.id + ': ' + s.h2).join(' | ')}`);
});

// Check if any file has 0 cards
const zeroCards = results.filter(r => r.cardCount === 0);
console.log(`\nFiles with 0 cards in 'Home Appliances We Service': ${zeroCards.length}`);
if (zeroCards.length > 0) {
  zeroCards.forEach(z => console.log('  ', z.file));
}
