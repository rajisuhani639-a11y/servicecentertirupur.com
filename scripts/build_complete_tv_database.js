// Full 31-brand clean data builder with automated uniqueness verification
// Ensures 0 duplicated sentences across all 31 brands
// Karur only, no AI buzzwords, no prompt words

const fs = require('fs');
const path = require('path');

// Helper to ensure sentences are unique
const usedSentences = new Set();
function uniqueSentence(sentence, brandName, field) {
  const norm = sentence.replace(new RegExp(brandName, 'gi'), 'BRAND').replace(/\s+/g, ' ').trim();
  if (usedSentences.has(norm)) {
    throw new Error(`Duplicate sentence detected in ${brandName} [${field}]: "${sentence.substring(0, 60)}"`);
  }
  usedSentences.add(norm);
  return sentence;
}

console.log("Ready to build complete unique 31-brand database.");
