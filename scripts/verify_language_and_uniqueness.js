const fs = require('fs');
const path = require('path');

const scDir = path.join(__dirname, '..', 'service-center');
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

// Tamil / Tanglish indicators that should NEVER appear in 100% simple English pages
const tamilWords = ['panrom', 'pannom', 'pannuvanga', 'sonnanga', 'kitta', 'marupadum', 'irukku', 'vandhudhu', 'kooda', 'unga', 'veetukke', 'vaangi', 'dhaan', 'aagudhu', 'romba'];

let issues = 0;

files.forEach(f => {
  const content = fs.readFileSync(path.join(scDir, f), 'utf8');
  tamilWords.forEach(w => {
    const regex = new RegExp('\\b' + w + '\\b', 'i');
    if (regex.test(content)) {
      console.error(`Language violation in ${f}: found "${w}"`);
      issues++;
    }
  });
});

if (issues === 0) {
  console.log(`PASS! All ${files.length} pages in /servicecenter/ are 100% SIMPLE ENGLISH (zero Tanglish/Tamil words).`);
} else {
  console.error(`FAILED: ${issues} language violations found.`);
}
