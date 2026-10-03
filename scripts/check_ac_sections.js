const fs = require('fs');

const acHtml = fs.readFileSync('ac/ac-repair-service-in-coimbatore.html', 'utf8');
const acSections = acHtml.match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];

console.log('Sections in ac/ac-repair-service-in-coimbatore.html:');
acSections.forEach((sec, i) => {
  const h = sec.match(/<h[23][^>]*>(.*?)<\/h[23]>/i);
  console.log(`Section ${i}: ${h ? h[1] : 'No heading'}`);
});
