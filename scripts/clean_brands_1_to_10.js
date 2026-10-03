const fs = require('fs');

let content = fs.readFileSync('scripts/tv_brands_1_to_10.js', 'utf8');

// 1. Toshiba searchIntent
content = content.replace(
  '"Searching for <strong>Toshiba Smart TV repair near me</strong> in Karur? We diagnose REGZA 4K screen blackout, HDMI no signal errors, and restarting problems at your doorstep."',
  '"Need dependable <strong>Toshiba Smart TV repair near me</strong> in Karur? We inspect REGZA 4K display blackouts, VIDAA reboot loops, and HDMI sync drops on-site."'
);

// 2. Haier searchIntent
content = content.replace(
  '"Searching for <strong>Haier Smart TV repair near me</strong> in Karur? We diagnose Bezel-Less 4K screen blackout, HDMI no signal errors, and restarting problems at your doorstep."',
  '"Looking for reliable <strong>Haier Smart TV service in Karur</strong>? Our technicians fix Google TV startup freezes, Bluetooth voice remote drops, and backlight outages at home."'
);

// 3. Sansui searchIntent
content = content.replace(
  '"Searching for <strong>Sansui Smart TV repair near me</strong> in Karur? We diagnose 4K Pro screen blackout, HDMI no signal errors, and restarting problems at your doorstep."',
  '"Searching for prompt <strong>Sansui TV repair service in Karur</strong>? We test 4K Pro DLED strip current, Android smart boot cycles, and power board regulators at your doorstep."'
);

// 4. Sharp searchIntent
content = content.replace(
  '"Looking for <strong>Sharp Smart TV repair near me</strong> in Karur? We resolve Android OS boot loops, app freezing, and Wi-Fi disconnect issues on-site."',
  '"Need trusted <strong>Sharp TV repair in Karur</strong>? We service Aquos UV2A Japanese display panels, inverter cutoff trips, and HDMI handshakes at your premises."'
);

// 5. Philips searchIntent
content = content.replace(
  '"Searching for <strong>Philips 4K TV repair in Karur</strong>? Our technicians service Ambilight backlights and Saphi OS motherboards across Karur homes."',
  '"Looking for specialized <strong>Philips TV service in Karur</strong>? We diagnose Ambilight projection issues, Saphi OS firmware lockups, and dual-capacitor power boards on-site."'
);

// 6. Xiaomi searchIntent
content = content.replace(
  '"Searching for <strong>Xiaomi 4K TV repair in Karur</strong>? Our technicians service PatchWall backlights and combo motherboards across Karur homes."',
  '"Need expert <strong>Xiaomi 4K TV repair in Karur</strong>? We repair Mi TV 4A/4X/5X backlight arrays, eMMC firmware corruptions, and PatchWall boot loops on-site."'
);

// 7. Sharp 4K searchIntent
content = content.replace(
  '"Searching for <strong>Sharp 4K TV repair in Karur</strong>? Our technicians service Aquos UV2A backlights and X4 Master Engine motherboards across Karur homes."',
  '"Searching for skilled <strong>Sharp TV repair near me in Karur</strong>? Our technicians test Aquos 4K lamp error circuits, UV2A panel drive lines, and SMPS power boards at home."'
);

// 8. Philips smart tv searchIntent
content = content.replace(
  '"Need quick <strong>Philips Smart TV service in Karur</strong>? We resolve Saphi OS boot loops, app freezing, and Wi-Fi disconnect issues on-site."',
  '"Need fast <strong>Philips Smart TV repair in Karur</strong>? We fix Saphi OS boot loops, Wi-Fi grayed out errors, and HDMI ARC audio dropouts at your doorstep."'
);

// 9. Toshiba smart tv searchIntent
content = content.replace(
  '"Need quick <strong>Toshiba Smart TV service in Karur</strong>? We resolve VIDAA OS boot loops, app freezing, and Wi-Fi disconnect issues on-site."',
  '"Looking for certified <strong>Toshiba Smart TV repair in Karur</strong>? We address VIDAA OS app buffering, Wi-Fi disconnects, and REGZA Engine motherboard errors on-site."'
);

// 10. Sansui smart tv searchIntent
content = content.replace(
  '"Need quick <strong>Sansui Smart TV service in Karur</strong>? We resolve Android OS boot loops, app freezing, and Wi-Fi disconnect issues on-site."',
  '"Need experienced <strong>Sansui Smart TV technician near me</strong> in Karur? We resolve Android TV app crashes, Wi-Fi dropouts, and audio amp distortions at your home."'
);

