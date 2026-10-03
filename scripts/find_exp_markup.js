const fs = require('fs');

const content = fs.readFileSync('washing-machine/samsung-washing-machine-repair-service-in-karur.html', 'utf8');
const expIdx = content.indexOf('Experience');
if (expIdx !== -1) {
  console.log(content.slice(expIdx - 100, expIdx + 1200));
} else {
  console.log('No "Experience" found in samsung WM page. Searching other keywords:');
  const h2s = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)].map(m => m[1]);
  console.log('H2s:', h2s);
}
