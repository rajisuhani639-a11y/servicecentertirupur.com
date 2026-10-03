// Script to generate 31 completely unique, brand-tailored FAQ sets with 0 duplicate questions and 0 duplicate answers
const fs = require('fs');
const path = require('path');
const brandPricing = require('./tv_brand_pricing.js');

const brands = [
  "Samsung", "Sony", "Panasonic", "Philips", "Toshiba",
  "Sharp", "Haier", "Sansui", "Videocon", "Xiaomi",
  "Hitachi", "Intex", "Micromax", "Kodak", "OnePlus",
  "Sanyo", "Akai", "Onida", "Aiwa", "TCL",
  "iFFALCON", "Acer", "Hisense", "BPL", "Vu",
  "Lloyd", "VW", "Acerpure", "Redmi", "Mi", "Hyundai"
];

// Read brandProfiles from build_unique_faqs.js
const { brandProfiles } = (() => {
  const content = fs.readFileSync(path.resolve(__dirname, 'build_unique_faqs.js'), 'utf8');
  const match = content.match(/const brandProfiles = ({[\s\S]*?^};)/m);
  if (match) {
    eval('var profiles = ' + match[1]);
    return { brandProfiles: profiles };
  }
  return { brandProfiles: {} };
})();

// Locality questions & answers (31 distinct)
const locQ = [
  "Where can I get Samsung Smart TV repair near me in Karur?",
  "Is Sony Bravia TV repair available at home in Karur Town?",
  "How quickly can a Panasonic TV technician visit my house in Thanthonimalai?",
  "Can I book doorstep Philips Ambilight TV repair in Kagithapuramam?",
  "Where in Karur do you provide Toshiba REGZA TV service?",
  "Do you send technicians to Thorakkalpatti for Sharp Aquos repair?",
  "How do I schedule a Haier TV inspection in Thanthonimalai, Karur?",
  "Are Sansui TV repair visits available across Sengunthapuram in Karur?",
  "Can Videocon TV technicians visit our home in Sukkaliyur?",
  "Where can I find an experienced Mi TV repair technician in Kagithapuramam?",
  "Is doorstep Hitachi TV repair available around Thorakkalpatti?",
  "Can I get Intex TV repair service in Inam Karur, Karur?",
  "How to book a Micromax TV service call near Mengles Road?",
  "Do technicians travel to Chinna Andankovil for Kodak TV repair?",
  "Where can I get OnePlus TV repair near me around Pasupathipalayam?",
  "Is doorstep Sanyo Kaizen TV repair supported in Kagithapuramam?",
  "Can an Akai Fire TV technician visit my residence in Karur Town?",
  "Where in Thanthonimalai can I get Onida TV repair service?",
  "Do you provide doorstep Aiwa TV inspection along Kovai Road?",
  "Can I schedule TCL QLED TV service in Sengunthapuram, Karur?",
  "Where can I get iFFALCON TV repair near Kagithapuramam?",
  "Is doorstep Acer TV repair available in Pasupathipalayam, Karur?",
  "Do your technicians cover Karur Town for Hisense TV service?",
  "Can I get BPL TV repair near Sukkaliyur in Karur?",
  "Where can I book Vu Glo TV doorstep service in Kovai Road?",
  "Is Lloyd TV repair available at home in Thanthonimalai, Karur?",
  "Do you service VW televisions in Thorakkalpatti area?",
  "Can an Acerpure TV technician visit my home in Inam Karur?",
  "Where in Kagithapuramam can I get Redmi TV repair service?",
  "Is Mi Horizon TV doorstep repair offered around Pasupathipalayam?",
  "Do you provide Hyundai WebOS TV repair across Karur Town?"
];

const locA = [
  "Our service desk arranges doorstep visits across Pasupathipalayam, Kagithapuramam, Kovai Road, Thanthonimalai, and all surrounding Karur areas.",
  "Yes, our technicians travel directly to residences across Karur Town, Kovai Road, Sengunthapuram, and neighboring streets.",
  "Technician visits in Thanthonimalai and Sengunthapuram are typically organized within 2 to 4 hours of your service request.",
  "Yes, our local Karur team covers Kagithapuramam, Sukkaliyur, and nearby residential zones with doorstep service.",
  "We cover all major residential neighborhoods including Pasupathipalayam, Kovai Road, and Sengunthapuram with technician home visits.",
  "Yes, our technician desk coordinates home visits to Thorakkalpatti, Karur Town, and nearby localities.",
  "Simply call or message our local customer desk to book a prompt technician visit in Thanthonimalai or Kovai Road.",
  "Yes, we provide doorstep service throughout Sengunthapuram, Kagithapuramam, and all 60 approved Karur residential sectors.",
  "Our technicians regularly visit Sukkaliyur and Pasupathipalayam to carry out on-site board and backlight repairs.",
  "You can book experienced Mi TV doorstep visits across Kagithapuramam and Karur Town by tapping the Call or WhatsApp button.",
  "Yes, our local Karur service network extends to Thorakkalpatti and all neighboring residential areas.",
  "We provide comprehensive home inspection for Intex televisions throughout Inam Karur and Kagithapuramam.",
  "Reach out to our customer helpline to arrange a convenient technician visit near Mengles Road or Pasupathipalayam.",
  "Yes, our technicians travel to Chinna Andankovil and Karur Town to inspect Kodak televisions on-site.",
  "Technicians are available for prompt doorstep visits in Pasupathipalayam, Kovai Road, and adjacent Karur streets.",
  "Yes, we organize doorstep repair visits for Sanyo televisions across Kagithapuramam, Sengunthapuram, and nearby areas.",
  "Our local Karur technicians visit residences throughout Karur Town and Thanthonimalai on all seven days.",
  "Doorstep service for Onida televisions is available across Thanthonimalai, Pasupathipalayam, and surrounding residential roads.",
  "Yes, we arrange timely home visits along Kovai Road, Sengunthapuram, and throughout Karur for Aiwa televisions.",
  "Technicians can be scheduled for visits in Sengunthapuram, Kagithapuramam, and all local Karur neighborhoods.",
  "Our desk coordinates doorstep iFFALCON TV visits across Kagithapuramam, Thanthonimalai, and neighboring localities.",
  "Yes, our repair technicians travel directly to residences in Pasupathipalayam, Karur Town, and nearby areas.",
  "We provide on-site service coverage throughout Karur Town, Kovai Road, and all surrounding localities.",
  "Technicians are available for home visits around Sukkaliyur, Thanthonimalai, and adjacent Karur sectors.",
  "You can schedule a doorstep inspection along Kovai Road and Pasupathipalayam with our local service desk.",
  "Yes, doorstep service for Lloyd televisions is available in Thanthonimalai, Kagithapuramam, and throughout Karur.",
  "Our technicians visit residences in Thorakkalpatti, Sengunthapuram, and all surrounding Karur areas.",
  "Home visits for Acerpure televisions can be scheduled across Inam Karur, Pasupathipalayam, and nearby streets.",
  "Doorstep service for Redmi televisions is readily available across Kagithapuramam, Kovai Road, and Karur Town.",
  "Yes, our local technicians travel directly to Pasupathipalayam, Thanthonimalai, and all 60 residential localities in Karur.",
  "We handle doorstep repairs for Hyundai televisions across Karur Town, Kagithapuramam, and surrounding neighborhoods."
];

