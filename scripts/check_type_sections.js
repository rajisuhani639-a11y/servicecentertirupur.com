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

const allFiles = getHtmlFiles('.');

const sectionsFound = [];

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check headings
  const headings = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)].map(m => m[1]);
  const typeHeadings = headings.filter(h => /types|models|appliances we service|categories/i.test(h));
  if (typeHeadings.length > 0) {
    sectionsFound.push({ file, headings: typeHeadings });
  }
});

console.log(`Files with type/model sections: ${sectionsFound.length} of ${allFiles.length}`);
sectionsFound.slice(0, 15).forEach(s => console.log(s.file, '-->', s.headings.join(' | ')));
