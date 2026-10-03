const fs = require('fs');

const mainHtml = fs.readFileSync('fridge/refrigerator-repair-service-in-karur.html', 'utf8');

console.log('=== AUDITING MAIN REFRIGERATOR PAGE ===');
console.log('File size:', mainHtml.length);

// Check hardcoded px widths
const pxWidths = [...mainHtml.matchAll(/width:\s*([0-9]+)px/gi)].map(m => m[1]);
console.log('Hardcoded px widths:', pxWidths.filter(w => parseInt(w, 10) > 300));

// Check minmax with px
const minmax = [...mainHtml.matchAll(/minmax\(([0-9]+)px/gi)].map(m => m[1]);
console.log('minmax px values:', minmax.filter(w => parseInt(w, 10) > 280));

// Check white-space nowrap
const nowrap = [...mainHtml.matchAll(/white-space:\s*nowrap/gi)];
console.log('white-space nowrap count:', nowrap.length);

// Check table wrappers
console.log('Has table-responsive:', mainHtml.includes('table-responsive'));
console.log('Has content-table-wrapper:', mainHtml.includes('content-table-wrapper'));

// Check for unclosed tags
['div', 'section', 'main', 'header', 'footer', 'form', 'table'].forEach(tag => {
  const openCount = (mainHtml.match(new RegExp('<' + tag + '(\\s|>|$)', 'gi')) || []).length;
  const closeCount = (mainHtml.match(new RegExp('</' + tag + '>', 'gi')) || []).length;
  if (openCount !== closeCount) console.log('MISMATCH for', tag, openCount, closeCount);
});
