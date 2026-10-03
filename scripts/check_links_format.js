const fs = require('fs');

const html = fs.readFileSync('washing-machine/white-westinghouse-washing-machine-repair-service-in-coimbatore.html', 'utf8');

const matches = html.match(/href="([^"#:]+)"/g) || [];
console.log('Sample links from file:');
matches.slice(0, 20).forEach(m => console.log('  ', m));
