const fs = require('fs');

const content = fs.readFileSync('servicecenter/lloyd-service-center-kanyakumari.html', 'utf8');

console.log('--- LLOYD H2 HEADINGS ---');
const h2Matches = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log(h2Matches);

console.log('\n--- LLOYD APPLIANCE CARDS ---');
const appSectionMatch = content.match(/<!-- Appliances We Service -->[\s\S]*?<\/section>/i);
if (appSectionMatch) {
  const cards = [...appSectionMatch[0].matchAll(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/gi)];
  cards.forEach(c => console.log(`Card: "${c[1].trim()}"\nText: "${c[2].trim()}"\n`));
}

console.log('--- LLOYD CUSTOMER EXPERIENCES ---');
const expMatches = [...content.matchAll(/<span style="font-size: 0\.72rem;[^>]*>([^<]+)<\/span>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>/gi)];
expMatches.forEach(e => console.log(`Badge: [${e[1]}] Heading: ${e[2]}`));

console.log('\n--- LLOYD FAQS ---');
const faqMatches = [...content.matchAll(/<button class="faq-question"[^>]*>\s*<span>([^<]+)<\/span>/gi)];
faqMatches.forEach((f, i) => console.log(`${i+1}. ${f[1]}`));
