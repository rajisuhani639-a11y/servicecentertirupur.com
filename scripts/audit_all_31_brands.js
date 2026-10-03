const fs = require('fs');
const b1to10 = require('./tv_brands_1_to_10.js');
const b11to20 = require('./tv_brands_11_to_20.js');
const b21to25 = require('./build_tv_brands_21_to_31_unique.js');
const b26to31 = require('./data_brands_26_to_31.js');

const all31 = [...b1to10, ...b11to20, ...b21to25, ...b26to31];
console.log(`Total brands loaded: ${all31.length}`);

const map = new Map();
let duplicateCount = 0;

function checkText(text, src) {
  if (!text || typeof text !== 'string') return;
  const parts = text.split(/(?<=[.?!])\s+/);
  for (const p of parts) {
    const clean = p.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '');
    if (clean.length < 25) continue;
    if (map.has(clean)) {
      console.warn(`DUPLICATE [${duplicateCount + 1}]: "${clean}"`);
      console.warn(`   -> First seen in: ${map.get(clean)}`);
      console.warn(`   -> Re-seen in:    ${src}\n`);
      duplicateCount++;
    } else {
      map.set(clean, src);
    }
  }
}

for (const b of all31) {
  checkText(b.description, `${b.name} intro`);
  for (const t of (b.tvTypes || [])) {
    checkText(t.desc, `${b.name} type ${t.title} desc`);
    checkText(t.searchIntent, `${b.name} type ${t.title} searchIntent`);
    checkText(t.whenNeeded, `${b.name} type ${t.title} whenNeeded`);
    checkText(t.checks, `${b.name} type ${t.title} checks`);
    checkText(t.parts, `${b.name} type ${t.title} parts`);
  }
  for (const p of (b.problems || [])) {
    checkText(p.val1, `${b.name} prob ${p.title} val1`);
    checkText(p.val2, `${b.name} prob ${p.title} val2`);
    checkText(p.val3, `${b.name} prob ${p.title} val3`);
  }
}

console.log(`Total unique sentences across all 31 brands: ${map.size}`);
console.log(`Total duplicates detected: ${duplicateCount}`);
