const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

const heavyWords = [
  'prompt assistance', 'promptly', 'prompt', 'expeditious', 'expedite',
  'comprehensive', 'facilitate', 'facilitates', 'utilize', 'utilizes', 'utilizing', 'utilization',
  'endeavour', 'endeavours', 'commence', 'commences', 'commencing',
  'rectification', 'diagnostic assessment', 'technical intervention',
  'seamless', 'tailored', 'bespoke', 'robust', 'leveraging', 'optimal', 'optimize', 'optimization',
  'proactive', 'streamlined', 'meticulous', 'holistic', 'enhanced', 'exceptional',
  'unparalleled', 'professional intervention', 'customer-centric', 'end-to-end',
  'state-of-the-art', 'cutting-edge', 'sophisticated', 'expertise-driven',
  'service desk', 'residential premises'
];

const counts = {};
heavyWords.forEach(w => counts[w] = 0);

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  heavyWords.forEach(w => {
    const reg = new RegExp(`\\b${w}\\b`, 'gi');
    const matches = content.match(reg);
    if (matches) {
      counts[w] += matches.length;
    }
  });
});

console.log('Heavy words scan results:');
for (let w in counts) {
  if (counts[w] > 0) {
    console.log(`- "${w}": ${counts[w]} occurrences`);
  }
}
