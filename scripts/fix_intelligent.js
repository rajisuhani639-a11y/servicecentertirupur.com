const fs = require('fs');

let code = fs.readFileSync('scripts/build_fridge_page.js', 'utf8');
code = code.replace('High-voltage intelligent power module (IPM) board', 'High-voltage solid-state power inverter (IPM) board');
fs.writeFileSync('scripts/build_fridge_page.js', code, 'utf8');

console.log('Replaced intelligent power module in build_fridge_page.js');
