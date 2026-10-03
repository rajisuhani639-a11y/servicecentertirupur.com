const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtml = walk(process.cwd());

const ansMap = {};
for (const file of allHtml) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/<div class="faq-answer">\s*([\s\S]*?)\s*<\/div>/gi)];
  for (const m of matches) {
    // Strip brand name words to see if the structure is duplicated
    const ans = m[1].replace(/<[^>]+>/g, '').trim();
    if (!ansMap[ans]) ansMap[ans] = [];
    ansMap[ans].push(path.basename(file));
  }
}

console.log('Duplicate FAQ answers:');
for (const [ans, files] of Object.entries(ansMap)) {
  if (files.length > 1) {
    console.log(`- Count ${files.length} in [${files.join(', ')}]:\n  "${ans.substring(0, 100)}..."\n`);
  }
}
