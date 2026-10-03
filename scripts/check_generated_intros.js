const fs = require('fs');
const intros = JSON.parse(fs.readFileSync('scripts/erode_hero_intros_v2.json', 'utf8'));

const sampleFiles = [
  'washing-machine/godrej-washing-machine-repair-service-in-erode.html',
  'fridge/samsung-refrigerator-repair-service-in-erode.html',
  'ac/daikin-ac-repair-service-in-erode.html',
  'tv/sony-tv-repair-service-in-erode.html',
  'servicecenter/akai-service-center-erode.html',
  'servicecenter/godrej-service-center-erode.html'
];

sampleFiles.forEach(sf => {
  console.log('\n================================');
  console.log('FILE:', sf);
  console.log(intros[sf].lead);
});
