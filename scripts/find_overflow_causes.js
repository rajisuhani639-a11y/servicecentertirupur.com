const fs = require('fs');
const html = fs.readFileSync('fridge/liebherr-refrigerator-repair-service-in-karur.html', 'utf8');

console.log('=== CHECKING POTENTIAL OVERFLOW CAUSES IN LIEBHERR PAGE ===');

// Check top bar
if (html.includes('class="top-bar"')) {
  console.log('1. Found .top-bar without responsive styling in CSS');
}

// Check minmax px in inline styles
const minmaxMatches = html.match(/minmax\([0-9]+px/g);
console.log('2. minmax occurrences in inline styles:', minmaxMatches);

// Check nowrap in inline styles
const nowrapMatches = html.match(/white-space:\s*nowrap/g);
console.log('3. white-space nowrap in inline styles:', nowrapMatches);

// Check hardcoded widths
const widthMatches = html.match(/width:\s*[0-9]+px/g);
console.log('4. Hardcoded px widths:', widthMatches);

// Check font sizes > 2rem
const fontSizeMatches = html.match(/font-size:\s*2\.[0-9]+rem/g);
console.log('5. Font sizes > 2rem:', fontSizeMatches);

// Check table markup
if (html.includes('<table')) {
  console.log('6. Found table markup. Is table wrapper responsive?');
}

// Check breadcrumbs
if (html.includes('Breadcrumb')) {
  console.log('7. Breadcrumb container structure check');
}
