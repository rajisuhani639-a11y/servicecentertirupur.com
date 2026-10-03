const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('scripts/site_catalog.json', 'utf8'));

let schemaFaqCount = 0;
let missingSchemaFaq = [];

catalog.forEach(item => {
  if (item.file === 'sitemap.html' || item.file === 'washing-machine/washing-machine-repair-service-in-erode.html') return;
  const content = fs.readFileSync(item.file, 'utf8');
  
  const m = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  let found = false;
  if (m) {
    m.forEach(s => {
      if (s.includes('"FAQPage"')) found = true;
    });
  }
  
  if (found) schemaFaqCount++;
  else missingSchemaFaq.push(item.file);
});

console.log(`Schema FAQ found in: ${schemaFaqCount}`);
console.log(`Missing schema FAQ in: ${missingSchemaFaq.length}`, missingSchemaFaq);
