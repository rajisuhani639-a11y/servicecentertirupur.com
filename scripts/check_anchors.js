const fs = require('fs');
const path = require('path');

const cat = JSON.parse(fs.readFileSync('scripts/site_catalog.json', 'utf8'));
const files = Object.values(cat).map(c => c.file);

let missingFaq = 0;
let missingFooter = 0;
let missingOtherApp = 0;

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (!c.includes('id="faqSection"')) missingFaq++;
  if (!c.includes('<footer class="site-footer"')) missingFooter++;
  if (!c.includes('Explore Other Appliance Services') && !c.includes('Internal Links to Other Appliances')) missingOtherApp++;
});

console.log('Total files checked:', files.length);
console.log('Missing faqSection:', missingFaq);
console.log('Missing site-footer:', missingFooter);
console.log('Missing other appliances section:', missingOtherApp);
