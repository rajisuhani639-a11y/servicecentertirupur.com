// Master Generator for Brands 21-31
// Generates completely unique, brand-tailored content with zero duplicate sentences

const fs = require('fs');
const b1 = require('./tv_brands_1_to_10.js');
const b2 = require('./tv_brands_11_to_20.js');

const globalSentenceSet = new Map();
let duplicateCount = 0;

function checkAndRegister(text, source) {
  if (!text || typeof text !== 'string') return;
  const parts = text.split(/(?<=[.?!])\s+/);
  for (const p of parts) {
    const clean = p.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '');
    if (clean.length < 25) continue;
    if (globalSentenceSet.has(clean)) {
      console.warn(`DUPE DETECTED [${duplicateCount + 1}]: "${clean}" in ${source} (previously in ${globalSentenceSet.get(clean)})`);
      duplicateCount++;
    } else {
      globalSentenceSet.set(clean, source);
    }
  }
}

// 1. Register all sentences from Brands 1 to 20
for (const b of [...b1, ...b2]) {
  checkAndRegister(b.description, `${b.name} intro`);
  for (const t of (b.tvTypes || [])) {
    checkAndRegister(t.desc, `${b.name} type ${t.title} desc`);
    checkAndRegister(t.searchIntent, `${b.name} type ${t.title} searchIntent`);
    checkAndRegister(t.whenNeeded, `${b.name} type ${t.title} whenNeeded`);
    checkAndRegister(t.checks, `${b.name} type ${t.title} checks`);
    checkAndRegister(t.parts, `${b.name} type ${t.title} parts`);
  }
  for (const p of (b.problems || [])) {
    checkAndRegister(p.val1, `${b.name} prob ${p.title} val1`);
    checkAndRegister(p.val2, `${b.name} prob ${p.title} val2`);
    checkAndRegister(p.val3, `${b.name} prob ${p.title} val3`);
  }
}

console.log(`Base registry loaded: ${globalSentenceSet.size} unique sentences from Brands 1 to 20.`);
