function getAppCategory(appName) {
  const lower = appName.toLowerCase();
  
  // 1. Dishwasher first (prevents 'washer' inside 'dishwasher')
  if (lower.includes('dishwasher') || lower.includes('dish washer')) return 'dishwasher';

  // 2. Washer dryer & dryers
  if (lower.includes('washer dryer')) return 'washer-dryer';
  if (lower.includes('clothes dryer') || (lower.includes('dryer') && !lower.includes('wash'))) return 'dryer';

  // 3. Washing machine
  if (lower.includes('washing machine') || /\bwasher\b/i.test(lower) || lower.includes('twin tub')) return 'washing-machine';
  
  // 4. AC
  if (/\bac\b/i.test(lower) || lower.includes('air conditioner') || lower.includes('cassette') || lower.includes('ductable')) return 'ac';
  
  // 5. Freezers & Fridges
  if (lower.includes('chest freezer') || lower.includes('deep freezer')) return 'freezer';
  if (lower.includes('fridge') || lower.includes('refrigerator')) return 'fridge';
  
  // 6. TV
  if (/\btv\b/i.test(lower) || lower.includes('television') || lower.includes('smart tv') || lower.includes('qled') || lower.includes('oled')) return 'tv';
  
  // 7. Ovens & Microwaves
  if (lower.includes('built-in oven')) return 'oven';
  if (lower.includes('microwave') || lower.includes('oven')) return 'microwave';
  
  // 8. Water coolers & Air coolers
  if (lower.includes('water cooler') || lower.includes('water dispenser')) return 'water-cooler';
  if (lower.includes('cooler')) return 'air-cooler';
  
  // 9. Purifiers
  if (lower.includes('purifier') && lower.includes('air')) return 'air-purifier';
  if (lower.includes('purifier') && lower.includes('water')) return 'water-purifier';
  if (lower.includes('water purifier') || lower.includes('ro ')) return 'water-purifier';
  
  // 10. Water heater & Geyser
  if (lower.includes('geyser') || lower.includes('water heater')) return 'geyser';

  // 11. Audio
  if (lower.includes('audio') || lower.includes('soundbar') || lower.includes('speaker')) return 'audio';

  // 12. Chimney & Hob
  if (lower.includes('chimney')) return 'chimney';
  if (lower.includes('hob')) return 'hob';

  // 13. Fan
  if (lower.includes('fan') || lower.includes('circulator')) return 'fan';

  // 14. Kitchen appliances
  if (lower.includes('mixer') || lower.includes('grinder') || lower.includes('kitchen')) return 'kitchen-appliance';
  
  return 'general';
}

console.log('Testing categories again:');
console.log('Godrej Washing Machine ->', getAppCategory('Godrej Washing Machine'));
console.log('Godrej Refrigerator ->', getAppCategory('Godrej Refrigerator'));
console.log('Godrej Air Conditioner ->', getAppCategory('Godrej Air Conditioner'));
console.log('Godrej Microwave Oven ->', getAppCategory('Godrej Microwave Oven'));
console.log('Godrej Chest Freezer ->', getAppCategory('Godrej Chest Freezer'));
console.log('Godrej Air Cooler ->', getAppCategory('Godrej Air Cooler'));
console.log('Bosch Dishwasher ->', getAppCategory('Bosch Dishwasher'));
console.log('Bosch Built-in Oven ->', getAppCategory('Bosch Built-in Oven'));
console.log('Bosch Kitchen Chimney ->', getAppCategory('Bosch Kitchen Chimney'));
console.log('Bosch Hob ->', getAppCategory('Bosch Hob'));
console.log('Bajaj Geyser / Water Heater ->', getAppCategory('Bajaj Geyser / Water Heater'));
console.log('Acerpure Water Purifier ->', getAppCategory('Acerpure Water Purifier'));
console.log('Acer Washer Dryer ->', getAppCategory('Acer Washer Dryer'));
console.log('IFB Clothes Dryer ->', getAppCategory('IFB Clothes Dryer'));
console.log('Blue Star Water Cooler ->', getAppCategory('Blue Star Water Cooler'));
console.log('Sony Television ->', getAppCategory('Sony Television'));
console.log('Aiwa Soundbar ->', getAppCategory('Aiwa Soundbar'));
