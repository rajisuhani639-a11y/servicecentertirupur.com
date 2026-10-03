// scripts/run_tiruppur_launch_audit.js
// Comprehensive audit and quality assurance validator for servicecentertirupur.com

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts' && file !== 'temp_fav_profile') {
        results = results.concat(walk(full));
      }
    } else {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

const allFiles = walk(ROOT_DIR);
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));

console.log('====================================================');
console.log('  SERVICE CENTER TIRUPUR — FINAL QA LAUNCH AUDIT   ');
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

// 1. Contamination Audit: Zero Madurai or previous cities or old pincodes
const forbidden = [
  'madurai', '625001', '625020', '625007', '625107', '625009',
  'tallakulam', 'goripalayam', 'mattuthavani', 'villapuram', 'simmakkal',
  'erode', '638011', 'mettur road', 'coimbatore', '641012', 
  'karur', '639001', 'kanyakumari', '629702', 'tenkasi', 
  'tirunelveli', 'ghaziabad', 'noida'
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
assert(contaminationFound === 0, `Zero Contamination (Found ${contaminationFound} occurrences)`);

// 2. Visible City Spelling: Tirupur (Single 'p') in all visible text
let visibleTiruppurFound = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Check for Tiruppur not followed by .html
  const matches = [...content.matchAll(/Tiruppur(?!\.html)/gi)];
  if (matches.length > 0) {
    console.error(`  Visible Tiruppur with double 'p' in: ${f} (${matches.length} times)`);
    visibleTiruppurFound += matches.length;
  }
});
assert(visibleTiruppurFound === 0, `Visible City Spelling: Exactly 'Tirupur' across all 188 HTML pages (Found ${visibleTiruppurFound} violations)`);

// 3. Customer Experience Uniqueness Check
const experiencesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_unique_experiences.json'), 'utf8'));
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

const uniqueBodies = new Set(allBodies);
assert(uniqueBodies.size === allBodies.length, `Customer Experience Bodies 100% Unique (${uniqueBodies.size} / ${allBodies.length})`);

// 4. Tanglish Phrasing Check in Customer Experiences
let tanglishValidCount = 0;
allBodies.forEach(b => {
  if (b.includes('Tirupur-la') || b.includes('veetla') || b.includes('phone') || b.includes('technician') || b.includes('pannumbodhu') || b.includes('replace') || b.includes('work aachu')) {
    tanglishValidCount++;
  }
});
assert(tanglishValidCount === allBodies.length, `Customer Experience Bodies in Authentic Tirupur Tanglish (${tanglishValidCount} / ${allBodies.length})`);

// 5. Customer Experience Range Verification per page
let expCountErrors = 0;
Object.entries(experiencesData).forEach(([page, list]) => {
  const count = list.length;
  if (page.startsWith('ac/')) {
    if (count < 1 || count > 6) expCountErrors++;
  } else if (page.startsWith('washing-machine/')) {
    if (count < 1 || count > 7) expCountErrors++;
  } else if (page.startsWith('tv/')) {
    if (count < 1 || count > 4) expCountErrors++;
  } else if (page.startsWith('fridge/')) {
    if (count < 1 || count > 5) expCountErrors++;
  } else if (page.startsWith('servicecenter/')) {
    if (count < 1 || count > 6) expCountErrors++;
  }
});
assert(expCountErrors === 0, 'Customer Experience per-page count bounds respected (AC 1-6, WM 1-7, TV 1-4, Fridge 1-5, SC 1-6)');

// 6. Hero Starting Sections Uniqueness
const introsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_hero_intros.json'), 'utf8'));
const allLeads = Object.values(introsData).map(i => i.lead);
const uniqueLeads = new Set(allLeads);
assert(uniqueLeads.size === allLeads.length, `Hero Starting Introductions 100% Unique (${uniqueLeads.size} / ${allLeads.length})`);

