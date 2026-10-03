const fs = require('fs');

function inspectHeadings(file) {
  console.log('\n=============================================');
  console.log('File:', file);
  const content = fs.readFileSync(file, 'utf8');
  const headings = content.match(/<(?:h1|h2|h3|section)[^>]*>/gi);
  if (headings) {
    headings.slice(0, 30).forEach(h => console.log('  ', h));
  }
}

inspectHeadings('washing-machine/godrej-washing-machine-repair-service-in-erode.html');
inspectHeadings('servicecenter/godrej-service-center-erode.html');
inspectHeadings('ac/daikin-ac-repair-service-in-erode.html');
inspectHeadings('tv/sony-tv-repair-service-in-erode.html');
