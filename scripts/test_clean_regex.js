const fs = require('fs');

const files = [
  'washing-machine/ifb-washing-machine-repair-service-in-kanyakumari.html',
  'washing-machine/voltas-washing-machine-repair-service-in-kanyakumari.html',
  'washing-machine/washing-machine-repair-service-in-kanyakumari.html',
  'washing-machine/whirlpool-washing-machine-repair-service-in-kanyakumari.html'
];

const cleanRegex = /<section class="section">\s*<div class="container">\s*<div class="section-header">\s*<h2>[^<]*(?:Problems Customers Face|Customer Experiences|Repair Experiences|Service Experiences|Customer Problems)[\s\S]*?<\/section>/i;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(cleanRegex);
  console.log(f, 'Match?', !!match);
  if (match) {
    console.log('Snippet:', match[0].slice(0, 150).replace(/\s+/g, ' '));
  }
});
