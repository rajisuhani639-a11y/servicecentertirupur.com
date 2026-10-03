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
let totalCards = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let expIdx = content.indexOf('id="experiences"');
  if (expIdx === -1) {
    expIdx = content.search(/<h2[^>]*>[^<]*(?:Experiences|Real-Life|Customer Situations|Recent)[^<]*<\/h2>/i);
  }
  if (expIdx === -1) return;
  
  const secEnd = content.indexOf('</section>', expIdx);
  const secHtml = content.slice(expIdx, secEnd !== -1 ? secEnd : expIdx + 8000);
  const h4s = [...secHtml.matchAll(/<h[34][^>]*>(.*?)<\/h[34]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  h4s.forEach(title => {
    totalCards++;
    // Extract locality before — or in title
    const locMatch = title.match(/^(?:Recent\s+)?([A-Za-z\s]+?)(?:\s+(?:Family|Apartment|House|Clinic|Residence|Home|Shop|Store|Villa|Quarter))?\s*[—–-]/) ||
                     title.match(/\bin\s+([A-Za-z\s]+?)(?:$|\s*[—–-])/);
    if (locMatch) {
      const loc = locMatch[1].trim();
      localityUsage[loc] = (localityUsage[loc] || 0) + 1;
    }
  });
});

console.log('Total experience cards:', totalCards);
console.log('Locality distribution:');
console.log(Object.entries(localityUsage).sort((a,b) => b[1] - a[1]));
