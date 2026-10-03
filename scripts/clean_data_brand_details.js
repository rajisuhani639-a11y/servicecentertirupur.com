const fs = require('fs');

const files = [
  'scripts/data_brand_details_1_to_18.js',
  'scripts/data_brand_details_19_to_36.js',
  'scripts/data_brand_details_37_to_54.js'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/Karur/g, 'Kanyakumari');
    content = content.replace(/karur/g, 'kanyakumari');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Cleaned Karur from ${f}`);
  }
});
