const fs = require('fs');

const content = fs.readFileSync('tv/sony-tv-repair-service-in-coimbatore.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('G-B')) {
    console.log(`Line ${i}: ${l.trim()}`);
  }
});
