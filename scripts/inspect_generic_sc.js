const fs = require('fs');

const content = fs.readFileSync('servicecenter/home-appliance-service-center-erode.html', 'utf8');

const h2s = content.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi);
console.log('H2s in home-appliance-service-center-erode.html:');
h2s.forEach(h => console.log(' ', h.replace(/<[^>]+>/g, '').trim()));
