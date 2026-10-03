// scripts/cleanup_faq_references.js
// Cleans up concatenated reference tags into clean, unique reference IDs

const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('./scripts/detailed_page_info.json', 'utf8'));

let refIdCounter = 1001;
const globalAnswersCleaned = new Set();

let totalAnswersCleaned = 0;

pages.forEach(p => {
  let html = fs.readFileSync(p.file, 'utf8');

  // Replace concatenated [Reference Ref-CBE-...] in visible HTML and in schema
  html = html.replace(/(\s*\[Reference Ref-CBE-\d+\])+/g, (match) => {
    totalAnswersCleaned++;
    return ` [Ref: CBE-${refIdCounter++}]`;
  });

  fs.writeFileSync(p.file, html, 'utf8');
});

console.log(`Cleaned up references across pages. Total replaced: ${totalAnswersCleaned}`);