// Backlight cost Q & A (31 distinct)
const costQ = [
  "How much does Samsung TV backlight replacement cost in Karur?",
  "What is the cost of Sony Bravia LED backlight repair in Karur?",
  "How much will it cost to replace Panasonic Viera backlight strips?",
  "What is the price range for Philips TV backlight replacement?",
  "How much does Toshiba REGZA backlight strip repair cost?",
  "What do you charge for Sharp Aquos TV backlight replacement?",
  "How much does Haier TV backlight strip replacement cost in Karur?",
  "What is the price of Sansui LED TV backlight replacement?",
  "How much is the repair cost for Videocon TV backlight strips?",
  "What is the charge for Xiaomi Mi TV backlight strip replacement?",
  "What is the approximate cost for Hitachi TV backlight replacement in Karur?",
  "What do you charge for Intex LED TV backlight repair?",
  "How much does Micromax TV backlight replacement usually cost?",
  "What is the price range for Kodak 4K TV backlight strips?",
  "What is the expected charge for OnePlus TV backlight replacement in Karur?",
  "What is the cost of Sanyo Kaizen LED backlight replacement?",
  "How much do you charge for Akai Fire TV backlight repair?",
  "What is the price for Onida LED TV backlight replacement?",
  "How much does Aiwa Magnifiq backlight strip replacement cost?",
  "What is the cost of TCL QLED TV backlight repair in Karur?",
  "What do you charge for iFFALCON TV backlight strip replacement?",
  "What is the price estimate for Acer TV backlight replacement in Karur?",
  "How much do you charge for Hisense ULED backlight repair?",
  "What is the cost of BPL LED TV backlight replacement in Karur?",
  "How much does Vu Glo QLED backlight strip replacement cost?",
  "What is the price of Lloyd Smart TV backlight replacement?",
  "What is the charge for VW TV backlight strip repair in Karur?",
  "What is the cost to replace Acerpure TV backlight strips?",
  "How much does Redmi X-Series backlight replacement cost?",
  "What is the charge for Mi Horizon TV backlight strip repair?",
  "How much does Hyundai WebOS TV backlight replacement cost?"
];

// 31 unique cost answers
const costA = [
  "Samsung backlight strip replacement typically ranges between ₹1,500 and ₹4,200 depending on whether your model is a 32-inch Full HD, 43-inch Crystal 4K, or 55-inch QLED display.",
  "Sony Bravia backlight replacement generally costs between ₹1,800 and ₹4,800 depending on screen size and whether your set uses Full HD direct LEDs or 4K Triluminos arrays.",
  "Panasonic Viera backlight replacement typically ranges between ₹1,400 and ₹3,800 based on screen size and IPS panel diode specifications.",
  "Philips TV backlight replacement usually costs between ₹1,350 and ₹3,600 depending on whether your set is a Smart LED or 4K Ambilight model.",
  "Toshiba REGZA backlight strip repair generally ranges between ₹1,400 and ₹3,900 according to screen size and REGZA engine panel type.",
  "Sharp Aquos backlight replacement typically costs between ₹1,500 and ₹4,000 based on whether you have a Full HD LED or 4K Japanese panel.",
  "Haier backlight replacement generally ranges from ₹1,300 to ₹3,500 depending on whether your TV is an HD Ready or Bezel-Less 4K model.",
  "Sansui DLED backlight replacement usually ranges between ₹1,200 and ₹3,200 based on screen size and panel diode density.",
  "Videocon backlight strip repair typically costs between ₹1,150 and ₹3,000 depending on whether your TV is a standard LED or Liquid Luminous model.",
  "Xiaomi Mi TV backlight replacement generally costs between ₹1,250 and ₹3,600 depending on whether you own a Mi 4A, 4X, or 5X 4K television.",
  "Hitachi backlight replacement ranges from ₹1,400 to ₹3,800 depending on whether it is an Alpha series HD Ready or 4K IPS display.",
  "Intex LED backlight repair typically costs between ₹1,100 and ₹2,800 based on whether you have a 32-inch or 43-inch Star series screen.",
  "Micromax Canvas backlight replacement generally ranges between ₹1,200 and ₹3,200 depending on screen size and panel diode rows.",
  "Kodak CA PRO and 7XPRO backlight replacement usually costs from ₹1,350 to ₹3,600 based on screen dimensions and 4K specifications.",
  "OnePlus TV backlight replacement typically ranges between ₹1,450 and ₹3,900 depending on whether your unit is a Y1S Full HD or U1S 4K display.",
  "Sanyo Kaizen backlight replacement generally costs from ₹1,300 to ₹3,500 based on screen size and whether your set is Full HD or 4K.",
  "Akai Fire TV backlight repair typically ranges between ₹1,350 and ₹3,400 depending on whether you have a 32-inch or 50-inch 4K model.",
  "Onida LED backlight replacement usually ranges from ₹1,250 to ₹3,300 based on screen dimensions and whether it is a KY Rock or Fire TV set.",
  "Aiwa Magnifiq backlight replacement typically costs between ₹1,400 and ₹3,800 depending on whether you own a Full HD or 4K Google TV.",
  "TCL QLED and 4K backlight repair generally ranges between ₹1,500 and ₹4,200 depending on whether your set is a P-Series or C-Series QLED model.",
  "iFFALCON backlight strip replacement usually costs from ₹1,300 to ₹3,500 depending on screen size and CSOT panel specifications.",
  "Acer I-Series and H-Series backlight replacement typically ranges between ₹1,400 and ₹3,700 based on screen dimensions and 4K resolution.",
  "Hisense Tornado and ULED backlight repair generally costs from ₹1,500 to ₹4,200 depending on whether your set uses direct-lit or local dimming zones.",
  "BPL Stellar backlight replacement usually ranges between ₹1,200 and ₹3,200 depending on whether you have an HD Ready or Full HD model.",
  "Vu Glo QLED and Cinema TV backlight replacement typically costs from ₹1,450 to ₹4,000 depending on screen size and Glo Panel ratings.",
  "Lloyd Smart TV backlight replacement generally ranges between ₹1,400 and ₹3,800 based on whether your TV is an HD Ready or Novante 4K model.",
  "VW Playwall backlight strip repair typically costs between ₹1,150 and ₹3,000 depending on whether you own a 32-inch or 43-inch frameless screen.",
  "Acerpure Life backlight replacement usually ranges from ₹1,350 to ₹3,600 based on screen size and frameless panel specifications.",
  "Redmi Smart TV X-Series backlight replacement generally costs between ₹1,300 and ₹3,600 depending on whether your set is a 43, 50, or 55-inch 4K model.",
  "Mi Horizon Edition backlight repair typically ranges from ₹1,300 to ₹3,500 depending on whether you own a 32-inch or 43-inch bezel-less TV.",
  "Hyundai WebOS TV backlight replacement usually costs between ₹1,350 and ₹3,700 based on screen dimensions and A+ grade panel type."
];

// Power board repair Q & A (31 distinct)
const powerQ = [
  "Can Samsung BN44 SMPS power boards be repaired at home?",
  "Is it possible to repair Sony G-Board power supplies at component level?",
  "Can Panasonic TNPA power boards be fixed without full replacement?",
  "Do you service Philips dual-capacitor power supply boards on-site?",
  "Can Toshiba REGZA power supply boards be repaired in Karur?",
  "Is Sharp Aquos power supply board component repair feasible at home?",
  "Can Haier TV combo power boards be repaired on-site in Karur?",
  "Do you repair Sansui DLED power supply boards at home?",
  "Can Videocon dual-rail power boards be fixed after voltage surges?",
  "Is it possible to repair Mi TV integrated power boards at component level?",
  "Can Hitachi Alpha power supply boards be serviced at home in Karur?",
  "Do you repair Intex 12V combo power supply circuits on-site?",
  "Can Micromax Canvas power supply boards be repaired without replacement?",
  "Is Kodak CA PRO power board component repair available in Karur?",
  "Can OnePlus SMPS power units be repaired at component level?",
  "Do you service Sanyo Kaizen power supply boards at home?",
  "Can Akai Fire TV power supply circuits be fixed on-site?",
  "Is component repair possible for Onida high-current SMPS boards?",
  "Can Aiwa Magnifiq power supply boards be repaired in Karur?",
  "Do you repair TCL AiPQ power management boards on-site?",
  "Can iFFALCON CSOT-matched power boards be serviced at home?",
  "Is Acer 30W audio power supply board repair feasible in Karur?",
  "Can Hisense Tornado dual-transformer power boards be repaired?",
  "Do you service BPL standardized Indian SMPS boards at home?",
  "Can Vu Glo Panel high-capacity power boards be fixed on-site?",
  "Is Lloyd Havells Micro Dimming power board repair available in Karur?",
  "Can VW combo power supply circuits be repaired at low cost?",
  "Do you service Acerpure pure-matrix power boards at home?",
  "Can Redmi Vivid Picture power boards be repaired at component level?",
  "Is Mi Horizon combo power board repair available on-site in Karur?",
  "Can Hyundai WebOS SMPS power boards be serviced without whole-board replacement?"
];

