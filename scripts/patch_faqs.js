const fs = require('fs');

// 31 unique HDMI answers
const hdmiAnswers = [
  'If your set-top box or gaming console shows No Signal on your Samsung TV, our technician inspects connector pins on-site, resolders loose tracks, or replaces the damaged HDMI socket directly.',
  'When Sony Bravia HDMI ports lose signal, our technician tests the internal HDMI switch IC and re-terminates loose connector contacts right at your home.',
  'For Panasonic TVs showing black screen on HDMI inputs, we inspect physical port solder joints and test 5V signal continuity on the logic board.',
  'On Philips televisions, missing set-top box video is fixed by resoldering loose surface-mount HDMI pins or replacing damaged ESD protection diodes.',
  'If Toshiba REGZA HDMI ports fail to detect streaming devices, our technician checks port ground continuity and services the HDMI controller circuit.',
  'Sharp Aquos HDMI ports with loose pins or no signal are repaired on-site by repairing motherboard circuit tracks or replacing the connector socket.',
  'When Haier bezel-less TV HDMI ports fail to handshake with cable boxes, we inspect the connector pins and replace damaged switch ICs on-site.',
  'For Sansui TVs showing No Signal banner, our technician resolders loose HDMI terminals and checks video scalar input lines directly.',
  'On Videocon televisions, unstable HDMI signal is fixed by cleaning oxidized pins, resoldering tracks, or replacing the physical port socket.',
  'If Mi TV HDMI ports show black screen with set-top boxes, our technician tests the HDMI equalizer chip and replaces damaged connector pins.',
  'For Hitachi televisions displaying input error, our technician inspects the shielded HDMI terminal block and restores loose circuit connections.',
  'On Intex televisions, wobbly HDMI sockets that flicker when touched are repaired by resoldering pin tracks or replacing the physical socket.',
  'When Micromax Canvas HDMI ports lose video sync, we test the signal filter capacitors and replace damaged connector pins on the mainboard.',
  'For Kodak CA PRO televisions, our technician tests the 4K HDMI 2.0 port array and replaces physically damaged connectors directly on-site.',
  'On OnePlus TVs showing black screen across HDMI ports, we inspect the Gamma Engine HDMI receiver chip and repair loose connector solder joints.',
  'If Sanyo Kaizen HDMI ports drop set-top box video, our technician verifies signal voltage lines and resolders loose connector terminals.',
  'For Akai Fire TVs failing to recognize external inputs, we inspect the HDMI switch circuit and replace worn physical port pins on-site.',
  'On Onida televisions showing No Input Detected, our technician checks HDMI port pin tension and replaces damaged connector blocks directly.',
  'If Aiwa Magnifiq HDMI ports fail to communicate with soundbars, we test ARC audio lines and resolder loose terminal tracks on-site.',
  'For TCL QLED televisions, our technician checks HDMI 2.1 high-speed data pairs and replaces damaged connector sockets right at your home.',
  'On iFFALCON TVs showing video dropouts, we test HDMI connector pin alignment and repair damaged solder connections on the mainboard.',
  'If Acer Google TV HDMI ports show black screen, our technician tests the ESD suppression diodes and replaces damaged port pins directly.',
  'For Hisense Tornado TVs with failing HDMI ARC audio, we inspect the physical connector and replace the audio return switch IC on-site.',
  'On BPL televisions showing No Signal with DTH boxes, our technician resolders loose HDMI pins and cleans oxidized internal socket contacts.',
  'If Vu Glo TV HDMI inputs lose connection during video playback, we test port ground lines and replace damaged connector sockets on-site.',
  'For Lloyd televisions with loose HDMI ports, our technician repairs board solder pads and installs fresh model-matched port terminals.',
  'On VW Playwall TVs showing input signal loss, we test the combo board HDMI circuit and resolder loose surface-mount connector pins.',
  'If Acerpure TV HDMI ports fail to detect streaming sticks, our technician inspects 5V pin power and replaces damaged physical connectors.',
  'For Redmi X-Series TVs with HDMI handshake drops, we test the MediaTek input receiver lines and repair loose port connections on-site.',
  'On Mi Horizon televisions, loose HDMI sockets that lose picture when bumped are repaired by reinforcing board solder tracks directly.',
  'If Hyundai WebOS TV HDMI ports show No Connection, our technician checks the HDMI equalizer IC and replaces worn connector pins on-site.'
];

