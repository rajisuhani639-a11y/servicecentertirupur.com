// scripts/verify_uniqueness_audit.js
// Comprehensive audit verifying 100% uniqueness, zero duplication, and site integrity.

const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.git', 'scripts'].includes(item)) continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) res.push(...walk(full));
    else if (item.endsWith('.html')) res.push(full);
  }
  return res;
}

const htmlFiles = walk('.');
console.log('====================================================');
console.log('         FULL WEBSITE UNIQUENESS & INTEGRITY AUDIT  ');
console.log('====================================================');
console.log(`Auditing ${htmlFiles.length} HTML pages...\n`);

let totalErrors = 0;

// 1. Audit Customer Experiences Uniqueness
const expHeadings = new Map();
const expBodies = new Map();
let totalExpCards = 0;
let dupeHeadings = 0;
let dupeBodies = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const cardRegex = /<div class="(?:service|experience)-card"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
  let match;
  while ((match = cardRegex.exec(content)) !== null) {
    const cardHtml = match[1];
    const h3Match = cardHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const pMatch = cardHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/i);

    if (h3Match && pMatch && (cardHtml.includes('📍') || cardHtml.includes('English') || cardHtml.includes('Tamil') || cardHtml.includes('Tanglish'))) {
      totalExpCards++;
      const h3 = h3Match[1].replace(/<[^>]+>/g, '').trim();
      const p = pMatch[1].replace(/<[^>]+>/g, '').trim();

      if (expHeadings.has(h3)) {
        dupeHeadings++;
      } else {
        expHeadings.set(h3, file);
      }

      if (expBodies.has(p)) {
        dupeBodies++;
      } else {
        expBodies.set(p, file);
      }
    }
  }
});

console.log('--- 1. CUSTOMER EXPERIENCE UNIQUENESS ---');
console.log(`Total Experience Cards verified: ${totalExpCards}`);
console.log(`Duplicate Card Headings: ${dupeHeadings} (target = 0)`);
console.log(`Duplicate Card Story Bodies: ${dupeBodies} (target = 0)`);
if (dupeHeadings > 0 || dupeBodies > 0) totalErrors++;

// 2. Audit FAQ Questions & Answers Uniqueness
const faqQuestions = new Map();
const faqAnswers = new Map();
let totalFaqs = 0;
let dupeFaqQ = 0;
let dupeFaqA = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const faqRegex = /<div class="faq-item">[\s\S]*?<button class="faq-question"[^>]*>\s*<span>([\s\S]*?)<\/span>[\s\S]*?<div class="faq-answer">\s*([\s\S]*?)\s*<\/div>/g;
  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    totalFaqs++;
    const q = match[1].replace(/<[^>]+>/g, '').trim();
    const a = match[2].replace(/<[^>]+>/g, '').trim();

    if (faqQuestions.has(q)) {
      dupeFaqQ++;
    } else {
      faqQuestions.set(q, file);
    }

    if (faqAnswers.has(a)) {
      dupeFaqA++;
    } else {
      faqAnswers.set(a, file);
    }
  }
});

console.log('\n--- 2. FAQ QUESTIONS & ANSWERS UNIQUENESS ---');
console.log(`Total FAQs verified: ${totalFaqs}`);
console.log(`Duplicate FAQ Questions: ${dupeFaqQ} (target = 0)`);
console.log(`Duplicate FAQ Answers: ${dupeFaqA} (target = 0)`);
if (dupeFaqQ > 0 || dupeFaqA > 0) totalErrors++;

// 3. Karur & Regional Term Leftover Check
let karurMatches = 0;
let regionalMatches = 0;
const regionalTerms = ['Trichy', 'Palani', 'Cauvery', 'Amaravathi', 'Pasupatheeswarar', 'Mayanur', 'Kulithalai', 'Vengamedu', 'Thanthonimalai'];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const karurHits = content.match(/\bkarur\b/gi);
  if (karurHits) {
    karurMatches += karurHits.length;
    console.log(`Karur hit in ${file}: count ${karurHits.length}`);
  }

  regionalTerms.forEach(term => {
    const regHits = content.match(new RegExp(`\\b${term}\\b`, 'gi'));
    if (regHits) {
      regionalMatches += regHits.length;
      console.log(`Regional term '${term}' in ${file}: count ${regHits.length}`);
    }
  });
});

console.log('\n--- 3. REGIONAL & LOCALIZATION CHECK ---');
console.log(`Karur occurrences in visible HTML/meta: ${karurMatches} (target = 0)`);
console.log(`Old regional term occurrences: ${regionalMatches} (target = 0)`);
if (karurMatches > 0 || regionalMatches > 0) totalErrors++;

