const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') res = res.concat(getHtmlFiles(full));
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

function findSection(content, headingPatterns, idPattern) {
  if (idPattern) {
    const idRegex = new RegExp('<section[^>]*id=["\']' + idPattern + '["\'][^>]*>', 'i');
    const idMatch = content.match(idRegex);
    if (idMatch) {
      const start = idMatch.index;
      const end = content.indexOf('</section>', start);
      if (end !== -1) return { start, end: end + 10 };
    }
  }

  for (const pattern of headingPatterns) {
    let headingIdx = -1;
    if (typeof pattern === 'string') {
      headingIdx = content.indexOf(pattern);
    } else if (pattern instanceof RegExp) {
      const m = content.match(pattern);
      if (m) headingIdx = m.index;
    }

    if (headingIdx !== -1) {
      const sectionStart = content.lastIndexOf('<section', headingIdx);
      const sectionEnd = content.indexOf('</section>', headingIdx);
      if (sectionStart !== -1 && sectionEnd !== -1 && sectionStart < headingIdx && headingIdx < sectionEnd) {
        return { start: sectionStart, end: sectionEnd + 10 };
      }
    }
  }
  return null;
}

const files = getHtmlFiles('d:/servicecenterkarur.com');
console.log('Total files in pristine source:', files.length);

const locPatterns = [
  'Areas We Cover in and Around Karur',
  'Service Center Areas in Karur',
  'Repair Near Me in Karur',
  'Service Near Me in Karur',
  'Across Karur Localities',
  'Karur Localities',
  'Service Localities in Karur',
  'Coverage Across Karur Areas',
  /Service Center Areas in Karur/i,
  /Repair Coverage Across Karur/i,
  /Localities in Karur/i
];

const expPatterns = [
  /Recent\s+[\w\s-]+\s+Service Experiences/i,
  /Recent\s+[\w\s-]+\s+Repair Experiences/i,
  /Recent\s+[\w\s-]+\s+TV Repair Experiences/i,
  /Common\s+[\w\s-]+\s+Problems Customers Face/i,
  /Customer Experiences & Common Questions/i,
  /Common AC Problems Customers Face/i,
  /Problems Customers Commonly Contact/i,
  /Common Washing Machine Problems We Check/i,
  'Recent Lloyd Service Experiences in Karur',
  'Common Customer Experiences',
  'Customer Experiences'
];

const faqPatterns = [
  /Frequently Asked Questions/i,
  /FAQ/i
];

let missLoc = [], missExp = [], missFaq = [];

files.forEach(f => {
  const norm = f.replace(/\\/g, '/');
  if (norm.endsWith('sitemap.html')) return;

  const c = fs.readFileSync(f, 'utf8');
  const loc = findSection(c, locPatterns, 'localitiesSection');
  const exp = findSection(c, expPatterns);
  const faq = findSection(c, faqPatterns, 'faqSection');

  const base = path.basename(f);
  if (!loc) missLoc.push(base);
  if (!exp) missExp.push(base);
  if (!faq) missFaq.push(base);
});

console.log('Miss Locality:', missLoc.length, missLoc);
console.log('Miss Experience:', missExp.length, missExp);
console.log('Miss FAQ:', missFaq.length, missFaq);
