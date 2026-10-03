const fs = require('fs');

const html = fs.readFileSync('washing-machine/washing-machine-repair-service-in-coimbatore.html', 'utf8');
const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];

console.log('Total sections in washing-machine/washing-machine-repair-service-in-coimbatore.html:', sections.length);
sections.forEach((sec, i) => {
  const h = sec.match(/<h[23][^>]*>(.*?)<\/h[23]>/i);
  console.log(`Section ${i}: ${h ? h[1] : 'No heading'} (Length: ${sec.length})`);
});
