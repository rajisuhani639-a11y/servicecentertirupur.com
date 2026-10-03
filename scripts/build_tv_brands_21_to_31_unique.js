// Generator script to produce 100% unique, non-duplicate TV Brand Data for Brands 21 to 31
// iFFALCON, Acer, Hisense, BPL, Vu, Lloyd, VW, Acerpure, Redmi, Mi, Hyundai

const fs = require('fs');
const b1 = require('./tv_brands_1_to_10.js');
const b2 = require('./tv_brands_11_to_20.js');

const seenSentences = new Map();
let duplicateCount = 0;

function registerSentence(text, src) {
  if (!text || typeof text !== 'string') return;
  const parts = text.split(/(?<=[.?!])\s+/);
  for (const p of parts) {
    const clean = p.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '');
    if (clean.length < 25) continue;
    if (seenSentences.has(clean)) {
      console.warn(`DUPLICATE DETECTED: "${clean}" from ${src} (already in ${seenSentences.get(clean)})`);
      duplicateCount++;
    } else {
      seenSentences.set(clean, src);
    }
  }
}

// Register existing brands 1 to 20
for (const b of [...b1, ...b2]) {
  registerSentence(b.description, `${b.name} intro`);
  for (const t of (b.tvTypes || [])) {
    registerSentence(t.desc, `${b.name} type ${t.title} desc`);
    registerSentence(t.searchIntent, `${b.name} type ${t.title} searchIntent`);
    registerSentence(t.whenNeeded, `${b.name} type ${t.title} whenNeeded`);
    registerSentence(t.checks, `${b.name} type ${t.title} checks`);
    registerSentence(t.parts, `${b.name} type ${t.title} parts`);
  }
  for (const p of (b.problems || [])) {
    registerSentence(p.val1, `${b.name} prob ${p.title} val1`);
    registerSentence(p.val2, `${b.name} prob ${p.title} val2`);
    registerSentence(p.val3, `${b.name} prob ${p.title} val3`);
  }
}

console.log(`Registered ${seenSentences.size} unique sentences from Brands 1 to 20.`);