// 11. Philips led tv near me
content = content.replace(
  '"Looking for <strong>Philips LED TV repair near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at your doorstep."',
  '"Searching for <strong>Philips LED TV repair near me</strong> in Karur? We replace Ambilight-matched LED strips, repair power supply circuits, and fix distorted speakers on-site."'
);

// 12. Xiaomi led tv near me
content = content.replace(
  '"Looking for <strong>Xiaomi LED TV repair near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at your doorstep."',
  '"Looking for <strong>Xiaomi LED TV repair near me</strong> in Karur? We repair unified combo power boards, replace direct-lit LED strips, and service 20W stereo speakers on-site."'
);

// 13. Sharp desc
content = content.replace(
  '"Software update interruptions or memory wear can cause boot loops or prevent Wi-Fi from connecting."',
  '"Firmware update interruptions, memory wear, or voltage drops can freeze Sharp Aquos TVs on the opening logo."'
);

// 14. Sharp val3 / val2
content = content.replace(
  '"We fix Android boot loop, Wi-Fi disconnect, and remote pairing issues at home."',
  '"We restore Android / Aquos boot integrity, repair Wi-Fi transceiver links, and calibrate remote sensors at home."'
);

// 15. Toshiba backlight desc
content = content.replace(
  '"When high-brightness backlight strips burn out over years of use, sound plays normally while the display remains completely black."',
  '"When Toshiba REGZA direct-lit LED diode strings burn out over years of heavy viewing, channel sound continues while the screen stays dark."'
);

// 16. Toshiba voltage surges desc
content = content.replace(
  '"Voltage surges frequently affect the input power supply, or internal speakers develop rattling noises."',
  '"Sudden voltage spikes during thunderstorms can damage Toshiba REGZA SMPS power capacitors or cause internal speaker buzzing."'
);

// 17. Sharp voltage surges desc
content = content.replace(
  '"Voltage surges frequently affect the input power supply, or internal speakers develop rattling noises."',
  '"Voltage spikes frequently trigger Sharp Aquos lamp error circuits, blow input fuses, or degrade speaker sound."'
);

// 18. Toshiba led tv repair in karur
content = content.replace(
  '"Looking for <strong>Toshiba LED TV repair in Karur</strong>? We repair power supply boards, replace backlight strips, and service speakers at your doorstep."',
  '"Looking for reliable <strong>Toshiba LED TV repair in Karur</strong>? We test secondary power supply rails, install matched REGZA backlight strips, and repair CEVO speakers on-site."'
);

// 19. Sharp repair power supply
content = content.replace(
  '"We repair power supply boards, replace backlight strips, and service speakers at your doorstep."',
  '"We repair Aquos power boards at component level, replace UV2A backlight strips, and service speakers at your premises."'
);

// 20. Sansui repair power supply
content = content.replace(
  '"We repair power supply boards, replace backlight strips, and service speakers at your doorstep."',
  '"We service DLED power boards on-site, install matched backlight diode arrays, and replace rattling stereo box speakers."'
);

// 21. Videocon voltage surges
content = content.replace(
  '"Voltage surges frequently damage input power capacitors or cause speaker audio distortion."',
  '"Voltage spikes frequently blow input diodes on Videocon dual-rail power boards or damage satellite tuner circuits."'
);

// 22. Haier technician near me
content = content.replace(
  '"Looking for <strong>Haier TV technician near me</strong> in Karur? We fix Android boot loop, Wi-Fi disconnect, and remote pairing issues at home."',
  '"Searching for an experienced <strong>Haier TV technician near me</strong> in Karur? We resolve Google TV boot loops, Wi-Fi dropouts, and Bluetooth remote unpairing on-site."'
);

// 23. Sharp led tv repair in karur
content = content.replace(
  '"Need quick <strong>Sharp LED TV repair in Karur</strong>? We repair power supply boards, replace backlight strips, and service speakers at your doorstep."',
  '"Need prompt <strong>Sharp LED TV repair in Karur</strong>? We repair Aquos power supply units, replace UV2A backlight arrays, and service speaker cones at home."'
);

// 24. Haier led tv repair in karur
content = content.replace(
  '"Need quick <strong>Haier LED TV repair in Karur</strong>? We repair power supply boards, replace backlight strips, and service speakers at your doorstep."',
  '"Need quick <strong>Haier LED TV repair in Karur</strong>? We service combo motherboards, replace direct-lit LED backlight strips, and fix internal audio drivers on-site."'
);

fs.writeFileSync('scripts/tv_brands_1_to_10.js', content, 'utf8');
console.log('Successfully patched tv_brands_1_to_10.js!');
