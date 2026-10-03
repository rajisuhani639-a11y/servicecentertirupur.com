const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Gather all HTML files across the website
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== '.git' && file !== 'node_modules') {
        results = results.concat(getHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Auditing ${htmlFiles.length} HTML files...`);

let brokenLinks = 0;
let oldPathLinks = 0;
let microwaveLinks = 0;
let totalCheckedLinks = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const fileDir = path.dirname(file);

  // Match href and src attributes (excluding tel:, mailto:, https://, http://, #, javascript:)
  const linkMatches = content.matchAll(/(?:href|src)=["']([^"']+)["']/g);
  for (const match of linkMatches) {
    const rawUrl = match[1];
    if (
      rawUrl.startsWith('http://') ||
      rawUrl.startsWith('https://') ||
      rawUrl.startsWith('tel:') ||
      rawUrl.startsWith('mailto:') ||
      rawUrl.startsWith('javascript:') ||
      rawUrl.startsWith('#') ||
      rawUrl.startsWith('data:')
    ) {
      continue;
    }

    totalCheckedLinks++;

    // Check for old root appliance paths
    if (rawUrl.includes('microwave-repair-service-in-karur.html')) {
      console.log(`[MICROWAVE LINK] in ${path.relative(rootDir, file)}: ${rawUrl}`);
      microwaveLinks++;
    }

    // Strip hash or query string
    const cleanUrl = rawUrl.split('#')[0].split('?')[0];
    if (!cleanUrl) continue;

    // Resolve relative path from file directory
    const resolvedPath = path.resolve(fileDir, cleanUrl);
    if (!fs.existsSync(resolvedPath)) {
      console.log(`[BROKEN LINK] in ${path.relative(rootDir, file)}: ${rawUrl} -> ${path.relative(rootDir, resolvedPath)} not found`);
      brokenLinks++;
    }
  }
});

console.log(`\nLink Check Summary:`);
console.log(`Total links checked: ${totalCheckedLinks}`);
console.log(`Broken links: ${brokenLinks}`);
console.log(`Microwave links: ${microwaveLinks}`);

// 2. Check sitemap.xml
console.log(`\nAuditing sitemap.xml...`);
const sitemapContent = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');
const locMatches = sitemapContent.matchAll(/<loc>https:\/\/servicecenterkarur\.com\/([^<]+)<\/loc>/g);
let sitemapBroken = 0;
let sitemapTotal = 0;
for (const match of locMatches) {
  sitemapTotal++;
  const relPath = match[1];
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`[SITEMAP 404] ${match[0]} -> file ${relPath} not found`);
    sitemapBroken++;
  }
}
console.log(`Sitemap entries checked: ${sitemapTotal}`);
console.log(`Sitemap 404 entries: ${sitemapBroken}`);

// 3. Deep Scan of the new Fridge Page
console.log(`\nAuditing fridge/refrigerator-repair-service-in-karur.html...`);
const fridgeHtml = fs.readFileSync(path.join(rootDir, 'fridge', 'refrigerator-repair-service-in-karur.html'), 'utf8');

// Foreign cities
const foreignCities = [
  'Delhi', 'Indirapuram', 'Ghaziabad', 'Tirupur', 'Tirunelveli',
  'Madurai', 'Karur', 'Nagercoil', 'Chennai'
];
let foreignCityHits = 0;
foreignCities.forEach(city => {
  const reg = new RegExp(`\\b${city}\\b`, 'gi');
  const matches = fridgeHtml.match(reg);
  if (matches) {
    console.log(`[FOREIGN CITY] found "${city}" (${matches.length}x) in fridge page`);
    foreignCityHits += matches.length;
  }
});

// AI Buzzwords
const aiBuzzwords = [
  'seamless', 'precision diagnosis', 'tailored', 'comprehensive',
  'sophisticated', 'state-of-the-art', 'cutting-edge', 'next-generation',
  'optimized', 'intelligent', 'premium', 'unmatched', 'hassle-free', 'expert-driven'
];
let aiBuzzwordHits = 0;
aiBuzzwords.forEach(word => {
  const reg = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = fridgeHtml.match(reg);
  if (matches) {
    console.log(`[AI BUZZWORD] found "${word}" (${matches.length}x) in fridge page`);
    aiBuzzwordHits += matches.length;
  }
});

// Internal prompt words
const promptWords = [
  'Task', 'Prompt', 'AI Prompt', 'Final Task', 'Content Task',
  'SEO Task', 'Research Task', 'Developer Notes', 'Writing Instructions'
];
let promptWordHits = 0;
promptWords.forEach(word => {
  if (fridgeHtml.includes(word)) {
    console.log(`[PROMPT WORD] found "${word}" in fridge page`);
    promptWordHits++;
  }
});

console.log(`Fridge Page Checks:`);
console.log(`Foreign City hits: ${foreignCityHits}`);
console.log(`AI Buzzword hits: ${aiBuzzwordHits}`);
console.log(`Prompt Word hits: ${promptWordHits}`);
console.log(`Canonical URL: ${fridgeHtml.match(/<link rel="canonical"[^>]*>/)?.[0]}`);
console.log(`H1 Tag: ${fridgeHtml.match(/<h1>[^<]+<\/h1>/)?.[0]}`);
console.log(`Title Tag: ${fridgeHtml.match(/<title>[^<]+<\/title>/)?.[0]}`);
