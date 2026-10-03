const fs = require('fs');
const path = require('path');

const scDir = 'servicecenter';
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

const allApplianceTypes = new Set();
const pageApplianceMap = {};

files.forEach(f => {
  const content = fs.readFileSync(path.join(scDir, f), 'utf8');
  
  // Extract brand from file name or title
  const brandSlug = f.replace('-service-center-erode.html', '');

  // Extract cards from 'Home Appliances We Service'
  const sec3Match = content.match(/<h2>[^<]*Home Appliances We Service<\/h2>[\s\S]*?<\/section>/i);
  const cards = [];
  if (sec3Match) {
    const cardMatches = sec3Match[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi);
    if (cardMatches) {
      cardMatches.forEach(cm => {
        const text = cm.replace(/<[^>]+>/g, '').trim();
        cards.push(text);
        allApplianceTypes.add(text);
      });
    }
  }

  // Also extract dedicated sections
  const secMatches = content.match(/<section[^>]*id="([a-zA-Z0-9]+Section)"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/gi);
  const secIds = [];
  if (secMatches) {
    secMatches.forEach(sm => {
      const id = sm.match(/id="([a-zA-Z0-9]+Section)"/i)[1];
      if (id !== 'localitiesSection' && id !== 'faqSection' && id !== 'service-center-location') {
        secIds.push(id);
      }
    });
  }

  pageApplianceMap[f] = {
    brandSlug,
    cards,
    secIds
  };
});

console.log('Total files:', Object.keys(pageApplianceMap).length);
console.log('All unique appliance card titles:', Array.from(allApplianceTypes));
console.log('\nSample page map:');
Object.keys(pageApplianceMap).slice(0, 10).forEach(k => {
  console.log(`${k} -> Cards: [${pageApplianceMap[k].cards.join(', ')}] | Sections: [${pageApplianceMap[k].secIds.join(', ')}]`);
});
