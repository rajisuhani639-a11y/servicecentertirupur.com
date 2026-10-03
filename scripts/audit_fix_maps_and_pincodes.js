const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts') results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

const files = walk('.');
const MADURAI_MAP_IFRAME = `<iframe
            src="https://maps.google.com/maps?q=Madurai%2C%20Tamil%20Nadu&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Service Center Madurai Location Map">
          </iframe>`;

const MADURAI_ADDRESS_HTML = `<span><strong>Service Area:</strong> Doorstep Home Appliance Repair Across All Localities in Madurai, Tamil Nadu – 625001, India</span>`;

let fixed = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Replace any map iframe
  content = content.replace(/<iframe[^>]*maps\.google\.com\/maps\?[^>]*>[\s\S]*?<\/iframe>/gi, MADURAI_MAP_IFRAME);

  // Clean any old address strings
  content = content.replace(/<span><strong>Address:<\/strong>[^<]*<\/span>/gi, MADURAI_ADDRESS_HTML);
  content = content.replace(/<span>Doorstep Service Across Madurai[^<]*<\/span>/gi, MADURAI_ADDRESS_HTML);

  // Clean any stray bad pincodes
  content = content.replace(/641012/g, '625001');
  content = content.replace(/629702/g, '625001');
  content = content.replace(/638011/g, '625001');
  content = content.replace(/639001/g, '625001');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    fixed++;
  }
});

console.log(`Audited and normalized maps and addresses in ${fixed} files.`);
