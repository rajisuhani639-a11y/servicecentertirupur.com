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
const nonKarurNames = ['Nellaiappar', 'Meenakshi', 'Rockfort', 'Srirangam', 'Palani', 'Kodaikanal', 'Thanjavur', 'Madurai', 'Tirunelveli', 'Nagercoil', 'Salem', 'Erode', 'Namakkal', 'Trichy', 'Tiruchirappalli', 'Coimbatore'];

const hits = {};
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  nonKarurNames.forEach(name => {
    // Only check in visible text, not highway/road references like "Trichy Highway" or "Salem Bypass" or "Kovai Road"
    const regex = new RegExp(`\\b${name}\\b(?!\\s*(?:Highway|Bypass|Road|tollway|connecting|link))`, 'gi');
    const m = content.match(regex);
    if (m) {
      hits[`${f}: ${name}`] = m.length;
    }
  });
});

console.log('Suspicious non-Karur name hits (excluding Highway/Road):', Object.keys(hits).length);
Object.entries(hits).slice(0, 30).forEach(([k, v]) => console.log(k, v));
