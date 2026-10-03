// Multilingual Customer Service Experiences for All 54 Brands
// Natural mix of Simple English, Natural Tamil, and Karur Tanglish
// Strictly localized to Karur neighborhoods and verified brand appliances

const brands = require('./data_brands_info.js');

const localities = [
  "Pasupathipalayam", "Kagithapuramam", "Kovai Road", "Thanthonimalai", "Vengamedu",
  "Inam Karur", "Vennaimalai", "Rayanur", "Sengunthapuram",
  "Sukkaliyur", "Collectorate & Arts College Road", "Thorakkalpatti", "Periya Andankovil",
  "Vaiyapuri Nagar", "Velayuthampalayam", "Vangal", "Mayanur", "Salem Bypass Road"
];

function generateBrandExperiences(b, index) {
  const cards = [];
  let locIdx = (index * 4) % localities.length;

  // Determine what appliances the brand has
  const hasAC = b.hasAC;
  const hasFridge = b.hasFridge;
  const hasWM = b.hasWM;
  const hasTV = b.hasTV;

  // Card 1: English Experience
  const loc1 = localities[locIdx % localities.length];
  locIdx++;

  if (hasAC) {
    cards.push({
      lang: "English",
      locality: loc1,
      title: `${b.name} Split AC Cooling Inspection in ${loc1}`,
      story: `A resident in ${loc1} noticed that their ${b.name} split air conditioner was running with reduced cooling during the warm afternoon. The technician checked the indoor filters, tested the compressor run capacitor with a multimeter, and found the outdoor condenser fins blocked with road dust. After explaining the required capacitor replacement and coil cleaning to the customer, the service was completed and normal chilled airflow was restored.`
    });
  } else if (hasFridge) {
    cards.push({
      lang: "English",
      locality: loc1,
      title: `${b.name} Refrigerator Temperature Balance Fix in ${loc1}`,
      story: `A family near ${loc1} contacted our service team because their ${b.name} refrigerator was chilling the top freezer normally but vegetables in the lower tray were staying warm. The technician visited the home, checked the defrost circuit, and found the bimetal thermostat faulty. A compatible replacement sensor was installed with upfront customer approval, clearing the airflow duct.`
    });
  } else if (hasWM) {
    cards.push({
      lang: "English",
      locality: loc1,
      title: `${b.name} Washing Machine Drain Fault Resolved in ${loc1}`,
      story: `A household in ${loc1} reported that their ${b.name} washing machine stopped before the final spin cycle with water held in the tub. The technician inspected the drain chamber, removed trapped lint and a coin blocking the impeller, and verified the drain motor operation before completing the visit.`
    });
  } else {
    cards.push({
      lang: "English",
      locality: loc1,
      title: `${b.name} Smart TV Display Troubleshooting in ${loc1}`,
      story: `A customer in ${loc1} had clear audio from their set-top box on their ${b.name} smart LED television, but the display remained dark. Our local technician carried out an LED backlight strip check, identified faulty backlights, and provided an upfront repair estimate before replacing the strips cleanly.`
    });
  }

  // Card 2: Tamil Experience (Natural spoken Tamil)
  const loc2 = localities[locIdx % localities.length];
  locIdx++;

  if (hasFridge) {
    cards.push({
      lang: "தமிழ்",
      locality: loc2,
      title: `${loc2} பகுதியில் ${b.name} பிரிட்ஜ் பழுது நீக்கல்`,
      story: `${loc2} பகுதியில் உள்ள வாடிக்கையாளர் வீட்டில் ${b.name} பிரிட்ஜில் குளிர்ச்சி குறைவாக இருந்ததால் தொடர்பு கொண்டனர். எங்கள் டெக்னீஷியன் நேரில் சென்று ஆய்வு செய்ததில், டிஃப்ராஸ்ட் சென்சார் மற்றும் ஃபேன் மோட்டாரில் தூசு அடைப்பு இருப்பது தெரிந்தது. வாடிக்கையாளரிடம் செலவு விவரங்களை தெளிவாக கூறி, தேவையான உதிரிபாகத்தை மாற்றி சரிசெய்தார். தற்போது பிரிட்ஜ் சீராக இயங்குகிறது.`
    });
  } else if (hasWM) {
    cards.push({
      lang: "தமிழ்",
      locality: loc2,
      title: `${loc2} பகுதியில் ${b.name} வாஷிங் மெஷின் சர்வீஸ்`,
      story: `${loc2} பகுதியில் உள்ள வாடிக்கையாளர், ${b.name} வாஷிங் மெஷின் சுழலும் போது அதிக சத்தம் வருவதாக தெரிவித்தார். டெக்னீஷியன் வந்து டிரம் பெல்ட் மற்றும் பேரிங் பகுதிகளை பரிசோதித்து, சிறிய சீரமைப்பு செய்து பிரச்சனையை தீர்த்தார். இயந்திரம் இப்போது அமைதியாக சுழல்கிறது.`
    });
  } else if (hasAC) {
    cards.push({
      lang: "தமிழ்",
      locality: loc2,
      title: `${loc2} பகுதியில் ${b.name} ஏசி கேஸ் மற்றும் கூலிங் சர்வீஸ்`,
      story: `${loc2} வீட்டில் உள்ள ${b.name} ஏசியில் காற்று மட்டும் வந்து கூலிங் வரவில்லை என்று புகார் அளிக்கப்பட்டது. டெக்னீஷியன் கேஸ் பிரஷர் மற்றும் கேபாசிட்டரை மீட்டரால் சரிபார்த்து பழுதை விளக்கினார். சரியான முறையில் சரிசெய்த பின் குளிர்ந்த காற்று நன்றாக வீசுகிறது.`
    });
  } else {
    cards.push({
      lang: "தமிழ்",
      locality: loc2,
      title: `${loc2} பகுதியில் ${b.name} டிவி பேக்லைட் சரிபார்த்தல்`,
      story: `${loc2} பகுதியில் உள்ள வீட்டில் ${b.name} ஸ்மார்ட் டிவியில் சத்தம் மட்டும் வந்தது, படம் தெரியவில்லை. டெக்னீஷியன் வந்து எல்இடி பேக்லைட் பகுதிகளை டெஸ்டரால் சோதித்து, பழுதான பகுதியை மாற்றினார். வாடிக்கையாளர் மனநிறைவு அடைந்தார்.`
    });
  }

  // Card 3: Tanglish Experience (Karur conversational style)
  const loc3 = localities[locIdx % localities.length];
  locIdx++;

  if (hasWM) {
    cards.push({
      lang: "Tanglish",
      locality: loc3,
      title: `${b.name} Washing Machine Spin Problem Fix in ${loc3}`,
      story: `${loc3}-la irukra customer avanga ${b.name} washing machine-la spin cycle pogala nu call pannanga. Drum rotate aagama error code kaatuchu. Technician spot-ku vandhu drain valve and belt check pannitu, loose aana belt-a proper-aa adjust panni test pannaru. Spot-laye machine perfect-aa spin aaga start aachu.`
    });
  } else if (hasTV) {
    cards.push({
      lang: "Tanglish",
      locality: loc3,
      title: `${b.name} LED TV No Display Problem Solved in ${loc3}`,
      story: `${loc3}-la irundhu customer call pannanga. ${b.name} TV-la sound nalla kekkudhu aana screen full-aa black-aa irukku nu sonnanga. Technician veetukke vandhu check pannadhula backlight strips weak aagirundhadhu. Clear estimate explain pannitu, genuine compatible strips pottu test pannom. Picture clarity super-aa vandhudhu.`
    });
  } else if (hasFridge) {
    cards.push({
      lang: "Tanglish",
      locality: loc3,
      title: `${b.name} Fridge Water Leakage Check in ${loc3}`,
      story: `${loc3} area-la ${b.name} fridge keezha veg tray kitta water leak aagudhu nu sonnanga. Technician check panni drain cup choke aana dust-a clean pannaru. Cooling check pannitu door gasket alignment kooda adjust pannom. Big expense illama problem solve aachu.`
    });
  } else {
    cards.push({
      lang: "Tanglish",
      locality: loc3,
      title: `${b.name} AC Water Dripping Repair in ${loc3}`,
      story: `${loc3}-la ${b.name} split AC indoor unit-la irundhu water drop aagi wall nanayudhu nu call pannanga. Technician vandhu drain pipe blockage-a flush panni clear pannaru. Filter wash panni run panni kaatunadhula cooling-um super-aa irundhadhu.`
    });
  }

  // Card 4: For comprehensive 4-appliance brands, add an extra fourth experience to showcase all categories!
  if (hasAC && hasFridge && hasWM && hasTV) {
    const loc4 = localities[locIdx % localities.length];
    cards.push({
      lang: "Tanglish",
      locality: loc4,
      title: `${b.name} TV Audio-Video Board Check in ${loc4}`,
      story: `${loc4} kitta ${b.name} smart TV restart aagi setup box signal detect pannala nu customer ketaanga. Technician multimeter vechu power supply voltages verify panni loose HDMI connector-a re-solder panni set pannaru. Display and sound smooth-aa work aachu.`
    });
  }

  return cards;
}

const allMultilingualExperiences = {};
brands.forEach((b, idx) => {
  allMultilingualExperiences[b.slug] = generateBrandExperiences(b, idx);
});

module.exports = allMultilingualExperiences;
