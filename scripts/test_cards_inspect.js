const fs = require('fs');
const c = fs.readFileSync('ac/daikin-ac-repair-service-in-coimbatore.html', 'utf8');

// Find customer experience section specifically
const expMatch = c.match(/<!-- Customer Service Experiences[\s\S]*?<\/section>/i);
if (expMatch) {
  console.log('Found Customer Service Experiences section!');
  const cards = [...expMatch[0].matchAll(/<div class="service-card"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi)];
  console.log('Cards in this section:', cards.length);
  cards.forEach((card, i) => {
    console.log(`  Card ${i+1}: ${card[1]}`);
  });
} else {
  console.log('Experience section comment not found, searching other patterns');
}
