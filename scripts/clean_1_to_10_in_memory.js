const fs = require('fs');
const path = require('path');

const brands = require('./tv_brands_1_to_10.js');

// 1. Samsung
// tvTypes[0].searchIntent
brands[0].tvTypes[0].searchIntent = "Searching for <strong>Samsung Smart TV repair near me</strong> in Karur? We diagnose Crystal 4K screen blackout, HDMI no signal errors, and restarting problems at your doorstep.";
brands[0].tvTypes[1].searchIntent = "Need reliable <strong>Samsung 4K TV repair in Karur</strong>? Our technicians service QLED edge-lit backlights and multi-zone driver boards across Karur homes.";
brands[0].tvTypes[2].searchIntent = "Looking for <strong>Samsung Smart TV service in Karur</strong>? We resolve Tizen OS boot loops, app freezing, and Wi-Fi disconnect issues on-site.";
brands[0].tvTypes[3].searchIntent = "Need quick <strong>Samsung LED TV repair in Karur</strong>? We carry out power board component servicing and speaker replacement across all 60 localities.";

// 2. Sony
brands[1].tvTypes[0].searchIntent = "Searching for certified <strong>Sony TV repair in Karur</strong>? We diagnose Bravia XR OLED panel lines, cognitive processor errors, and power shutoff at your home.";
brands[1].tvTypes[1].searchIntent = "Looking for experienced <strong>Sony TV technician near me</strong> in Karur? We resolve Triluminos 4K red light 6-blink errors, Wi-Fi drops, and backlight faults on-site.";
brands[1].tvTypes[2].searchIntent = "Need fast <strong>Sony Bravia TV service in Karur</strong>? Our team repairs Full HD LED backlights, G-Board power circuits, and acoustic sound units directly at your home.";

// 3. Panasonic
brands[2].tvTypes[0].searchIntent = "Searching for <strong>Panasonic Smart TV repair in Karur</strong>? We diagnose Hexa Chroma 4K color distortion, Android boot loop, and HDMI sync drops on-site.";
brands[2].tvTypes[1].searchIntent = "Need dependable <strong>Panasonic LED TV repair near me</strong> in Karur? We test TNPA power boards, replace direct-lit LED arrays, and repair speaker rattle at your doorstep.";
brands[2].tvTypes[2].searchIntent = "Looking for skilled <strong>Panasonic TV technician near me</strong> in Karur? We check IPS panel VGH/VGL voltages, fix horizontal lines, and service T-Con boards at home.";
brands[2].tvTypes[0].desc = "Panasonic 4K Ultra HD televisions feature Hexa Chroma Drive for natural 6-color reproduction. Corrupted firmware updates or cache build-up can cause the TV to freeze on the Panasonic logo or fail to stream apps.";
brands[2].tvTypes[0].checks = "Inspects Hexa Chroma logic rail voltages, resets Android system cache, and checks Wi-Fi receiver card.";
brands[2].problems[5].val3 = "Tests the infrared photodiode signal line and checks 3.3V standby voltage with a multimeter, replacing the front sensor eye if burned.";

// 4. Philips
brands[3].tvTypes[0].searchIntent = "Searching for specialized <strong>Philips TV repair in Karur</strong>? Our technicians service Ambilight projection arrays, Saphi OS motherboards, and 4K displays across Karur homes.";
brands[3].tvTypes[1].searchIntent = "Need quick <strong>Philips Smart TV repair in Karur</strong>? We fix Saphi OS boot loops, app freezing, and Wi-Fi disconnect issues on-site.";
brands[3].tvTypes[2].searchIntent = "Looking for trusted <strong>Philips LED TV repair near me</strong> in Karur? We replace micro-lensed LED strips, repair dual-capacitor power boards, and fix distorted speakers on-site.";
brands[3].tvTypes[2].desc = "Popular 32-inch and 43-inch Philips Full HD televisions widely used across Karur. Voltage fluctuations during power cuts can damage filter capacitors on the SMPS board or cause speakers to distort.";

