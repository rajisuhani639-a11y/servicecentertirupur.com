const fs = require('fs');

const sampleFiles = [
  'washing-machine/bosch-washing-machine-repair-service-in-madurai.html',
  'servicecenter/sony-service-center-madurai.html',
  'ac/daikin-ac-repair-service-in-madurai.html',
  'fridge/refrigerator-repair-service-in-madurai.html',
  'servicecenter/panasonic-service-center-madurai.html'
];

sampleFiles.forEach(f => {
  console.log('====================================');
  console.log('FILE:', f);
  console.log('====================================');
  const c = fs.readFileSync(f, 'utf8');
  const expSection = c.match(/<!-- Customer Service Experiences[\s\S]*?<\/section>/);
  if (expSection) {
    const expH3s = [...expSection[0].matchAll(/<h3[^>]*>([^<]+)<\/h3>/g)].map(m => m[1]);
    console.log('Customer Experience Headings (' + expH3s.length + '):');
    expH3s.slice(0, 5).forEach(h => console.log('  -', h));
  } else {
    console.log('No Customer Experience section found');
  }

  // Locality descriptions
  const locSection = c.match(/<section[^>]*id="localitiesSection"[\s\S]*?<\/section>/);
  if (locSection) {
    const locCards = [...locSection[0].matchAll(/<h4[^>]*>([^<]+)<\/h4>\s*<p[^>]*>([^<]+)<\/p>/g)];
    console.log('Locality Cards Sample (' + locCards.length + ' total cards):');
    locCards.slice(0, 4).forEach(lc => console.log('  *', lc[1], '\n     ->', lc[2]));
  }
});
