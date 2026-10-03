// Text and Phrase substitutions for Karur -> Kanyakumari localization
// Converts all Karur references to authentic Kanyakumari references and ensures simple human Indian English.

const localityMap = [
  ['Kagithapuramam', 'Suchindram'],
  ['Pasupathipalayam', 'Kottar'],
  ['Thanthonimalai', 'Suchindram'],
  ['Vengamedu', 'Marthandam'],
  ['Inam Karur', 'Thuckalay'],
  ['Sanapiratti', 'Colachel'],
  ['Vennaimalai', 'Vadasery'],
  ['Kovai Road Bypass', 'Cape Road Bypass'],
  ['Kovai Road', 'Cape Road'],
  ['Velayuthampalayam', 'Kulasekharam'],
  ['Salem Bypass Road', 'Trivandrum Highway Road'],
  ['Pugalur Road', 'Court Road'],
  ['Pugalur', 'Karungal'],
  ['Aravakurichi', 'Kuzhithurai'],
  ['Mayanur', 'Aralvaimozhi'],
  ['Puliyur', 'Thingalnagar'],
  ['Sengunthapuram', 'Tower Junction'],
  ['Chinna Andankovil', 'Asaripallam'],
  ['Periya Andankovil', 'Ananthanadarkudy'],
  ['Thorakkalpatti', 'Eraniel'],
  ['Sukkaliyur', 'Chunkankadai'],
  ['Rayanur', 'Konam'],
  ['Sellandipalayam', 'Vettoornimadam'],
  ['Uppidamangalam', 'Boothapandi'],
  ['Krishnarayapuram', 'Thiruvattar'],
  ['Manmangalam', 'Azhagiapandiapuram'],
  ['Vaiyapuri Nagar', 'Carmel Nagar'],
  ['Vangal', 'Agastheeswaram'],
  ['Amaravathi basin Road', 'Thamirabarani Road'],
  ['Light House Corner', 'Tower Junction'],
  ['Bus Stand Area', 'Vadasery Bus Stand Area'],
  ['South Highway Corridor', 'Nagercoil-Cape Corridor'],
  ['Paramathi Road', 'WCC Road'],
  ['Collectorate & Arts College Road', 'Collectorate & Court Road'],
  ['Collectorate Road', 'Collectorate Road Nagercoil'],
  ['Min Nagar', 'Ponnappa Nadar Nagar'],
  ['Aachi Nagar', 'Simon Nagar'],
  ['Periyar Nagar', 'Christopher Nagar'],
  ['Kamarajapuram', 'Vasanth Nagar'],
  ['Anna Nagar South South', 'NGO Colony Nagercoil'],
  ['Anna Nagar South', 'NGO Colony Nagercoil'],
  ['Azad Road', 'KP Road'],
  ['Kagithapuram', 'Mylaudy'],
  ['Thavittupalayam', 'Mandaikadu'],
  ['Thiru Manilayur', 'Parakkai'],
  ['Andankovil West', 'Villukuri'],
  ['Chettipalayam', 'Putheri'],
  ['Somur', 'Erachakulam'],
  ['Koyampalli', 'Chenbagaramanputhur'],
  ['Punjai Thottakurichi', 'Vellamadam'],
  ['Nanparappu', 'Kattathurai'],
  ['Kombupalayam', 'Therakalputhur'],
  ['Pavithram', 'Kappiyarai'],
  ['LGB Nagar', 'Helen Nagar'],
  ['Sanjeevi Nagar', 'Ramavarmapuram'],
  ['Ramakrishnapuram', 'Derik Junction'],
  ['Edayathumangalam', 'Muppandal'],
  ['Emur', 'Thittuvilai'],
  ['Kothur', 'Thadikarankonam'],
  ['Jawahar Nagar', 'Weavers Colony'],
  ['Chinnandankovil East', 'Ozhuginasery'],
  ['Thanthoni', 'Pazhavilai'],
  ['South Ring Road', 'Cape Road Corridor'],
  ['Jawahar Bazaar', 'Court Road'],
  ['Madavilagam', 'Cape Road Junction'],
  ['Nerur', 'Kaliyakkavilai']
];

