const fs = require('fs');
['ac/hitachi-ac-repair-service-in-madurai.html',
 'washing-machine/samsung-washing-machine-repair-service-in-madurai.html',
 'fridge/samsung-refrigerator-repair-service-in-madurai.html',
 'tv/sony-tv-repair-service-in-madurai.html',
 'servicecenter/panasonic-service-center-madurai.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/(<section class="section section-bg-muted" id="faqSection">[\s\S]*?<\/section>)/i);
  console.log(f, m ? 'MATCHED length ' + m[0].length : 'NOT MATCHED');
});
