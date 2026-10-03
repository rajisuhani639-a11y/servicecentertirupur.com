// scripts/run_production_pass_qa.js
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
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtmlPaths = walk(ROOT_DIR);
console.log(`========================================`);
console.log(`RUNNING FULL PRODUCTION QA AUDIT`);
console.log(`Found ${allHtmlPaths.length} HTML files to inspect.`);
console.log(`========================================\n`);

let issues = [];

const TARGET_ADDRESS = 'Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India';
const TARGET_MAP_QUERY = '11.099761%2C77.347941';
const GOOGLE_TAG = 'G-DRV7B7TFS0';
const ACTIVE_PHONE_RAW = '+918882055269';
const ACTIVE_PHONE_DISP = '+91 88820 55269';
const ACTIVE_PHONE_DIGITS = '8882055269';

let statPagesWithAddress = 0;
let statLocalityBlocks = 0;
let statLinksAudited = 0;
let statPagesWithNewLogo = 0;
let statPagesWithNewPhone = 0;

// Set of all valid files for internal link resolution
const validRelativePaths = new Set(
  allHtmlPaths.map(p => path.relative(ROOT_DIR, p).replace(/\\/g, '/'))
);

// 1. Verify all favicon files exist
const requiredFaviconFiles = [
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
  'images/logo.svg'
];

requiredFaviconFiles.forEach(f => {
  const full = path.join(ROOT_DIR, f);
  if (!fs.existsSync(full) || fs.statSync(full).size === 0) {
    issues.push(`[FAVICON MISSING/EMPTY] Required asset ${f} is missing or empty`);
  }
});

