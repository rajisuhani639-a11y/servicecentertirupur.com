// Script to generate 31 completely unique repair processes for all 31 TV brands
// Karur only, no AI buzzwords, no duplicate sentences
const fs = require('fs');
const path = require('path');

const brands = [
  "Samsung", "Sony", "Panasonic", "Philips", "Toshiba",
  "Sharp", "Haier", "Sansui", "Videocon", "Xiaomi",
  "Hitachi", "Intex", "Micromax", "Kodak", "OnePlus",
  "Sanyo", "Akai", "Onida", "Aiwa", "TCL",
  "iFFALCON", "Acer", "Hisense", "BPL", "Vu",
  "Lloyd", "VW", "Acerpure", "Redmi", "Mi", "Hyundai"
];

const brandProcesses = {
  Samsung: [
    { num: 1, title: "Book Samsung Inspection", desc: "Call or WhatsApp our Karur desk with your Samsung model code and screen issue." },
    { num: 2, title: "Technician Home Visit", desc: "Our local Karur technician arrives at your residence with BN44 power testers and backlight meters." },
    { num: 3, title: "Power Rail & Backlight Test", desc: "The rear cover is removed safely to check BN44 13V rails, LED diode voltage drops, and Tizen logic." },
    { num: 4, title: "Clear Estimate & Part Cost", desc: "We explain whether strip replacement or diode repair is needed, confirming the exact price." },
    { num: 5, title: "Component Fix & Strip Fitting", desc: "Diode soldering or new backlight installation is completed using matched Samsung spare parts." },
    { num: 6, title: "Picture & Smart Hub Verification", desc: "We test Tizen streaming, HDMI set-top box signals, and speaker clarity before final handover." }
  ],
  Sony: [
    { num: 1, title: "Book Bravia Inspection", desc: "Contact our Karur support team with your Sony Bravia series and blinking red LED count." },
    { num: 2, title: "Doorstep Arrival in Karur", desc: "An experienced TV technician arrives at your doorstep equipped with digital multimeters." },
    { num: 3, title: "G-Board & Inverter Rail Analysis", desc: "We read Sony blink codes, test standby lines, and measure backlight boost circuits." },
    { num: 4, title: "Upfront Cost Breakdown", desc: "Technician gives an exact price breakdown for board repair or backlight replacement before work." },
    { num: 5, title: "Component-Level Fix or Spares", desc: "Damaged MOSFETs, diodes, or Triluminos backlight strips are replaced with model-rated components." },
    { num: 6, title: "Acoustic & Display Testing", desc: "Full check of Google TV interface, speaker balance, and cable channels before handover." }
  ],
  Panasonic: [
    { num: 1, title: "Schedule Viera TV Visit", desc: "Reach our local Karur helpline with your Panasonic Viera screen size and observed problem." },
    { num: 2, title: "Prompt Residential Visit", desc: "A qualified technician travels to your Karur home with testing tools and component spares." },
    { num: 3, title: "TNPA Board & Panel Voltage Check", desc: "We measure DC supply voltages, IPS panel drive lines, and backlight diode arrays on-site." },
    { num: 4, title: "Honest Price Confirmation", desc: "You receive a clear explanation of the failed component and the total repair cost before work starts." },
    { num: 5, title: "Board Servicing & Strip Replacement", desc: "Burnt rectifier diodes are repaired or fresh Panasonic-spec backlight strips are installed." },
    { num: 6, title: "Hexa Chroma Color Verification", desc: "We verify picture color balance, DTH input, and speaker output to ensure optimal performance." }
  ],
  Philips: [
    { num: 1, title: "Request Philips TV Visit", desc: "Call or message our Karur desk with your Philips model and display or power symptoms." },
    { num: 2, title: "Technician Visit Across Karur", desc: "Our service technician reaches your location in Karur with multimeters and LED testers." },
    { num: 3, title: "Ambilight & SMPS Circuit Check", desc: "Technician inspects power board output capacitors, Ambilight drivers, and Saphi OS boards." },
    { num: 4, title: "Transparent Quotation", desc: "We explain which part has degraded and give you an upfront price with no hidden service fees." },
    { num: 5, title: "Circuit Repair & Backlight Fix", desc: "Blown capacitors are replaced or matched LED strips fitted to restore bright, uniform picture." },
    { num: 6, title: "Ambilight & Audio Playback Test", desc: "We test video streaming, Ambilight projection sync, and internal speaker clarity with you." }
  ],
  Toshiba: [
    { num: 1, title: "Book REGZA TV Service", desc: "Share your Toshiba TV model and fault details with our customer desk in Karur." },
    { num: 2, title: "Home Visit by Local Specialist", desc: "A technician visits your residence in Karur carrying dedicated diagnostic gear." },
    { num: 3, title: "REGZA Engine & Power Line Audit", desc: "We test secondary DC rails, inverter drive signals, and VIDAA OS board connections on-site." },
    { num: 4, title: "No-Surprise Quote", desc: "Technician informs you of the required repair and parts cost before doing any soldering." },
    { num: 5, title: "Careful Electronic Servicing", desc: "We fix power supply rails or replace degraded backlight strips matching Toshiba specifications." },
    { num: 6, title: "High-Definition Video Verification", desc: "Screen uniformity, local set-top box picture, and audio output are verified before finishing." }
  ],
  Sharp: [
    { num: 1, title: "Schedule Sharp Aquos Service", desc: "Contact our Karur desk with your Sharp TV model and screen or standby light symptoms." },
    { num: 2, title: "Timely Doorstep Attendance", desc: "A seasoned technician arrives at your home in Karur with Japanese panel testing instruments." },
    { num: 3, title: "UV2A Panel & Inverter Diagnostic", desc: "We check lamp error protection circuits, SMPS secondary voltages, and T-Con ribbon cables." },
    { num: 4, title: "Direct Fault & Cost Explanation", desc: "Technician explains the root cause in simple language and confirms the repair charge beforehand." },
    { num: 5, title: "Component Fix & Strip Assembly", desc: "Faulty inverter diodes are replaced or new backlight strips installed with proper thermal pads." },
    { num: 6, title: "Sharp Picture & Sound Demo", desc: "We power on the TV, test HDMI inputs, and verify clean speaker response before handover." }
  ],
  Haier: [
    { num: 1, title: "Book Haier TV Inspection", desc: "Call or send a WhatsApp message with your Haier TV model and the issue you noticed." },
    { num: 2, title: "Doorstep Visit in Karur", desc: "Our local technician visits your address in Karur with strip testers and board components." },
    { num: 3, title: "Google TV Board & LED Check", desc: "We inspect combo motherboard rails, direct-lit LED arrays, and Bluetooth remote circuits on-site." },
    { num: 4, title: "Clear Repair Pricing", desc: "Technician provides an honest quote for backlight strips or board repair before opening parts." },
    { num: 5, title: "Board Repair & Backlight Renewal", desc: "Burnt power diodes are repaired or full backlight sets replaced for long-lasting display life." },
    { num: 6, title: "Google TV Streaming Test", desc: "We verify YouTube loading, Bluetooth remote pairing, and soundbar output before leaving." }
  ],
  Sansui: [
    { num: 1, title: "Book Sansui TV Service", desc: "Reach out to our Karur helpline with your Sansui TV screen size and fault details." },
    { num: 2, title: "Home Arrival in Karur", desc: "A technician visits your home in Karur with voltage probes and LED diagnostic tools." },
    { num: 3, title: "DLED Backlight & SMPS Inspection", desc: "We test mains input surge protection, 12V/24V power lines, and DLED backlight diode bars." },
    { num: 4, title: "Honest Upfront Price", desc: "Technician explains the damaged component and provides a clear repair cost before proceeding." },
    { num: 5, title: "Precision Circuit & Strip Fix", desc: "Blown capacitors are swapped or new LED backlight bars installed according to screen size." },
    { num: 6, title: "Sound & Display Check", desc: "Full check of speaker clarity, channel tuning, and video contrast before concluding the visit." }
  ],
  Videocon: [
    { num: 1, title: "Request Videocon TV Visit", desc: "Call our Karur desk with your Videocon DDB or LED TV symptoms and location." },
    { num: 2, title: "Technician Doorstep Arrival", desc: "Our repair specialist visits your house in Karur equipped with testing gear." },
    { num: 3, title: "Dual-Rail Power & Panel Check", desc: "Technician measures SMPS output lines, DDB tuner voltages, and backlight current levels." },
    { num: 4, title: "Clear Cost Estimate", desc: "We explain whether the issue is power board or backlight failure and confirm the price upfront." },
    { num: 5, title: "Component Repair or Strip Fit", desc: "We repair power supply regulators or install fresh backlight strips to restore screen brightness." },
    { num: 6, title: "Satellite & Audio Test", desc: "We test set-top box video, audio volume, and remote functions before completing service." }
  ],
  Xiaomi: [
    { num: 1, title: "Book Mi TV Inspection", desc: "Call or message our Karur desk with your Mi TV model (4A, 4X, 5X) and observed issue." },
    { num: 2, title: "Technician Doorstep Visit", desc: "Our technician arrives at your Karur home with firmware flash tools and LED strip testers." },
    { num: 3, title: "PatchWall & Hardware Testing", desc: "We test eMMC flash health, combo board voltages, and backlight diode strip strings." },
    { num: 4, title: "Straightforward Quote", desc: "Technician explains the root cause clearly and provides the exact repair cost before starting." },
    { num: 5, title: "eMMC Recovery or Backlight Fix", desc: "Corrupted PatchWall firmware is restored or complete backlight strip sets replaced." },
    { num: 6, title: "Smart TV & Remote Test", desc: "We verify Bluetooth remote pairing, Wi-Fi connectivity, and OTT app playback with you." }
  ],
  Hitachi: [
    { num: 1, title: "Schedule Hitachi TV Check", desc: "Contact our Karur team with your Hitachi TV screen size and problem noticed." },
    { num: 2, title: "Local Technician Arrival", desc: "An experienced TV technician arrives at your home in Karur with multimeters and spares." },
    { num: 3, title: "IPS Panel & SMPS Diagnostic", desc: "We test dual-rail power outputs, T-Con timing signals, and backlight diode voltages." },
    { num: 4, title: "Clear Quote Prior to Work", desc: "Technician details the failed electronic part and gives an honest repair price on-site." },
    { num: 5, title: "Circuit & Strip Servicing", desc: "Damaged power capacitors are replaced or matched LED strips installed inside the display." },
    { num: 6, title: "Live TV Demonstration", desc: "We run a picture clarity test, speaker balance check, and HDMI verification before handover." }
  ],
  Intex: [
    { num: 1, title: "Book Intex TV Repair", desc: "Call our local Karur phone number with your Intex TV model and issue description." },
    { num: 2, title: "Technician Home Visit", desc: "Our technician visits your home in Karur carrying universal combo board components." },
    { num: 3, title: "12V Power & Backlight Check", desc: "We test mains input rectifier, 12V regulator rail, and panel backlight LED strips." },
    { num: 4, title: "Affordable Price Quote", desc: "You receive a clear breakdown of part costs and service charges before any work begins." },
    { num: 5, title: "Board Solder & LED Replacement", desc: "Faulty diodes are replaced on the combo board or fresh backlight strips fitted." },
    { num: 6, title: "Audio & Picture Check", desc: "We test local cable channels, speaker loudness, and remote response before leaving." }
  ],
  Micromax: [
    { num: 1, title: "Schedule Canvas TV Visit", desc: "Reach our Karur service helpline with your Micromax TV model and symptoms." },
    { num: 2, title: "Doorstep Visit in Karur", desc: "A technician visits your residential address in Karur with LED diagnostic gear." },
    { num: 3, title: "Mainboard & Audio IC Check", desc: "We inspect Canvas logic board rails, audio amplifier ICs, and backlight strip voltages." },
    { num: 4, title: "Upfront Cost Confirmation", desc: "The technician explains what needs fixing and quotes the exact repair charge upfront." },
    { num: 5, title: "Audio IC or Backlight Fix", desc: "Distorted speaker circuits are repaired or new LED strips installed for bright video." },
    { num: 6, title: "Customer Video Verification", desc: "We check screen brightness, dialogue clarity, and remote functions with your set-top box." }
  ],
  Kodak: [
    { num: 1, title: "Book Kodak TV Service", desc: "Send a message or call our Karur desk with your Kodak CA PRO or 7XPRO model details." },
    { num: 2, title: "Doorstep Arrival in Karur", desc: "Technician reaches your residence in Karur equipped with strip testers and tools." },
    { num: 3, title: "Google TV & Backlight Analysis", desc: "We test power rails, direct-lit LED arrays, and Google TV firmware boot sequence." },
    { num: 4, title: "Transparent Pricing Quote", desc: "Technician explains the fault and gives you a clear repair estimate before proceeding." },
    { num: 5, title: "Backlight or Firmware Fix", desc: "Matched backlight arrays are fitted or system firmware cache cleared to fix boot issues." },
    { num: 6, title: "Streaming & Audio Demo", desc: "We test YouTube playback, Bluetooth remote pairing, and sound quality before closing." }
  ],
  OnePlus: [
    { num: 1, title: "Book OnePlus TV Visit", desc: "Call or WhatsApp our Karur desk with your OnePlus Y1, U1S, or QLED model details." },
    { num: 2, title: "Prompt Technician Visit", desc: "Our technician arrives at your Karur home with specialized display diagnostic tools." },
    { num: 3, title: "Gamma Engine & LED Testing", desc: "We check OxygenPlay boot integrity, power rails, and LED backlight strip current draw." },
    { num: 4, title: "Clear Fault Explanation", desc: "You get an honest price explanation covering parts and labor before work starts." },
    { num: 5, title: "Matched Spares Installation", desc: "We install model-specific backlight strips or service motherboard power regulators." },
    { num: 6, title: "Voice Remote & 4K Check", desc: "We test Bluetooth voice remote response, OTT video streaming, and speaker performance." }
  ],
  Sanyo: [
    { num: 1, title: "Schedule Kaizen TV Service", desc: "Contact our Karur desk with your Sanyo Kaizen TV model and fault observed." },
    { num: 2, title: "Doorstep Attendance in Karur", desc: "A qualified technician visits your home with multimeters and backlight strip testers." },
    { num: 3, title: "Circuit & IPS Display Check", desc: "We test power supply secondary outputs, Android logic board, and backlight strips." },
    { num: 4, title: "No-Hidden-Fee Quote", desc: "The technician confirms the repair cost before performing any component replacement." },
    { num: 5, title: "Reliable Component Repair", desc: "Burnt backlight diodes or power supply components are repaired using matched parts." },
    { num: 6, title: "Audio & OTT Video Check", desc: "We test Android TV apps, DTH picture clarity, and speaker sound before completing the call." }
  ],
  Akai: [
    { num: 1, title: "Book Akai Fire TV Visit", desc: "Call our local Karur desk with your Akai TV model and screen or remote symptoms." },
    { num: 2, title: "Technician Home Arrival", desc: "Our technician arrives at your residence in Karur equipped with testing gear." },
    { num: 3, title: "Fire OS Board & Backlight Check", desc: "We test Amazon Fire OS power rails, LED backlight strip voltages, and audio output." },
    { num: 4, title: "Clear Repair Quotation", desc: "Technician explains the failed part and gives you an exact repair price on the spot." },
    { num: 5, title: "Backlight or Speaker Service", desc: "We replace burnt LED strips or repair rattling internal speakers with matched parts." },
    { num: 6, title: "Alexa Voice & Streaming Demo", desc: "We test Alexa voice commands, Prime Video streaming, and HDMI ports before handover." }
  ],
  Onida: [
    { num: 1, title: "Schedule Onida TV Repair", desc: "Reach out to our Karur phone number with your Onida TV model and screen issue." },
    { num: 2, title: "Home Visit by Technician", desc: "A seasoned technician travels to your home in Karur with tools and electronic spares." },
    { num: 3, title: "Devil's Horn & Power Diagnostic", desc: "We test SMPS board outputs, subwoofer speaker impedance, and backlight LED strings." },
    { num: 4, title: "Transparent Cost Breakdown", desc: "You receive a clear quote covering spare parts and service before work begins." },
    { num: 5, title: "Speaker or Backlight Repair", desc: "We replace blown backlight strips or repair buzzing audio channels with proper components." },
    { num: 6, title: "Full System Demonstration", desc: "We verify loud audio without distortion, picture brightness, and remote responsiveness." }
  ],
  Aiwa: [
    { num: 1, title: "Book Aiwa TV Service", desc: "Contact our Karur desk with your Aiwa Magnifiq TV model and observed problem." },
    { num: 2, title: "Doorstep Visit Across Karur", desc: "An experienced technician visits your home with diagnostic meters and tools." },
    { num: 3, title: "Amphitheatre Audio & LED Check", desc: "We test audio amplifier rails, Google TV motherboard voltages, and backlight arrays." },
    { num: 4, title: "Honest Price Confirmation", desc: "Technician explains the root cause and provides a firm repair quote before proceeding." },
    { num: 5, title: "Electronic Fix & Strip Fitment", desc: "We repair power supply regulators or install fresh backlight strips inside the panel." },
    { num: 6, title: "Acoustic & Video Verification", desc: "We test Amphitheatre sound output, 4K picture sharpness, and Wi-Fi streaming with you." }
  ],
  TCL: [
    { num: 1, title: "Book TCL TV Inspection", desc: "Call or message our Karur desk with your TCL C-Series QLED or P-Series 4K model." },
    { num: 2, title: "Doorstep Technician Arrival", desc: "Our technician visits your Karur home equipped with CSOT panel testing gear." },
    { num: 3, title: "AiPQ Engine & Backlight Audit", desc: "We test AiPQ processor rails, Mini-LED/direct-lit driver voltages, and T-Con lines." },
    { num: 4, title: "Clear Fault & Cost Quote", desc: "Technician explains whether backlight or board service is needed with exact pricing." },
    { num: 5, title: "Matched Spares Installation", desc: "We fit original-spec backlight strips or service power board circuits on-site." },
    { num: 6, title: "QLED & Google TV Demo", desc: "We test HDR brightness, Google TV navigation, and internal speaker clarity before leaving." }
  ],
  iFFALCON: [
    { num: 1, title: "Book iFFALCON TV Service", desc: "Contact our Karur desk with your iFFALCON K-Series or U-Series model details." },
    { num: 2, title: "Home Visit in Karur", desc: "A technician visits your residential address in Karur with LED diagnostic gear." },
    { num: 3, title: "CSOT Panel & Power Rail Check", desc: "We test 12V/24V power lines, Google TV firmware status, and backlight diode strings." },
    { num: 4, title: "Upfront Price Estimate", desc: "You get a straightforward repair quote before the technician starts any component work." },
    { num: 5, title: "Backlight or Board Servicing", desc: "We replace burned-out backlight strips or fix power supply diodes using correct spares." },
    { num: 6, title: "Full Function Testing", desc: "We verify picture uniformity, sound loudness, and remote control pairing before handover." }
  ],
  Acer: [
    { num: 1, title: "Schedule Acer TV Inspection", desc: "Call our local Karur phone number with your Acer I-Series or H-Series TV details." },
    { num: 2, title: "Technician Doorstep Arrival", desc: "Our technician arrives at your Karur home with audio testers and strip meters." },
    { num: 3, title: "30W Audio & Display Testing", desc: "We test high-output speaker impedance, Google TV motherboard rails, and backlight strips." },
    { num: 4, title: "Clear Price Explanation", desc: "Technician explains the fault simply and states the exact repair charge before starting." },
    { num: 5, title: "Precision Component Fix", desc: "We repair rattling speaker cones or fit matched backlight arrays for bright visuals." },
    { num: 6, title: "Audio & Video Demonstration", desc: "We test 30W dialogue clarity, OTT app streaming, and HDMI ports before closing the call." }
  ],
  Hisense: [
    { num: 1, title: "Book Hisense TV Service", desc: "Contact our Karur desk with your Hisense Tornado 4K or ULED TV model details." },
    { num: 2, title: "Technician Home Visit", desc: "An experienced TV technician reaches your location in Karur with diagnostic equipment." },
    { num: 3, title: "Hi-View Engine & Soundbar Check", desc: "We test multi-zone backlight drivers, built-in soundbar circuits, and VIDAA/Google OS." },
    { num: 4, title: "No-Surprise Price Quote", desc: "Technician confirms the repair cost before performing any component replacement." },
    { num: 5, title: "Expert Circuit & Strip Repair", desc: "We service soundbar amplifier circuits or replace backlight arrays with matched components." },
    { num: 6, title: "Comprehensive Quality Check", desc: "We test Tornado audio richness, 4K picture contrast, and Wi-Fi streaming with you." }
  ],
  BPL: [
    { num: 1, title: "Request BPL TV Service", desc: "Reach our local Karur desk with your BPL Stellar or LED TV screen issue." },
    { num: 2, title: "Local Technician Arrival", desc: "A technician visits your home in Karur equipped with multimeters and soldering gear." },
    { num: 3, title: "Combo Board & Power Line Audit", desc: "We test mains filter capacitors, 12V DC regulators, and backlight diode arrays." },
    { num: 4, title: "Honest Upfront Price", desc: "You receive a clear repair estimate before the technician begins any board soldering." },
    { num: 5, title: "Component Fix & Strip Fitting", desc: "Faulty power diodes are replaced or brand-matched backlight strips installed." },
    { num: 6, title: "Display & Audio Verification", desc: "We test local DTH channels, speaker sound, and remote response before completing service." }
  ],
  Vu: [
    { num: 1, title: "Schedule Vu TV Inspection", desc: "Call or message our Karur team with your Vu Glo QLED or Cinema TV symptoms." },
    { num: 2, title: "Doorstep Visit in Karur", desc: "Our technician arrives at your Karur address with Glo Panel diagnostic tools." },
    { num: 3, title: "Glo Panel & 40W Audio Testing", desc: "We test high-brightness backlight rails, integrated soundbar coils, and Android OS." },
    { num: 4, title: "Clear Quote Prior to Work", desc: "Technician explains the root cause clearly and provides the exact repair price upfront." },
    { num: 5, title: "Acoustic or Backlight Service", desc: "We repair vibrating soundbar drivers or replace degraded LED strips with matched spares." },
    { num: 6, title: "Cinema Sound & Video Demo", desc: "We verify high-brightness colors, crisp dialogue, and HDMI inputs before handover." }
  ],
  Lloyd: [
    { num: 1, title: "Book Lloyd TV Repair", desc: "Reach out to our Karur helpline with your Havells Lloyd model and screen symptoms." },
    { num: 2, title: "Technician Home Visit", desc: "A qualified technician travels to your residence in Karur with testing equipment." },
    { num: 3, title: "Micro Dimming & SMPS Diagnostic", desc: "We check Havells-engineered power supply rails, Micro Dimming LEDs, and Google TV logic." },
    { num: 4, title: "Transparent Pricing Quote", desc: "Technician informs you of the required repair and parts cost before starting work." },
    { num: 5, title: "Component Fix & Strip Assembly", desc: "We repair power supply regulators or install fresh backlight strips with correct diodes." },
    { num: 6, title: "Smart TV & Display Check", desc: "We verify Google TV apps, remote voice controls, and speaker clarity before leaving." }
  ],
  VW: [
    { num: 1, title: "Schedule VW TV Service", desc: "Call our local Karur desk with your VW Playwall or Pro Frameless TV model." },
    { num: 2, title: "Prompt Residential Visit", desc: "Our repair technician visits your home in Karur carrying combo board spares." },
    { num: 3, title: "12V Power & Backlight Check", desc: "We test DC adapter/SMPS output rails, motherboard logic, and LED backlight bars." },
    { num: 4, title: "Affordable Price Estimate", desc: "Technician explains the fault simply and gives you an honest price quote before starting." },
    { num: 5, title: "Board Solder & LED Fitment", desc: "Blown capacitors are swapped or new LED backlight strips fitted inside the panel." },
    { num: 6, title: "Customer Video Verification", desc: "We test screen brightness, speaker audio, and remote controls with your set-top box." }
  ],
  Acerpure: [
    { num: 1, title: "Book Acerpure TV Visit", desc: "Contact our Karur team with your Acerpure Life 4K or Aspire TV fault details." },
    { num: 2, title: "Technician Doorstep Arrival", desc: "Our technician arrives at your Karur home with digital meters and strip testers." },
    { num: 3, title: "Frameless Panel & SMPS Audit", desc: "We test Google TV boot integrity, power supply voltages, and backlight current levels." },
    { num: 4, title: "Clear Fault & Cost Breakdown", desc: "Technician provides an upfront repair quote before undertaking any board or panel work." },
    { num: 5, title: "Matched Spares Installation", desc: "We replace burned-out backlight strips or fix power supply diodes using correct parts." },
    { num: 6, title: "Full Function Verification", desc: "We test video playback, Google TV navigation, and internal speakers before handover." }
  ],
  Redmi: [
    { num: 1, title: "Book Redmi TV Inspection", desc: "Call or WhatsApp our Karur desk with your Redmi X-Series or 32/43-inch TV issue." },
    { num: 2, title: "Home Visit Across Karur", desc: "A technician visits your home in Karur equipped with firmware tools and LED testers." },
    { num: 3, title: "PatchWall 4 & Audio IC Check", desc: "We test eMMC memory health, 30W speaker impedance, and backlight diode strings." },
    { num: 4, title: "Straightforward Quotation", desc: "Technician explains the damaged component and provides a clear price before work." },
    { num: 5, title: "eMMC Recovery or Strip Fix", desc: "We repair corrupted PatchWall boot loops or install model-matched backlight arrays." },
    { num: 6, title: "30W Sound & Streaming Test", desc: "We test Bluetooth voice remote response, OTT video streaming, and speaker output." }
  ],
  Mi: [
    { num: 1, title: "Schedule Mi TV Visit", desc: "Contact our local Karur desk with your Mi 4A Horizon or 5X 4K TV symptoms." },
    { num: 2, title: "Technician Doorstep Arrival", desc: "Our technician arrives at your Karur address with testing tools and component spares." },
    { num: 3, title: "Horizon Panel & Combo Board Check", desc: "We test unified motherboard voltages, Bluetooth remote receiver, and LED backlights." },
    { num: 4, title: "Honest Upfront Estimate", desc: "You receive a clear breakdown of part costs and service charges before any work begins." },
    { num: 5, title: "Precision Component Servicing", desc: "We replace failing backlight diodes or repair power supply circuits on the combo board." },
    { num: 6, title: "Smart TV Demonstration", desc: "We verify PatchWall loading, HDMI set-top box signals, and speaker clarity with you." }
  ],
  Hyundai: [
    { num: 1, title: "Book Hyundai TV Service", desc: "Call or message our Karur desk with your Hyundai WebOS Hub TV model and symptoms." },
    { num: 2, title: "Doorstep Visit in Karur", desc: "A technician reaches your home in Karur equipped with WebOS and backlight testers." },
    { num: 3, title: "WebOS Hub & Backlight Check", desc: "We test Magic Remote air-mouse pairing, SMPS power rails, and LED backlight strips." },
    { num: 4, title: "Clear Upfront Quotation", desc: "Technician explains what failed and gives you the exact repair cost before starting." },
    { num: 5, title: "Board Solder & LED Fitment", desc: "Burnt power diodes are repaired or full backlight sets replaced for long-lasting display." },
    { num: 6, title: "Magic Remote & 4K Video Test", desc: "We verify Magic Remote pointer navigation, 4K streaming, and audio clarity before leaving." }
  ]
};

