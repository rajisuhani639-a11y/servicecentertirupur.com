const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'generate_sitemaps.js');
let code = fs.readFileSync(target, 'utf8');

// Replace old phone numbers
code = code.split('+91 94420 54321').join('+91 92115 12088');
code = code.split('+919442054321').join('+919211512088');
code = code.split('919442054321').join('919211512088');
code = code.split('94420 54321').join('92115 12088');
code = code.split('9442054321').join('9211512088');

// Replace old service center index references
code = code.split('/servicecenter/index.html').join('/servicecenter/home-appliance-service-center-karur.html');

// Add Google tag to sitemap.html template if missing
const GTAG = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CXRXPBP63E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CXRXPBP63E');
</script>`;

if (!code.includes('G-CXRXPBP63E')) {
  code = code.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n  ' + GTAG);
}

// Update nav in sitemap.html template
code = code.replace(
  '<a href="/servicecenter/home-appliance-service-center-karur.html">Service Center</a>',
  '<a href="/servicecenter/home-appliance-service-center-karur.html" class="nav-sc-link"><span class="nav-desktop-text">Service Center</span><span class="nav-mobile-text">Home Appliance Service Center</span></a>'
);
if (!code.includes('nav-mobile-only active')) {
  code = code.replace(
    '<a href="/tv/tv-repair-service-in-karur.html">TV Repair</a>',
    '<a href="/tv/tv-repair-service-in-karur.html">TV Repair</a>\n        <a href="/sitemap.html" class="nav-mobile-only active">Sitemap</a>'
  );
}

// Update sitemap overview link
code = code.replace(
  '<a href="/servicecenter/home-appliance-service-center-karur.html"><span>•</span> Service Center Directory (All 54 Brands)</a>',
  '<a href="/servicecenter/home-appliance-service-center-karur.html"><span>•</span> Home Appliance Service Center Karur (All 54 Brands)</a>'
);

// Add footer sitemap link if missing
if (!code.includes('<li><a href="/sitemap.html">Sitemap</a></li>')) {
  code = code.replace(
    '<li><a href="/servicecenter/home-appliance-service-center-karur.html">All Service Center Brands</a></li>',
    '<li><a href="/servicecenter/home-appliance-service-center-karur.html">All Service Center Brands</a></li>\n            <li><a href="/sitemap.html">Sitemap</a></li>'
  );
}

fs.writeFileSync(target, code, 'utf8');
console.log('scripts/generate_sitemaps.js updated successfully!');
