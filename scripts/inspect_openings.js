const fs = require('fs');

function inspectOpening(file) {
  console.log('\n=======================================');
  console.log('FILE:', file);
  const content = fs.readFileSync(file, 'utf8');
  
  // Find hero section
  const heroMatch = content.match(/<section class="hero-section[^"]*"[\s\S]*?<\/section>/i);
  if (heroMatch) {
    const text = heroMatch[0].replace(/<svg[\s\S]*?<\/svg>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('Hero text:');
    console.log(text.substring(0, 450));
  } else {
    console.log('No hero-section found');
  }

  // Find next section (first content section after hero)
  const afterHero = content.split(/<\/section>/i)[1];
  if (afterHero) {
    const nextSecText = afterHero.replace(/<svg[\s\S]*?<\/svg>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('Next section text:');
    console.log(nextSecText.substring(0, 300));
  }
}

inspectOpening('washing-machine/godrej-washing-machine-repair-service-in-erode.html');
inspectOpening('fridge/samsung-refrigerator-repair-service-in-erode.html');
inspectOpening('ac/daikin-ac-repair-service-in-erode.html');
inspectOpening('tv/sony-tv-repair-service-in-erode.html');
inspectOpening('servicecenter/akai-service-center-erode.html');
inspectOpening('servicecenter/godrej-service-center-erode.html');
