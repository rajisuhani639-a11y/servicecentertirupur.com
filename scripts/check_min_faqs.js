const fs = require('fs');

const faqs = JSON.parse(fs.readFileSync('scripts/coimbatore_rebuilt_faqs.json', 'utf8'));

let under10 = 0;
for (let file in faqs) {
  const p = faqs[file];
  if (p.totalQuestions < 10) {
    console.log(`Page under 10 FAQs: ${file} has ${p.totalQuestions} FAQs (Category: ${p.category}, Brand: ${p.brand}, Groups: ${p.groups.length})`);
    under10++;
  }
}

console.log(`Total pages with under 10 FAQs: ${under10}`);
