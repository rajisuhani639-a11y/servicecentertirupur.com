const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getHtmlFiles('.');
const localityUsage = {};
let totalExpCards = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match section with "Recent ... Experiences" or "Experience"
  const m = content.search(/<h2[^>]*>[^<]*(?:Experiences|Reviews|Customer Feedback)[^<]*<\/h2>/i);
  if (m !== -1) {
    const secEnd = content.indexOf('</section>', m);
    const secHtml = content.slice(m, secEnd !== -1 ? secEnd : m + 6000);
    // Find locality mentions like 📍 ... or Location: ... or in badges
    const locMatches = [...secHtml.matchAll(/(?:📍|Location:\s*|in\s+)([A-Z][a-zA-Z\s]{2,20})(?:<\/span>|,|\.|\s*—)/g)];
    locMatches.forEach(lm => {
      const loc = lm[1].trim();
      if (!/Customer|Verified|Service|Karur|Repair/i.test(loc)) {
        localityUsage[loc] = (localityUsage[loc] || 0) + 1;
        totalExpCards++;
      }
    });
  }
});

console.log('Customer experience locality counts (top 20):');
console.log(Object.entries(localityUsage).sort((a,b) => b[1] - a[1]).slice(0, 20));