allHtmlPaths.forEach(file => {
  const rel = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // 1. Check for old -tiruppur.html
  if (content.includes('-tiruppur.html')) {
    issues.push(`[OLD FILENAME IN CONTENT] ${rel} still references -tiruppur.html`);
  }

  // 2. Check for stray header characters (>> or > > >)
  if (/(?:<meta[^>]*>>+|<link[^>]*>>+|<title[^>]*>[\s\S]*?<\/title>>+|>[\s]*>[\s]*>)/i.test(content)) {
    issues.push(`[STRAY HEADER CHARS] ${rel} contains stray > or >> characters in header/meta`);
  }

  // 3. Check for old phone numbers
  if (content.includes('92115') || content.includes('9442054321')) {
    issues.push(`[OLD PHONE NUMBER FOUND] ${rel} contains old phone numbers`);
  }

  // 4. Verify new phone number in Call and WhatsApp buttons
  if (content.includes('tel:') && !content.includes(ACTIVE_PHONE_RAW)) {
    issues.push(`[CALL BUTTON WRONG NUMBER] ${rel} has tel link not matching ${ACTIVE_PHONE_RAW}`);
  }
  if (content.includes('wa.me/') && !content.includes(`wa.me/91${ACTIVE_PHONE_DIGITS}`)) {
    issues.push(`[WHATSAPP WRONG NUMBER] ${rel} has wa.me link not matching wa.me/91${ACTIVE_PHONE_DIGITS}`);
  }
  if (content.includes(ACTIVE_PHONE_RAW)) {
    statPagesWithNewPhone++;
  }

  // 5. Check for new Brand Icon in header
  if (content.includes('<div class="brand-icon">')) {
    if (content.includes('stroke="#38bdf8"') && content.includes('fill="#fbbf24"')) {
      statPagesWithNewLogo++;
    } else {
      issues.push(`[LOGO NOT UPDATED] ${rel} brand-icon does not use new Home + Repair SVG`);
    }
  }

  // 6. Check for duplicate "India, India"
  if (/India,\s*India/i.test(content)) {
    issues.push(`[DUPLICATE INDIA] ${rel} contains 'India, India'`);
  }

  // 7. Check for business address
  if (content.includes(TARGET_ADDRESS)) {
    statPagesWithAddress++;
  } else {
    issues.push(`[MISSING ADDRESS] ${rel} does not contain exact canonical address`);
  }

  // 8. Check for Google Map Embed
  if (content.includes('<iframe')) {
    if (!content.includes(TARGET_MAP_QUERY)) {
      issues.push(`[MAP QUERY MISMATCH] ${rel} iframe does not use 11.099761, 77.347941`);
    }
    if (!content.includes('loading="lazy"')) {
      issues.push(`[MAP LAZY MISSING] ${rel} iframe missing loading="lazy"`);
    }
  }

  // 9. Check Schema
  if (content.includes('application/ld+json')) {
    if (content.includes('"LocalBusiness"')) {
      if (!content.includes('"postalCode": "641604"')) {
        issues.push(`[SCHEMA PIN MISMATCH] ${rel} schema missing postalCode 641604`);
      }
      if (!content.includes('11.099761') || !content.includes('77.347941')) {
        issues.push(`[SCHEMA GEO MISMATCH] ${rel} schema missing 11.099761, 77.347941`);
      }
      if (!content.includes('"addressLocality": "Tirupur"')) {
        issues.push(`[SCHEMA LOCALITY MISMATCH] ${rel} schema addressLocality not Tirupur`);
      }
      if (!content.includes(`"telephone": "${ACTIVE_PHONE_RAW}"`)) {
        issues.push(`[SCHEMA PHONE MISMATCH] ${rel} schema telephone not ${ACTIVE_PHONE_RAW}`);
      }
    }
  }

  // 10. Check Google Tag G-DRV7B7TFS0
  const tagMatches = (content.match(new RegExp(GOOGLE_TAG, 'g')) || []).length;
  if (tagMatches === 0) {
    issues.push(`[GOOGLE TAG MISSING] ${rel} missing G-DRV7B7TFS0`);
  } else if (tagMatches > 2) {
    issues.push(`[DUPLICATE GOOGLE TAG] ${rel} has ${tagMatches} references to ${GOOGLE_TAG}`);
  }

  const otherTags = content.match(/G-[A-Z0-9]{8,12}/g);
  if (otherTags) {
    otherTags.forEach(t => {
      if (t !== GOOGLE_TAG) {
        issues.push(`[FOREIGN GOOGLE TAG] ${rel} contains unexpected tag ${t}`);
      }
    });
  }

  // 11. Check Canonical URL
  const canMatch = content.match(/<link rel="canonical" href="([^"]*)"/i);
  if (!canMatch) {
    issues.push(`[CANONICAL MISSING] ${rel}`);
  } else {
    const canUrl = canMatch[1];
    if (canUrl.includes('-tiruppur.html')) {
      issues.push(`[CANONICAL OLD SPELLING] ${rel}: ${canUrl}`);
    }
    if (!canUrl.startsWith('https://servicecentertirupur.com/')) {
      issues.push(`[CANONICAL DOMAIN ERROR] ${rel}: ${canUrl}`);
    }
  }

  // 12. Check Locality Section & Keywords
  if (content.includes('id="localitiesSection"')) {
    statLocalityBlocks++;
    if (!content.includes(`href="tel:${ACTIVE_PHONE_RAW}"`)) {
      issues.push(`[LOCALITY PHONE MISMATCH] ${rel} locality cards do not use ${ACTIVE_PHONE_RAW}`);
    }
    if (!/(?:Repair in|Service in|Service Center in)/i.test(content)) {
      issues.push(`[LOCALITY KEYWORD MISSING] ${rel} locality cards missing service keywords`);
    }
  }

  // 13. Check Internal Links
  const hrefMatches = content.matchAll(/href="([^"#][^"]*)"/g);
  for (const m of hrefMatches) {
    let target = m[1].trim();
    if (target.startsWith('http://') || target.startsWith('https://')) {
      if (target.includes('servicecentertirupur.com')) {
        target = target.replace('https://servicecentertirupur.com/', '/');
      } else {
        continue;
      }
    }
    if (target.startsWith('tel:') || target.startsWith('mailto:') || target.startsWith('javascript:')) {
      continue;
    }

    target = target.split('?')[0].split('#')[0];
    if (!target || target === '/') continue;

    let resolvedRel;
    if (target.startsWith('/')) {
      resolvedRel = target.slice(1);
    } else {
      const fileDir = path.dirname(rel);
      resolvedRel = path.join(fileDir, target).replace(/\\/g, '/');
    }

    if (resolvedRel.endsWith('/')) {
      resolvedRel += 'index.html';
    }

    if (!validRelativePaths.has(resolvedRel) && !fs.existsSync(path.join(ROOT_DIR, resolvedRel))) {
      issues.push(`[BROKEN LINK] in ${rel} -> target '${m[1]}' resolves to missing '${resolvedRel}'`);
    }
    statLinksAudited++;
  }

  // 14. Check foreign domains and localhost
  if (/(?:servicecentermadurai|servicecentereode|servicecentercoimbatore)\.com/i.test(content)) {
    issues.push(`[FOREIGN DOMAIN] ${rel} contains reference to other city domain`);
  }
  if (/(?:localhost|127\.0\.0\.1)/i.test(content)) {
    issues.push(`[LOCALHOST REFERENCE] ${rel} contains localhost or 127.0.0.1`);
  }
});

console.log(`========================================`);
console.log(`AUDIT RESULTS`);
console.log(`========================================`);
console.log(`Total HTML files audited: ${allHtmlPaths.length}`);
console.log(`Total pages with canonical address: ${statPagesWithAddress}`);
console.log(`Total pages with new logo: ${statPagesWithNewLogo}`);
console.log(`Total pages with active phone (${ACTIVE_PHONE_RAW}): ${statPagesWithNewPhone}`);
console.log(`Total locality sections: ${statLocalityBlocks}`);
console.log(`Total internal links audited: ${statLinksAudited}`);
console.log(`Total issues found: ${issues.length}`);

if (issues.length > 0) {
  console.log(`\nISSUES LIST:`);
  issues.slice(0, 50).forEach(i => console.log(' - ' + i));
  if (issues.length > 50) console.log(` ... and ${issues.length - 50} more.`);
  process.exit(1);
} else {
  console.log(`\n✓ ZERO ISSUES FOUND! 100% PRODUCTION PASS!`);
}
