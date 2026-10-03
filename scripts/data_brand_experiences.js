// Illustrative Customer Service Experiences for All 54 Brands
// Strictly 100% simple English, no Tamil, no Tanglish, no Hindi
// Localized to verified Karur neighborhoods
// One experience per major appliance the brand actually has

const brands = require('./data_brands_info.js');

// Approved Karur localities for rotation
const localities = [
  "Pasupathipalayam", "Kagithapuramam", "Kovai Road", "Thanthonimalai", "Vengamedu",
  "Inam Karur", "Vennaimalai", "Rayanur", "Sengunthapuram",
  "Sukkaliyur", "Collectorate & Arts College Road", "Thorakkalpatti", "Periya Andankovil",
  "Vaiyapuri Nagar", "Velayuthampalayam", "Vangal", "Mayanur", "Salem Bypass Road"
];

const experiences = {};

brands.forEach((b, index) => {
  experiences[b.slug] = {};
  let locIdx = (index * 3) % localities.length;

  if (b.hasAC) {
    const loc = localities[locIdx % localities.length];
    locIdx++;
    experiences[b.slug].ac = {
      locality: loc,
      title: `${b.name} Split AC Cooling Problem Solved in ${loc}`,
      story: `A resident in ${loc} reported that their ${b.name} split air conditioner was running continuously without dropping the bedroom temperature during the afternoon. Our local technician visited the house and checked the system with testing meters. The outdoor condenser coil was choked with dry road dust and the run capacitor had degraded in capacitance. After explaining the fault and cost to the homeowner, the technician replaced the capacitor with a compatible component and washed the condenser coil. Chilled airflow resumed immediately and the compressor cut off at the set temperature.`
    };
  }

  if (b.hasFridge) {
    const loc = localities[locIdx % localities.length];
    locIdx++;
    experiences[b.slug].fridge = {
      locality: loc,
      title: `${b.name} Refrigerator Cooling Imbalance Repaired in ${loc}`,
      story: `A family residing near ${loc} contacted us because their ${b.name} frost-free refrigerator had ice buildup in the freezer while the lower fresh food compartment remained warm, causing milk to spoil. The technician inspected the back cooling panel and discovered that the defrost bimetal sensor had failed, allowing thick frost to choke the air circulation duct. After the customer approved the estimate, the technician replaced the defrost sensor and cleared the iced airflow passage using warm air. Normal temperature balance was restored across both cabins.`
    };
  }

  if (b.hasWM) {
    const loc = localities[locIdx % localities.length];
    locIdx++;
    experiences[b.slug].wm = {
      locality: loc,
      title: `${b.name} Washing Machine Spin and Drain Rectification in ${loc}`,
      story: `A customer in ${loc} scheduled an inspection for their ${b.name} washing machine after the tub stopped spinning and water remained trapped inside during the final rinse cycle. Our technician arrived at the residence, inspected the drain assembly, and found small coin and lint debris obstructing the pump impeller along with a worn motor drive belt. The technician cleared the pump chamber and installed a new drive belt with customer permission. The washer was tested through a full spin cycle and drained smoothly without vibration.`
    };
  }

  if (b.hasTV) {
    const loc = localities[locIdx % localities.length];
    locIdx++;
    experiences[b.slug].tv = {
      locality: loc,
      title: `${b.name} Smart TV Dark Display and Backlight Repair in ${loc}`,
      story: `A home in ${loc} had a problem where their ${b.name} smart LED television had clear audio playback from the set-top box, but the screen stayed completely dark. The technician visited the residence and carried out a backlight strip test using an LED tester. Several LED beads in the backlight array had burnt out due to voltage fluctuations. The technician provided a clear cost estimate for replacing the backlight strips. Following customer confirmation, fresh LED strips were fitted and tested for even screen brightness and natural picture contrast.`
    };
  }
});

module.exports = experiences;
