const fs = require('fs');
const faqs = JSON.parse(fs.readFileSync('scripts/erode_master_faqs.json', 'utf8'));

let replacementsCount = 0;

function cleanText(str) {
  if (!str) return str;
  let s = str;
  
  const rules = [
    { from: /\brobust\b/gi, to: 'durable' },
    { from: /\butilize\b/gi, to: 'use' },
    { from: /\butilizes\b/gi, to: 'uses' },
    { from: /\butilized\b/gi, to: 'used' },
    { from: /\butilizing\b/gi, to: 'using' },
    { from: /\bcomprehensive\b/gi, to: 'complete' },
    { from: /\bpromptly\b/gi, to: 'quickly' },
    { from: /\bprompt\b/gi, to: 'quick' },
    { from: /\bseamlessly\b/gi, to: 'smoothly' },
    { from: /\bseamless\b/gi, to: 'smooth' },
    { from: /\bfacilitate\b/gi, to: 'provide' },
    { from: /\bmeticulous\b/gi, to: 'careful' },
    { from: /\bsophisticated\b/gi, to: 'advanced' },
    { from: /\btailored\b/gi, to: 'customized' },
    { from: /\bunparalleled\b/gi, to: 'reliable' },
    { from: /\bproactive\b/gi, to: 'timely' },
    { from: /\bstreamlined\b/gi, to: 'simple' },
    { from: /\bspecialized assistance\b/gi, to: 'expert service' },
    { from: /\bexceptional service\b/gi, to: 'quality service' },
    { from: /\befficient resolution\b/gi, to: 'quick repair' }
  ];

  rules.forEach(r => {
    const matches = s.match(r.from);
    if (matches) {
      replacementsCount += matches.length;
      s = s.replace(r.from, r.to);
    }
  });

  return s;
}

Object.keys(faqs).forEach(file => {
  const f = faqs[file];
  f.groups.forEach(g => {
    g.title = cleanText(g.title);
    g.items.forEach(it => {
      it.q = cleanText(it.q);
      it.a = cleanText(it.a);
    });
  });
});

fs.writeFileSync('scripts/erode_master_faqs_v2.json', JSON.stringify(faqs, null, 2), 'utf8');
console.log(`Cleaned heavy words in FAQs. Total replacements: ${replacementsCount}`);
