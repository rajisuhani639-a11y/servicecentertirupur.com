const fs = require('fs');

const c = fs.readFileSync('tv/hitachi-tv-repair-service-in-erode.html', 'utf8');

// Schema FAQ
const schemaMatch = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
console.log(`Found ${schemaMatch.length} schema scripts.`);
schemaMatch.forEach((s, idx) => {
  if (s.includes('"FAQPage"')) {
    console.log(`Schema FAQ found at index ${idx}!`);
  }
});

// HTML FAQ
const faqSec = c.match(/<section[^>]*id="faq"[^>]*>([\s\S]*?)<\/section>/i) || c.match(/<section[^>]*>(?:[\s\S]*?)Frequently Asked Questions(?:[\s\S]*?)<\/section>/i);
if (faqSec) {
  console.log('HTML FAQ section found, length:', faqSec[0].length);
  const items = [...faqSec[0].matchAll(/<div class="faq-item"[\s\S]*?<\/div>\s*<\/div>/gi)];
  console.log(`Found ${items.length} HTML faq-item blocks.`);
}
