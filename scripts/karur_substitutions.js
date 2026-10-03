// Contextual text substitutions for Karur -> Karur localization

const localityMap = [
  ['Kagithapuramam', 'Kagithapuramam'],
  ['Pasupathipalayam', 'Pasupathipalayam'],
  ['Thanthonimalai', 'Thanthonimalai'],
  ['Vengamedu', 'Vengamedu'],
  ['Inam Karur', 'Inam Karur'],
  ['Sanapiratti', 'Sanapiratti'],
  ['Vennaimalai', 'Vennaimalai'],
  ['Kovai Road', 'Kovai Road'],
  ['Velayuthampalayam', 'Velayuthampalayam'],
  ['Salem Bypass Road', 'Salem Bypass Road'],
  ['Pugalur', 'Pugalur'],
  ['Aravakurichi', 'Aravakurichi'],
  ['Mayanur', 'Mayanur'],
  ['Puliyur', 'Puliyur'],
  ['Sengunthapuram', 'Sengunthapuram'],
  ['Chinna Andankovil', 'Chinna Andankovil'],
  ['Periya Andankovil', 'Periya Andankovil'],
  ['Thorakkalpatti', 'Thorakkalpatti'],
  ['Sukkaliyur', 'Sukkaliyur'],
  ['Rayanur', 'Rayanur'],
  ['Sellandipalayam', 'Sellandipalayam'],
  ['Uppidamangalam', 'Uppidamangalam'],
  ['Krishnarayapuram', 'Krishnarayapuram'],
  ['Manmangalam', 'Manmangalam'],
  ['Vaiyapuri Nagar', 'Vaiyapuri Nagar'],
  ['Vangal', 'Vangal'],
  ['Amaravathi basin Road', 'Nerur'],
  ['Light House Corner', 'Light House Corner'],
  ['Bus Stand Area', 'Bus Stand Area'],
  ['South Highway Corridor', 'South Highway Corridor'],
  ['Paramathi Road', 'Paramathi Road'],
  ['Collectorate & Arts College Road', 'Collectorate & Arts College Road'],
  ['Collectorate Road', 'Collectorate Road'],
  ['Min Nagar', 'Min Nagar'],
  ['Aachi Nagar', 'Aachi Nagar'],
  ['Periyar Nagar', 'Periyar Nagar'],
  ['Kamarajapuram', 'Kamarajapuram'],
  ['Anna Nagar South South', 'Anna Nagar South South'],
  ['Anna Nagar South', 'Anna Nagar South South'],
  ['Azad Road', 'Azad Road'],
  ['Kagithapuram', 'Kagithapuram'],
  ['Thavittupalayam', 'Thavittupalayam'],
  ['Thiru Manilayur', 'Thiru Manilayur'],
  ['Andankovil West', 'Andankovil West'],
  ['Chettipalayam', 'Chettipalayam'],
  ['Somur', 'Somur'],
  ['Koyampalli', 'Koyampalli'],
  ['Punjai Thottakurichi', 'Punjai Thottakurichi'],
  ['Nanparappu', 'Nanparappu'],
  ['Kombupalayam', 'Kombupalayam'],
  ['Pavithram', 'Pavithram'],
  ['LGB Nagar', 'LGB Nagar'],
  ['Sanjeevi Nagar', 'Sanjeevi Nagar'],
  ['Ramakrishnapuram', 'Ramakrishnapuram'],
  ['Edayathumangalam', 'Edayathumangalam'],
  ['Emur', 'Emur'],
  ['Kothur', 'Kothur'],
  ['Jawahar Nagar', 'Jawahar Nagar'],
  ['Chinnandankovil East', 'Chinnandankovil East'],
  ['Pugalur Road', 'Pugalur Road'],
  ['Thanthoni', 'Thanthoni'],
  ['South Ring Road', 'South Ring Road']
];

