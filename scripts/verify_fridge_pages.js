// Comprehensive Verification Suite for 24 Refrigerator Brand Pages + Main Page + Sitemap
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const fridgeDir = path.join(rootDir, 'fridge');

const approvedBrands = [
  'Samsung', 'Whirlpool', 'Bosch', 'Electrolux', 'Liebherr', 'Godrej',
  'Haier', 'Videocon', 'Panasonic', 'Siemens', 'Hitachi', 'Kelvinator',
  'Sharp', 'IFB', 'Onida', 'Toshiba', 'Voltas Beko', 'Lloyd',
  'Midea', 'Blue Star', 'Motorola', 'BPL', 'Acer', 'Hisense'
];

console.log('=== VERIFYING REFRIGERATOR SUITE ===');

// 1. Check directory contents
const filesInFridge = fs.readdirSync(fridgeDir).filter(f => f.endsWith('.html'));
console.log(`HTML files in /fridge/: ${filesInFridge.length}`);
const brandFiles = filesInFridge.filter(f => f !== 'refrigerator-repair-service-in-karur.html');
console.log(`Brand HTML files: ${brandFiles.length} (Expected: 24)`);

if (brandFiles.length !== 24) {
  console.error(`ERROR: Expected 24 brand files, found ${brandFiles.length}`);
}

// 2. Check each approved brand file exists
let missingFiles = 0;
approvedBrands.forEach(b => {
  const expectedFile = b.toLowerCase().replace(/\s+/g, '-') + '-refrigerator-repair-service-in-karur.html';
  if (!fs.existsSync(path.join(fridgeDir, expectedFile))) {
    console.error(`ERROR: Missing brand file: ${expectedFile}`);
    missingFiles++;
  }
});
if (missingFiles === 0) {
  console.log('✓ All 24 approved brand HTML files exist with exact filenames.');
}

// 3. Inspect main refrigerator page
const mainFridgePath = path.join(fridgeDir, 'refrigerator-repair-service-in-karur.html');
const mainFridgeHtml = fs.readFileSync(mainFridgePath, 'utf8');

let missingLinksOnMain = 0;
approvedBrands.forEach(b => {
  const expectedFile = b.toLowerCase().replace(/\s+/g, '-') + '-refrigerator-repair-service-in-karur.html';
  if (!mainFridgeHtml.includes(expectedFile)) {
    console.error(`ERROR: Main fridge page does not link to ${expectedFile}`);
    missingLinksOnMain++;
  }
});
if (missingLinksOnMain === 0) {
  console.log('✓ Main refrigerator page links to all 24 brand pages.');
}

// Check for unapproved brands in main fridge page
const unapproved = ['LG Refrigerator', 'lg-refrigerator'];
unapproved.forEach(u => {
  if (mainFridgeHtml.includes(u)) {
    console.error(`ERROR: Main page contains unapproved brand reference: ${u}`);
  }
});

// 4. Verify Brand Page Integrity
let errorCount = 0;
const foreignCities = [
  'delhi', 'indirapuram', 'ghaziabad', 'tirupur', 'tirunelveli',
  'karur', 'nagercoil', 'pune', 'chennai'
];

const bannedWords = [
  'ai prompt', 'developer notes', 'task', 'final task', 'seo task',
  'precision diagnosis', 'seamless', 'comprehensive', 'sophisticated',
  'state-of-the-art', 'cutting-edge', 'next-generation', 'optimized',
  'intelligent', 'premium', 'unmatched', 'hassle-free', 'expert-driven',
  'holistic', 'robust solution', 'advanced solution'
];

brandFiles.forEach(f => {
  const filePath = path.join(fridgeDir, f);
  const html = fs.readFileSync(filePath, 'utf8');

  // Check H1
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/);
  if (!h1Match) {
    console.error(`ERROR in ${f}: Missing H1`);
    errorCount++;
  } else if (!h1Match[1].includes('Refrigerator Repair Service in Karur')) {
    console.error(`ERROR in ${f}: Unexpected H1: ${h1Match[1]}`);
    errorCount++;
  }

  // Check Canonical
  const expectedCanonical = `https://servicecenterkarur.com/fridge/${f}`;
  if (!html.includes(`<link rel="canonical" href="${expectedCanonical}">`)) {
    console.error(`ERROR in ${f}: Incorrect canonical URL`);
    errorCount++;
  }

  // Check Link back to Main Fridge Page
  if (!html.includes('href="refrigerator-repair-service-in-karur.html"')) {
    console.error(`ERROR in ${f}: Missing back link to main fridge repair page`);
    errorCount++;
  }

  // Check Schema.org
  if (!html.includes('"@type": "Service"')) {
    console.error(`ERROR in ${f}: Missing Schema.org Service`);
    errorCount++;
  }
  if (html.includes('AggregateRating') || html.includes('aggregateRating')) {
    console.error(`ERROR in ${f}: Found fake AggregateRating`);
    errorCount++;
  }

  // Check Foreign Cities
  foreignCities.forEach(city => {
    const reg = new RegExp(`\\b${city}\\b`, 'i');
    if (reg.test(html)) {
      console.error(`ERROR in ${f}: Foreign city "${city}" detected!`);
      errorCount++;
    }
  });

  // Check standalone Madurai
  if (/\bmadurai\b/i.test(html)) {
    console.error(`ERROR in ${f}: Forbidden city "Madurai" detected!`);
    errorCount++;
  }

  // Check Banned Words
  bannedWords.forEach(bWord => {
    const reg = new RegExp(`\\b${bWord}\\b`, 'i');
    if (reg.test(html)) {
      console.error(`ERROR in ${f}: Banned word "${bWord}" detected!`);
      errorCount++;
    }
  });
});

if (errorCount === 0) {
  console.log('✓ All 24 brand pages passed integrity, schema, canonical, and city checks.');
}

// 5. Check sitemap.xml
const sitemapPath = path.join(rootDir, 'sitemap.xml');
const sitemapHtml = fs.readFileSync(sitemapPath, 'utf8');
let missingInSitemap = 0;
approvedBrands.forEach(b => {
  const expectedFile = b.toLowerCase().replace(/\s+/g, '-') + '-refrigerator-repair-service-in-karur.html';
  const expectedUrl = `https://servicecenterkarur.com/fridge/${expectedFile}`;
  if (!sitemapHtml.includes(expectedUrl)) {
    console.error(`ERROR in sitemap: Missing ${expectedUrl}`);
    missingInSitemap++;
  }
});
if (missingInSitemap === 0) {
  console.log('✓ All 24 brand URLs confirmed in sitemap.xml.');
}

console.log('=== VERIFICATION SUITE FINISHED ===');
