const fs = require('fs');
const faqs = JSON.parse(fs.readFileSync('scripts/erode_master_faqs.json', 'utf8'));

let missingPricing = [];
let missingLocalities = [];

Object.keys(faqs).forEach(file => {
  const f = faqs[file];
  let hasPrice = false;
  let hasLoc = false;
  f.groups.forEach(g => {
    g.items.forEach(it => {
      const fullText = (it.q + ' ' + it.a).toLowerCase();
      if (/₹|price|cost|charge|fee|approx/i.test(fullText)) hasPrice = true;
      if (/erode|surampatti|thindal|veerappanchatram|perundurai|chithode|solar|karungalpalayam|mettur|brough|sampath|teachers|gandhipuram/i.test(fullText)) hasLoc = true;
    });
  });
  if (!hasPrice) missingPricing.push(file);
  if (!hasLoc) missingLocalities.push(file);
});

console.log('Pages missing pricing FAQs:', missingPricing.length);
console.log('Pages missing locality in FAQs:', missingLocalities.length);
