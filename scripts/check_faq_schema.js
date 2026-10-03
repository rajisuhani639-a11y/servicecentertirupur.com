const fs = require('fs');

const testFiles = [
  'washing-machine/samsung-washing-machine-repair-service-in-karur.html',
  'ac/daikin-ac-repair-service-in-karur.html',
  'fridge/whirlpool-refrigerator-repair-service-in-karur.html',
  'tv/sony-tv-repair-service-in-karur.html',
  'servicecenter/samsung-service-center-karur.html'
];

testFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== FILE:', f, '===');
  const schemaMatches = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  console.log('Schema count:', schemaMatches.length);
  schemaMatches.forEach((m, idx) => {
    try {
      const data = JSON.parse(m[1]);
      const type = data['@type'] || (data['@graph'] ? data['@graph'].map(g => g['@type']).join(', ') : 'unknown');
      console.log(`  Schema ${idx + 1} type:`, type);
      if (type === 'FAQPage' || (data['@type'] === 'FAQPage')) {
        console.log(`    Questions count:`, (data.mainEntity || []).length);
      }
    } catch (e) {
      console.log(`  Schema ${idx + 1} parse error:`, e.message);
    }
  });
});