const powerA = [
  "Yes, Samsung BN44 boards with shorted rectifier diodes, blown fuses, or failed MOSFETs are routinely repaired on-site without changing the entire board.",
  "Yes, our technicians test Sony G-Board standby rails and replace failed bridge rectifiers or capacitors right at your home.",
  "Yes, Panasonic TNPA power boards can usually be restored by repairing secondary filter circuits and MOSFET switches on-site.",
  "Yes, Philips power supply boards damaged by lightning spikes are serviced by replacing damaged capacitors and rectifiers on-site.",
  "Yes, Toshiba REGZA power modules with swollen filter caps or shorted diodes are repaired at component level to keep costs minimal.",
  "Yes, our technicians diagnose Sharp UV2A power circuits on-site and replace failed diodes or regulators without whole-board cost.",
  "Yes, Haier integrated power boards can be repaired by replacing secondary voltage regulators and protection diodes on-site.",
  "Yes, Sansui power boards damaged by sudden voltage surges are repaired on-site by replacing shorted bridge rectifiers.",
  "Yes, Videocon dual-rail power boards can be restored by replacing damaged filter capacitors and rectifier ICs at your home.",
  "Yes, Mi TV power circuits with blown input fuses or failed primary switching MOSFETs are serviced at component level on-site.",
  "Yes, Hitachi Alpha power modules are repaired by replacing damaged Japanese filter capacitors and voltage regulators directly.",
  "Yes, Intex 12V combo circuits can be fixed very affordably by replacing shorted diodes and power switching ICs on-site.",
  "Yes, Micromax Canvas power boards are serviced by replacing blown fuses, bridge rectifiers, and secondary capacitors on-site.",
  "Yes, Kodak power supply boards damaged by lightning spikes can be repaired by replacing shorted MOSFETs at your doorstep.",
  "Yes, OnePlus SMPS power units with unstable voltage rails can be repaired at component level without full board replacement.",
  "Yes, Sanyo Kaizen power boards benefit from component-level servicing, replacing failed diodes and capacitors on-site.",
  "Yes, Akai Fire TV power boards are repaired by replacing blown input protection parts and secondary rail capacitors.",
  "Yes, Onida high-current power boards damaged by voltage fluctuations are serviced on-site by replacing shorted rectifiers.",
  "Yes, Aiwa Magnifiq power supply circuits can be repaired at component level by replacing shorted switching transistors.",
  "Yes, TCL power boards with tripped protection lines can be restored by replacing failed diodes and power ICs on-site.",
  "Yes, iFFALCON power supply modules are serviced on-site by replacing shorted secondary rail capacitors and diodes.",
  "Yes, Acer power circuits are repaired by replacing blown fuses, filter capacitors, and voltage regulators right at your home.",
  "Yes, Hisense dual-transformer power boards can be repaired at component level by replacing shorted switching MOSFETs.",
  "Yes, BPL Indian SMPS boards with swollen capacitors or blown fuses are quickly repaired on-site with standard components.",
  "Yes, Vu Glo power modules with tripped protection lines are restored by replacing damaged MOSFETs and diodes on-site.",
  "Yes, Lloyd Havells power units are serviced at component level by replacing shorted secondary diodes and capacitors.",
  "Yes, VW combo boards can be fixed very affordably by repairing the 12V regulator circuit and input protection components.",
  "Yes, Acerpure power supply circuits can be restored by replacing shorted diodes and secondary rail capacitors on-site.",
  "Yes, Redmi power boards with tripped standby rails are repaired on-site by replacing shorted MOSFETs and diodes.",
  "Yes, Mi Horizon combo power boards are serviced at component level by replacing failed rectifier diodes and capacitors.",
  "Yes, Hyundai WebOS power boards damaged by thunderstorms are repaired on-site by replacing shorted varistors and fuses."
];

// Remote control Q & A (31 distinct)
const remoteQ = [
  "What should I do if my Samsung Smart remote stops responding?",
  "How to fix a Sony Bravia Bluetooth remote that is not working?",
  "Why is my Panasonic Viera TV ignoring remote control commands?",
  "What to do if my Philips TV remote control fails to change channels?",
  "How can I resolve Toshiba VIDAA TV remote unresponsive issues?",
  "Why does my Sharp Aquos TV fail to respond to the remote handset?",
  "What should I check if my Haier Google TV remote is not working?",
  "How to fix a Sansui TV remote that does not turn the TV on?",
  "Why is my Videocon TV ignoring remote button presses?",
  "What to do when my Mi TV Bluetooth voice remote unpairs?",
  "Why is my Hitachi television unresponsive to remote signals?",
  "How can I fix an Intex TV remote control that is not working?",
  "What to do if my Micromax Canvas remote stops responding?",
  "Why is my Kodak Google TV voice remote not connecting?",
  "How to fix a OnePlus TV Bluetooth remote that keeps unpairing?",
  "What should I do if my Sanyo Kaizen TV remote fails to work?",
  "Why is my Akai Alexa voice remote not responding to commands?",
  "How to troubleshoot an Onida TV remote that is not working?",
  "What should I do if my Aiwa Magnifiq remote stops responding?",
  "How to fix a TCL Google TV voice remote pairing failure?",
  "Why is my iFFALCON TV ignoring remote control button presses?",
  "What to do when an Acer TV remote control fails to respond?",
  "How to troubleshoot a Hisense TV remote that is not working?",
  "Why is my BPL television not responding to remote handset inputs?",
  "What should I do if my Vu Glo TV remote stops functioning?",
  "How to fix a Lloyd Smart TV remote that refuses to pair?",
  "Why is my VW television ignoring remote control button presses?",
  "What to do when an Acerpure TV remote control stops working?",
  "How to resolve Redmi TV Bluetooth remote connection drops?",
  "Why is my Mi Horizon TV remote not communicating with the TV?",
  "How to troubleshoot a Hyundai Magic Remote air pointer that vanishes?"
];

const remoteA = [
  "Check battery charge first, then re-pair by holding Return and Play/Pause buttons simultaneously. If unresponsive, we test the TV's IR sensor eye.",
  "Replace batteries and hold Volume Down and Mic buttons to re-pair via Bluetooth. If it still fails, our technician checks the internal Bluetooth receiver.",
  "Check batteries first. If the front Viera indicator fails to blink when buttons are pressed, the IR receiver eye on the TV bezel may need service.",
  "Fit fresh alkaline batteries and clean the remote lens. If the TV still ignores inputs, we check the front photodiode board on the Philips chassis.",
  "Confirm battery strength and re-pair using the VIDAA settings menu. If issues persist, our technician inspects the internal sensor circuit.",
  "Check battery terminals for corrosion. If new cells do not help, our technician tests the Aquos IR receiver eye and standby sensor line.",
  "Ensure remote batteries are charged, then hold Home and Back buttons to re-establish Bluetooth connection with your Haier TV.",
  "Try a fresh pair of AAA batteries. If the standby LED does not flicker when pressing power, our technician checks the Sansui IR board.",
  "Replace handset batteries. If the TV continues ignoring inputs, the front infrared photodiode on the Videocon bezel likely requires repair.",
  "Unpair and re-pair by holding Mi and Home buttons near the TV. If it fails, our technician inspects the Bluetooth transceiver card.",
  "Test with fresh cells. If the Hitachi TV indicator ignores keypresses, our technician inspects the IR photodiode and 3.3V standby rail.",
  "Check battery contact springs. If the Intex TV remains unresponsive, our technician tests the universal IR sensor eye on-site.",
  "Fit fresh batteries first. If the Canvas TV still does not respond, our technician checks the front receiver board and cable connection.",
  "Re-pair the Kodak remote by holding Home and Back buttons close to the screen. If it drops connection, we test the internal wireless card.",
  "Press and hold OnePlus and Home buttons to re-pair. If unpairing recurs, our technician checks the Bluetooth module on the Gamma board.",
  "Replace remote batteries. If the Kaizen TV does not register keypresses, our technician inspects the IR sensor board for loose tracks.",
  "Hold the Home button for 10 seconds to re-pair the Alexa remote. If voice fails, our technician checks the Bluetooth card on the Akai board.",
  "Test with new batteries. If the Onida TV fails to switch channels, our technician inspects the front IR photodiode circuit.",
  "Check remote battery levels. If the Magnifiq TV ignores commands, our technician inspects the IR eye and Bluetooth transceiver.",
  "Hold Home and OK buttons to re-pair the TCL voice remote. If pairing times out, our technician checks the internal wireless module.",
  "Fit fresh alkaline batteries. If the iFFALCON TV still does not respond, our technician checks the front IR sensor eye for damage.",
  "Check batteries and re-pair the Acer remote via Google TV settings. If unresponsive, our technician inspects the Bluetooth receiver.",
  "Replace handset batteries. If the Hisense TV fails to respond, our technician tests the internal IR receiver and Bluetooth transceiver.",
  "Try a fresh set of batteries. If the BPL TV indicator does not blink, our technician tests the front sensor eye on-site.",
  "Check battery contacts and re-pair via Bluetooth. If the Vu Glo TV ignores inputs, our technician inspects the wireless receiver card.",
  "Hold Home and Back buttons to re-pair with your Lloyd TV. If pairing fails, our technician checks the internal Bluetooth receiver.",
  "Replace batteries with fresh cells. If the VW TV ignores commands, our technician tests the front IR photodiode circuit on-site.",
  "Check battery charge and re-pair via Google TV settings. If unresponsive, our technician inspects the Acerpure Bluetooth module.",
  "Re-pair the Redmi remote by pressing buttons near the logo. If it disconnects repeatedly, we test the internal wireless transceiver.",
  "Hold Home and Mi buttons to re-pair with your Mi Horizon TV. If it fails, our technician tests the internal Bluetooth receiver card.",
  "Press the scroll wheel to register the Magic Remote with WebOS. If the pointer remains missing, we inspect the Bluetooth module on-site."
];

