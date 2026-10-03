const fs = require('fs');
const path = require('path');
const allBrands = require('./brand_data');

console.log("=== COMMENCING COMPLETE AUDIT OF KARUR AC PAGES ===");

let passed = true;
const errors = [];
const warnings = [];

// 1. Verify all 29 brand pages exist in ac/
console.log("\n--- 1. Checking File Existence in ac/ ---");
const acDir = path.join(__dirname, '..', 'ac');
allBrands.forEach(b => {
  const filePath = path.join(acDir, b.slug);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing page in ac/: ${b.slug}`);
    passed = false;
  }
});
console.log(`Verified: All ${allBrands.length} brand files checked in ac/.`);

// 2. Verify no duplicates in root
console.log("\n--- 2. Checking No Duplicates in Root ---");
allBrands.forEach(b => {
  const rootPath = path.join(__dirname, '..', b.slug);
  if (fs.existsSync(rootPath)) {
    errors.push(`Duplicate file still exists in root: ${b.slug}`);
    passed = false;
  }
});
console.log("Root directory checked for duplicates.");

// 3. Verify main AC page brand links & locality SEO
console.log("\n--- 3. Checking Main AC Page ---");
const mainAcPath = path.join(__dirname, '..', 'ac-repair-service-in-karur.html');
const mainAcHtml = fs.readFileSync(mainAcPath, 'utf8');

allBrands.forEach(b => {
  const expectedLink = `href="ac/${b.slug}"`;
  if (!mainAcHtml.includes(expectedLink)) {
    errors.push(`Main AC page missing link: ${expectedLink}`);
    passed = false;
  }
});

// Check Main AC page customer problems word count (40-50 words each)
const mainExpRegex = /<p class="experience-body">\s*"([\s\S]*?)"\s*<\/p>/g;
let mMatch;
let mainExpIndex = 1;
while ((mMatch = mainExpRegex.exec(mainAcHtml)) !== null) {
  const text = mMatch[1].replace(/\s+/g, ' ').trim();
  const wc = text.split(' ').length;
  if (wc < 40 || wc > 50) {
    errors.push(`Main AC page Problem ${mainExpIndex}: ${wc} words (must be 40-50 words)`);
  }
  mainExpIndex++;
}
console.log(`Main AC page customer problems checked (${mainExpIndex - 1} scenarios).`);

// 4. Check CSS & JS for Floating CTA (fixed at 55vh, NO scroll triggers)
console.log("\n--- 4. Checking Floating CTA Positioning & JS ---");
const cssPath = path.join(__dirname, '..', 'css', 'style.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const jsPath = path.join(__dirname, '..', 'js', 'main.js');
const jsContent = fs.readFileSync(jsPath, 'utf8');

if (!cssContent.includes('top: 55vh')) {
  errors.push("CSS style.css missing 'top: 55vh' fixed viewport positioning for floating CTA");
}
if (jsContent.includes('scrollPercent') || jsContent.includes('window.scrollY')) {
  errors.push("JS main.js still contains scroll-trigger logic (scrollPercent / scrollY)");
}
if (cssContent.includes('opacity: 0') && cssContent.includes('.scroll-floating-cta.floating-visible')) {
  errors.push("CSS style.css still contains hidden-initially scroll-triggered floating CTA rules");
}

// 5. Verify sitemap.xml has all 29 /ac/ URLs
console.log("\n--- 5. Checking Sitemap.xml ---");
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
const sitemapHtml = fs.readFileSync(sitemapPath, 'utf8');
allBrands.forEach(b => {
  const expectedUrl = `https://servicecenterkarur.com/ac/${b.slug}`;
  if (!sitemapHtml.includes(expectedUrl)) {
    errors.push(`Sitemap missing URL: ${expectedUrl}`);
    passed = false;
  }
});
console.log("Sitemap URLs verified.");

// Forbidden cities list
const forbiddenCities = [
  "Nangal", "Delhi", "Noida", "Pune", "Ghaziabad", "Haridwar",
  "Madurai", "Tenkasi", "Chennai", "Bangalore", "Mumbai"
];

// Forbidden AI corporate words list
const forbiddenAiWords = [
  "tailored",
  "seamless",
  "comprehensive",
  "precision",
  "promptly",
  "optimized",
  "optimization",
  "sophisticated",
  "facilitate",
  "diagnostic intervention",
  "technical intervention",
  "operational efficiency",
  "superior",
  "premium experience",
  "bespoke",
  "proactive",
  "cutting-edge",
  "next-generation",
  "ecosystem"
];

// Forbidden pricing placeholders
const forbiddenPricing = [
  "Model Dependent",
  "Pricing Guidance",
  "Joint Dependent",
  "Inspection Rate"
];

console.log("\n--- 6. Auditing Content of ALL 29 Brand Pages ---");

