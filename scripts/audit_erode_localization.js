// scripts/audit_erode_localization.js
// Comprehensive audit script verifying all requirements for Erode localization.

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
      res.push(full.replace(/\\/g, '/'));
    }
  });
  return res;
}

const htmlFiles = getHtmlFiles('.');
console.log(`Total HTML files found on disk: ${htmlFiles.length}`);

// 1. Audit filenames: ensure no -coimbatore.html remains
const oldCoimbatoreFiles = htmlFiles.filter(f => f.includes('-coimbatore.html'));
console.log(`\n=== 1. FILENAMES AUDIT ===`);
console.log(`Old -coimbatore.html files remaining: ${oldCoimbatoreFiles.length}`);
if (oldCoimbatoreFiles.length > 0) {
  console.log('FAIL: Some old files still exist:', oldCoimbatoreFiles.slice(0, 5));
} else {
  console.log('PASS: All files have modern -erode.html or clean filenames!');
}

// 2. Audit Coimbatore full-text in public website files
const allPublicFiles = [
  ...htmlFiles,
  'sitemap.xml',
  'robots.txt',
  'site.webmanifest',
  'js/main.js'
];

let totalCbHits = 0;
const cbHitFiles = [];

allPublicFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/coimbatore|kanyakumari/gi);
  if (matches) {
    totalCbHits += matches.length;
    cbHitFiles.push({ file: f, count: matches.length });
  }
});

console.log(`\n=== 2. COIMBATORE / KANYAKUMARI TEXT AUDIT ===`);
console.log(`Total occurrences in public files: ${totalCbHits}`);
if (cbHitFiles.length > 0) {
  console.log('FAIL: Files containing old city references:', cbHitFiles.slice(0, 10));
} else {
  console.log('PASS: Zero Coimbatore or Kanyakumari references in public website files!');
}

// 3. Audit Google Tag G-15NKBXETXP
let gTagPass = 0;
let oldTagCount = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('G-6B70TN6HP')) oldTagCount++;
  const m = (content.match(/gtag\('config',\s*'G-15NKBXETXP'\)/g) || []).length;
  if (m === 1) gTagPass++;
});
console.log(`\n=== 3. GOOGLE TAG AUDIT ===`);
console.log(`Pages with G-15NKBXETXP exactly once: ${gTagPass} / ${htmlFiles.length}`);
console.log(`Pages with old tag G-6B70TN6HP: ${oldTagCount}`);

// 4. Audit Address & Coordinates
let correctAddressCount = 0;
let correctGeoCount = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('1167, Ground Floor, Muthaiya Complex, Mettur Road, Opposite GV Audios, Erode, Tamil Nadu – 638011, India')) {
    correctAddressCount++;
  }
  if (content.includes('"latitude": 11.348') && content.includes('"longitude": 77.719')) {
    correctGeoCount++;
  }
});
console.log(`\n=== 4. ADDRESS & SCHEMA GEO AUDIT ===`);
console.log(`Pages with exact Erode address in footer: ${correctAddressCount} / ${htmlFiles.length}`);
console.log(`Pages with exact GeoCoordinates (11.3480, 77.7190): ${correctGeoCount} / ${htmlFiles.length}`);

// 5. Customer Experiences Uniqueness
console.log(`\n=== 5. CUSTOMER EXPERIENCES UNIQUENESS AUDIT ===`);
const expHeadings = new Map();
const expBodies = new Map();
let duplicateExpHeadings = 0;
let duplicateExpBodies = 0;
let totalExpCards = 0;

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
    if (expHeadings.has(h)) duplicateExpHeadings++;
    else expHeadings.set(h, f);

    if (expBodies.has(b)) duplicateExpBodies++;
    else expBodies.set(b, f);
  });
});
console.log(`Total experience cards parsed: ${totalExpCards}`);
console.log(`Unique experience headings: ${expHeadings.size}`);
console.log(`Duplicate experience headings: ${duplicateExpHeadings}`);
console.log(`Unique experience bodies: ${expBodies.size}`);
console.log(`Duplicate experience bodies: ${duplicateExpBodies}`);

// 6. FAQs Uniqueness
console.log(`\n=== 6. FAQS CROSS-PAGE UNIQUENESS AUDIT ===`);
const faqQuestions = new Map();
const faqAnswers = new Map();
let duplicateFaqQuestions = 0;
let duplicateFaqAnswers = 0;

