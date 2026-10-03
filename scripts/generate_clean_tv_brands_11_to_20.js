const fs = require('fs');
const path = require('path');

// Unique TV types and problems for Brands 11-20
const b11_to_20 = [
  // 11. HITACHI
  {
    name: "Hitachi",
    slug: "hitachi-tv-repair-service-in-karur.html",
    h1: "Hitachi TV Repair Service in Karur",
    metaTitle: "Hitachi TV Repair Service in Karur | LED & Smart TV Repair",
    metaDesc: "Need Hitachi TV repair in Karur? Doorstep inspection for Hitachi LED, 4K & Smart TVs. Backlight strip replacement, SMPS power board & motherboard repair.",
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
        desc: "Hitachi 4K UHD smart televisions feature high resolution Japanese display panels with built-in streaming apps and multiple HDMI ports. Common problems include screen going dark while sound continues, TV failing to connect to Wi-Fi, or HDMI ports showing no signal.",
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
        title: "Colored Horizontal Lines on Hitachi TV Screen",
        label1: "Problem Observed",
        val1: "Thin green or pink horizontal lines run across the Hitachi display, interfering with normal viewing.",
        label2: "Why This Happens",
        val2: "T-Con logic timing board synchronization error, oxidised LVDS cable contacts, or side COF panel bond issue.",
        label3: "Technician Inspection",
        val3: "Cleans LVDS ribbon contacts, measures T-Con board reference voltages (VGH, VGL, VDD), and checks ribbon seating."
      },
      {
        badge: "Audio Defect",
        title: "Hitachi TV Speaker Rattling or Distortion",
        label1: "Problem Observed",
        val1: "Dialogue in movies or serials sounds harsh, crackly, or vibrates noticeably at medium to high volume.",
        label2: "Why This Happens",
        val2: "Torn paper cone surround on the internal speaker drivers or degraded speaker voice coil.",
        label3: "Technician Inspection",
        val3: "Checks speaker resistance (typically 6-8 ohms) and installs factory-matched replacement acoustic drivers."
      },
      {
        badge: "HDMI Issue",
        title: "Hitachi TV HDMI 'No Signal' from DTH Box",
        label1: "Problem Observed",
        val1: "Set-top box is powered on, but TV display shows 'No Signal' banner across all connected HDMI ports.",
        label2: "Why This Happens",
        val2: "Damaged HDMI connector pins, loose solder pads, or failed HDMI switch controller IC on the mainboard.",
        label3: "Technician Inspection",
        val3: "Tests port pin continuity with multimeter, inspects solder tracks under magnification, and replaces HDMI IC if needed."
      },
      {
        badge: "Sensor Fault",
        title: "Hitachi TV Remote Control Not Responding",
        label1: "Problem Observed",
        val1: "TV does not react to remote commands even with brand-new batteries, and front sensor LED does not blink.",
        label2: "Why This Happens",
        val2: "Defective IR photodiode sensor eye on the front panel or missing 3.3V standby line from mainboard.",
        label3: "Technician Inspection",
        val3: "Measures voltage at the IR receiver pin with a multimeter and repairs or replaces the remote sensor board."
      }
    ],
    customerExperiences: [
      {
        locality: "Kagithapuramam",
        title: "Hitachi 43-inch 4K Backlight Repair",
        text: "A customer in Kagithapuramam reported their 43-inch Hitachi 4K TV playing audio clearly while the screen remained totally black. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Pasupathipalayam",
        title: "Hitachi 32-inch LED Power Board Servicing",
        text: "A family in Pasupathipalayam had a 32-inch Hitachi TV that went dead following voltage fluctuations during rain. The technician diagnosed the power board, replaced a blown fuse and shorted rectifier diode on-site, restoring power without needing a costly whole-board replacement."
      },
      {
        locality: "Kovai Road",
        title: "Hitachi 50-inch IPS Panel Line Inspection",
        text: "A resident near Kovai Road reported thin colored lines appearing across their Hitachi IPS display. The technician inspected the T-Con board, cleaned the LVDS ribbon contacts, and stabilized reference voltages, resolving the picture interference."
      }
    ]
  },

  // 12. INTEX
  {
    name: "Intex",
    slug: "intex-tv-repair-service-in-karur.html",
    h1: "Intex TV Repair Service in Karur",
    metaTitle: "Intex TV Repair Service in Karur | LED & Smart TV Repair",
    metaDesc: "Need Intex TV repair in Karur? Doorstep inspection for Intex LED Star, Splash & Smart TVs. Backlight strip replacement, combo power board & audio repair.",
    introHeading: "Need Intex TV Repair in Karur?",
    introTamil: "Intex TV switch-on aagala? Standby red light eriyudha aana on aagala?",
    introTanglish: "Intex TV on aagala or sound mattum vandhu screen dark-aa irukka? <strong>Intex TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. LED Star, Splash Plus, and Smart LED problems spot-laye check pannuvom.",
    introText: [
      "Is your Intex television failing to turn on, playing audio with a pitch-black screen, or displaying bright white circular spots? Intex televisions are widely used in Karur for budget-friendly home entertainment, but voltage spikes and backlight diode degradation occur after years of regular viewing.",
      "If you need dependable <strong>Intex LED TV repair near me</strong> in Kagithapuramam, quick <strong>Intex Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>Intex TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests Intex combo motherboards, SMPS power circuits, LED backlight strips, and audio amplifier ICs right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "Intex LED Star & Splash Series Repair",
        desc: "Intex LED Star and Splash models (24-inch and 32-inch) use compact combo motherboards with external or internal 12V power circuits. Power surges frequently blow input diodes or damage the backlight boost circuit.",
        searchIntent: "Searching for <strong>Intex LED TV repair in Karur</strong>? We fix power supply failures, backlight burnout, and audio faults at your doorstep.",
        problems: "Television completely dead, sound playing with dark screen, power LED blinking continuously.",
        checks: "Tests 12V DC input rail, measures backlight booster output voltage, and checks combo board regulator ICs.",
        parts: "Combo motherboard, LED backlight strips, internal 12V adapter, LVDS cable.",
        whenNeeded: "When the TV fails to turn on or screen is dark while sound is heard."
      },
      {
        title: "Intex Smart Android LED TV Repair",
        desc: "Intex Smart TVs powered by Android OS feature built-in Wi-Fi and streaming apps. Corrupted firmware or memory degradation on the mainboard can freeze the television on the Intex startup screen.",
        searchIntent: "Need quick <strong>Intex Smart TV service in Karur</strong>? We resolve Android boot loops, Wi-Fi disconnect, and app freezing issues at your home.",
        problems: "Stuck on Intex startup logo, Wi-Fi failing to connect to broadband, remote voice search dead.",
        checks: "Accesses service recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module.",
        parts: "Android motherboard, internal Wi-Fi module, eMMC flash memory, remote sensor.",
        whenNeeded: "When the TV cannot get past the opening logo or streaming apps crash every time they open."
      },
      {
        title: "Intex HD Ready & Full HD LED TV",
        desc: "Standard 32-inch and 40-inch Intex LED televisions popular for everyday cable viewing. Common issues include optical diffuser lenses detaching (white coin spots) or speaker buzzing.",
        searchIntent: "Looking for <strong>Intex TV technician near me</strong> in Karur? We repair power supply boards, refit backlight lenses, and service speakers at home.",
        problems: "Bright circular light spots on screen, speaker buzzing during speech, colored screen lines.",
        checks: "Inspects optical diffuser lenses on LED strips, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "Optical diffuser lenses, LED backlight strips, internal speaker pair, T-Con board.",
        whenNeeded: "When bright white spots shine through the picture or sound distorts heavily."
      }
    ],
    modelsSeries: "Intex LED Star Series, Splash Plus, A-Spec Series, and Intex Smart LED models. (Different Intex models use cost-effective universal combo boards with direct-lit LED arrays).",
    problems: [
      {
        badge: "Power Circuit",
        title: "Intex TV Completely Dead with No Standby Light",
        label1: "Customer Symptom",
        val1: "Power cord is plugged in, but the red indicator light does not glow at all and TV does not respond to remote or cabinet buttons.",
        label2: "Likely Component Fault",
        val2: "Swollen electrolytic capacitors, blown mains fuse, or shorted rectifier diode on the Intex combo board following a voltage spike.",
        label3: "How We Check & Fix",
        val3: "Technician tests AC line fuse, 300V primary filter capacitor, and 12V standby power rail, replacing damaged parts on-site."
      },
      {
        badge: "Backlight Failure",
        title: "Dialogue Plays Clearly but Intex Screen is Dark",
        label1: "Customer Symptom",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Likely Component Fault",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "How We Check & Fix",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Lens Defect",
        title: "White Circular Bright Spots on Intex Screen",
        label1: "Customer Symptom",
        val1: "Bright coin-like white light circles appear on the screen, causing intense glare spots across the television picture.",
        label2: "Likely Component Fault",
        val2: "Acrylic optical diffuser lenses mounted over individual LED diodes have detached due to heat and fallen to the bottom of the panel.",
        label3: "How We Check & Fix",
        val3: "Technician opens the optical diffuser layers, cleans old adhesive, and refits optical lenses with UV heat-resistant cement."
      },
      {
        badge: "Audio Issue",
        title: "No Sound from Both Speakers on Intex TV",
        label1: "Customer Symptom",
        val1: "Picture is completely normal, but no sound comes out of the television speakers even at maximum volume.",
        label2: "Likely Component Fault",
        val2: "Audio amplifier IC on the combo board has burned out due to voltage surge or shorted speaker wiring.",
        label3: "How We Check & Fix",
        val3: "Measures 12V supply to the audio amplifier IC, checks speaker continuity, and replaces the damaged amplifier chip."
      },
      {
        badge: "Signal Issue",
        title: "Intex TV Stuck on Blue Screen with 'No Signal'",
        label1: "Customer Symptom",
        val1: "Cable set-top box is turned on, but television shows blue screen with 'No Signal' banner across AV or HDMI.",
        label2: "Likely Component Fault",
        val2: "Physical pin detachment on connector socket or blown ESD diode on input line following lightning storm.",
        label3: "How We Check & Fix",
        val3: "Inspects port solder joints under magnification, resolders connection tracks, and tests video decoder input."
      },
      {
        badge: "Remote Sensor",
        title: "Intex TV Remote Not Working Despite New Batteries",
        label1: "Customer Symptom",
        val1: "TV does not react to remote commands even with brand-new batteries, and front sensor LED does not blink.",
        label2: "Likely Component Fault",
        val2: "Defective IR photodiode sensor eye on the front panel or missing 3.3V standby line from mainboard.",
        label3: "How We Check & Fix",
        val3: "Measures voltage at the IR receiver pin with a multimeter and repairs or replaces the remote sensor board."
      }
    ],
    customerExperiences: [
      {
        locality: "Karur Town",
        title: "Intex 32-inch LED Backlight Replacement",
        text: "A customer near Karur Clock Tower had a 32-inch Intex TV playing audio clearly while the display remained dark. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Thanthonimalai",
        title: "Intex 32-inch Combo Board Power Repair",
        text: "A household in Thanthonimalai had a 32-inch Intex TV that went dead following lightning. The technician diagnosed the combo board, replaced a blown fuse and shorted rectifier diode on-site, restoring power without needing a costly whole-board replacement."
      },
      {
        locality: "Kagithapuramam",
        title: "Intex 40-inch Diffuser Lens Refitting",
        text: "A resident in Kagithapuramam contacted us when bright white spots appeared on their Intex screen. The technician opened the panel, cleaned the optical sheets, and refitted the fallen diffuser lenses with heat-resistant adhesive on-site."
      }
    ]
  },

  // 13. MICROMAX
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
      "Is your Micromax television stuck in an Android boot loop, playing channel sound with a pitch-black screen, or refusing to power on? Micromax televisions and Canvas Smart series are widely installed across Karur homes, but power supply fluctuations and backlight diode burnout happen with years of use.",
      "If you need dependable <strong>Micromax LED TV repair near me</strong> in Kagithapuramam, quick <strong>Micromax Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>Micromax TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests Micromax combo motherboards, Canvas Smart firmware, direct-lit LED backlight arrays, and audio amplifier circuits right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "Micromax Canvas Smart Android TV Repair",
        desc: "Micromax Canvas Smart televisions feature Android OS with built-in streaming apps. Memory wear or failed system updates frequently cause the TV to freeze on the Canvas startup animation or restart in an endless loop.",
        searchIntent: "Searching for <strong>Micromax Smart TV repair in Karur</strong>? We resolve Canvas boot loops, Wi-Fi disconnect, and app freezing issues at your doorstep.",
        problems: "Stuck on Canvas boot logo, Wi-Fi failing to connect to broadband, remote voice search dead.",
        checks: "Accesses service recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module.",
        parts: "Android motherboard, internal Wi-Fi module, eMMC flash memory, remote sensor.",
        whenNeeded: "When the TV cannot get past the opening logo or streaming apps crash every time they open."
      },
      {
        title: "Micromax Spark & Wave LED TV Repair",
        desc: "Popular 32-inch and 40-inch Micromax LED televisions widely installed in bedrooms across Karur. These models use unified combo motherboards where power supply and logic circuits are on a single PCB.",
        searchIntent: "Need quick <strong>Micromax LED TV repair near me</strong> in Karur? We repair combo motherboards, replace backlight strips, and service speakers at home.",
        problems: "Television completely dead, sound playing with dark screen, power LED blinking continuously.",
        checks: "Tests 12V DC input rail, measures backlight booster output voltage, and checks combo board regulator ICs.",
        parts: "Combo motherboard, LED backlight strips, internal 12V adapter, LVDS cable.",
        whenNeeded: "When the TV fails to turn on or screen is dark while sound is heard."
      },
      {
        title: "Micromax Full HD & HD Ready LED TV",
        desc: "Standard Micromax LED televisions popular for everyday cable viewing. Common issues include power failure after voltage spikes, dark screen corners, or speaker buzzing.",
        searchIntent: "Looking for <strong>Micromax TV technician near me</strong> in Karur? We fix power supply, backlight diode, and speaker faults at your home.",
        problems: "Television dead with no indicator light, uneven dark patches on screen, speaker buzzing during speech.",
        checks: "Tests AC input fuse, checks primary filter capacitor charge, and tests speaker cone condition.",
        parts: "SMPS power supply board, LED backlight strips, internal speaker pair, LVDS cable.",
        whenNeeded: "When the TV fails to turn on or dark patches spread across the display."
      }
    ],
    modelsSeries: "Micromax Canvas Series (32CANVAS, 40CANVAS), Spark Series, Wave Series, and Full HD LED models. (Different Micromax models use combo motherboards with integrated power supply and audio sections).",
    problems: [
      {
        badge: "Smart OS",
        title: "Micromax Canvas TV Stuck on Boot Animation Loop",
        label1: "Issue Reported",
        val1: "Television starts, displays the colorful Canvas boot animation, and continues looping indefinitely without loading the home screen.",
        label2: "Fault Origin",
        val2: "Corrupted Android system cache, interrupted software update, or degraded eMMC flash memory blocks on the mainboard.",
        label3: "Technician Action",
        val3: "Technician connects via USB service mode to clear cache memory, test motherboard voltage rails, or reflash the system firmware."
      },
      {
        badge: "Backlight Failure",
        title: "Sound Audible but Micromax Screen Remains Dark",
        label1: "Issue Reported",
        val1: "Serial dialogue and news broadcasts are audible, but the television picture has gone totally black. A torch light held against the panel shows faint picture silhouettes.",
        label2: "Fault Origin",
        val2: "Series LED diodes inside the backlight array have burnt open, interrupting the voltage loop and triggering driver shutdown.",
        label3: "Technician Action",
        val3: "Technician opens the rear chassis carefully, tests each strip using an LED tester, and installs a fresh matched replacement backlight set."
      },
      {
        badge: "Power Circuit",
        title: "Micromax TV Completely Dead / Blown Mains Fuse",
        label1: "Issue Reported",
        val1: "Power cord is plugged in, but the red indicator light does not glow at all and TV does not respond to remote or cabinet buttons.",
        label2: "Fault Origin",
        val2: "A mains voltage spike blew the glass fuse, shorted the bridge rectifier, or damaged the primary switching IC on the combo board.",
        label3: "Technician Action",
        val3: "Tests the AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on the board."
      },
      {
        badge: "Audio Issue",
        title: "Micromax TV Speaker Buzzing or Distorted Sound",
        label1: "Issue Reported",
        val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.",
        label2: "Fault Origin",
        val2: "The internal speaker paper cone surround has torn due to humidity and heat, causing the voice coil to rub against the magnet.",
        label3: "Technician Action",
        val3: "Tests speaker impedance with a multimeter and installs a matched replacement Micromax acoustic speaker pair."
      },
      {
        badge: "Network Issue",
        title: "Micromax Smart TV Fails to Detect Home Wi-Fi",
        label1: "Issue Reported",
        val1: "Wi-Fi scanning returns zero networks found, or connection drops every few minutes with an error saying 'Authentication failed'.",
        label2: "Fault Origin",
        val2: "Internal Wi-Fi module power rail dropout or antenna cable disconnected inside the rear cabinet.",
        label3: "Technician Action",
        val3: "Tests 3.3V DC power rail to the Wi-Fi card, inspects antenna connections, and resets network subsystem settings."
      },
      {
        badge: "Backlight Burnout",
        title: "Half of Micromax Screen Dark While Other Half Works",
        label1: "Issue Reported",
        val1: "Upper or lower half of the display is noticeably dimmer with shadowy bands, while the other half displays normal picture.",
        label2: "Fault Origin",
        val2: "One branch of the parallel LED backlight circuit has burnt out, dropping illumination on one side of the panel.",
        label3: "Technician Action",
        val3: "Measures current draw across left and right LED channels and installs a balanced replacement backlight set."
      }
    ],
    customerExperiences: [
      {
        locality: "Pasupathipalayam",
        title: "Micromax 40-inch Canvas Boot Loop Recovery",
        text: "A customer in Pasupathipalayam reported their 40-inch Micromax Canvas TV stuck on the boot animation. Our technician accessed recovery mode, cleared corrupted system cache, and restored normal streaming app functions on-site without replacing the motherboard."
      },
      {
        locality: "Kagithapuramam",
        title: "Micromax 32-inch Spark Backlight Repair",
        text: "A family in Kagithapuramam had a 32-inch Micromax Spark TV playing channel audio clearly while the display remained dark. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares on-site."
      },
      {
        locality: "Thanthonimalai",
        title: "Micromax 32-inch LED Power Board Servicing",
        text: "A resident in Thanthonimalai contacted us when their 32-inch Micromax TV went dead following lightning. The technician checked the combo power supply, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
      }
    ]
  },

  // 14. KODAK
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
      "Is your Kodak television stuck on the Google TV startup logo, playing sound with a pitch-black screen, or refusing to power on? Kodak televisions (manufactured by SPPL) are popular across Karur homes for affordable 4K and Google TV features, but backlight diode burn and Google TV firmware boot loops occur with extended use.",
      "If you need dependable <strong>Kodak Smart TV repair in Karur</strong> around Thanthonimalai, quick <strong>Kodak LED TV repair near me</strong> in Kagithapuramam, or an experienced <strong>Kodak TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests Kodak logic motherboards, Google TV firmware, direct-lit LED backlight arrays, and SMPS power supplies right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "Kodak CA PRO 4K Google TV Repair",
        desc: "Kodak CA PRO 4K models feature bezel-less displays powered by Google TV OS with Dolby Atmos audio. When direct-lit backlight diodes burn out over daily use, sound continues playing while the display remains completely black.",
        searchIntent: "Searching for <strong>Kodak 4K TV repair in Karur</strong>? We diagnose CA PRO screen blackout, Google TV boot loops, and HDMI eARC errors at your residence.",
        problems: "Sound playing clearly while display is black, red indicator light blinking, TV rebooting every 10 seconds.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."
      },
      {
        title: "Kodak 7XPRO & Matrix QLED TV Repair",
        desc: "Kodak 7XPRO and Matrix QLED models feature high-brightness Quantum Dot backlights and Android TV OS. High operating temperatures can cause backlight driver trips or Bluetooth remote pairing loss.",
        searchIntent: "Need quick <strong>Kodak Smart TV service in Karur</strong>? We repair QLED backlights, fix Bluetooth remotes, and service boards at your doorstep.",
        problems: "Uneven screen brightness, Bluetooth voice remote failing to pair, apps crashing on startup.",
        checks: "Tests QLED backlight driver boost voltages, MOSFET regulators, and Bluetooth transceiver antenna.",
        parts: "QLED backlight diode strips, LED driver board, Bluetooth remote receiver, logic board.",
        whenNeeded: "When dark patches appear on screen or remote control stops responding."
      },
      {
        title: "Kodak Full HD & HD Ready Smart LED TV",
        desc: "Standard 32-inch and 40-inch Kodak Smart televisions widely used in bedrooms across Karur. Voltage surges frequently damage input power capacitors or cause speaker audio distortion.",
        searchIntent: "Looking for <strong>Kodak LED TV repair near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at home.",
        problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines.",
        checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable.",
        whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."
      }
    ],
    modelsSeries: "Kodak CA PRO Series (43UHDX, 50UHDX, 55UHDX), 7XPRO Series, Matrix QLED Series, and SE Series. (Different Kodak models use direct-lit backlight arrays with varying strip voltages and Google TV boards).",
    problems: [
      {
        badge: "Smart OS",
        title: "Kodak TV Stuck on Google TV Startup Logo",
        label1: "Problem Observed",
        val1: "When powered on, the Google TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.",
        label2: "Why This Happens",
        val2: "Corrupted Google TV firmware, failed system update, or bad memory sectors on the eMMC flash storage chip.",
        label3: "Technician Inspection",
        val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the Kodak logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Clearly but Kodak Screen is Black",
        label1: "Problem Observed",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Why This Happens",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "Technician Inspection",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Remote Control",
        title: "Kodak Bluetooth Voice Remote Disconnects Often",
        label1: "Problem Observed",
        val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.",
        label2: "Why This Happens",
        val2: "Bluetooth pairing disconnected, remote firmware out of sync, or the internal Bluetooth transceiver on the TV motherboard is faulty.",
        label3: "Technician Inspection",
        val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power."
      },
      {
        badge: "Power Circuit",
        title: "Kodak TV Completely Dead / No Power Light",
        label1: "Problem Observed",
        val1: "Power cord is connected to mains, but the front red indicator light does not glow at all and the TV does not respond to remote.",
        label2: "Why This Happens",
        val2: "A mains voltage spike blew the glass fuse, shorted the bridge rectifier, or damaged the primary switching IC on the combo board.",
        label3: "Technician Inspection",
        val3: "Tests the AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on the board."
      },
      {
        badge: "HDMI Issue",
        title: "Kodak HDMI eARC Port Not Communicating with Soundbar",
        label1: "Problem Observed",
        val1: "Soundbar connected via HDMI eARC produces zero sound and TV settings display 'Audio system communication error'.",
        label2: "Why This Happens",
        val2: "CEC/eARC controller IC failure or damaged 5V detection pin on the primary HDMI input socket.",
        label3: "Technician Inspection",
        val3: "Tests eARC signal traces, verifies HDMI CEC handshake in service menu, and repairs connector pins."
      },
      {
        badge: "Thermal Cutoff",
        title: "Kodak TV Powers Off by Itself During Video Streaming",
        label1: "Problem Observed",
        val1: "Television starts and plays YouTube or Netflix for 20 minutes, then abruptly clicks and shuts down into standby.",
        label2: "Why This Happens",
        val2: "Mainboard processor overheating due to degraded thermal interface or failing secondary voltage regulator.",
        label3: "Technician Inspection",
        val3: "Cleans processor heat sink, applies high-conductivity thermal paste, and tests regulator voltages under load."
      }
    ],
    customerExperiences: [
      {
        locality: "Kovai Road",
        title: "Kodak 50-inch CA PRO Backlight Replacement",
        text: "A customer near Kovai Road had a 50-inch Kodak CA PRO TV where channel sound was audible but the display was dark. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Thanthonimalai",
        title: "Kodak 43-inch Google TV Boot Loop Fix",
        text: "A household in Thanthonimalai had a 43-inch Kodak Smart TV stuck on the Google TV logo. The technician accessed the service recovery mode, reinstalled the firmware cache, and restored normal streaming app functions without replacing the motherboard."
      },
      {
        locality: "Kagithapuramam",
        title: "Kodak 32-inch LED Power Board Servicing",
        text: "A resident in Kagithapuramam contacted us when their 32-inch Kodak TV went dead following lightning. The technician checked the combo power supply, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
      }
    ]
  },

  // 15. ONEPLUS
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
      "Is your OnePlus television showing a completely dark screen while audio plays, stuck on the OnePlus boot animation, or refusing to connect to its smart remote? OnePlus televisions are widely admired across Karur for Gamma Engine picture processing and sleek bezel-less design, but backlight diode burn and firmware update freezes require expert attention.",
      "If you need dependable <strong>OnePlus Smart TV repair in Karur</strong> around Pasupathipalayam, quick <strong>OnePlus LED TV repair near me</strong> in Kagithapuramam, or an experienced <strong>OnePlus TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests OnePlus Gamma Engine motherboards, direct-lit LED backlight arrays, SMPS power supplies, and Bluetooth remote modules right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "OnePlus U1S & 4K UHD TV Repair",
        desc: "OnePlus U1S series (50-inch, 55-inch, 65-inch) features 4K UHD resolution with HDR10+ and Gamma Engine. When high-brightness backlight diode strips burn out over continuous use, sound continues playing while the display remains completely black.",
        searchIntent: "Searching for <strong>OnePlus 4K TV repair in Karur</strong>? We diagnose U1S screen blackout, Gamma Engine board issues, and HDMI eARC errors at your residence.",
        problems: "Sound playing clearly while display is black, red indicator light blinking, TV rebooting every 10 seconds.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."
      },
      {
        title: "OnePlus Y Series (Y1, Y1S, Y1S Pro) Repair",
        desc: "Popular 32-inch and 43-inch OnePlus Y Series Smart TVs widely installed in bedrooms across Karur. These models run OxygenPlay and Android TV OS, where software corruption can cause boot loops on the red OnePlus logo.",
        searchIntent: "Need quick <strong>OnePlus Smart TV service in Karur</strong>? We repair Y Series motherboards, replace backlight strips, and fix boot loops at your doorstep.",
        problems: "Stuck on OnePlus startup logo, Wi-Fi failing to connect to broadband, Bluetooth remote unpairing.",
        checks: "Accesses service recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module.",
        parts: "Android motherboard, internal Wi-Fi module, eMMC flash memory, Bluetooth remote sensor.",
        whenNeeded: "When the TV cannot get past the opening logo or streaming apps crash every time they open."
      },
      {
        title: "OnePlus QLED (Q1, Q2 Pro) TV Repair",
        desc: "Premium OnePlus QLED models featuring Quantum Dot color reproduction and high-output integrated soundbars. Component handling requires specialized care during power board or backlight driver servicing.",
        searchIntent: "Looking for <strong>OnePlus LED TV repair near me</strong> in Karur? We service QLED backlights, power boards, and soundbars across Karur homes.",
        problems: "Uneven screen brightness, screen flickering during bright scenes, television tripping off after 10 minutes.",
        checks: "Tests Quantum Dot LED driver boost voltages, MOSFET regulators, and multi-zone dimming control lines.",
        parts: "QLED backlight diode strips, LED driver board, T-Con timing controller, thermal heat pads.",
        whenNeeded: "When dark vertical bands appear on screen or television shuts off automatically during high-definition movies."
      }
    ],
    modelsSeries: "OnePlus Y Series (32Y1, 43Y1, 43Y1S Pro, 50Y1S Pro), U Series (50U1S, 55U1S, 65U1S), and Q Series QLED (55Q1, 65Q2 Pro). (Different OnePlus series feature distinct Gamma Engine motherboards and high-voltage backlight arrays).",
    problems: [
      {
        badge: "Smart OS",
        title: "OnePlus TV Stuck on Red OnePlus Boot Animation",
        label1: "Customer Symptom",
        val1: "When powered on, the red OnePlus logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.",
        label2: "Likely Component Fault",
        val2: "Corrupted OxygenPlay or Android firmware, failed system update, or bad memory sectors on the eMMC flash storage chip.",
        label3: "How We Check & Fix",
        val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the OnePlus logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Clearly but OnePlus Screen is Dark",
        label1: "Customer Symptom",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Likely Component Fault",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "How We Check & Fix",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Remote Control",
        title: "OnePlus Bluetooth Smart Remote Unpairing",
        label1: "Customer Symptom",
        val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.",
        label2: "Likely Component Fault",
        val2: "Bluetooth pairing disconnected, remote firmware out of sync, or the internal Bluetooth transceiver on the TV motherboard is faulty.",
        label3: "How We Check & Fix",
        val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power."
      },
      {
        badge: "Wireless Network",
        title: "OnePlus TV Fails to Connect to 5GHz Wi-Fi Band",
        label1: "Customer Symptom",
        val1: "TV detects 2.4GHz network but fails to see or connect to 5GHz high-speed Wi-Fi, causing 4K streaming to buffer constantly.",
        label2: "Likely Component Fault",
        val2: "Dual-band Wi-Fi module 5GHz transceiver degradation or regional channel restriction in network settings.",
        label3: "How We Check & Fix",
        val3: "Tests 3.3V power to the wireless card, adjusts Wi-Fi router channel frequency, and replaces the module if defective."
      },
      {
        badge: "Signal Port",
        title: "OnePlus TV HDMI 'No Signal' from Gaming Console / DTH",
        label1: "Customer Symptom",
        val1: "Set-top box is turned on, but TV screen shows 'No Signal' across all HDMI ports even after changing HDMI cables.",
        label2: "Likely Component Fault",
        val2: "Loose connector pins on the port or a failed HDMI switch controller IC on the OnePlus motherboard from lightning.",
        label3: "How We Check & Fix",
        val3: "Tests port continuity with a multimeter, resolders loose pins, or replaces the damaged HDMI IC on the motherboard."
      },
      {
        badge: "Display Flicker",
        title: "Screen Flickering or Dimming During HDR Content",
        label1: "Customer Symptom",
        val1: "Picture brightness pulses rapidly or drops significantly whenever an HDR10 movie or bright scene begins playing.",
        label2: "Likely Component Fault",
        val2: "Backlight booster circuit unable to sustain peak HDR current demand due to aged electrolytic filtering capacitors.",
        label3: "How We Check & Fix",
        val3: "Measures booster DC voltage under peak HDR load, replaces weak power board filter capacitors, and updates display profile."
      }
    ],
    customerExperiences: [
      {
        locality: "Kagithapuramam",
        title: "OnePlus 50-inch U1S 4K Backlight Repair",
        text: "A customer in Kagithapuramam had a 50-inch OnePlus U1S TV where YouTube audio played clearly but the screen was completely black. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Pasupathipalayam",
        title: "OnePlus 43-inch Y1S Boot Loop Recovery",
        text: "A family in Pasupathipalayam reported their 43-inch OnePlus TV stuck on the red boot animation. The technician accessed recovery mode, cleared corrupted system cache, and restored normal streaming app functions on-site without replacing the motherboard."
      },
      {
        locality: "Karur Town",
        title: "OnePlus 32-inch Y1 Remote Re-pairing",
        text: "A resident near Karur Clock Tower contacted us when their OnePlus Bluetooth remote refused to pair. The technician cleared the Bluetooth device registration in recovery settings, re-paired the remote hardware, and restored voice search on-site."
      }
    ]
  },

  // 16. SANYO
  {
    name: "Sanyo",
    slug: "sanyo-tv-repair-service-in-karur.html",
    h1: "Sanyo TV Repair Service in Karur",
    metaTitle: "Sanyo TV Repair Service in Karur | Kaizen & LED TV Repair",
    metaDesc: "Need Sanyo TV repair in Karur? Doorstep inspection for Sanyo Kaizen 4K, Android & LED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Sanyo TV Repair in Karur?",
    introTamil: "Sanyo TV-la sound varudhu picture varalaiya? Kaizen logo-laye restart aagudha?",
    introTanglish: "Sanyo TV on pannumbodhu display dark-aa irukka or standby red light blink aagudha? <strong>Sanyo TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Kaizen 4K, Nebula Android, and XT Series problems spot-laye check pannuvom.",
    introText: [
      "Is your Sanyo television playing channel sound with a pitch-black screen, failing to power on, or stuck in an endless Android boot loop? Sanyo televisions and Kaizen Smart series (backed by Panasonic engineering) are popular across Karur for clean display quality, but backlight diode burn and SMPS board trips happen with years of use.",
      "If you need dependable <strong>Sanyo LED TV repair near me</strong> in Kagithapuramam, quick <strong>Sanyo Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>Sanyo TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests Sanyo Kaizen motherboards, SMPS power supply boards, direct-lit LED backlight arrays, and IPS panel timing circuits right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "Sanyo Kaizen 4K Ultra HD TV Repair",
        desc: "Sanyo Kaizen 4K televisions feature IPS display panels, Android TV OS, and Dolby Audio. When high-brightness backlight diode strips burn out over continuous use, sound continues playing while the display remains completely black.",
        searchIntent: "Searching for <strong>Sanyo 4K TV repair in Karur</strong>? We diagnose Kaizen 4K screen blackout, boot loops, and HDMI connectivity issues at your residence.",
        problems: "Sound playing clearly while display is black, red indicator light blinking, TV rebooting every 10 seconds.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."
      },
      {
        title: "Sanyo Nebula Android Smart TV Repair",
        desc: "Sanyo Nebula series Smart TVs powered by Android TV OS support OTT streaming apps and Google Assistant. Software update interruptions or memory wear can cause boot loops or prevent Wi-Fi from connecting.",
        searchIntent: "Need quick <strong>Sanyo Smart TV service in Karur</strong>? We fix Android boot loop, Wi-Fi disconnect, and remote pairing issues at your home.",
        problems: "Television stuck on Android boot animation, Wi-Fi failing to connect to broadband, remote voice search dead.",
        checks: "Accesses Android recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module.",
        parts: "Android logic motherboard, internal Wi-Fi module, flash memory chip, remote sensor board.",
        whenNeeded: "When the television reboots continuously or streaming apps crash every time they open."
      },
      {
        title: "Sanyo XT Series Full HD LED TV",
        desc: "Standard 32-inch and 43-inch Sanyo LED televisions widely used in bedrooms and living rooms across Karur. Voltage surges frequently affect the input power supply, or internal speakers develop rattling noises.",
        searchIntent: "Looking for <strong>Sanyo LED TV repair in Karur</strong>? We repair power supply boards, replace backlight strips, and service speakers at your doorstep.",
        problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines.",
        checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable.",
        whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."
      }
    ],
    modelsSeries: "Sanyo Kaizen Series (XT-43UHD4S, XT-50UHD4S, XT-55UHD4S), Nebula Series, XT Series Full HD, and HD Ready LED models. (Different Sanyo models use Panasonic-engineered motherboards and direct-lit LED arrays).",
    problems: [
      {
        badge: "Smart OS",
        title: "Sanyo Kaizen TV Stuck on Android Startup Logo",
        label1: "Issue Reported",
        val1: "When powered on, the Android TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.",
        label2: "Fault Origin",
        val2: "Corrupted Android system cache, failed system update, or bad memory sectors on the eMMC flash storage chip.",
        label3: "Technician Action",
        val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the Sanyo logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Clearly but Sanyo Screen is Dark",
        label1: "Issue Reported",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Fault Origin",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "Technician Action",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Power Circuit",
        title: "Sanyo TV Standby Light Stays Red and Never Turns On",
        label1: "Issue Reported",
        val1: "Front indicator glows red, but pressing power on remote or side keypad produces zero change in light or relay click.",
        label2: "Fault Origin",
        val2: "Missing 3.3V power-on standby signal from the system micro-controller or corrupted microcontroller EEPROM code.",
        label3: "Technician Action",
        val3: "Verifies 3.3V reset rail, checks standby command line, and reflashes system micro-controller EEPROM."
      },
      {
        badge: "Audio Issue",
        title: "Sanyo TV Speaker Buzzing or Distorted Sound",
        label1: "Issue Reported",
        val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.",
        label2: "Fault Origin",
        val2: "The internal speaker paper cone surround has torn due to humidity and heat, causing the voice coil to rub against the magnet.",
        label3: "Technician Action",
        val3: "Tests speaker impedance with a multimeter and installs a matched replacement Sanyo acoustic speaker pair."
      },
      {
        badge: "Display Timing",
        title: "Vertical Colored Lines on Sanyo IPS Display",
        label1: "Issue Reported",
        val1: "Thin green or pink vertical lines run from top to bottom across the picture, sometimes with image jumping.",
        label2: "Fault Origin",
        val2: "Failing T-Con timing controller IC, oxidised LVDS ribbon pins, or moisture damage to the panel's Chip-on-Film (COF) bonds.",
        label3: "Technician Action",
        val3: "Cleans and reseats LVDS ribbon cables, measures VGH and VGL voltages on the T-Con board, and inspects panel edge bonding."
      },
      {
        badge: "Signal Port",
        title: "Sanyo HDMI 2 Port Loose and Picture Flickers",
        label1: "Issue Reported",
        val1: "Picture drops to static or black screen whenever the HDMI cable is touched, or set-top box shows 'No Signal'.",
        label2: "Fault Origin",
        val2: "Physical pin fatigue from cable weight or cracked solder tracks on the surface-mount HDMI socket.",
        label3: "Technician Action",
        val3: "Reflows terminal pins with lead-free solder, reinforces connector anchor lugs, and verifies digital video handshake."
      }
    ],
    customerExperiences: [
      {
        locality: "Thanthonimalai",
        title: "Sanyo 43-inch Kaizen 4K Backlight Repair",
        text: "A customer in Thanthonimalai noticed their 43-inch Sanyo Kaizen TV playing channel audio clearly while the screen remained totally black. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Pasupathipalayam",
        title: "Sanyo 32-inch LED Power Board Servicing",
        text: "A household in Pasupathipalayam had a 32-inch Sanyo TV that went dead following voltage fluctuations during rain. The technician diagnosed the power board, replaced a blown fuse and shorted rectifier diode on-site, restoring power without needing a costly whole-board replacement."
      },
      {
        locality: "Kagithapuramam",
        title: "Sanyo 50-inch Smart TV Boot Loop Fix",
        text: "A resident in Kagithapuramam reported their 50-inch Sanyo Smart TV stuck on the Android boot logo. The technician accessed the service recovery mode, reinstalled the firmware cache, and restored normal streaming app functions without replacing the motherboard."
      }
    ]
  },

  // 17. AKAI
  {
    name: "Akai",
    slug: "akai-tv-repair-service-in-karur.html",
    h1: "Akai TV Repair Service in Karur",
    metaTitle: "Akai TV Repair Service in Karur | Fire TV & LED TV Repair",
    metaDesc: "Need Akai TV repair in Karur? Doorstep inspection for Akai Fire TV Edition, 4K UHD & Smart LED TVs. Backlight strip replacement & power board repair.",
    introHeading: "Need Akai TV Repair in Karur?",
    introTamil: "Akai Fire TV-la sound varudhu screen dark-aa irukka? Fire OS logo-laye nikkudha?",
    introTanglish: "Akai TV on pannumbodhu display varalaiya or Alexa remote connect aagala? <strong>Akai TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Fire TV Edition, 4K UHD, and Smart LED problems spot-laye check pannuvom.",
    introText: [
      "Is your Akai television playing audio with a completely dark screen, failing to power on, or stuck in an endless Fire TV boot loop? Akai televisions and Fire TV Edition models are popular across Karur for built-in Alexa streaming and Japanese audio heritage, but power supply fluctuations and backlight diode burnout happen with years of use.",
      "If you need dependable <strong>Akai LED TV repair near me</strong> in Kagithapuramam, quick <strong>Akai Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>Akai TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests Akai Fire TV motherboards, SMPS power supply boards, direct-lit LED backlight arrays, and Alexa remote receivers right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "Akai Fire TV Edition 4K UHD Repair",
        desc: "Akai Fire TV Edition televisions feature built-in Fire OS with Alexa voice control and 4K Ultra HD resolution. When direct-lit backlight diodes burn out over daily use, sound continues playing while the display remains completely black.",
        searchIntent: "Searching for <strong>Akai 4K TV repair in Karur</strong>? We diagnose Fire TV screen blackout, Fire OS boot loops, and HDMI eARC errors at your residence.",
        problems: "Sound playing clearly while display is black, red indicator light blinking, TV rebooting every 10 seconds.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."
      },
      {
        title: "Akai Smart Android LED TV Repair",
        desc: "Akai Smart TVs powered by Android OS feature built-in Wi-Fi and streaming apps. Corrupted firmware or memory degradation on the mainboard can freeze the television on the Akai startup screen.",
        searchIntent: "Need quick <strong>Akai Smart TV service in Karur</strong>? We resolve Android boot loops, Wi-Fi disconnect, and app freezing issues at your home.",
        problems: "Stuck on Akai startup logo, Wi-Fi failing to connect to broadband, remote voice search dead.",
        checks: "Accesses service recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module.",
        parts: "Android motherboard, internal Wi-Fi module, eMMC flash memory, remote sensor.",
        whenNeeded: "When the TV cannot get past the opening logo or streaming apps crash every time they open."
      },
      {
        title: "Akai Full HD & HD Ready LED TV",
        desc: "Standard 32-inch and 40-inch Akai LED televisions widely used in bedrooms across Karur. Voltage surges frequently affect the input power supply, or internal speakers develop rattling noises.",
        searchIntent: "Looking for <strong>Akai TV technician near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at home.",
        problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines.",
        checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable.",
        whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."
      }
    ],
    modelsSeries: "Akai Fire TV Edition (AKLT43U-FTS, AKLT50U-FTS, AKLT55U-FTS), Akai 4K UHD Series, and Full HD LED series. (Different Akai series use Fire OS logic boards or Android combo boards with direct-lit LED arrays).",
    problems: [
      {
        badge: "Smart OS",
        title: "Akai Fire TV Stuck on Fire OS Boot Logo",
        label1: "Problem Observed",
        val1: "When powered on, the orange Fire TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.",
        label2: "Why This Happens",
        val2: "Corrupted Fire OS firmware partition, failed background update, or bad memory sectors on the eMMC flash storage chip.",
        label3: "Technician Inspection",
        val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the Akai logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Clearly but Akai Screen is Black",
        label1: "Problem Observed",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Why This Happens",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "Technician Inspection",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Remote Control",
        title: "Akai Alexa Voice Remote Pairing Failure",
        label1: "Problem Observed",
        val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.",
        label2: "Why This Happens",
        val2: "Bluetooth pairing disconnected, remote firmware out of sync, or the internal Bluetooth transceiver on the TV motherboard is faulty.",
        label3: "Technician Inspection",
        val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power."
      },
      {
        badge: "Power Circuit",
        title: "Akai TV Completely Dead After Thunderstorm",
        label1: "Problem Observed",
        val1: "Power cord is connected to mains, but the front red indicator light does not glow at all and the TV does not respond to remote.",
        label2: "Why This Happens",
        val2: "A mains voltage spike blew the glass fuse, shorted the bridge rectifier, or damaged the primary switching IC on the combo board.",
        label3: "Technician Inspection",
        val3: "Tests the AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on the board."
      },
      {
        badge: "Audio Issue",
        title: "Akai TV Speaker Buzzing or Distorted Sound",
        label1: "Problem Observed",
        val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.",
        label2: "Why This Happens",
        val2: "The internal speaker paper cone surround has torn due to humidity and heat, causing the voice coil to rub against the magnet.",
        label3: "Technician Inspection",
        val3: "Tests speaker impedance with a multimeter and installs a matched replacement Akai acoustic speaker pair."
      },
      {
        badge: "Signal Port",
        title: "Akai TV HDMI 'No Signal' from Cable Box",
        label1: "Problem Observed",
        val1: "Set-top box is turned on, but TV screen shows 'No Signal' across all HDMI ports even after changing HDMI cables.",
        label2: "Why This Happens",
        val2: "Loose connector pins on the port or a failed HDMI switch controller IC on the Akai motherboard from lightning.",
        label3: "Technician Inspection",
        val3: "Tests port continuity with a multimeter, resolders loose pins, or replaces the damaged HDMI IC on the motherboard."
      }
    ],
    customerExperiences: [
      {
        locality: "Kagithapuramam",
        title: "Akai 50-inch Fire TV Backlight Repair",
        text: "A customer in Kagithapuramam had a 50-inch Akai Fire TV where channel sound was audible but the display remained dark. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Pasupathipalayam",
        title: "Akai 43-inch Fire OS Boot Loop Fix",
        text: "A family in Pasupathipalayam reported their 43-inch Akai TV stuck on the Fire TV logo and restarting continuously. The technician accessed the service recovery mode, reinstalled the firmware cache, and restored normal streaming app functions without replacing the motherboard."
      },
      {
        locality: "Kovai Road",
        title: "Akai 32-inch LED Power Board Servicing",
        text: "A resident near Kovai Road contacted us when their 32-inch Akai TV went dead following lightning. The technician checked the combo power supply, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
      }
    ]
  },

  // 18. ONIDA
  {
    name: "Onida",
    slug: "onida-tv-repair-service-in-karur.html",
    h1: "Onida TV Repair Service in Karur",
    metaTitle: "Onida TV Repair Service in Karur | Fire TV & LED TV Repair",
    metaDesc: "Need Onida TV repair in Karur? Doorstep inspection for Onida Fire TV Edition, KY Rock & LED TVs. Backlight strip replacement & Devil's Horn speaker repair.",
    introHeading: "Need Onida TV Repair in Karur?",
    introTamil: "Onida TV-la sound varudhu display dark-aa irukka? Fire TV logo-laye restart aagudha?",
    introTanglish: "Onida TV switch-on pannumbodhu display varalaiya or speaker rattle aagudha? <strong>Onida TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Fire TV Edition, KY Rock, and Leo Series problems spot-laye check pannuvom.",
    introText: [
      "Is your Onida television playing sound with a pitch-black screen, failing to power on, or showing severe speaker rattle from its Devil's Horn subwoofers? Onida is a beloved Indian television brand with a loyal following in Karur, but after years of use, backlight LED diodes and SMPS power boards need skilled repair.",
      "If you need dependable <strong>Onida LED TV repair near me</strong> in Kagithapuramam, quick <strong>Onida Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>Onida TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests Onida Fire TV motherboards, Devil's Horn audio circuits, direct-lit LED backlight arrays, and SMPS power boards right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "Onida Fire TV Edition 4K UHD Repair",
        desc: "Onida Fire TV Edition televisions feature built-in Fire OS with Alexa voice remote and Dolby Audio. When direct-lit backlight diodes burn out over daily use, sound continues playing while the display remains completely black.",
        searchIntent: "Searching for <strong>Onida 4K TV repair in Karur</strong>? We diagnose Fire TV screen blackout, Fire OS boot loops, and HDMI eARC errors at your residence.",
        problems: "Sound playing clearly while display is black, red indicator light blinking, TV rebooting every 10 seconds.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."
      },
      {
        title: "Onida KY Rock & Devil's Horn Series Repair",
        desc: "Onida KY Rock models are celebrated for powerful Devil's Horn bass subwoofers and high dynamic sound. Heavy bass vibration over time can loosen internal speaker baffles or damage audio amplifier circuits.",
        searchIntent: "Need quick <strong>Onida Smart TV service in Karur</strong>? We repair Devil's Horn subwoofers, fix audio distortion, and service boards at your doorstep.",
        problems: "Severe speaker rattling during dialogue, sound cutting out at high volume, subwoofer buzz.",
        checks: "Tests audio amplifier IC operating voltages, inspects speaker cone surrounds, and checks acoustic seal.",
        parts: "Devil's Horn speaker modules, audio amplifier IC, SMPS power board, LVDS cable.",
        whenNeeded: "When speakers rattle unpleasantly or audio cuts off during movies."
      },
      {
        title: "Onida Leo & Live Genius Full HD LED TV",
        desc: "Standard 32-inch and 40-inch Onida LED televisions widely used in bedrooms across Karur. Voltage surges frequently affect the input power supply, or internal speakers develop rattling noises.",
        searchIntent: "Looking for <strong>Onida TV technician near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at home.",
        problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines.",
        checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable.",
        whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."
      }
    ],
    modelsSeries: "Onida Fire TV Edition (32HIF, 43FIF, 50UIF), KY Rock Series, Leo Series, and Live Genius Smart TVs. (Different Onida series feature Fire OS logic boards or standard Android combo motherboards with high-output audio circuits).",
    problems: [
      {
        badge: "Smart OS",
        title: "Onida Fire TV Stuck on Startup Logo Loop",
        label1: "Customer Symptom",
        val1: "When powered on, the Fire TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.",
        label2: "Likely Component Fault",
        val2: "Corrupted Fire OS firmware partition, failed background update, or bad memory sectors on the eMMC flash storage chip.",
        label3: "How We Check & Fix",
        val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the Onida logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Clearly but Onida Screen is Black",
        label1: "Customer Symptom",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Likely Component Fault",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "How We Check & Fix",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Audio Issue",
        title: "Devil's Horn Subwoofer Rattles Heavily on Onida TV",
        label1: "Customer Symptom",
        val1: "Bass notes in background music produce an irritating buzzing noise that drowns out spoken dialogue on the TV.",
        label2: "Likely Component Fault",
        val2: "Acoustic speaker enclosure mounting clips have vibrated loose or speaker cone paper has separated at the seam.",
        label3: "How We Check & Fix",
        val3: "Inspects speaker mounting baffles, dampens resonance with acoustic pads, and replaces torn speaker units."
      },
      {
        badge: "Power Circuit",
        title: "Onida TV Completely Dead with No Standby Light",
        label1: "Customer Symptom",
        val1: "Power cord is connected to mains, but the front red indicator light does not glow at all and the TV does not respond to remote.",
        label2: "Likely Component Fault",
        val2: "A mains voltage spike blew the glass fuse, shorted the bridge rectifier, or damaged the primary switching IC on the combo board.",
        label3: "How We Check & Fix",
        val3: "Tests the AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on the board."
      },
      {
        badge: "Remote Lag",
        title: "Onida Alexa Remote Commands Experience Severe Delay",
        label1: "Customer Symptom",
        val1: "Pressing volume or channel buttons takes 4 to 8 seconds to respond on screen, making menu navigation nearly impossible.",
        label2: "Likely Component Fault",
        val2: "CPU overload caused by background log creation or failing IR receiver buffer capacitor on the front control board.",
        label3: "How We Check & Fix",
        val3: "Resets mainboard system buffer, tests front sensor decoupling capacitors, and checks CPU operating temperature."
      },
      {
        badge: "Display Timing",
        title: "Colored Horizontal Lines Across Onida Screen",
        label1: "Customer Symptom",
        val1: "Thin green or pink horizontal lines run across the Onida display, interfering with normal viewing.",
        label2: "Likely Component Fault",
        val2: "T-Con logic timing board synchronization error, oxidised LVDS cable contacts, or side COF panel bond issue.",
        label3: "How We Check & Fix",
        val3: "Cleans LVDS ribbon contacts, measures T-Con board reference voltages (VGH, VGL, VDD), and checks ribbon seating."
      }
    ],
    customerExperiences: [
      {
        locality: "Thanthonimalai",
        title: "Onida 43-inch Fire TV Backlight Repair",
        text: "A customer in Thanthonimalai noticed their 43-inch Onida Fire TV playing serial audio clearly while the screen remained totally black. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Kagithapuramam",
        title: "Onida 32-inch Devil's Horn Speaker Replacement",
        text: "A family in Kagithapuramam reported severe audio rattling from their Onida TV during movies. The technician inspected the Devil's Horn speaker modules, found torn paper surrounds, and installed matched replacement acoustic drivers on-site."
      },
      {
        locality: "Pasupathipalayam",
        title: "Onida 32-inch LED Power Board Servicing",
        text: "A resident in Pasupathipalayam contacted us when their 32-inch Onida TV went dead following lightning. The technician checked the combo power supply, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
      }
    ]
  },

  // 19. AIWA
  {
    name: "Aiwa",
    slug: "aiwa-tv-repair-service-in-karur.html",
    h1: "Aiwa TV Repair Service in Karur",
    metaTitle: "Aiwa TV Repair Service in Karur | Magnifiq & 4K TV Repair",
    metaDesc: "Need Aiwa TV repair in Karur? Doorstep inspection for Aiwa Magnifiq 4K, Google TV & OLED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Aiwa TV Repair in Karur?",
    introTamil: "Aiwa TV-la sound varudhu display black-aa irukka? Magnifiq logo-la freeze aagudha?",
    introTanglish: "Aiwa TV switch-on panna picture varalaiya or Amphitheatre sound crackle aagudha? <strong>Aiwa TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Magnifiq 4K, Google TV, and Bezel-less LED problems spot-laye check pannuvom.",
    introText: [
      "Is your Aiwa television playing audio with a dark screen, refusing to power on, or stuck in a Google TV boot loop? Aiwa televisions are known across Karur for Japanese audio heritage and vivid Magnifiq 4K display panels, but power supply fluctuations and backlight diode burnout happen with years of use.",
      "If you need dependable <strong>Aiwa LED TV repair near me</strong> in Kagithapuramam, quick <strong>Aiwa Smart TV repair in Karur</strong> around Pasupathipalayam, or an experienced <strong>Aiwa TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests Aiwa Magnifiq motherboards, SMPS power supply boards, direct-lit LED backlight arrays, and Amphitheatre audio circuits right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "Aiwa Magnifiq 4K Google TV Repair",
        desc: "Aiwa Magnifiq 4K models feature bezel-less displays powered by Google TV OS with Amphitheatre sound. When direct-lit backlight diodes burn out over daily use, sound continues playing while the display remains completely black.",
        searchIntent: "Searching for <strong>Aiwa 4K TV repair in Karur</strong>? We diagnose Magnifiq screen blackout, Google TV boot loops, and HDMI eARC errors at your residence.",
        problems: "Sound playing clearly while display is black, red indicator light blinking, TV rebooting every 10 seconds.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."
      },
      {
        title: "Aiwa Smart Android LED TV Repair",
        desc: "Aiwa Smart TVs powered by Android OS feature built-in Wi-Fi and streaming apps. Corrupted firmware or memory degradation on the mainboard can freeze the television on the Aiwa startup screen.",
        searchIntent: "Need quick <strong>Aiwa Smart TV service in Karur</strong>? We resolve Android boot loops, Wi-Fi disconnect, and app freezing issues at your home.",
        problems: "Stuck on Aiwa startup logo, Wi-Fi failing to connect to broadband, remote voice search dead.",
        checks: "Accesses service recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module.",
        parts: "Android motherboard, internal Wi-Fi module, eMMC flash memory, remote sensor.",
        whenNeeded: "When the TV cannot get past the opening logo or streaming apps crash every time they open."
      },
      {
        title: "Aiwa Full HD & HD Ready LED TV",
        desc: "Standard 32-inch and 43-inch Aiwa LED televisions widely used in bedrooms across Karur. Voltage surges frequently affect the input power supply, or internal speakers develop rattling noises.",
        searchIntent: "Looking for <strong>Aiwa TV technician near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at home.",
        problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines.",
        checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable.",
        whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."
      }
    ],
    modelsSeries: "Aiwa Magnifiq Series (43UHD, 50UHD, 55UHD), Aiwa OLED Series, and Bezel-less Smart LED Series. (Different Aiwa series feature Japanese audio engineering and direct-lit LED arrays).",
    problems: [
      {
        badge: "Smart OS",
        title: "Aiwa TV Stuck on Magnifiq Startup Animation",
        label1: "Fault Observed",
        val1: "When powered on, the Magnifiq logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.",
        label2: "Possible Failure",
        val2: "Corrupted Google TV firmware partition, failed background update, or bad memory sectors on the eMMC flash storage chip.",
        label3: "Technician Solution",
        val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the Aiwa logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Clearly but Aiwa Screen is Black",
        label1: "Fault Observed",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Possible Failure",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "Technician Solution",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Audio Issue",
        title: "Amphitheatre Audio Crackles or Distorts Heavily",
        label1: "Fault Observed",
        val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.",
        label2: "Possible Failure",
        val2: "The internal speaker paper cone surround has torn due to humidity and heat, causing the voice coil to rub against the magnet.",
        label3: "Technician Solution",
        val3: "Tests speaker impedance with a multimeter and installs a matched replacement Aiwa acoustic speaker pair."
      },
      {
        badge: "Power Circuit",
        title: "Aiwa TV Completely Dead After Power Outage",
        label1: "Fault Observed",
        val1: "Power cord is connected to mains, but the front red indicator light does not glow at all and the TV does not respond to remote.",
        label2: "Possible Failure",
        val2: "A mains voltage spike blew the glass fuse, shorted the bridge rectifier, or damaged the primary switching IC on the combo board.",
        label3: "Technician Solution",
        val3: "Tests the AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on the board."
      },
      {
        badge: "Wireless Network",
        title: "Aiwa TV Wi-Fi Disconnects During 4K Streaming",
        label1: "Fault Observed",
        val1: "TV connects to home Wi-Fi for 3 minutes, then disconnects with an error saying 'Network cable unplugged' or 'No internet'.",
        label2: "Possible Failure",
        val2: "Overheating Wi-Fi transceiver module on the mainboard or corrupted wireless network profile data.",
        label3: "Technician Solution",
        val3: "Checks 3.3V DC power rail to the Wi-Fi card, inspects antenna connections, and resets network subsystem settings."
      },
      {
        badge: "Signal Port",
        title: "Aiwa TV HDMI 'No Signal' from Cable Box",
        label1: "Fault Observed",
        val1: "Set-top box is turned on, but TV screen shows 'No Signal' across all HDMI ports even after changing HDMI cables.",
        label2: "Possible Failure",
        val2: "Loose connector pins on the port or a failed HDMI switch controller IC on the Aiwa motherboard from lightning.",
        label3: "Technician Solution",
        val3: "Tests port continuity with a multimeter, resolders loose pins, or replaces the damaged HDMI IC on the motherboard."
      }
    ],
    customerExperiences: [
      {
        locality: "Kagithapuramam",
        title: "Aiwa 50-inch Magnifiq 4K Backlight Repair",
        text: "A customer in Kagithapuramam had a 50-inch Aiwa Magnifiq TV where audio played clearly but the display remained dark. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Pasupathipalayam",
        title: "Aiwa 43-inch Smart TV Boot Loop Fix",
        text: "A family in Pasupathipalayam reported their 43-inch Aiwa Smart TV stuck on the startup logo and restarting continuously. The technician accessed the service recovery mode, reinstalled the firmware cache, and restored normal streaming app functions without replacing the motherboard."
      },
      {
        locality: "Karur Town",
        title: "Aiwa 32-inch LED Power Board Servicing",
        text: "A resident near Karur Clock Tower contacted us when their 32-inch Aiwa TV went dead following lightning. The technician checked the combo power supply, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
      }
    ]
  },

  // 20. TCL
  {
    name: "TCL",
    slug: "tcl-tv-repair-service-in-karur.html",
    h1: "TCL TV Repair Service in Karur",
    metaTitle: "TCL TV Repair Service in Karur | QLED & 4K Google TV Repair",
    metaDesc: "Need TCL TV repair in Karur? Doorstep inspection for TCL C-Series QLED, P-Series 4K & Mini-LED TVs. Backlight strip replacement & AiPQ engine repair.",
    introHeading: "Need TCL TV Repair in Karur?",
    introTamil: "TCL TV-la sound varudhu screen black-aa irukka? Google TV logo-la freeze aagudha?",
    introTanglish: "TCL TV on pannumbodhu display dark-aa irukka or remote pair aagala? <strong>TCL TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. C-Series QLED, P-Series 4K, and Mini-LED problems spot-laye check pannuvom.",
    introText: [
      "Is your TCL television showing a completely dark screen while audio plays, stuck on the Google TV startup logo, or experiencing backlight flickering? TCL is a global display giant with high market share in Karur for C-Series QLED and P-Series 4K televisions, but high-voltage backlight strips and AiPQ engine firmware updates require skilled attention.",
      "If you need dependable <strong>TCL Smart TV repair in Karur</strong> around Pasupathipalayam, quick <strong>TCL LED TV repair near me</strong> in Kagithapuramam, or an experienced <strong>TCL TV technician near me</strong> near Kovai Road, our local desk organizes timely home visits across all Karur localities.",
      "Our technician tests TCL AiPQ engine motherboards, CSOT display panels, high-voltage LED backlight arrays, and SMPS power boards right at your home, confirming an honest repair price before starting."
    ],
    tvTypes: [
      {
        title: "TCL C-Series QLED & Mini-LED TV Repair",
        desc: "TCL C-Series (C645, C745, C845) televisions feature Quantum Dot and Mini-LED backlighting with full-array local dimming. When multi-zone LED drivers overheat or individual diodes burn out, dark patches appear or the TV enters protection shutdown.",
        searchIntent: "Searching for <strong>TCL 4K TV repair in Karur</strong>? We diagnose Mini-LED dimming faults, QLED screen blackout, and HDMI eARC errors at your residence.",
        problems: "Uneven screen brightness, screen flickering during bright scenes, television tripping off after 10 minutes.",
        checks: "Tests Quantum Dot LED driver boost voltages, MOSFET regulators, and multi-zone dimming control lines.",
        parts: "QLED backlight diode strips, LED driver board, T-Con timing controller, thermal heat pads.",
        whenNeeded: "When dark vertical bands appear on screen or television shuts off automatically during high-definition movies."
      },
      {
        title: "TCL P-Series 4K Google TV Repair",
        desc: "TCL P-Series models (P635, P735) feature 4K HDR display powered by Google TV OS and AiPQ Engine. When high-voltage direct-lit backlight strips burn out over continuous use, sound continues playing while the display remains completely black.",
        searchIntent: "Need quick <strong>TCL Smart TV service in Karur</strong>? We repair Google TV motherboards, replace backlight strips, and fix boot loops at your doorstep.",
        problems: "Sound playing clearly while display is black, red indicator light blinking, TV rebooting every 10 seconds.",
        checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC.",
        parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector.",
        whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."
      },
      {
        title: "TCL S-Series Full HD & HD Ready LED TV",
        desc: "Standard 32-inch and 40-inch TCL Smart televisions widely installed in bedrooms across Karur. Voltage surges frequently affect the input power supply, or internal speakers develop rattling noises.",
        searchIntent: "Looking for <strong>TCL LED TV repair near me</strong> in Karur? We repair power supply boards, replace backlight strips, and service speakers at home.",
        problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines.",
        checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages.",
        parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable.",
        whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."
      }
    ],
    modelsSeries: "TCL C-Series QLED (C645, C745, C845 Mini-LED), P-Series 4K (P635, P735), S-Series, and Bezel-less Smart LED models. (Different TCL series use CSOT display panels and proprietary AiPQ Engine processing boards).",
    problems: [
      {
        badge: "Smart OS",
        title: "TCL TV Stuck on Google TV Startup Logo",
        label1: "Customer Symptom",
        val1: "When powered on, the Google TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.",
        label2: "Likely Component Fault",
        val2: "Corrupted Google TV firmware, failed system update, or bad memory sectors on the eMMC flash storage chip.",
        label3: "How We Check & Fix",
        val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the TCL logic board."
      },
      {
        badge: "Backlight Failure",
        title: "Audio Plays Clearly but TCL Screen is Black",
        label1: "Customer Symptom",
        val1: "Channel sound and dialogue play clearly, but the display is pitch black. A flashlight pointed at the screen reveals faint moving pictures.",
        label2: "Likely Component Fault",
        val2: "LED diodes inside the backlight strips have burned out, breaking the electrical circuit and causing the driver to shut off screen lighting.",
        label3: "How We Check & Fix",
        val3: "Technician tests each backlight strip row using an LED tester and installs a matched replacement backlight strip set."
      },
      {
        badge: "Remote Control",
        title: "TCL Bluetooth Voice Remote Pairing Failure",
        label1: "Customer Symptom",
        val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.",
        label2: "Likely Component Fault",
        val2: "Bluetooth pairing disconnected, remote firmware out of sync, or the internal Bluetooth transceiver on the TV motherboard is faulty.",
        label3: "How We Check & Fix",
        val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power."
      },
      {
        badge: "Power Circuit",
        title: "TCL TV Completely Dead / No Power Light",
        label1: "Customer Symptom",
        val1: "Power cord is connected to mains, but the front red indicator light does not glow at all and the TV does not respond to remote.",
        label2: "Likely Component Fault",
        val2: "A mains voltage spike blew the glass fuse, shorted the bridge rectifier, or damaged the primary switching IC on the combo board.",
        label3: "How We Check & Fix",
        val3: "Tests the AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on the board."
      },
      {
        badge: "Display Timing",
        title: "CSOT Panel Shows Colored Vertical Lines",
        label1: "Customer Symptom",
        val1: "Thin green or pink vertical lines run from top to bottom across the picture, sometimes with image jumping.",
        label2: "Likely Component Fault",
        val2: "Failing T-Con timing controller IC, oxidised LVDS ribbon pins, or moisture damage to the panel's Chip-on-Film (COF) bonds.",
        label3: "How We Check & Fix",
        val3: "Cleans and reseats LVDS ribbon cables, measures VGH and VGL voltages on the T-Con board, and inspects panel edge bonding."
      },
      {
        badge: "Audio Issue",
        title: "TCL TV Soundbar eARC Connection Lost",
        label1: "Customer Symptom",
        val1: "Soundbar connected via HDMI eARC produces zero sound and TV settings display 'Audio system communication error'.",
        label2: "Likely Component Fault",
        val2: "CEC/eARC controller IC failure or damaged 5V detection pin on the primary HDMI input socket.",
        label3: "How We Check & Fix",
        val3: "Tests eARC signal traces, verifies HDMI CEC handshake in service menu, and repairs connector pins."
      }
    ],
    customerExperiences: [
      {
        locality: "Pasupathipalayam",
        title: "TCL 55-inch C-Series QLED Backlight Repair",
        text: "A customer in Pasupathipalayam had a 55-inch TCL QLED TV playing YouTube audio clearly while the display remained dark. Our technician visited their residence, verified the backlight burnout with an LED tester, and replaced the complete strip set with matched spares. Picture brightness was restored on-site."
      },
      {
        locality: "Kagithapuramam",
        title: "TCL 43-inch 4K Google TV Boot Loop Fix",
        text: "A family in Kagithapuramam had a 43-inch TCL Smart TV stuck on the Google TV logo. The technician accessed the service recovery mode, reinstalled the firmware cache, and restored normal streaming app functions without replacing the motherboard."
      },
      {
        locality: "Kovai Road",
        title: "TCL 32-inch LED Power Board Servicing",
        text: "A resident near Kovai Road contacted us when their 32-inch TCL TV went dead following lightning. The technician checked the combo power supply, replaced a blown fuse and shorted primary switching IC on-site, restoring power safely."
      }
    ]
  }
];

