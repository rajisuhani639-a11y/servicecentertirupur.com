const fs = require('fs');
const path = require('path');
const { applySubstitutions } = require('./karur_substitutions.js');

const scriptsDir = path.resolve(__dirname);
const scriptFiles = fs.readdirSync(scriptsDir).filter(f => f.endsWith('.js') || f.endsWith('.json'));

let updated = 0;
scriptFiles.forEach(f => {
  const filePath = path.join(scriptsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  if (/karur/i.test(content)) {
    content = applySubstitutions(content);
    // Also rename any karur filenames referenced in scripts
    content = content.replace(/karur/g, 'karur');
    content = content.replace(/Karur/g, 'Karur');
    content = content.replace(/KARUR/g, 'KARUR');
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
  }
});

console.log(`Updated ${updated} script files to Karur.`);
