const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getAllHtml(full));
    } else if (file.endsWith('.html') || file.endsWith('.xml') || file.endsWith('.txt') || file.endsWith('.webmanifest')) {
      results.push(full);
    }
  });
  return results;
}

const files = getAllHtml('.');
const forbidden = ['coimbatore', 'kanyakumari', 'localhost', '127.0.0.1'];

let found = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  forbidden.forEach(term => {
    if (new RegExp(term, 'i').test(content)) {
      found++;
      console.log(`Found "${term}" in ${f}`);
    }
  });
});

console.log(`Total occurrences in site pages: ${found}`);
