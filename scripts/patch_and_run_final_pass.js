// scripts/patch_and_run_final_pass.js
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. UPDATE scripts/execute_full_tiruppur_localization.js
let execScript = fs.readFileSync(path.join(__dirname, 'execute_full_tiruppur_localization.js'), 'utf8');

// Update map zoom to 16
execScript = execScript.replace(/maps\?q=11\.099761%2C77\.347941&amp;t=&amp;z=13/g, 'maps?q=11.099761%2C77.347941&amp;t=&amp;z=16');

// Replace hero-appliance-service-tiruppur with hero-appliance-service-tirupur
execScript = execScript.replace(/hero-appliance-service-tiruppur/g, 'hero-appliance-service-tirupur');
execScript = execScript.replace(/hero-appliance-service-madurai/g, 'hero-appliance-service-tirupur');

// In transformHtmlPage: ensure -tiruppur.html is globally replaced with -tirupur.html
const oldLinkRepl = `  content = content.replace(/-madurai\\.html/g, '-tirupur.html');
  content = content.replace(/-in-madurai\\.html/g, '-in-tirupur.html');`;

const newLinkRepl = `  content = content.replace(/-madurai\\.html/g, '-tirupur.html');
  content = content.replace(/-in-madurai\\.html/g, '-in-tirupur.html');
  content = content.replace(/-tiruppur\\.html/g, '-tirupur.html');
  content = content.replace(/-in-tiruppur\\.html/g, '-in-tirupur.html');`;

if (execScript.includes(oldLinkRepl)) {
  execScript = execScript.replace(oldLinkRepl, newLinkRepl);
}

// Ensure climate callout uses Tirupur
execScript = execScript.replace(/<h3>Tiruppur Climate/g, '<h3>Tirupur Climate');
execScript = execScript.replace(/Tiruppur experiences intense/g, 'Tirupur experiences intense');

// Expand buzzwords
const oldBuzzwordsStart = `  const buzzwords = [`;
const expandedBuzzwords = `  const buzzwords = [
    { from: /\\bpromptly\\b/gi, to: 'quickly' },
    { from: /\\bfacilitates?\\b/gi, to: 'helps' },
    { from: /\\bfacilitating\\b/gi, to: 'helping' },
    { from: /\\bcomprehensive assistance\\b/gi, to: 'complete repair support' },
    { from: /\\bcomprehensive solutions\\b/gi, to: 'complete repair services' },
    { from: /\\bcomprehensive repair\\b/gi, to: 'complete repair' },
    { from: /\\bcomprehensive\\b/gi, to: 'complete' },
    { from: /\\bseamlessly\\b/gi, to: 'smoothly' },
    { from: /\\bseamless\\b/gi, to: 'smooth' },
    { from: /\\brobust\\b/gi, to: 'solid' },
    { from: /\\bleverage\\b/gi, to: 'use' },
    { from: /\\bleveraging\\b/gi, to: 'using' },
    { from: /\\bendeavour\\b/gi, to: 'aim' },
    { from: /\\bmeticulous\\b/gi, to: 'careful' },
    { from: /\\bmeticulously\\b/gi, to: 'carefully' },
    { from: /\\bsophisticated\\b/gi, to: 'advanced' },
    { from: /\\bcutting-edge\\b/gi, to: 'modern' },
    { from: /\\bstate-of-the-art\\b/gi, to: 'modern' },
    { from: /\\btailored solutions\\b/gi, to: 'practical fixes' },
    { from: /\\btailored\\b/gi, to: 'suitable' },
    { from: /\\bunparalleled\\b/gi, to: 'trusted' },
    { from: /\\bstreamlined\\b/gi, to: 'quick' },
    { from: /\\bhassle-free experience\\b/gi, to: 'easy service' },
    { from: /\\bhassle-free\\b/gi, to: 'convenient' },
    { from: /\\befficient resolution\\b/gi, to: 'quick fix' },
    { from: /\\befficiently\\b/gi, to: 'properly' },
    { from: /\\bmalfunctioning\\b/gi, to: 'faulty' },
    { from: /\\bmalfunction\\b/gi, to: 'fault' },
    { from: /\\brectification\\b/gi, to: 'repair' },
    { from: /\\bexceptional assistance\\b/gi, to: 'reliable help' },
    { from: /\\bexceptional\\b/gi, to: 'reliable' },
    { from: /\\bproactive support\\b/gi, to: 'quick help' },
    { from: /\\bproactive\\b/gi, to: 'active' },
    { from: /\\btechnologically advanced\\b/gi, to: 'modern' },
    { from: /\\bprofessional assistance\\b/gi, to: 'technician help' },
    { from: /\\btechnical intervention\\b/gi, to: 'technician check' },
    { from: /\\butilization\\b/gi, to: 'use' },
    { from: /\\brequirements\\b/gi, to: 'needs' },
    { from: /\\brequirement\\b/gi, to: 'need' },
    { from: /\\bdiagnosis\\b/gi, to: 'inspection' },
    { from: /\\boptimization\\b/gi, to: 'tuning' },
    { from: /\\bexpertise\\b/gi, to: 'experience' },
    { from: /\\bOur highly trained professionals\\b/gi, to: 'Our experienced local technicians' },
    { from: /\\bWe are committed to delivering\\b/gi, to: 'We provide' },
    { from: /\\bExperience seamless\\b/gi, to: 'Get smooth' },
    { from: /\\bWhether you need\\b/gi, to: 'If you need' },
    { from: /\\bWe provide unparalleled\\b/gi, to: 'We provide trusted' },
    { from: /India,\\s*India/gi, to: 'India' },`;

