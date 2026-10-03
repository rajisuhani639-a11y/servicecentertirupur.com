const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

// Parse existing URLs
const existingUrls = new Set();
const urlRegex = /<loc>(https:\/\/servicecenterkarur\.com\/[^<]+)<\/loc>/g;
let match;
while ((match = urlRegex.exec(content)) !== null) {
  existingUrls.add(match[1]);
}
// Also check root
if (content.includes('<loc>https://servicecenterkarur.com/</loc>')) {
  existingUrls.add('https://servicecenterkarur.com/');
}

console.log('Existing URLs in sitemap:', existingUrls.size);

// Gather all HTML files that should be in sitemap
const newUrls = [];

function checkFile(relPath, priority) {
  const fullUrl = `https://servicecenterkarur.com/${relPath.replace(/\\/g, '/')}`;
  if (!existingUrls.has(fullUrl)) {
    newUrls.push({
      loc: fullUrl,
      priority: priority,
      changefreq: 'monthly'
    });
    existingUrls.add(fullUrl);
  }
}

// 1. Root & category indexes
checkFile('index.html', '1.0');
checkFile('servicecenter/index.html', '0.9');

// 2. Service Center brand pages
const scFiles = fs.readdirSync(path.join(__dirname, '..', 'service-center'))
  .filter(f => f.endsWith('.html') && f !== 'index.html');
scFiles.forEach(f => checkFile(`servicecenter/${f}`, '0.85'));

// 3. Existing AC, Fridge, WM, TV pages
['ac', 'fridge', 'washing-machine', 'tv'].forEach(dir => {
  const files = fs.readdirSync(path.join(__dirname, '..', dir)).filter(f => f.endsWith('.html'));
  files.forEach(f => {
    const p = f.includes('-repair-service-in-karur.html') && !f.startsWith(dir) ? '0.8' : '0.9';
    checkFile(`${dir}/${f}`, p);
  });
});

console.log('New URLs to add:', newUrls.length);

if (newUrls.length > 0) {
  let additions = '';
  newUrls.forEach(u => {
    additions += `  <url>
    <loc>${u.loc}</loc>
    <lastmod>2026-09-25</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>\n`;
  });

  content = content.replace('</urlset>', additions + '</urlset>');
  fs.writeFileSync(sitemapPath, content, 'utf8');
  console.log('Successfully updated sitemap.xml! Total URLs now:', existingUrls.size);
} else {
  console.log('No new URLs needed to be added to sitemap.xml.');
}
