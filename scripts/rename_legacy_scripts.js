const fs = require('fs');
const path = require('path');

const renames = [
  ['scripts/data_karur_localities.js', 'scripts/data_karur_localities.js'],
  ['scripts/karur_legacy_localities.json', 'scripts/karur_legacy_localities.json'],
  ['scripts/karur_wm_60_localities.js', 'scripts/karur_wm_60_localities.js'],
  ['scripts/karur_wm_localities.json', 'scripts/karur_wm_localities.json'],
  ['scripts/transform_brands_to_karur.js', 'scripts/transform_brands_to_karur.js'],
  ['scripts/update_wm_generator_to_karur.js', 'scripts/update_wm_generator_to_karur.js']
];

renames.forEach(([oldP, newP]) => {
  if (fs.existsSync(oldP)) {
    fs.renameSync(oldP, newP);
    console.log(`Renamed: ${oldP} -> ${newP}`);
  }
});

// Update any references in scripts
const scriptsDir = path.resolve(__dirname);
fs.readdirSync(scriptsDir).forEach(f => {
  if (f.endsWith('.js') || f.endsWith('.json')) {
    const p = path.join(scriptsDir, f);
    let c = fs.readFileSync(p, 'utf8');
    renames.forEach(([oldP, newP]) => {
      const oldBase = path.basename(oldP, path.extname(oldP));
      const newBase = path.basename(newP, path.extname(newP));
      if (c.includes(oldBase)) {
        c = c.split(oldBase).join(newBase);
        fs.writeFileSync(p, c, 'utf8');
      }
    });
  }
});

console.log('Finished renaming legacy script filenames.');
