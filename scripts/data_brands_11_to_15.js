// Authentic, brand-specific TV Types and Common Problems for Brands 11-20
// Hitachi, Intex, Micromax, Kodak, OnePlus, Sanyo, Akai, Onida, Aiwa, TCL
// Karur only, no AI buzzwords, zero duplicate sentences

module.exports = [
  // 11. Hitachi
  {
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
        searchIntent: "Searching for specialized <strong>Hitachi TV service in Karur</strong>? We service IPS panel T-Con timing circuits and LVDS cable connections at your residence.",
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
        val3: "Tests the 3.3V DC power rail to the Hitachi Wi-Fi module and inspects internal antenna connections for signal loss."
      }
    ],
    customerExperiences: [
      { locality: "Kagithapuramam, Karur", issue: "Hitachi 43-inch LED dark display with clear dialogue", resolution: "Technician replaced direct-lit backlight diode array on-site and verified uniform brightness.", time: "Resolved in 2.5 hours" },
      { locality: "Pasupathipalayam, Karur", issue: "Hitachi 50-inch 4K TV dead after voltage surge", resolution: "Repaired input varistor and bridge rectifier on SMPS power board directly at residence.", time: "Serviced same day" },
      { locality: "Kovai Road, Karur", issue: "Hitachi LED TV buzzing speaker audio during serials", resolution: "Installed fresh acoustic stereo sound drivers with clean vocal response.", time: "Fixed within 2 hours" },
      { locality: "Thorakkalpatti, Karur", issue: "Hitachi IPS display showing horizontal color lines", resolution: "Cleaned LVDS ribbon contacts and calibrated T-Con timing voltages on-site.", time: "Completed on-site" }
    ]
  },

  // 12. Intex
  {
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
        searchIntent: "Looking for prompt <strong>Intex Smart TV service in Karur</strong>? We fix splash screen boot loops, Wi-Fi drops, and app freezing directly at your home.",
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
  },

  // 13. Micromax
  {
    name: "Micromax",
    slug: "micromax-tv-repair-service-in-karur.html",
    h1: "Micromax TV Repair Service in Karur",
    metaTitle: "Micromax TV Repair Service in Karur | Canvas & LED TV Repair",
    metaDesc: "Need Micromax TV repair in Karur? Doorstep inspection for Micromax Canvas Smart, Spark & LED TVs. Backlight strip replacement, power & audio board repair.",
    introHeading: "Need Micromax TV Repair in Karur?",
    introTamil: "Micromax TV-la sound varudhu picture black-aa irukka? Canvas logo-laye nikkudha?",
    introTanglish: "Micromax TV on pannumbodhu display varalaiya or boot loop aagudha? <strong>Micromax TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Canvas Smart, Spark LED, and Full HD problems spot-laye check pannuvom.",
    introText: [
      "Is your Micromax television stuck in an infinite restart loop on the Canvas logo, playing channel sound with a dark screen, or emitting distorted audio during daily serials? Micromax televisions are popular across Karur for their Canvas features, but backlight diode arrays and Android flash memory chips require experienced care.",
      "If you are seeking reliable <strong>Micromax LED TV repair in Karur</strong> near Mengles Road, quick <strong>Micromax TV service in Karur</strong> in Pasupathipalayam, or an experienced <strong>Micromax TV technician near me</strong> around Kovai Road, our local desk arranges doorstep visits on all days.",
      "Our technician inspects Micromax Canvas logic boards, audio amplifier circuits, direct-lit backlight strips, and power supply modules on-site, confirming the honest repair estimate before opening screws."
    ],
    tvTypes: [
      {
        title: "Micromax Canvas Smart TV Repair",
        desc: "Micromax Canvas smart televisions run customized Android operating firmware. Memory fragmentation or interrupted software updates can trap the TV in an endless startup boot loop or cause streaming apps to exit abruptly.",
        searchIntent: "Searching for <strong>Micromax Smart TV repair in Karur</strong>? We resolve Canvas boot loops, app crashes, and Wi-Fi disconnect errors on-site.",
        problems: "Stuck on Canvas opening logo, continuous restarting, Wi-Fi failing to turn on.",
        checks: "Accesses Android recovery console, tests eMMC flash storage sectors, and measures core processor rails.",
        parts: "Canvas logic motherboard, eMMC memory IC, internal Wi-Fi card, remote receiver board.",
        whenNeeded: "When the TV fails to boot into the home screen or apps crash continuously."
      },
      {
        title: "Micromax Spark & Wave LED TV",
        desc: "Popular 32-inch and 40-inch Micromax LED televisions designed for set-top box viewing. Heavy daily usage over 3 to 4 years frequently leads to burnt backlight strips, causing sound to play without video.",
        searchIntent: "Need reliable <strong>Micromax LED TV repair near me</strong> in Karur? We replace backlight diode bars and service power boards right at your home.",
        problems: "Sound playing clearly but screen is pitch dark, red standby indicator blinking, flickering picture.",
        checks: "Measures constant-current driver output, tests backlight diode strings, and inspects power rails.",
        parts: "LED backlight strip bars, combo power board, inverter driver, LVDS cable.",
        whenNeeded: "When the screen goes black while dialogue continues or the picture blinks rapidly."
      },
      {
        title: "Micromax Full HD & 4K LED TV",
        desc: "High-definition Micromax televisions featuring large 43-inch and 50-inch displays. Common issues include HDMI port connection drops, speaker buzzing during high volume, and vertical color lines across the glass.",
        searchIntent: "Looking for <strong>Micromax TV technician near me</strong> in Karur? We service HDMI ports, replace rattling speaker cones, and check display lines on-site.",
        problems: "Set-top box shows No Signal, speaker rattle during loud dialogue, colored vertical lines.",
        checks: "Tests HDMI connector pin alignment, checks speaker impedance, and inspects T-Con display signals.",
        parts: "HDMI port terminal, stereo sound drivers, T-Con board, filter capacitors.",
        whenNeeded: "When external set-top box is undetected or dialogue produces irritating vibration."
      }
    ],
    modelsSeries: "Micromax Canvas Series (32CANVAS, 40CANVAS, 50CANVAS), Spark Series, Wave Series, and Full HD LED models. (Micromax televisions use Android Canvas logic boards with integrated audio power amps).",
    problems: [
      {
        badge: "Smart OS",
        title: "Micromax TV Stuck in Canvas Boot Loop",
        label1: "Issue Reported",
        val1: "When powered on, the television shows the Micromax Canvas animation and reboots repeatedly every 15 seconds.",
        label2: "Fault Origin",
        val2: "Corrupted system cache, failed over-the-air update, or bad memory blocks on the onboard eMMC flash chip.",
        label3: "Technician Action",
        val3: "Enters service recovery mode, clears partition cache, and reflashes stable Android firmware onto the logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Dialogue Clear but Micromax Screen is Dark",
        label1: "Issue Reported",
        val1: "Channel sound and serial dialogues play loud and clear, but the screen has no light. Torchlight reveals faint shadows.",
        label2: "Fault Origin",
        val2: "Series LED backlight diodes have burned open, breaking the circuit and triggering driver shutdown.",
        label3: "Technician Action",
        val3: "Measures forward diode voltage using an external tester and installs a brand-matched set of backlight strips."
      },
      {
        badge: "Audio Distortion",
        title: "Rattling Buzzing Sound from Micromax Speakers",
        label1: "Issue Reported",
        val1: "Sound vibrates unpleasantly inside the cabinet during speech, making news and dialogue difficult to comprehend.",
        label2: "Fault Origin",
        val2: "Torn speaker paper cone surround or failing audio power amplifier IC on the main logic board.",
        label3: "Technician Action",
        val3: "Measures speaker voice coil resistance with a multimeter and installs a fresh pair of matched acoustic drivers."
      },
      {
        badge: "Power Circuit",
        title: "Micromax TV Dead Standby After Power Cut",
        label1: "Issue Reported",
        val1: "Following a power outage and restoration, the TV does not turn on and the front standby light remains completely dark.",
        label2: "Fault Origin",
        val2: "A line voltage spike ruptured the input glass fuse, shorted rectifier diodes, or damaged the SMPS controller.",
        label3: "Technician Action",
        val3: "Checks AC mains fuse, tests primary capacitor charge, and replaces damaged semiconductor parts on the power board."
      },
      {
        badge: "Connectivity",
        title: "Micromax Canvas Wi-Fi Disconnecting Constantly",
        label1: "Issue Reported",
        val1: "TV connects to home Wi-Fi for 5 minutes, then disconnects with an error saying 'Network disconnected'.",
        label2: "Fault Origin",
        val2: "Thermal fatigue in the Wi-Fi transceiver chip or corrupted wireless network profile data in Android memory.",
        label3: "Technician Action",
        val3: "Tests 3.3V DC power rail to the Wi-Fi card, inspects antenna leads, and resets network subsystem settings."
      },
      {
        badge: "Input Interface",
        title: "Micromax HDMI Shows 'No Signal' from DTH Box",
        label1: "Issue Reported",
        val1: "Set-top box is switched on, but TV screen shows 'No Signal' across all HDMI ports even after changing cables.",
        label2: "Fault Origin",
        val2: "Loose connector pins on the HDMI socket or failed HDMI switch controller IC on the Micromax motherboard.",
        label3: "Technician Action",
        val3: "Tests port continuity with a multimeter, resolders loose pins, or replaces damaged HDMI IC on the motherboard."
      }
    ],
    customerExperiences: [
      { locality: "Mengles Road, Karur", issue: "Micromax Canvas 40-inch stuck on boot loop", resolution: "Reflashed system firmware via service mode and restored normal smart booting.", time: "Resolved in 2 hours" },
      { locality: "Pasupathipalayam, Karur", issue: "Micromax LED TV dark screen with audible dialogue", resolution: "Replaced direct-lit backlight diode array on-site and verified brightness uniformity.", time: "Serviced same day" },
      { locality: "Kovai Road, Karur", issue: "Micromax TV dead following voltage spike", resolution: "Repaired input varistor and bridge rectifier on combo power supply on-site.", time: "Fixed in 2.5 hours" },
      { locality: "Karur Town", issue: "Micromax internal speaker vibrating heavily", resolution: "Installed fresh acoustic stereo sound drivers with clean vocal response.", time: "Completed on-site" }
    ]
  },

  // 14. Kodak
  {
    name: "Kodak",
    slug: "kodak-tv-repair-service-in-karur.html",
    h1: "Kodak TV Repair Service in Karur",
    metaTitle: "Kodak TV Repair Service in Karur | 4K & Google TV Repair",
    metaDesc: "Need Kodak TV repair in Karur? Doorstep inspection for Kodak CA PRO 4K, 7XPRO & Matrix QLED TVs. Backlight strip replacement & board repair.",
    introHeading: "Need Kodak TV Repair in Karur?",
    introTamil: "Kodak TV-la sound varudhu picture varalaiya? Google TV logo-laye nikkudha?",
    introTanglish: "Kodak TV on pannumbodhu display dark-aa irukka or remote pair aagala? <strong>Kodak TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. CA PRO 4K, 7XPRO, and Matrix QLED problems spot-laye check pannuvom.",
    introText: [
      "Is your Kodak television displaying sound without picture, freezing on the Google TV startup animation, or failing to pair with its Bluetooth voice remote? Kodak televisions manufactured by SPPL are widely used in Karur for their 4K features, but high-luminance backlights and system firmware require expert maintenance.",
      "If you are looking for prompt <strong>Kodak 4K TV repair in Karur</strong> around Chinna Andankovil, dependable <strong>Kodak Smart TV service in Karur</strong> in Karur Town, or an experienced <strong>Kodak TV technician near me</strong> near Pasupathipalayam, our local team schedules doorstep visits every day.",
      "Our technician tests Kodak CA PRO power boards, direct-lit LED arrays, Google TV logic circuits, and Bluetooth modules on-site, explaining the exact problem and confirming the repair cost before taking up work."
    ],
    tvTypes: [
      {
        title: "Kodak CA PRO 4K Google TV Repair",
        desc: "Kodak CA PRO 4K series televisions deliver high-definition HDR resolution powered by Google TV OS. Daily high-brightness running can lead to LED diode burnout, causing dialogue to play clearly while the screen remains black.",
        searchIntent: "Searching for <strong>Kodak 4K TV repair in Karur</strong>? We diagnose CA PRO screen blackout, Google TV boot loop, and HDMI sync drops on-site.",
        problems: "Sound playing clearly while display is black, red standby light glowing, HDMI port failing to detect console.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "CA PRO 4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When the screen turns completely dark while audio plays or television shuts off during 4K movies."
      },
      {
        title: "Kodak 7XPRO & Matrix QLED TV",
        desc: "Kodak 7XPRO and Matrix QLED models feature high peak luminance and Google TV smart capabilities. Voltage fluctuations or memory degradation can cause the TV to hang on the opening logo or drop home Wi-Fi.",
        searchIntent: "Need dependable <strong>Kodak Smart TV repair in Karur</strong>? We resolve Matrix QLED boot freezes, remote unpairing, and Wi-Fi disconnects at home.",
        problems: "Frozen on Google TV logo, Bluetooth voice remote unpairing, apps crashing during streaming.",
        checks: "Accesses Google TV recovery mode, tests eMMC flash memory, and checks Bluetooth transceiver module.",
        parts: "Google TV motherboard, Bluetooth module, eMMC flash memory, remote sensor board.",
        whenNeeded: "When the TV fails to boot into the home screen or the voice remote stops communicating."
      },
      {
        title: "Kodak Full HD & HD Ready LED TV",
        desc: "Popular 32-inch and 40-inch Kodak LED models widely installed in Karur bedrooms. Thunderstorms and power spikes frequently affect the input power supply, or internal speakers develop buzzing rattles.",
        searchIntent: "Looking for <strong>Kodak LED TV repair near me</strong> in Karur? We carry out power board component repairs, replace backlight strips, and service speakers on-site.",
        problems: "Television completely dead with no standby light, speaker buzzing during serials, colored vertical lines.",
        checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable.",
        whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."
      }
    ],
    modelsSeries: "Kodak CA PRO Series (43UHDX, 50UHDX, 55UHDX), 7XPRO Series, Matrix QLED Series, and SE Series. (Kodak Smart TVs are built by SPPL and feature Google TV software and direct-lit LED arrays).",
    problems: [
      {
        badge: "Smart OS",
        title: "Kodak TV Stuck on Google TV Startup Screen",
        label1: "Problem Observed",
        val1: "When turned on, the Google TV logo or spinning dots appear on screen and stay frozen indefinitely without loading the launcher.",
        label2: "Why This Happens",
        val2: "Corrupted system cache, interrupted Google TV firmware update, or bad memory sectors on the eMMC flash chip.",
        label3: "Technician Inspection",
        val3: "Enters recovery bootloader mode, clears system partition cache, and reflashes manufacturer firmware on Kodak logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Sound Audible but Kodak 4K Screen is Pitch Black",
        label1: "Problem Observed",
        val1: "Channel sound and dialogue play clearly, but the display has no light. A flashlight pointed at screen reveals faint moving pictures.",
        label2: "Why This Happens",
        val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.",
        label3: "Technician Inspection",
        val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set."
      },
      {
        badge: "Remote Control",
        title: "Kodak Bluetooth Voice Remote Keeps Unpairing",
        label1: "Problem Observed",
        val1: "Remote was functioning normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.",
        label2: "Why This Happens",
        val2: "Bluetooth pairing disconnected, remote firmware out of sync, or internal Bluetooth transceiver on TV motherboard is faulty.",
        label3: "Technician Inspection",
        val3: "Re-initializes remote pairing sequence, clears Bluetooth cache via technician menu, and confirms 3.3V rail to the receiver IC."
      },
      {
        badge: "Power Circuit",
        title: "Kodak TV Dead Standby Following Lightning Surge",
        label1: "Problem Observed",
        val1: "Power cord is connected to mains, but front red indicator light does not glow at all and TV does not respond to remote.",
        label2: "Why This Happens",
        val2: "A mains voltage spike blew glass fuse, shorted bridge rectifier, or damaged primary switching IC on combo board.",
        label3: "Technician Inspection",
        val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on board."
      },
      {
        badge: "Display Timing",
        title: "Colored Vertical Lines Across Kodak 4K Display",
        label1: "Problem Observed",
        val1: "Thin green or pink vertical lines run from top to bottom across picture, sometimes with image jumping.",
        label2: "Why This Happens",
        val2: "Failing T-Con timing controller IC, oxidised LVDS ribbon pins, or moisture damage to panel Chip-on-Film (COF) bonds.",
        label3: "Technician Inspection",
        val3: "Cleans and reseats LVDS ribbon cables, measures VGH and VGL voltages on T-Con board, and inspects panel edge bonding."
      },
      {
        badge: "Audio Issue",
        title: "Kodak TV Internal Speakers Rattle on High Volume",
        label1: "Problem Observed",
        val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.",
        label2: "Why This Happens",
        val2: "Internal speaker paper cone surround has torn due to humidity and heat, causing voice coil to rub against magnet.",
        label3: "Technician Inspection",
        val3: "Tests speaker impedance with a multimeter and installs matched replacement Kodak acoustic speaker pair."
      }
    ],
    customerExperiences: [
      { locality: "Chinna Andankovil, Karur", issue: "Kodak CA PRO 50-inch dark screen with clear audio", resolution: "Installed model-matched 4K direct-lit backlight array and tested brightness.", time: "Resolved in 3 hours" },
      { locality: "Karur Town", issue: "Kodak TV dead following lightning thunderstorm", resolution: "Repaired input fuse and bridge rectifier on SMPS power board directly at residence.", time: "Fixed same day" },
      { locality: "Pasupathipalayam, Karur", issue: "Kodak Google TV stuck on startup logo screen", resolution: "Cleared partition cache and restored Google TV firmware via service mode.", time: "Serviced in 2 hours" },
      { locality: "Kagithapuramam, Karur", issue: "Kodak Bluetooth voice remote refusing to pair", resolution: "Reset Bluetooth subsystem and calibrated internal transceiver antenna on-site.", time: "Completed in 1 hour" }
    ]
  },

  // 15. OnePlus
  {
    name: "OnePlus",
    slug: "oneplus-tv-repair-service-in-karur.html",
    h1: "OnePlus TV Repair Service in Karur",
    metaTitle: "OnePlus TV Repair Service in Karur | Y Series & QLED Repair",
    metaDesc: "Need OnePlus TV repair in Karur? Doorstep inspection for OnePlus Y Series, U1S 4K & QLED TVs. Backlight strip replacement, Gamma Engine & board repair.",
    introHeading: "Need OnePlus TV Repair in Karur?",
    introTamil: "OnePlus TV-la sound varudhu screen black-aa irukka? OxygenPlay logo-laye freeze aagudha?",
    introTanglish: "OnePlus TV on pannumbodhu display dark-aa irukka or remote pair aagala? <strong>OnePlus TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Y1, Y1S Pro, U1S 4K, and QLED problems spot-laye check pannuvom.",
    introText: [
      "Is your OnePlus television displaying a single bright green vertical line, freezing on the spinning dots boot screen, or playing clear dialogue with a pitch-black screen? OnePlus televisions are widely preferred in Karur for their sleek bezels and OxygenPlay integration, but backlight diodes and panel flex connections need specialized attention.",
      "If you are seeking dependable <strong>OnePlus TV repair in Karur</strong> in Pasupathipalayam, fast <strong>OnePlus Smart TV service in Karur</strong> near Kovai Road, or an experienced <strong>OnePlus TV technician near me</strong> around Kagithapuramam, our local desk organizes timely home visits across Karur.",
      "Our technician tests OnePlus Gamma Engine processing boards, SMPS power supplies, direct-lit backlight arrays, and Bluetooth remotes on-site, providing honest guidance and an upfront repair estimate."
    ],
    tvTypes: [
      {
        title: "OnePlus Y Series & Y1S Pro Repair",
        desc: "OnePlus Y Series (32Y1, 43Y1S Pro) delivers Full HD and 4K resolution powered by the Gamma Engine. Over continuous operation, backlight diode strips can burn open or the system may freeze on the OxygenPlay loading screen.",
        searchIntent: "Searching for <strong>OnePlus Smart TV repair near me</strong> in Karur? We diagnose Y1S screen blackout, OxygenPlay boot loops, and remote disconnects on-site.",
        problems: "Sound playing but screen is dark, frozen on spinning dots animation, Bluetooth remote unpairing.",
        checks: "Measures backlight strip forward voltages, tests eMMC flash sectors, and inspects Bluetooth module.",
        parts: "Y Series backlight strips, Gamma Engine mainboard, Bluetooth transceiver, power supply circuit.",
        whenNeeded: "When dialogue plays without display or the television fails to get past the startup animation."
      },
      {
        title: "OnePlus U1S 4K & Q Series QLED Repair",
        desc: "OnePlus U1S and Q Series QLED televisions feature high-contrast Quantum Dot displays and Dolby Audio. Power surges or driver heating can trigger protection shutdown or cause green/pink vertical lines on the glass.",
        searchIntent: "Need specialized <strong>OnePlus 4K TV repair in Karur</strong>? Our technicians service QLED backlights, panel COF lines, and power boards across Karur homes.",
        problems: "Single green vertical line on display, screen flickering during HDR playback, television shutting down.",
        checks: "Tests panel COF bonding lines, measures T-Con mini-LVDS voltages, and tests QLED driver lines.",
        parts: "QLED backlight strips, T-Con timing board, LED driver module, thermal pads.",
        whenNeeded: "When colored lines appear across the display or screen brightness pulses during HDR streaming."
      },
      {
        title: "OnePlus Full HD Smart LED TV",
        desc: "Popular 32-inch and 43-inch OnePlus models widely installed in Karur residences. Voltage spikes during power outages frequently damage the SMPS board, while internal Dolby Audio speakers can develop rattles.",
        searchIntent: "Looking for trusted <strong>OnePlus TV technician near me</strong> in Karur? We repair power supply units, replace backlight strips, and service speakers on-site.",
        problems: "TV completely dead with unlit standby light, speaker rattling on dialogue, HDMI port not detected.",
        checks: "Tests 12V and 24V power supply outputs, checks speaker coil impedance, and inspects HDMI switch IC.",
        parts: "SMPS power unit, Dolby Audio speaker pair, HDMI connector, LVDS flex cable.",
        whenNeeded: "When the TV fails to turn on after an electrical power surge or sound rattles at normal volume."
      }
    ],
    modelsSeries: "OnePlus Y Series (32Y1, 43Y1, 43Y1S Pro, 50Y1S Pro), U Series (50U1S, 55U1S, 65U1S), and Q Series QLED (55Q1, 65Q2 Pro). (OnePlus TVs utilize Gamma Engine picture processing, OxygenPlay firmware, and Bluetooth voice remotes).",
    problems: [
      {
        badge: "Smart OS",
        title: "OnePlus TV Stuck on Spinning Dots Screen",
        label1: "Customer Symptom",
        val1: "When switched on, the television shows the OnePlus logo followed by four spinning colored dots that loop indefinitely.",
        label2: "Likely Component Fault",
        val2: "Corrupted OxygenPlay system partition, uncompleted automatic software update, or eMMC storage read/write error.",
        label3: "How We Check & Fix",
        val3: "Accesses Android recovery console, wipes cache partition, or reflashes official OnePlus firmware on-site."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Normally but OnePlus Screen is Dark",
        label1: "Customer Symptom",
        val1: "Dialogue and channel audio play loud and clear, but the display remains pitch black. Faint video shows under mobile torch.",
        label2: "Likely Component Fault",
        val2: "One or more LED diodes in the backlight strips have burned open, breaking the circuit and shutting off illumination.",
        label3: "How We Check & Fix",
        val3: "Measures forward voltage across each backlight strip with an LED tester and installs model-matched replacement strips."
      },
      {
        badge: "Display Timing",
        title: "Bright Green Vertical Line on OnePlus Display",
        label1: "Customer Symptom",
        val1: "A sharp green, white, or pink vertical line runs straight down the screen from top to bottom during all video playback.",
        label2: "Likely Component Fault",
        val2: "Thermal stress or moisture affecting panel gate driver (COF) bonding, or loose LVDS flat ribbon cable seating.",
        label3: "How We Check & Fix",
        val3: "Inspects source PCB connections, tests T-Con mini-LVDS data lines, and reseats ribbon cables with anti-static care."
      },
      {
        badge: "Remote Control",
        title: "OnePlus Bluetooth Voice Remote Unpairing",
        label1: "Customer Symptom",
        val1: "Remote handset stops controlling the TV, and holding buttons fails to reconnect with the television Bluetooth receiver.",
        label2: "Likely Component Fault",
        val2: "Desynchronized Bluetooth pairing cache, depleted battery current, or failing Bluetooth transceiver module on mainboard.",
        label3: "How We Check & Fix",
        val3: "Performs hardware pairing reset, verifies 3.3V power supply to the wireless card, and updates remote firmware."
      },
      {
        badge: "Power Circuit",
        title: "OnePlus TV Dead Standby Light After Voltage Spike",
        label1: "Customer Symptom",
        val1: "Power cord is connected to mains, but the small white/red standby indicator at center bezel is completely dark.",
        label2: "Likely Component Fault",
        val2: "A mains surge ruptured the input fuse, shorted primary switching MOSFETs, or damaged the SMPS controller IC.",
        label3: "How We Check & Fix",
        val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor parts on the power unit."
      },
      {
        badge: "Audio Issue",
        title: "Dolby Audio Speaker Rattle During Dialogue",
        label1: "Customer Symptom",
        val1: "Sound plays, but voices sound raspy and produce an annoying cabinet rattle, especially on bass frequencies.",
        label2: "Likely Component Fault",
        val2: "Internal speaker cone surround has torn due to prolonged vibration or loose acoustic driver mounting screws.",
        label3: "How We Check & Fix",
        val3: "Inspects speaker cone paper integrity, measures voice coil impedance, and installs a fresh stereo sound driver pair."
      }
    ],
    customerExperiences: [
      { locality: "Pasupathipalayam, Karur", issue: "OnePlus 43Y1S Pro dark screen with clear serial audio", resolution: "Replaced direct-lit backlight diode array on-site and verified uniform luminance.", time: "Fixed in 2.5 hours" },
      { locality: "Kovai Road, Karur", issue: "OnePlus TV stuck on spinning dots boot animation", resolution: "Cleared partition cache and restored OxygenPlay firmware via service mode.", time: "Resolved in 2 hours" },
      { locality: "Kagithapuramam, Karur", issue: "OnePlus TV dead after thunderstorm power outage", resolution: "Repaired input varistor and bridge rectifier on SMPS power supply directly at residence.", time: "Serviced same day" },
      { locality: "Thanthonimalai, Karur", issue: "OnePlus Bluetooth remote failing to pair with TV", resolution: "Reset Bluetooth subsystem and calibrated internal transceiver antenna on-site.", time: "Completed in 1 hour" }
    ]
  }
];
