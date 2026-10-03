const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Remove Microwave article card
const startMarker = '<!-- 5. Microwave Oven Repair -->';
const endMarker = '</article>';
const startIdx = html.indexOf(startMarker);
if (startIdx !== -1) {
  const endIdx = html.indexOf(endMarker, startIdx);
  if (endIdx !== -1) {
    html = html.substring(0, startIdx) + html.substring(endIdx + endMarker.length);
    console.log('Successfully removed Microwave article from index.html');
  }
}

// Ensure TV link is tv/tv-repair-service-in-karur.html
html = html.replace('href="tv-repair-service-in-karur.html"', 'href="tv/tv-repair-service-in-karur.html"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Saved index.html');
