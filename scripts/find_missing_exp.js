const fs = require('fs');
const catalog = require('./pages_catalog.json');

const allItems = [
  ...catalog.ac,
  ...catalog.fridge,
  ...catalog.wm,
  ...catalog.tv,
  ...catalog.sc
];

const missing = [];
allItems.forEach(item => {
  const content = fs.readFileSync(item.file, 'utf8');
  if (!content.includes('Customer Service Experiences (100% Unique Per Page)')) {
    missing.push(item.file);
  }
});

console.log('Missing experience upgrade count:', missing.length);
console.log('Missing files:', missing);
