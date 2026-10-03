const fs = require('fs');

const xml = fs.readFileSync('sitemap.xml', 'utf8');
const locs = (xml.match(/<loc>(.*?)<\/loc>/g) || []).map(m => m.replace(/<\/?loc>/g, ''));

console.log('Total URLs in sitemap.xml:', locs.length);

let errors = 0;
const validFiles = [];

locs.forEach(url => {
  if (!url.startsWith('https://servicecentercoimbatore.com/')) {
    console.log('Bad domain:', url);
    errors++;
  }
  if (url.includes('kanyakumari') || url.includes('karur') || url.includes('service-center/')) {
    console.log('Bad pattern in url:', url);
    errors++;
  }
  // Check if file exists on disk
  let relPath = url.replace('https://servicecentercoimbatore.com/', '');
  if (!relPath || relPath === '/') relPath = 'index.html';
  if (!fs.existsSync(relPath)) {
    console.log(`URL file not found on disk: ${url} -> ${relPath}`);
    errors++;
  } else {
    validFiles.push(relPath);
  }
});

console.log('Errors found in sitemap.xml:', errors);
console.log('Valid files verified:', validFiles.length);
