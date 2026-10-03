const fs = require('fs');
const path = require('path');
const urlMap = require('./build_url_map.js');
const helpers = require('./karur_content_helpers.js');
const { applySubstitutions } = require('./karur_substitutions.js');

const brandDisplayNames = {
  'acer': 'Acer',
  'acerpure': 'Acerpure',
  'aiwa': 'Aiwa',
  'akai': 'Akai',
  'bajaj': 'Bajaj',
  'blue-star': 'Blue Star',
  'bosch': 'Bosch',
  'bpl': 'BPL',
  'carrier': 'Carrier',
  'daewoo': 'Daewoo',
  'daikin': 'Daikin',
  'electrolux': 'Electrolux',
  'godrej': 'Godrej',
  'haier': 'Haier',
  'havells': 'Havells',
  'hisense': 'Hisense',
  'hitachi': 'Hitachi',
  'hyundai': 'Hyundai',
  'ifb': 'IFB',
  'iffalcon': 'iFFALCON',
  'intex': 'Intex',
  'kelvinator': 'Kelvinator',
  'kenstar': 'Kenstar',
  'kodak': 'Kodak',
  'liebherr': 'Liebherr',
  'lloyd': 'Lloyd',
  'mi': 'Mi',
  'micromax': 'Micromax',
  'midea': 'Midea',
  'mitsubishi': 'Mitsubishi',
  'motorola': 'Motorola',
  'o-general': 'O-General',
  'oneplus': 'OnePlus',
  'onida': 'Onida',
  'panasonic': 'Panasonic',
  'philips': 'Philips',
  'redmi': 'Redmi',
  'samsung': 'Samsung',
  'sansui': 'Sansui',
  'sanyo': 'Sanyo',
  'sharp': 'Sharp',
  'siemens': 'Siemens',
  'sony': 'Sony',
  'tcl': 'TCL',
  'thomson': 'Thomson',
  'toshiba': 'Toshiba',
  'videocon': 'Videocon',
  'voltas': 'Voltas',
  'voltas-beko': 'Voltas Beko',
  'vu': 'Vu',
  'vw': 'VW',
  'whirlpool': 'Whirlpool',
  'white-westinghouse': 'White Westinghouse',
  'xiaomi': 'Xiaomi'
};

