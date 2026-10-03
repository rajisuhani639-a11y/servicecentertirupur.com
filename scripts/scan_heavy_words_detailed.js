const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && f !== 'node_modules' && f !== '.git') {
      res = res.concat(walk(p));
    } else if (f.endsWith('.html')) {
      res.push(p);
    }
  });
  return res;
}

const htmlFiles = walk(ROOT_DIR);
console.log(`Auditing ${htmlFiles.length} HTML files...`);

const targetPhrases = [
  'comprehensive',
  'facilitate',
  'commence',
  'rectification',
  'malfunctioning',
  'troubleshooting',
  'professional assistance',
  'prompt assistance',
  'technical issues',
  'state-of-the-art',
  'unparalleled',
  'exceptional',
  'best-in-class',
  'cutting-edge',
  'tailored solutions',
  'robust',
  'streamlined',
  'premium experience',
  'committed to excellence',
  'seamless experience',
  'seamless'
];

const counts = {};
targetPhrases.forEach(p => counts[p] = 0);

const fileMatches = {};

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  targetPhrases.forEach(p => {
    const regex = new RegExp('\\b' + p + '\\b', 'gi');
    const matches = content.match(regex);
    if (matches) {
      counts[p] += matches.length;
      if (!fileMatches[f]) fileMatches[f] = [];
      fileMatches[f].push({ phrase: p, count: matches.length });
    }
  });
});

console.log('--- WORD FREQUENCY REPORT ---');
Object.entries(counts).forEach(([k, v]) => {
  if (v > 0) console.log(`${k}: ${v} occurrences`);
});

const filesWithMatches = Object.keys(fileMatches).length;
console.log(`\nFiles containing target words: ${filesWithMatches} / ${htmlFiles.length}`);
