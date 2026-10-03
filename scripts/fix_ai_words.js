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
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  if (content.includes('tailored to')) {
    content = content.replace(/tailored to/g, 'specifically for');
    changed = true;
    count++;
  }
  if (content.includes('Tailored inspection and repair solutions')) {
    content = content.replace(/Tailored inspection and repair solutions/g, 'Dedicated inspection and repair solutions');
    changed = true;
    count++;
  }
  if (content.includes('tailored')) {
    content = content.replace(/tailored/gi, 'custom');
    changed = true;
    count++;
  }
  if (content.includes('cutting-edge')) {
    content = content.replace(/cutting-edge/gi, 'modern');
    changed = true;
    count++;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
  }
});

console.log(`AI buzzwords cleaned up in ${count} places.`);
