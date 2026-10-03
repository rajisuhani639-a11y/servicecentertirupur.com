const fs = require('fs');
const d2 = require('./data_brand_details_19_to_36.js');
console.log('Lloyd WM:');
console.log(JSON.stringify(d2['lloyd'].wm, null, 2));
console.log('Lloyd AC:');
console.log(JSON.stringify(d2['lloyd'].ac, null, 2));
