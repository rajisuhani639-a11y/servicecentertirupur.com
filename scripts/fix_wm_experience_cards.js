const fs = require('fs');
const path = require('path');

const wmDir = 'washing-machine';
const files = fs.readdirSync(wmDir).filter(f => f.endsWith('.html'));

let fixedCount = 0;
let cardsFixed = 0;

files.forEach(f => {
  const filePath = path.join(wmDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(' style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">')) {
    // Replace lines where ` style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">`
    // is missing `<div class="service-card"`
    const regex = /([ \t]*)style="padding:\s*1\.25rem;\s*background:\s*#fff;\s*border-left:\s*4px\s*solid\s*var\(--accent-blue\);"[^>]*>/g;
    
    let matches = content.match(regex);
    if (matches) {
      cardsFixed += matches.length;
      content = content.replace(regex, '$1<div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">');
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
    }
  }
});

console.log(`Fixed missing <div class="service-card" in ${fixedCount} files (${cardsFixed} cards fixed).`);
