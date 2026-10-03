const fs = require('fs');
const content = fs.readFileSync('ac-repair-service-in-karur.html', 'utf8');

const start = content.indexOf('experiences-grid');
const end = content.indexOf('Frequently Asked Questions', start);
const snippet = content.slice(start, end);
const regex = /<p class="experience-body">\s*"([\s\S]*?)"\s*<\/p>/g;

let m;
let i = 1;
while ((m = regex.exec(snippet)) !== null) {
  const text = m[1].replace(/\s+/g, ' ').trim();
  const count = text.split(' ').length;
  console.log(`Main AC Page Problem ${i}: ${count} words.`);
  if (count < 40 || count > 50) {
    console.error(`ERROR: Problem ${i} is not 40-50 words!`);
  }
  i++;
}
