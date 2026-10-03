const fs = require('fs');
const expData = JSON.parse(fs.readFileSync('scripts/erode_unique_experiences.json', 'utf8'));

const sampleKeys = [
  'washing-machine/godrej-washing-machine-repair-service-in-erode.html',
  'washing-machine/samsung-washing-machine-repair-service-in-erode.html',
  'fridge/godrej-refrigerator-repair-service-in-erode.html',
  'fridge/lg-refrigerator-repair-service-in-erode.html',
  'ac/daikin-ac-repair-service-in-erode.html',
  'tv/sony-tv-repair-service-in-erode.html',
  'servicecenter/akai-service-center-erode.html',
  'servicecenter/godrej-service-center-erode.html'
];

sampleKeys.forEach(k => {
  console.log('\n=======================================');
  console.log('KEY:', k);
  const cards = expData[k];
  if (!cards) {
    console.log('NO CARDS FOUND');
    return;
  }
  console.log('Cards count:', cards.length);
  cards.forEach((c, i) => {
    console.log(`\nCard ${i+1}:`);
    console.log(` Locality: ${c.locality}`);
    console.log(` Heading: ${c.heading}`);
    console.log(` Body: ${c.body.substring(0, 220)}...`);
  });
});
