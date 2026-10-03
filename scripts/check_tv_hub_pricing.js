const fs = require('fs');

const content = fs.readFileSync('tv/tv-repair-service-in-karur.html', 'utf8');
const pCount = (content.match(/class="type-pricing-box"/g) || []).length;
console.log('TV hub pricing boxes:', pCount);
