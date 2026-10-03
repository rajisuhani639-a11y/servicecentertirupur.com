const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(getHtmlFiles(full));
    } else if (file.endsWith('.html')) results.push(full.replace(/\\/g, '/'));
  });
  return results;
}

const files = getHtmlFiles('.');

let heroCount = 0;
let expSectionCount = 0;
let faqSectionCount = 0;

const stats = {
  hasHero: 0,
  hasExp: 0,
  hasFaq: 0,
  filesWithoutHero: [],
  filesWithoutExp: [],
  filesWithoutFaq: []
};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasHero = /<p class="hero-(?:lead|copy)"/i.test(content);
  const hasExp = /Recent[^<]*Experiences in Erode/i.test(content) || /experience-card/i.test(content) || /Resolution Rating/i.test(content) || /Customer Rating/i.test(content);
  const hasFaq = /faq-item/i.test(content) || /faq-accordion/i.test(content);

  if (hasHero) stats.hasHero++;
  else stats.filesWithoutHero.push(f);

  if (hasExp) stats.hasExp++;
  else stats.filesWithoutExp.push(f);

  if (hasFaq) stats.hasFaq++;
  else stats.filesWithoutFaq.push(f);
});

console.log('Total files:', files.length);
console.log('Stats:', {
  hasHero: stats.hasHero,
  hasExp: stats.hasExp,
  hasFaq: stats.hasFaq
});

console.log('Files without Exp:', stats.filesWithoutExp);
console.log('Files without FAQ:', stats.filesWithoutFaq);