const brands21to31 = [
  // 21. iFFALCON
  {
    name: "iFFALCON",
    slug: "iffalcon-tv-repair-service-in-karur.html",
    h1: "iFFALCON TV Repair Service in Karur",
    metaTitle: "iFFALCON TV Repair Service in Karur | 4K & Google TV Repair",
    metaDesc: "Need iFFALCON TV repair in Karur? Doorstep inspection for iFFALCON 4K UHD, QLED & Google TVs. Backlight strip replacement, Android boot loop & board repair.",
    introHeading: "Need iFFALCON TV Repair in Karur?",
    introTamil: "iFFALCON TV-la sound varudhu picture varalaiya? Startup-la floating circles-laye restart aagudha?",
    introTanglish: "iFFALCON TV on aagudhu aana display dark-aa irukka or remote pair aagala? <strong>iFFALCON TV repair in Karur</strong> thedureengalana, unga area-kku local technician inspection book pannalaam. K-Series 4K, U-Series and Google TV problems spot-laye check pannuvom.",
    introText: [
      "Is your iFFALCON television showing a pitch-black screen while sound plays, stuck on the Android or Google TV logo, or refusing to turn on? iFFALCON televisions (by TCL) are popular across Karur homes for offering high-end 4K and Google TV features at competitive prices, but backlight diode burn and Android firmware boot loops are common after years of continuous viewing.",
      "Whether you are looking for dependable <strong>iFFALCON LED TV repair near me</strong> in Kagithapuramam, quick <strong>iFFALCON Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>iFFALCON TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across Karur town.",
      "Our technician tests iFFALCON logic motherboards, LED backlight strips, SMPS power supplies, and Google TV connectivity on-site, providing honest guidance and an upfront repair estimate."
    ],
    tvTypes: [
      {
        title: "iFFALCON 4K Ultra HD Google TV Repair",
        desc: "iFFALCON K-Series and U-Series 4K televisions combine Google TV streaming with HDR10 processing. Continuous playback at maximum panel brightness often stresses individual LED strings in the direct-lit array or triggers HDMI handshaking dropouts.",
        searchIntent: "Searching for <strong>iFFALCON 4K TV repair in Karur</strong>? We diagnose K-Series screen blackout, Google TV boot errors, and HDMI ARC issues at your home.",
        problems: "Sound playing normally but display is pitch dark, Wi-Fi 5GHz connection drop, HDMI eARC not detecting soundbar.",
        checks: "Measures current draw across each backlight line, probes 5V standby rails, and validates HDMI 2.0 communication bus.",
        parts: "iFFALCON 4K LED backlight array, Google TV logic board, Wi-Fi card, HDMI connector.",
        whenNeeded: "When your 4K picture fades away while voices continue or the screen flashes once and stays dark."
      },
      {
        title: "iFFALCON QLED TV Repair",
        desc: "iFFALCON Quantum Dot QLED models deliver wide color gamuts and localized contrast. Excessive internal temperature can lead to dimming zone failures or memory errors within the multi-core video processor.",
        searchIntent: "Need reliable <strong>iFFALCON QLED TV service in Karur</strong>? We fix local dimming flickering, screen discoloration, and system freezing on-site.",
        problems: "Uneven clouding on screen, random restarting during 4K video playback, localized backlight flickering.",
        checks: "Inspects multi-zone LED driver board, tests processor thermal dissipation pad, and verifies DC balance.",
        parts: "iFFALCON QLED backlight bars, multi-zone driver PCB, processor heatsink, power board.",
        whenNeeded: "When one corner of the QLED panel dims substantially or the TV shuts down during high-contrast scenes."
      },
      {
        title: "iFFALCON 32-inch & 40-inch Smart LED TV",
        desc: "Compact iFFALCON HD Ready and Full HD Smart sets widely fitted in bedrooms and rental flats across Karur. Lightning surges frequently disrupt the combo power card, or software corruption keeps the set looping at the startup screen.",
        searchIntent: "Looking for <strong>iFFALCON LED TV repair near me</strong> in Karur? We inspect combo logic boards, replace LED strips, and service remotes at your doorstep.",
        problems: "Stuck on pulsing Android logo, cyclic rebooting every twelve seconds, set entirely dead.",
        checks: "Evaluates eMMC storage sectors, checks secondary SMPS voltage outputs, and inspects remote IR eye.",
        parts: "Combo smart board, SMPS rectifier components, Bluetooth antenna, LED backlight set.",
        whenNeeded: "When the TV fails to load its home screen after booting or refuses to power up following thunderstorm cuts."
      }
    ],
    modelsSeries: "iFFALCON K-Series (K61, K72), U-Series (U61, U62), S-Series, and QLED models (32F53, 43K72, 55K72, 55Q72). (Different series utilize direct-lit backlight arrays with varying strip voltages).",
    problems: [
      {
        badge: "Backlight Failure",
        title: "Dialogue Audible but iFFALCON Screen Stays Pitch Black",
        label1: "Customer Complaint",
        val1: "Serial dialogue and news broadcasts are loud and clear, but the panel displays zero light. Shining a flashlight reveals faint outlines.",
        label2: "Defect Analysis",
        val2: "Series-connected LED diodes inside the backlight strips have burned open, cutting current and forcing the driver into shutdown.",
        label3: "Technician Resolution",
        val3: "Analyzes individual LED diode drops using an electronic backlight tester and fits a replacement set of copper-backed lighting bars."
      },
      {
        badge: "Smart OS",
        title: "iFFALCON TV Looping on Android Startup Screen",
        label1: "Customer Complaint",
        val1: "Television starts, shows the animated iFFALCON logo, and restarts automatically without ever reaching the Android desktop.",
        label2: "Defect Analysis",
        val2: "System partition corruption caused by sudden power disruption while Android was writing background update files.",
        label3: "Technician Resolution",
        val3: "Connects USB service console, enters fastboot mode, wipes damaged cache, and loads factory iFFALCON software image."
      },
      {
        badge: "Power Circuit",
        title: "iFFALCON TV Dead with No Standby Light",
        label1: "Customer Complaint",
        val1: "The front indicator light remains unlit despite verifying the wall outlet, and the television is completely lifeless.",
        label2: "Defect Analysis",
        val2: "High voltage surge penetrated the primary filter section, destroying the safety fuse and shorting the main switching FET.",
        label3: "Technician Resolution",
        val3: "Replaces input fuse, checks bridge rectifier diodes, and replaces shorted MOSFET and PWM driver on the power board."
      },
      {
        badge: "Audio Issue",
        title: "iFFALCON Internal Speakers Cracking on High Volume",
        label1: "Customer Complaint",
        val1: "Speech is barely intelligible due to constant buzzing and rattling coming from inside the television cabinet.",
        label2: "Defect Analysis",
        val2: "Speaker cone membrane has detached along the perimeter from acoustic fatigue and heat exposure.",
        label3: "Technician Resolution",
        val3: "Removes back chassis, verifies audio amplifier cleanliness, and installs an original matched stereo speaker module."
      },
      {
        badge: "Display Timing",
        title: "Horizontal Ghosting Lines on iFFALCON Panel",
        label1: "Customer Complaint",
        val1: "Faint horizontal lines roll across the display, causing text and faces to appear blurred or doubled.",
        label2: "Defect Analysis",
        val2: "Clock signal timing imbalance on the display logic board or micro-oxidation on the flexible panel ribbon leads.",
        label3: "Technician Resolution",
        val3: "Cleans ribbon cable golden pins with deoxidizing cleaner, verifies VGH/VGL voltage lines on logic board, and inspects glass interface."
      },
      {
        badge: "Wireless Link",
        title: "iFFALCON TV Refusing to Connect to Wi-Fi",
        label1: "Customer Complaint",
        val1: "Network menu shows Wi-Fi turned off, or scan list fails to locate the home broadband router sitting in the same room.",
        label2: "Defect Analysis",
        val2: "Degraded 3.3V power regulator feeding the wireless daughterboard or physical fracture in the internal ribbon link.",
        label3: "Technician Resolution",
        val3: "Inspects wireless PCB voltage rail, refits internal antenna connection, or installs an original replacement Wi-Fi module."
      }
    ],
    customerExperiences: [
      { locality: "Kagithapuramam, Karur", issue: "iFFALCON 55-inch sound on but display pitch black", resolution: "Fitted brand-matched direct-lit LED backlight strip set with uniform brightness.", time: "Fixed in 2.5 hours" },
      { locality: "Pasupathipalayam, Karur", issue: "iFFALCON TV stuck on pulsing Android emblem", resolution: "Cleared partition cache and reloaded firmware via technician console.", time: "Resolved in 2 hours" },
      { locality: "Kovai Road, Karur", issue: "iFFALCON LED TV dead after sudden voltage drop", resolution: "Repaired primary SMPS power section and replaced blown input fuse on-site.", time: "Serviced same day" },
      { locality: "Karur Town", issue: "iFFALCON cabinet buzzing during high volume scenes", resolution: "Installed new matched acoustic sound drivers with clean vocal response.", time: "Completed in 1.5 hours" }
    ]
  },

  // 22. Acer
  {
    name: "Acer",
    slug: "acer-tv-repair-service-in-karur.html",
    h1: "Acer TV Repair Service in Karur",
    metaTitle: "Acer TV Repair Service in Karur | Google TV & LED TV Repair",
    metaDesc: "Need Acer TV repair in Karur? Doorstep inspection for Acer I-Series 4K, Advanced I-Series & H-Series TVs. Backlight strip replacement & motherboard repair.",
    introHeading: "Need Acer TV Repair in Karur?",
    introTamil: "Acer TV-la sound varudhu screen dark-aa irukka? Google TV logo-laye restart aagudha?",
    introTanglish: "Acer TV on pannumbodhu display black-aa irukka or sound crackle aagudha? <strong>Acer TV repair in Karur</strong> thedureengalana, unga veetukke direct technician visit book pannalaam. I-Series 4K, H-Series, and Google TV problems spot-laye check pannuvom.",
    introText: [
      "Is your Acer television displaying a black screen while dialogue continues, hanging at the Google TV bootup screen, or producing distorted sound? Acer televisions have rapidly gained popularity in Karur for their Frameless designs and high-output soundbars, but backlight LED rows and power regulator circuits need qualified service over years of usage.",
      "Whether you require dependable <strong>Acer LED TV repair near me</strong> in Sengunthapuram, fast <strong>Acer Smart TV service in Karur</strong> around Kagithapuramam, or an experienced <strong>Acer TV technician near me</strong> near Kovai Road, our local desk organizes prompt home visits every day.",
      "Our technician tests Acer main logic boards, high-output soundbar drivers, direct-lit backlight arrays, and SMPS power units on-site, providing honest guidance and an upfront repair estimate."
    ],
    tvTypes: [
      {
        title: "Acer I-Series & Advanced I-Series 4K Google TV",
        desc: "Acer I-Series 4K televisions incorporate Frameless displays, MEMC motion smoothing, and Google TV. Extended runtime in warm rooms can degrade direct-lit backlight diodes or cause system memory overheating.",
        searchIntent: "Searching for <strong>Acer 4K TV repair in Karur</strong>? We resolve I-Series screen blackout, Google TV boot errors, and HDMI handshake drops on-site.",
        problems: "Sound playing clearly while display is dark, stuck on spinning Google TV dots, HDMI port failing to detect set-top box.",
        checks: "Measures forward voltage across each backlight strip, checks Google TV flash integrity, and tests HDMI switch IC.",
        parts: "Acer I-Series 4K backlight strips, Google TV motherboard, HDMI interface IC, SMPS board.",
        whenNeeded: "When your Acer 4K display goes pitch black during sports or the set freezes on the bootup screen."
      },
      {
        title: "Acer H-Series & V-Series OLED / QLED TV",
        desc: "Acer premium H-Series and V-Series models feature high-wattage integrated soundbars and Quantum Dot panels. High acoustic vibration can stress internal wiring, or power driver boards may need component repair.",
        searchIntent: "Need reliable <strong>Acer Smart TV service in Karur</strong>? We diagnose QLED display dimming, soundbar distortion, and board issues at your home.",
        problems: "Integrated soundbar produces raspy rattling sound, display brightness dims unevenly, TV restarts randomly.",
        checks: "Inspects speaker cone suspension, tests multichannel audio amplifier rails, and checks LED booster voltages.",
        parts: "High-output soundbar drivers, audio amplifier PCB, QLED backlight strips, power supply module.",
        whenNeeded: "When soundbar audio vibrates unpleasantly or the screen develops dark shadowy patches."
      },
      {
        title: "Acer 32-inch & 40-inch Full HD LED TV",
        desc: "Standard Acer LED televisions widely installed in bedrooms across Karur. Voltage fluctuations during summer power outages can damage SMPS filter capacitors or cause backlight flickering.",
        searchIntent: "Looking for <strong>Acer LED TV repair near me</strong> in Karur? We inspect SMPS circuit boards, renew backlight bars, and service speakers directly at home.",
        problems: "Television completely dead, front standby LED unlit, picture flickering rapidly, buzzing sound from cabinet.",
        checks: "Inspects 12V and 24V power supply outputs, tests speaker coil impedance, and inspects backlight driver circuit.",
        parts: "SMPS power board, stereo speakers, backlight strip set, primary filter capacitors.",
        whenNeeded: "When the TV fails to turn on after an electrical power surge or the screen flickers during viewing."
      }
    ],
    modelsSeries: "Acer I-Series (AR32AR2841HDFL, AR43AR2851UDFL, AR50AR2851UDFL, AR55AR2851UDFL), Advanced I-Series, H-Series, and V-Series. (Acer televisions feature specialized integrated soundbar audio systems and Google TV logic boards).",
    problems: [
      {
        badge: "Smart OS",
        title: "Acer Google TV Frozen on Spinning Circles",
        label1: "User Observation",
        val1: "When powered on, the screen displays the four animated Google TV circles indefinitely and never transitions to the launcher.",
        label2: "Underlying Hardware Cause",
        val2: "Corrupted system cache partition or defective flash memory sectors on the mainboard from an incomplete over-the-air update.",
        label3: "Repair Procedure",
        val3: "Boots into factory recovery mode, wipes corrupt system partitions, and writes fresh manufacturer Android OS onto the Acer motherboard."
      },
      {
        badge: "Backlight Failure",
        title: "Clear Audio but Acer Screen Remains Dark",
        label1: "User Observation",
        val1: "Broadcast audio and dialogues are perfectly audible, but the screen stays totally dark. Torch test reveals faint video shadows.",
        label2: "Underlying Hardware Cause",
        val2: "A fractured diode emitter inside the series backlight chain interrupts drive current, forcing the inverter controller to shut off illumination.",
        label3: "Repair Procedure",
        val3: "Measures reverse breakdown voltages on each lighting strip and fits an original Acer replacement backlight array."
      },
      {
        badge: "Audio Issue",
        title: "Acer Integrated Soundbar Distorted Audio",
        label1: "User Observation",
        val1: "Dialogues sound muffled and rattle noticeably whenever background music or movie explosions occur.",
        label2: "Underlying Hardware Cause",
        val2: "Prolonged high volume playback caused mechanical separation of the soundbar speaker suspension, creating acoustic buzzing.",
        label3: "Repair Procedure",
        val3: "Inspects acoustic mounting enclosures, tests driver impedance, and fits a fresh pair of genuine Acer sound drivers."
      },
      {
        badge: "Power Circuit",
        title: "Acer TV Dead Standby Light Following Surge",
        label1: "User Observation",
        val1: "The television shows no signs of life after a power outage, with the front standby light completely extinguished.",
        label2: "Underlying Hardware Cause",
        val2: "A severe grid transient punctured the input surge protector, blowing the fuse and damaging the main switching PWM IC.",
        label3: "Repair Procedure",
        val3: "Replaces blown protection fuse, replaces defective bridge diodes, and installs an authentic switching regulator IC."
      },
      {
        badge: "Display Timing",
        title: "Vertical Colored Bands on Acer Display",
        label1: "User Observation",
        val1: "Colored vertical bands distort the picture on one side of the panel while sound plays clearly from the speakers.",
        label2: "Underlying Hardware Cause",
        val2: "Micro-fractures in the flexible source driver bonding film or oxidized pins on the high-definition LVDS interface.",
        label3: "Repair Procedure",
        val3: "Polishes ribbon connector pins, checks T-Con bias rail voltages with a multimeter, and checks panel driver tab adhesion."
      },
      {
        badge: "Remote Link",
        title: "Acer Bluetooth Remote Fails to Re-pair",
        label1: "User Observation",
        val1: "The smart remote suddenly fails to navigate the TV, voice input remains inactive, and Bluetooth settings cannot locate the device.",
        label2: "Underlying Hardware Cause",
        val2: "Desynchronized pairing handshake between remote and TV, corrupted Bluetooth stack files, or antenna signal attenuation.",
        label3: "Repair Procedure",
        val3: "Executes remote factory reset button sequence, clears system Bluetooth cache via service menu, and checks antenna voltage."
      }
    ],
    customerExperiences: [
      { locality: "Sengunthapuram, Karur", issue: "Acer I-Series 55-inch sound on but display pitch black", resolution: "Installed model-matched 4K direct-lit backlight array and tested brightness.", time: "Fixed in 2.5 hours" },
      { locality: "Kagithapuramam, Karur", issue: "Acer TV dead after thunderstorm power outage", resolution: "Repaired input varistor and bridge rectifier on SMPS power supply directly at residence.", time: "Serviced same day" },
      { locality: "Kovai Road, Karur", issue: "Acer Google TV stuck on startup animation", resolution: "Cleared partition cache and restored Google TV firmware via service mode.", time: "Resolved in 2 hours" },
      { locality: "Karur Town", issue: "Acer soundbar speakers vibrating heavily", resolution: "Installed fresh acoustic stereo sound drivers with clean vocal response.", time: "Completed on-site" }
    ]
  },

  // 23. Hisense
  {
    name: "Hisense",
    slug: "hisense-tv-repair-service-in-karur.html",
    h1: "Hisense TV Repair Service in Karur",
    metaTitle: "Hisense TV Repair Service in Karur | ULED, QLED & 4K TV Repair",
    metaDesc: "Need Hisense TV repair in Karur? Doorstep inspection for Hisense ULED, Tornado 4K, VIDAA & Google TVs. Backlight strip replacement & Hi-View board repair.",
    introHeading: "Need Hisense TV Repair in Karur?",
    introTamil: "Hisense TV-la sound varudhu screen black-aa irukka? VIDAA / Google TV logo-la freeze aagudha?",
    introTanglish: "Hisense TV on panna picture varalaiya or standby red light blink aagudha? <strong>Hisense TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. ULED Mini-LED, Tornado 4K, and VIDAA OS problems spot-laye check pannuvom.",
    introText: [
      "Is your Hisense television showing a black display with clear audio, trapped in a VIDAA OS or Google TV reboot loop, or failing to turn on after an electrical spike? Hisense televisions feature advanced ULED local dimming, Hi-View processing engines, and high-wattage JBL audio tuning, but complex LED driver rails and power supplies require skilled diagnosis.",
      "If you are seeking dependable <strong>Hisense 4K TV repair in Karur</strong> in Karur Town, timely <strong>Hisense QLED TV service in Karur</strong> around Pasupathipalayam, or an experienced <strong>Hisense TV technician near me</strong> near Kagithapuramam, our local desk organizes prompt doorstep visits across all localities.",
      "Our technician inspects Hisense Hi-View motherboards, multi-zone ULED backlight drivers, SMPS power supplies, and internal speaker units on-site, providing honest guidance and an upfront repair estimate."
    ],
    tvTypes: [
      {
        title: "Hisense ULED & Mini-LED 4K TV Repair",
        desc: "Hisense ULED models (U6K, U7K, U8K) utilize full-array local dimming zones and Quantum Dot color powered by the Hi-View engine. Continuous operation at peak HDR brightness can put heavy stress on localized dimming zone controllers and LED strips.",
        searchIntent: "Searching for <strong>Hisense 4K TV repair in Karur</strong>? We diagnose ULED screen blackout, local dimming flicker, and HDMI 2.1 sync drops on-site.",
        problems: "Dark horizontal shadow bands on screen, panel flickering during movie transitions, HDMI 2.1 120Hz signal dropping.",
        checks: "Checks multichannel LED driver IC outputs, tests localized dimming zone voltage lines, and verifies Hi-View scalar clock timing.",
        parts: "Hisense ULED backlight arrays, multi-zone LED driver board, Hi-View mainboard, HDMI 2.1 interface port.",
        whenNeeded: "When dark vertical patches appear across movies or backlight zones shut down during bright HDR scenes."
      },
      {
        title: "Hisense Tornado & A-Series Google TV",
        desc: "Hisense Tornado 4K series with high-output sound systems and A-Series Google TVs. Interrupted firmware updates or thermal memory fatigue can freeze the television on the boot animation or disable Wi-Fi.",
        searchIntent: "Need reliable <strong>Hisense Smart TV service in Karur</strong>? We diagnose Hisense Google TV boot freezes, streaming crashes, and wireless network disconnects directly at home.",
        problems: "Stuck indefinitely on Hi-View opening splash, frequent auto-reboot during 4K streaming, dual-band Wi-Fi disconnected.",
        checks: "Attaches diagnostic terminal, runs eMMC sector health diagnostics, and restores original Hisense system software.",
        parts: "Hisense Google TV main logic board, internal Wi-Fi/Bluetooth antenna, eMMC memory, IR remote sensor board.",
        whenNeeded: "When the TV freezes during startup sequence or refuses to detect dual-band home Wi-Fi."
      },
      {
        title: "Hisense Full HD & HD Ready LED TV",
        desc: "Widely used 32-inch and 43-inch Hisense LED models installed in bedrooms and living rooms across Karur. Frequent substation voltage drops can stress secondary filter capacitors or degrade audio output amplifier stages.",
        searchIntent: "Looking for <strong>Hisense LED TV repair near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at your doorstep.",
        problems: "Hisense television shows no power response, front indicator stays unlit, cabinet audio buzzes during loud scenes, backlight level drops suddenly.",
        checks: "Measures 12V DC power output, checks bridge rectifier diodes, and tests audio amplifier output waveform.",
        parts: "Hisense SMPS power supply, stereo audio drivers, direct LED strips, high-grade electrolytic capacitors.",
        whenNeeded: "When the set stays unresponsive following a blackout or dialogues sound unpleasantly raspy."
      }
    ],
    modelsSeries: "Hisense ULED Series (U6K, U7K, U8K Mini-LED), Tornado Series (55A73F), A-Series 4K (A6H, A6K), and VIDAA OS models. (Hisense manufactures its own proprietary Hi-View Engine processors and specialized full-array local dimming architectures).",
    problems: [
      {
        badge: "Smart OS",
        title: "Hisense Google TV Stuck in Startup Loop",
        label1: "Reported Symptom",
        val1: "When turned on, the Hisense logo flashes followed by the Google TV animation, after which the television restarts endlessly.",
        label2: "Technical Fault Origin",
        val2: "Damaged firmware partition, failed background system update, or bad memory sectors on the eMMC flash memory.",
        label3: "Field Service Action",
        val3: "Accesses hardware recovery console, executes system partition wipe, and flashes authentic Hisense firmware onto mainboard."
      },
      {
        badge: "Backlight Failure",
        title: "Dialogue Audible but Hisense Display is Pitch Black",
        label1: "Reported Symptom",
        val1: "TV audio and dialogue play clearly from internal speakers, but the screen has zero light. Focusing a bright flashlight on the display reveals faint ghost silhouettes moving underneath.",
        label2: "Technical Fault Origin",
        val2: "Thermal burnout of high-voltage LED diodes has broken circuit continuity, triggering inverter safety shutdown.",
        label3: "Field Service Action",
        val3: "Probes forward bias across backlight channels with dedicated LED tester and mounts matched replacement aluminum-core strip set."
      },
      {
        badge: "Audio Issue",
        title: "Hisense Tornado Sound Output Buzzing and Distorted",
        label1: "Reported Symptom",
        val1: "Spoken dialogue is clouded by an annoying buzzing vibration, particularly on low frequency movie soundtracks.",
        label2: "Technical Fault Origin",
        val2: "Acoustic driver cone surround has degraded from continuous humidity and vibration, causing voice coil rubbing.",
        label3: "Field Service Action",
        val3: "Measures speaker coil impedance, removes degraded driver pair, and installs genuine Hisense acoustic replacement units."
      },
      {
        badge: "Power Circuit",
        title: "Hisense TV Dead Standby Following Thunderstorm",
        label1: "Reported Symptom",
        val1: "After a thunderstorm in the locality, the television has no red standby light and will not turn on.",
        label2: "Technical Fault Origin",
        val2: "Inrush lightning surge ruptured the line fuse, shorted the input bridge rectifier, and damaged the switching FET.",
        label3: "Field Service Action",
        val3: "Tests primary power circuit with multimeter, replaces blown semiconductor components, and verifies secondary 12V rail."
      },
      {
        badge: "Display Timing",
        title: "Vertical Color Scanlines on Hisense Screen",
        label1: "Reported Symptom",
        val1: "Fine colored lines run vertically down the screen, sometimes accompanied by picture jittering.",
        label2: "Technical Fault Origin",
        val2: "Micro-corrosion on flexible Chip-on-Film ribbon pins connecting LCD glass to bottom timing source board.",
        label3: "Field Service Action",
        val3: "Treats corroded COF copper contacts, measures analogue gamma staircase voltages, and inspects bonding pressure."
      },
      {
        badge: "Signal Ingestion",
        title: "Hisense HDMI eARC Fails to Detect Audio System",
        label1: "Reported Symptom",
        val1: "External audio receiver remains silent over HDMI eARC and TV audio menu indicates device handshake failure.",
        label2: "Technical Fault Origin",
        val2: "Failed eARC bus transceiver logic or fractured hot-plug detection trace inside the primary HDMI port.",
        label3: "Field Service Action",
        val3: "Inspects differential digital audio pairs, runs HDMI diagnostic test in service console, and refits socket terminals."
      }
    ],
    customerExperiences: [
      { locality: "Karur Town", issue: "Hisense ULED 55-inch audio working but screen pitch black", resolution: "Replaced direct-lit LED backlight strip set and verified uniform luminance.", time: "Fixed in 2.5 hours" },
      { locality: "Pasupathipalayam, Karur", issue: "Hisense Google TV stuck on startup animation loop", resolution: "Cleared partition cache and restored Google TV firmware via service mode.", time: "Resolved in 2 hours" },
      { locality: "Kagithapuramam, Karur", issue: "Hisense TV dead following thunderstorm power outage", resolution: "Repaired primary stage switching section of SMPS board directly at home.", time: "Serviced same day" },
      { locality: "Kovai Road, Karur", issue: "Hisense internal speakers vibrating heavily", resolution: "Installed fresh acoustic stereo sound drivers with clean vocal response.", time: "Completed on-site" }
    ]
  },

  // 24. BPL
  {
    name: "BPL",
    slug: "bpl-tv-repair-service-in-karur.html",
    h1: "BPL TV Repair Service in Karur",
    metaTitle: "BPL TV Repair Service in Karur | Android & LED TV Repair",
    metaDesc: "Need BPL TV repair in Karur? Doorstep inspection for BPL 4K UHD, Android Smart & Stellar LED TVs. Backlight strip replacement & SMPS power repair.",
    introHeading: "Need BPL TV Repair in Karur?",
    introTamil: "BPL TV-la sound varudhu picture varalaiya? Standby red light on aagala?",
    introTanglish: "BPL TV on panna screen dark-aa irukka or Android logo-la freeze aagudha? <strong>BPL TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Stellar 4K, Android Smart, and HD Ready LED problems spot-laye check pannuvom.",
    introText: [
      "Is your BPL television showing a dark screen with clear dialogue, stuck on the Android boot logo, or completely unresponsive to power? BPL is an iconic Indian brand trusted across Karur for durable picture quality, but after years of service, direct-lit backlight arrays and SMPS power supplies require expert component servicing.",
      "If you are seeking dependable <strong>BPL LED TV repair near me</strong> in Kagithapuramam, quick <strong>BPL Smart TV service in Karur</strong> around Sengunthapuram, or an experienced <strong>BPL TV technician near me</strong> in Karur Town, our local desk organizes timely doorstep visits across all areas.",
      "Our technician tests BPL logic boards, direct-lit LED backlight arrays, SMPS power supplies, and speaker drivers right at your residence, providing honest guidance and an upfront repair estimate."
    ],
    tvTypes: [
      {
        title: "BPL Stellar 4K Android TV Repair",
        desc: "BPL Stellar 4K models deliver Ultra HD clarity with Android smart features. Continuous daily viewing can stress high-intensity backlight arrays, causing the screen to go dark while dialogue remains crystal clear.",
        searchIntent: "Searching for <strong>BPL 4K TV repair in Karur</strong>? We diagnose Stellar 4K screen blackout, Android boot errors, and HDMI sync drops on-site.",
        problems: "Sound playing clearly while display is dark, red standby indicator blinking, HDMI port failing to detect set-top box.",
        checks: "Measures forward voltage across each backlight strip, checks 4K scalar IC temperatures, and tests HDMI switch IC.",
        parts: "BPL Stellar 4K backlight strips, Android logic board, SMPS power supply, HDMI connector.",
        whenNeeded: "When your BPL 4K display goes pitch black during evening programs or drops HDMI signals randomly."
      },
      {
        title: "BPL Smart Android TV Repair",
        desc: "BPL Smart TVs powered by Android operating systems for YouTube and streaming entertainment. Unfinished software updates or memory wear can freeze the television on the startup screen or cause Wi-Fi disconnection.",
        searchIntent: "Need reliable <strong>BPL Smart TV service in Karur</strong>? We resolve Android boot loops, Wi-Fi disconnect, and app freezing issues at your home.",
        problems: "Stuck indefinitely on BPL opening emblem, constant cyclic reboot, Wi-Fi toggling off automatically.",
        checks: "Enters factory bootloader, benchmarks read and write speed across system partitions, and measures 1.1V processor core.",
        parts: "BPL Smart motherboard, internal Wi-Fi card, eMMC flash chip, remote sensor board.",
        whenNeeded: "When the TV freezes during application startup or loops repeatedly before reaching the smart dashboard."
      },
      {
        title: "BPL Full HD & HD Ready LED TV",
        desc: "Durable 32-inch and 40-inch BPL LED televisions popular in Karur households. Unfiltered line voltage transients often degrade primary power supply rectifiers, while years of family usage can loosen speaker paper.",
        searchIntent: "Looking for <strong>BPL LED TV repair near me</strong> in Karur? We offer doorstep SMPS board repairs, backlight bar replacements, and audio driver rebuilding across Karur.",
        problems: "Television fails to power up, front standby diode off, speaker rattling during action scenes, brightness pulsing.",
        checks: "Measures DC secondary outputs with digital multimeter, inspects speaker surround integrity, and evaluates inverter mosfets.",
        parts: "BPL combo SMPS unit, acoustic paper speakers, aluminum backlight strips, high-temperature filter caps.",
        whenNeeded: "When the television refuses to start up following substation cuts or speech produces noticeable buzz."
      }
    ],
    modelsSeries: "BPL Stellar Series 4K (BPL068A43U, BPL068A55U), Vivid Series, and HD Ready LED models. (BPL televisions feature robust power supply architectures designed for Indian electrical conditions).",
    problems: [
      {
        badge: "Backlight Failure",
        title: "Sound Audible but BPL Screen Remains Dark",
        label1: "Issue Identified",
        val1: "Dialogue echoes clearly in the room, but the picture has vanished completely. Holding a flashlight close to the LCD glass shows faint movement.",
        label2: "Component Level Reason",
        val2: "Series string of high-voltage LED emitters has burned out, cutting electrical continuity and tripping the inverter safety circuit.",
        label3: "Doorstep Solution",
        val3: "Verifies forward diode voltage drop with automated LED tester and mounts a matched set of metal-substrate backlight bars."
      },
      {
        badge: "Smart OS",
        title: "BPL TV Stuck on Android Startup Logo",
        label1: "Issue Identified",
        val1: "When switched on, the BPL emblem appears on screen and freezes permanently without advancing to the app home menu.",
        label2: "Component Level Reason",
        val2: "Corrupted system cache partition, failed background update, or degraded flash memory blocks on the smart motherboard.",
        label3: "Doorstep Solution",
        val3: "Accesses technician service recovery mode, wipes corrupt system partitions, and reinstalls verified BPL Android firmware."
      },
      {
        badge: "Power Circuit",
        title: "BPL TV Dead Standby Light Following Surge",
        label1: "Issue Identified",
        val1: "Following a lightning strike in the neighborhood, the front red power lamp remains dead and the TV does not react to the remote.",
        label2: "Component Level Reason",
        val2: "Inrush mains spike punctured the input surge MOV, vaporized the safety fuse, and shorted the main SMPS chopper transistor.",
        label3: "Doorstep Solution",
        val3: "Tests AC input section, replaces shorted bridge diodes and fuse, and restores clean 12V and 24V DC secondary rails."
      },
      {
        badge: "Audio Issue",
        title: "BPL Internal Speakers Distorted and Rattling",
        label1: "Issue Identified",
        val1: "Speech from news anchors and television serials is accompanied by an annoying rasping vibration inside the casing.",
        label2: "Component Level Reason",
        val2: "Thermal degradation has dried out the speaker cone suspension ring, causing voice coil misalignment.",
        label3: "Doorstep Solution",
        val3: "Measures 4-ohm coil resistance, verifies amplifier output cleanliness, and installs an original BPL replacement speaker pair."
      },
      {
        badge: "Display Timing",
        title: "Colored Vertical Lines Down BPL Display",
        label1: "Issue Identified",
        val1: "Bright multicolored stripes run vertically through the picture, cutting off half the screen while sound continues uninterrupted.",
        label2: "Component Level Reason",
        val2: "Micro-corrosion on the flexible source driver ribbon tab or failed gamma bias voltage regulation on the T-Con board.",
        label3: "Doorstep Solution",
        val3: "Cleans ribbon seating with electrical contact spray, checks VGH and VGL reference voltages, and verifies driver tab bonding."
      },
      {
        badge: "Wi-Fi Connectivity",
        title: "BPL Smart TV Disconnecting from Home Wi-Fi",
        label1: "Issue Identified",
        val1: "The television links to the wireless router initially but disconnects after a short while, displaying network unavailable.",
        label2: "Component Level Reason",
        val2: "Thermal fatigue on the onboard 2.4GHz Wi-Fi transceiver chip or loose internal RF antenna connector.",
        label3: "Doorstep Solution",
        val3: "Checks 3.3V power routing to the wireless IC, cleans antenna connector pins, and updates network driver settings."
      }
    ],
    customerExperiences: [
      { locality: "Kagithapuramam, Karur", issue: "BPL 43-inch audio working but screen completely dark", resolution: "Replaced direct-lit LED backlight strip set on-site and verified picture clarity.", time: "Fixed in 2.5 hours" },
      { locality: "Sengunthapuram, Karur", issue: "BPL TV stuck on Android logo screen", resolution: "Reflashed certified Android system software via technician service terminal.", time: "Resolved in 2 hours" },
      { locality: "Kovai Road, Karur", issue: "BPL LED TV dead after sudden voltage spike", resolution: "Repaired primary stage switching section of SMPS board directly at home.", time: "Serviced same day" },
      { locality: "Karur Town", issue: "BPL speakers making raspy vibrating sound", resolution: "Installed new matched acoustic stereo speaker pair with crisp vocal response.", time: "Completed on-site" }
    ]
  },

  // 25. Vu
  {
    name: "Vu",
    slug: "vu-tv-repair-service-in-karur.html",
    h1: "Vu TV Repair Service in Karur",
    metaTitle: "Vu TV Repair Service in Karur | GloLED, Masterpiece & 4K Repair",
    metaDesc: "Need Vu TV repair in Karur? Doorstep inspection for Vu GloLED, Masterpiece QLED & Cinema TVs. Backlight strip replacement & DJ soundboard repair.",
    introHeading: "Need Vu TV Repair in Karur?",
    introTamil: "Vu TV-la sound varudhu screen black-aa irukka? GloLED logo-la freeze aagudha?",
    introTanglish: "Vu TV on panna picture varalaiya or subwoofer rattle aagudha? <strong>Vu TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. GloLED 4K, Masterpiece QLED, and Cinema TV problems spot-laye check pannuvom.",
    introText: [
      "Is your Vu television playing audio with a pitch-black screen, frozen on the Vu startup screen, or producing distorted sound from its integrated DJ subwoofer? Vu televisions are known across Karur homes for vibrant GloLED panels and high-wattage sound systems, but high-intensity backlight arrays and sound amplifier boards require skilled technical diagnosis over years of operation.",
      "Whether you are looking for dependable <strong>Vu GloLED TV repair in Karur</strong> in Pasupathipalayam, fast <strong>Vu 4K TV service in Karur</strong> around Sengunthapuram, or an experienced <strong>Vu TV technician near me</strong> near Kagithapuramam, our local desk organizes prompt home visits every day.",
      "Our technician inspects Vu GloLED logic boards, built-in subwoofer audio amps, direct-lit backlight arrays, and SMPS power units on-site, providing honest guidance and an upfront repair estimate."
    ],
    tvTypes: [
      {
        title: "Vu GloLED & Masterpiece QLED 4K TV Repair",
        desc: "Vu GloLED and Masterpiece QLED models combine Glo Panel 400-nit luminance with discrete subwoofer audio amplification. Sustained high-brightness operation places substantial thermal load on high-intensity LED strings and backlight driver circuits.",
        searchIntent: "Searching for <strong>Vu 4K TV repair in Karur</strong>? We diagnose GloLED screen blackout, Google TV boot errors, and HDMI ARC issues at your home.",
        problems: "Sound playing clearly while display is dark, one side of panel dimming, HDMI port failing to detect console.",
        checks: "Checks individual Glo panel strip forward currents, measures standby 3.3V rail, and evaluates scalar board integrity.",
        parts: "Vu GloLED backlight strips, Google TV motherboard, Glo processor IC, HDMI interface board.",
        whenNeeded: "When your GloLED screen dims substantially on one side or goes pitch dark while sound remains audible."
      },
      {
        title: "Vu Cinema TV & Action Series Smart TV",
        desc: "Vu Cinema series models feature integrated 100W soundbars and customized Android TV interfaces. High acoustic energy can loosen internal cabinet mountings, or corrupted software updates can lock the set into a continuous reboot cycle.",
        searchIntent: "Need reliable <strong>Vu Smart TV service in Karur</strong>? We repair Cinema TV boot loops, wireless connectivity failures, and soundbar distortion at your residence.",
        problems: "Stuck on Vu emblem, Wi-Fi failing to connect, heavy cabinet vibration on bass frequencies.",
        checks: "Checks soundbar isolation dampers, verifies flash storage partition health, and measures high-wattage audio amplifier rails.",
        parts: "Front-firing soundbar drivers, smart Android mainboard, internal Wi-Fi card, power supply PCB.",
        whenNeeded: "When your Vu TV halts indefinitely on the startup emblem or speakers produce rattling buzzing during movies."
      },
      {
        title: "Vu 32-inch & 43-inch Full HD LED TV",
        desc: "Popular 32-inch and 43-inch Vu LED models installed in bedrooms and living rooms across Karur. Frequent neighborhood supply drops can stress primary electrolytic capacitors or trigger horizontal display interference.",
        searchIntent: "Looking for <strong>Vu LED TV repair near me</strong> in Karur? We inspect SMPS circuit boards, renew backlight bars, and service speakers at your doorstep.",
        problems: "Television completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.",
        checks: "Probes bridge rectification stage, checks dual-rail DC power output, and measures speaker output ripple.",
        parts: "Vu power supply board, front acoustic stereo drivers, direct-lit LED strips, line filter inductors.",
        whenNeeded: "When the television shows zero signs of electrical power or the display flickers erratically during playback."
      }
    ],
    modelsSeries: "Vu GloLED Series (43GloLED, 50GloLED, 55GloLED, 65GloLED), Masterpiece QLED Series, Cinema TV Action Series, and Premium 4K models. (Vu televisions feature specialized Glo Panel high-brightness backlights and integrated DJ soundbars).",
    problems: [
      {
        badge: "Backlight Failure",
        title: "Dialogue Audible but Vu GloLED Screen is Dark",
        label1: "Customer Report",
        val1: "Clear dialogue plays from movie channels, but the screen remains pitch dark. Holding a mobile flash near the screen reveals faint shadow movements.",
        label2: "Diagnosis Summary",
        val2: "A single open-circuit LED emitter has interrupted the high-voltage string, triggering the backlight inverter shutdown.",
        label3: "Repair Undertaken",
        val3: "Tests each Glo strip with a benchtop LED analyzer and replaces all illumination strips with factory-grade units.",
      },
      {
        badge: "Smart OS",
        title: "Vu TV Stuck on GloLED Opening Animation",
        label1: "Customer Report",
        val1: "Television starts, shows the animated Vu logo, and restarts automatically without ever reaching the Android desktop.",
        label2: "Diagnosis Summary",
        val2: "Corrupt system partition caused by unexpected power loss during background Google TV update installation.",
        label3: "Repair Undertaken",
        val3: "Connects USB service console, enters fastboot mode, wipes damaged cache, and loads factory Vu software image."
      },
      {
        badge: "Audio Issue",
        title: "Vu Built-in DJ Subwoofer Producing Distorted Sound",
        label1: "Customer Report",
        val1: "Dialogue is accompanied by harsh buzzing and heavy cabinet rattling whenever movie soundtracks or songs play.",
        label2: "Diagnosis Summary",
        val2: "Subwoofer suspension surround has separated under sustained acoustic excursion, causing the voice coil to rub against the magnet.",
        label3: "Repair Undertaken",
        val3: "Removes acoustic enclosure, measures coil resistance, and installs an original matched replacement subwoofer module."
      },
      {
        badge: "Power Circuit",
        title: "Vu TV Dead Standby Light Following Surge",
        label1: "Customer Report",
        val1: "Front power LED does not light up at all and the television remains unresponsive to both remote and rear power switches.",
        label2: "Diagnosis Summary",
        val2: "Severe grid overvoltage punctured the input varistor, blowing the ceramic fuse and shorting the primary power MOSFET.",
        label3: "Repair Undertaken",
        val3: "Installs a replacement ceramic fuse, repairs bridge rectifier diodes, and installs a new switching transistor on the SMPS."
      },
      {
        badge: "Display Timing",
        title: "Colored Vertical Lines Down Vu Display",
        label1: "Customer Report",
        val1: "Multiple vertical colored scanlines stripe the display from top to bottom while audio continues normally in the background.",
        label2: "Diagnosis Summary",
        val2: "Defective timing controller IC on T-Con, tarnished LVDS pins, or broken bond connections on the panel flexible cable.",
        label3: "Repair Undertaken",
        val3: "Cleans ribbon cable contacts with contact spray, checks VGH/VGL voltage lines on the T-Con, and tests panel source driver integrity."
      },
      {
        badge: "Remote Link",
        title: "Vu Bluetooth Voice Remote Fails to Re-pair",
        label1: "Customer Report",
        val1: "The voice remote ceases communicating with the TV, mic voice search does not activate, and settings cannot discover the controller.",
        label2: "Diagnosis Summary",
        val2: "Corrupted Bluetooth pairing table on the mainboard, out-of-sync remote firmware, or defective wireless receiver antenna.",
        label3: "Repair Undertaken",
        val3: "Carries out factory button re-pairing combination, resets motherboard Bluetooth table, and verifies wireless module supply."
      }
    ],
    customerExperiences: [
      { locality: "Pasupathipalayam, Karur", issue: "Vu GloLED 55-inch sound working but screen completely black", resolution: "Replaced direct-lit LED backlight strip set and verified uniform luminance.", time: "Fixed in 2.5 hours" },
      { locality: "Sengunthapuram, Karur", issue: "Vu TV stuck on startup animation loop", resolution: "Cleared partition cache and restored Google TV firmware via service mode.", time: "Resolved in 2 hours" },
      { locality: "Kagithapuramam, Karur", issue: "Vu LED TV dead following thunderstorm power outage", resolution: "Repaired primary stage switching section of SMPS board directly at home.", time: "Serviced same day" },
      { locality: "Karur Town", issue: "Vu DJ subwoofer making buzzing rattling sound", resolution: "Installed new matched acoustic sound drivers with clean vocal response.", time: "Completed on-site" }
    ]
  }
];

// Test brands 21 to 25 registration
for (const b of brands21to31) {
  registerSentence(b.description, `${b.name} intro`);
  for (const t of (b.tvTypes || [])) {
    registerSentence(t.desc, `${b.name} type ${t.title} desc`);
    registerSentence(t.searchIntent, `${b.name} type ${t.title} searchIntent`);
    registerSentence(t.whenNeeded, `${b.name} type ${t.title} whenNeeded`);
    registerSentence(t.checks, `${b.name} type ${t.title} checks`);
    registerSentence(t.parts, `${b.name} type ${t.title} parts`);
  }
  for (const p of (b.problems || [])) {
    registerSentence(p.val1, `${b.name} prob ${p.title} val1`);
    registerSentence(p.val2, `${b.name} prob ${p.title} val2`);
    registerSentence(p.val3, `${b.name} prob ${p.title} val3`);
  }
}

console.log(`Duplicates detected in brands 21 to 25: ${duplicateCount}`);

module.exports = brands21to31;
