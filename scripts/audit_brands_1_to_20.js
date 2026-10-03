const b1 = require('./tv_brands_1_to_10.js');
const b2 = require('./tv_brands_11_to_20.js');

const all = [...b1, ...b2];
console.log('Total brands so far:', all.length);

const sentenceMap = new Map();
let duplicateCount = 0;

function extractSentences(text, source) {
  if (!text || typeof text !== 'string') return;
  const parts = text.split(/(?<=[.?!])\s+/);
  for (const p of parts) {
    const clean = p.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '');
    if (clean.length < 25) continue; // ignore short fragments
    if (sentenceMap.has(clean)) {
      console.log(`Duplicate found between ${sentenceMap.get(clean)} and ${source}: "${clean}"`);
      duplicateCount++;
    } else {
      sentenceMap.set(clean, source);
    }
  }
}

for (const brand of all) {
  extractSentences(brand.description, `${brand.name} intro`);
  for (const t of (brand.tvTypes || [])) {
    extractSentences(t.desc, `${brand.name} type ${t.type} desc`);
    extractSentences(t.searchIntent, `${brand.name} type ${t.type} searchIntent`);
    extractSentences(t.whenNeeded, `${brand.name} type ${t.type} whenNeeded`);
    extractSentences(t.checks, `${brand.name} type ${t.type} checks`);
    extractSentences(t.parts, `${brand.name} type ${t.type} parts`);
  }
  for (const p of (brand.problems || [])) {
    extractSentences(p.problem, `${brand.name} prob ${p.problem}`);
    extractSentences(p.val1, `${brand.name} prob val1`);
    extractSentences(p.val2, `${brand.name} prob val2`);
    extractSentences(p.val3, `${brand.name} prob val3`);
  }
}

console.log(`Audit complete. Total duplicate sentences: ${duplicateCount}`);
