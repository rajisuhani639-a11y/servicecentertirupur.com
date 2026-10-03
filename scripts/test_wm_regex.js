const fs = require('fs');

const file = 'washing-machine/ifb-washing-machine-repair-service-in-kanyakumari.html';
const content = fs.readFileSync(file, 'utf8');

// Match from `<section class="section">` that contains `Problems Customers Face` or `Experiences`
const regex = /(?:<!--[\s\S]*?-->\s*)*<section class="section">\s*<div class="container">\s*<div class="section-header">\s*<h2>[^<]*(?:Problems Customers Face|Customer Experiences|Repair Experiences|Service Experiences)[\s\S]*?<\/section>/i;

const match = content.match(regex);
console.log('Match found?', !!match);
if (match) {
  console.log('Matched snippet:\n', match[0].slice(0, 300));
}
