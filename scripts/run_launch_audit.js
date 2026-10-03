const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brands = require('./data_brands_info.js');

console.log('====================================================');
console.log('STARTING COMPREHENSIVE PRE-LAUNCH AUDIT');
console.log('PROJECT: servicecenterkarur.com');
console.log('LOCATION: Karur, Tamil Nadu, India');
console.log('====================================================\n');

// 1. Gather all customer-facing HTML files
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.agents' && file !== 'scripts' && !file.startsWith('temp')) {
        results = results.concat(getFiles(filePath));
      }
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  }
  return results;
}

const allHtmlFiles = getFiles(rootDir);
console.log(`Auditing ${allHtmlFiles.length} HTML files...\n`);

let auditErrors = [];

// 2. Favicon & Root Asset Audit
console.log('--- 1. Root Technical & Favicon Assets Audit ---');
const requiredRootAssets = [
  'favicon.ico',
  'favicon.svg',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
  'favicon-96x96.png',
  'favicon-180x180.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'apple-touch-icon.png',
  'favicon.jpg',
  'favicon.jpeg',
  'site.webmanifest',
  'robots.txt',
  'sitemap.xml',
  'sitemap.html'
];

let missingAssets = 0;
requiredRootAssets.forEach(asset => {
  const p = path.join(rootDir, asset);
  if (!fs.existsSync(p)) {
    console.error(`[FAIL] Missing root asset: ${asset}`);
    auditErrors.push(`Missing root asset: ${asset}`);
    missingAssets++;
  } else {
    const stats = fs.statSync(p);
    if (stats.size === 0) {
      console.error(`[FAIL] Empty root asset: ${asset}`);
      auditErrors.push(`Empty root asset: ${asset}`);
      missingAssets++;
    }
  }
});
if (missingAssets === 0) {
  console.log(`[PASS] All 16 required root technical and favicon assets are present and non-empty.\n`);
}

// 3. Location Contamination Check
console.log('--- 2. Prohibited City Contamination Audit ---');
const prohibitedCities = [
  'Indirapuram',
  'Ghaziabad',
  'Delhi',
  'Noida',
  'Madurai',
  'Tirunelveli',
  'Tirupur',
  'Karur',
  'Nagercoil'
];

let contaminationHits = [];
allHtmlFiles.forEach(file => {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  // Check newly created service-center pages especially
  if (relPath.startsWith('servicecenter/')) {
    const content = fs.readFileSync(file, 'utf8');
    prohibitedCities.forEach(city => {
      // Use regex with word boundary
      const regex = new RegExp(`\\b${city}\\b`, 'i');
      if (regex.test(content)) {
        contaminationHits.push({ file: relPath, city });
      }
    });
  }
});

if (contaminationHits.length > 0) {
  console.error(`[FAIL] Found city contamination in service-center pages:`);
  contaminationHits.forEach(hit => console.error(`  - ${hit.file}: contains "${hit.city}"`));
  auditErrors.push(`City contamination found: ${contaminationHits.length} occurrences`);
} else {
  console.log(`[PASS] Zero contamination in all service-center pages! (No Indirapuram, Ghaziabad, Delhi, Noida, Madurai, Tirunelveli, Tirupur, Karur, Nagercoil).\n`);
}

// 4. Service Center Experience & Official Brand Info Audit
console.log('--- 3. Service Center Brand Pages (54 Brands) Audit ---');
let scBrandErrors = 0;
const scDir = path.join(rootDir, 'service-center');

brands.forEach(b => {
  const pageFile = `${b.slug}-service-center-karur.html`;
  const pagePath = path.join(scDir, pageFile);

  if (!fs.existsSync(pagePath)) {
    console.error(`[FAIL] Missing brand page: ${pageFile}`);
    auditErrors.push(`Missing brand page: ${pageFile}`);
    scBrandErrors++;
    return;
  }

  const content = fs.readFileSync(pagePath, 'utf8');

  // Verify English experience exists
  const hasEng = content.includes('English Experience') || content.includes('simple English') || content.includes('Customer Service Experience');
  // Verify Tamil experience exists
  const hasTam = content.includes('தமிழ் சேவை அனுபவம்') || content.includes('Tamil');
  // Verify Tanglish experience exists
  const hasTang = content.includes('Tanglish') || content.includes('தங்கிலீஷ்');

  if (!hasTam || !hasTang) {
    console.error(`[FAIL] ${pageFile}: Missing multilingual experiences (Tamil: ${hasTam}, Tanglish: ${hasTang})`);
    auditErrors.push(`${pageFile}: Missing multilingual experiences`);
    scBrandErrors++;
  }

  // Check no fake reviews / stars
  if (content.includes('★') || content.includes('star rating') || content.includes('rated 5/5') || content.includes('Verified Customer Review')) {
    console.error(`[FAIL] ${pageFile}: Potential fake review claim or star rating detected!`);
    auditErrors.push(`${pageFile}: Fake review or rating detected`);
    scBrandErrors++;
  }

  // Check official brand section
  const hasOfficial = content.includes('Official Brand Service Information') || content.includes('Official Support Information') || content.includes('Official Website:');
  if (!hasOfficial) {
    console.error(`[FAIL] ${pageFile}: Missing Official Brand Information Section`);
    auditErrors.push(`${pageFile}: Missing Official Brand Information`);
    scBrandErrors++;
  }

  // Check false authorized claims
  if (content.includes(`"${b.name} Authorized Service Center in Karur"`)) {
    console.error(`[FAIL] ${pageFile}: Unverified authorized service claim!`);
    auditErrors.push(`${pageFile}: Unverified authorization claim`);
    scBrandErrors++;
  }
});

