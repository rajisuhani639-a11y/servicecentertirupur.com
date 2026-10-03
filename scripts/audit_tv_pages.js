// Comprehensive audit script for all 31 TV Brand pages in /tv/ and master TV page
const fs = require('fs');
const path = require('path');

const brands1to10 = require('./tv_brands_1_to_10.js');
const brands11to20 = require('./tv_brands_11_to_20.js');
const brands21to31 = require('./tv_brands_21_to_31.js');
const allBrands = [...brands1to10, ...brands11to20, ...brands21to31];

const rootDir = path.resolve(__dirname, '..');
const tvDir = path.join(rootDir, 'tv');

const foreignCities = [
  'Delhi', 'Tirupur', 'Tirunelveli', 'Karur', 'Madurai', 'Nagercoil', 'Chennai', 'Ghaziabad'
];

const bannedAiPhrases = [
  'task',
  'independent task',
  'prompt',
  'ai-powered',
  'artificial intelligence',
  'workflow',
  'optimized solution',
  'seamless experience',
  'seamless',
  'tailored inspection',
  'tailored',
  'precision diagnosis',
  'advanced diagnostic experience',
  'advanced diagnostic',
  'comprehensive solution',
  'sophisticated',
  'state-of-the-art',
  'cutting-edge',
  'next-generation',
  'intelligent solution',
  'intelligent diagnosis',
  'expert-driven',
  'premium solution',
  'unmatched service',
  'unmatched',
  'hassle-free experience',
  'hassle-free',
  'technologically advanced',
  'strategic',
  'robust',
  'enhanced solution',
  'personalized diagnostic journey'
];

let errors = [];
let warnings = [];

console.log('=== 1. VERIFYING OLD ROOT-LEVEL BRAND FILES ARE REMOVED ===');
allBrands.forEach(b => {
  const oldRootFile = path.join(rootDir, b.slug);
  if (fs.existsSync(oldRootFile)) {
    errors.push(`Old root-level file still exists: ${b.slug}`);
  }
});

console.log('=== 2. AUDITING 31 TV BRAND PAGES IN /tv/ ===');

allBrands.forEach((b, idx) => {
  const filePath = path.join(tvDir, b.slug);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing file in tv/: ${b.slug}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check foreign cities
  foreignCities.forEach(city => {
    const regex = new RegExp(`\\b${city}\\b`, 'i');
    if (regex.test(content)) {
      errors.push(`[tv/${b.slug}] Found forbidden city: ${city}`);
    }
  });

  // Check AI & prompt phrases
  bannedAiPhrases.forEach(phrase => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'i');
    if (regex.test(content)) {
      warnings.push(`[tv/${b.slug}] Found banned AI phrase: "${phrase}"`);
    }
  });

  // Check single H1
  const h1Matches = content.match(/<h1[\s\S]*?<\/h1>/gi);
  if (!h1Matches || h1Matches.length !== 1) {
    errors.push(`[tv/${b.slug}] Expected exactly 1 H1, found ${h1Matches ? h1Matches.length : 0}`);
  } else if (!h1Matches[0].includes(b.name)) {
    errors.push(`[tv/${b.slug}] H1 does not include brand name: ${h1Matches[0]}`);
  }

  // Check Canonical
  const canonicalExpected = `<link rel="canonical" href="https://servicecenterkarur.com/tv/${b.slug}">`;
  if (!content.includes(canonicalExpected)) {
    errors.push(`[tv/${b.slug}] Canonical link mismatch or missing`);
  }

  // Check Schema
  if (!content.includes('"addressLocality": "Karur"') || !content.includes('"addressRegion": "Tamil Nadu"')) {
    errors.push(`[tv/${b.slug}] Schema missing Karur/Tamil Nadu`);
  }
  if (!content.includes(`"name": "${b.name} TV Repair & Service in Karur"`)) {
    errors.push(`[tv/${b.slug}] Schema name does not match brand: ${b.name}`);
  }
  if (!content.includes(`"url": "https://servicecenterkarur.com/tv/${b.slug}"`)) {
    errors.push(`[tv/${b.slug}] Schema URL does not point to /tv/${b.slug}`);
  }

  // Check CSS and JS paths
  if (!content.includes('href="../css/style.css"')) {
    errors.push(`[tv/${b.slug}] CSS path does not point to ../css/style.css`);
  }
  if (!content.includes('src="../js/config.js"') || !content.includes('src="../js/main.js"')) {
    errors.push(`[tv/${b.slug}] JS paths do not point to ../js/`);
  }

  // Check Why Choose Us section UI
  if (!content.includes('class="why-grid"') || !content.includes('class="why-card"')) {
    errors.push(`[tv/${b.slug}] Why Choose Us section missing why-grid / why-card`);
  }

  // Check Parts section
  if (!content.includes('class="parts-expanded-grid"') || !content.includes('class="part-card"')) {
    errors.push(`[tv/${b.slug}] Parts section missing parts-expanded-grid / part-card`);
  }

  // Check Pricing Section
  if (!content.includes('₹') || !content.includes('SMPS')) {
    errors.push(`[tv/${b.slug}] Researched pricing missing or incomplete`);
  }

  // Check Localities section (all 60)
  if (!content.includes('id="localitiesSection"') || !content.includes('📍 Karur Town') || !content.includes('📍 Kagithapuramam') || !content.includes('📍 Pasupathipalayam')) {
    errors.push(`[tv/${b.slug}] Localities section incomplete or missing`);
  }

  // Check FAQ count (10-15)
  const faqMatches = content.match(/class="faq-item"/g);
  if (!faqMatches || faqMatches.length < 10) {
    errors.push(`[tv/${b.slug}] FAQ items count is ${faqMatches ? faqMatches.length : 0} (minimum 10 required)`);
  }

  // Check phone number
  if (!content.includes('+919442054321') && !content.includes('+91 94420 54321')) {
    errors.push(`[tv/${b.slug}] Phone number missing`);
  }
});

