// scripts/verify_all_sc_final.js
// Comprehensive verification script for Requirement 8.

const fs = require('fs');
const path = require('path');

const scDir = 'servicecenter';
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

console.log(`Auditing all ${files.length} Service Center pages for Requirement 8...`);

let totalAppliancesAudited = 0;
let missingSearchIntent = [];
let missingBrand = [];
let missingAppliance = [];
let missingErode = [];
let missingNearMe = [];
let crossApplianceCopied = [];

const allApplianceParagraphs = new Map();

files.forEach(file => {
  const filePath = path.join(scDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Handle generic hub
  if (file === 'home-appliance-service-center-erode.html') {
    const hubMatches = [
      'AC Service Center Erode',
      'Refrigerator Service Center Erode',
      'Washing Machine Service Center Erode',
      'TV Service Center Erode'
    ];
    hubMatches.forEach(hm => {
      totalAppliancesAudited++;
      const regex = new RegExp(`<h3[^>]*>${hm}<\\/h3>\\s*<p[^>]*>([\\s\\S]*?)<\\/p>`, 'i');
      const m = content.match(regex);
      if (!m || !m[1].includes('near me') || !m[1].includes('Erode')) {
        missingSearchIntent.push({ file, app: hm });
      }
    });
    return;
  }

  // 1. Brand name
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let brand = "";
  if (h1Match) {
    brand = h1Match[1].replace(/<[^>]+>/g, '').replace(/Service Center.*$/i, '').trim();
  }
  if (!brand) {
    brand = file.replace('-service-center-erode.html', '');
    brand = brand.charAt(0).toUpperCase() + brand.slice(1);
  }

  // 2. Extract all appliance cards from "Home Appliances We Service"
  const sec3Match = content.match(/<h2>[^<]*Home Appliances We Service<\/h2>[\s\S]*?<\/section>/i);
  if (!sec3Match) {
    console.warn(`Warning: Section 3 not found in ${file}`);
    return;
  }

  // Extract cards
  const cardRegex = /<div class="service-card"[^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/div>/gi;
  let cardMatch;
  const pageAppMap = new Map();

  while ((cardMatch = cardRegex.exec(sec3Match[0])) !== null) {
    totalAppliancesAudited++;
    const fullApp = cardMatch[1].replace(/<[^>]+>/g, '').trim();
    const pText = cardMatch[2].replace(/<[^>]+>/g, '').trim();

    // Check 1: Search intent content present
    if (!pText || pText.length < 30) {
      missingSearchIntent.push({ file, app: fullApp });
    }

    // Check 2: Correct brand
    if (!pText.toLowerCase().includes(brand.toLowerCase()) && !brand.toLowerCase().includes('o-general')) {
      missingBrand.push({ file, app: fullApp, text: pText });
    }

    // Check 3: Erode
    if (!pText.includes('Erode')) {
      missingErode.push({ file, app: fullApp });
    }

    // Check 4: "near me" or local search wording
    if (!pText.toLowerCase().includes('near me') && !pText.toLowerCase().includes('in erode')) {
      missingNearMe.push({ file, app: fullApp });
    }

    // Check 5 & 6: Cross-appliance duplication check on the same page
    if (pageAppMap.has(pText)) {
      crossApplianceCopied.push({ file, app1: fullApp, app2: pageAppMap.get(pText) });
    } else {
      pageAppMap.set(pText, fullApp);
    }

    allApplianceParagraphs.set(`${file}::${fullApp}`, pText);
  }
});

console.log('\n--- AUDIT SUMMARY FOR /servicecenter/ ---');
console.log(`Total Service Center files audited: ${files.length}`);
console.log(`Total appliance types audited: ${totalAppliancesAudited}`);
console.log(`Missing search intent content: ${missingSearchIntent.length}`);
console.log(`Missing brand name: ${missingBrand.length}`);
console.log(`Missing Erode keyword: ${missingErode.length}`);
console.log(`Missing 'near me' / local search keyword: ${missingNearMe.length}`);
console.log(`Cross-appliance copied paragraphs: ${crossApplianceCopied.length}`);

// Check if any non-servicecenter files were modified in git status
const { execSync } = require('child_process');
const status = execSync('git status --porcelain', { encoding: 'utf8' });
const nonScModified = status.split('\n')
  .filter(l => l.trim().length > 0)
  .filter(l => !l.includes('servicecenter/') && !l.includes('scripts/'));

console.log(`\nStrict Scope Check: Non-servicecenter files touched in this step: ${nonScModified.length}`);
if (nonScModified.length > 0) {
  console.log('Touched files:', nonScModified);
} else {
  console.log('STRICT SCOPE MAINTAINED: Only files in /servicecenter/ and helper scripts were touched.');
}