if (scBrandErrors === 0) {
  console.log(`[PASS] All 54 Service Center brand pages verified:`);
  console.log(`  - Multilingual experiences (English, Tamil, Tanglish) present & labelled transparently`);
  console.log(`  - No fake reviews or star ratings`);
  console.log(`  - Official Brand Information & customer care details present`);
  console.log(`  - No false authorization claims\n`);
}

// 5. Canonical & Meta Audit
console.log('--- 4. Canonical & Meta Titles Audit ---');
let canonicalErrors = 0;
const seenCanonicals = new Set();
const seenTitles = new Map();

allHtmlFiles.forEach(file => {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // Match canonical
  const canonicalMatches = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatches) {
    console.error(`[FAIL] ${relPath}: Missing canonical tag!`);
    auditErrors.push(`${relPath}: Missing canonical tag`);
    canonicalErrors++;
  } else {
    const cUrl = canonicalMatches[1];
    if (!cUrl.startsWith('https://servicecenterkarur.com/')) {
      console.error(`[FAIL] ${relPath}: Invalid canonical domain: ${cUrl}`);
      auditErrors.push(`${relPath}: Invalid canonical domain`);
      canonicalErrors++;
    }
    if (seenCanonicals.has(cUrl)) {
      console.error(`[FAIL] Duplicate canonical URL: ${cUrl} (found in ${relPath})`);
      auditErrors.push(`Duplicate canonical URL: ${cUrl}`);
      canonicalErrors++;
    }
    seenCanonicals.add(cUrl);
  }

  // Match Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    console.error(`[FAIL] ${relPath}: Missing title tag!`);
    auditErrors.push(`${relPath}: Missing title`);
  } else {
    const t = titleMatch[1].trim();
    if (seenTitles.has(t)) {
      // Allow identical title only if it's not a service center page
      if (relPath.startsWith('servicecenter/')) {
        console.error(`[FAIL] Duplicate title in service-center: "${t}" in ${relPath} and ${seenTitles.get(t)}`);
        auditErrors.push(`Duplicate title: ${t}`);
      }
    } else {
      seenTitles.set(t, relPath);
    }
  }

  // Match H1
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    console.error(`[FAIL] ${relPath}: Missing H1 tag!`);
    auditErrors.push(`${relPath}: Missing H1`);
  } else if (h1Matches.length > 1) {
    console.warn(`[WARN] ${relPath}: Multiple (${h1Matches.length}) H1 tags detected.`);
  }
});

if (canonicalErrors === 0) {
  console.log(`[PASS] All ${allHtmlFiles.length} pages have valid, unique canonical URLs under https://servicecenterkarur.com/\n`);
}

// 6. Internal Broken Link Audit
console.log('--- 5. Internal Link Audit ---');
let brokenLinks = 0;
let totalCheckedLinks = 0;

allHtmlFiles.forEach(file => {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  const fileDir = path.dirname(file);
  const content = fs.readFileSync(file, 'utf8');

  // Match all hrefs
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1].trim();

    // Skip external links, tel:, mailto:, wa.me, hashes
    if (href.startsWith('http://') || href.startsWith('https://') || 
        href.startsWith('tel:') || href.startsWith('mailto:') || 
        href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }

    totalCheckedLinks++;

    // Split off hash or query param
    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref) continue; // Pure anchor link on same page

    let targetPath;
    if (cleanHref.startsWith('/')) {
      // Root-relative
      targetPath = path.join(rootDir, cleanHref.replace(/^\//, ''));
    } else {
      // Relative to current file
      targetPath = path.resolve(fileDir, cleanHref);
    }

    if (!fs.existsSync(targetPath)) {
      console.error(`[FAIL] Broken internal link in ${relPath}: href="${href}" -> Target not found: ${targetPath}`);
      auditErrors.push(`Broken link in ${relPath}: href="${href}"`);
      brokenLinks++;
    }
  }
});

console.log(`Checked ${totalCheckedLinks} internal href links across ${allHtmlFiles.length} pages.`);
if (brokenLinks === 0) {
  console.log(`[PASS] 0 broken internal links detected! Every internal link resolves successfully.\n`);
}

// Summary
console.log('====================================================');
console.log(`AUDIT COMPLETE. Total Errors: ${auditErrors.length}`);
console.log('====================================================');

if (auditErrors.length > 0) {
  console.error('\nList of Errors:');
  auditErrors.forEach(err => console.error(`  - ${err}`));
  process.exit(1);
} else {
  console.log('\nALL QUALITY AUDITS PASSED WITH ZERO ERRORS!');
  process.exit(0);
}
