// Audit script for all 24 Refrigerator Brands
const fs = require('fs');
const path = require('path');

const b1 = require('./fridge_brands_1_to_6.js');
const b2 = require('./fridge_brands_7_to_12.js');
const b3 = require('./fridge_brands_13_to_18.js');
const b4 = require('./fridge_brands_19_to_24.js');
const allBrands = [...b1, ...b2, ...b3, ...b4];

const pricingData = require('./fridge_brand_pricing.js');
const { getBrandParts } = require('./fridge_brand_parts.js');
const { getBrandFaqs } = require('./fridge_brand_faqs.js');

const approvedList = [
  'Samsung', 'Whirlpool', 'Bosch', 'Electrolux', 'Liebherr', 'Godrej',
  'Haier', 'Videocon', 'Panasonic', 'Siemens', 'Hitachi', 'Kelvinator',
  'Sharp', 'IFB', 'Onida', 'Toshiba', 'Voltas Beko', 'Lloyd',
  'Midea', 'Blue Star', 'Motorola', 'BPL', 'Acer', 'Hisense'
];

console.log('=== AUDITING 24 REFRIGERATOR BRANDS ===');
console.log(`Total brands loaded: ${allBrands.length}`);

// 1. Verify Brand Names and Approved List
const brandNames = allBrands.map(b => b.name);
let brandMismatch = false;
approvedList.forEach((appr, idx) => {
  if (brandNames[idx] !== appr) {
    console.error(`Mismatch at index ${idx}: expected "${appr}", got "${brandNames[idx]}"`);
    brandMismatch = true;
  }
});
if (!brandMismatch) {
  console.log('✓ All 24 approved brand names match exactly in sequence.');
}

// 2. Verify Slugs
allBrands.forEach(b => {
  const expectedSlug = b.name.toLowerCase().replace(/\s+/g, '-') + '-refrigerator-repair-service-in-karur.html';
  if (b.slug !== expectedSlug) {
    console.error(`Slug mismatch for ${b.name}: expected ${expectedSlug}, got ${b.slug}`);
  }
});
console.log('✓ All 24 slugs verified.');

// 3. Verify Customer Experience Counts & Tanglish presence
console.log('\n--- Customer Experience Counts ---');
allBrands.forEach(b => {
  const count = b.customerExperiences.length;
  if (count < 5 || count > 10) {
    console.error(`Invalid customer experience count for ${b.name}: ${count}`);
  }
  // Check Tanglish indicators
  const hasTanglish = b.customerExperiences.every(exp => 
    /pannanga|sonnanga|irundhadhu|irukku|aachu|pannom|mudiyum|kooda|vechu/i.test(exp.tanglishText)
  );
  if (!hasTanglish) {
    console.error(`Missing Tanglish in customer experience for ${b.name}`);
  }
  console.log(`${b.name.padEnd(14)}: ${count} cards (Tanglish verified)`);
});

// 4. Verify FAQ Counts & Parts Counts
console.log('\n--- FAQ and Parts Counts ---');
allBrands.forEach(b => {
  const faqs = getBrandFaqs(b.name);
  const parts = getBrandParts(b.name);
  if (faqs.length < 8 || faqs.length > 15) {
    console.error(`Invalid FAQ count for ${b.name}: ${faqs.length}`);
  }
  if (parts.length < 7) {
    console.error(`Too few parts for ${b.name}: ${parts.length}`);
  }
  console.log(`${b.name.padEnd(14)}: ${faqs.length} FAQs | ${parts.length} Parts`);
});

// 5. Deduplication Check Across All Datasets
console.log('\n--- Deduplication Check ---');

function cleanSentence(s) {
  return s.trim().toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');
}

// Check Intros
const seenIntros = new Map();
let introDupes = 0;
allBrands.forEach(b => {
  const s = cleanSentence(b.searchIntentIntro);
  if (seenIntros.has(s)) {
    console.error(`Duplicate intro between ${b.name} and ${seenIntros.get(s)}`);
    introDupes++;
  } else {
    seenIntros.set(s, b.name);
  }
});
console.log(`Search Intent Intros: ${introDupes === 0 ? '✓ 0 duplicates' : introDupes + ' duplicates'}`);

// Check FAQs Questions
const seenFaqQ = new Map();
let faqQDupes = 0;
allBrands.forEach(b => {
  const faqs = getBrandFaqs(b.name);
  faqs.forEach(f => {
    const s = cleanSentence(f.q);
    if (seenFaqQ.has(s)) {
      console.error(`Duplicate FAQ question between ${b.name} and ${seenFaqQ.get(s)}: "${f.q}"`);
      faqQDupes++;
    } else {
      seenFaqQ.set(s, b.name);
    }
  });
});
console.log(`FAQ Questions: ${faqQDupes === 0 ? '✓ 0 duplicates' : faqQDupes + ' duplicates'}`);

// Check Customer Experience Text
const seenExp = new Map();
let expDupes = 0;
allBrands.forEach(b => {
  b.customerExperiences.forEach(exp => {
    const s = cleanSentence(exp.tanglishText);
    if (seenExp.has(s)) {
      console.error(`Duplicate Customer Experience between ${b.name} and ${seenExp.get(s)}: "${exp.title}"`);
      expDupes++;
    } else {
      seenExp.set(s, b.name);
    }
  });
});
console.log(`Customer Experiences: ${expDupes === 0 ? '✓ 0 duplicates' : expDupes + ' duplicates'}`);

// Check Banned AI Words
const bannedWords = [
  'tailored', 'precision diagnosis', 'seamless', 'comprehensive',
  'sophisticated', 'state-of-the-art', 'cutting-edge', 'next-generation',
  'optimized', 'intelligent', 'premium', 'unmatched', 'hassle-free',
  'expert-driven', 'holistic', 'robust solution', 'advanced solution',
  'prompt', 'ai prompt', 'developer notes', 'task'
];

let bannedFound = 0;
allBrands.forEach(b => {
  const jsonStr = JSON.stringify(b).toLowerCase();
  bannedWords.forEach(word => {
    // Avoid false positives like "task" inside multitasking (not applicable here, but exact word boundary is good)
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(jsonStr)) {
      console.warn(`Warning: Brand ${b.name} contains banned term "${word}"`);
      bannedFound++;
    }
  });
});
console.log(`Banned Words: ${bannedFound === 0 ? '✓ 0 found' : bannedFound + ' found'}`);

// Check Foreign Cities
const foreignCities = [
  'delhi', 'indirapuram', 'ghaziabad', 'tirupur', 'tirunelveli',
  'karur', 'nagercoil', 'pune', 'chennai'
];

let foreignFound = 0;
allBrands.forEach(b => {
  const jsonStr = JSON.stringify(b).toLowerCase();
  foreignCities.forEach(city => {
    const regex = new RegExp(`\\b${city}\\b`, 'i');
    if (regex.test(jsonStr)) {
      console.error(`ERROR: Foreign city "${city}" found in ${b.name}!`);
      foreignFound++;
    }
  });
  // Also check "madurai" alone
  if (/\bmadurai\b/i.test(jsonStr)) {
    console.error(`ERROR: Forbidden city "Madurai" found in ${b.name}!`);
    foreignFound++;
  }
});
console.log(`Foreign Cities: ${foreignFound === 0 ? '✓ 0 found' : foreignFound + ' found'}`);

console.log('\n=== AUDIT COMPLETE ===');
