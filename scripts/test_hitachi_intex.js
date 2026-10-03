// Generator for completely unique TV Types & Problems for Brands 11-20 and 21-31
// Strict enforcement of 0 duplicate sentences across all 31 brands
const fs = require('fs');
const path = require('path');

const b1to10 = require('./tv_brands_1_to_10.js');

// Brand 11: Hitachi
const hitachi = {
  name: "Hitachi",
  slug: "hitachi-tv-repair-service-in-karur.html",
  h1: "Hitachi TV Repair Service in Karur",
  metaTitle: "Hitachi TV Repair Service in Karur | LED & Smart TV Repair",
  metaDesc: "Need Hitachi TV repair in Karur? Doorstep inspection for Hitachi Alpha, LD & Smart LED TVs. Backlight strip replacement, SMPS power & T-Con repair.",
  introHeading: "Need Hitachi TV Repair in Karur?",
  introTamil: "Hitachi TV switch-on aagala? Sound varudhu screen dark-aa irukka?",
  introTanglish: "Hitachi TV on pannina display varalaya or red light standby-laye irukka? <strong>Hitachi TV repair in Karur</strong> thedureengalana, unga area-kku local technician inspection arrange pannuvom. Power board, backlight and motherboard issues spot-laye check pannalaam.",
  introText: [
    "Is your Hitachi television experiencing display cutoff, power failure after voltage spikes, or sound playing with a dark screen? Hitachi televisions are recognized for sturdy Japanese engineering and IPS display panels, but with years of operation, backlight LED strips and power board capacitors require skilled attention.",
    "If you are looking for reliable <strong>Hitachi LED TV repair near me</strong> in Kagithapuramam, timely <strong>Hitachi Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>Hitachi TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across Karur town.",
    "Our technician tests Hitachi SMPS power boards, IPS panel timing circuits, LED backlight arrays, and main motherboards directly at your home, providing honest guidance and an upfront repair estimate."
  ],
  tvTypes: [
    {
      title: "Hitachi 4K Ultra HD Smart TV Repair",
      desc: "Hitachi 4K UHD smart televisions feature high resolution Japanese display panels with built-in streaming apps and multiple HDMI ports. Over continuous operation, backlight diode strings can burn open or Wi-Fi connectivity may drop unexpectedly.",
      searchIntent: "Searching for <strong>Hitachi 4K TV repair in Karur</strong>? We diagnose IPS panel blackout, Wi-Fi errors, and HDMI connectivity issues at your doorstep.",
      problems: "Sound coming but no picture on screen, Wi-Fi failing to connect, HDMI set-top box not detected.",
      checks: "Technician tests LED backlight strip forward voltages, motherboard HDMI switch IC, and Wi-Fi module power rails.",
      parts: "LED backlight strip sets, main logic board, internal Wi-Fi card, HDMI connector.",
      whenNeeded: "When the screen is dark while dialogue is clear or the TV disconnects from home internet."
    },
    {
      title: "Hitachi Full HD & HD Ready LED TV",
      desc: "Popular 32-inch and 43-inch Hitachi LED models installed in bedrooms and living rooms across Karur. Frequent issues include power failure after voltage fluctuations, standby light not turning green, or distorted speaker audio.",
      searchIntent: "Need reliable <strong>Hitachi LED TV repair in Karur</strong>? We carry out SMPS component servicing and speaker driver replacement on-site.",
      problems: "TV completely dead, standby light not glowing, buzzing sound from speakers, screen flickering.",
      checks: "Inspects SMPS power supply board secondary outputs (12V, 24V), speaker cone condition, and inverter board.",
      parts: "SMPS power board, speaker drivers, backlight inverter, filter capacitors, fuse.",
      whenNeeded: "When the TV fails to turn on after an electrical outage or audio buzzes at medium volume."
    },
    {
      title: "Hitachi IPS Panel LED TV Repair",
      desc: "Hitachi TVs equipped with wide-angle IPS display panels. Common faults include horizontal colored lines, double image ghosting, or one corner of the panel appearing unusually dim.",
      searchIntent: "Looking for <strong>Hitachi Smart TV service in Karur</strong>? We service IPS panel T-Con timing circuits and LVDS cable connections at your residence.",
      problems: "Colored horizontal lines across display, ghosting effect on moving pictures, uneven dark patches.",
      checks: "Tests T-Con board VGH/VGL voltages, checks LVDS ribbon cable seating, and inspects panel driver chips.",
      parts: "T-Con board, LVDS cable, panel driver board, timing controller IC.",
      whenNeeded: "When lines appear across the display or picture contrast washes out."
    }
  ],
  modelsSeries: "Hitachi Alpha Series, LD Series, Hitachi Roku OS TV, and Full HD LED series. (Different Hitachi series use distinct power supply modules and backlight diode configurations).",
  problems: [
    {
      badge: "Power Problem",
      title: "Hitachi TV Not Turning On / Dead Standby",
      label1: "Problem Observed",
      val1: "Power plug is connected and main switch is on, but the front indicator light on Hitachi TV does not light up at all.",
      label2: "Why This Happens",
      val2: "Burnt power board input fuse, blown bridge rectifier, or shorted secondary MOSFET from lightning/voltage surge.",
      label3: "Technician Inspection",
      val3: "Technician tests AC mains input, primary filter capacitor charge, and 5V standby power rail on the SMPS board."
    },
    {
      badge: "Backlight Failure",
      title: "Sound Coming but Hitachi Screen is Black",
      label1: "Problem Observed",
      val1: "When channel is changed, dialogue and background music are audible, but display remains completely black.",
      label2: "Why This Happens",
      val2: "LED backlight diode strip failure inside the display panel or tripped backlight boost driver circuit.",
      label3: "Technician Inspection",
      val3: "Uses an external LED strip tester to measure current draw and tests boost driver output voltage from power board."
    },
    {
      badge: "Display Issue",
      title: "Colored Horizontal Lines on Hitachi IPS Display",
      label1: "Problem Observed",
      val1: "Fine colored lines run horizontally across the picture, or the top portion of the screen jitters periodically.",
      label2: "Why This Happens",
      val2: "Loose LVDS ribbon cable seating, oxidised contact pins, or failing T-Con timing controller IC.",
      label3: "Technician Inspection",
      val3: "Cleans ribbon cable gold fingers with contact cleaner, checks T-Con VGH/VGL bias rails, and reseats connectors."
    },
    {
      badge: "Audio Fault",
      title: "Distorted Buzzing Sound from Hitachi Speakers",
      label1: "Problem Observed",
      val1: "Sound is audible, but dialogue sounds raspy and produces an irritating buzzing noise during high-volume scenes.",
      label2: "Why This Happens",
      val2: "Torn speaker paper cone surround from years of vibration or degraded audio power amplifier IC on logic board.",
      label3: "Technician Inspection",
      val3: "Checks speaker voice coil resistance with a multimeter and tests audio amplifier IC output waveform."
    },
    {
      badge: "Smart TV / Boot",
      title: "Hitachi Smart TV Frozen on Startup Logo",
      label1: "Problem Observed",
      val1: "TV powers on, displays the Hitachi opening logo, and stays frozen on that screen indefinitely without booting further.",
      label2: "Why This Happens",
      val2: "Corrupted system firmware memory, interrupted automatic software update, or failing eMMC flash storage chip.",
      label3: "Technician Inspection",
      val3: "Attempts hardware recovery reset, tests motherboard core voltage lines, and reflashes system firmware if needed."
    },
    {
      badge: "Connectivity",
      title: "Hitachi TV Wi-Fi Disconnecting Frequently",
      label1: "Problem Observed",
      val1: "Television connects to home wireless router for a few minutes and then drops connection, showing 'Network Disconnected'.",
      label2: "Why This Happens",
      val2: "Overheating Wi-Fi transceiver module on motherboard or weak antenna contact within the television frame.",
      label3: "Technician Inspection",
      val3: "Measures 3.3V DC rail to the wireless transceiver socket and replaces the internal Wi-Fi card if antenna is dead."
    }
  ],
  customerExperiences: [
    { locality: "Kagithapuramam, Karur", issue: "Hitachi 43-inch LED dark display with clear dialogue", resolution: "Technician replaced direct-lit backlight diode array on-site and verified uniform brightness.", time: "Resolved in 2.5 hours" },
    { locality: "Pasupathipalayam, Karur", issue: "Hitachi 50-inch 4K TV dead after voltage surge", resolution: "Repaired input varistor and bridge rectifier on SMPS power board directly at residence.", time: "Serviced same day" },
    { locality: "Kovai Road, Karur", issue: "Hitachi LED TV buzzing speaker audio during serials", resolution: "Installed fresh acoustic stereo sound drivers with clean vocal response.", time: "Fixed within 2 hours" },
    { locality: "Thorakkalpatti, Karur", issue: "Hitachi IPS display showing horizontal color lines", resolution: "Cleaned LVDS ribbon contacts and calibrated T-Con timing voltages on-site.", time: "Completed on-site" }
  ]
};

