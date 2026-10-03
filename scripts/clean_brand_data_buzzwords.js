const fs = require('fs');
const path = require('path');

const files = [
  'wm_brands_1_to_10.js',
  'wm_brands_11_to_20.js',
  'wm_brands_21_to_30.js'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.split('specialized pulsators').join('specially shaped pulsators');
  content = content.split('Specialized').join('Experienced');
  content = content.split('specialized').join('experienced');
  content = content.split('tested with precision').join('tested thoroughly');
  content = content.split('precision').join('careful testing');
  content = content.split('integrated washer dryer').join('combination washer dryer');
  content = content.split('integrated washer dryers').join('combination washer dryers');
  content = content.split('integrated').join('combined');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned AI buzzwords from: ${file}`);
});
