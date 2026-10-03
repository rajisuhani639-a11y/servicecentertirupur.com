// scripts/generate_all_unique_openings.js
// Generates 100% unique starting sections (<p class="hero-lead">) across all 174 HTML files.
// Rotates through 12 distinct sentence opening patterns with brand + appliance + Erode + keywords.

const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('scripts/site_catalog.json', 'utf8'));
const localities = JSON.parse(fs.readFileSync('scripts/erode_localities.json', 'utf8'));

console.log(`Processing hero openings for ${catalog.length} files...`);

// Clean locality names for natural reading in hero leads
function getCleanLocality(idx) {
  const loc = localities[idx % localities.length];
  return loc.replace(/\s*\(\d+\)/, '').replace(/\s*\([^)]*\)/, '').trim();
}

// Format brand name nicely
function formatBrandName(slug) {
  if (slug === 'all-brands') return 'All Brands';
  if (slug === 'home-appliance') return 'Home Appliance';
  if (slug === 'o-general') return 'O-General';
  if (slug === 'voltas-beko') return 'Voltas Beko';
  if (slug === 'white-westinghouse') return 'White Westinghouse';
  if (slug === 'blue-star') return 'Blue Star';
  if (slug === 'mi') return 'Mi';
  if (slug === 'vw') return 'VW';
  if (slug === 'vu') return 'Vu';
  if (slug === 'lg') return 'LG';
  if (slug === 'ifb') return 'IFB';
  if (slug === 'bpl') return 'BPL';
  if (slug === 'tcl') return 'TCL';
  return slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

// Appliance category problem & keyword pools
const appData = {
  tv: {
    name: 'TV',
    fullName: 'Television',
    repairs: ['TV display repair', 'TV screen repair', 'TV power problem repair', 'TV backlight repair'],
    searches: ['TV repair near me', 'TV service center in Erode', 'television technician in Erode'],
    problems: [
      ['dark screen with normal sound', 'vertical colored lines on screen', 'standby red light blinking'],
      ['TV stuck on logo screen', 'HDMI port not detecting set-top box', 'intermittent audio buzz'],
      ['blank display after power fluctuation', 'backlight flickering constantly', 'auto-restart loop'],
      ['half dark screen', 'remote sensor unresponsive', 'no picture and no sound'],
      ['distorted picture colors', 'panel double images', 'power supply board failure'],
      ['smart TV apps crashing', 'WiFi disconnection issues', 'faint ghost images on display'],
      ['speaker sound cutting off', 't-con board display lines', 'screen freezing unexpectedly'],
      ['motherboard boot failure', 'HDMI no signal message', 'power LED clicking sound']
    ]
  },
  fridge: {
    name: 'refrigerator',
    fullName: 'Refrigerator',
    repairs: ['refrigerator cooling repair', 'fridge gas check', 'compressor checking', 'defrost repair'],
    searches: ['refrigerator repair near me', 'fridge service center in Erode', 'fridge repair near me'],
    problems: [
      ['fridge compartment staying warm', 'heavy frost ice buildup in freezer', 'compressor clicking every few minutes'],
      ['water pooling under vegetable tray', 'condenser fan making rattling noise', 'milk spoiling before evening'],
      ['freezer not making ice', 'loose door rubber gasket', 'cooling dropping during hot afternoons'],
      ['continuous compressor running', 'ice sheets blocking defrost drain', 'mild electric shock on fridge door'],
      ['freezer over-cooling while lower section stays warm', 'thermostat temperature cut-off failure', 'defrost timer stuck'],
      ['unusual humming sound from rear unit', 'refrigerant gas leak in cooling coil', 'PTC starter relay burn'],
      ['capillary tube moisture choking', 'drain pan water overflow', 'digital inverter PCB error'],
      ['cooling loss after power fluctuation', 'freezer door not sealing airtight', 'evaporator fan blade jamming']
    ]
  },
  'washing-machine': {
    name: 'washing machine',
    fullName: 'Washing Machine',
    repairs: ['washing machine drain problem repair', 'spin cycle repair', 'water inlet valve repair', 'drum balance repair'],
    searches: ['washing machine repair near me', 'washing machine service center in Erode', 'washer repair near me'],
    problems: [
      ['machine not draining water out', 'drum refusing to start spin cycle', 'water filling extremely slowly'],
      ['violent thumping vibration during spin', 'door lock latch jammed shut', 'machine stopping midway through wash'],
      ['error code OE or E20 flashing', 'drain pump humming with coin block', 'detergent drawer not flushing soap'],
      ['drum not rotating while motor hums', 'water leaking from bottom cabinet', 'drive belt slipping or snapped'],
      ['pulsator loose and making grinding noise', 'spin tub hitting outer body', 'pressure sensor water level error'],
      ['front load door seal rubber torn', 'water inlet valve continuously trickling', 'inverter motor drive PCB fault'],
      ['rinse cycle taking excessive time', 'unbalanced load error code UE', 'drain hose water backflow'],
      ['control panel buttons unresponsive', 'carbon brush wear on motor', 'agitator not reversing direction']
    ]
  },
  ac: {
    name: 'air conditioner',
    fullName: 'Air Conditioner',
    repairs: ['AC cooling problem repair', 'AC water leakage fix', 'AC gas pressure check', 'capacitor replacement'],
    searches: ['AC repair near me', 'AC service center in Erode', 'air conditioner repair in Erode'],
    problems: [
      ['weak cooling on hot afternoons', 'indoor unit leaking water onto wall', 'outdoor compressor tripping MCB'],
      ['room temperature not dropping', 'outdoor fan motor rattling loudly', 'refrigerant gas leak from copper flare'],
      ['indoor blower blowing foul humid air', 'compressor humming but not starting', 'remote sensor not receiving signal'],
      ['dual run capacitor weak or blown', 'cooling coil frozen with thick ice', 'inverter PCB communication error E5'],
      ['air throw low due to choked filter mesh', 'condenser fins clogged with dust', 'indoor unit making crackling sound'],
      ['compressor shutting off after 10 minutes', 'copper pipe frost buildup', 'drain pipe blocked with algae slime'],
      ['swing flap motor stuck closed', 'fan speed not changing on remote', 'outdoor unit vibrating heavily'],
      ['low refrigerant pressure', 'thermostat sensor cut-off malfunction', 'electrical terminal loose connection']
    ]
  }
};

// Patterns for appliance pages
function buildApplianceOpening(brandName, appCat, fileIdx) {
  const data = appData[appCat];
  if (!data) return null;

  const loc1 = getCleanLocality(fileIdx * 3);
  const loc2 = getCleanLocality(fileIdx * 3 + 1);
  const probSet = data.problems[fileIdx % data.problems.length];
  const p1 = probSet[0];
  const p2 = probSet[1];
  const p3 = probSet[2];
  const repairKw = data.repairs[fileIdx % data.repairs.length];
  const searchKw = data.searches[fileIdx % data.searches.length];

  const patternIdx = fileIdx % 12;

  switch (patternIdx) {
    case 0:
      return `Searching for ${brandName} ${data.name} repair service near me in Erode? If your ${brandName} ${data.name} has ${p1}, ${p2}, or ${p3}, local doorstep checking is available across ${loc1} and ${loc2}. Our local technician visits with testing tools and genuine spare parts for on-site checking.`;
    case 1:
      return `Looking for a ${brandName} ${data.name} service center in Erode? From ${p1} to ${p2} in ${loc1} and nearby ${loc2}, your ${data.name} can be inspected at your home with honest advice and clear price estimates before starting any repair work.`;
    case 2:
      return `Need ${brandName} ${data.name} repair near me? Erode homes around ${loc1} and ${loc2} can get dependable on-site help for ${p1}, ${p2}, and ${p3}. Get fast technician visits and dedicated ${repairKw} at your doorstep.`;
    case 3:
      return `Is your ${brandName} ${data.name} refusing to work properly in Erode? If you are searching for a ${brandName} ${data.name} service center near me for ${p1} near ${loc1} or ${p2} in ${loc2}, this page covers local doorstep diagnosis and ${repairKw}.`;
    case 4:
      return `Facing ${p1} or ${p2} with your ${brandName} ${data.name} in Erode? Our nearby technician provides doorstep inspection across ${loc1}, ${loc2}, and surrounding areas, delivering reliable testing and upfront repair charges.`;
    case 5:
      return `Searching for trusted ${brandName} ${data.name} service near me in Erode? From ${p1} to ${p2}, our local repair team visits homes throughout ${loc1} and ${loc2} equipped with multimeters, gauges, and certified replacement components.`;
    case 6:
      return `Need quick ${brandName} ${data.name} repair in Erode? When your ${brandName} ${data.name} shows ${p1} or stops working near ${loc1}, book a local technician for doorstep checking across ${loc2} with transparent service charges.`;
    case 7:
      return `Looking for dependable ${brandName} ${data.name} repair service near me in Erode? We offer doorstep checking for ${p1}, ${p2}, and ${p3} across ${loc1} and ${loc2} with clear estimates and tested replacement parts.`;
    case 8:
      return `Trouble with your ${brandName} ${data.name} in Erode? Whether it is ${p1} near ${loc1} or ${p2} around ${loc2}, contact our local service team for doorstep support, accurate fault finding, and ${repairKw}.`;
    case 9:
      return `In search of an experienced ${brandName} ${data.name} technician in Erode? If your unit displays ${p1} or ${p2} in ${loc1}, get honest on-site repair at your home with same-day technician availability across ${loc2}.`;
    case 10:
      return `Dealing with ${p1} or ${p2} on your ${brandName} ${data.name} in Erode? Book our local doorstep technician near ${loc1} and ${loc2} for reliable inspection, component testing, and ${repairKw}.`;
    case 11:
      return `Searching for affordable ${brandName} ${data.name} service in Erode? Residents across ${loc1} and ${loc2} can schedule a doorstep inspection for ${p1} or ${p2}, backed by clear pricing and tested spares.`;
  }
}

// Patterns for Service Center pages
function buildSCOpening(brandName, fileIdx) {
  const loc1 = getCleanLocality(fileIdx * 4);
  const loc2 = getCleanLocality(fileIdx * 4 + 2);
  const patternIdx = fileIdx % 10;

  switch (patternIdx) {
    case 0:
      return `Searching for ${brandName} service center near me in Erode? Looking for ${brandName} appliance repair service in Erode? You are at the right place for local appliance checking and repair across ${loc1}, ${loc2}, and all Erode areas.`;
    case 1:
      return `Looking for a dependable ${brandName} service center in Erode? From cooling issues and motor troubles to electronic PCB faults, our local technician visits your home in ${loc1} and ${loc2} with diagnostic tools for on-site checking.`;
    case 2:
      return `Need a ${brandName} service center near me in Erode? Erode households around ${loc1} and ${loc2} can schedule same-day doorstep technician visits for all ${brandName} appliances with upfront price estimates.`;
    case 3:
      return `Is your ${brandName} home appliance giving trouble in Erode? If you need a ${brandName} service center in Erode for inspection, parts checking, or repair near ${loc1} or ${loc2}, our experienced local team provides quick doorstep assistance.`;
    case 4:
      return `Searching for trusted ${brandName} appliance repair service in Erode? Our local service center team covers ${loc1}, ${loc2}, and nearby neighborhoods, diagnosing appliance faults and fitting tested replacement parts at your doorstep.`;
    case 5:
      return `Looking for nearby ${brandName} appliance repair in Erode? Whether you need inspection for your ${brandName} air conditioner, refrigerator, or washing machine in ${loc1} or ${loc2}, get transparent charges and reliable doorstep solutions.`;
    case 6:
      return `Need prompt ${brandName} service center support in Erode? Homes throughout ${loc1}, ${loc2}, and surrounding areas can book on-site checking for ${brandName} appliances with honest diagnosis and fair repair estimates.`;
    case 7:
      return `Trouble with your ${brandName} appliance in Erode? Searching for a ${brandName} service center near me? Our local technicians visit homes across ${loc1} and ${loc2} equipped with multimeters and genuine spares.`;
    case 8:
      return `In search of an experienced ${brandName} service center in Erode? When your ${brandName} appliance shows performance issues or error codes near ${loc1}, book our local Erode technician for doorstep inspection across ${loc2}.`;
    case 9:
      return `Looking for reliable ${brandName} appliance repair near me in Erode? Our local service center provides complete doorstep checking for ${brandName} appliances across ${loc1}, ${loc2}, and all major Erode localities.`;
  }
}

// Hub pages
function buildHubOpening(appCat) {
  if (appCat === 'tv') {
    return `Searching for TV repair service near me in Erode? Looking for all-brand TV service center in Erode? From LED backlight failure and screen vertical lines to motherboard power problems across Perundurai Road and Surampatti, our local television technicians provide on-site diagnosis and repair for all TV brands.`;
  }
  if (appCat === 'fridge') {
    return `Searching for refrigerator repair near me in Erode? Need a fridge service center in Erode for cooling loss, compressor clicking, or ice formation problems? Our local technicians provide doorstep inspection and genuine spare parts across all Erode localities.`;
  }
  if (appCat === 'washing-machine') {
    return `Searching for washing machine repair near me in Erode? Looking for washing machine service center in Erode? If your washer is not draining, spinning, or taking water properly near Veerappanchatram or Thindal, contact our local service team for doorstep checking and repair.`;
  }
  if (appCat === 'ac') {
    return `Searching for AC service near me in Erode? Need an AC repair service in Erode for cooling issues, water leakage, or gas pressure checking across Karungalpalayam and Solar? Our local cooling technicians provide quick doorstep inspection and repair for all AC brands.`;
  }
  if (appCat === 'servicecenter') {
    return `Searching for home appliance service center near me in Erode? Looking for multi-brand appliance repair service in Erode? You are at the right place for local doorstep appliance checking and repair. Whether your AC, refrigerator, washing machine, or TV has cooling faults, water drain issues, or display problems, our experienced technicians provide same-day service across all Erode areas.`;
  }
  return `Searching for reliable home appliance repair service near me in Erode? Our local technicians provide fast doorstep inspection and repair across all major Erode neighborhoods with clear price estimates and tested spares.`;
}

let updated = 0;
const allOpenings = new Map();

catalog.forEach((item, idx) => {
  if (item.file === 'sitemap.html') return;
  const filePath = item.file;
  let content = fs.readFileSync(filePath, 'utf8');

  let newOpening = "";
  const brandName = formatBrandName(item.brandSlug);

  if (item.file === 'index.html') {
    newOpening = `Searching for trusted home appliance repair near me in Erode? Service Center Erode provides doorstep inspection and repair for Air Conditioners, Refrigerators, Washing Machines, and Smart TVs across all 200 Erode localities. Get same-day technician visits with transparent pricing.`;
  } else if (item.brandSlug === 'all-brands' || item.brandSlug === 'home-appliance') {
    newOpening = buildHubOpening(item.app);
  } else if (item.app === 'servicecenter') {
    newOpening = buildSCOpening(brandName, idx);
  } else {
    newOpening = buildApplianceOpening(brandName, item.app, idx);
  }

  // Record for duplicate check
  if (allOpenings.has(newOpening)) {
    console.error(`COLLISION DETECTED between ${item.file} and ${allOpenings.get(newOpening)}!`);
  }
  allOpenings.set(newOpening, item.file);

  // Replace <p class="hero-(lead|copy)">
  content = content.replace(/<p class="hero-(?:lead|copy)">[\s\S]*?<\/p>/i, `<p class="hero-lead">${newOpening}</p>`);
  fs.writeFileSync(filePath, content, 'utf8');
  updated++;
});

console.log(`Successfully updated hero-lead in ${updated} files.`);
console.log(`Total unique openings generated: ${allOpenings.size} out of ${updated}`);
