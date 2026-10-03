const fs = require('fs');

function inspectDir(dir, pattern) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  const map = {};
  for (const f of files) {
    const m = f.match(pattern);
    if (!m) continue;
    const slug = m[1];
    const content = fs.readFileSync(dir + '/' + f, 'utf8');
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    map[slug] = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';
  }
  return map;
}

const ac = inspectDir('ac', /^([a-z0-9-]+)-ac-repair-service-in-karur\.html$/);
const fridge = inspectDir('fridge', /^([a-z0-9-]+)-refrigerator-repair-service-in-karur\.html$/);
const wm = inspectDir('washing-machine', /^([a-z0-9-]+)-washing-machine-repair-service-in-karur\.html$/);
const tv = inspectDir('tv', /^([a-z0-9-]+)-tv-repair-service-in-karur\.html$/);

const allSlugs = Array.from(new Set([
  ...Object.keys(ac),
  ...Object.keys(fridge),
  ...Object.keys(wm),
  ...Object.keys(tv)
])).sort();

console.log('Total unique brands found:', allSlugs.length);
allSlugs.forEach((s, idx) => {
  const brandName = (ac[s] || fridge[s] || wm[s] || tv[s] || '')
    .replace(/ (AC|Refrigerator|Washing Machine|TV) Repair Service in Karur/i, '');
  console.log(`${idx + 1}. [${s}] => "${brandName}" (AC: ${!!ac[s]}, FR: ${!!fridge[s]}, WM: ${!!wm[s]}, TV: ${!!tv[s]})`);
});
