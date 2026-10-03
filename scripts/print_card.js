const fs = require('fs');

const content = fs.readFileSync('washing-machine/samsung-washing-machine-repair-service-in-karur.html', 'utf8');
const cards = content.split('<div class="type-card"');
console.log('=== CARD 1 ===\n', cards[1]);
console.log('=== CARD 2 ===\n', cards[2]);
console.log('=== CARD 3 ===\n', cards[3]);