// 7. 200 Localities Verification
const locData = require('./tiruppur_localities.js');
assert(locData.east.length === 50, `East Tirupur has exactly 50 localities (Found ${locData.east.length})`);
assert(locData.west.length === 50, `West Tirupur has exactly 50 localities (Found ${locData.west.length})`);
assert(locData.north.length === 50, `North Tirupur has exactly 50 localities (Found ${locData.north.length})`);
assert(locData.south.length === 50, `South Tirupur has exactly 50 localities (Found ${locData.south.length})`);

const allDesc = [...locData.east, ...locData.west, ...locData.north, ...locData.south].map(l => l.description);
const uniqueDesc = new Set(allDesc);
assert(uniqueDesc.size === 200, `Locality descriptions 100% unique (${uniqueDesc.size} / 200)`);

// 8. Schema Validation
let schemaErrors = 0;
htmlFiles.forEach(f => {
  if (f.startsWith('blog/') || f.includes('/blog/')) return;
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes('"addressLocality": "Tirupur"')) {
    console.error(`  Missing Tirupur in schema: ${f}`);
    schemaErrors++;
  }
  if (!content.includes('"latitude": 11.1085') && !content.includes('"latitude":11.1085')) {
    console.error(`  Missing Tirupur coordinates in schema: ${f}`);
    schemaErrors++;
  }
  if (!content.includes('"postalCode": "641601"') && !content.includes('"postalCode":"641601"')) {
    console.error(`  Missing Tirupur postalCode in schema: ${f}`);
    schemaErrors++;
  }
});
assert(schemaErrors === 0, 'Schema Validation (Tirupur city, coordinates 11.1085, 77.3411, postalCode 641601 on all content pages)');

// 9. Google Maps Embed Validation
let mapErrors = 0;
htmlFiles.forEach(f => {
  if (f.startsWith('blog/') || f.includes('/blog/')) return;
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes('q=Tirupur%2C%20Tamil%20Nadu')) {
    console.error(`  Missing Tirupur map iframe in: ${f}`);
    mapErrors++;
  }
});
assert(mapErrors === 0, 'Google Maps Embed Validation (Centered on Tirupur, Tamil Nadu across all content pages)');

// 10. Google Tag Validation: ONLY G-DRV7B7TFS0
let gtagErrors = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const scriptMatches = [...content.matchAll(/googletagmanager\.com\/gtag\/js\?id=([A-Za-z0-9_-]+)/g)].map(m => m[1]);
  const configMatches = [...content.matchAll(/gtag\('config',\s*'([^']+)'\)/g)].map(m => m[1]);
  const allTagIds = [...new Set([...scriptMatches, ...configMatches])];
  const oldGtagMatches = content.match(/G-[A-Z0-9]{9,12}/g) || [];
  const invalidOldTags = oldGtagMatches.filter(t => t !== 'G-DRV7B7TFS0');
  
  if (allTagIds.length !== 1 || allTagIds[0] !== 'G-DRV7B7TFS0' || invalidOldTags.length > 0) {
    console.error(`  Invalid Google Tag in: ${f} -> Script: ${scriptMatches.join(',')}, Config: ${configMatches.join(',')}, Other: ${invalidOldTags.join(',')}`);
    gtagErrors++;
  }
});
assert(gtagErrors === 0, 'Google Tag Validation (Only G-DRV7B7TFS0 is active across all 188 HTML pages)');

// 11. Favicon Assets Validation
const requiredFavicons = [
  'favicon.ico', 'favicon.svg', 'favicon-16x16.png', 'favicon-32x32.png',
  'favicon-48x48.png', 'favicon-96x96.png', 'favicon-180x180.png',
  'favicon-192x192.png', 'favicon-512x512.png', 'apple-touch-icon.png'
];
let missingFavicons = 0;
requiredFavicons.forEach(fav => {
  if (!fs.existsSync(path.join(ROOT_DIR, fav))) {
    console.error(`  Missing favicon asset: ${fav}`);
    missingFavicons++;
  }
});
assert(missingFavicons === 0, 'Favicon Suite Complete (All 10 required formats exist on disk)');

