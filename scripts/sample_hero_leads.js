const fs = require('fs');

['tv', 'fridge', 'ac', 'washing-machine'].forEach(cat => {
  console.log(`\n=== SAMPLE LEADS FOR ${cat.toUpperCase()} ===`);
  const files = fs.readdirSync(cat).filter(f => f.endsWith('.html')).slice(0, 5);
  files.forEach(f => {
    const c = fs.readFileSync(`${cat}/${f}`, 'utf8');
    const m = c.match(/<p class="hero-(?:lead|copy)">([\s\S]*?)<\/p>/i);
    console.log(`${f}:\n  "${m ? m[1].trim() : 'NONE'}"\n`);
  });
});