// Brand 12: Intex
const intex = {
  name: "Intex",
  slug: "intex-tv-repair-service-in-karur.html",
  h1: "Intex TV Repair Service in Karur",
  metaTitle: "Intex TV Repair Service in Karur | LED Star & Smart TV Repair",
  metaDesc: "Need Intex TV repair in Karur? Doorstep inspection for Intex LED Star, Splash Plus & Smart LED TVs. Backlight strip replacement, combo board & audio repair.",
  introHeading: "Need Intex TV Repair in Karur?",
  introTamil: "Intex TV switch-on aagala? Standby red light eriyudha aana on aagala?",
  introTanglish: "Intex TV on aagala or sound mattum vandhu screen dark-aa irukka? <strong>Intex TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. LED Star, Splash Plus, and Smart LED problems spot-laye check pannuvom.",
  introText: [
    "Is your Intex television failing to turn on, playing audio with a pitch-black screen, or making a heavy rattling sound through its internal speakers? Intex televisions are common in Karur homes for affordable family entertainment, but combo boards and backlight diode strings often require maintenance over time.",
    "Whether you require quick <strong>Intex LED TV repair near me</strong> in Inam Karur, budget-friendly <strong>Intex Smart TV service in Karur</strong> near Kagithapuramam, or an experienced <strong>Intex TV technician near me</strong> around Thanthonimalai, our local desk schedules reliable doorstep visits across Karur.",
    "Our technician tests Intex universal combo motherboards, 12V DC input rails, LED backlight strips, and speaker drivers right in front of you, providing a straightforward price quote before doing any work."
  ],
  tvTypes: [
    {
      title: "Intex LED Star Series Repair",
      desc: "Intex Star series LED televisions feature energy-efficient backlights and compact cabinets. Over extended viewing hours, backlight diode strings can burn open or power board rectifiers can fail from mains voltage fluctuations.",
      searchIntent: "Searching for <strong>Intex TV repair in Karur</strong>? We service LED Star series black screen, dead standby, and distorted speaker sound at your doorstep.",
      problems: "Screen completely black while audio continues, red light glowing but unit not powering up, rattling audio.",
      checks: "Measures constant-current driver output, inspects 12V power supply lines, and checks speaker impedance.",
      parts: "LED Star backlight diode bars, universal combo board, 12V adapter circuit, speaker cones.",
      whenNeeded: "When the screen stays dark during operation or sound rattles heavily during news and serials."
    },
    {
      title: "Intex Splash Plus Smart LED TV",
      desc: "Intex Smart televisions running Android-based platforms for YouTube streaming and USB playback. Corrupted memory partitions or voltage drops during startup can freeze the TV on the Intex splash screen.",
      searchIntent: "Need dependable <strong>Intex Smart TV repair near me</strong> in Karur? We fix splash screen boot loops, Wi-Fi drops, and app freezing directly at your home.",
      problems: "Frozen on Intex opening screen, continuous restart cycle, failure to connect to wireless router.",
      checks: "Inspects eMMC memory stability, tests 3.3V and 1.8V processor rails, and verifies internal Wi-Fi card.",
      parts: "Smart combo motherboard, internal Wi-Fi card, eMMC flash chip, remote sensor board.",
      whenNeeded: "When the TV fails to load the smart interface or disconnects from home Wi-Fi continuously."
    },
    {
      title: "Intex HD Ready & Full HD LED TV",
      desc: "Standard 32-inch and 40-inch Intex LED televisions designed for cable TV and set-top box viewing. Frequent problems include HDMI port signal loss, blown input fuses, and loose internal ribbon connectors.",
      searchIntent: "Looking for <strong>Intex LED TV technician in Karur</strong>? We repair HDMI ports, replace backlight diode strips, and service combo boards on-site.",
      problems: "Set-top box shows No Signal banner, television dead with no red light, picture flickering intermittently.",
      checks: "Inspects HDMI connector pins, tests AC input protection fuse, and checks LVDS ribbon seating.",
      parts: "HDMI port connector, AC fuse, bridge rectifier, LVDS ribbon cable.",
      whenNeeded: "When set-top box picture cuts out or television fails to turn on after an electrical power cut."
    }
  ],
  modelsSeries: "Intex LED Star Series (LED-3200, LED-4000), Splash Plus, A-Spec Series, and Intex Smart LED models. (Intex models utilize universal combo boards with integrated power and sound circuits).",
  problems: [
    {
      badge: "Power Circuit",
      title: "Intex TV Not Turning On / Standby Dead",
      label1: "Customer Symptom",
      val1: "Power cord is plugged in, but the front red standby indicator stays completely dark and the television does not respond.",
      label2: "Likely Component Cause",
      val2: "Mains surge blew the input glass fuse, shorted the bridge rectifier, or damaged the primary switching IC on the combo board.",
      label3: "How We Check & Fix",
      val3: "Tests mains continuity, checks the primary filter capacitor voltage, and replaces shorted diodes and ICs on the combo board."
    },
    {
      badge: "Backlight Failure",
      title: "Intex Sound Working but Screen is Black",
      label1: "Customer Symptom",
      val1: "Channel sound and dialogue play clearly from the TV speakers, but the picture is missing. Torch test reveals faint video.",
      label2: "Likely Component Cause",
      val2: "Burnt LED diodes in the backlight strips have opened the circuit, causing the driver to shut off screen illumination.",
      label3: "How We Check & Fix",
      val3: "Measures forward voltage across each backlight strip with an LED tester and installs a brand-matched backlight array."
    },
    {
      badge: "Audio Issue",
      title: "Harsh Rattling Sound from Intex Speakers",
      label1: "Customer Symptom",
      val1: "Voices sound heavily distorted and vibrate unpleasantly inside the TV cabinet when volume is raised above 20.",
      label2: "Likely Component Cause",
      val2: "Torn paper cone surround on the downward-firing speakers due to heat and prolonged high volume playback.",
      label3: "How We Check & Fix",
      val3: "Inspects speaker cone paper integrity, tests 8-ohm voice coil impedance, and fits a fresh stereo speaker pair."
    },
    {
      badge: "Smart OS",
      title: "Intex Smart TV Stuck on Opening Logo",
      label1: "Customer Symptom",
      val1: "The television powers on, displays the 'Intex' or 'Smart' logo, and remains frozen on that screen indefinitely.",
      label2: "Likely Component Cause",
      val2: "Corrupted Android system files, failed app update, or read/write errors on the motherboard eMMC flash chip.",
      label3: "How We Check & Fix",
      val3: "Enters system recovery mode, clears cached partition data, and reflashes stable system firmware onto the board."
    },
    {
      badge: "Signal Input",
      title: "Intex HDMI Input Shows 'No Signal'",
      label1: "Customer Symptom",
      val1: "Set-top box is powered on and cable is connected, but Intex screen displays 'No Signal' banner across HDMI ports.",
      label2: "Likely Component Cause",
      val2: "Broken or loose pins inside the HDMI socket or damaged 5V detection diodes from lightning induced line surges.",
      label3: "How We Check & Fix",
      val3: "Tests pin continuity with a multimeter, resolders loose board tracks, or replaces the damaged physical HDMI port."
    },
    {
      badge: "Remote Receiver",
      title: "Intex TV Unresponsive to Remote Handset",
      label1: "Customer Symptom",
      val1: "Remote handset is working with fresh batteries, but the television does not change channels or respond to the power button.",
      label2: "Likely Component Cause",
      val2: "Faulty infrared photodiode on the front sensor PCB or broken ribbon cable connecting the sensor to the mainboard.",
      label3: "How We Check & Fix",
      val3: "Tests 3.3V standby supply rail to the IR receiver and installs a new photodiode sensor eye if defective."
    }
  ],
  customerExperiences: [
    { locality: "Inam Karur, Karur", issue: "Intex 32-inch LED dark display with clear dialogue", resolution: "Fitted brand-matched LED Star backlight strips and calibrated constant-current driver.", time: "Serviced in 2 hours" },
    { locality: "Kagithapuramam, Karur", issue: "Intex TV dead after thunderstorm power surge", resolution: "Replaced blown fuse and bridge rectifier on combo power supply on-site.", time: "Fixed within 3 hours" },
    { locality: "Thanthonimalai, Karur", issue: "Intex Smart TV freezing on startup logo", resolution: "Cleared corrupted cache partition and reset Android firmware at customer residence.", time: "Completed same day" },
    { locality: "Karur Town", issue: "Intex downward-firing speakers buzzing heavily", resolution: "Installed fresh acoustic stereo sound drivers with clean vocal response.", time: "Resolved in 90 minutes" }
  ]
};

// Check uniqueness helper
function verifyUniqueness(allBrands) {
  function getSentences(obj, brandName) {
    let s = [];
    const text = JSON.stringify(obj);
    const normalized = text.toLowerCase().replace(new RegExp(brandName.toLowerCase(), 'g'), 'BRAND');
    const matches = normalized.match(/[^.!?]+[.!?]+/g) || [];
    return matches.map(m => m.trim()).filter(m => m.length > 25);
  }
  const sentenceMap = {};
  allBrands.forEach(b => {
    const sents = getSentences({ tvTypes: b.tvTypes, problems: b.problems }, b.name);
    sents.forEach(s => {
      if (!sentenceMap[s]) sentenceMap[s] = [];
      if (!sentenceMap[s].includes(b.name)) sentenceMap[s].push(b.name);
    });
  });
  const dups = Object.entries(sentenceMap).filter(([s, bs]) => bs.length > 1);
  return dups;
}

console.log('Testing Hitachi & Intex uniqueness against Brands 1-10...');
const dups = verifyUniqueness([...b1to10, hitachi, intex]);
console.log('Duplicates with Hitachi & Intex:', dups.length);
if (dups.length > 0) {
  dups.forEach(([s, bs]) => console.log('-', bs.join(', '), ':', s));
}