allBrands.forEach(b => {
  const filePath = path.join(acDir, b.slug);
  const content = fs.readFileSync(filePath, 'utf8');

  // Relative links check
  if (!content.includes('href="../css/style.css"')) {
    errors.push(`${b.slug}: Missing or broken relative CSS link ../css/style.css`);
  }
  if (!content.includes('src="../js/config.js"')) {
    errors.push(`${b.slug}: Missing or broken relative JS link ../js/config.js`);
  }
  if (!content.includes('src="../js/main.js"')) {
    errors.push(`${b.slug}: Missing or broken relative JS link ../js/main.js`);
  }
  if (!content.includes('href="../ac-repair-service-in-karur.html"')) {
    errors.push(`${b.slug}: Missing link to ../ac-repair-service-in-karur.html`);
  }
  if (!content.includes(`https://servicecenterkarur.com/ac/${b.slug}`)) {
    errors.push(`${b.slug}: Canonical URL mismatch`);
  }

  // CTA systems check
  if (!content.includes('id="scrollFloatingCTA"')) {
    errors.push(`${b.slug}: Missing scrollFloatingCTA`);
  }
  if (!content.includes('class="mobile-bottom-bar"')) {
    errors.push(`${b.slug}: Missing mobile-bottom-bar`);
  }

  // Mobile button order check (WhatsApp left, Call right)
  const bottomBarMatch = content.match(/<div class="mobile-bottom-bar">([\s\S]*?)<\/div>/);
  if (bottomBarMatch) {
    const bottomBarHtml = bottomBarMatch[1];
    const waIndex = bottomBarHtml.indexOf('bottom-bar-whatsapp');
    const callIndex = bottomBarHtml.indexOf('bottom-bar-call');
    if (waIndex === -1 || callIndex === -1 || waIndex > callIndex) {
      errors.push(`${b.slug}: Mobile bottom bar button order incorrect (WhatsApp must be LEFT, Call RIGHT)`);
    }
  }

  // Types section check
  if (!content.includes('Air Conditioner Types We Service')) {
    errors.push(`${b.slug}: Missing 'Air Conditioner Types We Service' section`);
  }
  if (!content.includes('Common Problems Checked:')) {
    errors.push(`${b.slug}: Missing 'Common Problems Checked:' in Types section`);
  }
  if (!content.includes('Common Parts Checked:')) {
    errors.push(`${b.slug}: Missing 'Common Parts Checked:' in Types section`);
  }

  // Customer Experience word count check (40-50 words each)
  const expMatch = content.match(/<div class="experience-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
  if (!expMatch) {
    errors.push(`${b.slug}: Missing experience-grid section`);
  } else {
    const expBodies = [...expMatch[1].matchAll(/<p class="experience-body">\s*"([\s\S]*?)"\s*<\/p>/g)];
    if (expBodies.length === 0) {
      errors.push(`${b.slug}: No experience-body cards found`);
    }
    expBodies.forEach((eb, idx) => {
      const cleanText = eb[1].replace(/\s+/g, ' ').trim();
      const wc = cleanText.split(' ').length;
      if (wc < 40 || wc > 50) {
        errors.push(`${b.slug}: Customer Problem ${idx + 1} has ${wc} words (must be 40-50 words)`);
      }
    });
  }

  // Locality section check: Brand name must appear in locality section
  const locSectionMatch = content.match(/<div class="localities-grid-expanded">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
  if (!locSectionMatch) {
    errors.push(`${b.slug}: Missing localities-grid-expanded section`);
  } else {
    const locHtml = locSectionMatch[1];
    const locCards = [...locHtml.matchAll(/<div class="locality-card">([\s\S]*?)<\/p>\s*<\/div>/g)];
    if (locCards.length < 50) {
      errors.push(`${b.slug}: Has only ${locCards.length} locality cards (expected 60)`);
    }
    // Check that brand name is present in locality keywords
    if (!locHtml.includes(b.name)) {
      errors.push(`${b.slug}: Locality section does NOT contain brand name "${b.name}"`);
    }
    // Check that NO other brand names appear in this locality section
    allBrands.forEach(otherB => {
      if (otherB.slug !== b.slug && otherB.name !== b.name) {
        // Only check if other brand name is not a substring (e.g. Acer in Acerpure)
        if (b.name === 'Acer' && otherB.name === 'Acerpure') return;
        if (b.name === 'Acerpure' && otherB.name === 'Acer') return;
        const brandRegex = new RegExp(`\\b${otherB.name}\\b`, 'i');
        if (brandRegex.test(locHtml)) {
          errors.push(`${b.slug}: Locality section accidentally contains OTHER brand name "${otherB.name}"`);
        }
      }
    });
  }

  // Pricing check
  forbiddenPricing.forEach(fp => {
    if (content.includes(fp)) {
      errors.push(`${b.slug}: Contains forbidden pricing text "${fp}"`);
    }
  });

  // Verify actual prices exist
  if (!content.includes('₹249') || !content.includes('₹399') || !content.includes('₹799')) {
    errors.push(`${b.slug}: Missing expected standard service prices (₹249, ₹399, ₹799)`);
  }

  // Forbidden cities check
  forbiddenCities.forEach(city => {
    const regex = new RegExp(`\\b${city}\\b`, 'i');
    if (regex.test(content)) {
      errors.push(`${b.slug}: Contains forbidden city name "${city}"`);
    }
  });

  // Forbidden AI words check
  forbiddenAiWords.forEach(aiWord => {
    const regex = new RegExp(`\\b${aiWord}\\b`, 'i');
    if (regex.test(content)) {
      warnings.push(`${b.slug}: Contains AI word "${aiWord}"`);
    }
  });
});

console.log("\n=== AUDIT RESULTS ===");
if (errors.length === 0) {
  console.log("✅ ALL CRITICAL CHECKS PASSED PERFECTLY! (0 errors)");
} else {
  console.log(`❌ FOUND ${errors.length} ERRORS:`);
  errors.forEach(e => console.log("   - " + e));
}

if (warnings.length === 0) {
  console.log("✅ ZERO AI WORDS FOUND! (0 warnings)");
} else {
  console.log(`⚠️ FOUND ${warnings.length} AI WORD WARNINGS:`);
  warnings.forEach(w => console.log("   - " + w));
}

process.exit(errors.length > 0 ? 1 : 0);
