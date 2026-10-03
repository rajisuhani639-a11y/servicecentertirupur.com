const fs = require('fs');

const c = fs.readFileSync('ac/daikin-ac-repair-service-in-erode.html', 'utf8');
const regex = /<span style="font-size: 0.78rem; font-weight: 700; color: var\(--accent-blue\); text-transform: uppercase;">([^<]+)<\/span>/gi;
const matches = [...c.matchAll(regex)].map(m => m[1].trim());

console.log(`Found ${matches.length} localities.`);
fs.writeFileSync('scripts/erode_localities.json', JSON.stringify(matches, null, 2), 'utf8');
console.log('Saved to scripts/erode_localities.json. Sample 10:');
console.log(matches.slice(0, 10));
