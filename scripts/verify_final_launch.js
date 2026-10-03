const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(getAllHtmlFiles(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtml = getAllHtmlFiles(rootDir);
console.log(`=== AUDITING ${allHtml.length} HTML FILES ===\n`);

let errors = [];

// 1. Audit Google Tag G-CXRXPBP63E
let gTagPassed = 0;
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = (content.match(/G-CXRXPBP63E/g) || []).length;
  // Note: in our snippet, G-CXRXPBP63E appears twice: once in src URL, once in gtag('config', ...)
  // Let's verify gtag('config', 'G-CXRXPBP63E') appears exactly once!
  const configMatches = (content.match(/gtag\('config',\s*'G-CXRXPBP63E'\)/g) || []).length;
  if (configMatches === 1) {
    gTagPassed++;
  } else {
    errors.push(`Google Tag error in ${path.relative(rootDir, f)}: config count = ${configMatches}`);
  }
});
console.log(`1. Google Tag Config (G-CXRXPBP63E exactly once): ${gTagPassed} / ${allHtml.length} pages PASSED`);

// 2. Audit Old Customer Phone
let oldPhoneCount = 0;
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('94420') || content.includes('54321')) {
    oldPhoneCount++;
    errors.push(`Old phone number found in ${path.relative(rootDir, f)}`);
  }
});
console.log(`2. Old Phone Number (94420 / 54321): ${oldPhoneCount} occurrences (Expected: 0)`);

// 3. Audit New Customer Phone
let newPhoneCount = 0;
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('9211512088')) {
    newPhoneCount++;
  }
});
console.log(`3. New Phone Number (9211512088): present in ${newPhoneCount} / ${allHtml.length} pages`);

// 4. Audit Old Service Center Index References
let oldIndexRefs = 0;
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('/servicecenter/index.html') || 
      content.includes('servicecenter/index.html') || 
      content.includes('../servicecenter/index.html')) {
    oldIndexRefs++;
    errors.push(`Old servicecenter/index.html reference in ${path.relative(rootDir, f)}`);
  }
});
console.log(`4. Old Service Center Index References: ${oldIndexRefs} (Expected: 0)`);

// Also check if servicecenter/index.html file exists on disk
const oldIndexExists = fs.existsSync(path.join(rootDir, 'service-center', 'index.html'));
console.log(`4b. File servicecenter/index.html exists on disk: ${oldIndexExists} (Expected: false)`);
if (oldIndexExists) errors.push('servicecenter/index.html still exists on disk!');

// 5. Renamed Main Service Center Page Verification
const newMainPage = path.join(rootDir, 'service-center', 'home-appliance-service-center-karur.html');
const newMainExists = fs.existsSync(newMainPage);
console.log(`5. File servicecenter/home-appliance-service-center-karur.html exists: ${newMainExists}`);
if (newMainExists) {
  const c = fs.readFileSync(newMainPage, 'utf8');
  const hasCanonical = c.includes('<link rel="canonical" href="https://servicecenterkarur.com/servicecenter/home-appliance-service-center-karur.html">');
  const hasTitle = c.includes('<title>Home Appliance Service Center Karur | Multi-Brand Appliance Repair</title>');
  const hasH1 = c.includes('<h1 class="brand-h1">Home Appliance Service Center in Karur</h1>');
  const hasBreadcrumb = c.includes('<li aria-current="page">Home Appliance Service Center Karur</li>');
  console.log(`   - Canonical updated: ${hasCanonical}`);
  console.log(`   - Title updated: ${hasTitle}`);
  console.log(`   - H1 updated: ${hasH1}`);
  console.log(`   - Breadcrumb updated: ${hasBreadcrumb}`);
  if (!hasCanonical || !hasTitle || !hasH1 || !hasBreadcrumb) {
    errors.push('Renamed service center main page metadata incomplete!');
  }
} else {
  errors.push('Renamed service center main page missing!');
}

// 6. Navigation Check (Desktop & Mobile)
let navPassed = 0;
allHtml.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const hasScLink = c.includes('/servicecenter/home-appliance-service-center-karur.html');
  const hasSitemapLink = c.includes('/sitemap.html');
  const hasDesktopSpan = c.includes('nav-desktop-text');
  const hasMobileSpan = c.includes('nav-mobile-text');
  if (hasScLink && hasSitemapLink && hasDesktopSpan && hasMobileSpan) {
    navPassed++;
  } else {
    errors.push(`Navigation incomplete in ${path.relative(rootDir, f)}`);
  }
});
console.log(`6. Navigation (Desktop & Mobile Links): ${navPassed} / ${allHtml.length} pages PASSED`);

// 7. Footer Sitemap Link Check
let footerSitemapCount = 0;
allHtml.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('<li><a href="/sitemap.html">Sitemap</a></li>') || c.includes('<li><a href="sitemap.html">Sitemap</a></li>')) {
    footerSitemapCount++;
  } else {
    errors.push(`Footer sitemap missing in ${path.relative(rootDir, f)}`);
  }
});
console.log(`7. Footer Sitemap Link: ${footerSitemapCount} / ${allHtml.length} pages PASSED`);

// 8. Official Brand Manufacturer Contacts Check
// Verify sample official brands have their toll-free numbers intact
const samsungFile = path.join(rootDir, 'service-center', 'samsung-service-center-karur.html');
if (fs.existsSync(samsungFile)) {
  const sc = fs.readFileSync(samsungFile, 'utf8');
  const hasOfficialSamsung = sc.includes('1800 40 7267864') || sc.includes('1800-40-7267864') || sc.includes('1800 5 7267864');
  console.log(`8. Official Brand Information Preserved (e.g. Samsung): ${hasOfficialSamsung}`);
  if (!hasOfficialSamsung) errors.push('Official brand customer care number missing or overwritten!');
}

console.log('\n=== AUDIT SUMMARY ===');
if (errors.length === 0) {
  console.log('ALL AUDITS PASSED WITH ZERO ERRORS!');
} else {
  console.log(`FOUND ${errors.length} ERRORS:`);
  errors.forEach(e => console.log(' - ' + e));
}
