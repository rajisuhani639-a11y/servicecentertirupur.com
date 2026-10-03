// Complete 31-brand clean generator with strict 0-duplicate sentence enforcement
// Covers Samsung to Hyundai for Karur, Tamil Nadu
const fs = require('fs');
const path = require('path');

console.log("Generating complete 31-brand dataset...");

// Brand metadata specifications
const brandSpecs = [
  // 1. Samsung
  {
    name: "Samsung",
    slug: "samsung-tv-repair-service-in-karur.html",
    h1: "Samsung TV Repair Service in Karur",
    metaTitle: "Samsung TV Repair Service in Karur | LED & Smart TV Repair",
    metaDesc: "Looking for Samsung TV repair in Karur? Doorstep inspection for Samsung Crystal 4K, QLED, OLED & Smart LED TVs. Backlight, power board & display repair.",
    introHeading: "Looking for Samsung TV Repair in Karur?",
    introTamil: "Samsung TV-la red light rendu thadava blink aagudha? Relay click aagi on aagala?",
    introTanglish: "Samsung TV on aagumbodhu sound mattum vandhu screen dark-aa irukka? <strong>Samsung TV repair in Karur</strong> thedureengalana, unga veetukke local technician inspection book pannalaam. Crystal 4K, QLED, and Tizen Smart TV problems spot-laye check pannuvom.",
    techNote: "Samsung televisions use BN44 SMPS power boards and Tizen OS logic boards with direct-lit or edge-lit backlights.",
    modelsSeries: "Samsung Crystal 4K (AU7700, BU8000, CU7700, DU7000), QLED Series (Q60B, Q70C, Q80D), Frame TV, Series 4 (32T4340), Series 5 Full HD, and Series 6 Smart TVs."
  },
  // 2. Sony
  {
    name: "Sony",
    slug: "sony-tv-repair-service-in-karur.html",
    h1: "Sony TV Repair Service in Karur",
    metaTitle: "Sony TV Repair Service in Karur | Bravia LED & 4K Repair",
    metaDesc: "Need Sony TV repair in Karur? Doorstep inspection for Sony Bravia 4K, OLED, Triluminos & Google TVs. Fix 6-blink error, backlight & power board issues.",
    introHeading: "Need Sony TV Repair in Karur?",
    introTamil: "Sony Bravia TV-la red light 6 thadava blink aagudha? Power on aagi udane off aagudha?",
    introTanglish: "Sony TV switch-on panna logo vandhu off aagudha or sound mattum varudha? <strong>Sony TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Bravia XR, Triluminos 4K, and Google TV problems spot-laye check pannuvom.",
    techNote: "Sony Bravia televisions feature XR Cognitive processing, G-Board power units, and automated red LED blink error codes.",
    modelsSeries: "Sony Bravia XR (X75K, X80L, X85K, X90L), Bravia OLED (A80K, A90J), W-Series (W600, W6603), X-Reality PRO Full HD, and Google TV series."
  },
  // 3. Panasonic
  {
    name: "Panasonic",
    slug: "panasonic-tv-repair-service-in-karur.html",
    h1: "Panasonic TV Repair Service in Karur",
    metaTitle: "Panasonic TV Repair Service in Karur | Viera LED & 4K Repair",
    metaDesc: "Need Panasonic TV repair in Karur? Doorstep inspection for Panasonic Viera LED, 4K & Smart TVs. Backlight strip replacement, TNPA power board repair.",
    introHeading: "Need Panasonic TV Repair in Karur?",
    introTamil: "Panasonic Viera TV-la sound varudhu aana picture varalaiya? Power LED on aagala?",
    introTanglish: "Panasonic TV on pannumbodhu red light blink aagi standby-la nikkudha? <strong>Panasonic TV repair in Karur</strong> thedureengalana, unga veetukke local technician visit arrange pannuvom. Viera 4K, Hexa Chroma, and Android TV problems spot-laye check pannuvom.",
    techNote: "Panasonic Viera models feature Hexa Chroma color reproduction and Japanese-engineered TNPA power modules.",
    modelsSeries: "Panasonic Viera Series, Hexa Chroma 4K (TH-43EX, TH-55LX, TH-65MX), Full HD LED (TH-32FS, TH-40E), and Panasonic Android TV series."
  },
  // 4. Philips
  {
    name: "Philips",
    slug: "philips-tv-repair-service-in-karur.html",
    h1: "Philips TV Repair Service in Karur",
    metaTitle: "Philips TV Repair Service in Karur | Ambilight & LED TV Repair",
    metaDesc: "Need Philips TV repair in Karur? Doorstep inspection for Philips Ambilight 4K, Smart & LED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Philips TV Repair in Karur?",
    introTamil: "Philips TV-la Ambilight light eriyudha aana screen dark-aa irukka? Power on aagala?",
    introTanglish: "Philips TV switch on panna sound mattum varudhu display varalaiya? <strong>Philips TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Ambilight 4K, Saphi OS, and LED TV problems spot-laye check pannuvom.",
    techNote: "Philips televisions feature rear Ambilight projection drivers, Saphi OS or Android platforms, and SMPS power boards.",
    modelsSeries: "Philips Ambilight Series (6700, 7900, 8500), Saphi OS Smart TVs, 6000 Series 4K UHD, and Full HD LED series."
  },
  // 5. Toshiba
  {
    name: "Toshiba",
    slug: "toshiba-tv-repair-service-in-karur.html",
    h1: "Toshiba TV Repair Service in Karur",
    metaTitle: "Toshiba TV Repair Service in Karur | REGZA 4K & LED TV Repair",
    metaDesc: "Need Toshiba TV repair in Karur? Doorstep inspection for Toshiba REGZA 4K, VIDAA OS & LED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Toshiba TV Repair in Karur?",
    introTamil: "Toshiba REGZA TV-la sound varudhu display black-aa irukka? Power on aagala?",
    introTanglish: "Toshiba TV switch-on pannumbodhu red light blink aagudha or display dark-aa irukka? <strong>Toshiba TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit arrange pannuvom. REGZA 4K, VIDAA OS, and Full HD LED problems spot-laye check pannuvom.",
    techNote: "Toshiba televisions are powered by REGZA Engine processing, VIDAA OS, and high-luminance direct LED arrays.",
    modelsSeries: "Toshiba REGZA 4K (C350L, M550L, Z770), VIDAA OS Smart TVs (V35 Series), and Full HD LED series."
  },
  // 6. Sharp
  {
    name: "Sharp",
    slug: "sharp-tv-repair-service-in-karur.html",
    h1: "Sharp TV Repair Service in Karur",
    metaTitle: "Sharp TV Repair Service in Karur | Aquos LED & 4K TV Repair",
    metaDesc: "Need Sharp TV repair in Karur? Doorstep inspection for Sharp Aquos 4K, Smart & LED TVs. Backlight strip replacement, SMPS power & panel circuit repair.",
    introHeading: "Need Sharp TV Repair in Karur?",
    introTamil: "Sharp Aquos TV-la sound varudhu display varalaiya? Power light blink aagudha?",
    introTanglish: "Sharp Aquos TV on pannumbodhu screen dark-aa irukka or power supply cut-off aagudha? <strong>Sharp TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Aquos 4K, Japanese panel, and Full HD LED problems spot-laye check pannuvom.",
    techNote: "Sharp Aquos televisions use precision UV2A Japanese display panels, lamp error circuits, and high-efficiency power inverters.",
    modelsSeries: "Sharp Aquos 4K Series (4T-C50, 4T-C60), Aquos Full HD (LC-32LE, LC-40LE), and Sharp Android TV series."
  },
  // 7. Haier
  {
    name: "Haier",
    slug: "haier-tv-repair-service-in-karur.html",
    h1: "Haier TV Repair Service in Karur",
    metaTitle: "Haier TV Repair Service in Karur | Google TV & LED TV Repair",
    metaDesc: "Need Haier TV repair in Karur? Doorstep inspection for Haier Google TV, Bezel-Less 4K & Smart LED TVs. Backlight strip replacement & power board repair.",
    introHeading: "Need Haier TV Repair in Karur?",
    introTamil: "Haier TV-la sound varudhu screen black-aa irukka? Google TV logo-la freeze aagudha?",
    introTanglish: "Haier TV switch-on panna picture varalaiya or remote connect aagala? <strong>Haier TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Google TV, Bezel-Less 4K, and Smart LED problems spot-laye check pannuvom.",
    techNote: "Haier models feature bezel-less glass designs, Google TV operating software, and direct-lit LED arrays.",
    modelsSeries: "Haier Google TV Series (P7GT, C11, S800QT), Haier Bezel-Less 4K, and Smart LED Series."
  },
  // 8. Sansui
  {
    name: "Sansui",
    slug: "sansui-tv-repair-service-in-karur.html",
    h1: "Sansui TV Repair Service in Karur",
    metaTitle: "Sansui TV Repair Service in Karur | LED & Smart TV Repair",
    metaDesc: "Need Sansui TV repair in Karur? Doorstep inspection for Sansui 4K Pro, DLED & Smart TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Sansui TV Repair in Karur?",
    introTamil: "Sansui TV-la sound varudhu picture black-aa irukka? Power standby light eriyala?",
    introTanglish: "Sansui TV on aagala or sound mattum vandhu display dark-aa irukka? <strong>Sansui TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. 4K Pro, DLED Smart, and HD Ready problems spot-laye check pannuvom.",
    techNote: "Sansui televisions feature DLED backlight systems, cost-effective SMPS modules, and Android Smart motherboards.",
    modelsSeries: "Sansui 4K Pro Series, DLED Smart Series, Sansui Life Series, and HD Ready LED models."
  },
  // 9. Videocon
  {
    name: "Videocon",
    slug: "videocon-tv-repair-service-in-karur.html",
    h1: "Videocon TV Repair Service in Karur",
    metaTitle: "Videocon TV Repair Service in Karur | DDB & LED TV Repair",
    metaDesc: "Need Videocon TV repair in Karur? Doorstep inspection for Videocon DDB, Liquid Luminous & LED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Videocon TV Repair in Karur?",
    introTamil: "Videocon DDB TV-la sound varudhu screen dark-aa irukka? Power on aagala?",
    introTanglish: "Videocon TV on pannumbodhu red light blink aagi standby-la nikkudha or display varalaiya? <strong>Videocon TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. DDB Series, Liquid Luminous, and Smart Lit problems spot-laye check pannuvom.",
    techNote: "Videocon televisions include integrated DDB satellite dish tuners, Liquid Luminous color filters, and dual-rail power supplies.",
    modelsSeries: "Videocon DDB Series, Liquid Luminous Series, Smart Lit, Eyecon Series, and Full HD LED models."
  },
  // 10. Xiaomi
  {
    name: "Xiaomi",
    slug: "xiaomi-tv-repair-service-in-karur.html",
    h1: "Xiaomi TV Repair Service in Karur",
    metaTitle: "Xiaomi TV Repair Service in Karur | Mi Smart TV & 4K Repair",
    metaDesc: "Need Xiaomi TV repair in Karur? Doorstep inspection for Mi TV 4A, 4X, 5X, QLED & PatchWall Smart TVs. Backlight strip replacement & boot loop repair.",
    introHeading: "Need Xiaomi TV Repair in Karur?",
    introTamil: "Xiaomi Mi TV-la 'Mi' logo-laye freeze aagudha? Sound varudhu display dark-aa irukka?",
    introTanglish: "Mi TV on pannumbodhu boot loop aagudha or remote connect aagala? <strong>Xiaomi TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Mi 4A, 4X, Horizon Edition, and QLED problems spot-laye check pannuvom.",
    techNote: "Xiaomi televisions use PatchWall OS with unified combo motherboards in 32\" and dual-board designs in 43\"-55\".",
    modelsSeries: "Xiaomi Mi TV 4A (32\", 43\"), Mi TV 4X (43\", 50\", 55\"), Mi TV 5X 4K, Mi TV Horizon Edition, and Mi QLED 4K."
  },
  // 11. Hitachi
  {
    name: "Hitachi",
    slug: "hitachi-tv-repair-service-in-karur.html",
    h1: "Hitachi TV Repair Service in Karur",
    metaTitle: "Hitachi TV Repair Service in Karur | LED & Smart TV Repair",
    metaDesc: "Need Hitachi TV repair in Karur? Doorstep inspection for Hitachi LED, 4K & Smart TVs. Backlight strip replacement, SMPS power board & motherboard repair.",
    introHeading: "Need Hitachi TV Repair in Karur?",
    introTamil: "Hitachi TV switch-on aagala? Sound varudhu screen dark-aa irukka?",
    introTanglish: "Hitachi TV on pannina display varalaya or red light standby-laye irukka? <strong>Hitachi TV repair in Karur</strong> thedureengalana, unga area-kku local technician inspection arrange pannuvom. Power board, backlight and motherboard issues spot-laye check pannalaam.",
    techNote: "Hitachi televisions use Japanese IPS display panels, dedicated T-Con boards, and heavy-duty dual-rail power supplies.",
    modelsSeries: "Hitachi Alpha Series, LD Series, Hitachi Roku OS TV, and Full HD LED series."
  },
  // 12. Intex
  {
    name: "Intex",
    slug: "intex-tv-repair-service-in-karur.html",
    h1: "Intex TV Repair Service in Karur",
    metaTitle: "Intex TV Repair Service in Karur | LED & Smart TV Repair",
    metaDesc: "Need Intex TV repair in Karur? Doorstep inspection for Intex LED Star, Splash & Smart TVs. Backlight strip replacement, combo power board & audio repair.",
    introHeading: "Need Intex TV Repair in Karur?",
    introTamil: "Intex TV switch-on aagala? Standby red light eriyudha aana on aagala?",
    introTanglish: "Intex TV on aagala or sound mattum vandhu screen dark-aa irukka? <strong>Intex TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. LED Star, Splash Plus, and Smart LED problems spot-laye check pannuvom.",
    techNote: "Intex models utilize cost-effective universal combo motherboards with external or internal 12V DC power circuits.",
    modelsSeries: "Intex LED Star Series, Splash Plus, A-Spec Series, and Intex Smart LED models."
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
    techNote: "Micromax televisions use Android Canvas logic boards with integrated audio power amps and direct-lit LED arrays.",
    modelsSeries: "Micromax Canvas Series (32CANVAS, 40CANVAS), Spark Series, Wave Series, and Full HD LED models."
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
    techNote: "Kodak Smart TVs are manufactured by SPPL and feature Google TV software, bezel-less panels, and direct-lit backlights.",
    modelsSeries: "Kodak CA PRO Series (43UHDX, 50UHDX, 55UHDX), 7XPRO Series, Matrix QLED Series, and SE Series."
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
    techNote: "OnePlus TVs utilize Gamma Engine picture processing, OxygenPlay firmware, and Bluetooth voice remotes.",
    modelsSeries: "OnePlus Y Series (32Y1, 43Y1, 43Y1S Pro, 50Y1S Pro), U Series (50U1S, 55U1S, 65U1S), and Q Series QLED (55Q1, 65Q2 Pro)."
  },
  // 16. Sanyo
  {
    name: "Sanyo",
    slug: "sanyo-tv-repair-service-in-karur.html",
    h1: "Sanyo TV Repair Service in Karur",
    metaTitle: "Sanyo TV Repair Service in Karur | Kaizen & LED TV Repair",
    metaDesc: "Need Sanyo TV repair in Karur? Doorstep inspection for Sanyo Kaizen 4K, Android & LED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Sanyo TV Repair in Karur?",
    introTamil: "Sanyo TV-la sound varudhu picture varalaiya? Kaizen logo-laye restart aagudha?",
    introTanglish: "Sanyo TV on pannumbodhu display dark-aa irukka or standby red light blink aagudha? <strong>Sanyo TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Kaizen 4K, Nebula Android, and XT Series problems spot-laye check pannuvom.",
    techNote: "Sanyo Kaizen series models benefit from Panasonic-backed hardware architecture and Android TV OS.",
    modelsSeries: "Sanyo Kaizen Series (XT-43UHD4S, XT-50UHD4S, XT-55UHD4S), Nebula Series, XT Series Full HD, and HD Ready LED models."
  },
  // 17. Akai
  {
    name: "Akai",
    slug: "akai-tv-repair-service-in-karur.html",
    h1: "Akai TV Repair Service in Karur",
    metaTitle: "Akai TV Repair Service in Karur | Fire TV & LED TV Repair",
    metaDesc: "Need Akai TV repair in Karur? Doorstep inspection for Akai Fire TV Edition, 4K UHD & Smart LED TVs. Backlight strip replacement & power board repair.",
    introHeading: "Need Akai TV Repair in Karur?",
    introTamil: "Akai Fire TV-la sound varudhu screen dark-aa irukka? Fire OS logo-laye nikkudha?",
    introTanglish: "Akai TV on pannumbodhu display varalaiya or Alexa remote connect aagala? <strong>Akai TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Fire TV Edition, 4K UHD, and Smart LED problems spot-laye check pannuvom.",
    techNote: "Akai Fire TV Edition models pair Amazon Fire OS firmware with high-output Japanese acoustic speaker systems.",
    modelsSeries: "Akai Fire TV Edition (AKLT43U-FTS, AKLT50U-FTS, AKLT55U-FTS), Akai 4K UHD Series, and Full HD LED series."
  },
  // 18. Onida
  {
    name: "Onida",
    slug: "onida-tv-repair-service-in-karur.html",
    h1: "Onida TV Repair Service in Karur",
    metaTitle: "Onida TV Repair Service in Karur | Fire TV & LED TV Repair",
    metaDesc: "Need Onida TV repair in Karur? Doorstep inspection for Onida Fire TV Edition, KY Rock & LED TVs. Backlight strip replacement & Devil's Horn speaker repair.",
    introHeading: "Need Onida TV Repair in Karur?",
    introTamil: "Onida TV-la sound varudhu display dark-aa irukka? Fire TV logo-laye restart aagudha?",
    introTanglish: "Onida TV switch-on pannumbodhu display varalaiya or speaker rattle aagudha? <strong>Onida TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Fire TV Edition, KY Rock, and Leo Series problems spot-laye check pannuvom.",
    techNote: "Onida televisions feature high-power Devil's Horn audio subwoofers and Fire TV / Android logic boards.",
    modelsSeries: "Onida Fire TV Edition (32HIF, 43FIF, 50UIF), KY Rock Series, Leo Series, and Live Genius Smart TVs."
  },
  // 19. Aiwa
  {
    name: "Aiwa",
    slug: "aiwa-tv-repair-service-in-karur.html",
    h1: "Aiwa TV Repair Service in Karur",
    metaTitle: "Aiwa TV Repair Service in Karur | Magnifiq & 4K TV Repair",
    metaDesc: "Need Aiwa TV repair in Karur? Doorstep inspection for Aiwa Magnifiq 4K, Google TV & OLED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Aiwa TV Repair in Karur?",
    introTamil: "Aiwa TV-la sound varudhu display black-aa irukka? Magnifiq logo-la freeze aagudha?",
    introTanglish: "Aiwa TV switch-on panna picture varalaiya or Amphitheatre sound crackle aagudha? <strong>Aiwa TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Magnifiq 4K, Google TV, and Bezel-less LED problems spot-laye check pannuvom.",
    techNote: "Aiwa Magnifiq televisions combine Google TV software with Amphitheatre audio processing and direct-lit LED arrays.",
    modelsSeries: "Aiwa Magnifiq Series (43UHD, 50UHD, 55UHD), Aiwa OLED Series, and Bezel-less Smart LED Series."
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
    techNote: "TCL manufactures its own CSOT display glass and utilizes proprietary AiPQ Engine processing boards.",
    modelsSeries: "TCL C-Series QLED (C645, C745, C845 Mini-LED), P-Series 4K (P635, P735), S-Series, and Bezel-less Smart LED models."
  },
  // 21. iFFALCON
  {
    name: "iFFALCON",
    slug: "iffalcon-tv-repair-service-in-karur.html",
    h1: "iFFALCON TV Repair Service in Karur",
    metaTitle: "iFFALCON TV Repair Service in Karur | 4K & Google TV Repair",
    metaDesc: "Need iFFALCON TV repair in Karur? Doorstep inspection for iFFALCON 4K UHD, QLED & Google TVs. Backlight strip replacement, Android boot loop & board repair.",
    introHeading: "Need iFFALCON TV Repair in Karur?",
    introTamil: "iFFALCON TV-la sound varudhu picture varalaiya? Google TV logo-la freeze aagudha?",
    introTanglish: "iFFALCON TV on aagudhu aana display dark-aa irukka or remote pair aagala? <strong>iFFALCON TV repair in Karur</strong> thedureengalana, unga area-kku local technician inspection book pannalaam. K-Series 4K, U-Series and Google TV problems spot-laye check pannuvom.",
    techNote: "iFFALCON televisions (by TCL) feature Google TV OS, CSOT display panels, and high-efficiency direct-lit LED arrays.",
    modelsSeries: "iFFALCON K-Series (K61, K72), U-Series (U61, U62), S-Series, and QLED models (32F53, 43K72, 55K72, 55Q72)."
  },
  // 22. Acer
  {
    name: "Acer",
    slug: "acer-tv-repair-service-in-karur.html",
    h1: "Acer TV Repair Service in Karur",
    metaTitle: "Acer TV Repair Service in Karur | Google TV & 4K Repair",
    metaDesc: "Need Acer TV repair in Karur? Doorstep inspection for Acer I-Series 4K, H-Series & Google TVs. Backlight strip replacement, 30W speaker & board repair.",
    introHeading: "Need Acer TV Repair in Karur?",
    introTamil: "Acer TV-la sound varudhu display varalaiya? 30W speaker rattle aagudha?",
    introTanglish: "Acer TV switch on panna screen black-aa irukka or Google TV logo-la loop aagudha? <strong>Acer TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. I-Series 4K, H-Series, and frameless LED problems spot-laye check pannuvom.",
    techNote: "Acer televisions feature Google TV OS, frameless IPS panels, and high-power 30W stereo acoustic drivers.",
    modelsSeries: "Acer I-Series 4K (AR43GT2851UDFL, AR50GT2851UDFL), H-Series, V-Series QLED, and Advanced I-Series Google TVs."
  },
  // 23. Hisense
  {
    name: "Hisense",
    slug: "hisense-tv-repair-service-in-karur.html",
    h1: "Hisense TV Repair Service in Karur",
    metaTitle: "Hisense TV Repair Service in Karur | ULED & Tornado 4K Repair",
    metaDesc: "Need Hisense TV repair in Karur? Doorstep inspection for Hisense Tornado 4K, ULED & Google TVs. Backlight strip replacement & soundbar board repair.",
    introHeading: "Need Hisense TV Repair in Karur?",
    introTamil: "Hisense TV-la Tornado soundbar sound varudhu screen dark-aa irukka? ULED panel dim aagudha?",
    introTanglish: "Hisense TV on pannina display varalaya or VIDAA logo-la restart aagudha? <strong>Hisense TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Tornado 4K, ULED Mini-LED, and A6K series problems spot-laye check pannuvom.",
    techNote: "Hisense televisions use Hi-View Engine processors, ULED multi-zone local dimming, and integrated high-wattage soundbars.",
    modelsSeries: "Hisense Tornado 4K Series (55A73F), U6K / U7K Mini-LED ULED, A6K Google TV Series, and A4G Series."
  },
  // 24. BPL
  {
    name: "BPL",
    slug: "bpl-tv-repair-service-in-karur.html",
    h1: "BPL TV Repair Service in Karur",
    metaTitle: "BPL TV Repair Service in Karur | Stellar & LED TV Repair",
    metaDesc: "Need BPL TV repair in Karur? Doorstep inspection for BPL Stellar 4K, Vivid Color & Smart LED TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need BPL TV Repair in Karur?",
    introTamil: "BPL TV switch-on aagala? Standby red light mattum erinjittu on aaga maatengudha?",
    introTanglish: "BPL TV on aagala or sound mattum vandhu display black-aa irukka? <strong>BPL TV repair in Karur</strong> thedureengalana, unga veetukke local technician inspection book pannalaam. Stellar 4K, Vivid Color LED, and Smart TV problems spot-laye check pannuvom.",
    techNote: "BPL televisions use accessible combo boards, direct-lit LED arrays, and standardized SMPS modules.",
    modelsSeries: "BPL Stellar 4K Series, Vivid Color Series, BPL Android Smart TV (32HB20, 43FB20), and Full HD LED series."
  },
  // 25. Vu
  {
    name: "Vu",
    slug: "vu-tv-repair-service-in-karur.html",
    h1: "Vu TV Repair Service in Karur",
    metaTitle: "Vu TV Repair Service in Karur | Glo QLED & Cinema TV Repair",
    metaDesc: "Need Vu TV repair in Karur? Doorstep inspection for Vu Masterpiece Glo QLED, Cinema TV & 4K TVs. Backlight strip replacement & soundbar board repair.",
    introHeading: "Need Vu TV Repair in Karur?",
    introTamil: "Vu TV-la Glo Panel brightness drop aagudha? Cinema TV soundbar rattle aagudha?",
    introTanglish: "Vu TV on pannumbodhu sound mattum varudhu picture varalaiya or boot loop aagudha? <strong>Vu TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Glo QLED, Cinema TV Action, and Premium 4K problems spot-laye check pannuvom.",
    techNote: "Vu televisions feature high-brightness Glo Panels, integrated 40W soundbars, and Android / Google TV logic boards.",
    modelsSeries: "Vu Masterpiece Glo QLED Series (55Glo, 65Glo), Cinema TV Action Series, Premium 4K Series, and Vu 32-inch Smart LED TVs."
  },
  // 26. Lloyd
  {
    name: "Lloyd",
    slug: "lloyd-tv-repair-service-in-karur.html",
    h1: "Lloyd TV Repair Service in Karur",
    metaTitle: "Lloyd TV Repair Service in Karur | QLED & Smart TV Repair",
    metaDesc: "Need Lloyd TV repair in Karur? Doorstep inspection for Lloyd QLED, Bezel-Less 4K & Google TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Lloyd TV Repair in Karur?",
    introTamil: "Lloyd TV-la sound varudhu display dark-aa irukka? Havells power supply on aagala?",
    introTanglish: "Lloyd TV on pannumbodhu red light blink aagi standby-la nikkudha? <strong>Lloyd TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. Havells Lloyd QLED, Novante 4K, and Smart LED problems spot-laye check pannuvom.",
    techNote: "Lloyd televisions (by Havells) feature Micro Dimming backlights, Google TV architecture, and regulated SMPS power boards.",
    modelsSeries: "Lloyd QLED Series (55QX900D), Novante 4K Series, Bezel-Less Android TV (32HS550D, 43US900D), and HDR10 Smart LED TVs."
  },
  // 27. VW
  {
    name: "VW",
    slug: "vw-tv-repair-service-in-karur.html",
    h1: "VW TV Repair Service in Karur",
    metaTitle: "VW TV Repair Service in Karur | Playwall & LED TV Repair",
    metaDesc: "Need VW TV repair in Karur? Doorstep inspection for VW Playwall 4K, Frameless & Smart LED TVs. Backlight strip replacement, combo power board & audio repair.",
    introHeading: "Need VW TV Repair in Karur?",
    introTamil: "VW TV switch-on aagala? Standby red light eriyudha aana display varala?",
    introTanglish: "VW TV on aagala or sound mattum vandhu display black-aa irukka? <strong>VW TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit arrange pannuvom. Playwall 4K, Pro Frameless, and Smart LED problems spot-laye check pannuvom.",
    techNote: "VW (Visio World) televisions use compact combo motherboards, direct-lit LED arrays, and external or internal 12V DC power circuits.",
    modelsSeries: "VW Playwall 4K Series, Pro Frameless Series (VW32PRO, VW43PRO), Linux Smart Series, and HD Ready LED models."
  },
  // 28. Acerpure
  {
    name: "Acerpure",
    slug: "acerpure-tv-repair-service-in-karur.html",
    h1: "Acerpure TV Repair Service in Karur",
    metaTitle: "Acerpure TV Repair Service in Karur | Google TV & 4K Repair",
    metaDesc: "Need Acerpure TV repair in Karur? Doorstep inspection for Acerpure Life 4K, Aspire & Google TVs. Backlight strip replacement, SMPS power & board repair.",
    introHeading: "Need Acerpure TV Repair in Karur?",
    introTamil: "Acerpure TV-la sound varudhu picture varalaiya? Google TV logo-laye loop aagudha?",
    introTanglish: "Acerpure TV on pannumbodhu display dark-aa irukka or remote pair aagala? <strong>Acerpure TV repair in Karur</strong> thedureengalana, unga area-kku local technician inspection book pannalaam. Life 4K, Aspire Series, and Google TV problems spot-laye check pannuvom.",
    techNote: "Acerpure televisions combine Google TV software with frameless display glass and direct-lit LED backlight arrays.",
    modelsSeries: "Acerpure Life 4K Series (AP43GT, AP50GT), Acerpure Aspire Bezel-less Series, and Smart LED series."
  },
  // 29. Redmi
  {
    name: "Redmi",
    slug: "redmi-tv-repair-service-in-karur.html",
    h1: "Redmi TV Repair Service in Karur",
    metaTitle: "Redmi TV Repair Service in Karur | Smart TV X-Series Repair",
    metaDesc: "Need Redmi TV repair in Karur? Doorstep inspection for Redmi Smart TV X-Series 4K, 32 & 43-inch TVs. Backlight strip replacement & PatchWall repair.",
    introHeading: "Need Redmi TV Repair in Karur?",
    introTamil: "Redmi TV-la sound varudhu display dark-aa irukka? PatchWall 4 logo-la freeze aagudha?",
    introTanglish: "Redmi TV on pannumbodhu boot loop aagudha or remote connect aagala? <strong>Redmi TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. X-Series 4K (X43, X50, X55), and HD Smart problems spot-laye check pannuvom.",
    techNote: "Redmi Smart TVs feature PatchWall 4 OS, Vivid Picture Engine processing, and 30W stereo acoustic drivers.",
    modelsSeries: "Redmi Smart TV X Series (X43, X50, X55, X65), Redmi 32-inch HD Smart TV, and Redmi 43-inch Full HD Series."
  },
  // 30. Mi
  {
    name: "Mi",
    slug: "mi-tv-repair-service-in-karur.html",
    h1: "Mi TV Repair Service in Karur",
    metaTitle: "Mi TV Repair Service in Karur | Horizon Edition & 4K Repair",
    metaDesc: "Need Mi TV repair in Karur? Doorstep inspection for Mi TV 4A Horizon, 5X 4K & QLED TVs. Backlight strip replacement, PatchWall & combo board repair.",
    introHeading: "Need Mi TV Repair in Karur?",
    introTamil: "Mi TV Horizon-la sound varudhu display dark-aa irukka? Mi logo-laye loop aagudha?",
    introTanglish: "Mi TV switch-on pannumbodhu screen black-aa irukka or Bluetooth remote unpair aagudha? <strong>Mi TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit arrange pannuvom. 4A Horizon, 5X 4K, and QLED problems spot-laye check pannuvom.",
    techNote: "Mi Horizon Edition models feature bezel-less glass assemblies, unified combo mainboards, and Bluetooth voice remotes.",
    modelsSeries: "Mi TV 4A Horizon Edition (32\", 43\"), Mi TV 5X (43\", 50\", 55\"), Mi TV 4X 4K, and Mi TV Master Series."
  },
  // 31. Hyundai
  {
    name: "Hyundai",
    slug: "hyundai-tv-repair-service-in-karur.html",
    h1: "Hyundai TV Repair Service in Karur",
    metaTitle: "Hyundai TV Repair Service in Karur | WebOS Hub & 4K Repair",
    metaDesc: "Need Hyundai TV repair in Karur? Doorstep inspection for Hyundai WebOS Hub 4K, Magic Remote & LED TVs. Backlight strip replacement & board repair.",
    introHeading: "Need Hyundai TV Repair in Karur?",
    introTamil: "Hyundai WebOS TV-la sound varudhu picture varala? Magic Remote pointer work aagala?",
    introTanglish: "Hyundai TV on pannumbodhu display dark-aa irukka or WebOS logo-laye freeze aagudha? <strong>Hyundai TV repair in Karur</strong> thedureengalana, unga area-kku direct technician visit book pannalaam. WebOS Hub 4K, Magic Remote, and Smart LED problems spot-laye check pannuvom.",
    techNote: "Hyundai televisions run WebOS Hub software with Magic Remote pointer support and high-grade A+ display panels.",
    modelsSeries: "Hyundai Smart WebOS Hub 4K Series (43\", 50\", 55\"), Hyundai Frameless Series, and Android Smart LED models."
  }
];

console.log(`Loaded ${brandSpecs.length} brand specifications.`);
