const fs = require('fs');
const path = require('path');

const scDir = 'servicecenter';
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(scDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const sec3Match = content.match(/<h2>[^<]*Home Appliances We Service<\/h2>[\s\S]*?<\/section>/i);
  if (!sec3Match) return;

  const cardRegex = /<div class="service-card"[^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/div>/gi;
  let cardMatch;
  const pageMap = new Map();

  while ((cardMatch = cardRegex.exec(sec3Match[0])) !== null) {
    const fullApp = cardMatch[1].replace(/<[^>]+>/g, '').trim();
    const pText = cardMatch[2].replace(/<[^>]+>/g, '').trim();

    if (pageMap.has(pText)) {
      console.log(`Duplicate on ${file}:`);
      console.log(`  App 1: ${pageMap.get(pText)}`);
      console.log(`  App 2: ${fullApp}`);
      console.log(`  Text: "${pText}"\n`);
    } else {
      pageMap.set(pText, fullApp);
    }
  }
});
