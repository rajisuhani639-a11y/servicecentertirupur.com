const fs = require('fs');

const coimbatorePages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));

const erodePages = coimbatorePages.map(p => {
  let newFile = p.file.replace(/-coimbatore\.html$/, '-erode.html');
  let canonical = `https://servicecentereode.com/${newFile}`;
  if (p.file === 'index.html') {
    canonical = 'https://servicecentereode.com/';
  }

  // Also replace any brand appliance strings that contain Coimbatore if present
  return {
    ...p,
    oldFile: p.file,
    newFile: newFile,
    canonical: canonical
  };
});

fs.writeFileSync('scripts/erode_pages_data.json', JSON.stringify(erodePages, null, 2));
console.log(`Created scripts/erode_pages_data.json with ${erodePages.length} pages.`);
