// 6 Distinct Why Choose Us points for each of the 31 TV brands
// Simple Indian English, Karur focused, no AI words, no fake claims

function getBrandWhyChoose(brandName) {
  const custom = {
    Samsung: [
      { title: "Samsung Panel & Backlight Testing", desc: "We check Crystal 4K, QLED, and LED backlight strips, forward voltage, and driver rails right at your Karur home." },
      { title: "Tizen Board Component Repair", desc: "Technician repairs diodes, MOSFETs, and power ICs on Samsung BN44 and BN94 boards to save on replacement cost." },
      { title: "Clear Quote Before Repair", desc: "You get an honest price explanation after the initial TV inspection. No hidden or unexpected charges." },
      { title: "Karur Doorstep Service", desc: "Technician visits your home in Karur Town, Kagithapuramam, Pasupathipalayam, Kovai Road, and surrounding areas." },
      { title: "Model-Matched Parts", desc: "Backlight strips, capacitors, and cables are chosen specifically to match your Samsung model number." },
      { title: "Picture & Audio Testing", desc: "We test YouTube streaming, set-top box HDMI input, speaker balance, and color levels before leaving." }
    ],
    Sony: [
      { title: "Sony Bravia Error Code Reading", desc: "We diagnose Sony red LED standby blink patterns (2, 4, 6, 8 blinks) to pinpoint the exact circuit fault quickly." },
      { title: "G-Board & Inverter Repair", desc: "Our technicians repair Sony power boards and backlight protection circuits at component level wherever possible." },
      { title: "Honest Price Estimate", desc: "We explain whether the issue is in the backlight, power supply, or mainboard and confirm the cost before work." },
      { title: "Doorstep Visits in Karur", desc: "Convenient home visit service across Karur Town, Sengunthapuram, Thanthonimalai, and nearby residential streets." },
      { title: "Triluminos & OLED Care", desc: "Careful panel handling and model-specific backlight matching for Bravia Full HD and 4K televisions." },
      { title: "Complete Input & Sound Check", desc: "We verify HDMI ARC, internal speakers, Wi-Fi streaming, and remote control response before handover." }
    ],
    Panasonic: [
      { title: "Hexa Chroma & Viera Diagnosis", desc: "Doorstep fault diagnosis for Panasonic Viera LED, 4K, and Smart televisions across Karur." },
      { title: "TNPA Power Supply Board Repair", desc: "Component-level repair of Panasonic power boards, replacing burnt rectifier diodes and capacitors." },
      { title: "Upfront Cost Explanation", desc: "You receive a clear breakdown of part costs and service charges before any work begins on your TV." },
      { title: "Local Karur Technician", desc: "Direct coordination with experienced local repair technicians for prompt home visits in Karur." },
      { title: "Correct Backlight Strips", desc: "Replacement backlight arrays matched to Panasonic voltage and lens specifications for uniform brightness." },
      { title: "Post-Repair Video Testing", desc: "Full check of color reproduction, set-top box picture, and audio output before completing the service." }
    ],
    Philips: [
      { title: "Ambilight & Smart TV Checking", desc: "Inspection of Philips Ambilight rear LEDs, display backlights, and Saphi OS motherboards on-site." },
      { title: "Power Board Circuit Repair", desc: "We service Philips SMPS power boards by replacing damaged filter capacitors, fuses, and MOSFET switches." },
      { title: "Transparent Pricing", desc: "No surprise bills. The technician checks your Philips TV first and gives you a clear repair estimate." },
      { title: "Doorstep Service in Karur", desc: "Home visit coverage across Kagithapuramam, Pasupathipalayam, Thanthonimalai, Karur Town, and nearby localities." },
      { title: "Model-Specific Component Check", desc: "We use components that match the exact voltage and pin configuration of your Philips TV model." },
      { title: "Full Function Check", desc: "HDMI ports, Wi-Fi, audio clarity, and Ambilight sync are thoroughly tested after every repair." }
    ],
    Toshiba: [
      { title: "REGZA Engine Diagnosis", desc: "Doorstep checking for Toshiba REGZA 4K, VIDAA OS, and Full HD LED television display and sound faults." },
      { title: "Component-Level SMPS Repair", desc: "Repairing Toshiba power boards by replacing swollen capacitors and failed regulators to avoid full board cost." },
      { title: "Direct Repair Estimate", desc: "Technician explains the fault in simple words and gives you the exact repair cost before starting." },
      { title: "Karur Wide Coverage", desc: "Quick technician visits arranged across Karur Town, Kovai Road, Sukkaliyur, and surrounding areas." },
      { title: "Matching Backlight Arrays", desc: "We verify lens spacing and strip voltage according to your Toshiba model for even screen lighting." },
      { title: "Audio & Display Testing", desc: "Every repaired Toshiba TV is tested with local cable/DTH signals and streaming video before handover." }
    ],
    Sharp: [
      { title: "Aquos Japanese Panel Testing", desc: "Specialized testing of Sharp Aquos LED and 4K display panels, LVDS cables, and lamp error circuits." },
      { title: "SMPS & Inverter Board Care", desc: "We fix power supply cutoffs and backlight inverter trips by replacing faulty electronic components." },
      { title: "Upfront Cost Confirmation", desc: "Our technician gives you a clear price quote on-site before taking up any board or backlight repair." },
      { title: "Doorstep Visits in Karur", desc: "Technicians travel directly to homes in Kagithapuramam, Pasupathipalayam, Sengunthapuram, and all Karur areas." },
      { title: "Parts Selected by Model", desc: "We check the exact model number on the rear sticker to ensure correct board and backlight fitment." },
      { title: "Sound & Screen Inspection", desc: "We verify picture sharpness, speaker output, and remote responsiveness before closing the service call." }
    ],
    Haier: [
      { title: "Haier Google TV Fault Checking", desc: "Checking boot issues, dark screens, and Wi-Fi disconnects on Haier Smart and Bezel-less LED TVs." },
      { title: "Combo Motherboard Repair", desc: "Component-level repair of power supply and audio amplifier sections on Haier integrated mainboards." },
      { title: "Clear Pricing Policy", desc: "You know the repair charge before work starts. We explain which part is faulty and why." },
      { title: "Home Visit Across Karur", desc: "Doorstep service in Thanthonimalai, Karur Town, Kovai Road, Kagithapuramam, and all 60 localities." },
      { title: "Brand-Specific LED Strips", desc: "We install LED backlight sets with matched 3V or 6V diode ratings for long-lasting display brightness." },
      { title: "Final Performance Check", desc: "Testing TV apps, Bluetooth remote pairing, speaker clarity, and HDMI inputs before delivery." }
    ],
    Sansui: [
      { title: "Sansui LED & Smart TV Testing", desc: "Checking power dead, backlight burnout, and distorted sound issues in Sansui televisions in Karur." },
      { title: "Board-Level Circuit Repair", desc: "Fixing secondary power rails and audio amp ICs to save you the expense of whole board replacement." },
      { title: "Simple Honest Pricing", desc: "We tell you the repair price clearly after inspecting the TV, without hidden service fees." },
      { title: "Doorstep Visit in Karur", desc: "Technicians visit your home across Karur Town, Pasupathipalayam, Kagithapuramam, and nearby neighborhoods." },
      { title: "Model-Matched Spare Parts", desc: "We fit backlight strips and power capacitors that match Sansui factory voltage specifications." },
      { title: "Full Testing After Work", desc: "Audio balance, picture brightness, and remote sensor are verified thoroughly before handover." }
    ],
    Videocon: [
      { title: "Videocon DDB & LED Diagnosis", desc: "Doorstep checking for Videocon DDB, Liquid Luminous, and Smart Lit televisions across Karur." },
      { title: "Power Supply & Tuner Repair", desc: "Fixing power supply drops, blown fuses, and DDB tuner connection faults at component level." },
      { title: "Fair Repair Estimates", desc: "Technician inspects the TV rear panel and provides a clear cost estimate before starting repair work." },
      { title: "Local Karur Technician", desc: "Prompt doorstep visits scheduled across Thanthonimalai, Kagithapuramam, Sengunthapuram, and Karur Town." },
      { title: "Proper Parts Fitment", desc: "We verify connectors and strip voltages suited to older and newer Videocon LED TV models." },
      { title: "Complete Audio-Visual Check", desc: "Set-top box picture, speaker output, and menu controls are tested carefully before handover." }
    ],
    Xiaomi: [
      { title: "Mi TV & PatchWall Diagnosis", desc: "Checking PatchWall boot loops, blinking red lights, and screen blanking on Xiaomi Mi televisions." },
      { title: "Motherboard & eMMC Flashing", desc: "Software recovery and motherboard power rail repair for Xiaomi Smart and 4K Android TVs." },
      { title: "Transparent Cost Explanation", desc: "We explain the repair steps and exact cost before doing any work on your Xiaomi TV." },
      { title: "Karur Doorstep Visits", desc: "Available throughout Karur Town, Pasupathipalayam, Kagithapuramam, Kovai Road, and nearby areas." },
      { title: "Direct-Lit Backlight Matching", desc: "Replacement backlight strips chosen according to Xiaomi 32\", 43\", or 55\" model requirements." },
      { title: "Smart TV Verification", desc: "PatchWall navigation, Wi-Fi speed, Bluetooth remote pairing, and sound are verified after repair." }
    ],
    Hitachi: [
      { title: "Hitachi IPS Panel & Circuit Care", desc: "Doorstep inspection of Hitachi LED and 4K televisions, IPS panels, and power circuits in Karur." },
      { title: "SMPS Voltage Rail Repair", desc: "Component-level servicing of Hitachi power supplies, replacing shorted diodes and power ICs." },
      { title: "Clear Cost Estimate", desc: "The technician gives an honest repair quotation after diagnosing the TV at your home." },
      { title: "Doorstep Visits in Karur", desc: "Fast technician visits across Kagithapuramam, Pasupathipalayam, Karur Town, and Kovai Road areas." },
      { title: "Model-Matched Parts", desc: "Correct backlight diodes and filter capacitors matched to Hitachi screen dimensions and chassis." },
      { title: "Display & Audio Testing", desc: "Checking picture stability, color balance, and speaker sound before completing the repair." }
    ],
    Intex: [
      { title: "Intex Budget LED TV Care", desc: "Diagnosis of power failure, dark screen, and sound distortion in Intex LED Star and Smart models." },
      { title: "Affordable Board Repair", desc: "We repair individual regulator ICs and power tracks on Intex combo boards to keep repair costs low." },
      { title: "No Surprise Bills", desc: "Technician informs you of the exact repair cost upfront before starting any service." },
      { title: "Home Visits in Karur", desc: "Service visits arranged across all 60 localities in Karur including Town, Thanthonimalai, and Sengunthapuram." },
      { title: "Reliable Replacement Strips", desc: "Quality LED backlight strips fitted according to Intex panel voltage requirements." },
      { title: "Full Testing Before Handover", desc: "Testing channel tuning, remote operation, and speaker clarity before leaving your home." }
    ],
    Micromax: [
      { title: "Micromax Canvas & LED Checking", desc: "Checking Android boot freezes, backlight failure, and dead power in Micromax televisions." },
      { title: "Audio & Power Circuit Repair", desc: "Component servicing for Micromax audio amp chips, power diodes, and motherboard regulators." },
      { title: "Upfront Honest Estimate", desc: "Clear explanation of the problem and the repair fee before our technician starts work." },
      { title: "Doorstep Service Across Karur", desc: "Direct home visit coverage in Kagithapuramam, Pasupathipalayam, Kovai Road, and Karur Town." },
      { title: "Correct Parts Fitment", desc: "Backlight strips and electronic components selected to match your specific Micromax model." },
      { title: "Thorough Post-Repair Test", desc: "We check video playback, sound clarity, and remote functions thoroughly after fixing the TV." }
    ],
    Kodak: [
      { title: "Kodak Smart TV & 4K Diagnosis", desc: "Inspection of Google TV boot loops, dark screens, and Wi-Fi disconnects on Kodak Smart TVs." },
      { title: "Board-Level Component Care", desc: "Repairing power section MOSFETs and flashing corrupted firmware on Kodak motherboards." },
      { title: "Clear Pricing Upfront", desc: "You receive an honest quote after initial testing. Work starts only after your approval." },
      { title: "Doorstep Visits in Karur", desc: "Service visits organized across Karur Town, Thanthonimalai, Sengunthapuram, and Pasupathipalayam." },
      { title: "High-Quality Backlight Strips", desc: "Fitted with matched lens arrays to ensure uniform lighting across the Kodak display panel." },
      { title: "Complete Function Check", desc: "Testing OTT streaming, remote pairing, and sound output before handing back the TV." }
    ],
    OnePlus: [
      { title: "OnePlus TV & Gamma Engine Check", desc: "Diagnosis of dark displays, boot logo freezing, and remote unpairing on OnePlus Smart TVs." },
      { title: "Motherboard & Backlight Repair", desc: "Specialized repair of OnePlus power boards, backlight drivers, and OxygenPlay logic circuits." },
      { title: "Honest Upfront Quote", desc: "Technician explains whether the issue is in the backlight or board and confirms the repair cost." },
      { title: "Doorstep Service in Karur", desc: "Home visits available across Karur Town, Kagithapuramam, Pasupathipalayam, and all local areas." },
      { title: "Model-Matched Backlights", desc: "High-grade LED strips installed to preserve OnePlus color accuracy and brightness." },
      { title: "Smart Features Verified", desc: "We test Bluetooth voice remote, Wi-Fi connectivity, and HDMI eARC before concluding the visit." }
    ],
    Sanyo: [
      { title: "Sanyo Kaizen & LED TV Diagnosis", desc: "Doorstep testing of Sanyo Android TV restart loops, backlight failure, and power faults in Karur." },
      { title: "Component Board Servicing", desc: "Repairing power capacitors and regulators on Sanyo mainboards to avoid whole-board replacement." },
      { title: "Clear Repair Pricing", desc: "We tell you the exact repair cost after diagnosing the TV, with no hidden technician charges." },
      { title: "Karur Home Visits", desc: "Covering Karur Town, Thanthonimalai, Kagithapuramam, Kovai Road, and nearby residential streets." },
      { title: "Proper Backlight Matching", desc: "Replacement LED strips chosen to match Sanyo panel specifications for balanced illumination." },
      { title: "Full Video & Audio Check", desc: "Screen brightness, speaker volume, and remote sensor verified before final handover." }
    ],
    Akai: [
      { title: "Akai Fire TV & LED Checking", desc: "Diagnosis of Fire TV logo freeze, dark display, and sound distortion on Akai televisions." },
      { title: "Power Supply & Audio Repair", desc: "Component-level repair of Akai power boards and internal speaker amplifier ICs." },
      { title: "Upfront Cost Explanation", desc: "Our technician provides a clear price quote on-site before beginning any repair work." },
      { title: "Karur Doorstep Visits", desc: "Direct technician visits across Pasupathipalayam, Kagithapuramam, Sengunthapuram, and Karur Town." },
      { title: "Model-Matched Components", desc: "Careful selection of replacement backlight diodes and capacitors to match Akai models." },
      { title: "Full Testing & Verification", desc: "Testing HDMI inputs, Fire TV streaming, and sound balance before wrapping up." }
    ],
    Onida: [
      { title: "Onida Fire TV & Sound Check", desc: "Doorstep inspection of Onida Fire TV boot freezes, dark screens, and speaker crackling in Karur." },
      { title: "SMPS & Subwoofer Repair", desc: "Repairing Onida power supply circuits and Devil's Horn speaker modules at component level." },
      { title: "Clear Transparent Cost", desc: "Technician explains the fault and confirms the repair cost clearly before starting service." },
      { title: "Home Visits in Karur", desc: "Service visits arranged across all Karur localities including Thanthonimalai and Kagithapuramam." },
      { title: "Reliable Spare Parts", desc: "Backlight strips and electronic parts chosen to match Onida chassis specifications." },
      { title: "Full Function Testing", desc: "Picture brightness, Alexa voice remote, and audio output tested thoroughly after repair." }
    ],
    Aiwa: [
      { title: "Aiwa Magnifiq & 4K Diagnosis", desc: "Checking Google TV boot loops, dark screens, and audio issues in Aiwa televisions." },
      { title: "Exact Board Servicing", desc: "Component-level repair of Aiwa power supplies and multi-channel audio amplifier boards." },
      { title: "Honest Upfront Price", desc: "Technician informs you of the required repair and total cost before opening or fixing parts." },
      { title: "Doorstep Service in Karur", desc: "Available throughout Karur Town, Kovai Road, Pasupathipalayam, and surrounding areas." },
      { title: "Quality Matched Backlights", desc: "Backlight strip replacement matched to Aiwa panel optical lenses for uniform lighting." },
      { title: "Detailed Final Inspection", desc: "We test picture sharpness, Amphitheatre audio, and Wi-Fi streaming before handover." }
    ],
    TCL: [
      { title: "TCL QLED & 4K Fault Diagnosis", desc: "Checking Mini-LED dimming, Google TV restart cycles, and backlight failure on TCL TVs." },
      { title: "AiPQ Engine & Board Repair", desc: "Specialized servicing of TCL motherboards, power boards, and high-voltage backlight drivers." },
      { title: "Clear Upfront Estimates", desc: "Technician gives you an honest price quote after inspecting the TV at your Karur home." },
      { title: "Local Karur Doorstep Visits", desc: "Prompt service visits across Kagithapuramam, Pasupathipalayam, Thanthonimalai, and Karur Town." },
      { title: "CSOT Panel Compatible Parts", desc: "We fit backlight arrays that strictly match TCL's CSOT panel voltage requirements." },
      { title: "Complete Performance Testing", desc: "Testing 4K HDR playback, soundbar eARC, and Google TV apps before completing the visit." }
    ],
    iFFALCON: [
      { title: "iFFALCON Google TV Diagnosis", desc: "Inspection of startup logo freezing, dark display with sound, and Wi-Fi drops on iFFALCON TVs." },
      { title: "Motherboard & Firmware Recovery", desc: "Software re-flashing and component power rail repair for iFFALCON Smart TV boards." },
      { title: "Transparent Pricing", desc: "You receive a clear explanation of the repair cost before any technician work begins." },
      { title: "Karur Home Visits", desc: "Convenient doorstep technician visits across Karur Town, Kovai Road, and Pasupathipalayam." },
      { title: "Matched Backlight Arrays", desc: "Direct-lit LED strips matched to iFFALCON panel specs for even brightness without dark spots." },
      { title: "Full Smart Feature Check", desc: "We verify Google TV navigation, Bluetooth remote, and sound clarity before leaving." }
    ],
    Acer: [
      { title: "Acer Google TV & Audio Check", desc: "Checking dark screens, 30W speaker distortion, and startup freezing on Acer televisions." },
      { title: "High-Power Amp & Board Repair", desc: "Component-level repair of Acer power boards and high-output audio amplifier circuits." },
      { title: "Honest Upfront Quote", desc: "Technician explains the fault and states the repair fee clearly before starting work." },
      { title: "Doorstep Service in Karur", desc: "Fast visits across Karur Town, Kagithapuramam, Thanthonimalai, and nearby residential zones." },
      { title: "Frameless Panel Backlights", desc: "Careful backlight replacement suited to Acer frameless bezels and IPS display panels." },
      { title: "Post-Service Video Testing", desc: "Testing picture quality, speaker loudness, and Wi-Fi streaming before completing the job." }
    ],
    Hisense: [
      { title: "Hisense Tornado & ULED Care", desc: "Checking ULED local dimming, Tornado soundbar audio, and VIDAA/Google TV boot problems." },
      { title: "Multi-Rail SMPS & Board Repair", desc: "Component-level servicing of Hisense power supplies and Hi-View Engine logic boards." },
      { title: "Clear Cost Estimate", desc: "No surprise charges. You get a clear repair price before technician starts any repair work." },
      { title: "Karur Doorstep Visits", desc: "Service visits arranged across Pasupathipalayam, Kovai Road, Kagithapuramam, and Karur Town." },
      { title: "ULED Matched Backlights", desc: "We install LED backlight sets with matched optics to maintain Hisense display contrast." },
      { title: "Sound & Picture Verification", desc: "Verifying multi-speaker soundbar output, HDR video, and remote response after repair." }
    ],
    BPL: [
      { title: "BPL Stellar & LED TV Care", desc: "Doorstep diagnosis of power failure, black screen, and audio issues in BPL televisions." },
      { title: "Component Board Servicing", desc: "Repairing blown capacitors, diodes, and audio ICs on BPL mainboards to save money." },
      { title: "Simple Fair Pricing", desc: "We provide an honest repair estimate on-site with no hidden charges or inflated fees." },
      { title: "Home Visits in Karur", desc: "Covering all Karur neighborhoods including Thanthonimalai, Sengunthapuram, and Kagithapuramam." },
      { title: "Model-Matched Spare Parts", desc: "Backlight strips and power components fitted according to your specific BPL model." },
      { title: "Complete Audio-Visual Check", desc: "Checking display brightness, speaker clarity, and set-top box input before handover." }
    ],
    Vu: [
      { title: "Vu Glo QLED & Cinema TV Care", desc: "Checking Glo Panel brightness drops, soundbar audio buzz, and Android boot issues on Vu TVs." },
      { title: "Board-Level Circuit Repair", desc: "Servicing Vu power supply boards and audio amplifier sections at component level." },
      { title: "Upfront Cost Confirmation", desc: "Technician gives you a clear repair estimate after inspecting the TV at your home." },
      { title: "Karur Doorstep Service", desc: "Prompt technician visits across Karur Town, Pasupathipalayam, Kovai Road, and Kagithapuramam." },
      { title: "Matched Glo Backlight Strips", desc: "Replacement LED arrays selected to maintain Vu's signature high-brightness picture." },
      { title: "Full System Verification", desc: "Testing soundbar performance, Cricket Mode picture, and smart apps before leaving." }
    ],
    Lloyd: [
      { title: "Lloyd QLED & Smart TV Check", desc: "Doorstep checking for dark screens, Google TV boot freezes, and power issues on Lloyd TVs." },
      { title: "Havells Power Board Servicing", desc: "Component-level repair of Lloyd SMPS power boards and motherboard voltage regulators." },
      { title: "Clear Pricing Before Work", desc: "We explain the required repair and give you an honest price quote before starting work." },
      { title: "Home Visits in Karur", desc: "Technician travels to your home in Karur Town, Kagithapuramam, Pasupathipalayam, and Thanthonimalai." },
      { title: "Model-Matched Backlights", desc: "Replacement LED backlight strips matched to Lloyd screen size and optical layout." },
      { title: "Thorough Final Testing", desc: "Picture clarity, sound levels, and remote functions are verified completely after repair." }
    ],
    VW: [
      { title: "VW Playwall & Frameless Care", desc: "Diagnosis of power cutoff, dark display, and sound distortion in VW Visio World televisions." },
      { title: "Affordable Board Repair", desc: "Fixing damaged regulator ICs and power diodes on VW combo boards to keep costs low." },
      { title: "Transparent Upfront Cost", desc: "You receive an honest repair price quote before our technician begins any work." },
      { title: "Karur Doorstep Visits", desc: "Available across all 60 localities in Karur including Town, Kovai Road, and Sengunthapuram." },
      { title: "Reliable LED Backlight Bars", desc: "Replacement strips chosen to match VW panel voltage and connector pinouts." },
      { title: "Full Function Check", desc: "Testing channel display, remote receiver, and speaker sound before finishing the visit." }
    ],
    Acerpure: [
      { title: "Acerpure Smart TV Diagnosis", desc: "Checking Google TV startup loops, backlight burnout, and audio issues in Acerpure TVs." },
      { title: "Motherboard Component Care", desc: "Component-level repair of power regulators and firmware recovery on Acerpure boards." },
      { title: "Clear Honest Estimate", desc: "Technician provides an upfront repair cost after diagnosing the TV at your home." },
      { title: "Home Visits in Karur", desc: "Prompt visits arranged across Karur Town, Pasupathipalayam, Kagithapuramam, and Thanthonimalai." },
      { title: "Matched Backlight Arrays", desc: "Replacement LED strips fitted to preserve Acerpure screen brightness and contrast." },
      { title: "Smart TV Verification", desc: "Checking Google TV interface, speaker output, and Wi-Fi streaming before handover." }
    ],
    Redmi: [
      { title: "Redmi Smart TV & X-Series Care", desc: "Checking PatchWall boot freezes, sound with black screen, and Wi-Fi drops on Redmi TVs." },
      { title: "Motherboard & eMMC Flashing", desc: "Firmware flashing and power rail circuit repair for Redmi Smart and 4K televisions." },
      { title: "Upfront Cost Explanation", desc: "We explain the fault and confirm the repair cost before doing any work on your Redmi TV." },
      { title: "Karur Doorstep Service", desc: "Technician visits your home in Karur Town, Kovai Road, Pasupathipalayam, and nearby areas." },
      { title: "Model-Matched Backlights", desc: "Direct-lit LED strips matched to Redmi panel size and voltage specifications." },
      { title: "Full Smart Feature Test", desc: "Verifying PatchWall, Bluetooth remote voice search, and sound before concluding the visit." }
    ],
    Mi: [
      { title: "Mi Horizon & 4K TV Diagnosis", desc: "Checking screen blanking, boot loops, and power indicator blinking on Mi televisions in Karur." },
      { title: "Combo Board Component Repair", desc: "Component servicing for Mi SMPS power supply sections and Android motherboard chips." },
      { title: "Transparent Price Quote", desc: "Technician explains the issue clearly and confirms the price before beginning repair." },
      { title: "Doorstep Visits in Karur", desc: "Home visit coverage across Kagithapuramam, Thanthonimalai, Karur Town, and all local streets." },
      { title: "Matched LED Backlight Bars", desc: "Carefully fitted replacement LED strips to maintain Mi Horizon screen uniformity." },
      { title: "Complete System Check", desc: "Testing display quality, PatchWall navigation, remote pairing, and audio clarity." }
    ],
    Hyundai: [
      { title: "Hyundai WebOS & LED Care", desc: "Doorstep checking of WebOS startup issues, dark screens, and audio faults on Hyundai TVs." },
      { title: "WebOS Board Component Servicing", desc: "Repairing power supply rails and audio amplifier ICs on Hyundai television motherboards." },
      { title: "Honest Cost Estimate", desc: "Technician provides a clear upfront quote after on-site testing. No hidden service charges." },
      { title: "Karur Wide Home Visits", desc: "Available across Karur Town, Pasupathipalayam, Kovai Road, Sengunthapuram, and Thanthonimalai." },
      { title: "Model-Matched Parts", desc: "Quality backlight strips and electronic components selected specifically for your Hyundai model." },
      { title: "Magic Remote & Video Test", desc: "Checking WebOS app loading, Magic Remote pointer function, and speaker clarity before handover." }
    ]
  };

  return custom[brandName] || [
    { title: `${brandName} TV Problem Checking`, desc: `Specialized doorstep inspection for ${brandName} LED and Smart televisions across all Karur localities.` },
    { title: "Model-Based Electronic Testing", desc: `Careful voltage testing of SMPS power rails and display backlight circuits according to your exact model.` },
    { title: "Clear Repair Estimate Before Work", desc: "Our technician explains the exact fault found on-site and provides an honest repair price before starting any service." },
    { title: "Component-Level Board Servicing", desc: "We prioritize repairing diodes, MOSFETs, and ICs on existing boards to help customers save on costly full-board replacements." },
    { title: "Doorstep Visit Across Karur", desc: "Direct coordination with local Karur technicians for timely home visits in Town, Kagithapuramam, Pasupathipalayam, and surrounding areas." },
    { title: "Full Testing After Repair", desc: "Every repaired television is thoroughly tested with video playback, audio clarity, and port inputs before handover." }
  ];
}

module.exports = { getBrandWhyChoose };
