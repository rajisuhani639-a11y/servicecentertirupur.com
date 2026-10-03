const fs = require('fs');

function inspectExpCards(file) {
  const c = fs.readFileSync(file, 'utf8');
  const sec = c.match(/<h2>[^<]*Recent[^<]*Experiences in Erode<\/h2>[\s\S]*?<\/section>/i);
  if (!sec) {
    console.log(`\n=== File: ${file} (No experience section found) ===`);
    return;
  }
  const cards = [...sec[0].matchAll(/<div class="service-card"[^>]*>([\s\S]*?)<\/p>\s*<\/div>\s*<\/div>/gi)];
  console.log(`\n=== File: ${file} (found ${cards.length} exp cards) ===`);
  if (cards.length > 0) {
    const locMatch = cards[0][1].match(/📍([^<]*)/i);
    const ratingMatch = cards[0][1].match(/★([^<]*)/i);
    const h3Match = cards[0][1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const pMatch = cards[0][1].match(/<p[^>]*>([\s\S]*)$/i);
    console.log('Loc:', locMatch ? locMatch[1].trim() : 'NONE');
    console.log('Rating:', ratingMatch ? ratingMatch[1].trim() : 'NONE');
    console.log('H3:', h3Match ? h3Match[1].trim() : 'NONE');
    console.log('P:', pMatch ? pMatch[1].trim().slice(0, 300) + '...' : 'NONE');
  }
}

inspectExpCards('tv/acer-tv-repair-service-in-erode.html');
inspectExpCards('tv/hitachi-tv-repair-service-in-erode.html');
inspectExpCards('fridge/godrej-refrigerator-repair-service-in-erode.html');
inspectExpCards('fridge/samsung-refrigerator-repair-service-in-erode.html');
inspectExpCards('washing-machine/bosch-washing-machine-repair-service-in-erode.html');
inspectExpCards('washing-machine/ifb-washing-machine-repair-service-in-erode.html');
inspectExpCards('ac/daikin-ac-repair-service-in-erode.html');
inspectExpCards('ac/voltas-ac-repair-service-in-erode.html');
