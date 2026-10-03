const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcFile = path.join(rootDir, 'ac-repair-service-in-karur.html');
const destFile = path.join(rootDir, 'ac', 'ac-repair-service-in-karur.html');

let html = fs.readFileSync(srcFile, 'utf8');

// 1. Canonical and OG / Schema URLs
html = html.replace(
  'href="https://servicecenterkarur.com/ac-repair-service-in-karur.html"',
  'href="https://servicecenterkarur.com/ac/ac-repair-service-in-karur.html"'
);
html = html.replace(
  'content="https://servicecenterkarur.com/ac-repair-service-in-karur.html"',
  'content="https://servicecenterkarur.com/ac/ac-repair-service-in-karur.html"'
);

// 2. CSS and JS paths
html = html.replace('href="css/style.css"', 'href="../css/style.css"');
html = html.replace('src="js/config.js"', 'src="../js/config.js"');
html = html.replace('src="js/main.js"', 'src="../js/main.js"');

// 3. Navigation Header
// Replace brand logo link
html = html.replace('href="index.html" class="brand-logo"', 'href="../index.html" class="brand-logo"');

// Replace main navigation
const oldNav = `<nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="index.html">Home</a>
        <a href="ac-repair-service-in-karur.html" class="active">AC Repair</a>
        <a href="refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="tv-repair-service-in-karur.html">TV Repair</a>
        <a href="microwave-repair-service-in-karur.html">Microwave</a>
      </nav>`;

const newNav = `<nav class="main-nav" id="mainNav" aria-label="Main Navigation">
        <a href="../index.html">Home</a>
        <a href="ac-repair-service-in-karur.html" class="active">AC Repair</a>
        <a href="../fridge/refrigerator-repair-service-in-karur.html">Fridge Repair</a>
        <a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine</a>
        <a href="../tv/tv-repair-service-in-karur.html">TV Repair</a>
      </nav>`;

if (html.includes(oldNav)) {
  html = html.replace(oldNav, newNav);
} else {
  // Regex fallback for nav
  html = html.replace(/<nav class="main-nav"[\s\S]*?<\/nav>/, newNav);
}

// 4. Breadcrumbs
html = html.replace('<li><a href="index.html">Home</a></li>', '<li><a href="../index.html">Home</a></li>');

// 5. Brand links within AC page: since the AC page is now in /ac/, links to ac/brand.html should be brand.html
html = html.replace(/href="ac\/([a-z0-9\-]+-ac-repair-service-in-karur\.html)"/g, 'href="$1"');

// 6. Other appliance service cards
// Remove microwave card and update other appliance links
const oldMicrowaveCard = `<a href="microwave-repair-service-in-karur.html" class="service-card" style="text-decoration: none; padding: 1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.35rem;">Microwave Oven Repair</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Solo, grill & convection heating failure, turntable rotation, spark & touch panel repair.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-blue); margin-top: auto; padding-top: 0.75rem;">View Microwave Services →</span>
        </a>`;
if (html.includes(oldMicrowaveCard)) {
  html = html.replace(oldMicrowaveCard, '');
} else {
  // Remove microwave service card via regex if slight whitespace differences
  html = html.replace(/<a href="microwave-repair-service-in-karur\.html"[\s\S]*?<\/a>\s*/, '');
}

html = html.replace('href="refrigerator-repair-service-in-karur.html"', 'href="../fridge/refrigerator-repair-service-in-karur.html"');
html = html.replace('href="washing-machine/washing-machine-repair-service-in-karur.html"', 'href="../washing-machine/washing-machine-repair-service-in-karur.html"');
html = html.replace('href="tv-repair-service-in-karur.html"', 'href="../tv/tv-repair-service-in-karur.html"');

// 7. Footer links
html = html.replace('<li><a href="ac-repair-service-in-karur.html">AC Repair & Service</a></li>', '<li><a href="ac-repair-service-in-karur.html">AC Repair & Service</a></li>');
html = html.replace('<li><a href="refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>', '<li><a href="../fridge/refrigerator-repair-service-in-karur.html">Refrigerator / Fridge Repair</a></li>');
html = html.replace('<li><a href="washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>', '<li><a href="../washing-machine/washing-machine-repair-service-in-karur.html">Washing Machine Repair</a></li>');
html = html.replace('<li><a href="tv-repair-service-in-karur.html">TV Repair & Service</a></li>', '<li><a href="../tv/tv-repair-service-in-karur.html">TV Repair & Service</a></li>');
html = html.replace('<li><a href="microwave-repair-service-in-karur.html">Microwave Oven Repair</a></li>', '');

// Locality links in footer
html = html.replace(/href="index\.html#localitiesSection"/g, 'href="../index.html#localitiesSection"');

// Write destination
fs.writeFileSync(destFile, html, 'utf8');
console.log('Successfully wrote:', destFile);

// Remove old root file
if (fs.existsSync(srcFile)) {
  fs.unlinkSync(srcFile);
  console.log('Successfully removed old root file:', srcFile);
}
