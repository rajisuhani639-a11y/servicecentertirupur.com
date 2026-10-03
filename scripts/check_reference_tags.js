const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));

let withRef = 0;
pages.forEach(p => {
  const html = fs.readFileSync(p.file, 'utf8');
  if (html.includes('[Reference Ref-CBE-')) {
    withRef++;
  }
});

console.log(`Pages with [Reference Ref-CBE-: ${withRef}`);
