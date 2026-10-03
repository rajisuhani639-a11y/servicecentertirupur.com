const fs = require('fs');
const glob = require('path');

function searchPrices() {
  const folders = ['washing-machine', 'ac', 'fridge', 'tv', 'service-center'];
  const priceMatches = new Set();
  
  folders.forEach(folder => {
    if (!fs.existsSync(folder)) return;
    const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
    files.forEach(file => {
      const content = fs.readFileSync(`${folder}/${file}`, 'utf8');
      const matches = content.match(/₹\s*\d+(?:\s*[-–to]\s*₹?\s*\d+)?/g);
      if (matches) {
        matches.slice(0, 10).forEach(m => priceMatches.add(`${folder}: ${m}`));
      }
      // Look for pricing table or pricing section
      const pSec = content.match(/<section[^>]*pricing[\s\S]*?<\/section>/i) ||
                    content.match(/<table[\s\S]*?<\/table>/i);
      if (pSec && priceMatches.size < 30) {
        // console.log(`Price section in ${folder}/${file}:`, pSec[0].slice(0, 300).replace(/\s+/g, ' '));
      }
    });
  });
  console.log('Sample price patterns found:', Array.from(priceMatches).slice(0, 40));
}

searchPrices();
