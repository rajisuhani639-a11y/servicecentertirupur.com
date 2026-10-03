const fs = require('fs');
['ac/hitachi-ac-repair-service-in-madurai.html',
 'washing-machine/samsung-washing-machine-repair-service-in-madurai.html',
 'fridge/samsung-refrigerator-repair-service-in-madurai.html',
 'tv/sony-tv-repair-service-in-madurai.html',
 'servicecenter/panasonic-service-center-madurai.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const mCallout = c.match(/(<!-- 2\. Tamil Callout Box -->[\s\S]*?<\/section>)/i);
  const mAboutText = c.match(/(<div class="about-text">[\s\S]*?<\/div>)/i);
  console.log(f);
  console.log('  Callout:', mCallout ? 'MATCHED length ' + mCallout[0].length : 'NOT MATCHED');
  console.log('  AboutText:', mAboutText ? 'MATCHED length ' + mAboutText[0].length : 'NOT MATCHED');
});
