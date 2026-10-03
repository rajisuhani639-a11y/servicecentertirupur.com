const fs = require('fs');
const path = require('path');
const wmBrands = require('./wm_all_brands');

console.log("==================================================");
console.log("RUNNING COMPREHENSIVE AUDIT ON KARUR WASHING MACHINE PAGES");
console.log("==================================================");

const wmDir = path.join(__dirname, '..', 'washing-machine');
let totalErrors = 0;

// 1. Verify folder exists and is lowercase
if (!fs.existsSync(wmDir)) {
  console.error("FAIL: washing-machine/ directory does not exist!");
  process.exit(1);
}
console.log("PASS: washing-machine/ directory exists and is lowercase.");

// 2. Check all files exist
const mainLandingFile = 'washing-machine-repair-service-in-karur.html';
const mainLandingPath = path.join(wmDir, mainLandingFile);
if (!fs.existsSync(mainLandingPath)) {
  console.error(`FAIL: Main page ${mainLandingFile} missing!`);
  totalErrors++;
} else {
  console.log(`PASS: Main landing page ${mainLandingFile} exists.`);
}

let missingBrandPages = 0;
wmBrands.forEach(b => {
  const bPath = path.join(wmDir, b.slug);
  if (!fs.existsSync(bPath)) {
    console.error(`FAIL: Brand page ${b.slug} missing!`);
    missingBrandPages++;
    totalErrors++;
  }
});

if (missingBrandPages === 0) {
  console.log(`PASS: All 30 brand pages exist inside washing-machine/ folder.`);
}

// All 31 files to audit
const allFiles = [mainLandingFile, ...wmBrands.map(b => b.slug)];

// Forbidden cities (Karur is the ONLY allowed city)
const forbiddenCities = [
  'Tirunelveli',
  'TIRUNELVELI',
  'tirunelveli',
  'Tenkasi',
  'Ghaziabad',
  'Delhi',
  'Noida',
  'Pune',
  'Nangal',
  'Haridwar',
  'Chennai',
  'Bangalore',
  'Mumbai'
];

// Forbidden AI buzzwords
const aiBuzzwords = [
  'tailored',
  'comprehensive',
  'seamless',
  'optimized',
  'optimization',
  'enhanced',
  'precision',
  'sophisticated',
  'facilitate',
  'intervention',
  'operational efficiency',
  'robust',
  'streamlined',
  'bespoke',
  'proactive',
  'integrated',
  'specialized',
  'expertise',
  'ecosystem',
  'cutting-edge',
  'solution-oriented',
  'customer-centric',
  'advanced diagnostic',
  'technical intervention',
  'performance enhancement',
  'premium experience',
  'reliable ecosystem',
  'end-to-end solution'
];

