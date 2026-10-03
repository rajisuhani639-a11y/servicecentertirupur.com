const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('sitemap.html', 'utf8');
const links = html.match(/href="([^"#:]+)"/g) || [];

console.log('Total href links in sitemap.html:', links.length);

let errors = 0;
links.forEach(l => {
  const target = l.replace('href="', '').replace('"', '');
  if (target.endsWith('.html') || target === '/') {
    let rel = target.startsWith('/') ? target.slice(1) : target;
    if (!rel || rel === '/') rel = 'index.html';
    if (!fs.existsSync(rel)) {
      console.log('Broken link in sitemap.html:', target, '->', rel);
      errors++;
    }
  }
});

console.log('Broken links in sitemap.html:', errors);

// Also check for old domains or locations in sitemap.html
const oldMatches = html.match(/(?:kanyakumari|karur|madurai|tenkasi|service-center\/|localhost|127\.0\.0\.1)/gi) || [];
console.log('Old domain / location matches in sitemap.html:', oldMatches.length);
if (oldMatches.length > 0) {
  console.log('Sample old matches:', oldMatches.slice(0, 10));
}
