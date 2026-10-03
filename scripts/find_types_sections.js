const fs = require('fs');

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log('=== FILE:', file, '===');
  
  // Find headings mentioning types/models
  const matches = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
  matches.forEach(m => {
    if (/type|model|category|appliances we service/i.test(m[1])) {
      console.log('Heading:', m[1]);
      const pos = content.indexOf(m[0]);
      console.log('Snippet around heading:');
      console.log(content.slice(pos, pos + 1000).replace(/\s+/g, ' '));
    }
  });
}

checkFile('fridge/whirlpool-refrigerator-repair-service-in-karur.html');
checkFile('tv/sony-tv-repair-service-in-karur.html');
checkFile('washing-machine/samsung-washing-machine-repair-service-in-karur.html');
checkFile('ac/daikin-ac-repair-service-in-karur.html');