// 4. Robotic / Heavy English Audit
let roboticHits = 0;
const roboticWords = ['prompt assistance', 'service desk', 'residential premises', 'technical intervention', 'comprehensive assistance', 'diagnostic assessment', 'rectification', 'expeditious', 'endeavour'];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  roboticWords.forEach(w => {
    const hits = content.match(new RegExp(`\\b${w}\\b`, 'gi'));
    if (hits) {
      roboticHits += hits.length;
      console.log(`Heavy word '${w}' in ${file}`);
    }
  });
});

console.log('\n--- 4. SIMPLE HUMAN INDIAN ENGLISH AUDIT ---');
console.log(`Heavy/robotic word occurrences: ${roboticHits} (target = 0)`);
if (roboticHits > 0) totalErrors++;

// 5. Google Tag Audit
let oldTagHits = 0;
let newTagPages = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('G-CXRXPBP63E')) oldTagHits++;
  if (content.includes('G-7JTM41CMV7')) newTagPages++;
});

console.log('\n--- 5. GOOGLE TAG VERIFICATION ---');
console.log(`Old Google Tag (G-CXRXPBP63E) occurrences: ${oldTagHits} (target = 0)`);
console.log(`New Google Tag (G-7JTM41CMV7) pages: ${newTagPages} / ${htmlFiles.length}`);
if (oldTagHits > 0 || newTagPages !== htmlFiles.length) totalErrors++;

// 6. Locality Count Audit (200 per page across 174 pages)
let localityErrors = 0;
let locPagesChecked = 0;

htmlFiles.forEach(file => {
  if (file.includes('sitemap.html')) return;
  const content = fs.readFileSync(file, 'utf8');
  const locSectionMatch = content.match(/<section[^>]*id=["']localitiesSection["'][^>]*>([\s\S]*?)<\/section>/i);
  if (locSectionMatch) {
    locPagesChecked++;
    const locHtml = locSectionMatch[1];
    const cards = locHtml.match(/<div class=["']service-card["']/g) || [];
    const eastMatch = locHtml.match(/East Kanyakumari\s*\((\d+)\s+Verified/i);
    const westMatch = locHtml.match(/West Kanyakumari\s*\((\d+)\s+Verified/i);
    const northMatch = locHtml.match(/North Kanyakumari\s*\((\d+)\s+Verified/i);
    const southMatch = locHtml.match(/South Kanyakumari\s*\((\d+)\s+Verified/i);

    const eastCount = eastMatch ? parseInt(eastMatch[1]) : 0;
    const westCount = westMatch ? parseInt(westMatch[1]) : 0;
    const northCount = northMatch ? parseInt(northMatch[1]) : 0;
    const southCount = southMatch ? parseInt(southMatch[1]) : 0;

    if (cards.length !== 200 || eastCount !== 50 || westCount !== 50 || northCount !== 50 || southCount !== 50) {
      localityErrors++;
      console.log(`Locality error in ${file}: total=${cards.length}, E=${eastCount}, W=${westCount}, N=${northCount}, S=${southCount}`);
    }
  }
});

console.log('\n--- 6. LOCALITY CARD COUNT VERIFICATION ---');
console.log(`Pages with Locality section checked: ${locPagesChecked}`);
console.log(`Pages with incorrect locality counts: ${localityErrors} (target = 0)`);
if (localityErrors > 0) totalErrors++;

// 7. Internal Links Audit
let totalLinks = 0;
let brokenLinks = 0;
const existingFiles = new Set(htmlFiles.map(f => path.resolve(f).toLowerCase()));

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const linkRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:') || href.startsWith('#') || href.startsWith('http')) {
      continue;
    }
    totalLinks++;
    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref) continue;

    let targetPath;
    if (cleanHref.startsWith('/')) {
      targetPath = path.resolve('.', cleanHref.slice(1));
    } else {
      targetPath = path.resolve(path.dirname(file), cleanHref);
    }

    if (!existingFiles.has(targetPath.toLowerCase()) && !fs.existsSync(targetPath)) {
      brokenLinks++;
      console.log(`Broken link in ${file}: ${href} -> ${targetPath}`);
    }
  }
});

console.log('\n--- 7. INTERNAL LINKS AUDIT ---');
console.log(`Total internal links checked: ${totalLinks}`);
console.log(`Broken internal links: ${brokenLinks} (target = 0)`);
if (brokenLinks > 0) totalErrors++;

console.log('\n====================================================');
console.log(`AUDIT COMPLETE. Total Integrity Errors: ${totalErrors}`);
console.log('====================================================');
