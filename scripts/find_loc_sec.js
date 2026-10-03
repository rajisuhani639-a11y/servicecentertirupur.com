const fs = require('fs');

function findLocSection(file) {
  const c = fs.readFileSync(file, 'utf8');
  console.log('=== FILE:', file);
  const lines = c.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('East Kanyakumari') || l.includes('Coverage') || l.includes('Localities') || l.includes('200 Localities') || l.includes('Verified Areas')) {
      console.log(`${idx+1}: ${l.trim().slice(0, 100)}`);
    }
  });
}

findLocSection('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
findLocSection('ac/daikin-ac-repair-service-in-kanyakumari.html');
