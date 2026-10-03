const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') res = res.concat(getFiles(full));
    } else if (f.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}

const htmlFiles = getFiles('.');

function findLocalitySectionBounds(content) {
  // 1. Look for id="localitiesSection"
  const idMatch = content.match(/<section[^>]*id=["']localitiesSection["'][^>]*>[\s\S]*?<\/section>/i);
  if (idMatch) {
    return { start: idMatch.index, end: idMatch.index + idMatch[0].length };
  }
  // 2. Look for candidate headings
  const candidates = [
    'Service Center Areas in Karur',
    'Repair Near Me in Karur',
    'Service Near Me in Karur',
    'Across Karur Localities',
    'Karur Localities',
    'Areas We Cover in and Around Karur'
  ];
  for (const cand of candidates) {
    const idx = content.indexOf(cand);
    if (idx !== -1) {
      const sectionStart = content.lastIndexOf('<section', idx);
      const sectionEnd = content.indexOf('</section>', idx);
      if (sectionStart !== -1 && sectionEnd !== -1) {
        return { start: sectionStart, end: sectionEnd + 10 };
      }
    }
  }
  return null;
}

let ok = 0;
let fail = [];

htmlFiles.forEach(f => {
  if (f.endsWith('sitemap.html')) return;
  const c = fs.readFileSync(f, 'utf8');
  const b = findLocalitySectionBounds(c);
  if (!b) {
    fail.push({ file: f, reason: 'not found' });
  } else {
    const before = c.slice(0, b.start);
    const after = c.slice(b.end);
    if (!before.includes('<h1') && !before.includes('<H1')) {
      fail.push({ file: f, reason: 'before missing H1', b });
    } else if (!after.includes('</body>')) {
      fail.push({ file: f, reason: 'after missing body', b });
    } else {
      ok++;
    }
  }
});

console.log(`Passed all boundary and H1 integrity checks: ${ok} / ${htmlFiles.length - 1}`);
if (fail.length > 0) {
  console.log('Failures:', fail);
}
