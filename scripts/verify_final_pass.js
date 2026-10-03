const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = dir + '/' + file;
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('.');
console.log(`Starting comprehensive audit of ${files.length} HTML files...`);

const expectedAddress = '171, Jawahar Bazaar Rd, Madavilagam, Karur, Tamil Nadu 639001';
const expectedTiming = '6:00 AM – 11:00 PM';
const mapQuery = 'maps.google.com/maps?q=171%2C%20Jawahar%20Bazaar%20Rd%2C%20Madavilagam%2C%20Karur%2C%20Tamil%20Nadu%20639001';

let filesWithExactAddress = 0;
let filesWithMap = 0;
let filesWithTiming = 0;
let filesWithValidSchema = 0;
let filesWithFavicon = 0;

let oldAddressMatches = [];
let oldTimingMatches = [];
let dindigulMatches = [];
let schemaIssues = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');

  // 1. Address check
  if (content.includes(expectedAddress)) {
    filesWithExactAddress++;
  } else {
    oldAddressMatches.push(`Missing exact address in: ${f}`);
  }

  // 2. Map check
  if (content.includes(mapQuery) && content.includes('<iframe') && content.includes('id="service-center-location"')) {
    filesWithMap++;
  } else {
    console.log(`Missing or invalid map section in: ${f}`);
  }

  // 3. Timing check
  if (content.includes(expectedTiming)) {
    filesWithTiming++;
  } else {
    oldTimingMatches.push(`Missing exact timing in: ${f}`);
  }

  // 4. Old addresses or timings
  if (content.includes('Main Road, Kagithapuram & Pasupathipalayam')) {
    oldAddressMatches.push(`Old address found in: ${f}`);
  }
  if (content.includes('8:00 AM - 8:30 PM') || content.includes('08:00') || content.includes('20:30')) {
    oldTimingMatches.push(`Old timing found in: ${f}`);
  }
  if (/dindigul/i.test(content)) {
    dindigulMatches.push(`Dindigul reference in: ${f}`);
  }

  // 5. Favicon in head
  if (content.includes('rel="icon"') && content.includes('/favicon.svg') && content.includes('/favicon.ico')) {
    filesWithFavicon++;
  }

  // 6. Schema JSON-LD check
  const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  let hasSchema = false;
  while ((match = schemaRegex.exec(content)) !== null) {
    hasSchema = true;
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed.address) {
        if (parsed.address.streetAddress !== '171, Jawahar Bazaar Rd, Madavilagam' ||
            parsed.address.addressLocality !== 'Karur' ||
            parsed.address.postalCode !== '639001') {
          schemaIssues.push(`Schema address mismatch in ${f}: ${JSON.stringify(parsed.address)}`);
        }
      }
      if (parsed.openingHoursSpecification) {
        const spec = parsed.openingHoursSpecification[0];
        if (spec && (spec.opens !== '06:00' || spec.closes !== '23:00')) {
          schemaIssues.push(`Schema timing mismatch in ${f}: ${JSON.stringify(spec)}`);
        }
      }
    } catch(err) {
      schemaIssues.push(`Invalid JSON in ${f}: ${err.message}`);
    }
  }
  if (hasSchema) filesWithValidSchema++;
});

console.log('\n==================================================');
console.log('AUDIT RESULTS:');
console.log(`Total HTML files checked: ${files.length}`);
console.log(`Files with exact address: ${filesWithExactAddress} / ${files.length}`);
console.log(`Files with Google Map embed: ${filesWithMap} / ${files.length}`);
console.log(`Files with service timing (6:00 AM – 11:00 PM): ${filesWithTiming} / ${files.length}`);
console.log(`Files with valid Schema: ${filesWithValidSchema} / ${files.length}`);
console.log(`Files with complete Favicon head links: ${filesWithFavicon} / ${files.length}`);
console.log('==================================================');
console.log(`Old Address issues: ${oldAddressMatches.length}`);
if (oldAddressMatches.length > 0) console.log(oldAddressMatches.slice(0, 5));
console.log(`Old Timing issues: ${oldTimingMatches.length}`);
if (oldTimingMatches.length > 0) console.log(oldTimingMatches.slice(0, 5));
console.log(`Dindigul occurrences: ${dindigulMatches.length}`);
if (dindigulMatches.length > 0) console.log(dindigulMatches.slice(0, 5));
console.log(`Schema issues: ${schemaIssues.length}`);
if (schemaIssues.length > 0) console.log(schemaIssues.slice(0, 5));
