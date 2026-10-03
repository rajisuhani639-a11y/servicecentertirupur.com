const fs = require('fs');

function checkPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`Checking ${file}:`);
  const headings = html.match(/<h[23][^>]*>(.*?)<\/h[23]>/gi) || [];
  console.log('H2/H3 headings:');
  headings.slice(0, 15).forEach(h => console.log('  ', h.replace(/<[^>]+>/g, '').trim()));
}

checkPage('servicecenter/home-appliance-service-center-coimbatore.html');
checkPage('index.html');
