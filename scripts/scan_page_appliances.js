const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('./scripts/coimbatore_pages_list.json', 'utf8'));

console.log(`Total pages in coimbatore_pages_list.json: ${pages.length}`);

const pageAnalysis = [];

pages.forEach(p => {
  const filePath = p.newRel;
  if (!fs.existsSync(filePath)) {
    console.log(`Missing file: ${filePath}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // Extract appliances listed in the page
  // 1. Check <section ... id="appliances"> or sections containing "Home Appliances We Service"
  const appliancesFound = [];
  const appSectionMatch = html.match(/<section[^>]*id=["']appliances["'][^>]*>([\s\S]*?)<\/section>/i)
    || html.match(/Home Appliances We Service[\s\S]*?<\/section>/i);

  if (appSectionMatch) {
    const headingMatches = appSectionMatch[0].match(/<h[34][^>]*>(.*?)<\/h[34]>/gi);
    if (headingMatches) {
      headingMatches.forEach(h => {
        const text = h.replace(/<[^>]+>/g, '').trim();
        if (text && !appliancesFound.includes(text)) {
          appliancesFound.push(text);
        }
      });
    }
  }

  // Also check common appliances mentioned in cards or tables
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  // Extract prices if any table exists
  const priceRows = [];
  const priceMatches = html.match(/₹\s*[0-9]+(?:[–-][0-9]+)?/g);

  // Extract brand
  const brand = p.brandName;
  const category = p.category;

  pageAnalysis.push({
    file: filePath,
    category: category,
    brand: brand,
    brandSlug: p.brandSlug,
    h1: h1,
    appliances: appliancesFound,
    priceCount: priceMatches ? priceMatches.length : 0
  });
});

console.log(`Successfully analyzed ${pageAnalysis.length} pages.`);
// Group by category
const catCounts = {};
pageAnalysis.forEach(pa => {
  catCounts[pa.category] = (catCounts[pa.category] || 0) + 1;
});
console.log('Categories breakdown:', catCounts);

// Look at some service center appliances
const sampleSc = pageAnalysis.filter(pa => pa.category === 'service-center').slice(0, 5);
console.log('Sample Service Center appliances found:');
sampleSc.forEach(sc => {
  console.log(`- ${sc.brand} (${sc.file}):`, sc.appliances);
});

fs.writeFileSync('./scripts/page_analysis_output.json', JSON.stringify(pageAnalysis, null, 2), 'utf8');
