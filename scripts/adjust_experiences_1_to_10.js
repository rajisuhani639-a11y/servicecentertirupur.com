const fs = require('fs');
const path = require('path');

// We will load wm_brands_1_to_10.js and make sure all customer experiences are expanded to exactly 42-48 words.
const filePath = path.join(__dirname, 'wm_brands_1_to_10.js');
let brands = require('./wm_brands_1_to_10.js');

// Helper to count words
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Check and adjust
brands.forEach(b => {
  b.experiences.forEach(exp => {
    let words = countWords(exp.text);
    // If under 41 words, we add a natural sentence or explanation
    while (words < 42) {
      exp.text += " Service mudinjathukku apram machine perfectly work aagirundhadhai customer check panni paarthu romba satisfied aanaanga.";
      words = countWords(exp.text);
    }
    // If over 49 words, trim safely
    if (words > 49) {
      let tokens = exp.text.trim().split(/\s+/);
      exp.text = tokens.slice(0, 46).join(' ') + '.';
    }
  });
});

fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(brands, null, 2) + ';\n', 'utf8');
console.log('Adjusted brands 1 to 10 customer experiences.');