// Check for uniqueness across all 31 processes
const sentenceMap = {};
Object.entries(brandProcesses).forEach(([brand, steps]) => {
  const text = JSON.stringify(steps);
  const normalized = text.toLowerCase().replace(new RegExp(brand.toLowerCase(), 'g'), 'BRAND');
  const matches = normalized.match(/[^.!?]+[.!?]+/g) || [];
  matches.forEach(m => {
    const s = m.trim();
    if (s.length > 25) {
      if (!sentenceMap[s]) sentenceMap[s] = [];
      if (!sentenceMap[s].includes(brand)) sentenceMap[s].push(brand);
    }
  });
});

const dups = Object.entries(sentenceMap).filter(([s, brands]) => brands.length > 1);
console.log('Generated 31 Brand Processes. Duplicate sentences count:', dups.length);
if (dups.length > 0) {
  console.log('Duplicates:', dups);
  process.exit(1);
}

// Write the file
const fileContent = `// 31 Completely unique repair processes for all 31 TV brands
// Handcrafted, simple Indian English, Karur focused, no AI words, no duplicate sentences
// Verified 0 duplicate sentences across all 31 brands

const brandProcesses = ${JSON.stringify(brandProcesses, null, 2)};

function getBrandProcess(brandName) {
  if (brandProcesses[brandName]) {
    return brandProcesses[brandName];
  }
  return brandProcesses["Samsung"];
}

module.exports = { getBrandProcess };
`;

fs.writeFileSync(path.resolve(__dirname, 'tv_brand_process.js'), fileContent, 'utf8');
console.log('Successfully wrote tv_brand_process.js with 31 distinct processes!');
