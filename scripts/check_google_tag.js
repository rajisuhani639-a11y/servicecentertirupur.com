const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

let correctTagCount = 0;
let oldTagMatches = 0;
let multipleTagCount = 0;

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/G-[A-Z0-9]+/g) || [];
  const uniqueG = Array.from(new Set(matches));

  if (uniqueG.length === 1 && uniqueG[0] === 'G-6B70TN6HP') {
    correctTagCount++;
  } else {
    console.log(`Tag anomaly in ${f}:`, matches);
    if (matches.some(m => m !== 'G-6B70TN6HP')) oldTagMatches++;
    if (matches.length > 2) multipleTagCount++; // 2 is standard: 1 in script src, 1 in gtag('config')
  }
});

console.log(`Files with exact G-6B70TN6HP: ${correctTagCount} / ${allFiles.length}`);
console.log(`Old tag occurrences: ${oldTagMatches}`);
console.log(`Multiple conflicting tags: ${multipleTagCount}`);