function getFileInfo(relPath) {
  const norm = relPath.replace(/\\/g, '/');
  let category = 'root';
  let brandSlug = null;
  let brandName = null;

  if (norm.startsWith('ac/')) {
    category = 'ac';
    const base = norm.replace('ac/', '').replace('-ac-repair-service-in-karur.html', '');
    if (base !== 'ac-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    }
  } else if (norm.startsWith('fridge/')) {
    category = 'fridge';
    const base = norm.replace('fridge/', '').replace('-refrigerator-repair-service-in-karur.html', '');
    if (base !== 'refrigerator-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    }
  } else if (norm.startsWith('washing-machine/')) {
    category = 'washing-machine';
    const base = norm.replace('washing-machine/', '').replace('-washing-machine-repair-service-in-karur.html', '');
    if (base !== 'washing-machine-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    }
  } else if (norm.startsWith('tv/')) {
    category = 'tv';
    const base = norm.replace('tv/', '').replace('-tv-repair-service-in-karur.html', '');
    if (base !== 'tv-repair-service-in-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    }
  } else if (norm.startsWith('servicecenter/')) {
    category = 'service-center';
    const base = norm.replace('servicecenter/', '').replace('-service-center-karur.html', '');
    if (base !== 'home-appliance-service-center-karur.html') {
      brandSlug = base;
      brandName = brandDisplayNames[brandSlug] || brandSlug;
    }
  }

  return { category, brandSlug, brandName };
}

function findLocalitySectionBounds(content) {
  // 1. Look for id="localitiesSection"
  const idMatch = content.match(/<section[^>]*id=["']localitiesSection["'][^>]*>[\s\S]*?<\/section>/i);
  if (idMatch) {
    return { start: idMatch.index, end: idMatch.index + idMatch[0].length };
  }
  // 2. Look for candidate headings
  const candidates = [
    'Service Center Areas in Karur',
    'Repair Near Me in Karur',
    'Service Near Me in Karur',
    'Across Karur Localities',
    'Karur Localities',
    'Areas We Cover in and Around Karur'
  ];
  for (const cand of candidates) {
    const idx = content.indexOf(cand);
    if (idx !== -1) {
      const sectionStart = content.lastIndexOf('<section', idx);
      const sectionEnd = content.indexOf('</section>', idx);
      if (sectionStart !== -1 && sectionEnd !== -1) {
        return { start: sectionStart, end: sectionEnd + 10 };
      }
    }
  }
  return null;
}

function processHtmlFile(srcRelPath, destRelPath) {
  let content = fs.readFileSync(srcRelPath, 'utf8');
  const info = getFileInfo(srcRelPath);

  // 1. Replace the locality section safely using exact bounds
  if (srcRelPath !== 'sitemap.html') {
    const bounds = findLocalitySectionBounds(content);
    if (bounds) {
      let newSection = '';
      if (info.category === 'ac') newSection = helpers.generateAcLocalitiesSection(info.brandName);
      else if (info.category === 'fridge') newSection = helpers.generateFridgeLocalitiesSection(info.brandName);
      else if (info.category === 'washing-machine') newSection = helpers.generateWmLocalitiesSection(info.brandName);
      else if (info.category === 'tv') newSection = helpers.generateTvLocalitiesSection(info.brandName);
      else if (info.category === 'service-center') newSection = helpers.generateServiceCenterLocalitiesSection(info.brandName);
      else if (info.category === 'root') newSection = helpers.generateIndexLocalitiesSection();

      if (newSection) {
        content = content.slice(0, bounds.start) + newSection + content.slice(bounds.end);
      }
    }
  }

  // 2. Apply all contextual phrase, locality, climate, URL, domain, and phone substitutions
  content = applySubstitutions(content);

  // 3. Remove/replace manufacturer AI marketing model references if present
  content = content.replace(/\bAI Inverter\b/g, 'Smart Inverter');
  content = content.replace(/\bAI Ultra-Inverter\b/g, 'Ultra-Inverter');
  content = content.replace(/\bThinQ AI\b/g, 'ThinQ Smart');
  content = content.replace(/\bGlo AI\b/g, 'Glo Smart Processor');

  // 4. Update Schema JSON-LD details explicitly
  content = content.replace(/"addressLocality":\s*"[^"]*"/g, '"addressLocality": "Karur"');
  content = content.replace(/"postalCode":\s*"[^"]*"/g, '"postalCode": "639001"');
  content = content.replace(/"latitude":\s*[\d.]+/g, '"latitude": 10.9601');
  content = content.replace(/"longitude":\s*[\d.]+/g, '"longitude": 78.0766');

  // 5. Ensure all internal links are rewritten to the new Karur filenames
  for (const [oldRel, newRel] of Object.entries(urlMap)) {
    if (oldRel !== newRel) {
      const oldFilename = path.basename(oldRel);
      const newFilename = path.basename(newRel);
      content = content.split(oldFilename).join(newFilename);
      content = content.split(`/${oldRel}`).join(`/${newRel}`);
    }
  }

  // 6. Write to destination file
  const destFullPath = path.resolve(__dirname, '..', destRelPath);
  const destDir = path.dirname(destFullPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.writeFileSync(destFullPath, content, 'utf8');

  // 7. If the file was renamed, remove the old file
  if (srcRelPath !== destRelPath) {
    const srcFullPath = path.resolve(__dirname, '..', srcRelPath);
    if (fs.existsSync(srcFullPath)) {
      fs.unlinkSync(srcFullPath);
    }
  }
}

function processSitemapXml() {
  const sitemapPath = path.resolve(__dirname, '..', 'sitemap.xml');
  let content = fs.readFileSync(sitemapPath, 'utf8');

  // Replace domain
  content = content.replace(/https:\/\/servicecenterkarur\.com/g, 'https://servicecenterkarur.com');

  // Replace all filenames
  for (const [oldRel, newRel] of Object.entries(urlMap)) {
    const oldBase = path.basename(oldRel);
    const newBase = path.basename(newRel);
    content = content.split(oldBase).join(newBase);
  }

  // Update date to 2026-10-01
  content = content.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, '<lastmod>2026-10-01</lastmod>');

  fs.writeFileSync(sitemapPath, content, 'utf8');
  console.log('sitemap.xml localized for Karur.');
}

console.log('Starting full Karur localization...');

let processed = 0;
for (const [srcRel, destRel] of Object.entries(urlMap)) {
  processHtmlFile(srcRel, destRel);
  processed++;
}

console.log(`Processed all ${processed} HTML files.`);
processSitemapXml();

console.log('Localization completed.');