// Sunday service / timing Q & A (31 distinct)
const sundayQ = [
  "Is Samsung TV doorstep service available on Sundays in Karur?",
  "Can I schedule a Sony Bravia technician visit on weekends in Karur?",
  "Does your team provide Panasonic TV repair service on public holidays?",
  "Is Philips TV doorstep inspection offered on Sundays in Karur?",
  "Can I book a Toshiba TV technician visit on Sunday afternoon?",
  "Are Sharp Aquos TV repair visits available seven days a week in Karur?",
  "Does Haier TV doorstep service operate on weekends in Karur?",
  "Can I get Sansui TV repair on Sundays in Sengunthapuram, Karur?",
  "Are Videocon TV repair technicians available on holidays in Karur?",
  "Is Mi TV repair service open on Sundays across Karur?",
  "Can I schedule a Hitachi TV inspection on Sunday morning?",
  "Are Intex TV doorstep technicians available on weekends in Karur?",
  "Does your team service Micromax televisions on public holidays?",
  "Can I get Kodak TV repair on Sundays in Chinna Andankovil?",
  "Is OnePlus TV doorstep repair available seven days a week?",
  "Can I schedule Sanyo TV service on Sunday in Kagithapuramam?",
  "Does Akai Fire TV repair service operate on weekends in Karur?",
  "Can I book an Onida TV inspection on Sunday in Thanthonimalai?",
  "Are Aiwa TV doorstep repair visits available on holidays?",
  "Can I schedule TCL TV service on Sundays in Sengunthapuram, Karur?",
  "Does iFFALCON TV repair service operate seven days a week?",
  "Can I get Acer TV doorstep repair on Sunday in Pasupathipalayam?",
  "Is Hisense TV technician service available on weekends in Karur?",
  "Does your team repair BPL televisions on Sundays in Sukkaliyur?",
  "Can I schedule Vu Glo TV repair on Sunday afternoon in Kovai Road?",
  "Is Lloyd TV doorstep service available seven days a week in Karur?",
  "Can I get VW TV repair on Sunday in Thorakkalpatti?",
  "Does your team service Acerpure televisions on weekends in Karur?",
  "Can I schedule Redmi TV repair on Sunday in Kagithapuramam?",
  "Is Mi Horizon TV doorstep repair available on public holidays?",
  "Does Hyundai WebOS TV repair operate seven days a week in Karur?"
];

const sundayA = [
  "Yes, our Karur desk arranges Samsung technician visits Monday through Sunday between 8:00 AM and 8:30 PM across all neighborhoods.",
  "Yes, Sony Bravia doorstep visits are scheduled seven days a week, including weekends and local holidays, for your convenience.",
  "Yes, our Panasonic repair network operates on all seven days, including Sundays and festival holidays, across Karur.",
  "Yes, we provide Sunday doorstep inspection for Philips televisions across all 60 residential sectors in Karur.",
  "Yes, you can easily book Sunday afternoon home visits for Toshiba televisions by calling our local service desk.",
  "Yes, Sharp Aquos repair visits are available every day of the week from 8:00 AM to 8:30 PM throughout Karur.",
  "Yes, our local technicians attend Haier TV service calls on Saturdays, Sundays, and public holidays across Karur.",
  "Yes, Sansui TV repairs are carried out seven days a week, including Sunday visits in Sengunthapuram and Kagithapuramam.",
  "Yes, our technicians handle Videocon TV repair calls on weekends and regional holidays with no extra emergency surcharge.",
  "Yes, Mi TV repair visits can be booked on Sundays between 8:00 AM and 8:30 PM across all Karur localities.",
  "Yes, our local desk organizes Sunday morning visits for Hitachi televisions across Thorakkalpatti and Karur Town.",
  "Yes, doorstep service for Intex televisions is active seven days a week, including Sundays, across all Karur areas.",
  "Yes, we schedule Micromax repair visits on public holidays and Sundays to prevent long entertainment downtime.",
  "Yes, technicians visit Chinna Andankovil and Karur Town for Kodak TV service on Sundays with prior booking.",
  "Yes, our OnePlus TV doorstep service runs seven days a week between 8:00 AM and 8:30 PM across Karur.",
  "Yes, you can schedule a Sanyo TV inspection on Sunday in Kagithapuramam or any other Karur neighborhood.",
  "Yes, Akai Fire TV service calls are handled seven days a week, including Sunday appointments, throughout Karur.",
  "Yes, our technicians visit homes in Thanthonimalai and surrounding Karur areas for Onida TV repairs on Sundays.",
  "Yes, Aiwa TV repair appointments can be scheduled on public holidays and weekends with our local customer desk.",
  "Yes, TCL TV doorstep inspection is available on Sundays across Sengunthapuram and all Karur residential sectors.",
  "Yes, iFFALCON TV service visits are available seven days a week, Monday through Sunday, across Karur.",
  "Yes, you can book an Acer TV repair visit on Sunday in Pasupathipalayam or any neighboring Karur locality.",
  "Yes, our Hisense TV repair technicians are on duty seven days a week between 8:00 AM and 8:30 PM in Karur.",
  "Yes, Sunday repair appointments for BPL televisions are regularly scheduled across Sukkaliyur and Karur Town.",
  "Yes, you can schedule Sunday afternoon service for Vu Glo televisions along Kovai Road with our local helpline.",
  "Yes, Lloyd TV doorstep repairs operate seven days a week across Thanthonimalai, Kagithapuramam, and all Karur sectors.",
  "Yes, technicians are available for Sunday VW television inspections in Thorakkalpatti and nearby areas.",
  "Yes, our team provides Acerpure TV service on weekends and festival holidays throughout Karur.",
  "Yes, Sunday repair appointments for Redmi televisions can be booked in Kagithapuramam and across Karur.",
  "Yes, Mi Horizon TV home visits are arranged on public holidays and Sundays between 8:00 AM and 8:30 PM.",
  "Yes, our Hyundai TV repair service operates seven days a week across Karur Town and surrounding neighborhoods."
];

// Booking process Q & A (31 distinct)
const bookQ = [
  "How do I book an experienced Samsung TV technician in Karur?",
  "What is the quickest way to book Sony Bravia TV repair in Karur?",
  "How can I schedule a Panasonic Viera TV service visit in Karur?",
  "How do I request a Philips TV technician home visit in Karur?",
  "What information is needed to book Toshiba TV repair in Karur?",
  "How do I schedule a Sharp Aquos TV inspection in Karur?",
  "How can I book a Haier Google TV technician visit in Karur?",
  "What is the process to schedule Sansui TV repair in Karur?",
  "How do I arrange a Videocon TV doorstep service visit?",
  "What is the quickest way to book Mi TV repair in Karur?",
  "How can I schedule a Hitachi TV inspection in Karur?",
  "What is the procedure to book Intex TV doorstep repair in Karur?",
  "How do I arrange a Micromax Canvas TV technician visit?",
  "How can I book a Kodak TV inspection in Karur Town?",
  "What is the simplest way to book OnePlus TV repair in Karur?",
  "How do I schedule a Sanyo Kaizen TV service visit in Karur?",
  "What is the process to book Akai Fire TV repair in Karur?",
  "How can I request an Onida TV technician home visit in Karur?",
  "How do I book an Aiwa Magnifiq TV inspection in Karur?",
  "What is the quickest way to schedule TCL TV service in Karur?",
  "How do I arrange an iFFALCON TV doorstep inspection visit?",
  "What steps are required to book Acer TV repair in Karur?",
  "What is the procedure to schedule a Hisense TV technician visit in Karur?",
  "How do I book a BPL TV doorstep service call in Karur?",
  "What is the quickest way to request Vu Glo TV repair in Karur?",
  "How can I schedule a Lloyd TV technician visit in Karur?",
  "What is the procedure to book VW TV repair in Karur?",
  "How do I arrange an Acerpure TV inspection visit in Karur?",
  "What is the easiest way to book Redmi TV repair in Karur?",
  "How can I request a Mi Horizon TV service visit in Karur?",
  "How do I schedule a Hyundai WebOS TV technician visit in Karur?"
];

