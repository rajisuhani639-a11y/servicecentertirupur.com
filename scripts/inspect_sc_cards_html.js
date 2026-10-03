const fs = require('fs');

const content = fs.readFileSync('servicecenter/godrej-service-center-erode.html', 'utf8');

// Print Section 3: Godrej Home Appliances We Service
const sec3Start = content.indexOf('Godrej Home Appliances We Service');
if (sec3Start !== -1) {
  const secStart = content.lastIndexOf('<section', sec3Start);
  const secEnd = content.indexOf('</section>', sec3Start) + 10;
  console.log('=== SECTION 3: HOME APPLIANCES WE SERVICE ===');
  console.log(content.substring(secStart, secEnd));
}

// Print Section 4: AC section
const sec4Start = content.indexOf('id="acSection"');
if (sec4Start !== -1) {
  const secStart = content.lastIndexOf('<section', sec4Start);
  const secEnd = content.indexOf('</section>', sec4Start) + 10;
  console.log('\n=== SECTION 4: AC SECTION (FIRST 1200 CHARS) ===');
  console.log(content.substring(secStart, secStart + 1200));
}
