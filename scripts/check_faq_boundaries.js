const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('scripts/site_catalog.json', 'utf8'));

let count = 0;
let notFound = [];

catalog.forEach(item => {
  if (item.file === 'sitemap.html' || item.file === 'washing-machine/washing-machine-repair-service-in-erode.html') return;
  const content = fs.readFileSync(item.file, 'utf8');
  
  // Find FAQ H2
  const h2Regex = /<h2[^>]*>[^<]*(?:Frequently Asked Questions|FAQs|Service Center FAQs)[^<]*<\/h2>/i;
  const h2Match = content.match(h2Regex);
  
  if (!h2Match) {
    notFound.push(item.file);
    return;
  }
  
  const h2Pos = content.indexOf(h2Match[0]);
  const secStart = content.lastIndexOf('<section', h2Pos);
  const secEnd = content.indexOf('</section>', h2Pos) + '</section>'.length;
  
  // Check schema FAQPage
  const hasSchema = content.includes('"@type": "FAQPage"') || content.includes('"@type":"FAQPage"');

  count++;
});

console.log(`Matched FAQ sections: ${count}`);
console.log(`Not found: ${notFound.length}`, notFound);
