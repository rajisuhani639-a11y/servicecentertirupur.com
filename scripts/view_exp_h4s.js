const fs = require('fs');

const content = fs.readFileSync('washing-machine/samsung-washing-machine-repair-service-in-karur.html', 'utf8');
const expIdx = content.indexOf('id="experiences"');
const expSec = content.slice(expIdx, content.indexOf('</section>', expIdx));
const h4s = [...expSec.matchAll(/<h4[^>]*>(.*?)<\/h4>/gi)].map(m => m[1]);
console.log('Samsung WM Experience H4s:');
console.log(h4s);