// Deduplicate all shared phrasing in b11_to_20 using brand-specific variations
const brandSpecificUnique = [
  // 11. Hitachi
  {
    name: "Hitachi",
    uniqueProblems: [
      { badge: "Power Circuit", title: "Hitachi TV Fails to Start / Dead Standby", label1: "Problem Observed", val1: "Main switch is on and power cord connected, but front indicator on Hitachi TV stays completely unlit.", label2: "Why This Happens", val2: "Input fuse blew from voltage spike or shorted secondary MOSFET on the Hitachi SMPS board.", label3: "Technician Inspection", val3: "Technician checks AC input, tests primary 300V filter capacitor, and inspects 5V standby line." },
      { badge: "Backlight Failure", title: "Dialogue Audible but Hitachi Screen is Black", label1: "Problem Observed", val1: "Channel sound plays normally, but screen has no light. A flashlight test reveals faint moving shapes.", label2: "Why This Happens", val2: "Burned LED diode row inside Hitachi display panel or tripped boost driver protection circuit.", label3: "Technician Inspection", val3: "Uses LED strip tester to measure current draw and tests boost driver output voltage from power board." },
      { badge: "Display Lines", title: "Colored Horizontal Lines on Hitachi Screen", label1: "Problem Observed", val1: "Fine green or pink horizontal lines run across Hitachi display, interfering with normal viewing.", label2: "Why This Happens", val2: "T-Con timing logic desynchronization, oxidised LVDS ribbon pins, or side COF panel bond degradation.", label3: "Technician Inspection", val3: "Cleans LVDS ribbon contacts, measures T-Con reference voltages (VGH, VGL, VDD), and checks ribbon seating." },
      { badge: "Audio Issue", title: "Hitachi TV Speaker Rattles During Speech", label1: "Problem Observed", val1: "Voices sound raspy and vibrate unpleasantly, especially during dialogue or loud news reading.", label2: "Why This Happens", val2: "Torn paper cone surround on internal speaker drivers or degraded speaker voice coil.", label3: "Technician Inspection", val3: "Tests speaker impedance (typically 6-8 ohms) and installs factory-matched replacement acoustic drivers." },
      { badge: "Signal Port", title: "Hitachi HDMI Input Displays 'No Signal'", label1: "Problem Observed", val1: "Set-top box is powered on, but TV display shows 'No Signal' banner across all connected HDMI ports.", label2: "Why This Happens", val2: "Damaged HDMI connector pins, loose solder pads, or failed HDMI switch controller IC on mainboard.", label3: "Technician Inspection", val3: "Tests port pin continuity with multimeter, inspects solder tracks under magnification, and replaces HDMI IC if needed." },
      { badge: "Remote Sensor", title: "Hitachi Remote Commands Not Detected", label1: "Problem Observed", val1: "TV does not react to remote commands even with brand-new batteries, and front sensor LED does not blink.", label2: "Why This Happens", val2: "Defective IR photodiode sensor eye on front panel or missing 3.3V standby line from mainboard.", label3: "Technician Inspection", val3: "Measures voltage at IR receiver pin with a multimeter and repairs or replaces remote sensor board." }
    ]
  },
  // 12. Intex
  {
    name: "Intex",
    uniqueProblems: [
      { badge: "Power Circuit", title: "Intex LED Star TV Completely Dead", label1: "Customer Symptom", val1: "Power cord is plugged in, but red indicator light does not glow at all and TV does not turn on.", label2: "Likely Component Fault", val2: "Swollen electrolytic capacitors, blown mains fuse, or shorted rectifier diode on Intex combo board.", label3: "How We Check & Fix", val3: "Technician tests AC line fuse, 300V primary filter capacitor, and 12V standby power rail on-site." },
      { badge: "Backlight Failure", title: "Intex TV Sound Plays but Screen is Pitch Black", label1: "Customer Symptom", val1: "Channel sound and dialogue play clearly, but display is pitch black. A torch test shows faint pictures.", label2: "Likely Component Fault", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and shutting off lighting.", label3: "How We Check & Fix", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement strip set." },
      { badge: "Lens Defect", title: "White Circular Light Spots Across Intex Screen", label1: "Customer Symptom", val1: "Bright coin-like white light circles appear on screen, causing intense glare spots across TV picture.", label2: "Likely Component Fault", val2: "Acrylic optical diffuser lenses mounted over individual LED diodes have detached due to heat and fallen.", label3: "How We Check & Fix", val3: "Technician opens optical diffuser layers, cleans old adhesive, and refits lenses with UV heat-resistant cement." },
      { badge: "Audio Defect", title: "No Audio Output from Intex TV Speakers", label1: "Customer Symptom", val1: "Picture is completely normal, but no sound comes out of television speakers even at maximum volume.", label2: "Likely Component Fault", val2: "Audio amplifier IC on combo board burned out due to voltage surge or shorted speaker wiring.", label3: "How We Check & Fix", val3: "Measures 12V supply to audio amplifier IC, checks speaker continuity, and replaces damaged amplifier chip." },
      { badge: "Blue Screen", title: "Intex TV Frozen on Blue Screen with No Signal", label1: "Customer Symptom", val1: "Cable set-top box is turned on, but television shows blue screen with 'No Signal' banner across AV or HDMI.", label2: "Likely Component Fault", val2: "Physical pin detachment on connector socket or blown ESD diode on input line following lightning storm.", label3: "How We Check & Fix", val3: "Inspects port solder joints under magnification, resolders connection tracks, and tests video decoder input." },
      { badge: "Sensor Issue", title: "Intex TV Remote Sensor Dead to Keypad", label1: "Customer Symptom", val1: "TV does not react to remote commands even with brand-new batteries, and front sensor LED does not blink.", label2: "Likely Component Fault", val2: "Defective IR photodiode sensor eye on front panel or missing 3.3V standby line from mainboard.", label3: "How We Check & Fix", val3: "Measures voltage at IR receiver pin with a multimeter and repairs or replaces remote sensor board." }
    ]
  },
  // 13. Micromax
  {
    name: "Micromax",
    uniqueProblems: [
      { badge: "Smart OS", title: "Micromax Canvas TV Stuck in Boot Loop", label1: "Issue Reported", val1: "Television starts, displays colorful Canvas boot animation, and continues looping indefinitely without opening menu.", label2: "Fault Origin", val2: "Corrupted Android system cache, interrupted software update, or degraded eMMC flash memory blocks.", label3: "Technician Action", val3: "Connects via USB service mode to clear cache memory, test motherboard voltage rails, or reflash system firmware." },
      { badge: "Backlight Failure", title: "Audio Clear but Micromax Screen Remains Dark", label1: "Issue Reported", val1: "Serial dialogue and news broadcasts are audible, but television picture has gone totally black with faint torch silhouettes.", label2: "Fault Origin", val2: "Series LED diodes inside backlight array have burnt open, interrupting voltage loop and triggering driver shutdown.", label3: "Technician Action", val3: "Opens rear chassis carefully, tests each strip using an LED tester, and installs a fresh matched replacement backlight set." },
      { badge: "Power Circuit", title: "Micromax Spark TV Dead / Blown Line Fuse", label1: "Issue Reported", val1: "Power cord is plugged in, but red indicator light does not glow at all and TV does not respond to remote or cabinet keys.", label2: "Fault Origin", val2: "A mains voltage spike blew glass fuse, shorted bridge rectifier, or damaged primary switching IC on combo board.", label3: "Technician Action", val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on board." },
      { badge: "Audio Issue", title: "Harsh Speaker Distortion on Micromax TV", label1: "Issue Reported", val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.", label2: "Fault Origin", val2: "Internal speaker paper cone surround has torn due to humidity and heat, causing voice coil to rub against magnet.", label3: "Technician Action", val3: "Tests speaker impedance with a multimeter and installs matched replacement Micromax acoustic speaker pair." },
      { badge: "Wireless Network", title: "Micromax Smart TV Fails to Detect Wi-Fi", label1: "Issue Reported", val1: "Wi-Fi scanning returns zero networks found, or connection drops every few minutes with an authentication error.", label2: "Fault Origin", val2: "Internal Wi-Fi module power rail dropout or antenna cable disconnected inside rear cabinet.", label3: "Technician Action", val3: "Tests 3.3V DC power rail to Wi-Fi card, inspects antenna connections, and resets network subsystem settings." },
      { badge: "Backlight Burnout", title: "Upper Half of Micromax Screen Dim / Dark", label1: "Issue Reported", val1: "Upper or lower half of display is noticeably dimmer with shadowy bands, while other half displays normal picture.", label2: "Fault Origin", val2: "One branch of parallel LED backlight circuit has burnt out, dropping illumination on one side of panel.", label3: "Technician Action", val3: "Measures current draw across left and right LED channels and installs a balanced replacement backlight set." }
    ]
  },
  // 14. Kodak
  {
    name: "Kodak",
    uniqueProblems: [
      { badge: "Smart OS", title: "Kodak TV Stuck on Google TV Startup Screen", label1: "Problem Observed", val1: "When powered on, Google TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.", label2: "Why This Happens", val2: "Corrupted Google TV firmware, failed system update, or bad memory sectors on eMMC flash storage chip.", label3: "Technician Inspection", val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on Kodak logic board." },
      { badge: "Backlight Failure", title: "Audio Plays Normally but Kodak Screen is Dark", label1: "Problem Observed", val1: "Channel sound and dialogue play clearly, but display is pitch black. A flashlight pointed at screen reveals faint pictures.", label2: "Why This Happens", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.", label3: "Technician Inspection", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set." },
      { badge: "Remote Control", title: "Kodak Bluetooth Remote Disconnects Frequently", label1: "Problem Observed", val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.", label2: "Why This Happens", val2: "Bluetooth pairing disconnected, remote firmware out of sync, or internal Bluetooth transceiver on TV motherboard is faulty.", label3: "Technician Inspection", val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power." },
      { badge: "Power Circuit", title: "Kodak CA PRO TV Dead with No Indicator Glow", label1: "Problem Observed", val1: "Power cord is connected to mains, but front red indicator light does not glow at all and TV does not respond to remote.", label2: "Why This Happens", val2: "A mains voltage spike blew glass fuse, shorted bridge rectifier, or damaged primary switching IC on combo board.", label3: "Technician Inspection", val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on board." },
      { badge: "HDMI Issue", title: "Kodak HDMI eARC Soundbar Communication Failure", label1: "Problem Observed", val1: "Soundbar connected via HDMI eARC produces zero sound and TV settings display 'Audio system communication error'.", label2: "Why This Happens", val2: "CEC/eARC controller IC failure or damaged 5V detection pin on primary HDMI input socket.", label3: "Technician Inspection", val3: "Tests eARC signal traces, verifies HDMI CEC handshake in service menu, and repairs connector pins." },
      { badge: "Thermal Cutoff", title: "Kodak TV Turns Off Automatically in 20 Minutes", label1: "Problem Observed", val1: "Television starts and plays YouTube or Netflix for 20 minutes, then abruptly clicks and shuts down into standby.", label2: "Why This Happens", val2: "Mainboard processor overheating due to degraded thermal interface or failing secondary voltage regulator.", label3: "Technician Inspection", val3: "Cleans processor heat sink, applies high-conductivity thermal paste, and tests regulator voltages under load." }
    ]
  },
  // 15. OnePlus
  {
    name: "OnePlus",
    uniqueProblems: [
      { badge: "Smart OS", title: "OnePlus TV Frozen on Red Boot Animation", label1: "Customer Symptom", val1: "When powered on, red OnePlus logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.", label2: "Likely Component Fault", val2: "Corrupted OxygenPlay or Android firmware, failed system update, or bad memory sectors on eMMC flash storage chip.", label3: "How We Check & Fix", val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on OnePlus logic board." },
      { badge: "Backlight Failure", title: "Audio Plays Clearly but OnePlus Screen is Dark", label1: "Customer Symptom", val1: "Channel sound and dialogue play clearly, but display is pitch black. A flashlight pointed at screen reveals faint moving pictures.", label2: "Likely Component Fault", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.", label3: "How We Check & Fix", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set." },
      { badge: "Remote Control", title: "OnePlus Smart Remote Voice Mic Unresponsive", label1: "Customer Symptom", val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.", label2: "Likely Component Fault", val2: "Bluetooth pairing disconnected, remote firmware out of sync, or internal Bluetooth transceiver on TV motherboard is faulty.", label3: "How We Check & Fix", val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power." },
      { badge: "Wireless Network", title: "OnePlus TV Fails to Connect to 5GHz Wi-Fi", label1: "Customer Symptom", val1: "TV detects 2.4GHz network but fails to see or connect to 5GHz high-speed Wi-Fi, causing 4K streaming to buffer constantly.", label2: "Likely Component Fault", val2: "Dual-band Wi-Fi module 5GHz transceiver degradation or regional channel restriction in network settings.", label3: "How We Check & Fix", val3: "Tests 3.3V power to wireless card, adjusts Wi-Fi router channel frequency, and replaces module if defective." },
      { badge: "Signal Port", title: "OnePlus HDMI 'No Signal' from Gaming Console", label1: "Customer Symptom", val1: "Set-top box is turned on, but TV screen shows 'No Signal' across all HDMI ports even after changing HDMI cables.", label2: "Likely Component Fault", val2: "Loose connector pins on port or a failed HDMI switch controller IC on OnePlus motherboard from lightning.", label3: "How We Check & Fix", val3: "Tests port continuity with a multimeter, resolders loose pins, or replaces damaged HDMI IC on motherboard." },
      { badge: "Display Flicker", title: "Picture Flickers During HDR High-Contrast Scenes", label1: "Customer Symptom", val1: "Picture brightness pulses rapidly or drops significantly whenever an HDR10 movie or bright scene begins playing.", label2: "Likely Component Fault", val2: "Backlight booster circuit unable to sustain peak HDR current demand due to aged electrolytic filtering capacitors.", label3: "How We Check & Fix", val3: "Measures booster DC voltage under peak HDR load, replaces weak power board filter capacitors, and updates display profile." }
    ]
  },
  // 16. Sanyo
  {
    name: "Sanyo",
    uniqueProblems: [
      { badge: "Smart OS", title: "Sanyo Kaizen TV Stuck on Android Logo", label1: "Issue Reported", val1: "When powered on, Android TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.", label2: "Fault Origin", val2: "Corrupted Android system cache, failed system update, or bad memory sectors on eMMC flash storage chip.", label3: "Technician Action", val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on Sanyo logic board." },
      { badge: "Backlight Failure", title: "Dialogue Audible but Sanyo Screen Stays Dark", label1: "Issue Reported", val1: "Channel sound and dialogue play clearly, but display is pitch black. A flashlight pointed at screen reveals faint moving pictures.", label2: "Fault Origin", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.", label3: "Technician Action", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set." },
      { badge: "Standby Lock", title: "Sanyo Power LED Stays Red and Refuses to Start", label1: "Issue Reported", val1: "Front indicator glows red, but pressing power on remote or side keypad produces zero change in light or relay click.", label2: "Fault Origin", val2: "Missing 3.3V power-on standby signal from system micro-controller or corrupted microcontroller EEPROM code.", label3: "Technician Action", val3: "Verifies 3.3V reset rail, checks standby command line, and reflashes system micro-controller EEPROM." },
      { badge: "Audio Issue", title: "Raspy Speaker Sound from Sanyo TV", label1: "Issue Reported", val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.", label2: "Fault Origin", val2: "Internal speaker paper cone surround has torn due to humidity and heat, causing voice coil to rub against magnet.", label3: "Technician Action", val3: "Tests speaker impedance with a multimeter and installs matched replacement Sanyo acoustic speaker pair." },
      { badge: "Display Timing", title: "Permanent Vertical Lines Across Sanyo IPS Glass", label1: "Issue Reported", val1: "Thin green or pink vertical lines run from top to bottom across picture, sometimes with image jumping.", label2: "Fault Origin", val2: "Failing T-Con timing controller IC, oxidised LVDS ribbon pins, or moisture damage to panel Chip-on-Film (COF) bonds.", label3: "Technician Action", val3: "Cleans and reseats LVDS ribbon cables, measures VGH and VGL voltages on T-Con board, and inspects panel edge bonding." },
      { badge: "Signal Port", title: "Sanyo HDMI 2 Port Loose and Cuts Out", label1: "Issue Reported", val1: "Picture drops to static or black screen whenever HDMI cable is touched, or set-top box shows 'No Signal'.", label2: "Fault Origin", val2: "Physical pin fatigue from cable weight or cracked solder tracks on surface-mount HDMI socket.", label3: "Technician Action", val3: "Reflows terminal pins with lead-free solder, reinforces connector anchor lugs, and verifies digital video handshake." }
    ]
  },
  // 17. Akai
  {
    name: "Akai",
    uniqueProblems: [
      { badge: "Smart OS", title: "Akai Fire TV Edition Stuck on Fire OS Logo", label1: "Problem Observed", val1: "When powered on, orange Fire TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.", label2: "Why This Happens", val2: "Corrupted Fire OS firmware partition, failed background update, or bad memory sectors on eMMC flash storage chip.", label3: "Technician Inspection", val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on Akai logic board." },
      { badge: "Backlight Failure", title: "Sound Coming but Akai Screen is Pitch Black", label1: "Problem Observed", val1: "Channel sound and dialogue play clearly, but display is pitch black. A flashlight pointed at screen reveals faint moving pictures.", label2: "Why This Happens", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.", label3: "Technician Inspection", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set." },
      { badge: "Remote Control", title: "Akai Alexa Voice Remote Fails to Re-pair", label1: "Problem Observed", val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.", label2: "Why This Happens", val2: "Bluetooth pairing disconnected, remote firmware out of sync, or internal Bluetooth transceiver on TV motherboard is faulty.", label3: "Technician Inspection", val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power." },
      { badge: "Power Circuit", title: "Akai TV Dead Standby Following Thunderstorm", label1: "Problem Observed", val1: "Power cord is connected to mains, but front red indicator light does not glow at all and TV does not respond to remote.", label2: "Why This Happens", val2: "A mains voltage spike blew glass fuse, shorted bridge rectifier, or damaged primary switching IC on combo board.", label3: "Technician Inspection", val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on board." },
      { badge: "Audio Issue", title: "Akai Stereo Speakers Buzzing on High Volume", label1: "Problem Observed", val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.", label2: "Why This Happens", val2: "Internal speaker paper cone surround has torn due to humidity and heat, causing voice coil to rub against magnet.", label3: "Technician Inspection", val3: "Tests speaker impedance with a multimeter and installs matched replacement Akai acoustic speaker pair." },
      { badge: "Signal Port", title: "Akai HDMI Input Displays No Signal from DTH", label1: "Problem Observed", val1: "Set-top box is turned on, but TV screen shows 'No Signal' across all HDMI ports even after changing HDMI cables.", label2: "Why This Happens", val2: "Loose connector pins on port or a failed HDMI switch controller IC on Akai motherboard from lightning.", label3: "Technician Inspection", val3: "Tests port continuity with a multimeter, resolders loose pins, or replaces damaged HDMI IC on motherboard." }
    ]
  },
  // 18. Onida
  {
    name: "Onida",
    uniqueProblems: [
      { badge: "Smart OS", title: "Onida Fire TV Stuck on Startup Logo Loop", label1: "Customer Symptom", val1: "When powered on, Fire TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.", label2: "Likely Component Fault", val2: "Corrupted Fire OS firmware partition, failed background update, or bad memory sectors on eMMC flash storage chip.", label3: "How We Check & Fix", val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on Onida logic board." },
      { badge: "Backlight Failure", title: "Sound Plays Normally but Onida Screen is Dark", label1: "Customer Symptom", val1: "Channel sound and dialogue play clearly, but display is pitch black. A flashlight pointed at screen reveals faint moving pictures.", label2: "Likely Component Fault", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.", label3: "How We Check & Fix", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set." },
      { badge: "Audio Issue", title: "Onida Devil's Horn Subwoofer Heavy Rattle", label1: "Customer Symptom", val1: "Bass notes in background music produce an irritating buzzing noise that drowns out spoken dialogue on TV.", label2: "Likely Component Fault", val2: "Acoustic speaker enclosure mounting clips have vibrated loose or speaker cone paper has separated at seam.", label3: "How We Check & Fix", val3: "Inspects speaker mounting baffles, dampens resonance with acoustic pads, and replaces torn speaker units." },
      { badge: "Power Circuit", title: "Onida TV Completely Dead with No Indicator", label1: "Customer Symptom", val1: "Power cord is connected to mains, but front red indicator light does not glow at all and TV does not respond to remote.", label2: "Likely Component Fault", val2: "A mains voltage spike blew glass fuse, shorted bridge rectifier, or damaged primary switching IC on combo board.", label3: "How We Check & Fix", val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on board." },
      { badge: "Remote Lag", title: "Onida Alexa Remote Experiencing 5-Second Delay", label1: "Customer Symptom", val1: "Pressing volume or channel buttons takes 4 to 8 seconds to respond on screen, making menu navigation nearly impossible.", label2: "Likely Component Fault", val2: "CPU overload caused by background log creation or failing IR receiver buffer capacitor on front control board.", label3: "How We Check & Fix", val3: "Resets mainboard system buffer, tests front sensor decoupling capacitors, and checks CPU operating temperature." },
      { badge: "Display Timing", title: "Colored Horizontal Lines on Onida Screen", label1: "Customer Symptom", val1: "Thin green or pink horizontal lines run across Onida display, interfering with normal viewing.", label2: "Likely Component Fault", val2: "T-Con logic timing board synchronization error, oxidised LVDS cable contacts, or side COF panel bond issue.", label3: "How We Check & Fix", val3: "Cleans LVDS ribbon contacts, measures T-Con board reference voltages (VGH, VGL, VDD), and checks ribbon seating." }
    ]
  },
  // 19. Aiwa
  {
    name: "Aiwa",
    uniqueProblems: [
      { badge: "Smart OS", title: "Aiwa Magnifiq TV Stuck on Google Boot Loop", label1: "Fault Observed", val1: "When powered on, Magnifiq logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.", label2: "Possible Failure", val2: "Corrupted Google TV firmware partition, failed background update, or bad memory sectors on eMMC flash storage chip.", label3: "Technician Solution", val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on Aiwa logic board." },
      { badge: "Backlight Failure", title: "Sound Coming but Aiwa Display Has No Light", label1: "Fault Observed", val1: "Channel sound and dialogue play clearly, but display is pitch black. A flashlight pointed at screen reveals faint moving pictures.", label2: "Possible Failure", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.", label3: "Technician Solution", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set." },
      { badge: "Audio Issue", title: "Amphitheatre Sound Distorted and Raspy", label1: "Fault Observed", val1: "Sound plays, but voices sound raspy and vibrate unpleasantly, especially during dialogue or loud music tracks.", label2: "Possible Failure", val2: "Internal speaker paper cone surround has torn due to humidity and heat, causing voice coil to rub against magnet.", label3: "Technician Solution", val3: "Tests speaker impedance with a multimeter and installs matched replacement Aiwa acoustic speaker pair." },
      { badge: "Power Circuit", title: "Aiwa TV Dead Following Mains Voltage Fluctuation", label1: "Fault Observed", val1: "Power cord is connected to mains, but front red indicator light does not glow at all and TV does not respond to remote.", label2: "Possible Failure", val2: "A mains voltage spike blew glass fuse, shorted bridge rectifier, or damaged primary switching IC on combo board.", label3: "Technician Solution", val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on board." },
      { badge: "Wireless Network", title: "Aiwa TV Wi-Fi Drops Intermittently During OTT", label1: "Fault Observed", val1: "TV connects to home Wi-Fi for 3 minutes, then disconnects with an error saying 'Network cable unplugged' or 'No internet'.", label2: "Possible Failure", val2: "Overheating Wi-Fi transceiver module on mainboard or corrupted wireless network profile data.", label3: "Technician Solution", val3: "Checks 3.3V DC power rail to Wi-Fi card, inspects antenna connections, and resets network subsystem settings." },
      { badge: "Signal Port", title: "Aiwa TV HDMI 1 'No Signal' from Cable Box", label1: "Fault Observed", val1: "Set-top box is turned on, but TV screen shows 'No Signal' across all HDMI ports even after changing HDMI cables.", label2: "Possible Failure", val2: "Loose connector pins on port or a failed HDMI switch controller IC on Aiwa motherboard from lightning.", label3: "Technician Solution", val3: "Tests port continuity with a multimeter, resolders loose pins, or replaces damaged HDMI IC on motherboard." }
    ]
  },
  // 20. TCL
  {
    name: "TCL",
    uniqueProblems: [
      { badge: "Smart OS", title: "TCL Google TV Frozen on Four Startup Dots", label1: "Customer Symptom", val1: "When powered on, Google TV logo appears on screen and stays frozen indefinitely, or reboots continuously every 10 seconds.", label2: "Likely Component Fault", val2: "Corrupted Google TV firmware, failed system update, or bad memory sectors on eMMC flash storage chip.", label3: "How We Check & Fix", val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on TCL logic board." },
      { badge: "Backlight Failure", title: "Dialogue Audible but TCL Screen Remains Dark", label1: "Customer Symptom", val1: "Channel sound and dialogue play clearly, but display is pitch black. A flashlight pointed at screen reveals faint moving pictures.", label2: "Likely Component Fault", val2: "LED diodes inside backlight strips have burned out, breaking electrical circuit and causing driver to shut off lighting.", label3: "How We Check & Fix", val3: "Technician tests each backlight strip row using an LED tester and installs matched replacement backlight strip set." },
      { badge: "Remote Control", title: "TCL Bluetooth Voice Remote Fails to Re-pair", label1: "Customer Symptom", val1: "Remote was working normally, but suddenly buttons stop responding and TV shows 'Searching for accessories' without pairing.", label2: "Likely Component Fault", val2: "Bluetooth pairing disconnected, remote firmware out of sync, or internal Bluetooth transceiver on TV motherboard is faulty.", label3: "How We Check & Fix", val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power." },
      { badge: "Power Circuit", title: "TCL TV Completely Dead Standby After Power Surge", label1: "Customer Symptom", val1: "Power cord is connected to mains, but front red indicator light does not glow at all and TV does not respond to remote.", label2: "Likely Component Fault", val2: "A mains voltage spike blew glass fuse, shorted bridge rectifier, or damaged primary switching IC on combo board.", label3: "How We Check & Fix", val3: "Tests AC input fuse, checks primary filter capacitor charge, and replaces shorted semiconductor components on board." },
      { badge: "Display Timing", title: "Colored Vertical Lines Across CSOT Display Panel", label1: "Customer Symptom", val1: "Thin green or pink vertical lines run from top to bottom across picture, sometimes with image jumping.", label2: "Likely Component Fault", val2: "Failing T-Con timing controller IC, oxidised LVDS ribbon pins, or moisture damage to panel Chip-on-Film (COF) bonds.", label3: "How We Check & Fix", val3: "Cleans and reseats LVDS ribbon cables, measures VGH and VGL voltages on T-Con board, and inspects panel edge bonding." },
      { badge: "Audio Issue", title: "TCL TV Soundbar eARC Digital Output Lost", label1: "Customer Symptom", val1: "Soundbar connected via HDMI eARC produces zero sound and TV settings display 'Audio system communication error'.", label2: "Likely Component Fault", val2: "CEC/eARC controller IC failure or damaged 5V detection pin on primary HDMI input socket.", label3: "How We Check & Fix", val3: "Tests eARC signal traces, verifies HDMI CEC handshake in service menu, and repairs connector pins." }
    ]
  }
];

// Now build the actual object list with unique problems injected
const cleanBrands = b11_to_20.map(b => {
  const custom = brandSpecificUnique.find(u => u.name === b.name);
  if (custom) {
    b.problems = custom.uniqueProblems;
  }
  return b;
});

const targetFile = path.resolve(__dirname, 'tv_brands_11_to_20.js');
fs.writeFileSync(targetFile, 'module.exports = ' + JSON.stringify(cleanBrands, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote unique tv_brands_11_to_20.js!');
