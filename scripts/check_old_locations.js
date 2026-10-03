const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');
if (fs.existsSync('sitemap.xml')) allFiles.push('sitemap.xml');
if (fs.existsSync('robots.txt')) allFiles.push('robots.txt');

const searchTerms = [
  'Kanyakumari',
  'Kanniyakumari',
  'servicecenterkanyakumari',
  'servicecentertenkasi',
  'servicecentermadurai',
  'servicecentertiruchirappalli',
  'localhost',
  '127.0.0.1',
  'service-center/'
];

let totalHits = 0;
searchTerms.forEach(term => {
  let termHits = 0;
  allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = new RegExp(term, 'gi');
    const matches = content.match(regex);
    if (matches) {
      termHits += matches.length;
      totalHits += matches.length;
      console.log(`Found "${term}" (${matches.length} times) in: ${file}`);
    }
  });
  console.log(`Term "${term}": ${termHits} matches`);
});

console.log(`\nTotal old location / domain hits across public site files: ${totalHits}`);
