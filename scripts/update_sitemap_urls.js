const fs = require('fs');

let sitemap = fs.readFileSync('sitemap.xml', 'utf8');

// Replace old root URLs with their folder URLs
sitemap = sitemap.replace(
  '<loc>https://servicecenterkarur.com/ac-repair-service-in-karur.html</loc>',
  '<loc>https://servicecenterkarur.com/ac/ac-repair-service-in-karur.html</loc>'
);

sitemap = sitemap.replace(
  '<loc>https://servicecenterkarur.com/tv-repair-service-in-karur.html</loc>',
  '<loc>https://servicecenterkarur.com/tv/tv-repair-service-in-karur.html</loc>'
);

sitemap = sitemap.replace(
  '<loc>https://servicecenterkarur.com/refrigerator-repair-service-in-karur.html</loc>',
  '<loc>https://servicecenterkarur.com/fridge/refrigerator-repair-service-in-karur.html</loc>'
);

// Remove microwave URL if any still exists
sitemap = sitemap.replace(/<url>[\s\S]*?microwave-repair-service-in-karur\.html[\s\S]*?<\/url>\s*/g, '');

fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('Successfully updated sitemap.xml with correct folder URLs');
