const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'wm_brands_1_to_10.js'),
  path.join(__dirname, 'wm_brands_11_to_20.js'),
  path.join(__dirname, 'wm_brands_21_to_30.js')
];

function transformBrandFileContent(content) {
  return content
    // Specific phrases first
    .replace(/Tirunelveli Town and Junction/g, 'Karur Town and Kagithapuramam')
    .replace(/Tirunelveli Town/g, 'Karur Town')
    .replace(/Palayamkottai, Tirunelveli/g, 'Thanthonimalai, Karur')
    .replace(/Palayamkottai and Vannarpettai/g, 'Thanthonimalai and Aravakurichi')
    .replace(/Palayamkottai, Vannarpettai/g, 'Thanthonimalai, Aravakurichi')
    .replace(/South Ring Road, Palayamkottai/g, 'Jawahar Bazaar, Kovai Road, Near Bus Stand')
    .replace(/South Ring Road/g, 'Kovai Road Bypass')
    .replace(/Service Center Tirunelveli/g, 'Service Center Karur')
    // Locality replacements (1-to-1 word equivalence)
    .replace(/\bPalayamkottai\b/g, 'Thanthonimalai')
    .replace(/\bMelapalayam\b/g, 'Vengamedu')
    .replace(/\bPettai\b/g, 'Sanapiratti')
    .replace(/\bThatchanallur\b/g, 'Chinna Andankovil')
    .replace(/\bVannarpettai\b/g, 'Aravakurichi')
    .replace(/\bPerumalpuram\b/g, 'Velayuthampalayam')
    .replace(/\bSamathanapuram\b/g, 'Puliyur')
    .replace(/\bMaharaja Nagar\b/g, 'Sengunthapuram')
    .replace(/\bKTC Nagar\b/g, 'Rayanur')
    .replace(/\bHigh Ground\b/g, 'Kovai Road')
    .replace(/\bVasantha Nagar\b/g, 'Sukkaliyur')
    .replace(/\bShanthi Nagar\b/g, 'Kagithapuramam')
    .replace(/\bJunction\b/g, 'Kagithapuramam')
    // City names
    .replace(/\bTirunelveli\b/g, 'Karur')
    .replace(/\bTIRUNELVELI\b/g, 'KARUR')
    .replace(/\btirunelveli\b/g, 'karur');
}

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = transformBrandFileContent(content);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Transformed: ${path.basename(file)}`);
});

console.log("Done transforming brand data files.");
