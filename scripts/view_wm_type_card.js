const fs = require('fs');

const content = fs.readFileSync('washing-machine/samsung-washing-machine-repair-service-in-karur.html', 'utf8');
const idx = content.indexOf('Samsung Washing Machine Types We Service in Karur');
console.log(content.slice(idx - 100, idx + 2500));
