const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getHtmlFiles('.');
const aiPhrases = [
  'seamless experience',
  'comprehensive solutions',
  'cutting-edge',
  'state-of-the-art',
  'unparalleled service',
  'tailored solutions',
  'robust solutions',
  'leverage',
  'empower',
  'elevate',
  'revolutionize',
  'highly skilled professionals',
  'exceptional service experience',
  'technologically advanced solutions',
  'hassle-free experience',
  'dedicated solutions',
  'end-to-end solutions',
  'seamless',
  'tailored'
];

const matches = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  aiPhrases.forEach(phrase => {
    const reg = new RegExp(`\\b${phrase}\\b`, 'gi');
    const m = content.match(reg);
    if (m) {
      matches[phrase] = (matches[phrase] || 0) + m.length;
    }
  });
});

console.log('AI-heavy phrases found:');
console.log(matches);
