const fs = require('fs');

const html = fs.readFileSync('washing-machine/washing-machine-repair-service-in-coimbatore.html', 'utf8');

const contactMatch = html.match(/<!-- Contact & Map Section -->/i) || html.match(/<section[^>]*id=["']contact["'][^>]*>/i) || html.match(/Service Center Coimbatore/i);

if (contactMatch) {
  const idx = contactMatch.index;
  console.log('Found contact marker at index', idx);
  console.log('Snippet before:', html.slice(idx - 200, idx + 100));
}
