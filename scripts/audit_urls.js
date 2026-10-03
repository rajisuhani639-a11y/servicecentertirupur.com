const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html')) allFiles.push('sitemap.html');

let canonicalErrors = 0;
let ogUrlErrors = 0;
let schemaUrlErrors = 0;

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // 1. Canonical check
  const canonMatch = content.match(/<link rel="canonical"[^>]*href="([^"]+)"/i);
  if (!canonMatch || !canonMatch[1].startsWith('https://servicecentercoimbatore.com/')) {
    console.log(`Bad canonical in ${file}:`, canonMatch ? canonMatch[1] : 'NONE');
    canonicalErrors++;
  } else {
    // Check if canonical URL matches file
    let pathPart = canonMatch[1].replace('https://servicecentercoimbatore.com/', '');
    if (!pathPart) pathPart = 'index.html';
    if (pathPart !== file.replace(/\\/g, '/')) {
      console.log(`Canonical mismatch in ${file}: canonical=${canonMatch[1]} vs file=${file}`);
      canonicalErrors++;
    }
  }

  // 2. OG URL check
  const ogMatch = content.match(/<meta property="og:url"[^>]*content="([^"]+)"/i);
  if (ogMatch) {
    if (!ogMatch[1].startsWith('https://servicecentercoimbatore.com/')) {
      console.log(`Bad og:url in ${file}:`, ogMatch[1]);
      ogUrlErrors++;
    }
  }

  // 3. Schema URL check
  const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let sm;
  while ((sm = scriptRegex.exec(content)) !== null) {
    if (sm[1].includes('http://') || sm[1].includes('localhost') || sm[1].includes('127.0.0.1') || sm[1].includes('kanyakumari') || sm[1].includes('karur')) {
      console.log(`Old domain or protocol in schema in ${file}`);
      schemaUrlErrors++;
    }
  }
});

console.log('==============================================');
console.log(`Canonical errors: ${canonicalErrors}`);
console.log(`OG URL errors: ${ogUrlErrors}`);
console.log(`Schema URL errors: ${schemaUrlErrors}`);
console.log('==============================================');
