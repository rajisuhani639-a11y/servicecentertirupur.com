const fs = require('fs');

const content = fs.readFileSync('washing-machine/samsung-washing-machine-repair-service-in-karur.html', 'utf8');
const typesSec = content.slice(content.indexOf('id="typesSection"'), content.indexOf('</section>', content.indexOf('id="typesSection"')));
const cards = typesSec.split('<div class="type-card"');
console.log('=== FULL CARD 2 ===\n', cards[2]);
console.log('=== FULL CARD 3 ===\n', cards[3]);