const bookA = [
  "Tap the Call button (+91 94420 54321) or send a WhatsApp message with your Samsung model and area in Karur.",
  "Simply click Call or WhatsApp on this page, share your Sony screen size and blink error, and choose a visit time.",
  "Reach our local Karur desk via call or WhatsApp, describe the Viera TV fault, and confirm your doorstep appointment.",
  "Call our helpline or message on WhatsApp with your Philips TV model and address to arrange a technician inspection.",
  "Just share your Toshiba TV model code, observed issue, and locality with our desk via phone or WhatsApp.",
  "Click the Call button or tap WhatsApp to share your Sharp Aquos symptoms and schedule a convenient visit.",
  "Contact our Karur customer desk by phone or WhatsApp, mention your Haier TV model, and book an inspection.",
  "Simply call +91 94420 54321 or message our desk on WhatsApp with your Sansui TV screen size and location.",
  "Reach out via Call or WhatsApp, describe the Videocon TV problem, and our team will assign a local technician.",
  "Tap the Call or WhatsApp button to share your Mi TV model number and book a prompt doorstep technician visit.",
  "Call our local Karur number or message on WhatsApp with your Hitachi model and preferred visit time slot.",
  "Contact our service desk via call or WhatsApp, state your Intex TV issue, and confirm a technician visit.",
  "Simply call +91 94420 54321 or tap WhatsApp, describe your Canvas TV symptoms, and choose your visit slot.",
  "Reach our local team via phone or WhatsApp with your Kodak TV details to schedule an on-site inspection.",
  "Call our helpline or click WhatsApp, share your OnePlus TV model number, and book a home technician visit.",
  "Contact our customer desk by phone or WhatsApp with your Sanyo TV screen size to confirm an appointment.",
  "Tap Call or WhatsApp on this page, describe the Akai Fire TV fault, and schedule a technician home visit.",
  "Simply call our Karur number or message on WhatsApp with your Onida model details to book service.",
  "Reach out to our customer desk via call or WhatsApp, describe the Magnifiq TV fault, and confirm a visit.",
  "Click Call or WhatsApp to share your TCL TV model code and book an experienced technician visit.",
  "Contact our local desk by phone or WhatsApp with your iFFALCON TV details to schedule an inspection.",
  "Simply tap Call or WhatsApp on this page, mention your Acer TV screen size, and choose your visit timing.",
  "Reach our customer desk via call or WhatsApp, describe your Hisense TV issue, and arrange a home visit.",
  "Call +91 94420 54321 or click WhatsApp to share your BPL TV symptoms and confirm a technician visit.",
  "Tap the Call or WhatsApp button to provide your Vu TV model details and book a doorstep service appointment.",
  "Simply contact our local desk via call or WhatsApp with your Lloyd TV model to schedule a home visit.",
  "Reach our customer team by phone or WhatsApp, describe your VW TV problem, and confirm a visit slot.",
  "Click Call or WhatsApp on this page, share your Acerpure TV details, and book a doorstep inspection.",
  "Simply call +91 94420 54321 or tap WhatsApp, mention your Redmi TV symptoms, and choose your visit time.",
  "Reach out via Call or WhatsApp with your Mi Horizon TV model code to book a convenient doorstep visit.",
  "Tap the Call button or message on WhatsApp to share your Hyundai TV fault and confirm an on-site appointment."
];

// HDMI questions & answers (31 distinct)
const hdmiQ = [
  "Can loose HDMI ports on Samsung televisions be repaired?",
  "What causes 'No Signal' on Sony Bravia HDMI input ports?",
  "How do you fix loose HDMI port connections on Panasonic TVs?",
  "Can damaged HDMI ARC ports on Philips TVs be repaired?",
  "Why does my Toshiba TV display 'No Signal' on HDMI inputs?",
  "Can broken HDMI sockets on Sharp Aquos TVs be replaced on-site?",
  "How do you resolve HDMI handshake issues on Haier televisions?",
  "Why is my set-top box not detected on Sansui TV HDMI ports?",
  "Can loose HDMI terminals on Videocon televisions be fixed?",
  "What causes set-top box signal drops on Mi TV HDMI ports?",
  "Can damaged HDMI connectors on Hitachi TVs be repaired on-site?",
  "Why is my DTH box showing 'No Signal' on Intex TV HDMI ports?",
  "How do you fix loose HDMI sockets on Micromax Canvas televisions?",
  "Can Kodak 4K TV HDMI ports with loose pins be repaired at home?",
  "What to do if all HDMI ports on my OnePlus TV show black screen?",
  "Why is my set-top box cutting out on Sanyo Kaizen HDMI ports?",
  "Can damaged HDMI sockets on Akai Fire TVs be replaced on-site?",
  "How do you resolve 'No Input Detected' on Onida HDMI ports?",
  "Can loose HDMI ARC ports on Aiwa Magnifiq TVs be repaired?",
  "What causes 4K gaming consoles to show 'No Signal' on TCL HDMI ports?",
  "How do you fix loose HDMI sockets on iFFALCON televisions?",
  "Why is my cable box not detected on Acer TV HDMI ports?",
  "Can broken HDMI connectors on Hisense Tornado TVs be replaced?",
  "What causes set-top box video to cut out on BPL HDMI ports?",
  "How do you resolve loose HDMI port connections on Vu Glo TVs?",
  "Can damaged HDMI sockets on Lloyd televisions be repaired on-site?",
  "Why does my VW TV display 'No Signal' across all HDMI ports?",
  "How do you fix loose HDMI connectors on Acerpure televisions?",
  "What causes HDMI signal dropouts during gaming on Redmi TVs?",
  "Can wobbly HDMI sockets on Mi Horizon televisions be repaired?",
  "How do you resolve 'No Connection' errors on Hyundai HDMI ports?"
];

// Lines questions & answers (31 distinct)
const linesQ = [
  "Why does my Samsung TV have vertical colored lines on the screen?",
  "What causes rainbow lines running down a Sony Bravia TV screen?",
  "Can colored vertical lines on a Panasonic Viera display be repaired?",
  "Why are there vertical multi-color bands on my Philips TV screen?",
  "What causes horizontal scanning lines on Toshiba REGZA displays?",
  "Can barcode-like vertical lines on Sharp Aquos screens be fixed?",
  "Why does my Haier TV show half of the screen dark with vertical lines?",
  "What causes colored vertical stripes on Sansui DLED display panels?",
  "Can vertical lines running top to bottom on Videocon TVs be repaired?",
  "Why are there thin vertical lines across my Mi TV display panel?",
  "What causes green or pink vertical lines on Hitachi IPS panels?",
  "Can white screen or vertical lines on Intex TVs be repaired at home?",
  "Why does my Micromax Canvas TV have duplicate jumping images?",
  "What causes vertical colored lines across Kodak CA PRO displays?",
  "Can a single green vertical line on a OnePlus TV screen be fixed?",
  "Why are there milky vertical bands on my Sanyo Kaizen TV screen?",
  "What causes vertical rainbow stripes on Akai Fire TV screens?",
  "Can horizontal line interference on Onida televisions be repaired?",
  "Why does my Aiwa Magnifiq display show negative solarized colors?",
  "What causes vertical color stripes and ghosting on TCL QLED screens?",
  "Can vertical lines and half-dark screens on iFFALCON TVs be fixed?",
  "Why does my Acer TV screen show fine vertical colored lines?",
  "What causes multi-color vertical lines on Hisense ULED displays?",
  "Can vertical stripes running through channels on BPL TVs be repaired?",
  "Why does my Vu Glo TV screen show image jitter and vertical lines?",
  "What causes vertical colored bars across Lloyd Smart TV displays?",
  "Can vertical lines and negative picture on VW TVs be repaired?",
  "Why does my Acerpure display show colored vertical stripes?",
  "What causes vertical lines and double images on Redmi TV screens?",
  "Can vertical lines across Mi Horizon bezel-less screens be fixed?",
  "Why does my Hyundai WebOS TV show vertical rainbow stripes on screen?"
];

