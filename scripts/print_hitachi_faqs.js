const fs = require('fs');
const c = fs.readFileSync('tv/hitachi-tv-repair-service-in-erode.html', 'utf8');
const h2 = 'Frequently Asked Questions';
const idx = c.indexOf(h2);
if (idx !== -1) {
  const secStart = c.lastIndexOf('<section', idx);
  const secEnd = c.indexOf('</section>', idx) + '</section>'.length;
  const sec = c.substring(secStart, secEnd);
  const items = [...sec.matchAll(/<button class="faq-question"[^>]*>\s*<span>([\s\S]*?)<\/span>[\s\S]*?<div class="faq-answer">([\s\S]*?)<\/div>/gi)];
  console.log(`Found ${items.length} FAQs:`);
  items.slice(0, 4).forEach((item, i) => {
    console.log(`Q${i+1}: ${item[1].trim()}`);
    console.log(`A${i+1}: ${item[2].trim().slice(0, 160)}...\n`);
  });
}
