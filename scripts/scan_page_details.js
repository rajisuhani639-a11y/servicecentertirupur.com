const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('./scripts/coimbatore_pages_list.json', 'utf8'));

const detailedPages = pages.map(p => {
  const filePath = p.newRel;
  const html = fs.readFileSync(filePath, 'utf8');

  // Check appliances in section
  const appSectionMatch = html.match(/<section[^>]*id=["']appliances["'][^>]*>([\s\S]*?)<\/section>/i)
    || html.match(/Home Appliances We Service[\s\S]*?<\/section>/i);

  const appliances = [];
  if (appSectionMatch) {
    const headingMatches = appSectionMatch[0].match(/<h[34][^>]*>(.*?)<\/h[34]>/gi);
    if (headingMatches) {
      headingMatches.forEach(h => {
        const text = h.replace(/<[^>]+>/g, '').trim();
        if (text && !appliances.includes(text)) {
          appliances.push(text);
        }
      });
    }
  }

  // Extract any model/series keywords from the page
  // E.g. Digital Inverter, Frost Free, Front Load, Top Load, Split AC, Inverter AC, QLED, OLED, 4K, Smart TV, Twin Cooling, 6th Sense, Direct Drive, etc.
  const techKeywords = [];
  const knownTech = [
    'Digital Inverter', 'Direct Drive', 'Inverter Direct Drive', 'EcoBubble', 'Twin Cooling Plus',
    'AI Direct Drive', 'TurboWash', 'Smart Inverter', 'Dual Inverter', 'Triple Inverter',
    '6th Sense', 'IntelliFresh', 'Convertible 5 in 1', 'Convertible 8 in 1', 'Door Cooling+',
    'Frost Free', 'Direct Cool', 'Side by Side', 'French Door', 'Bottom Freezer', 'Double Door', 'Single Door',
    'Front Load', 'Top Load', 'Semi Automatic', 'Fully Automatic', 'Washer Dryer',
    'Split AC', 'Window AC', 'Inverter AC', 'Non-Inverter AC', 'Cassette AC', 'Tower AC',
    '4K Ultra HD', 'Smart TV', 'Android TV', 'Google TV', 'OLED', 'QLED', 'LED TV',
    'Copper Condenser', 'Neo Swing', 'Purlogix', 'Aqua Energie', 'Cradle Wash', '3D Wash'
  ];

  knownTech.forEach(tk => {
    if (html.toLowerCase().includes(tk.toLowerCase())) {
      techKeywords.push(tk);
    }
  });

  return {
    file: filePath,
    category: p.category,
    brand: p.brandName,
    brandSlug: p.brandSlug,
    appliances: appliances,
    techKeywords: techKeywords
  };
});

console.log(`Detailed analysis of ${detailedPages.length} pages ready.`);
fs.writeFileSync('./scripts/detailed_page_info.json', JSON.stringify(detailedPages, null, 2), 'utf8');

// Print summary of appliances per category
const scAppliances = {};
detailedPages.filter(p => p.category === 'service-center').forEach(p => {
  scAppliances[p.brand] = p.appliances;
});
console.log('Sample of Service Center pages and their listed appliances:');
Object.entries(scAppliances).slice(0, 10).forEach(([brand, apps]) => {
  console.log(`${brand}: ${apps.join(', ')}`);
});
