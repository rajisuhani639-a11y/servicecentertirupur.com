const fs = require('fs');

const sample = fs.readFileSync('index.html', 'utf8');
const iconTags = sample.match(/<link[^>]*rel=["'](?:icon|shortcut icon|apple-touch-icon|manifest)["'][^>]*>/gi) || [];
console.log('Icon tags in index.html:');
iconTags.forEach(t => console.log('  ', t));
