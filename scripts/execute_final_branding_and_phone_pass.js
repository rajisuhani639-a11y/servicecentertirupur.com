// scripts/execute_final_branding_and_phone_pass.js
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const NEW_BRAND_ICON_SVG = `<div class="brand-icon">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Modern Pitched Roof -->
            <path d="M4 14.5L16 4.5L28 14.5" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Sensor Pillar -->
            <path d="M22 9.8V7.5H24.5V11.8" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- House Foundation & Appliance Frame -->
            <path d="M7 13.8V25C7 26.1 7.9 27 9 27H23C24.1 27 25 26.1 25 25V13.8" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
            <!-- Appliance Drum Circle -->
            <circle cx="16" cy="19.5" r="4.8" stroke="#38bdf8" stroke-width="1.4"/>
            <!-- Integrated Service Wrench -->
            <g transform="rotate(-38 16 19.5)">
              <rect x="14.8" y="13.2" width="2.4" height="11.5" rx="1.2" fill="#fbbf24"/>
              <path d="M13.6 14.2C12.4 12.6 12.7 10.3 14.2 9.1C16 7.6 18.6 7.8 20 9.4C21 10.7 21 12.3 20 13.6L18.4 12.6L17.1 13.6L16.1 12.6Z" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="2.5" fill="#fbbf24"/>
              <circle cx="16" cy="23.8" r="1.1" fill="#07192f"/>
            </g>
            <!-- Spark -->
            <circle cx="16" cy="3.5" r="1.2" fill="#fbbf24"/>
          </svg>
        </div>`;

// 1. UPDATE scripts/execute_full_tiruppur_localization.js
let execFile = fs.readFileSync(path.join(__dirname, 'execute_full_tiruppur_localization.js'), 'utf8');

// Replace BRAND_ICON_SVG definition
execFile = execFile.replace(
  /const BRAND_ICON_SVG = `<div class="brand-icon">[\s\S]*?<\/div>`;/i,
  `const BRAND_ICON_SVG = \`${NEW_BRAND_ICON_SVG}\`;`
);

// Update map section phone and whatsapp
execFile = execFile.replace(/tel:\+919211512088/g, 'tel:+918882055269');
execFile = execFile.replace(/Call: \+91 92115 12088/g, 'Call: +91 88820 55269');
execFile = execFile.replace(/wa\.me\/919211512088/g, 'wa.me/918882055269');
execFile = execFile.replace(/"telephone": "\+919211512088"/g, '"telephone": "+918882055269"');

// Fix title/meta replacement to avoid creating >>
const oldMetaClean = `  // 3. Clean title & meta description
  content = content.replace(/(<meta[^>]*content="[^"]*")>>+/gi, '$1>');
  content = content.replace(/<title>([\\s\\S]*?)<\\/title>/i, (m, t) => {
    let cleanT = t.replace(/Madurai/gi, 'Tiruppur').replace(/>+/g, '').trim();
    return \`<title>\${cleanT}</title>\`;
  });
  content = content.replace(/<meta name="description" content="([^"]*)"/i, (m, d) => {
    let cleanD = d.replace(/Madurai/gi, 'Tiruppur').replace(/>+/g, '').trim();
    return \`<meta name="description" content="\${cleanD}">\`;
  });
  content = content.replace(/<meta property="og:title" content="([^"]*)"/i, (m, t) => {
    let cleanT = t.replace(/Madurai/gi, 'Tiruppur').replace(/>+/g, '').trim();
    return \`<meta property="og:title" content="\${cleanT}">\`;
  });
  content = content.replace(/<meta property="og:description" content="([^"]*)"/i, (m, d) => {
    let cleanD = d.replace(/Madurai/gi, 'Tiruppur').replace(/>+/g, '').trim();
    return \`<meta property="og:description" content="\${cleanD}">\`;
  });`;