// 5. Toshiba
brands[4].tvTypes[0].searchIntent = "Need dependable <strong>Toshiba Smart TV repair near me</strong> in Karur? We inspect REGZA 4K display blackouts, VIDAA reboot loops, and HDMI sync drops on-site.";
brands[4].tvTypes[1].searchIntent = "Looking for certified <strong>Toshiba Smart TV repair in Karur</strong>? We address VIDAA OS app buffering, Wi-Fi disconnects, and REGZA Engine motherboard errors on-site.";
brands[4].tvTypes[2].searchIntent = "Looking for reliable <strong>Toshiba LED TV repair in Karur</strong>? We test secondary power supply rails, install matched REGZA backlight strips, and repair CEVO speakers on-site.";
brands[4].tvTypes[0].desc = "Toshiba REGZA 4K televisions (C350L, M550L series) utilize the REGZA Engine 4K upscaler for clear video. When high-brightness backlight diode strings burn out over years of use, sound plays normally while the display remains completely black.";
brands[4].tvTypes[2].desc = "Popular 32-inch and 43-inch Toshiba LED televisions widely used across Karur living rooms. Lightning surges and power cuts frequently affect the input power supply, or internal speakers develop rattling noises.";

// 6. Sharp
brands[5].tvTypes[0].searchIntent = "Searching for skilled <strong>Sharp TV repair near me in Karur</strong>? Our technicians test Aquos 4K lamp error circuits, UV2A panel drive lines, and SMPS power boards at home.";
brands[5].tvTypes[1].searchIntent = "Need trusted <strong>Sharp Smart TV service in Karur</strong>? We service Android OS boot loops, Wi-Fi disconnects, and X4 Master Engine logic boards at your premises.";
brands[5].tvTypes[2].searchIntent = "Need prompt <strong>Sharp LED TV repair in Karur</strong>? We repair Aquos power supply units, replace UV2A backlight arrays, and service speaker cones at home.";
brands[5].tvTypes[1].desc = "Sharp Smart TVs run Android TV or Sharp smart platform for streaming. Firmware update interruptions, memory wear, or voltage drops can freeze Sharp Aquos TVs on the opening logo or disable wireless networking.";
brands[5].tvTypes[2].desc = "Popular 32-inch and 40-inch Sharp Full HD LED models widely used in Karur homes. Voltage spikes frequently trigger Sharp Aquos lamp error circuits, blow input fuses, or degrade speaker sound.";

// 7. Haier
brands[6].tvTypes[0].searchIntent = "Looking for reliable <strong>Haier Smart TV service in Karur</strong>? Our technicians fix Google TV startup freezes, Bluetooth voice remote drops, and backlight outages at home.";
brands[6].tvTypes[1].searchIntent = "Looking for prompt <strong>Haier LED TV service in Karur</strong>? We service combo motherboards, replace direct-lit LED backlight strips, and fix internal audio drivers on-site.";
brands[6].tvTypes[2].searchIntent = "Searching for an experienced <strong>Haier TV technician near me</strong> in Karur? We resolve Google TV boot loops, Wi-Fi dropouts, and Bluetooth remote unpairing on-site.";
brands[6].tvTypes[2].desc = "Haier Smart LED televisions running Google TV operating software. Storage partition corruption or memory fatigue can cause endless restart loops or prevent Wi-Fi from turning on.";
brands[6].problems[4].val3 = "Measures 3.3V DC rail to the wireless transceiver socket and replaces the internal Wi-Fi card if antenna is dead.";

