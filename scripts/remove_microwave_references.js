const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Delete microwave-repair-service-in-karur.html
const microwaveFile = path.join(rootDir, 'microwave-repair-service-in-karur.html');
if (fs.existsSync(microwaveFile)) {
  fs.unlinkSync(microwaveFile);
  console.log('Successfully deleted:', microwaveFile);
}

// 2. Clean sitemap.xml
const sitemapFile = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapFile)) {
  let sitemap = fs.readFileSync(sitemapFile, 'utf8');
  sitemap = sitemap.replace(/<url>[\s\S]*?microwave-repair-service-in-karur\.html[\s\S]*?<\/url>\s*/g, '');
  fs.writeFileSync(sitemapFile, sitemap, 'utf8');
  console.log('Cleaned microwave from sitemap.xml');
}

// 3. Clean index.html
const indexFile = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexFile, 'utf8');

// Nav
indexHtml = indexHtml.replace(/\s*<a href="microwave-repair-service-in-karur\.html">Microwave<\/a>/g, '');

// Footer
indexHtml = indexHtml.replace(/\s*<li><a href="microwave-repair-service-in-karur\.html">Microwave Oven Repair<\/a><\/li>/g, '');

// Quick booking option
indexHtml = indexHtml.replace(/\s*<option value="Microwave Oven Repair">Microwave Oven Repair<\/option>/g, '');

// Meta descriptions
indexHtml = indexHtml.replace(/,\s*TV and microwave oven/g, ' and TV');
indexHtml = indexHtml.replace(/,\s*TV and Microwave Oven/g, ' and TV');
indexHtml = indexHtml.replace(/,\s*TV or microwave repair/g, ' or TV repair');
indexHtml = indexHtml.replace(/,\s*TV or Microwave-la problem-aa\?/g, ' or TV-la problem-aa?');
indexHtml = indexHtml.replace(/,\s*or a microwave oven running without heating meals/g, '');
indexHtml = indexHtml.replace(/,\s*TV, Microwave/g, ', TV');
indexHtml = indexHtml.replace(/5 major categories:\s*Air Conditioners[^<]*and Microwave Ovens\s*\(Solo,\s*Grill,\s*Convection\)\./, '4 major categories: Air Conditioners (Split & Window), Refrigerators (Single Door, Double Door, Frost-Free), Washing Machines (Front Load, Top Load, Semi Automatic), and Televisions (LED, LCD, Smart Android TV).');

// Service card in index.html
indexHtml = indexHtml.replace(/<!-- 5\. Microwave Oven Repair -->[\s\S]*?<!-- End of service card 5 -->/g, '');
// Fallback if no comment
indexHtml = indexHtml.replace(/<div class="service-card"[^>]*>[\s\S]*?<h3>Microwave Oven Repair<\/h3>[\s\S]*?<\/div>\s*<\/div>/g, '');

// Customer experience scenario
indexHtml = indexHtml.replace(/<div class="experience-card">[\s\S]*?Microwave on aagudhu aana heat aagala[\s\S]*?<\/div>/g, '');

// Update other appliance links in index.html to point to their folders!
indexHtml = indexHtml.replace('href="ac-repair-service-in-karur.html"', 'href="ac/ac-repair-service-in-karur.html"');
indexHtml = indexHtml.replace('href="refrigerator-repair-service-in-karur.html"', 'href="fridge/refrigerator-repair-service-in-karur.html"');
indexHtml = indexHtml.replace('href="tv-repair-service-in-karur.html"', 'href="tv/tv-repair-service-in-karur.html"');

fs.writeFileSync(indexFile, indexHtml, 'utf8');
console.log('Cleaned and updated index.html');

// 4. Clean all HTML files in ac/, tv/, washing-machine/
function cleanFolderHtml(folderName) {
  const dir = path.join(rootDir, folderName);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

  files.forEach(f => {
    const filePath = path.join(dir, f);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove microwave from nav
    content = content.replace(/\s*<a href="(?:\.\.\/)?microwave-repair-service-in-karur\.html">Microwave<\/a>/g, '');

    // Remove microwave from footer
    content = content.replace(/\s*<li><a href="(?:\.\.\/)?microwave-repair-service-in-karur\.html">Microwave Oven Repair<\/a><\/li>/g, '');

    // Remove microwave service card
    content = content.replace(/<a href="(?:\.\.\/)?microwave-repair-service-in-karur\.html"[\s\S]*?<\/a>\s*/g, '');

    // Update cross-appliance links if they still point to old root files
    content = content.replace(/href="(?:\.\.\/)?ac-repair-service-in-karur\.html"/g, folderName === 'ac' ? 'href="ac-repair-service-in-karur.html"' : 'href="../ac/ac-repair-service-in-karur.html"');
    content = content.replace(/href="(?:\.\.\/)?refrigerator-repair-service-in-karur\.html"/g, 'href="../fridge/refrigerator-repair-service-in-karur.html"');
    content = content.replace(/href="(?:\.\.\/)?tv-repair-service-in-karur\.html"/g, folderName === 'tv' ? 'href="tv-repair-service-in-karur.html"' : 'href="../tv/tv-repair-service-in-karur.html"');

    fs.writeFileSync(filePath, content, 'utf8');
  });
  console.log(`Cleaned microwave and updated links across ${files.length} files in /${folderName}/`);
}

cleanFolderHtml('ac');
cleanFolderHtml('tv');
cleanFolderHtml('washing-machine');