execScript = execScript.replace(oldBuzzwordsStart, expandedBuzzwords);

// Update spelling replacement at the end of transformHtmlPage
const oldSpellingSection = `  // Enforce Tirupur single-p spelling for all visible text, headings, schemas, and descriptions
  // while strictly preserving working file paths and URLs with -tirupur.html
  content = content.replace(/Tiruppur(?!\\.html)/g, 'Tirupur');
  content = content.replace(/tiruppur(?!\\.html)/g, 'tirupur');
  content = content.replace(/TIRUPPUR(?!\\.html)/g, 'TIRUPUR');`;

const newSpellingSection = `  // Enforce canonical business address and single-p Tirupur spelling
  const CANONICAL_ADDR = 'Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India';
  content = content.replace(/Chikanna Chettiar St[^\n<"]*?(?:641604|641601)[^\n<"]*?India/gi, '___CANONICAL_ADDR___');
  content = content.replace(/Tiruppur/g, 'Tirupur');
  content = content.replace(/tiruppur/g, 'tirupur');
  content = content.replace(/TIRUPPUR/g, 'TIRUPUR');
  content = content.replace(/___CANONICAL_ADDR___/g, CANONICAL_ADDR);
  content = content.replace(/India,\\s*India/g, 'India');`;

execScript = execScript.replace(oldSpellingSection, newSpellingSection);

fs.writeFileSync(path.join(__dirname, 'execute_full_tiruppur_localization.js'), execScript, 'utf8');
console.log('✓ Updated execute_full_tiruppur_localization.js');

// 2. UPDATE scripts/build_tiruppur_blogs.js
let blogScript = fs.readFileSync(path.join(__dirname, 'build_tiruppur_blogs.js'), 'utf8');

// Ensure deletion of old -tiruppur.html blogs
blogScript = blogScript.replace(
  `if (f.endsWith('-madurai.html')) {`,
  `if (f.endsWith('-madurai.html') || f.endsWith('-tiruppur.html')) {`
);

// Map zoom to 16
blogScript = blogScript.replace(/maps\?q=11\.099761%2C77\.347941&amp;t=&amp;z=13/g, 'maps?q=11.099761%2C77.347941&amp;t=&amp;z=16');

// Replace any leftover -tiruppur.html in blog links
blogScript = blogScript.replace(/-tiruppur\.html/g, '-tirupur.html');

fs.writeFileSync(path.join(__dirname, 'build_tiruppur_blogs.js'), blogScript, 'utf8');
console.log('✓ Updated build_tiruppur_blogs.js');

// 3. UPDATE scripts/build_tiruppur_sitemaps.js
let sitemapScript = fs.readFileSync(path.join(__dirname, 'build_tiruppur_sitemaps.js'), 'utf8');

// Update priorities checks
sitemapScript = sitemapScript.replace(/-tiruppur\.html/g, '-tirupur.html');

// Update sitemap.html footer & map
sitemapScript = sitemapScript.replace(
  /Doorstep Home Appliance Repair Across All Localities in Tirupur, Tamil Nadu – 641601, India/g,
  'Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India'
);
sitemapScript = sitemapScript.replace(
  /maps\.google\.com\/maps\?q=Tirupur%2C%20Tamil%20Nadu&amp;t=&amp;z=13/g,
  'maps.google.com/maps?q=11.099761%2C77.347941&amp;t=&amp;z=16'
);
sitemapScript = sitemapScript.replace(
  /\/washing-machine\/washing-machine-repair-service-in-tiruppur\.html/g,
  '/washing-machine/washing-machine-repair-service-in-tirupur.html'
);
sitemapScript = sitemapScript.replace(
  /\/fridge\/refrigerator-repair-service-in-tiruppur\.html/g,
  '/fridge/refrigerator-repair-service-in-tirupur.html'
);
sitemapScript = sitemapScript.replace(
  /\/ac\/ac-repair-service-in-tiruppur\.html/g,
  '/ac/ac-repair-service-in-tirupur.html'
);
sitemapScript = sitemapScript.replace(
  /\/tv\/tv-repair-service-in-tiruppur\.html/g,
  '/tv/tv-repair-service-in-tirupur.html'
);
sitemapScript = sitemapScript.replace(
  /\/servicecenter\/home-appliance-service-center-tiruppur\.html/g,
  '/servicecenter/home-appliance-service-center-tirupur.html'
);

fs.writeFileSync(path.join(__dirname, 'build_tiruppur_sitemaps.js'), sitemapScript, 'utf8');
console.log('✓ Updated build_tiruppur_sitemaps.js');
