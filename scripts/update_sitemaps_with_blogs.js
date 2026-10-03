const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const blogs = [
  { slug: 'index.html', title: 'Blog Hub: All 12 Local Guides & Articles', priority: '0.9', freq: 'weekly' },
  { slug: 'air-conditioner-not-cooling-in-erode.html', title: 'AC Not Cooling in Erode: Common Problems & Checks', priority: '0.8', freq: 'monthly' },
  { slug: 'refrigerator-not-cooling-in-erode.html', title: 'Refrigerator Cooling Problems in Erode', priority: '0.8', freq: 'monthly' },
  { slug: 'washing-machine-not-draining-in-erode.html', title: 'Washing Machine Not Draining: Simple Checks', priority: '0.8', freq: 'monthly' },
  { slug: 'tv-screen-black-sound-working-in-erode.html', title: 'TV Screen Black but Sound Working: Diagnostic Tips', priority: '0.8', freq: 'monthly' },
  { slug: 'ac-water-leakage-repair-in-erode.html', title: 'AC Water Leakage at Home in Erode', priority: '0.8', freq: 'monthly' },
  { slug: 'washing-machine-repair-problems-in-erode.html', title: 'Which Washing Machine Problem Needs a Technician?', priority: '0.8', freq: 'monthly' },
  { slug: 'refrigerator-clicking-noise-repair-in-erode.html', title: 'Refrigerator Clicking or Loud Noise: What to Check', priority: '0.8', freq: 'monthly' },
  { slug: 'smart-tv-repair-guide-in-erode.html', title: 'Smart TV Repair in Erode: Display, Sound & Software', priority: '0.8', freq: 'monthly' },
  { slug: 'old-vs-new-washing-machine-repair-in-erode.html', title: 'Old vs New Washing Machines: Repair in Erode Homes', priority: '0.8', freq: 'monthly' },
  { slug: 'home-appliance-repair-guide-in-erode.html', title: 'Home Appliance Repair in Erode: AC, Fridge, Washer & TV', priority: '0.8', freq: 'monthly' },
  { slug: 'appliance-repair-cost-guide-in-erode.html', title: 'How Much Can Appliance Repair Cost in Erode?', priority: '0.8', freq: 'monthly' },
  { slug: 'common-appliance-problems-when-to-call-technician-erode.html', title: 'Common Appliance Problems & When to Call for Repair', priority: '0.8', freq: 'monthly' }
];

// 1. Update sitemap.xml
const sitemapXmlPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapXml = fs.readFileSync(sitemapXmlPath, 'utf8');

// Filter out any previous blog entries to avoid duplicates
sitemapXml = sitemapXml.replace(/\s*<url>\s*<loc>https:\/\/servicecentereode\.com\/blog\/[^<]+<\/loc>[\s\S]*?<\/url>/g, '');

const blogXmlEntries = blogs.map(b => `  <url>
    <loc>https://servicecentereode.com/blog/${b.slug}</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>${b.freq}</changefreq>
    <priority>${b.priority}</priority>
  </url>`).join('\n');

sitemapXml = sitemapXml.replace('</urlset>', `${blogXmlEntries}\n</urlset>`);
fs.writeFileSync(sitemapXmlPath, sitemapXml, 'utf8');
console.log('✓ Updated sitemap.xml with 13 blog URLs.');

// 2. Update sitemap.html
const sitemapHtmlPath = path.join(ROOT_DIR, 'sitemap.html');
let sitemapHtml = fs.readFileSync(sitemapHtmlPath, 'utf8');

// Remove existing blog group if present
sitemapHtml = sitemapHtml.replace(/<!-- Group: Erode Appliance Repair Guides & Blog Hub -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '');

const blogHtmlLinks = blogs.map(b => `            <a href="/blog/${b.slug}"><span>•</span> ${b.title}</a>`).join('\n');

const blogGroupHtml = `
      <!-- Group: Erode Appliance Repair Guides & Blog Hub -->
      <div class="sitemap-group">
        <h2><span>📖</span> Erode Appliance Repair Guides &amp; Blog Hub</h2>
        <div class="sitemap-subgroup">
          <h3>Erode Local Blog Articles (13 Pages)</h3>
          <div class="sitemap-grid">
${blogHtmlLinks}
          </div>
        </div>
      </div>
`;

// Insert after Group 1
if (sitemapHtml.includes('<!-- Group 1: Home & General Pages -->')) {
  sitemapHtml = sitemapHtml.replace(/(<!-- Group 1: Home & General Pages -->[\s\S]*?<\/div>\s*<\/div>)/, `$1\n${blogGroupHtml}`);
} else {
  // fallback before closing </main>
  sitemapHtml = sitemapHtml.replace('</main>', `${blogGroupHtml}\n  </main>`);
}

fs.writeFileSync(sitemapHtmlPath, sitemapHtml, 'utf8');
console.log('✓ Updated sitemap.html with 13 blog links and dedicated section.');
