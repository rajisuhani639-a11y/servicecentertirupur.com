const fs = require('fs');

function inspectFaqs(file) {
  const c = fs.readFileSync(file, 'utf8');
  const items = [...c.matchAll(/<div class="faq-item"[\s\S]*?<button[^>]*>\s*<span>([\s\S]*?)<\/span>/gi)];
  console.log(`\n=== File: ${file} (found ${items.length} FAQs) ===`);
  items.slice(0, 4).forEach((m, idx) => {
    console.log(`Q${idx+1}: ${m[1].trim()}`);
  });
}

inspectFaqs('tv/acer-tv-repair-service-in-erode.html');
inspectFaqs('tv/hitachi-tv-repair-service-in-erode.html');
inspectFaqs('fridge/godrej-refrigerator-repair-service-in-erode.html');
inspectFaqs('fridge/samsung-refrigerator-repair-service-in-erode.html');
inspectFaqs('washing-machine/bosch-washing-machine-repair-service-in-erode.html');
inspectFaqs('washing-machine/ifb-washing-machine-repair-service-in-erode.html');
inspectFaqs('ac/daikin-ac-repair-service-in-erode.html');
inspectFaqs('ac/voltas-ac-repair-service-in-erode.html');