// Broken glass advice questions & answers (31 distinct)
const glassQ = [
  "Can cracked Samsung TV display glass be replaced cost-effectively?",
  "What are my options if my Sony Bravia TV screen glass is shattered?",
  "Is it worth replacing cracked display glass on a Panasonic TV?",
  "Can physically broken Philips TV screen glass be repaired?",
  "What should I do if my Toshiba TV glass panel is broken by impact?",
  "Can cracked Japanese display glass on Sharp Aquos TVs be replaced?",
  "Is shattered screen glass replacement practical for Haier TVs?",
  "Can broken display glass on a Sansui TV be replaced in Karur?",
  "What are the options if Videocon TV display panel glass is cracked?",
  "Can cracked screen glass on a Xiaomi Mi TV be replaced affordably?",
  "Is it economical to replace broken display glass on a Hitachi TV?",
  "Can cracked LCD glass on an Intex TV be replaced at low cost?",
  "What should I do if my Micromax Canvas TV screen glass is broken?",
  "Can physically cracked Kodak CA PRO display glass be replaced?",
  "Is broken screen glass replacement feasible for OnePlus televisions?",
  "What are my options if Sanyo Kaizen TV panel glass is cracked?",
  "Can shattered screen glass on an Akai Fire TV be replaced?",
  "What should I do if my Onida TV display glass is cracked?",
  "Can broken screen glass on an Aiwa Magnifiq TV be replaced?",
  "Is it practical to replace cracked display glass on a TCL QLED TV?",
  "Can physically broken screen glass on an iFFALCON TV be replaced?",
  "What are the repair options for a cracked Acer TV display panel?",
  "Can shattered display glass on a Hisense Tornado TV be replaced?",
  "Is it economical to replace broken screen glass on a BPL television?",
  "What should I do if my Vu Glo QLED TV screen glass is cracked?",
  "Can cracked display glass on a Lloyd television be replaced?",
  "Is broken screen glass replacement worthwhile for a VW television?",
  "What are my options if Acerpure TV display panel glass is broken?",
  "Can cracked screen glass on a Redmi Smart TV be replaced affordably?",
  "What should I do if my Mi Horizon bezel-less display glass is shattered?",
  "Can cracked panel glass on a Hyundai WebOS TV be replaced cost-effectively?"
];

// Speaker buzzing questions & answers (31 distinct)
const soundQ = [
  "Why is my Samsung TV speaker vibrating during high volume dialogue?",
  "What causes buzzing sound on dialogue in Sony Bravia televisions?",
  "Why is my Panasonic Viera TV speaker crackling on loud serials?",
  "What causes rattling noise inside Philips TV speaker enclosures?",
  "Why do Toshiba REGZA TV speakers produce muffled or distorted speech?",
  "Can buzzing speaker sound on Sharp Aquos TVs be repaired on-site?",
  "Why is my Haier TV speaker vibrating during movie dialogue?",
  "What causes severe cabinet rattle from Sansui TV internal speakers?",
  "Why is my Videocon TV audio distorted even at moderate volume?",
  "Can rattling sound from Mi TV 20W internal speakers be fixed?",
  "Why are Hitachi TV speakers producing a jarring rattle during news?",
  "What causes crackling audio from Intex downward-firing speakers?",
  "Why do Micromax Canvas TV speakers sound distorted and muffled?",
  "Can severe speaker buzz on Kodak CA PRO televisions be repaired?",
  "What causes crackling sound during movie bass on OnePlus TVs?",
  "Why is my Sanyo Kaizen TV audio distorted during news broadcasts?",
  "What causes harsh buzzing during dialogue on Akai Fire TVs?",
  "Why is my Onida TV Devil's Horn speaker vibrating loudly on bass?",
  "Can muffled speech on Aiwa Magnifiq televisions be repaired?",
  "What causes distorted bass and buzzing audio on TCL QLED TVs?",
  "Why are iFFALCON TV internal speakers crackling at high volume?",
  "Can severe speaker rattle on Acer 30W televisions be repaired?",
  "Why is my Hisense Tornado soundbar buzzing during speech?",
  "What causes muffled sound and buzzing from BPL internal speakers?",
  "Can vibrating rattle from Vu Cinema TV 40W soundbars be fixed?",
  "Why are Lloyd TV front-firing speakers producing harsh audio buzz?",
  "What causes severe speaker rattle during movies on VW televisions?",
  "Can vibrating buzz during dialogues on Acerpure TVs be repaired?",
  "Why do Redmi TV 30W speakers buzz during high volume scenes?",
  "What causes crackling audio from Mi Horizon internal sound drivers?",
  "Can jarring vibration rattle from Hyundai WebOS TV speakers be fixed?"
];

// Helper to assemble all 31 brand FAQ arrays
const allBrandFaqs = {};

brands.forEach((brand, idx) => {
  const b = brand;
  const p = brandProfiles[b] || brandProfiles["Samsung"];
  const i = idx;
  const pricing = brandPricing[b] || { speakerSet: "₹650 – ₹1,400" };

  allBrandFaqs[b] = [
    p.special1,
    p.special2,
    { q: locQ[i], a: locA[i] },
    { q: costQ[i], a: costA[i] },
    { q: powerQ[i], a: powerA[i] },
    { q: remoteQ[i], a: remoteA[i] },
    {
      q: hdmiQ[i],
      a: `If your set-top box or console shows 'No Signal' on ${b} TV, our technician inspects connector pins, resolders board tracks, or replaces the damaged HDMI socket on-site. [HDMI ${i + 1}]`
    },
    {
      q: linesQ[i],
      a: `Display lines on ${b} televisions can stem from loose ribbon cables, a failing T-Con board, or panel bonding issues. Our technician checks voltages to determine repair viability. [Lines ${i + 1}]`
    },
    {
      q: glassQ[i],
      a: `If the display glass on your ${b} TV is physically shattered, glass replacement usually costs nearly as much as a new TV. We advise you honestly on feasibility before any diagnostic cost. [Glass ${i + 1}]`
    },
    {
      q: soundQ[i],
      a: `Buzzing or crackling occurs when speaker cone paper tears over time. Replacing the internal speaker drivers (typically ${pricing.speakerSet}) on your ${b} TV restores clean dialogue. [Sound ${i + 1}]`
    },
    { q: sundayQ[i], a: sundayA[i] },
    { q: bookQ[i], a: bookA[i] }
  ];
});

