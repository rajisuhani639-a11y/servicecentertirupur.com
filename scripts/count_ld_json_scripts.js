const fs = require('fs');
const glob = require('path');

const pages = JSON.parse(fs.readFileSync('scripts/coimbatore_pages_list.json', 'utf8'));

let filesWithMultipleScripts = [];
let filesWithSingleScript = [];
let filesWithNoScript = [];

pages.forEach(p => {
  const html = fs.readFileSync(p.newRel, 'utf8');
  const matches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  if (matches.length > 1) {
    filesWithMultipleScripts.push({ file: p.newRel, count: matches.length });
  } else if (matches.length === 1) {
    filesWithSingleScript.push(p.newRel);
  } else {
    filesWithNoScript.push(p.newRel);
  }
});

console.log('Files with > 1 ld+json scripts:', filesWithMultipleScripts.length);
console.log('Files with exactly 1 ld+json script:', filesWithSingleScript.length);
console.log('Files with 0 ld+json scripts:', filesWithNoScript.length);

if (filesWithMultipleScripts.length > 0) {
  console.log('Sample files with > 1:', filesWithMultipleScripts.slice(0, 5));
}
