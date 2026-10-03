const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getAllHtml(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const words = ['prompt', 'assistance', 'resolution'];
const files = getAllHtml('.');
words.forEach(w => {
  let count = 0;
  let samples = [];
  files.forEach(f => {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((l, idx) => {
      if (new RegExp('\\b' + w + '\\b', 'i').test(l)) {
        count++;
        if (samples.length < 3) samples.push(`${f}:${idx+1} -> ${l.trim().substring(0, 100)}`);
      }
    });
  });
  console.log(w, 'total:', count);
  samples.forEach(s => console.log('  ', s));
});