// Write distinct sentences for HDMI, Lines, Glass, Sound
const hdmiAnswers = ["If your set-top box or gaming console shows No Signal on your Samsung TV, our technician inspects connector pins on-site, resolders loose tracks, or replaces the damaged HDMI socket directly.","When Sony Bravia HDMI ports lose signal, our technician tests the internal HDMI switch IC and re-terminates loose connector contacts right at your home.","For Panasonic TVs showing black screen on HDMI inputs, we inspect physical port solder joints and test 5V signal continuity on the logic board.","On Philips televisions, missing set-top box video is fixed by resoldering loose surface-mount HDMI pins or replacing damaged ESD protection diodes.","If Toshiba REGZA HDMI ports fail to detect streaming devices, our technician checks port ground continuity and services the HDMI controller circuit.","Sharp Aquos HDMI ports with loose pins or no signal are repaired on-site by repairing motherboard circuit tracks or replacing the connector socket.","When Haier bezel-less TV HDMI ports fail to handshake with cable boxes, we inspect the connector pins and replace damaged switch ICs on-site.","For Sansui TVs showing No Signal banner, our technician resolders loose HDMI terminals and checks video scalar input lines directly.","On Videocon televisions, unstable HDMI signal is fixed by cleaning oxidized pins, resoldering tracks, or replacing the physical port socket.","If Mi TV HDMI ports show black screen with set-top boxes, our technician tests the HDMI equalizer chip and replaces damaged connector pins.","For Hitachi televisions displaying input error, our technician inspects the shielded HDMI terminal block and restores loose circuit connections.","On Intex televisions, wobbly HDMI sockets that flicker when touched are repaired by resoldering pin tracks or replacing the physical socket.","When Micromax Canvas HDMI ports lose video sync, we test the signal filter capacitors and replace damaged connector pins on the mainboard.","For Kodak CA PRO televisions, our technician tests the 4K HDMI 2.0 port array and replaces physically damaged connectors directly on-site.","On OnePlus TVs showing black screen across HDMI ports, we inspect the Gamma Engine HDMI receiver chip and repair loose connector solder joints.","If Sanyo Kaizen HDMI ports drop set-top box video, our technician verifies signal voltage lines and resolders loose connector terminals.","For Akai Fire TVs failing to recognize external inputs, we inspect the HDMI switch circuit and replace worn physical port pins on-site.","On Onida televisions showing No Input Detected, our technician checks HDMI port pin tension and replaces damaged connector blocks directly.","If Aiwa Magnifiq HDMI ports fail to communicate with soundbars, we test ARC audio lines and resolder loose terminal tracks on-site.","For TCL QLED televisions, our technician checks HDMI 2.1 high-speed data pairs and replaces damaged connector sockets right at your home.","On iFFALCON TVs showing video dropouts, we test HDMI connector pin alignment and repair damaged solder connections on the mainboard.","If Acer Google TV HDMI ports show black screen, our technician tests the ESD suppression diodes and replaces damaged port pins directly.","For Hisense Tornado TVs with failing HDMI ARC audio, we inspect the physical connector and replace the audio return switch IC on-site.","On BPL televisions showing No Signal with DTH boxes, our technician resolders loose HDMI pins and cleans oxidized internal socket contacts.","If Vu Glo TV HDMI inputs lose connection during video playback, we test port ground lines and replace damaged connector sockets on-site.","For Lloyd televisions with loose HDMI ports, our technician repairs board solder pads and installs fresh model-matched port terminals.","On VW Playwall TVs showing input signal loss, we test the combo board HDMI circuit and resolder loose surface-mount connector pins.","If Acerpure TV HDMI ports fail to detect streaming sticks, our technician inspects 5V pin power and replaces damaged physical connectors.","For Redmi X-Series TVs with HDMI handshake drops, we test the MediaTek input receiver lines and repair loose port connections on-site.","On Mi Horizon televisions, loose HDMI sockets that lose picture when bumped are repaired by reinforcing board solder tracks directly.","If Hyundai WebOS TV HDMI ports show No Connection, our technician checks the HDMI equalizer IC and replaces worn connector pins on-site."];
const linesAnswers = ["Vertical lines on Samsung screens usually result from failing T-Con boards or loose LVDS ribbons, which our technician tests on-site.","Rainbow stripes across Sony Bravia displays are diagnosed by testing T-Con gamma voltages and inspecting flexible panel connections.","For colored lines on Panasonic Viera screens, our technician checks LVDS cable seating and measures IPS panel gate drive voltages.","Multi-color bands on Philips displays are addressed by testing the timing controller PCB and cleaning display ribbon contacts on-site.","Scanning lines on Toshiba REGZA screens are investigated by testing CEVO timing board outputs and ribbon cable integrity.","Vertical barcode lines on Sharp Aquos panels are inspected for T-Con bias voltage shifts and source driver IC bonding faults.","When Haier TV screens show split lines, our technician measures timing controller lines and inspects ribbon seating on the chassis.","Vertical stripes across Sansui DLED displays are checked by testing T-Con gamma reference lines and cable seating directly.","For vertical lines on Videocon televisions, our technician tests Eyecon timing board voltages and cleans display ribbon contacts.","Thin vertical lines on Mi TVs are diagnosed by testing the T-Con timing chip and inspecting flexible flat display cables on-site.","Green or pink lines on Hitachi IPS panels are checked by measuring VGH and VGL bias voltages on the timing controller board.","Screen lines or white raster on Intex TVs are investigated by inspecting universal scalar timing lines and LVDS connections.","Duplicate or jumping lines on Micromax Canvas displays are checked by testing panel gate driver voltages and ribbon alignment.","Colored stripes on Kodak CA PRO screens are diagnosed by measuring T-Con clock signals and inspecting display flex ribbons.","A vertical line on OnePlus screens is evaluated by testing T-Con mini-LVDS data lines and inspecting panel source driver bonds.","Milky bands on Sanyo Kaizen displays are addressed by checking timing board gamma voltages and reseating ribbon connectors.","Rainbow stripes on Akai Fire TV screens are investigated by testing the T-Con timing controller and inspecting display ribbons.","Horizontal line noise on Onida televisions is checked by testing display flex cable grounding and timing board voltage rails.","Solarized colors or lines on Aiwa Magnifiq displays are diagnosed by testing gamma reference voltages on the T-Con board.","Vertical stripes on TCL QLED screens are inspected by checking AiPQ timing lines and panel source board ribbon connections.","Display lines on iFFALCON televisions are evaluated by testing CSOT panel timing voltages and cleaning ribbon cable contacts.","Fine vertical lines on Acer screens are checked by measuring T-Con clock signals and inspecting frameless ribbon connections.","Multi-colored stripes on Hisense ULED displays are investigated by testing Hi-View timing outputs and panel driver chips.","Vertical lines running through BPL television channels are diagnosed by testing timing controller bias rails on-site.","Image jitter and lines on Vu Glo QLED screens are evaluated by checking Glo Panel timing signals and ribbon cable seating.","Colored bars across Lloyd displays are inspected by measuring Micro Dimming timing voltages and checking flex ribbon tracks.","Display lines on VW Playwall screens are diagnosed by testing combo board scalar outputs and cleaning panel ribbon contacts.","Colored vertical stripes on Acerpure screens are checked by testing timing board voltage rails and inspecting display ribbons.","Double images or lines on Redmi displays are investigated by testing PatchWall timing outputs and source driver IC lines.","Vertical lines across Mi Horizon screens are evaluated by testing bezel-less panel ribbon connections and T-Con bias voltages.","Rainbow stripes on Hyundai WebOS screens are checked by inspecting panel timing lines and cleaning display flex ribbon contacts."];
const glassAnswers = ["If your Samsung display glass is cracked, replacement glass panel cost usually approaches that of a new television; we advise you honestly before any inspection fee.","When Sony Bravia screen glass is shattered from impact, replacement panel cost is very high; our technician provides honest guidance on whether repair is economical.","For Panasonic TVs with cracked glass, panel replacement is rarely cost-effective compared to buying a replacement set, which we explain upfront.","If Philips screen glass is broken, panel replacement typically costs nearly as much as a new TV; our team provides transparent feasibility advice before inspection.","When Toshiba REGZA glass is shattered, panel replacement is expensive; we advise customers honestly regarding replacement feasibility before taking any fee.","For Sharp Aquos TVs with cracked Japanese glass, panel replacement usually exceeds 70% of TV value; we provide frank advice before arranging visits.","If Haier bezel-less glass is shattered, replacing the display assembly is costly; our technician explains the economics honestly before any service call.","When Sansui display glass is broken, replacement panel cost is close to a new television; we discuss feasibility with you transparently before booking.","For Videocon TVs with cracked display glass, replacement panels are generally not economical; we offer straightforward guidance before inspection.","If Mi TV screen glass is physically broken, glass assembly replacement costs almost as much as a new unit; our team advises you honestly before any charges.","When Hitachi IPS display glass is shattered, panel replacement cost is prohibitive; we explain this clearly before scheduling an on-site visit.","For Intex TVs with cracked LCD glass, buying a replacement TV is usually more economical than panel replacement, which we advise honestly upfront.","If Micromax Canvas screen glass is broken, panel replacement is rarely practical; our desk gives you realistic advice before any diagnostic fee.","When Kodak CA PRO display glass is shattered, replacement panels approach the cost of a new television; we provide clear, honest advice before inspection.","For OnePlus TVs with cracked panel glass, screen replacement is very costly; our customer team explains the financial feasibility before scheduling.","If Sanyo Kaizen display glass is broken by impact, panel replacement cost is high; we discuss options transparently before booking any visit.","When Akai Fire TV screen glass is shattered, panel replacement is usually uneconomical; our desk offers honest advice before any fee is incurred.","For Onida televisions with cracked glass, replacement panel cost is nearly the price of a new set; we explain this upfront before inspection.","If Aiwa Magnifiq screen glass is broken, display panel replacement is rarely economical; our team advises you with complete transparency.","When TCL QLED display glass is shattered, replacement panel cost is close to buying a new TV; our technicians give you frank advice beforehand.","For iFFALCON TVs with cracked glass, screen replacement is costly; our service desk provides honest guidance regarding replacement practicality.","If Acer frameless display glass is broken, panel replacement cost is very high; we discuss feasibility with you candidly before taking up inspection.","When Hisense Tornado display glass is shattered, replacement panel expense is significant; we advise you honestly before any charges are incurred.","For BPL televisions with broken screen glass, panel replacement is rarely economical; our desk provides clear, realistic advice before booking.","If Vu Glo QLED glass is cracked, replacement Glo Panel assemblies are expensive; our team explains the economics honestly before any visit.","When Lloyd display glass is shattered from impact, screen replacement cost approaches a new set; we provide transparent advice before inspection.","For VW televisions with broken glass, replacing the LCD panel is not cost-effective; our helpline offers straightforward advice before any visit.","If Acerpure screen glass is cracked, panel replacement expense is high; our customer desk explains the feasibility honestly before booking.","When Redmi display glass is shattered, screen panel replacement costs almost as much as a new TV; we provide honest advice before inspection.","For Mi Horizon TVs with broken bezel-less glass, replacement assemblies are costly; our desk explains the options transparently before booking.","If Hyundai WebOS panel glass is cracked, screen replacement is rarely economical; our team advises you with complete honesty before any inspection."];
const soundAnswers = ["Vibrating speaker sound on Samsung TVs is resolved by replacing the downward-firing acoustic drivers with matched units, restoring dialogue clarity.","Buzzing audio on Sony Bravia sets is fixed by replacing the acoustic bass reflex drivers with genuine-spec units for clean sound reproduction.","Rattling noise in Panasonic Viera TVs is eliminated by installing fresh front-firing speaker drivers, restoring distortion-free speech.","Crackling audio in Philips TV enclosures is solved by replacing the internal speaker pair with matched drivers, eliminating cabinet resonance.","Muffled speech from Toshiba REGZA speakers is fixed by installing fresh high-output acoustic drivers for balanced dialogue and background sound.","Vibrating sound on Sharp Aquos TVs is resolved by replacing the bass reflex acoustic drivers with model-matched units on-site.","Speaker buzz on Haier televisions is eliminated by replacing the internal down-firing sound modules, restoring clear dialogue for news and movies.","Cabinet rattle in Sansui televisions is fixed by replacing the stereo acoustic box drivers with fresh units that handle high volume cleanly.","Audio distortion on Videocon TVs is resolved by replacing the high-decibel speaker cones with matched drivers to eliminate buzzing.","Rattling sound from Mi TV 20W speakers is cured by installing a new internal acoustic driver set, restoring balanced stereo sound.","Jarring rattle in Hitachi cabinets is eliminated by replacing the Japanese-tuned sound drivers with fresh matched units on-site.","Crackling audio on Intex televisions is fixed by installing fresh downward-firing acoustic cones, restoring loud and clean voice output.","Distorted speech on Micromax Canvas TVs is resolved by replacing the internal speaker drivers with fresh units for clear audio playback.","Severe speaker buzz on Kodak CA PRO TVs is cured by installing new high-output acoustic drivers, eliminating distortion on high volume.","Crackling bass on OnePlus televisions is fixed by replacing the Dolby Audio tuned speaker drivers with genuine-fit replacements on-site.","Distorted sound on Sanyo Kaizen TVs is resolved by installing fresh acoustic driver units, restoring crisp dialogue for serials and films.","Harsh buzzing on Akai Fire TVs is eliminated by replacing the Japanese acoustic sound drivers with fresh matched units directly at your home.","Heavy vibration in Onida cabinets is resolved by servicing or replacing the Devil s Horn acoustic drivers for punchy, rattle-free audio.","Muffled speech on Aiwa Magnifiq TVs is fixed by installing new Amphitheatre acoustic drivers, restoring wide-stage sound clarity.","Distorted bass on TCL QLED televisions is cured by replacing the internal sound units with matched Onkyo-spec drivers on-site.","Crackling sound on iFFALCON televisions is resolved by replacing the internal stereo box drivers with fresh units for clean dialogue.","Harsh speaker rattle on Acer TVs is fixed by installing fresh 30W high-output acoustic drivers, restoring powerful distortion-free sound.","Buzzing sound from Hisense Tornado soundbars is cured by repairing or replacing the integrated acoustic drivers directly at your home.","Muffled audio on BPL televisions is eliminated by installing fresh stereo speaker drivers, restoring clean dialogue for daily viewing.","Vibrating rattle on Vu Glo televisions is resolved by replacing the 40W soundbar acoustic drivers with genuine-spec units on-site.","Harsh audio buzz on Lloyd televisions is fixed by replacing the front-firing speaker drivers with fresh matched units for clear speech.","Severe speaker rattle on VW televisions is eliminated by installing new stereo acoustic drivers, restoring clean volume for movies.","Vibrating dialogue on Acerpure TVs is resolved by replacing the internal acoustic drivers with fresh units for balanced voice clarity.","Harsh buzzing on Redmi TVs is cured by installing fresh 30W stereo drivers, restoring punchy dialogue without vibration.","Crackling audio on Mi Horizon televisions is fixed by replacing the tuned acoustic drivers with fresh units, restoring crisp stereo output.","Jarring vibration on Hyundai WebOS TVs is resolved by replacing the internal box stereo drivers with fresh units for clear speech."];


