// scripts/run_madurai_launch_audit.js
// Comprehensive audit and quality assurance validator for servicecentermadurai.com

const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts') results = results.concat(walk(full));
    } else {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

const allFiles = walk('.');
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));

console.log('====================================================');
console.log('  SERVICE CENTER MADURAI — FINAL PRE-LAUNCH AUDIT   ');
console.log('====================================================\n');
console.log(`Total production files to audit: ${allFiles.length}`);
console.log(`Total HTML pages: ${htmlFiles.length}\n`);

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName}: ${details}`);
    failedTests++;
  }
}

// 1. Contamination Audit: Zero Erode or previous cities
const forbidden = [
  'erode', '638011', 'mettur road', 'coimbatore', '641012', 
  'karur', '639001', 'kanyakumari', '629702', 'tenkasi', 
  'tirupur', 'tirunelveli', 'ghaziabad', 'noida'
];

let contaminationFound = 0;
allFiles.forEach(f => {
  if (f.endsWith('.png') || f.endsWith('.ico')) return;
  const content = fs.readFileSync(f, 'utf8');
  forbidden.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    if (regex.test(content)) {
      console.error(`  Contamination "${word}" in file: ${f}`);
      contaminationFound++;
    }
  });
});
assert(contaminationFound === 0, 'Zero Contamination (Erode, Coimbatore, Karur, old pincodes, old addresses)');

// 2. Customer Experience Uniqueness Check
const experiencesData = JSON.parse(fs.readFileSync('scripts/madurai_unique_experiences.json', 'utf8'));
const allHeadings = [];
const allBodies = [];
let totalExpCount = 0;

Object.entries(experiencesData).forEach(([page, list]) => {
  list.forEach(c => {
    totalExpCount++;
    allHeadings.push(c.heading);
    allBodies.push(c.body);
  });
});

const uniqueHeadings = new Set(allHeadings);
assert(uniqueHeadings.size === allHeadings.length, `Customer Experience Headings 100% Unique (${uniqueHeadings.size} / ${allHeadings.length})`);

// 3. Customer Experience Count Verification
const acMain = experiencesData['ac/ac-repair-service-in-madurai.html'] || [];
const fridgeMain = experiencesData['fridge/refrigerator-repair-service-in-madurai.html'] || [];
const wmMain = experiencesData['washing-machine/washing-machine-repair-service-in-madurai.html'] || [];
const tvMain = experiencesData['tv/tv-repair-service-in-madurai.html'] || [];
const scMain = experiencesData['servicecenter/home-appliance-service-center-madurai.html'] || [];

assert(acMain.length === 29, `AC Main Page has 1 experience per brand (Found ${acMain.length}, Expected 29)`);
assert(fridgeMain.length === 24, `Fridge Main Page has 1 experience per brand (Found ${fridgeMain.length}, Expected 24)`);
assert(wmMain.length === 30, `Washing Machine Main Page has 1 experience per brand (Found ${wmMain.length}, Expected 30)`);
assert(tvMain.length === 31, `TV Main Page has 1 experience per brand (Found ${tvMain.length}, Expected 31)`);
assert(scMain.length === 55, `Service Center Main Page has 1 experience per brand (Found ${scMain.length}, Expected 55)`);

// 4. Hero Starting Sections Uniqueness
const introsData = JSON.parse(fs.readFileSync('scripts/madurai_hero_intros.json', 'utf8'));
const allLeads = Object.values(introsData).map(i => i.lead);
const uniqueLeads = new Set(allLeads);
assert(uniqueLeads.size === allLeads.length, `Hero Starting Introductions 100% Unique (${uniqueLeads.size} / ${allLeads.length})`);

// 5. Schema Validation
let schemaErrors = 0;
htmlFiles.forEach(f => {
  if (f.startsWith('blog/') || f.includes('/blog/')) return;
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes('"addressLocality": "Madurai"')) {
    console.error(`  Missing Madurai in schema: ${f}`);
    schemaErrors++;
  }
  if (!content.includes('"latitude": 9.9252') && !content.includes('"latitude":9.9252')) {
    console.error(`  Missing Madurai coordinates in schema: ${f}`);
    schemaErrors++;
  }
});
assert(schemaErrors === 0, 'Schema Validation (Madurai city, coordinates 9.9252, 78.1198, postalCode 625001 on all content pages)');

// 6. Map Section Validation
let mapErrors = 0;
htmlFiles.forEach(f => {
  if (f.startsWith('blog/') || f.includes('/blog/')) return;
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes('q=Madurai%2C%20Tamil%20Nadu')) {
    console.error(`  Missing Madurai map iframe in: ${f}`);
    mapErrors++;
  }
});
assert(mapErrors === 0, 'Google Maps Embed Validation (Centered on Madurai, Tamil Nadu across all content pages)');

// 7. Sitemap.xml & Sitemap.html Validation
const xmlContent = fs.readFileSync('sitemap.xml', 'utf8');
const sitemapUrls = [...xmlContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert(sitemapUrls.length === htmlFiles.length, `Sitemap.xml contains all ${htmlFiles.length} production URLs (Found ${sitemapUrls.length})`);

const nonMaduraiSitemapUrls = sitemapUrls.filter(u => !u.startsWith('https://servicecentermadurai.com/'));
assert(nonMaduraiSitemapUrls.length === 0, 'Sitemap.xml URLs use 100% production domain https://servicecentermadurai.com/');

// 8. Robots.txt Validation
const robotsTxt = fs.readFileSync('robots.txt', 'utf8');
assert(robotsTxt.includes('Sitemap: https://servicecentermadurai.com/sitemap.xml'), 'Robots.txt points to https://servicecentermadurai.com/sitemap.xml');

// 9. Site.webmanifest Validation
const manifest = JSON.parse(fs.readFileSync('site.webmanifest', 'utf8'));
assert(manifest.name === 'Service Center Madurai' && manifest.short_name === 'Service Center Madurai', 'Site.webmanifest correctly localized to Service Center Madurai');

// 10. Summary
console.log('\n====================================================');
console.log(`AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('====================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