// 8. Sansui
brands[7].tvTypes[0].searchIntent = "Searching for prompt <strong>Sansui TV repair service in Karur</strong>? We test 4K Pro DLED strip current, Android smart boot cycles, and power board regulators at your doorstep.";
brands[7].tvTypes[1].searchIntent = "Need experienced <strong>Sansui Smart TV technician near me</strong> in Karur? We resolve Android TV app crashes, Wi-Fi dropouts, and audio amp distortions at your home.";
brands[7].tvTypes[2].searchIntent = "Looking for affordable <strong>Sansui LED TV repair near me</strong> in Karur? We service DLED power boards on-site, install matched backlight diode arrays, and replace rattling stereo box speakers.";
brands[7].tvTypes[0].desc = "Sansui 4K Pro displays deliver high dynamic contrast through DLED illumination. When high-power backlight strips fail after extensive use, dialogue continues playing while the picture goes completely dark.";

// 9. Videocon
brands[8].tvTypes[0].searchIntent = "Searching for <strong>Videocon TV repair near me</strong> in Karur? We service Liquid Luminous LED panels, DDB satellite tuners, and dual-rail power supplies on-site.";
brands[8].tvTypes[1].searchIntent = "Need quick <strong>Videocon LED TV service in Karur</strong>? Our technicians fix sound with black screen, standby red light lockup, and loose HDMI ports at home.";
brands[8].tvTypes[2].searchIntent = "Looking for expert <strong>Videocon TV technician near me</strong> in Karur? We diagnose DDB satellite tuner signal loss, speaker distortion, and power board cutoffs on-site.";
brands[8].tvTypes[1].desc = "Popular 32-inch and 40-inch Videocon LED televisions widely used across Karur. Voltage spikes frequently blow input diodes on Videocon dual-rail power boards or damage satellite tuner circuits.";

// 10. Xiaomi
brands[9].tvTypes[0].searchIntent = "Need expert <strong>Xiaomi 4K TV repair in Karur</strong>? We repair Mi TV 4A/4X/5X backlight arrays, eMMC firmware corruptions, and PatchWall boot loops on-site.";
brands[9].tvTypes[1].searchIntent = "Looking for certified <strong>Xiaomi Smart TV service in Karur</strong>? Our technicians resolve Mi logo freezing, Bluetooth voice remote unpairing, and Wi-Fi disconnects on-site.";
brands[9].tvTypes[2].searchIntent = "Searching for trusted <strong>Xiaomi TV technician near me</strong> in Karur? We repair unified combo power boards, replace direct-lit LED strips, and service 20W stereo speakers on-site.";
brands[9].tvTypes[2].desc = "Popular 32-inch Mi TV 4A and Horizon models featuring unified combo motherboards. Thunderstorms and power fluctuations frequently damage input power capacitors or cause speaker audio distortion.";

// Check sentence duplicates among 1-10
function getSentences(obj, brandName) {
  let s = [];
  const text = JSON.stringify(obj);
  const normalized = text.toLowerCase().replace(new RegExp(brandName.toLowerCase(), 'g'), 'BRAND');
  const matches = normalized.match(/[^.!?]+[.!?]+/g) || [];
  return matches.map(m => m.trim()).filter(m => m.length > 25);
}
const sentenceMap = {};
brands.forEach(b => {
  const sents = getSentences({ tvTypes: b.tvTypes, problems: b.problems }, b.name);
  sents.forEach(s => {
    if (!sentenceMap[s]) sentenceMap[s] = [];
    if (!sentenceMap[s].includes(b.name)) sentenceMap[s].push(b.name);
  });
});
const duplicates = Object.entries(sentenceMap).filter(([s, bs]) => bs.length > 1);
console.log('Duplicates in brands 1-10 after update:', duplicates.length);
if (duplicates.length > 0) {
  duplicates.forEach(([s, bs]) => console.log('-', bs.join(', '), ':', s.substring(0, 80)));
  process.exit(1);
}

// Write the clean file
const fileContent = 'module.exports = ' + JSON.stringify(brands, null, 2) + ';\n';
fs.writeFileSync(path.resolve(__dirname, 'tv_brands_1_to_10.js'), fileContent, 'utf8');
console.log('Successfully wrote tv_brands_1_to_10.js with 0 duplicate sentences!');
