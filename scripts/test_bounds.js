const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') res = res.concat(getHtmlFiles(full));
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

function findLocalitySectionBounds(content) {
  const idMatch = content.match(/<section[^>]*id=["']localitiesSection["'][^>]*>[\s\S]*?<\/section>/i);
  if (idMatch) {
    return { start: idMatch.index, end: idMatch.index + idMatch[0].length };
  }
  const candidates = [
    'Service Center Areas in Karur',
    'Repair Near Me in Karur',
    'Service Near Me in Karur',
    'Across Karur Localities',
    'Karur Localities',
    'Areas We Cover in and Around Karur',
    'Service Localities in Karur',
    'Coverage Across Karur Areas'
  ];
  for (const cand of candidates) {
    const idx = content.indexOf(cand);
    if (idx !== -1) {
      const sectionStart = content.lastIndexOf('<section', idx);
      const sectionEnd = content.indexOf('</section>', idx);
      if (sectionStart !== -1 && sectionEnd !== -1) {
        return { start: sectionStart, end: sectionEnd + 10 };
      }
    }
  }
  return null;
}

function findExperienceSectionBounds(content) {
  const markers = [
    'Recent Lloyd Service Experiences in Karur',
    'Recent',
    'Common Customer Experiences',
    'Problems Customers Commonly Contact',
    'Customer Experiences & Common Questions',
    'Common AC Problems Customers Face',
    'Common Bosch Problems Customers Face',
    'Common Washing Machine Problems We Check'
  ];

  // Try matching <section containing experience-related headings
  const expMatch = content.match(/<section[^>]*>[\s\S]*?(?:Recent\s+[\w\s-]+\s+Service Experiences|Recent\s+[\w\s-]+\s+Repair Experiences|Recent\s+[\w\s-]+\s+TV Repair Experiences|Common\s+[\w\s-]+\s+Problems Customers Face|Customer Experiences & Common Questions|Common AC Problems Customers Face|Problems Customers Commonly Contact|Common Washing Machine Problems We Check)[\s\S]*?<\/section>/i);
  if (expMatch) {
    return { start: expMatch.index, end: expMatch.index + expMatch[0].length };
  }

  // Fallback: check for experiences-grid or experience-grid
  const gridMatch = content.match(/<div class=["'](?:experiences-grid|experience-grid)["']>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/i);
  if (gridMatch) {
    const sectionStart = content.lastIndexOf('<section', gridMatch.index);
    if (sectionStart !== -1) {
      return { start: sectionStart, end: gridMatch.index + gridMatch[0].length };
    }
  }

  return null;
}

function findFaqSectionBounds(content) {
  // Try matching <section containing FAQ heading
  const faqMatch = content.match(/<section[^>]*>[\s\S]*?(?:Frequently Asked Questions|FAQ)[\s\S]*?<\/section>/i);
  if (faqMatch) {
    return { start: faqMatch.index, end: faqMatch.index + faqMatch[0].length };
  }
  return null;
}

const files = getHtmlFiles('.');
let noLoc = [];
let noExp = [];
let noFaq = [];

files.forEach(f => {
  const norm = f.replace(/^[.\\\/]+/, '').replace(/\\/g, '/');
  if (norm === 'sitemap.html') return; // sitemap does not have locality, experience, or faq sections

  const c = fs.readFileSync(f, 'utf8');
  if (!findLocalitySectionBounds(c)) noLoc.push(norm);
  if (!findExperienceSectionBounds(c)) noExp.push(norm);
  if (!findFaqSectionBounds(c)) noFaq.push(norm);
});

console.log(`Total HTML files checked (excluding sitemap): ${files.length - 1}`);
console.log(`Missing Locality bounds: ${noLoc.length}`, noLoc);
console.log(`Missing Experience bounds: ${noExp.length}`, noExp);
console.log(`Missing FAQ bounds: ${noFaq.length}`, noFaq);