const phraseReplacements = [
  // URLs & Domains
  [/https:\/\/servicecenterkarur\.com/g, 'https://servicecenterkanyakumari.com'],
  [/servicecenterkarur\.com/g, 'servicecenterkanyakumari.com'],
  [/support@servicecenterkarur\.com/g, 'support@servicecenterkanyakumari.com'],

  // Filenames & Link paths
  [/ac-repair-service-in-karur\.html/g, 'ac-repair-service-in-kanyakumari.html'],
  [/refrigerator-repair-service-in-karur\.html/g, 'refrigerator-repair-service-in-kanyakumari.html'],
  [/washing-machine-repair-service-in-karur\.html/g, 'washing-machine-repair-service-in-kanyakumari.html'],
  [/tv-repair-service-in-karur\.html/g, 'tv-repair-service-in-kanyakumari.html'],
  [/home-appliance-service-center-karur\.html/g, 'home-appliance-service-center-kanyakumari.html'],
  [/-service-center-karur\.html/g, '-service-center-kanyakumari.html'],
  [/-in-karur\.html/g, '-in-kanyakumari.html'],

  // Directional Zones
  [/East Karur/g, 'East Kanyakumari'],
  [/West Karur/g, 'West Kanyakumari'],
  [/North Karur/g, 'North Kanyakumari'],
  [/South Karur/g, 'South Kanyakumari'],

  // Specific landmarks & addresses
  [/171,\s*Jawahar Bazaar Rd,\s*Madavilagam,\s*Karur,\s*Tamil Nadu\s*639001/gi, 'Court Road Junction, Cape Road, Nagercoil, Kanyakumari District, Tamil Nadu 629001'],
  [/Jawahar Bazaar,\s*Kovai Road,\s*Near Bus Stand/gi, 'Court Road Junction, Cape Road, Nagercoil'],
  [/Near Bus Stand & Kovai Road/gi, 'Near Tower Junction & Cape Road'],
  [/historic town center & market lanes/gi, 'historic Nagercoil center & market lanes'],
  [/central bazaar market/gi, 'central Nagercoil bazaar market'],
  [/Government Arts College campus area/gi, 'Collectorate & Court complex area'],
  [/Arts College road/gi, 'Court Road'],
  [/Government Arts College/gi, 'Nagercoil Arts & Science College'],
  [/Amaravathi river basin/gi, 'Thamirabarani river basin'],
  [/Cauvery river bank area/gi, 'Pechiparai canal network area'],
  [/Amaravathi basin/gi, 'Thamirabarani river valley'],
  [/Cauvery barrage/gi, 'Pechiparai reservoir'],
  [/Cauvery river/gi, 'Pechiparai canal'],
  [/Amaravathi river/gi, 'Thamirabarani river'],
  [/Amaravathi/gi, 'Thamirabarani'],
  [/Cauvery/gi, 'Pechiparai'],
  [/Pasupatheeswarar temple/gi, 'Thanumalayan Temple Suchindram'],
  [/Pasupatheeswarar/gi, 'Thanumalayan'],
  [/textile export manufacturing units/gi, 'commercial and residential areas'],
  [/textile manufacturing corridor/gi, 'coastal and trade corridor'],
  [/textile trading hub/gi, 'commercial shopping hub'],
  [/textile market and financial hub/gi, 'commercial market and retail hub'],
  [/textile industry/gi, 'local household needs'],
  [/TNPL paper mill corridor/gi, 'rubber and agro-industrial corridor'],
  [/TNPL main gate/gi, 'rubber factory area'],
  [/paper mill township/gi, 'plantation township'],
  [/paper mill/gi, 'local industries'],

  // Simple Human Indian English (Rules 8 & 9)
  [/\bprompt assistance\b/gi, 'quick help'],
  [/\bdedicated service desk\b/gi, 'local service team'],
  [/\bcustomer support desk\b/gi, 'customer support'],
  [/\bservice desk\b/gi, 'service center'],
  [/\bfacilitate\b/gi, 'help'],
  [/\bcommence service\b/gi, 'start the service'],
  [/\bcommence\b/gi, 'start'],
  [/\bresidential premises\b/gi, 'home'],
  [/\btechnical intervention\b/gi, 'repair work'],
  [/\bcomprehensive assistance\b/gi, 'complete help'],
  [/\bpromptly\b/gi, 'quickly'],
  [/\butilize\b/gi, 'use'],
  [/\bdiagnostic assessment\b/gi, 'checking'],
  [/\bmalfunctioning\b/gi, 'not working properly'],
  [/\brectification\b/gi, 'repair'],
  [/\bexpeditious\b/gi, 'quick'],
  [/\bendeavour\b/gi, 'try'],
  [/\bprovision of services\b/gi, 'service'],

  // City names and Brand names
  [/\bService Center Karur\b/g, 'Service Center Kanyakumari'],
  [/\bSERVICE CENTER KARUR\b/g, 'SERVICE CENTER KANYAKUMARI'],
  [/\bservice center karur\b/g, 'service center kanyakumari'],
  [/\bKarur District\b/g, 'Kanyakumari District'],
  [/\bKarur district\b/g, 'Kanyakumari district'],
  [/\bKarur Town\b/g, 'Nagercoil Town'],
  [/\bKarur town\b/g, 'Nagercoil town'],
  [/\bKarur\b/g, 'Kanyakumari'],
  [/\bKARUR\b/g, 'KANYAKUMARI'],
  [/\bkarur\b/g, 'kanyakumari']
];

function applySubstitutions(content) {
  let result = content;

  // 1. Specific localities replacement first
  for (const [oldLoc, newLoc] of localityMap) {
    if (oldLoc !== newLoc) {
      const regex = new RegExp(`\\b${oldLoc}\\b`, 'g');
      result = result.replace(regex, newLoc);
    }
  }

  // 2. Phrase and regex replacements
  for (const [pattern, replacement] of phraseReplacements) {
    result = result.replace(pattern, replacement);
  }

  return result;
}

module.exports = {
  applySubstitutions,
  phraseReplacements,
  localityMap
};
