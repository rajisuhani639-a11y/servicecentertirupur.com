// scripts/execute_prelaunch_audit_and_fixes.js
// Final Pre-Launch Audit & Fixes for servicecentercoimbatore.com

const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('./scripts/detailed_page_info.json', 'utf8'));
const allFiles = pages.map(p => p.file);
if (fs.existsSync('sitemap.html') && !allFiles.includes('sitemap.html')) {
  allFiles.push('sitemap.html');
}

console.log(`Starting pre-launch quality & technical fixes across ${allFiles.length} HTML files...\n`);

const NEW_FAVICON_BLOCK = `    <!-- Favicon System -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">`;

// Locality prompt rotation alternatives
const promptAlternates = [
  'Quick doorstep checking for',
  'Fast home service for',
  'Doorstep repair and checking for',
  'Same-day doorstep checking for',
  'Reliable doorstep service for',
  'Local technician checking for'
];
let promptAltIdx = 0;

let totalWordsReplaced = 0;
let faviconBlocksUpdated = 0;
let oldDomainFixed = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let prevContent = content;

  // -------------------------------------------------------------
  // 1. UPDATE FAVICON REFERENCES
  // -------------------------------------------------------------
  // Remove any existing favicon tags
  content = content.replace(/<!-- Favicon System -->[\s\S]*?<link rel="manifest"[^>]*>/gi, '');
  content = content.replace(/<link[^>]*rel=["'](?:icon|shortcut icon|apple-touch-icon|manifest)["'][^>]*>\s*/gi, '');

  // Add clean new favicon block right after <meta property="og:site_name" ...> or before <link rel="preconnect"
  if (content.includes('<meta property="og:site_name"')) {
    content = content.replace(/(<meta property="og:site_name"[^>]*>)/i, `$1\n\n${NEW_FAVICON_BLOCK}`);
  } else if (content.includes('<link rel="preconnect"')) {
    content = content.replace(/(<link rel="preconnect"[^>]*>)/i, `${NEW_FAVICON_BLOCK}\n\n  $1`);
  } else {
    content = content.replace(/<\/head>/i, `  ${NEW_FAVICON_BLOCK}\n</head>`);
  }
  faviconBlocksUpdated++;

  // -------------------------------------------------------------
  // 2. LANGUAGE SIMPLIFICATION (NATURAL INDIAN ENGLISH)
  // -------------------------------------------------------------
  // Replace "Prompt doorstep checking for" with natural rotations
  content = content.replace(/Prompt doorstep checking for/g, () => {
    totalWordsReplaced++;
    const replacement = promptAlternates[promptAltIdx % promptAlternates.length];
    promptAltIdx++;
    return replacement;
  });

  const wordReplacements = [
    [/\bprompt assistance\b/gi, 'quick help'],
    [/\bprompt service\b/gi, 'quick service'],
    [/\bprompt repair\b/gi, 'fast repair'],
    [/\bpromptly\b/gi, 'quickly'],
    [/\bprompt\b/gi, 'quick'],

    [/\bexpeditious\b/gi, 'quick'],
    [/\bexpedite\b/gi, 'speed up'],

    [/\bcomprehensive solutions\b/gi, 'complete repair solutions'],
    [/\bcomprehensive assistance\b/gi, 'complete help'],
    [/\bcomprehensive coverage\b/gi, 'complete coverage'],
    [/\bcomprehensive\b/gi, 'complete'],

    [/\bfacilitates\b/gi, 'helps'],
    [/\bfacilitate\b/gi, 'help'],

    [/\butilizing\b/gi, 'using'],
    [/\butilizes\b/gi, 'uses'],
    [/\butilize\b/gi, 'use'],
    [/\butilization\b/gi, 'usage'],

    [/\bendeavours\b/gi, 'strives'],
    [/\bendeavour\b/gi, 'try'],

    [/\bcommencing\b/gi, 'starting'],
    [/\bcommences\b/gi, 'starts'],
    [/\bcommence service\b/gi, 'start the service'],
    [/\bcommence\b/gi, 'start'],

    [/\brectification\b/gi, 'repair'],
    [/\bdiagnostic assessment\b/gi, 'checking'],
    [/\btechnical intervention\b/gi, 'repair work'],
    [/\bprofessional intervention\b/gi, 'technician visit'],
    [/\breliable assistance\b/gi, 'dependable help'],
    [/\bexpertise-driven\b/gi, 'expert'],

    [/\bseamless service experience\b/gi, 'easy service visit'],
    [/\bseamless experience\b/gi, 'easy service'],
    [/\bseamless\b/gi, 'smooth'],

    [/\btailored solutions\b/gi, 'suitable repairs'],
    [/\btailored solution\b/gi, 'suitable repair'],
    [/\btailored\b/gi, 'suitable'],

    [/\bbespoke\b/gi, 'custom'],
    [/\bleveraging\b/gi, 'using'],

    [/\boptimal performance\b/gi, 'best performance'],
    [/\boptimal cooling\b/gi, 'best cooling'],
    [/\boptimal\b/gi, 'best'],
    [/\boptimization\b/gi, 'fine-tuning'],
    [/\boptimize\b/gi, 'improve'],

    [/\bproactive\b/gi, 'timely'],
    [/\bstreamlined\b/gi, 'smooth'],
    [/\bmeticulous\b/gi, 'careful'],
    [/\bholistic\b/gi, 'complete'],
    [/\benhanced\b/gi, 'improved'],
    [/\bexceptional\b/gi, 'excellent'],
    [/\bunparalleled\b/gi, 'top-quality'],
    [/\bcustomer-centric\b/gi, 'customer-focused'],
    [/\bend-to-end\b/gi, 'complete'],
    [/\bstate-of-the-art\b/gi, 'modern'],
    [/\bcutting-edge\b/gi, 'modern'],
    [/\bsophisticated\b/gi, 'advanced'],

    [/\bservice desk\b/gi, 'service center'],
    [/\bresidential premises\b/gi, 'homes'],
    [/\bmalfunctioning\b/gi, 'not working properly']
  ];

  wordReplacements.forEach(([regex, rep]) => {
    const matches = content.match(regex);
    if (matches) {
      totalWordsReplaced += matches.length;
      content = content.replace(regex, rep);
    }
  });

  // -------------------------------------------------------------
  // 3. OLD DOMAIN / LOCATION / FOLDER CLEANUP
  // -------------------------------------------------------------
  // Replace any residual "service-center/" (with hyphen) in URLs with "servicecenter/"
  content = content.replace(/href="\/service-center\//g, 'href="/servicecenter/');
  content = content.replace(/href="\.\.\/service-center\//g, 'href="../servicecenter/');
  content = content.replace(/https:\/\/servicecentercoimbatore\.com\/service-center\//g, 'https://servicecentercoimbatore.com/servicecenter/');

  // Replace any residual Kanyakumari domain if any
  content = content.replace(/servicecenterkanyakumari\.com/gi, 'servicecentercoimbatore.com');
  content = content.replace(/servicecenterkarur\.com/gi, 'servicecentercoimbatore.com');
  content = content.replace(/servicecentertenkasi\.com/gi, 'servicecentercoimbatore.com');
  content = content.replace(/servicecentermadurai\.com/gi, 'servicecentercoimbatore.com');
  content = content.replace(/servicecentertiruchirappalli\.com/gi, 'servicecentercoimbatore.com');
  content = content.replace(/http:\/\/127\.0\.0\.1:[0-9]+/gi, 'https://servicecentercoimbatore.com');
  content = content.replace(/http:\/\/localhost:[0-9]+/gi, 'https://servicecentercoimbatore.com');

  fs.writeFileSync(file, content, 'utf8');
});

console.log(`Pre-launch processing completed:`);
console.log(`- Favicon blocks updated: ${faviconBlocksUpdated} / ${allFiles.length}`);
console.log(`- Heavy/unnatural words replaced: ${totalWordsReplaced}`);
