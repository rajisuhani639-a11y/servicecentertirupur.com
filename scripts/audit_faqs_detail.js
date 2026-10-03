const fs = require('fs');
const faqs = JSON.parse(fs.readFileSync('scripts/erode_master_faqs.json', 'utf8'));

const pages = Object.keys(faqs);
console.log('Total pages with FAQs:', pages.length);

let minCount = 999;
let maxCount = 0;
let totalQuestions = 0;
let pricingQuestionCount = 0;
let localityQuestionCount = 0;

pages.forEach(p => {
  const data = faqs[p];
  let pQuestions = 0;
  if (data && data.groups) {
    data.groups.forEach(g => {
      pQuestions += g.items.length;
      g.items.forEach(it => {
        if (/₹|price|cost|charge|fee/i.test(it.q) || /₹|price|cost|charge|fee/i.test(it.a)) {
          pricingQuestionCount++;
        }
        if (/erode|thindal|surampatti|veerappanchatram|perundurai|chithode|solar|karungalpalayam|mettur|brough|sampath|teachers/i.test(it.q) || /erode|thindal|surampatti|veerappanchatram|perundurai|chithode|solar|karungalpalayam|mettur|brough|sampath|teachers/i.test(it.a)) {
          localityQuestionCount++;
        }
      });
    });
  }
  totalQuestions += pQuestions;
  if (pQuestions < minCount) minCount = pQuestions;
  if (pQuestions > maxCount) maxCount = pQuestions;
});

console.log('Total FAQ questions across all pages:', totalQuestions);
console.log('Min questions per page:', minCount);
console.log('Max questions per page:', maxCount);
console.log('Average questions per page:', (totalQuestions / pages.length).toFixed(1));
console.log('Pricing / cost questions count:', pricingQuestionCount);
console.log('Locality questions count:', localityQuestionCount);