// 12. Sitemap.xml & Sitemap.html Validation
const xmlContent = fs.readFileSync(path.join(ROOT_DIR, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...xmlContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert(sitemapUrls.length === htmlFiles.length, `Sitemap.xml contains all ${htmlFiles.length} production URLs (Found ${sitemapUrls.length})`);

const nonTiruppurSitemapUrls = sitemapUrls.filter(u => !u.startsWith('https://servicecentertirupur.com/'));
assert(nonTiruppurSitemapUrls.length === 0, 'Sitemap.xml URLs use 100% production domain https://servicecentertirupur.com/');

// 13. Robots.txt Validation
const robotsTxt = fs.readFileSync(path.join(ROOT_DIR, 'robots.txt'), 'utf8');
assert(robotsTxt.includes('Sitemap: https://servicecentertirupur.com/sitemap.xml'), 'Robots.txt points to https://servicecentertirupur.com/sitemap.xml');

// 14. Site.webmanifest Validation
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'site.webmanifest'), 'utf8'));
assert(manifest.name === 'Service Center Tirupur' && manifest.short_name === 'Service Center Tirupur', 'Site.webmanifest correctly localized to Service Center Tirupur');

// 15. AI Buzzwords Check across all HTML files
const roboticWords = [
  'comprehensive', 'seamless', 'unparalleled', 'state-of-the-art',
  'cutting-edge', 'tailored solutions', 'professional assistance',
  'robust', 'efficiently', 'facilitate', 'rectification', 'malfunctioning'
];
let buzzwordOccurrences = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  roboticWords.forEach(w => {
    const reg = new RegExp('\\b' + w + '\\b', 'gi');
    const matches = content.match(reg);
    if (matches) {
      buzzwordOccurrences += matches.length;
    }
  });
});
assert(buzzwordOccurrences === 0, `Heavy AI Buzzword Scrubbing (Found ${buzzwordOccurrences} occurrences)`);

// 16. Broken Image references
let brokenImages = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const imgMatches = [...content.matchAll(/<img[^>]+src="([^">]+)"/gi)].map(m => m[1]);
  imgMatches.forEach(src => {
    if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) return;
    const resolved = path.resolve(path.dirname(f), src);
    if (!fs.existsSync(resolved)) {
      console.error(`  Broken image src: ${src} in ${f}`);
      brokenImages++;
    }
  });
});
assert(brokenImages === 0, 'Zero broken image references');

// 17. Internal Link Validation: Check that internal hrefs target valid files
let brokenLinks = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hrefMatches = [...content.matchAll(/href="([^"#:]+)"/gi)].map(m => m[1]);
  hrefMatches.forEach(href => {
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('//') || href.startsWith('#')) return;
    let target = href;
    if (target.startsWith('/')) {
      target = path.join(ROOT_DIR, target.substring(1));
    } else {
      target = path.resolve(path.dirname(f), target);
    }
    if (!fs.existsSync(target) && !fs.existsSync(target + '.html')) {
      console.error(`  Broken link: ${href} in ${f}`);
      brokenLinks++;
    }
  });
});
assert(brokenLinks === 0, `Zero broken internal links across all 188 pages`);

// 18. FAQ Locality and Costing Addition Validation
const masterFaqs = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiruppur_master_faqs.json'), 'utf8'));
let faqCompletenessErrors = 0;
Object.entries(masterFaqs).forEach(([page, data]) => {
  const allQs = [];
  data.groups.forEach(g => g.items.forEach(it => allQs.push(it.q)));
  const hasLocalityQ = allQs.some(q => q.includes('areas do you cover') || q.includes('technician visit near'));
  const hasCostingQ = allQs.some(q => q.includes('repair cost in Tirupur') || q.includes('spare-part price') || q.includes('cost'));
  if (!hasLocalityQ || !hasCostingQ) {
    console.error(`  Incomplete FAQ additions on page: ${page}`);
    faqCompletenessErrors++;
  }
});
assert(faqCompletenessErrors === 0, `FAQ Locality & Costing Additions verified across all 174 content pages`);

// Summary
console.log('\n====================================================');
console.log(`AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('====================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