// Audit Master Page: tv-repair-service-in-karur.html
console.log('\n=== 3. AUDITING MASTER TV PAGE ===');
const masterFile = path.join(rootDir, 'tv-repair-service-in-karur.html');
const masterContent = fs.readFileSync(masterFile, 'utf8');

foreignCities.forEach(city => {
  const regex = new RegExp(`\\b${city}\\b`, 'i');
  if (regex.test(masterContent)) {
    errors.push(`[tv-repair-service-in-karur.html] Found forbidden city: ${city}`);
  }
});

allBrands.forEach(b => {
  const expectedLink = `tv/${b.slug}`;
  if (!masterContent.includes(expectedLink)) {
    errors.push(`[tv-repair-service-in-karur.html] Missing link to tv/${b.slug}`);
  }
});

// Audit sitemap.xml
console.log('\n=== 4. AUDITING SITEMAP.XML ===');
const sitemapFile = path.join(rootDir, 'sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');

allBrands.forEach(b => {
  const expectedUrl = `https://servicecenterkarur.com/tv/${b.slug}`;
  if (!sitemapContent.includes(expectedUrl)) {
    errors.push(`[sitemap.xml] Missing brand URL: ${expectedUrl}`);
  }
  const oldUrl = `https://servicecenterkarur.com/${b.slug}`;
  if (sitemapContent.includes(oldUrl)) {
    errors.push(`[sitemap.xml] Old root-level URL still present: ${oldUrl}`);
  }
});

console.log('\n=============================');
console.log(`TOTAL ERRORS: ${errors.length}`);
console.log(`TOTAL WARNINGS: ${warnings.length}`);
console.log('=============================');

if (errors.length > 0) {
  console.log('\nERRORS FOUND:');
  errors.forEach(e => console.log('❌ ' + e));
}

if (warnings.length > 0) {
  console.log('\nWARNINGS FOUND:');
  warnings.forEach(w => console.log('⚠️ ' + w));
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('\n✨ ALL 31 BRAND PAGES IN /tv/ AND MASTER PAGE PASSED ALL AUDIT CHECKS WITH ZERO ERRORS AND ZERO WARNINGS! ✨');
}
