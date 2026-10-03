const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') continue;
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const allFiles = getFiles('.');
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));
const techFiles = ['sitemap.xml', 'robots.txt', 'site.webmanifest', 'js/config.js', 'js/main.js', 'css/style.css'];

console.log('====================================================');
console.log('       FULL KANYAKUMARI WEBSITE AUDIT & VERIFY       ');
console.log('====================================================\n');

// 1. AUDIT: KARUR LEFTOVERS CHECK (TARGET = 0)
let karurInHtml = 0;
let filesWithKarur = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/karur/gi);
  if (matches) {
    karurInHtml += matches.length;
    filesWithKarur.push({ file: f, count: matches.length });
  }
});

console.log(`--- 1. KARUR LEFTOVERS CHECK (TARGET = 0) ---`);
console.log(`HTML Files checked: ${htmlFiles.length}`);
console.log(`Total Karur occurrences in HTML: ${karurInHtml}`);
if (filesWithKarur.length > 0) {
  console.log('Files with Karur:', filesWithKarur);
}

let karurInTech = 0;
techFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/karur/gi);
    if (matches) {
      karurInTech += matches.length;
      console.log(`Tech file ${f} has ${matches.length} Karur matches.`);
    }
  }
});
console.log(`Tech files Karur occurrences: ${karurInTech}`);

// 2. AUDIT: GOOGLE TAG AUDIT
console.log('\n--- 2. GOOGLE TAG AUDIT ---');
let oldTagCount = 0;
let newTagCount = 0;
let pagesWithDuplicateNewTag = [];
let pagesWithoutNewTag = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const oldMatches = content.match(/G-CXRXPBP63E/g);
  if (oldMatches) oldTagCount += oldMatches.length;

  const newMatches = content.match(/G-7JTM41CMV7/g);
  if (newMatches) {
    // In Google tag snippet, G-7JTM41CMV7 appears twice (url id= and config)
    if (newMatches.length !== 2) {
      pagesWithDuplicateNewTag.push({ file: f, count: newMatches.length });
    }
    newTagCount++;
  } else {
    pagesWithoutNewTag.push(f);
  }
});

console.log(`Old Google Tag (G-CXRXPBP63E) occurrences: ${oldTagCount} (target = 0)`);
console.log(`HTML pages with new Google Tag (G-7JTM41CMV7): ${newTagCount} / ${htmlFiles.length}`);
if (pagesWithDuplicateNewTag.length > 0) {
  console.log('Pages with unusual new tag count:', pagesWithDuplicateNewTag);
}
if (pagesWithoutNewTag.length > 0) {
  console.log('Pages missing new tag:', pagesWithoutNewTag);
}

// 3. AUDIT: LOCALITY COUNT CHECK (TARGET: 50 East, 50 West, 50 North, 50 South = 200)
console.log('\n--- 3. LOCALITY COUNT CHECK (TARGET: 200 per page) ---');
let locPagesChecked = 0;
let pagesWithIncorrectLocCount = [];