const phraseReplacements = [
  // URLs & Domains
  [/https:\/\/servicecenterkarur\.com/g, 'https://servicecenterkarur.com'],
  [/servicecenterkarur\.com/g, 'servicecenterkarur.com'],
  [/support@servicecenterkarur\.com/g, 'support@servicecenterkarur.com'],

  // Filenames & Link paths
  [/ac-repair-service-in-karur\.html/g, 'ac-repair-service-in-karur.html'],
  [/refrigerator-repair-service-in-karur\.html/g, 'refrigerator-repair-service-in-karur.html'],
  [/washing-machine-repair-service-in-karur\.html/g, 'washing-machine-repair-service-in-karur.html'],
  [/tv-repair-service-in-karur\.html/g, 'tv-repair-service-in-karur.html'],
  [/home-appliance-service-center-karur\.html/g, 'home-appliance-service-center-karur.html'],
  [/-service-center-karur\.html/g, '-service-center-karur.html'],
  [/-in-karur\.html/g, '-in-karur.html'],

  // Directional Zones
  [/East Karur/g, 'East Karur'],
  [/West Karur/g, 'West Karur'],
  [/North Karur/g, 'North Karur'],
  [/South Karur/g, 'South Karur'],

  // Specific landmarks & addresses
  [/Jawahar Bazaar, Kovai Road, Near Bus Stand/g, 'Jawahar Bazaar, Kovai Road, Near Bus Stand'],
  [/Near Bus Stand & Kovai Road/g, 'Near Bus Stand & Kovai Road'],
  [/historic town center & market lanes/g, 'historic town center & market lanes'],
  [/central bazaar market/g, 'central bazaar market'],
  [/Government Arts College campus area/g, 'Government Arts College campus area'],
  [/Arts College road/g, 'Arts College road'],
  [/Government Arts College/g, 'Government Arts College'],
  [/Kovai Road/g, 'Kovai Road'],
  [/Amaravathi river basin/g, 'Amaravathi river basin'],
  [/Cauvery river bank area/g, 'Cauvery river bank area'],
  [/Amaravathi basin/g, 'Amaravathi basin'],
  [/Mayanur Barrage/g, 'Mayanur Barrage'],
  [/Karur Town/g, 'Karur Town'],

  // Tanglish phrases
  [/Karur-la/g, 'Karur-la'],
  [/Karur veetula/g, 'Karur veetula'],
  [/Karur customer-ku/g, 'Karur customer-ku'],
  [/Karur-ku/g, 'Karur-ku'],

  // Brand Name
  [/Service Center Karur/g, 'Service Center Karur'],
  [/service center karur/g, 'service center karur'],

  // Climate / Geography adaptations
  [/Karur climate/gi, 'Karur climate'],
  [/Karur's dry summer heat/gi, "Karur's dry summer heat"],
  [/Karur's hot climate/gi, "Karur's hot climate"],
  [/Karur summer/gi, 'Karur summer'],
  [/Karur homes/gi, 'Karur homes'],
  [/Karur residents/gi, 'Karur residents'],
  [/Karur households/gi, 'Karur households'],
  [/Karur families/gi, 'Karur families'],
  [/Karur area/gi, 'Karur area'],
  [/Karur areas/gi, 'Karur areas'],
  [/Karur district/gi, 'Karur district'],
  [/Karur city/gi, 'Karur city'],

  // Schema Geo Coordinates & Pincode
  [/10\.3673/g, '10.9601'],
  [/77\.9803/g, '78.0766'],
  [/639001/g, '639001'],
  [/639002/g, '639002'],
  [/639004/g, '639004'],
  [/639002/g, '639002'],
  [/639006/g, '639006'],
  [/639006/g, '639006'],
  [/639002/g, '639002'],
  [/639005/g, '639005'],
  [/639114/g, '639114'],
  [/639114/g, '639114'],
  [/639003/g, '639003'],
  [/639201/g, '639201'],
  [/639005/g, '639005'],
  [/639002/g, '639002'],
  [/639003/g, '639003'],
  [/639113/g, '639113'],
  [/639008/g, '639008'],
  [/639003/g, '639003'],
  [/639004/g, '639004'],
  [/639136/g, '639136'],
  [/639114/g, '639114']
];

function applySubstitutions(content) {
  let result = content;

  // 1. First replace specific phrase replacements
  for (const [pattern, replacement] of phraseReplacements) {
    result = result.replace(pattern, replacement);
  }

  // 2. Replace locality names
  for (const [dinLoc, karLoc] of localityMap) {
    const re = new RegExp(dinLoc, 'g');
    result = result.replace(re, karLoc);
  }

  // 3. Clean up any remaining "Karur" (case-preserving)
  result = result.replace(/Karur/g, 'Karur');
  result = result.replace(/karur/g, 'karur');
  result = result.replace(/KARUR/g, 'KARUR');

  // 4. Clean up any accidental double words
  result = result.replace(/Karur/g, 'Karur');

  return result;
}

module.exports = {
  applySubstitutions,
  localityMap,
  phraseReplacements
};
