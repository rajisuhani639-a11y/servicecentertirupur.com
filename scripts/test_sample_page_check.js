const fs = require('fs');
const c = fs.readFileSync('servicecenter/liebherr-service-center-coimbatore.html', 'utf8');
const expMatch = c.match(/<!-- Customer Service Experiences[\s\S]*?<\/section>/i);
if (expMatch) {
  const cards = [...expMatch[0].matchAll(/<div class="service-card"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi)];
  cards.forEach((card, i) => {
    console.log(`Card ${i+1}: ${card[1]}`);
    console.log(`Body: ${card[2].substring(0, 160)}...\n`);
  });
}
