// Karur Localities Helper for Refrigerator Brand Pages
const fs = require('fs');
const path = require('path');

const rawLocalities = JSON.parse(fs.readFileSync(path.join(__dirname, 'karur_localities.json'), 'utf8'));

// Filter out any locality that contains 'madurai' to strictly honor the user prompt constraint
const cleanLocalities = rawLocalities.filter(loc => !/madurai/i.test(loc.title));

module.exports = {
  localities: cleanLocalities
};
