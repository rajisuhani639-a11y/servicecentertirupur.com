const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (/\bprompt\b/i.test(l)) {
    console.log(`Line ${i}: ${l.trim()}`);
  }
});
