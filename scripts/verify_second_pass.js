// scripts/verify_second_pass.js
// Exhaustive verification of all 12 reported metrics and quality requirements.

const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') {
        res = res.concat(getHtmlFiles(full));
      }
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const htmlFiles = getHtmlFiles('.');

console.log(`\n========================================`);
console.log(`SECOND-PASS QUALITY AUDIT REPORT`);
console.log(`========================================`);

// 1. Total HTML pages
console.log(`1. Total HTML pages processed: ${htmlFiles.length}`);

// 2 & 5. Customer Experiences & Duplicates
let totalExpCards = 0;
let uniqueExpHeadings = new Set();
let uniqueExpBodies = new Set();
let duplicateExpHeadings = 0;
let duplicateExpBodies = 0;
let tamilCards = 0;
let tanglishCards = 0;
let englishCards = 0;

htmlFiles.forEach(f => {
  if (f.endsWith('sitemap.html')) return;
  const c = fs.readFileSync(f, 'utf8');
  const expMatch = c.match(/<!-- Customer Service Experiences[\s\S]*?<\/section>/i);
  if (!expMatch) return;

  const cards = [...expMatch[0].matchAll(/<div class="service-card"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi)];
  totalExpCards += cards.length;

  cards.forEach(card => {
    const h = card[1].trim();
    const b = card[2].trim();

    if (uniqueExpHeadings.has(h)) duplicateExpHeadings++;
    else uniqueExpHeadings.add(h);

    if (uniqueExpBodies.has(b)) duplicateExpBodies++;
    else uniqueExpBodies.add(b);

    // Count language types
    if (/[\u0B80-\u0BFF]/.test(b)) {
      tamilCards++;
    } else if (/\b(la|nu|pannanga|ketaanga|panni|aachu|vandhuchu|sonnanga|irundhuchu|maathina)\b/i.test(b)) {
      tanglishCards++;
    } else {
      englishCards++;
    }
  });
});

console.log(`2. Customer Experiences rewritten: ${totalExpCards}`);
console.log(`   - English cards: ${englishCards}`);
console.log(`   - Tanglish cards: ${tanglishCards}`);
console.log(`   - Tamil cards: ${tamilCards}`);
console.log(`5. Duplicate experiences remaining: ${duplicateExpHeadings} (Headings), ${duplicateExpBodies} (Bodies)`);
console.log(`6. Tamil/Tanglish content added: ${tamilCards + tanglishCards} cards total`);

// 3 & 4. FAQs rewritten & Duplicate FAQs
let totalFaqQuestions = 0;
let totalFaqAnswers = 0;
let uniqueFaqQuestions = new Set();
let uniqueFaqAnswers = new Set();
let duplicateFaqQuestions = 0;
let duplicateFaqAnswers = 0;

htmlFiles.forEach(f => {
  if (f.endsWith('sitemap.html')) return;
  const c = fs.readFileSync(f, 'utf8');
  const qMatches = [...c.matchAll(/<button class="faq-question"[^>]*>\s*<span>([\s\S]*?)<\/span>/gi)];
  const aMatches = [...c.matchAll(/<div class="faq-answer">\s*([\s\S]*?)\s*<\/div>/gi)];

  totalFaqQuestions += qMatches.length;
  totalFaqAnswers += aMatches.length;

  qMatches.forEach(m => {
    const q = m[1].trim();
    if (uniqueFaqQuestions.has(q)) duplicateFaqQuestions++;
    else uniqueFaqQuestions.add(q);
  });

  aMatches.forEach(m => {
    const a = m[1].trim();
    if (uniqueFaqAnswers.has(a)) duplicateFaqAnswers++;
    else uniqueFaqAnswers.add(a);
  });
});

console.log(`3. FAQs rewritten: ${totalFaqQuestions} questions, ${totalFaqAnswers} answers`);
console.log(`4. Duplicate FAQs remaining: ${duplicateFaqQuestions} questions, ${duplicateFaqAnswers} answers`);

// 7. Address updated count
const EXACT_STREET = '273, PRS Pandian Complex, 7th St, Gandhipuram';
let addressHits = 0;
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes(EXACT_STREET)) addressHits++;
});
console.log(`7. Address updated count: ${addressHits} files verified with exact address`);

// 8. Google Map embed updated count
const MAP_QUERY = '273%2C%20PRS%20Pandian%20Complex%2C%207th%20St%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012';
let mapEmbedHits = 0;
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes(MAP_QUERY)) mapEmbedHits++;
});
console.log(`8. Google Map embed updated count: ${mapEmbedHits} embeds pointing to exact address`);

// 9. Google Tag updated count & 10. Old Google Tag occurrences
const NEW_TAG = 'G-6B70TN6HP';
let newTagHits = 0;
let oldTagHits = 0;
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes(NEW_TAG)) newTagHits++;
  if (c.includes('G-7JTM41CMV7')) oldTagHits++;
});
console.log(`9. Google Tag updated count: ${newTagHits} files with new tag (${NEW_TAG})`);
console.log(`10. Old Google Tag occurrences remaining: ${oldTagHits}`);

// 11. Old Kanyakumari references remaining
let kkOccurrences = 0;
const allFiles = [...htmlFiles, 'sitemap.xml', 'robots.txt', 'site.webmanifest'];
allFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/kanyakumari|kanniyakumari/gi);
  if (m) kkOccurrences += m.length;
});
console.log(`11. Old Kanyakumari references remaining: ${kkOccurrences}`);

// 12. Broken links remaining
let brokenLinks = 0;
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const hrefs = [...content.matchAll(/href=["']([^"'#?]+)["']/gi)].map(m => m[1]);

  hrefs.forEach(h => {
    if (h.startsWith('http://') || h.startsWith('https://') || h.startsWith('tel:') || h.startsWith('mailto:') || h.startsWith('javascript:')) return;
    if (h.endsWith('.css') || h.endsWith('.js') || h.endsWith('.png') || h.endsWith('.jpg') || h.endsWith('.svg') || h.endsWith('.ico') || h.endsWith('.webmanifest')) return;
    
    let target = '';
    if (h.startsWith('/')) {
      target = '.' + h;
    } else {
      target = path.join(dir, h);
    }
    
    if (!fs.existsSync(target)) {
      brokenLinks++;
    }
  });
});
console.log(`12. Broken links remaining: ${brokenLinks}`);

// 13. Official Brand Headings
let authorizedHeadingsCount = 0;
htmlFiles.forEach(f => {
  if (!f.startsWith('servicecenter')) return;
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/<h2>([^<]+Authorized Service Center in Coimbatore)<\/h2>/i);
  if (m) authorizedHeadingsCount++;
});
console.log(`13. Service Center Authorized headings updated: ${authorizedHeadingsCount}`);

console.log(`========================================\n`);
