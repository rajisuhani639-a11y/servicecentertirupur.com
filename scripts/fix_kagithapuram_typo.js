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
let totalReplacements = 0;
let filesModified = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('Kagithapuramam') || content.includes('kagithapuramam')) {
    const newContent = content
      .replace(/Kagithapuramam/g, 'Kagithapuram')
      .replace(/kagithapuramam/g, 'kagithapuram');
    fs.writeFileSync(f, newContent, 'utf8');
    filesModified++;
    totalReplacements += (content.match(/kagithapuramam/gi) || []).length;
  }
});

console.log(`Fixed Kagithapuramam typo in ${filesModified} files (${totalReplacements} occurrences).`);