// 31 unique Lines answers
const linesAnswers = [
  'Vertical lines on Samsung screens usually result from failing T-Con boards or loose LVDS ribbons, which our technician tests on-site.',
  'Rainbow stripes across Sony Bravia displays are diagnosed by testing T-Con gamma voltages and inspecting flexible panel connections.',
  'For colored lines on Panasonic Viera screens, our technician checks LVDS cable seating and measures IPS panel gate drive voltages.',
  'Multi-color bands on Philips displays are addressed by testing the timing controller PCB and cleaning display ribbon contacts on-site.',
  'Scanning lines on Toshiba REGZA screens are investigated by testing CEVO timing board outputs and ribbon cable integrity.',
  'Vertical barcode lines on Sharp Aquos panels are inspected for T-Con bias voltage shifts and source driver IC bonding faults.',
  'When Haier TV screens show split lines, our technician measures timing controller lines and inspects ribbon seating on the chassis.',
  'Vertical stripes across Sansui DLED displays are checked by testing T-Con gamma reference lines and cable seating directly.',
  'For vertical lines on Videocon televisions, our technician tests Eyecon timing board voltages and cleans display ribbon contacts.',
  'Thin vertical lines on Mi TVs are diagnosed by testing the T-Con timing chip and inspecting flexible flat display cables on-site.',
  'Green or pink lines on Hitachi IPS panels are checked by measuring VGH and VGL bias voltages on the timing controller board.',
  'Screen lines or white raster on Intex TVs are investigated by inspecting universal scalar timing lines and LVDS connections.',
  'Duplicate or jumping lines on Micromax Canvas displays are checked by testing panel gate driver voltages and ribbon alignment.',
  'Colored stripes on Kodak CA PRO screens are diagnosed by measuring T-Con clock signals and inspecting display flex ribbons.',
  'A vertical line on OnePlus screens is evaluated by testing T-Con mini-LVDS data lines and inspecting panel source driver bonds.',
  'Milky bands on Sanyo Kaizen displays are addressed by checking timing board gamma voltages and reseating ribbon connectors.',
  'Rainbow stripes on Akai Fire TV screens are investigated by testing the T-Con timing controller and inspecting display ribbons.',
  'Horizontal line noise on Onida televisions is checked by testing display flex cable grounding and timing board voltage rails.',
  'Solarized colors or lines on Aiwa Magnifiq displays are diagnosed by testing gamma reference voltages on the T-Con board.',
  'Vertical stripes on TCL QLED screens are inspected by checking AiPQ timing lines and panel source board ribbon connections.',
  'Display lines on iFFALCON televisions are evaluated by testing CSOT panel timing voltages and cleaning ribbon cable contacts.',
  'Fine vertical lines on Acer screens are checked by measuring T-Con clock signals and inspecting frameless ribbon connections.',
  'Multi-colored stripes on Hisense ULED displays are investigated by testing Hi-View timing outputs and panel driver chips.',
  'Vertical lines running through BPL television channels are diagnosed by testing timing controller bias rails on-site.',
  'Image jitter and lines on Vu Glo QLED screens are evaluated by checking Glo Panel timing signals and ribbon cable seating.',
  'Colored bars across Lloyd displays are inspected by measuring Micro Dimming timing voltages and checking flex ribbon tracks.',
  'Display lines on VW Playwall screens are diagnosed by testing combo board scalar outputs and cleaning panel ribbon contacts.',
  'Colored vertical stripes on Acerpure screens are checked by testing timing board voltage rails and inspecting display ribbons.',
  'Double images or lines on Redmi displays are investigated by testing PatchWall timing outputs and source driver IC lines.',
  'Vertical lines across Mi Horizon screens are evaluated by testing bezel-less panel ribbon connections and T-Con bias voltages.',
  'Rainbow stripes on Hyundai WebOS screens are checked by inspecting panel timing lines and cleaning display flex ribbon contacts.'
];

