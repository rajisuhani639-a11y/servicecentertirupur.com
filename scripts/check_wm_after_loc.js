const fs = require('fs');
const c = fs.readFileSync('washing-machine/washing-machine-repair-service-in-madurai.html', 'utf8');
const idx = c.indexOf('id="localitiesSection"');
console.log('Locality section idx:', idx);
const endIdx = c.indexOf('</section>', idx);
console.log('After locality section:\n', c.substring(endIdx + 10, endIdx + 800));
