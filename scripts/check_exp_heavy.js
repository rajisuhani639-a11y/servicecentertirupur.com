const fs = require('fs');
const exps = JSON.parse(fs.readFileSync('scripts/erode_unique_experiences.json', 'utf8'));

const heavyWords = [
  'promptly', 'prompt', 'facilitate', 'comprehensive', 'seamless', 'robust',
  'meticulous', 'sophisticated', 'tailored', 'unparalleled', 'streamlined',
  'proactive', 'endeavour', 'utilize', 'leveraging', 'optimize', 'enhance',
  'intervention', 'resolution', 'assistance', 'specialized assistance', 'exceptional service',
  'efficient resolution'
];

let counts = {};
heavyWords.forEach(w => counts[w] = 0);

Object.keys(exps).forEach(k => {
  const cards = exps[k];
  cards.forEach(c => {
    const text = (c.heading + ' ' + c.body).toLowerCase();
    heavyWords.forEach(w => {
      const matches = text.match(new RegExp('\\b' + w + '\\b', 'g'));
      if (matches) counts[w] += matches.length;
    });
  });
});

console.log('Heavy words in erode_unique_experiences.json:');
console.log(counts);
