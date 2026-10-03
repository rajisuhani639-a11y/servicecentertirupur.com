const fs = require('fs');

const html = fs.readFileSync('washing-machine/washing-machine-repair-service-in-coimbatore.html', 'utf8');

const idx = html.indexOf('Frequently Asked Questions');
if (idx !== -1) {
  console.log('Found FAQ heading. Context:');
  console.log(html.slice(idx - 250, idx + 400));
} else {
  console.log('FAQ not found by heading. Checking id="faq":');
  const m = html.match(/id=["']faq[^"']*["']/i);
  console.log('Match:', m);
}
