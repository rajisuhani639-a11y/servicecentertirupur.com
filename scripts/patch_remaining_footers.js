const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const footerGuidesBlock = `        <div class="footer-col">
          <h4>Helpful Appliance Guides</h4>
          <ul class="footer-links">
            <li><a href="/blog/common-ac-problems-in-madurai.html">Common AC Problems in 2026</a></li>
            <li><a href="/blog/washing-machine-pcb-motor-drum-repair-madurai.html">Washing Machine PCB &amp; Motor Fix</a></li>
            <li><a href="/blog/refrigerator-cooling-compressor-gas-issues-madurai.html">Fridge Cooling &amp; Compressor Guide</a></li>
            <li><a href="/blog/tv-backlight-display-power-problems-madurai.html">TV Backlight &amp; Display Guide</a></li>
            <li><a href="/blog/home-appliance-repair-cost-guide-madurai.html">Madurai Appliance Repair Cost Guide</a></li>
            <li><a href="/blog/index.html">All 12 Madurai Guides</a></li>
          </ul>
        </div>`;

// 1. Update index.html
let indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
if (indexContent.includes('<h4>Madurai Coverage</h4>')) {
  indexContent = indexContent.replace(
    /<div class="footer-col">\s*<h4>Madurai Coverage<\/h4>[\s\S]*?<\/div>/,
    footerGuidesBlock
  );
  fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), indexContent, 'utf8');
  console.log('✓ index.html footer updated with Helpful Appliance Guides');
}

// 2. Update washing-machine/*.html
const wmDir = path.join(ROOT_DIR, 'washing-machine');
const wmFiles = fs.readdirSync(wmDir).filter(f => f.endsWith('.html'));

let wmUpdated = 0;
wmFiles.forEach(file => {
  const filePath = path.join(wmDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the 4th column "Service Assurance" with Helpful Appliance Guides
  if (content.includes('<h4>Service Assurance</h4>')) {
    content = content.replace(
      /<div class="footer-col">\s*<h4>Service Assurance<\/h4>[\s\S]*?<\/div>/,
      footerGuidesBlock
    );
    fs.writeFileSync(filePath, content, 'utf8');
    wmUpdated++;
  }
});

console.log(`✓ Updated footer in ${wmUpdated} washing machine pages.`);