htmlFiles.forEach(f => {
  if (f.endsWith('sitemap.html')) return;
  const c = fs.readFileSync(f, 'utf8');
  const qMatches = [...c.matchAll(/<button class="faq-question"[^>]*>\s*<span>([\s\S]*?)<\/span>/gi)];
  const aMatches = [...c.matchAll(/<div class="faq-answer">\s*([\s\S]*?)\s*<\/div>/gi)];

  qMatches.forEach(m => {
    const q = m[1].trim();
    if (faqQuestions.has(q)) duplicateFaqQuestions++;
    else faqQuestions.set(q, f);
  });

  aMatches.forEach(m => {
    const a = m[1].trim();
    if (faqAnswers.has(a)) duplicateFaqAnswers++;
    else faqAnswers.set(a, f);
  });
});
console.log(`Total FAQ questions parsed: ${faqQuestions.size + duplicateFaqQuestions}`);
console.log(`Duplicate FAQ questions: ${duplicateFaqQuestions}`);
console.log(`Duplicate FAQ answers: ${duplicateFaqAnswers}`);

// 7. Hero Leads Uniqueness
console.log(`\n=== 7. HERO LEADS UNIQUENESS AUDIT ===`);
const heroLeads = new Map();
let duplicateHeroLeads = 0;
htmlFiles.forEach(f => {
  if (f.endsWith('sitemap.html')) return;
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/<p class="hero-(?:lead|copy)">([\s\S]*?)<\/p>/i);
  if (m) {
    const lead = m[1].trim();
    if (heroLeads.has(lead)) duplicateHeroLeads++;
    else heroLeads.set(lead, f);
  }
});
console.log(`Total hero leads parsed: ${heroLeads.size + duplicateHeroLeads}`);
console.log(`Duplicate hero leads: ${duplicateHeroLeads}`);

// 8. Internal links and assets check
console.log(`\n=== 8. BROKEN LINKS & ASSETS AUDIT ===`);
let brokenLinks = 0;
let totalLinksChecked = 0;
const rootDir = process.cwd();

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const links = content.match(/href="([^"#:]+)"/g) || [];
  links.forEach(l => {
    totalLinksChecked++;
    const rawTarget = l.replace('href="', '').replace('"', '');
    if (rawTarget.endsWith('.html') && !rawTarget.startsWith('http') && !rawTarget.startsWith('tel:') && !rawTarget.startsWith('mailto:')) {
      let resolved;
      if (rawTarget.startsWith('/')) {
        resolved = path.join(rootDir, rawTarget.slice(1));
      } else {
        resolved = path.join(path.dirname(f), rawTarget);
      }
      if (!fs.existsSync(resolved)) {
        brokenLinks++;
        console.log(`Broken link in ${f}: ${rawTarget} -> ${resolved}`);
      }
    }
  });
});
console.log(`Total internal links checked: ${totalLinksChecked}`);
console.log(`Broken internal links: ${brokenLinks}`);

// 9. Technical Canonicals & Sitemap
console.log(`\n=== 9. CANONICALS & SITEMAP AUDIT ===`);
let brokenCanonicals = 0;
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/<link rel="canonical" href="([^"]+)"/i);
  if (!m || !m[1].includes('servicecentereode.com')) {
    brokenCanonicals++;
  }
});
console.log(`Non-Erode canonical links: ${brokenCanonicals}`);
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
const sitemapCb = (sitemapContent.match(/coimbatore/gi) || []).length;
console.log(`Coimbatore references in sitemap.xml: ${sitemapCb}`);
console.log(`Sitemap total URLs: ${(sitemapContent.match(/<loc>/g) || []).length}`);

// 10. AI Buzzwords Check
console.log(`\n=== 10. AI BUZZWORDS AUDIT ===`);
const buzzwords = [
  'prompt assistance',
  'comprehensive assistance',
  'facilitate',
  'utilize',
  'technical intervention',
  'diagnostic assessment',
  'expeditious',
  'endeavour',
  'residential premises',
  'seamless service experience',
  'dedicated service desk'
];
let buzzwordHits = 0;
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  buzzwords.forEach(b => {
    const regex = new RegExp('\\b' + b + '\\b', 'gi');
    const m = c.match(regex);
    if (m) buzzwordHits += m.length;
  });
});
console.log(`Total AI / robotic buzzword hits found: ${buzzwordHits}`);
