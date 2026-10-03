const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getHtmlFiles(full));
    } else if (file.endsWith('.html')) results.push(full.replace(/\\/g, '/'));
  });
  return results;
}

const files = getHtmlFiles('.');
const catalog = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let brand = "";
  let app = "";
  
  if (f.startsWith('servicecenter/')) {
    app = 'servicecenter';
    const m = f.match(/servicecenter\/(.*)-service-center-erode\.html/);
    brand = m ? m[1] : 'home-appliance';
  } else if (f.startsWith('ac/')) {
    app = 'ac';
    const m = f.match(/ac\/(.*)-ac-repair-service-in-erode\.html/);
    brand = m ? m[1] : (f.includes('ac-repair-service-in-erode') ? 'all-brands' : '');
  } else if (f.startsWith('fridge/')) {
    app = 'fridge';
    const m = f.match(/fridge\/(.*)-refrigerator-repair-service-in-erode\.html/);
    brand = m ? m[1] : (f.includes('refrigerator-repair-service-in-erode') ? 'all-brands' : '');
  } else if (f.startsWith('tv/')) {
    app = 'tv';
    const m = f.match(/tv\/(.*)-tv-repair-service-in-erode\.html/);
    brand = m ? m[1] : (f.includes('tv-repair-service-in-erode') ? 'all-brands' : '');
  } else if (f.startsWith('washing-machine/')) {
    app = 'washing-machine';
    const m = f.match(/washing-machine\/(.*)-washing-machine-repair-service-in-erode\.html/);
    brand = m ? m[1] : (f.includes('washing-machine-repair-service-in-erode') ? 'all-brands' : '');
  } else {
    app = 'root';
    brand = f.replace('.html', '');
  }

  // Proper brand display name
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  catalog.push({ file: f, app, brandSlug: brand, h1 });
});

console.log(`Cataloged ${catalog.length} files.`);
fs.writeFileSync('scripts/site_catalog.json', JSON.stringify(catalog, null, 2), 'utf8');
console.log('Saved to scripts/site_catalog.json');
