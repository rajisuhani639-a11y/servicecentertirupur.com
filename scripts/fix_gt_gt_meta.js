const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getAllHtml(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const files = getAllHtml('.');
let fixedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Replace double >> at the end of meta tags
  // e.g. <meta name="..." content="...">> -> <meta name="..." content="...">
  content = content.replace(/(<meta\s+[^>]*?)>>/gi, '$1>');
  
  // Also check if any <link ...>> or other tags have >>
  content = content.replace(/(<link\s+[^>]*?)>>/gi, '$1>');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    fixedCount++;
  }
});

console.log(`Successfully fixed >> meta tag issue in ${fixedCount} files.`);
