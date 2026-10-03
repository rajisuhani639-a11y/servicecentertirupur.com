const fs = require('fs');
const path = require('path');
const localities = require('./karur_localities.js');

// 1. Update js/config.js
const configPath = path.resolve(__dirname, '..', 'js', 'config.js');
let configContent = fs.readFileSync(configPath, 'utf8');
configContent = configContent.replace(/Service Center Karur/g, 'Service Center Karur');
configContent = configContent.replace(/servicecenterkarur\.com/g, 'servicecenterkarur.com');
configContent = configContent.replace(/Karur/g, 'Karur');
configContent = configContent.replace(/639001/g, '639001');
configContent = configContent.replace(/10\.3673/g, '10.9601');
configContent = configContent.replace(/77\.9803/g, '78.0766');
configContent = configContent.replace(/Jawahar Bazaar, Kovai Road, Near Bus Stand/g, 'Jawahar Bazaar, Kovai Road, Near Bus Stand');
configContent = configContent.replace(/-karur\.html/g, '-karur.html');
configContent = configContent.replace(/Karur Road/g, 'South Highway Corridor');

// Build the flat localities array for config
const flatLocs = [];
for (const quad of ['east', 'west', 'north', 'south']) {
  for (const l of localities[quad]) {
    flatLocs.push(`    { name: "${l.name}", landmark: "${l.landmark}" }`);
  }
}
const locArrayStr = `localities: [\n${flatLocs.join(',\n')}\n  ]`;
configContent = configContent.replace(/localities:\s*\[[\s\S]*?\n  \],/, `${locArrayStr},`);

fs.writeFileSync(configPath, configContent, 'utf8');
console.log('js/config.js updated.');

// 2. Update js/main.js
const mainJsPath = path.resolve(__dirname, '..', 'js', 'main.js');
let mainJsContent = fs.readFileSync(mainJsPath, 'utf8');
mainJsContent = mainJsContent.replace(/servicecenterkarur\.com/g, 'servicecenterkarur.com');
mainJsContent = mainJsContent.replace(/Service Center Karur/g, 'Service Center Karur');
mainJsContent = mainJsContent.replace(/Karur/g, 'Karur');
fs.writeFileSync(mainJsPath, mainJsContent, 'utf8');
console.log('js/main.js updated.');

// 3. Update css/style.css
const styleCssPath = path.resolve(__dirname, '..', 'css', 'style.css');
let styleCssContent = fs.readFileSync(styleCssPath, 'utf8');
styleCssContent = styleCssContent.replace(/Service Center Karur/g, 'Service Center Karur');
fs.writeFileSync(styleCssPath, styleCssContent, 'utf8');
console.log('css/style.css updated.');

// 4. Update robots.txt
const robotsPath = path.resolve(__dirname, '..', 'robots.txt');
fs.writeFileSync(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: https://servicecenterkarur.com/sitemap.xml\n`, 'utf8');
console.log('robots.txt updated.');

// 5. Update site.webmanifest
const manifestPath = path.resolve(__dirname, '..', 'site.webmanifest');
let manifestContent = fs.readFileSync(manifestPath, 'utf8');
manifestContent = manifestContent.replace(/Service Center Karur/g, 'Service Center Karur');
manifestContent = manifestContent.replace(/Karur/g, 'Karur');
fs.writeFileSync(manifestPath, manifestContent, 'utf8');
console.log('site.webmanifest updated.');
