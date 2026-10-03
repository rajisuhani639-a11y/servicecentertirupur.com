const fs = require('fs');
const faqs = JSON.parse(fs.readFileSync('scripts/erode_master_faqs.json', 'utf8'));

const heavyWords = [
  'promptly', 'prompt', 'facilitate', 'comprehensive', 'seamless', 'robust',
  'meticulous', 'sophisticated', 'tailored', 'unparalleled', 'streamlined',
  'proactive', 'endeavour', 'utilize', 'leveraging', 'optimize', 'enhance',
  'intervention', 'specialized assistance', 'exceptional service',
  'efficient resolution'
];

let counts = {};
heavyWords.forEach(w => counts[w] = 0);

Object.keys(faqs).forEach(k => {
  const f = faqs[k];
  f.groups.forEach(g => {
    g.items.forEach(it => {
      const text = (it.q + ' ' + it.a).toLowerCase();
      heavyWords.forEach(w => {
        const matches = text.match(new RegExp('\\b' + w + '\\b', 'g'));
        if (matches) counts[w] += matches.length;
      });
    });
  });
});

console.log('Heavy words in erode_master_faqs.json:');
console.log(counts);
