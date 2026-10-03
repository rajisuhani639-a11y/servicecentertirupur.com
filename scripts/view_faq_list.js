const fs = require('fs');

const content = fs.readFileSync('washing-machine/samsung-washing-machine-repair-service-in-karur.html', 'utf8');
const faqIdx = content.indexOf('faq-list');
console.log(content.slice(faqIdx, faqIdx + 1500));
