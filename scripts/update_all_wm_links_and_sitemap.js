const fs = require('fs');
const path = require('path');
const wmBrands = require('./wm_all_brands');

console.log("Updating links across the entire project to point to washing-machine/*-karur.html...");

// 1. Update root HTML files
const rootHtmlFiles = [
  'index.html',
  'ac-repair-service-in-karur.html',
  'refrigerator-repair-service-in-karur.html',
  'tv-repair-service-in-karur.html',
  'microwave-repair-service-in-karur.html'
];

rootHtmlFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace any old tirunelveli paths or old root paths
    let updated = content
      .split('washing-machine/washing-machine-repair-service-in-tirunelveli.html')
      .join('washing-machine/washing-machine-repair-service-in-karur.html')
      .split('washing-machine-repair-service-in-tirunelveli.html')
      .join('washing-machine/washing-machine-repair-service-in-karur.html');

    // Also update any root washing-machine-repair-service-in-karur.html to washing-machine/washing-machine-repair-service-in-karur.html
    // but not if already prefixed by washing-machine/
    updated = updated.replace(/(?<!washing-machine\/)washing-machine-repair-service-in-karur\.html/g, 'washing-machine/washing-machine-repair-service-in-karur.html');

    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`Updated root file: ${file}`);
    }
  }
});

// 2. Update all AC brand pages inside ac/ folder
const acDir = path.join(__dirname, '..', 'ac');
if (fs.existsSync(acDir)) {
  const acFiles = fs.readdirSync(acDir).filter(f => f.endsWith('.html'));
  acFiles.forEach(file => {
    const filePath = path.join(acDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = content
      .split('../washing-machine/washing-machine-repair-service-in-tirunelveli.html')
      .join('../washing-machine/washing-machine-repair-service-in-karur.html')
      .split('../washing-machine-repair-service-in-tirunelveli.html')
      .join('../washing-machine/washing-machine-repair-service-in-karur.html')
      .split('../washing-machine-repair-service-in-karur.html')
      .join('../washing-machine/washing-machine-repair-service-in-karur.html');
    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
    }
  });
  console.log(`Updated ${acFiles.length} files inside ac/ folder.`);
}

// 3. Update js/config.js
const configPath = path.join(__dirname, '..', 'js', 'config.js');
if (fs.existsSync(configPath)) {
  let content = fs.readFileSync(configPath, 'utf8');
  let updated = content
    .split('washing-machine/washing-machine-repair-service-in-tirunelveli.html')
    .join('washing-machine/washing-machine-repair-service-in-karur.html')
    .split('washing-machine-repair-service-in-karur.html')
    .join('washing-machine/washing-machine-repair-service-in-karur.html');
  if (content !== updated) {
    fs.writeFileSync(configPath, updated, 'utf8');
    console.log("Updated js/config.js");
  }
}

// 4. Update sitemap.xml to include main washing machine page and all 30 brand pages in Karur
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Remove any old tirunelveli entries
  const urlEntryRegex = /<url>\s*<loc>[^<]*tirunelveli[^<]*<\/loc>[\s\S]*?<\/url>\n?/gi;
  sitemapContent = sitemapContent.replace(urlEntryRegex, '');

  // Remove old main karur entry if at root without washing-machine/
  sitemapContent = sitemapContent.replace(/<url>\s*<loc>https:\/\/servicecenterkarur\.com\/washing-machine-repair-service-in-karur\.html<\/loc>[\s\S]*?<\/url>\n?/gi, '');

  // Build entries for main landing + all 30 brands
  const wmUrls = [
    'https://servicecenterkarur.com/washing-machine/washing-machine-repair-service-in-karur.html',
    ...wmBrands.map(b => `https://servicecenterkarur.com/washing-machine/${b.slug}`)
  ];

  let newEntries = [];
  wmUrls.forEach(u => {
    if (!sitemapContent.includes(u)) {
      newEntries.push(`  <url>
    <loc>${u}</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
    }
  });

  if (newEntries.length > 0) {
    sitemapContent = sitemapContent.replace('</urlset>', newEntries.join('\n') + '\n</urlset>');
  }

  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`Updated sitemap.xml with Karur URLs!`);
}

console.log("All site links and sitemap updated successfully!");
