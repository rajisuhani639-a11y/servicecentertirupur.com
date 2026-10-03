const fs = require('fs');
const faqs = JSON.parse(fs.readFileSync('scripts/erode_master_faqs.json', 'utf8'));

console.log('Total FAQ keys:', Object.keys(faqs).length);

const sampleKeys = [
  'washing-machine/godrej-washing-machine-repair-service-in-erode.html',
  'fridge/samsung-refrigerator-repair-service-in-erode.html',
  'ac/daikin-ac-repair-service-in-erode.html',
  'tv/sony-tv-repair-service-in-erode.html',
  'servicecenter/akai-service-center-erode.html'
];

sampleKeys.forEach(k => {
  console.log('\n=======================================');
  console.log('KEY:', k);
  const data = faqs[k];
  if (!data || !data.groups) {
    console.log('No data or groups');
    return;
  }
  let totalItems = 0;
  data.groups.forEach(g => {
    console.log(` Group: ${g.title} (${g.items.length} questions)`);
    totalItems += g.items.length;
    g.items.slice(0, 2).forEach(it => {
      console.log(`   Q: ${it.q}`);
      console.log(`   A: ${it.a.substring(0, 100)}...`);
    });
  });
  console.log(' Total questions:', totalItems);
});
