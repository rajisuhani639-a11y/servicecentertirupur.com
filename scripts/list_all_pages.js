const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  return fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f).replace(/\\/g, '/'));
}

const categories = ['ac', 'fridge', 'washing-machine', 'tv', 'servicecenter'];
const summary = {};

categories.forEach(cat => {
  const files = getFiles(cat);
  summary[cat] = files;
  console.log(`${cat} (${files.length} pages):`);
  console.log(files.slice(0, 5).join('\n'));
  console.log('...');
});

fs.writeFileSync('scripts/all_pages_list.json', JSON.stringify(summary, null, 2));
console.log('Saved scripts/all_pages_list.json');
