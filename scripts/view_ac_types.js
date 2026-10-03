const fs = require('fs');

const content = fs.readFileSync('ac/daikin-ac-repair-service-in-karur.html', 'utf8');
const idx = content.indexOf('Air Conditioner Types We Service');
console.log(content.slice(idx - 100, idx + 2500));
