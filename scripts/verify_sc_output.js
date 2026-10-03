const fs = require('fs');

function inspectSCFile(file) {
  console.log('\n=============================================');
  console.log('FILE:', file);
  const content = fs.readFileSync(file, 'utf8');

  // Hero lead
  const heroMatch = content.match(/<p class="hero-(?:lead|copy)">([\s\S]*?)<\/p>/i);
  console.log('\n--- HERO OPENING ---');
  console.log(heroMatch ? heroMatch[1].trim() : 'NONE');

  // Section 3 cards
  console.log('\n--- SECTION 3 APPLIANCE CARDS ---');
  const sec3Match = content.match(/<h2>[^<]*Home Appliances We Service<\/h2>[\s\S]*?<\/section>/i);
  if (sec3Match) {
    const cards = sec3Match[0].match(/<div class="service-card"[\s\S]*?<\/div>/gi);
    if (cards) {
      cards.forEach((c, i) => {
        const title = c.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)[1].replace(/<[^>]+>/g, '').trim();
        const p = c.match(/<p[^>]*>([\s\S]*?)<\/p>/i)[1].replace(/<[^>]+>/g, '').trim();
        console.log(`Card ${i+1}: ${title}`);
        console.log(`  Visible text: "${p}"`);
      });
    }
  }

  // Check section intros
  console.log('\n--- DEDICATED APPLIANCE SECTIONS INTROS ---');
  const secMatches = content.match(/<section[^>]*id="([a-zA-Z0-9]+Section)"[\s\S]*?<div style="max-width: 900px;[^"]*"[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi);
  if (secMatches) {
    secMatches.forEach(sm => {
      const id = sm.match(/id="([a-zA-Z0-9]+Section)"/i)[1];
      const p = sm.match(/<p[^>]*>([\s\S]*?)<\/p>/i)[1].replace(/<[^>]+>/g, '').trim();
      console.log(`Section id="${id}":`);
      console.log(`  Visible intro: "${p.substring(0, 160)}..."`);
    });
  }
}

inspectSCFile('servicecenter/godrej-service-center-erode.html');
inspectSCFile('servicecenter/akai-service-center-erode.html');
inspectSCFile('servicecenter/bosch-service-center-erode.html');
