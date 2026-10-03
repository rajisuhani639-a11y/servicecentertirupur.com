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

const wordsToCheck = [
  'malfunctioning',
  'malfunction',
  'diagnosis',
  'diagnostic',
  'resolution',
  'rectification',
  'assistance',
  'utilization',
  'utilize',
  'commence',
  'facilitate',
  'optimal',
  'optimize',
  'seamless',
  'exceptional',
  'state-of-the-art',
  'unparalleled',
  'cutting-edge',
  'robust',
  'streamlined',
  'tailored',
  'comprehensive',
  'troubleshooting'
];

const found = {};
wordsToCheck.forEach(w => found[w] = 0);

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  wordsToCheck.forEach(w => {
    const regex = new RegExp('\\b' + w + '\\b', 'gi');
    const m = content.match(regex);
    if (m) found[w] += m.length;
  });
});

console.log('--- EXTENDED VOCABULARY AUDIT ---');
Object.entries(found).sort((a,b) => b[1] - a[1]).forEach(([w, c]) => {
  if (c > 0) console.log(`${w.padEnd(20)}: ${c}`);
});
