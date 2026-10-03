const fs = require('fs');
const content = fs.readFileSync('servicecenter/godrej-service-center-erode.html', 'utf8');

const wmStart = content.indexOf('id="washingMachineSection"');
if (wmStart !== -1) {
  const secStart = content.lastIndexOf('<section', wmStart);
  const secEnd = content.indexOf('</section>', wmStart) + 10;
  console.log('=== GODREJ WASHING MACHINE SECTION ===');
  console.log(content.substring(secStart, secEnd));
}