// Update with unique variations
brands.forEach((brand, idx) => {
  allBrandFaqs[brand][6].a = hdmiAnswers[idx];
  allBrandFaqs[brand][7].a = linesAnswers[idx];
  allBrandFaqs[brand][8].a = glassAnswers[idx];
  allBrandFaqs[brand][9].a = soundAnswers[idx];
});

// Check question & answer uniqueness
const qMap = {};
const aMap = {};

Object.entries(allBrandFaqs).forEach(([brand, faqs]) => {
  faqs.forEach(faq => {
    const normQ = faq.q.toLowerCase().replace(new RegExp(brand.toLowerCase(), 'g'), 'BRAND');
    if (!qMap[normQ]) qMap[normQ] = [];
    if (!qMap[normQ].includes(brand)) qMap[normQ].push(brand);

    const normA = faq.a.toLowerCase().replace(new RegExp(brand.toLowerCase(), 'g'), 'BRAND');
    const matches = normA.match(/[^.!?]+[.!?]+/g) || [];
    matches.forEach(m => {
      const s = m.trim();
      if (s.length > 30) {
        if (!aMap[s]) aMap[s] = [];
        if (!aMap[s].includes(brand)) aMap[s].push(brand);
      }
    });
  });
});

const dupQ = Object.entries(qMap).filter(([q, bList]) => bList.length > 1);
const dupA = Object.entries(aMap).filter(([a, bList]) => bList.length > 1);

console.log('Final Duplicate Questions count across all 31 brands:', dupQ.length);
console.log('Final Duplicate Answer Sentences count across all 31 brands:', dupA.length);

if (dupQ.length > 0) {
  console.log('Duplicate Q:', dupQ);
}
if (dupA.length > 0) {
  console.log('Sample Duplicate A:', dupA.slice(0, 5));
}

// Generate the tv_brand_faqs.js file
const fileContent = `// 31 Brand-tailored FAQ sets for all 31 TV brands
// Karur only, no AI buzzwords, honest pricing, brand-specific questions
const brandPricing = require('./tv_brand_pricing.js');

const allBrandFaqs = ${JSON.stringify(allBrandFaqs, null, 2)};

function getBrandFaqs(brand) {
  const brandName = brand.name || brand;
  if (allBrandFaqs[brandName]) {
    return allBrandFaqs[brandName];
  }
  return allBrandFaqs["Samsung"];
}

module.exports = { getBrandFaqs };
`;

fs.writeFileSync(path.resolve(__dirname, 'tv_brand_faqs.js'), fileContent, 'utf8');
console.log('Successfully wrote tv_brand_faqs.js with 31 distinct brand FAQ sets!');
