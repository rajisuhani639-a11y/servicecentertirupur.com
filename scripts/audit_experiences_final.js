const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('scripts/site_catalog.json', 'utf8'));

const heavyWords = [
  'promptly', 'comprehensive', 'facilitate', 'utilize', 'undertake',
  'meticulous', 'sophisticated', 'seamless', 'tailored', 'robust',
  'efficient resolution', 'advanced troubleshooting', 'technical intervention',
  'diagnostic assessment', 'customer satisfaction was achieved',
  'professional expertise', 'prompt assistance'
];

let totalCards = 0;
let heavyFound = 0;
let samePageDupes = 0;
const allCardBodies = new Map();
let crossPageDupes = 0;

catalog.forEach(item => {
  if (item.file === 'sitemap.html') return;
  const content = fs.readFileSync(item.file, 'utf8');
  const h2Regex = /<h2[^>]*>[^<]*Recent[^<]*Experiences in Erode<\/h2>/i;
  const h2Match = content.match(h2Regex);
  if (!h2Match) return;
  const h2Pos = content.indexOf(h2Match[0]);
  const secStart = content.lastIndexOf('<section', h2Pos);
  const secEnd = content.indexOf('</section>', h2Pos) + '</section>'.length;
  const fullSec = content.substring(secStart, secEnd);

  const cards = [...fullSec.matchAll(/<p style="font-size: 0\.88rem;[^"]*"[^>]*>([\s\S]*?)<\/p>/gi)];
  const pageCardBodies = new Set();

  cards.forEach(c => {
    totalCards++;
    const text = c[1].trim();

    // Check heavy words
    heavyWords.forEach(hw => {
      if (text.toLowerCase().includes(hw)) {
        heavyFound++;
        console.warn(`Heavy word "${hw}" found in ${item.file}`);
      }
    });

    // Check same page duplicates
    if (pageCardBodies.has(text)) {
      samePageDupes++;
      console.warn(`Same-page duplicate in ${item.file}: "${text.slice(0, 50)}..."`);
    } else {
      pageCardBodies.add(text);
    }

    if (allCardBodies.has(text)) {
      crossPageDupes++;
    } else {
      allCardBodies.set(text, item.file);
    }
  });
});

console.log(`\nAudit Results for Customer Experiences:`);
console.log(`Total experience cards audited: ${totalCards}`);
console.log(`Heavy words found: ${heavyFound}`);
console.log(`Same-page duplicate cards: ${samePageDupes}`);
console.log(`Unique card bodies across entire site: ${allCardBodies.size}`);
