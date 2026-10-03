const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));

let withSchema = 0;
let withoutSchema = 0;

pages.forEach(p => {
  const html = fs.readFileSync(p.file, 'utf8');
  if (html.includes('"FAQPage"')) {
    withSchema++;
  } else {
    withoutSchema++;
    console.log('No FAQPage schema in:', p.file);
  }
});

console.log(`With FAQPage schema: ${withSchema} / ${pages.length}`);
console.log(`Without FAQPage schema: ${withoutSchema}`);