// 31 unique Glass answers
const glassAnswers = [
  'If your Samsung display glass is cracked, replacement glass panel cost usually approaches that of a new television; we advise you honestly before any inspection fee.',
  'When Sony Bravia screen glass is shattered from impact, replacement panel cost is very high; our technician provides honest guidance on whether repair is economical.',
  'For Panasonic TVs with cracked glass, panel replacement is rarely cost-effective compared to buying a replacement set, which we explain upfront.',
  'If Philips screen glass is broken, panel replacement typically costs nearly as much as a new TV; our team provides transparent feasibility advice before inspection.',
  'When Toshiba REGZA glass is shattered, panel replacement is expensive; we advise customers honestly regarding replacement feasibility before taking any fee.',
  'For Sharp Aquos TVs with cracked Japanese glass, panel replacement usually exceeds 70% of TV value; we provide frank advice before arranging visits.',
  'If Haier bezel-less glass is shattered, replacing the display assembly is costly; our technician explains the economics honestly before any service call.',
  'When Sansui display glass is broken, replacement panel cost is close to a new television; we discuss feasibility with you transparently before booking.',
  'For Videocon TVs with cracked display glass, replacement panels are generally not economical; we offer straightforward guidance before inspection.',
  'If Mi TV screen glass is physically broken, glass assembly replacement costs almost as much as a new unit; our team advises you honestly before any charges.',
  'When Hitachi IPS display glass is shattered, panel replacement cost is prohibitive; we explain this clearly before scheduling an on-site visit.',
  'For Intex TVs with cracked LCD glass, buying a replacement TV is usually more economical than panel replacement, which we advise honestly upfront.',
  'If Micromax Canvas screen glass is broken, panel replacement is rarely practical; our desk gives you realistic advice before any diagnostic fee.',
  'When Kodak CA PRO display glass is shattered, replacement panels approach the cost of a new television; we provide clear, honest advice before inspection.',
  'For OnePlus TVs with cracked panel glass, screen replacement is very costly; our customer team explains the financial feasibility before scheduling.',
  'If Sanyo Kaizen display glass is broken by impact, panel replacement cost is high; we discuss options transparently before booking any visit.',
  'When Akai Fire TV screen glass is shattered, panel replacement is usually uneconomical; our desk offers honest advice before any fee is incurred.',
  'For Onida televisions with cracked glass, replacement panel cost is nearly the price of a new set; we explain this upfront before inspection.',
  'If Aiwa Magnifiq screen glass is broken, display panel replacement is rarely economical; our team advises you with complete transparency.',
  'When TCL QLED display glass is shattered, replacement panel cost is close to buying a new TV; our technicians give you frank advice beforehand.',
  'For iFFALCON TVs with cracked glass, screen replacement is costly; our service desk provides honest guidance regarding replacement practicality.',
  'If Acer frameless display glass is broken, panel replacement cost is very high; we discuss feasibility with you candidly before taking up inspection.',
  'When Hisense Tornado display glass is shattered, replacement panel expense is significant; we advise you honestly before any charges are incurred.',
  'For BPL televisions with broken screen glass, panel replacement is rarely economical; our desk provides clear, realistic advice before booking.',
  'If Vu Glo QLED glass is cracked, replacement Glo Panel assemblies are expensive; our team explains the economics honestly before any visit.',
  'When Lloyd display glass is shattered from impact, screen replacement cost approaches a new set; we provide transparent advice before inspection.',
  'For VW televisions with broken glass, replacing the LCD panel is not cost-effective; our helpline offers straightforward advice before any visit.',
  'If Acerpure screen glass is cracked, panel replacement expense is high; our customer desk explains the feasibility honestly before booking.',
  'When Redmi display glass is shattered, screen panel replacement costs almost as much as a new TV; we provide honest advice before inspection.',
  'For Mi Horizon TVs with broken bezel-less glass, replacement assemblies are costly; our desk explains the options transparently before booking.',
  'If Hyundai WebOS panel glass is cracked, screen replacement is rarely economical; our team advises you with complete honesty before any inspection.'
];

