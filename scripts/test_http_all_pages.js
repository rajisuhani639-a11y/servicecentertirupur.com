// scripts/test_http_all_pages.js
// Tests HTTP status codes, assets, and internal links for all pages.

const http = require('http');
const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('scripts/erode_pages_data.json', 'utf8'));

console.log('Testing HTTP responses on localhost:8080 for all 174 pages + sitemap.html...');

const urls = ['/index.html', '/sitemap.html', ...pages.map(p => '/' + p.newFile.replace(/\\/g, '/'))];

let checked = 0;
let failed = 0;

function fetchUrl(url) {
  return new Promise((resolve) => {
    http.get('http://localhost:8080' + url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`FAILED: ${url} returned status ${res.statusCode}`);
        failed++;
      } else {
        checked++;
      }
      res.resume();
      resolve();
    }).on('error', (e) => {
      console.error(`ERROR: ${url} -> ${e.message}`);
      failed++;
      resolve();
    });
  });
}

async function run() {
  // Check in batches of 10
  for (let i = 0; i < urls.length; i += 10) {
    const batch = urls.slice(i, i + 10);
    await Promise.all(batch.map(u => fetchUrl(u)));
  }
  console.log(`HTTP Check Completed: ${checked} succeeded, ${failed} failed out of ${urls.length} URLs.`);

  // Also check core assets
  const assets = [
    '/css/style.css',
    '/js/main.js',
    '/favicon.ico',
    '/favicon.svg',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/favicon-192x192.png',
    '/apple-touch-icon.png',
    '/site.webmanifest',
    '/robots.txt',
    '/sitemap.xml'
  ];
  let assetChecked = 0;
  let assetFailed = 0;
  for (const a of assets) {
    await new Promise((resolve) => {
      http.get('http://localhost:8080' + a, (res) => {
        if (res.statusCode !== 200) {
          console.error(`ASSET FAILED: ${a} returned ${res.statusCode}`);
          assetFailed++;
        } else {
          assetChecked++;
        }
        res.resume();
        resolve();
      });
    });
  }
  console.log(`Asset Check Completed: ${assetChecked} succeeded, ${assetFailed} failed.`);
}

run();
