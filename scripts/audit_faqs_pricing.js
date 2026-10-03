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
let totalFaqPages = 0;
let pagesWithPricingFaq = 0;
let pagesWithoutPricingFaq = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const faqHeading = content.search(/<h2>[^<]*(?:Frequently Asked Questions|FAQ)[^<]*<\/h2>/i);
  if (faqHeading !== -1) {
    totalFaqPages++;
    const faqSec = content.slice(faqHeading, faqHeading + 6000);
    const hasPriceQ = /how much|visiting charge|inspection charge|cost|pricing|price|charges|fee/i.test(faqSec);
    if (hasPriceQ) {
      pagesWithPricingFaq++;
    } else {
      pagesWithoutPricingFaq.push(f);
    }
  }
});

console.log('Total pages with FAQ section:', totalFaqPages);
console.log('Pages with pricing/cost FAQs:', pagesWithPricingFaq);
console.log('Pages WITHOUT pricing/cost FAQs:', pagesWithoutPricingFaq.length);
if (pagesWithoutPricingFaq.length > 0) {
  console.log('Sample pages without pricing FAQ:', pagesWithoutPricingFaq.slice(0, 10));
}