const newMetaClean = `  // 3. Clean title & meta description without creating stray characters
  content = content.replace(/<title>([\\s\\S]*?)<\\/title>[^<]*?(?=<|$)/i, (m, t) => {
    let cleanT = t.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return \`<title>\${cleanT}</title>\`;
  });
  content = content.replace(/<meta name="description" content="([^"]*)"[^>]*>/i, (m, d) => {
    let cleanD = d.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return \`<meta name="description" content="\${cleanD}">\`;
  });
  content = content.replace(/<meta property="og:title" content="([^"]*)"[^>]*>/i, (m, t) => {
    let cleanT = t.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return \`<meta property="og:title" content="\${cleanT}">\`;
  });
  content = content.replace(/<meta property="og:description" content="([^"]*)"[^>]*>/i, (m, d) => {
    let cleanD = d.replace(/Madurai/gi, 'Tirupur').replace(/Tiruppur/gi, 'Tirupur').replace(/>+/g, '').trim();
    return \`<meta property="og:description" content="\${cleanD}">\`;
  });
  content = content.replace(/(<meta[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<link[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<title[\\s\\S]*?<\\/title>)>+/gi, '$1');`;

if (execFile.includes(oldMetaClean)) {
  execFile = execFile.replace(oldMetaClean, newMetaClean);
}

// Add universal phone number replacement in transformHtmlPage before return
const phoneReplBlock = `  // Universal Phone Number Migration to 8882055269
  content = content.replace(/\\+91\\s*92115\\s*12088/g, '+91 88820 55269');
  content = content.replace(/\\+919211512088/g, '+918882055269');
  content = content.replace(/92115\\s*12088/g, '88820 55269');
  content = content.replace(/9211512088/g, '8882055269');
  content = content.replace(/\\+91\\s*94420\\s*54321/g, '+91 88820 55269');
  content = content.replace(/\\+919442054321/g, '+918882055269');
  content = content.replace(/94420\\s*54321/g, '88820 55269');
  content = content.replace(/9442054321/g, '8882055269');
  
  // Stray header characters cleanup
  content = content.replace(/(<meta[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<link[^>]*?>)>+/gi, '$1');
  content = content.replace(/(<title[\\s\\S]*?<\\/title>)>+/gi, '$1');

  return content;`;

execFile = execFile.replace(/return content;\s*}/, `${phoneReplBlock}\n}`);

fs.writeFileSync(path.join(__dirname, 'execute_full_tiruppur_localization.js'), execFile, 'utf8');
console.log('✓ Updated execute_full_tiruppur_localization.js');

// 2. UPDATE scripts/build_tiruppur_blogs.js
let blogFile = fs.readFileSync(path.join(__dirname, 'build_tiruppur_blogs.js'), 'utf8');
blogFile = blogFile.replace(/tel:\+919211512088/g, 'tel:+918882055269');
blogFile = blogFile.replace(/Call: \+91 92115 12088/g, 'Call: +91 88820 55269');
blogFile = blogFile.replace(/wa\.me\/919211512088/g, 'wa.me/918882055269');
blogFile = blogFile.replace(/\+91\s*92115\s*12088/g, '+91 88820 55269');
blogFile = blogFile.replace(/\+919211512088/g, '+918882055269');
blogFile = blogFile.replace(/9211512088/g, '8882055269');
blogFile = blogFile.replace(
  /<div class="brand-icon">[\s\S]*?<\/div>/i,
  NEW_BRAND_ICON_SVG
);
fs.writeFileSync(path.join(__dirname, 'build_tiruppur_blogs.js'), blogFile, 'utf8');
console.log('✓ Updated build_tiruppur_blogs.js');

// 3. UPDATE scripts/build_tiruppur_sitemaps.js
let sitemapFile = fs.readFileSync(path.join(__dirname, 'build_tiruppur_sitemaps.js'), 'utf8');
sitemapFile = sitemapFile.replace(/tel:\+919211512088/g, 'tel:+918882055269');
sitemapFile = sitemapFile.replace(/Call: \+91 92115 12088/g, 'Call: +91 88820 55269');
sitemapFile = sitemapFile.replace(/"telephone": "\+919211512088"/g, '"telephone": "+918882055269"');
sitemapFile = sitemapFile.replace(
  /const BRAND_ICON_SVG = `<div class="brand-icon">[\s\S]*?<\/div>`;/i,
  `const BRAND_ICON_SVG = \`${NEW_BRAND_ICON_SVG}\`;`
);
fs.writeFileSync(path.join(__dirname, 'build_tiruppur_sitemaps.js'), sitemapFile, 'utf8');
console.log('✓ Updated build_tiruppur_sitemaps.js');