// 31 unique Sound answers
const soundAnswers = [
  'Vibrating speaker sound on Samsung TVs is resolved by replacing the downward-firing acoustic drivers with matched units, restoring dialogue clarity.',
  'Buzzing audio on Sony Bravia sets is fixed by replacing the acoustic bass reflex drivers with genuine-spec units for clean sound reproduction.',
  'Rattling noise in Panasonic Viera TVs is eliminated by installing fresh front-firing speaker drivers, restoring distortion-free speech.',
  'Crackling audio in Philips TV enclosures is solved by replacing the internal speaker pair with matched drivers, eliminating cabinet resonance.',
  'Muffled speech from Toshiba REGZA speakers is fixed by installing fresh high-output acoustic drivers for balanced dialogue and background sound.',
  'Vibrating sound on Sharp Aquos TVs is resolved by replacing the bass reflex acoustic drivers with model-matched units on-site.',
  'Speaker buzz on Haier televisions is eliminated by replacing the internal down-firing sound modules, restoring clear dialogue for news and movies.',
  'Cabinet rattle in Sansui televisions is fixed by replacing the stereo acoustic box drivers with fresh units that handle high volume cleanly.',
  'Audio distortion on Videocon TVs is resolved by replacing the high-decibel speaker cones with matched drivers to eliminate buzzing.',
  'Rattling sound from Mi TV 20W speakers is cured by installing a new internal acoustic driver set, restoring balanced stereo sound.',
  'Jarring rattle in Hitachi cabinets is eliminated by replacing the Japanese-tuned sound drivers with fresh matched units on-site.',
  'Crackling audio on Intex televisions is fixed by installing fresh downward-firing acoustic cones, restoring loud and clean voice output.',
  'Distorted speech on Micromax Canvas TVs is resolved by replacing the internal speaker drivers with fresh units for clear audio playback.',
  'Severe speaker buzz on Kodak CA PRO TVs is cured by installing new high-output acoustic drivers, eliminating distortion on high volume.',
  'Crackling bass on OnePlus televisions is fixed by replacing the Dolby Audio tuned speaker drivers with genuine-fit replacements on-site.',
  'Distorted sound on Sanyo Kaizen TVs is resolved by installing fresh acoustic driver units, restoring crisp dialogue for serials and films.',
  'Harsh buzzing on Akai Fire TVs is eliminated by replacing the Japanese acoustic sound drivers with fresh matched units directly at your home.',
  'Heavy vibration in Onida cabinets is resolved by servicing or replacing the Devil s Horn acoustic drivers for punchy, rattle-free audio.',
  'Muffled speech on Aiwa Magnifiq TVs is fixed by installing new Amphitheatre acoustic drivers, restoring wide-stage sound clarity.',
  'Distorted bass on TCL QLED televisions is cured by replacing the internal sound units with matched Onkyo-spec drivers on-site.',
  'Crackling sound on iFFALCON televisions is resolved by replacing the internal stereo box drivers with fresh units for clean dialogue.',
  'Harsh speaker rattle on Acer TVs is fixed by installing fresh 30W high-output acoustic drivers, restoring powerful distortion-free sound.',
  'Buzzing sound from Hisense Tornado soundbars is cured by repairing or replacing the integrated acoustic drivers directly at your home.',
  'Muffled audio on BPL televisions is eliminated by installing fresh stereo speaker drivers, restoring clean dialogue for daily viewing.',
  'Vibrating rattle on Vu Glo televisions is resolved by replacing the 40W soundbar acoustic drivers with genuine-spec units on-site.',
  'Harsh audio buzz on Lloyd televisions is fixed by replacing the front-firing speaker drivers with fresh matched units for clear speech.',
  'Severe speaker rattle on VW televisions is eliminated by installing new stereo acoustic drivers, restoring clean volume for movies.',
  'Vibrating dialogue on Acerpure TVs is resolved by replacing the internal acoustic drivers with fresh units for balanced voice clarity.',
  'Harsh buzzing on Redmi TVs is cured by installing fresh 30W stereo drivers, restoring punchy dialogue without vibration.',
  'Crackling audio on Mi Horizon televisions is fixed by replacing the tuned acoustic drivers with fresh units, restoring crisp stereo output.',
  'Jarring vibration on Hyundai WebOS TVs is resolved by replacing the internal box stereo drivers with fresh units for clear speech.'
];

let code = fs.readFileSync('scripts/generate_perfect_faqs.js', 'utf8');

// Replace the answers block
code = code.replace(/const hdmiAnswers = brands\.map[\s\S]*?;\nconst linesAnswers = brands\.map[\s\S]*?;\nconst glassAnswers = brands\.map[\s\S]*?;\nconst soundAnswers = brands\.map[\s\S]*?;\n/, 
  'const hdmiAnswers = ' + JSON.stringify(hdmiAnswers) + ';\n' +
  'const linesAnswers = ' + JSON.stringify(linesAnswers) + ';\n' +
  'const glassAnswers = ' + JSON.stringify(glassAnswers) + ';\n' +
  'const soundAnswers = ' + JSON.stringify(soundAnswers) + ';\n'
);

// Fix the 3 duplicate questions in bookQ
code = code.replace('"What is the easiest way to book OnePlus TV repair in Karur?",', '"What is the simplest way to book OnePlus TV repair in Karur?",');
code = code.replace('"What is the procedure to book Acer TV repair in Karur?",', '"What steps are required to book Acer TV repair in Karur?",');
code = code.replace('"How can I schedule a Hisense TV technician visit in Karur?",', '"What is the procedure to schedule a Hisense TV technician visit in Karur?",');

fs.writeFileSync('scripts/generate_perfect_faqs.js', code, 'utf8');
console.log('Successfully patched generate_perfect_faqs.js!');
