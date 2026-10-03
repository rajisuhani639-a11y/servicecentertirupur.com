// update_sitemap_xml.js
const fs = require('fs');

let sitemap = fs.readFileSync('sitemap.xml', 'utf8');
sitemap = sitemap.replace(/<lastmod>[^<]+<\/lastmod>/g, '<lastmod>2026-10-02</lastmod>');
fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('sitemap.xml updated with current date 2026-10-02');
