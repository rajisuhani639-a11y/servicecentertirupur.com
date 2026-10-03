const fs = require('fs');

const html = fs.readFileSync('washing-machine/washing-machine-repair-service-in-coimbatore.html', 'utf8');

const lastSecIdx = html.lastIndexOf('<section');
console.log('Last section starts at:', lastSecIdx);
console.log(html.slice(lastSecIdx, lastSecIdx + 300));
