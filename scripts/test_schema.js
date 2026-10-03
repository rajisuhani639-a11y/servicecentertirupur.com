const fs = require('fs');

function testSchema(file) {
  const c = fs.readFileSync(file, 'utf8');
  const scripts = c.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) || [];
  console.log('File:', file, 'JSON-LD scripts count:', scripts.length);
  scripts.forEach((s, idx) => {
    if (s.includes('FAQPage')) {
      console.log(`Script #${idx+1} has FAQPage!`);
    }
  });
}

testSchema('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
testSchema('servicecenter/lloyd-service-center-kanyakumari.html');
