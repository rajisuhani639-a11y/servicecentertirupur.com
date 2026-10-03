// Master Brand Information & Verified Appliances for 54 Brands
// All brands audited directly from existing /ac/, /fridge/, /washing-machine/, /tv/ sections

const existingLinks = require('./existing_brand_links.json');

const brands = [
  {
    slug: 'acer',
    name: 'Acer',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Television', 'Air Purifier']
  },
  {
    slug: 'acerpure',
    name: 'Acerpure',
    verifiedAppliances: ['Air Conditioner', 'Television', 'Air Purifier', 'Air Circulator Fan', 'Water Purifier']
  },
  {
    slug: 'aiwa',
    name: 'Aiwa',
    verifiedAppliances: ['Television', 'Soundbar', 'Home Audio System']
  },
  {
    slug: 'akai',
    name: 'Akai',
    verifiedAppliances: ['Television', 'Home Audio System', 'Air Cooler']
  },
  {
    slug: 'bajaj',
    name: 'Bajaj',
    verifiedAppliances: ['Air Conditioner', 'Air Cooler', 'Geyser / Water Heater', 'Microwave Oven', 'Mixer Grinder']
  },
  {
    slug: 'blue-star',
    name: 'Blue Star',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Deep Freezer', 'Water Purifier', 'Air Purifier', 'Air Cooler', 'Water Cooler']
  },
  {
    slug: 'bosch',
    name: 'Bosch',
    verifiedAppliances: ['Washing Machine', 'Washer Dryer', 'Refrigerator', 'Dishwasher', 'Microwave Oven', 'Built-in Oven', 'Kitchen Chimney', 'Hob']
  },
  {
    slug: 'bpl',
    name: 'BPL',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television']
  },
  {
    slug: 'carrier',
    name: 'Carrier',
    verifiedAppliances: ['Air Conditioner', 'Air Purifier', 'Cassette AC']
  },
  {
    slug: 'daewoo',
    name: 'Daewoo',
    verifiedAppliances: ['Washing Machine', 'Washer Dryer', 'Microwave Oven']
  },
  {
    slug: 'daikin',
    name: 'Daikin',
    verifiedAppliances: ['Air Conditioner', 'Air Purifier', 'Cassette AC', 'Ductable AC']
  },
  {
    slug: 'electrolux',
    name: 'Electrolux',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Dishwasher', 'Microwave Oven', 'Air Purifier']
  },
  {
    slug: 'godrej',
    name: 'Godrej',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Microwave Oven', 'Chest Freezer', 'Air Cooler']
  },
  {
    slug: 'haier',
    name: 'Haier',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Television', 'Microwave Oven', 'Deep Freezer', 'Water Heater']
  },
  {
    slug: 'havells',
    name: 'Havells',
    verifiedAppliances: ['Air Conditioner', 'Washing Machine', 'Geyser / Water Heater', 'Air Purifier', 'Kitchen Appliances']
  },
  {
    slug: 'hisense',
    name: 'Hisense',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Television', 'Dishwasher']
  },
  {
    slug: 'hitachi',
    name: 'Hitachi',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television', 'Air Purifier']
  },
  {
    slug: 'hyundai',
    name: 'Hyundai',
    verifiedAppliances: ['Television', 'Air Cooler', 'Smart LED TV']
  },
  {
    slug: 'ifb',
    name: 'IFB',
    verifiedAppliances: ['Washing Machine', 'Washer Dryer', 'Clothes Dryer', 'Refrigerator', 'Air Conditioner', 'Microwave Oven', 'Dishwasher', 'Kitchen Chimney', 'Hob', 'Built-in Oven']
  },
  {
    slug: 'iffalcon',
    name: 'iFFALCON',
    verifiedAppliances: ['Television', '4K Google TV', 'QLED TV']
  },
  {
    slug: 'intex',
    name: 'Intex',
    verifiedAppliances: ['Washing Machine', 'Television', 'Air Cooler', 'Home Audio Speaker']
  },
  {
    slug: 'kelvinator',
    name: 'Kelvinator',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Microwave Oven', 'Chest Freezer']
  },
  {
    slug: 'kenstar',
    name: 'Kenstar',
    verifiedAppliances: ['Air Conditioner', 'Washing Machine', 'Air Cooler', 'Geyser / Water Heater', 'Microwave Oven']
  },
  {
    slug: 'kodak',
    name: 'Kodak',
    verifiedAppliances: ['Television', '4K UHD Smart TV', 'QLED TV']
  },
  {
    slug: 'liebherr',
    name: 'Liebherr',
    verifiedAppliances: ['Refrigerator', 'DuoCooling Fridge', 'Side-by-Side Refrigerator', 'Bottom Freezer Refrigerator']
  },
  {
    slug: 'lloyd',
    name: 'Lloyd',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Television', 'Dishwasher', 'Chest Freezer']
  },
  {
    slug: 'mi',
    name: 'Mi',
    verifiedAppliances: ['Television', 'Smart TV', 'Water Purifier', 'Air Purifier']
  },
  {
    slug: 'micromax',
    name: 'Micromax',
    verifiedAppliances: ['Television', 'Smart Android TV', 'LED TV']
  },
  {
    slug: 'midea',
    name: 'Midea',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Dishwasher', 'Microwave Oven', 'Geyser / Water Heater']
  },
  {
    slug: 'mitsubishi',
    name: 'Mitsubishi',
    verifiedAppliances: ['Air Conditioner', 'Inverter Split AC', 'Cassette AC', 'Multi-Split AC']
  },
  {
    slug: 'motorola',
    name: 'Motorola',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Smart Connected Appliances']
  },
  {
    slug: 'o-general',
    name: 'O-General',
    verifiedAppliances: ['Air Conditioner', 'Tropical Inverter Split AC', 'Window AC', 'Cassette AC']
  },
  {
    slug: 'oneplus',
    name: 'OnePlus',
    verifiedAppliances: ['Television', '4K QLED TV', 'Smart Android TV']
  },
  {
    slug: 'onida',
    name: 'Onida',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television', 'Microwave Oven']
  },
  {
    slug: 'panasonic',
    name: 'Panasonic',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Television', 'Microwave Oven', 'Geyser / Water Heater']
  },
  {
    slug: 'philips',
    name: 'Philips',
    verifiedAppliances: ['Television', 'Ambilight 4K TV', 'Smart LED TV', 'Soundbar Audio']
  },
  {
    slug: 'redmi',
    name: 'Redmi',
    verifiedAppliances: ['Television', 'Smart Fire TV', '4K Android TV']
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Television', 'Microwave Oven', 'Dishwasher', 'Air Purifier']
  },
  {
    slug: 'sansui',
    name: 'Sansui',
    verifiedAppliances: ['Air Conditioner', 'Television', 'Smart Google TV', 'LED TV']
  },
  {
    slug: 'sanyo',
    name: 'Sanyo',
    verifiedAppliances: ['Television', 'Kaizen 4K Android TV', 'Smart LED TV']
  },
  {
    slug: 'sharp',
    name: 'Sharp',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television', 'Air Purifier', 'Microwave Oven']
  },
  {
    slug: 'siemens',
    name: 'Siemens',
    verifiedAppliances: ['Washing Machine', 'Washer Dryer', 'Refrigerator', 'Dishwasher', 'Built-in Oven', 'Hob', 'Kitchen Chimney']
  },
  {
    slug: 'sony',
    name: 'Sony',
    verifiedAppliances: ['Television', 'Bravia 4K Google TV', 'OLED TV', 'Soundbar Audio System']
  },
  {
    slug: 'tcl',
    name: 'TCL',
    verifiedAppliances: ['Air Conditioner', 'Washing Machine', 'Television', 'QLED 4K TV', 'Mini-LED TV']
  },
  {
    slug: 'thomson',
    name: 'Thomson',
    verifiedAppliances: ['Washing Machine', 'Semi-Automatic Washer', 'Top Load Fully Automatic Washer']
  },
  {
    slug: 'toshiba',
    name: 'Toshiba',
    verifiedAppliances: ['Refrigerator', 'Washing Machine', 'Washer Dryer', 'Television', 'Microwave Oven', 'Dishwasher']
  },
  {
    slug: 'videocon',
    name: 'Videocon',
    verifiedAppliances: ['Refrigerator', 'Washing Machine', 'Television', 'Air Cooler']
  },
  {
    slug: 'voltas',
    name: 'Voltas',
    verifiedAppliances: ['Air Conditioner', 'Washing Machine', 'Air Cooler', 'Commercial Deep Freezer', 'Water Dispenser']
  },
  {
    slug: 'voltas-beko',
    name: 'Voltas Beko',
    verifiedAppliances: ['Refrigerator', 'Washing Machine', 'Washer Dryer', 'Dishwasher', 'Microwave Oven']
  },
  {
    slug: 'vu',
    name: 'Vu',
    verifiedAppliances: ['Television', 'GloLED TV', 'Masterpiece QLED TV', 'Cinema 4K TV']
  },
  {
    slug: 'vw',
    name: 'VW',
    verifiedAppliances: ['Washing Machine', 'Television', 'Frameless Smart LED TV', '4K Android TV']
  },
  {
    slug: 'whirlpool',
    name: 'Whirlpool',
    verifiedAppliances: ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Washer Dryer', 'Microwave Oven', 'Dishwasher', 'Water Purifier']
  },
  {
    slug: 'white-westinghouse',
    name: 'White Westinghouse',
    verifiedAppliances: ['Washing Machine', 'Semi-Automatic Washer', 'Fully Automatic Washing Machine']
  },
  {
    slug: 'xiaomi',
    name: 'Xiaomi',
    verifiedAppliances: ['Television', 'OLED Vision TV', 'Smart Google TV', 'Air Purifier', 'Water Purifier']
  }
];

// Enrich with existing links
brands.forEach(b => {
  const links = existingLinks[b.slug] || {};
  b.hasAC = !!links.ac;
  b.hasFridge = !!links.fridge;
  b.hasWM = !!links.wm;
  b.hasTV = !!links.tv;
  b.acFile = links.ac || null;
  b.fridgeFile = links.fridge || null;
  b.wmFile = links.wm || null;
  b.tvFile = links.tv || null;
});

module.exports = brands;
