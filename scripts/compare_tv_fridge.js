const fs = require('fs');
const tv = fs.readFileSync('tv/tv-repair-service-in-karur.html', 'utf8');
const fridge = fs.readFileSync('fridge/refrigerator-repair-service-in-karur.html', 'utf8');
const liebherr = fs.readFileSync('fridge/liebherr-refrigerator-repair-service-in-karur.html', 'utf8');

console.log('TV length:', tv.length);
console.log('Fridge length:', fridge.length);
console.log('Liebherr length:', liebherr.length);

function getSections(html) {
  const matches = [...html.matchAll(/<section[^>]*class="([^"]*)"/g)];
  return matches.map(m => m[1]);
}

console.log('TV sections:\n', getSections(tv).join('\n'));
console.log('\nFridge sections:\n', getSections(fridge).join('\n'));