htmlFiles.forEach(f => {
  const norm = f.replace(/\\/g, '/');
  if (norm.endsWith('sitemap.html')) return;

  const content = fs.readFileSync(f, 'utf8');
  const locSectionMatch = content.match(/<section[^>]*id=["']localitiesSection["'][^>]*>[\s\S]*?<\/section>/i);
  if (locSectionMatch) {
    locPagesChecked++;
    const locHtml = locSectionMatch[0];
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
      pagesWithIncorrectLocCount.push({
        file: f,
        totalCards: cards.length,
        east: eastCount,
        west: westCount,
        north: northCount,
        south: southCount
      });
    }
  }
});

console.log(`Pages with Locality section checked: ${locPagesChecked}`);
console.log(`Pages with incorrect Locality count: ${pagesWithIncorrectLocCount.length}`);
if (pagesWithIncorrectLocCount.length > 0) {
  console.log('Sample pages with incorrect counts:', pagesWithIncorrectLocCount.slice(0, 5));
}

// 4. AUDIT: CUSTOMER EXPERIENCES CHECK
console.log('\n--- 4. CUSTOMER EXPERIENCES CHECK ---');
let expPagesChecked = 0;
let allStoryBodies = new Set();
let duplicateStories = 0;

htmlFiles.forEach(f => {
  const norm = f.replace(/\\/g, '/');
  if (norm.endsWith('sitemap.html')) return;

  const content = fs.readFileSync(f, 'utf8');
  const expMatch = content.match(/class=["'](?:experiences-grid|experience-grid|services-grid)["']>([\s\S]*?)<\/div>/i);
  if (content.includes('Service Experiences') || content.includes('Problems Customers') || content.includes('Customer Experiences')) {
    expPagesChecked++;
  }
  // Check for any Karur locality in stories
  const badLocalities = ['Pasupathipalayam', 'Thanthonimalai', 'Vennaimalai', 'Vengamedu', 'Inam Karur'];
  badLocalities.forEach(bl => {
    if (content.includes(bl)) {
      console.log(`Warning: Found old locality ${bl} in ${f}`);
    }
  });
});
console.log(`Pages with Customer Experience section: ${expPagesChecked}`);

// 5. AUDIT: FAQ CHECK & APPROXIMATE COST
console.log('\n--- 5. FAQ & APPROXIMATE COST CHECK ---');
let faqPagesChecked = 0;
let pagesMissingApproxPrice = [];

htmlFiles.forEach(f => {
  const norm = f.replace(/\\/g, '/');
  if (norm.endsWith('sitemap.html')) return;

  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Frequently Asked Questions') || content.includes('faq-list')) {
    faqPagesChecked++;
    if (!content.includes('Approximate cost') && !content.includes('approximate cost') && !content.includes('₹')) {
      pagesMissingApproxPrice.push(f);
    }
  }
});
console.log(`Pages with FAQ section: ${faqPagesChecked}`);
console.log(`Pages with approximate price topics in FAQ: ${faqPagesChecked - pagesMissingApproxPrice.length} / ${faqPagesChecked}`);

// 6. AUDIT: INTERNAL LINKS & CANONICAL CHECK
console.log('\n--- 6. INTERNAL LINKS & CANONICAL CHECK ---');
let brokenLinks = [];
let totalLinksChecked = 0;
let nonKkCanonicals = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const fileDir = path.dirname(file);

  // Check canonical
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (canonicalMatch) {
    const url = canonicalMatch[1];
    if (!url.startsWith('https://servicecenterkanyakumari.com')) {
      nonKkCanonicals.push({ file, url });
    }
  }

  // Check hrefs
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
  for (const m of hrefMatches) {
    const href = m[1];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('tel:') || 
        href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }

    totalLinksChecked++;
    const cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref) continue;

    let targetPath;
    if (cleanHref.startsWith('/')) {
      targetPath = path.resolve('.', cleanHref.slice(1));
    } else {
      targetPath = path.resolve(fileDir, cleanHref);
    }

    if (!fs.existsSync(targetPath)) {
      brokenLinks.push({ file, href, targetPath });
    }
  }
});

console.log(`Total internal links checked: ${totalLinksChecked}`);
console.log(`Broken internal links: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  console.log('Sample broken links:', brokenLinks.slice(0, 10));
}
console.log(`Non-Kanyakumari canonical URLs: ${nonKkCanonicals.length}`);
if (nonKkCanonicals.length > 0) {
  console.log('Sample non-Kanyakumari canonicals:', nonKkCanonicals.slice(0, 5));
}

// 7. AUDIT: HEAVY WORDS CHECK (RULES 8 & 9)
console.log('\n--- 7. SIMPLE INDIAN ENGLISH AUDIT ---');
const heavyWords = [
  'prompt assistance',
  'service desk',
  'dedicated service desk',
  'residential premises',
  'technical intervention',
  'comprehensive assistance',
  'commence service',
  'diagnostic assessment',
  'provision of services',
  'customer support desk'
];
let heavyMatches = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  heavyWords.forEach(hw => {
    const reg = new RegExp(`\\b${hw}\\b`, 'gi');
    const m = content.match(reg);
    if (m) {
      heavyMatches += m.length;
      // console.log(`Heavy phrase "${hw}" found in ${f}`);
    }
  });
});
console.log(`Heavy/robotic words occurrences across all HTML files: ${heavyMatches}`);

console.log('\n====================================================');
console.log('                    AUDIT END                       ');
console.log('====================================================');