allFiles.forEach(file => {
  const filePath = path.join(wmDir, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');

  // Check forbidden cities
  forbiddenCities.forEach(city => {
    const regex = new RegExp(`\\b${city}\\b`, 'i');
    if (regex.test(content)) {
      console.error(`FAIL in ${file}: Found forbidden city "${city}"`);
      totalErrors++;
    }
  });

  // Check AI buzzwords
  aiBuzzwords.forEach(bw => {
    const regex = new RegExp(`\\b${bw}\\b`, 'i');
    if (regex.test(content)) {
      console.error(`FAIL in ${file}: Found AI buzzword "${bw}"`);
      totalErrors++;
    }
  });

  // Check single H1
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches || h1Matches.length !== 1) {
    console.error(`FAIL in ${file}: Must have exactly one H1, found ${h1Matches ? h1Matches.length : 0}`);
    totalErrors++;
  } else {
    // Check that H1 mentions Karur
    if (!h1Matches[0].includes('Karur')) {
      console.error(`FAIL in ${file}: H1 does not contain "Karur" -> ${h1Matches[0]}`);
      totalErrors++;
    }
  }

  // Check Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].includes('Karur')) {
    console.error(`FAIL in ${file}: Title does not contain Karur`);
    totalErrors++;
  }

  // Check Meta Description
  const metaDescMatch = content.match(/<meta name="description" content="([^"]+)"/i);
  if (!metaDescMatch || !metaDescMatch[1].includes('Karur')) {
    console.error(`FAIL in ${file}: Meta description does not contain Karur`);
    totalErrors++;
  }

  // Check Canonical URL
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/i);
  if (!canonicalMatch || !canonicalMatch[1].includes(`https://servicecenterkarur.com/washing-machine/${file}`)) {
    console.error(`FAIL in ${file}: Canonical URL incorrect: ${canonicalMatch ? canonicalMatch[1] : 'none'}`);
    totalErrors++;
  }

  // Check Schema
  const schemaMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  if (!schemaMatches || schemaMatches.length === 0) {
    console.error(`FAIL in ${file}: Missing Schema JSON-LD`);
    totalErrors++;
  } else {
    schemaMatches.forEach(sm => {
      const rawJson = sm.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
      try {
        const parsed = JSON.parse(rawJson);
        const jsonStr = JSON.stringify(parsed);
        if (jsonStr.includes('Tirunelveli') || jsonStr.includes('tirunelveli')) {
          console.error(`FAIL in ${file}: Schema contains Tirunelveli`);
          totalErrors++;
        }
        if (!jsonStr.includes('Karur')) {
          console.error(`FAIL in ${file}: Schema missing Karur`);
          totalErrors++;
        }
      } catch (err) {
        console.error(`FAIL in ${file}: Invalid JSON in Schema: ${err.message}`);
        totalErrors++;
      }
    });
  }

  // Check Customer Experiences word counts (for brand pages)
  if (file !== mainLandingFile) {
    const expRegex = /<p style="font-size: 0\.88rem; color: #334155; line-height: 1\.6; margin: 0;">([\s\S]*?)<\/p>/g;
    let match;
    let expCount = 0;
    while ((match = expRegex.exec(content)) !== null) {
      expCount++;
      const text = match[1].replace(/^[“"]|[”"]$/g, '').trim();
      const words = text.split(/\s+/).length;
      if (words < 40 || words > 50) {
        console.error(`FAIL in ${file}: Customer experience #${expCount} has ${words} words (must be 40-50 words)`);
        totalErrors++;
      }
    }
    if (expCount < 6) {
      console.error(`FAIL in ${file}: Found only ${expCount} customer experiences (expected at least 6)`);
      totalErrors++;
    }
  }

  // Check Floating Buttons and Mobile Bottom Bar
  if (!content.includes('class="scroll-floating-cta"')) {
    console.error(`FAIL in ${file}: Missing scroll-floating-cta wrapper`);
    totalErrors++;
  }
  if (!content.includes('floating-left-whatsapp')) {
    console.error(`FAIL in ${file}: Missing floating-left-whatsapp CTA`);
    totalErrors++;
  }
  if (!content.includes('floating-right-call')) {
    console.error(`FAIL in ${file}: Missing floating-right-call CTA`);
    totalErrors++;
  }
  if (!content.includes('class="mobile-bottom-bar"')) {
    console.error(`FAIL in ${file}: Missing mobile-bottom-bar`);
    totalErrors++;
  }
  if (!content.includes('bottom-bar-whatsapp') || !content.includes('bottom-bar-call')) {
    console.error(`FAIL in ${file}: Missing bottom-bar-whatsapp or bottom-bar-call in mobile bottom bar`);
    totalErrors++;
  }

  // Check 5 Zones and 60 Localities
  const zones = ['Central Karur', 'North Karur', 'South Karur', 'East Karur', 'West Karur'];
  zones.forEach(z => {
    if (!content.includes(z)) {
      console.error(`FAIL in ${file}: Missing zone heading "${z}"`);
      totalErrors++;
    }
  });

  // Count locality cards
  const locCardMatches = content.match(/Doorstep Visit<\/span>/g);
  // Each locality card has "Doorstep Visit"
  if (!locCardMatches || locCardMatches.length < 60) {
    console.error(`FAIL in ${file}: Found ${locCardMatches ? locCardMatches.length : 0} locality cards (expected at least 60)`);
    totalErrors++;
  }

  // Check Locality Keywords
  if (file === mainLandingFile) {
    // Main page should have generic washing machine keywords
    if (!content.includes('Washing Machine Repair in Karur Town')) {
      console.error(`FAIL in ${file}: Main page missing generic locality keyword`);
      totalErrors++;
    }
  } else {
    // Brand page should have Brand + Washing Machine in locality headings
    const currentBrand = wmBrands.find(b => b.slug === file);
    if (currentBrand) {
      const brandLocPattern = new RegExp(`${currentBrand.name}\\s+Washing\\s+Machine`, 'i');
      if (!brandLocPattern.test(content)) {
        console.error(`FAIL in ${file}: Brand page missing Brand + Washing Machine locality keyword`);
        totalErrors++;
      }
    }
  }
});

console.log("--------------------------------------------------");
if (totalErrors === 0) {
  console.log("SUCCESS: ALL 31 KARUR WASHING MACHINE PAGES PASSED TECHNICAL, SEO, AND CONTENT AUDIT!");
} else {
  console.error(`FAILED: Total errors found: ${totalErrors}`);
  process.exit(1);
}
