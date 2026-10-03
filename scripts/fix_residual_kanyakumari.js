const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'scripts') {
        res = res.concat(getHtmlFiles(full));
      }
    } else if (f.endsWith('.html') || f.endsWith('.xml') || f.endsWith('.txt') || f.endsWith('.manifest') || f.endsWith('.webmanifest')) {
      res.push(full);
    }
  });
  return res;
}

const files = getHtmlFiles('.');
const matches = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const lines = c.split('\n');
  lines.forEach((line, idx) => {
    if (/kanyakumari|kanniyakumari/i.test(line)) {
      matches.push({ file: f, line: idx + 1, text: line.trim() });
    }
  });
});

console.log('Total residual matches found:', matches.length);
matches.slice(0, 10).forEach(m => console.log(`${m.file}:${m.line}: ${m.text}`));

// Apply fix to all files
let fixedFiles = 0;
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let changed = false;
  if (/kanyakumari|kanniyakumari/i.test(c)) {
    c = c.replace(/3GQX%2BRPM%2C%20Cape%20Rd%2C%20Kanniyakumari%2C%20Tamil%20Nadu%20629702/gi, 'Cross%20Cut%20Road%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012');
    c = c.replace(/Kanniyakumari/gi, 'Coimbatore');
    c = c.replace(/kanniyakumari/gi, 'coimbatore');
    c = c.replace(/Kanyakumari/gi, 'Coimbatore');
    c = c.replace(/kanyakumari/gi, 'coimbatore');
    fs.writeFileSync(f, c, 'utf8');
    fixedFiles++;
  }
});
console.log(`Fixed residual matches in ${fixedFiles} files.`);
