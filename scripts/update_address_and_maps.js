const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtml = walk(process.cwd());
console.log('Total HTML files to process for Address & Maps:', allHtml.length);

const NEW_ADDRESS = '3GQX+RPM, Cape Rd, Kanniyakumari, Tamil Nadu 629702';
const NEW_MAP_SRC = 'https://maps.google.com/maps?q=3GQX%2BRPM%2C%20Cape%20Rd%2C%20Kanniyakumari%2C%20Tamil%20Nadu%20629702&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed';

let filesModified = 0;
let mapReplacements = 0;
let addressReplacements = 0;
let schemaReplacements = 0;

for (const file of allHtml) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Google Maps embed replacement
  // Matches any iframe with maps.google.com src
  const mapRegex = /<iframe[^>]*src=["']https:\/\/maps\.google\.com\/maps\?[^"']+["'][^>]*>/gi;
  if (mapRegex.test(content)) {
    content = content.replace(mapRegex, (match) => {
      // replace just the src attribute
      mapReplacements++;
      return match.replace(/src=["'][^"']+["']/, `src="${NEW_MAP_SRC}"`);
    });
  }

  // 2. Visible Address replacements in HTML:
  // e.g. <span><strong>Address:</strong> 171, Court Road Rd, Cape Road Junction, Kanyakumari, Tamil Nadu 639001</span>
  content = content.replace(
    /<strong>Address:<\/strong>\s*(?:171,\s*Court Road Rd,\s*Cape Road Junction,\s*Kanyakumari,\s*Tamil Nadu\s*639001|Court Road Junction,\s*Cape Road,\s*Nagercoil,\s*Tamil Nadu\s*629001|[^<]*Court Road[^<]*)/gi,
    `<strong>Address:</strong> ${NEW_ADDRESS}`
  );

  // e.g. <span>171, Court Road Rd, Cape Road Junction, Kanyakumari, Tamil Nadu 639001</span>
  content = content.replace(
    /<span>171,\s*Court Road Rd,\s*Cape Road Junction,\s*Kanyakumari,\s*Tamil Nadu\s*639001<\/span>/gi,
    `<span>${NEW_ADDRESS}</span>`
  );

  // e.g. <span>171, Court Road Rd, Cape Road Junction, Kanyakumari, Tamil Nadu 629001</span>
  content = content.replace(
    /<span>171,\s*Court Road Rd,\s*Cape Road Junction,\s*Kanyakumari,\s*Tamil Nadu\s*629001<\/span>/gi,
    `<span>${NEW_ADDRESS}</span>`
  );

  // Address in footer or contact cards
  content = content.replace(/171,\s*Court Road Rd,\s*Cape Road Junction,\s*Kanyakumari,\s*Tamil Nadu\s*639001/gi, NEW_ADDRESS);
  content = content.replace(/171,\s*Court Road Rd,\s*Cape Road Junction,\s*Kanyakumari,\s*Tamil Nadu\s*629001/gi, NEW_ADDRESS);
  content = content.replace(/171,\s*Jawahar\s*Bazaar\s*Rd[^"&<]*/gi, NEW_ADDRESS);

  // 3. Schema.org updates in JSON-LD
  // We can parse and update JSON-LD or regex replace PostalAddress fields
  // Look for streetAddress
  content = content.replace(/"streetAddress":\s*"[^"]*(?:Court Road|Jawahar|171)[^"]*"/gi, '"streetAddress": "3GQX+RPM, Cape Rd"');
  // Update postalCode in schema when associated with the center address
  // Replace "postalCode": "639001" everywhere
  content = content.replace(/"postalCode":\s*"639001"/g, '"postalCode": "629702"');
  
  // In LocalBusiness schema:
  // If streetAddress is "3GQX+RPM, Cape Rd", ensure postalCode is 629702 and addressLocality is Kanniyakumari
  content = content.replace(
    /("address":\s*\{\s*"@type":\s*"PostalAddress",\s*"streetAddress":\s*)"[^"]*",(\s*"addressLocality":\s*)"[^"]*",(\s*"addressRegion":\s*)"[^"]*",(\s*"postalCode":\s*)"[^"]*"/gi,
    '$1"3GQX+RPM, Cape Rd",$2"Kanniyakumari",$3"Tamil Nadu",$4"629702"'
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    filesModified++;
  }
}

console.log('Address & Maps update complete:');
console.log(`Files modified: ${filesModified} / ${allHtml.length}`);
console.log(`Map replacements: ${mapReplacements}`);
