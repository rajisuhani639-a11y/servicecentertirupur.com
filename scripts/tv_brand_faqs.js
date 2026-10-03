// 31 Brand-tailored FAQ sets for all 31 TV brands
// Karur only, no AI buzzwords, honest pricing, brand-specific questions
const brandPricing = require('./tv_brand_pricing.js');

const allBrandFaqs = {
  "Samsung": [
    {
      "q": "Why is my Samsung TV red standby light blinking 2 or 5 times continuously?",
      "a": "A 2-blink or 5-blink red LED on Samsung televisions indicates an automatic shutdown triggered by the power supply protection circuit. This usually points to burnt LED backlight strips or overloaded secondary rails on the Samsung BN44 SMPS power board. Our technician checks the voltage on-site in Karur."
    },
    {
      "q": "Can you fix Samsung Tizen Smart TV freezing on the startup logo in Karur?",
      "a": "Yes. When a Samsung TV freezes on the 'Samsung Smart TV' logo or restarts every few seconds, it is usually caused by corrupted eMMC flash data or an uncompleted Tizen OS update. Our technician performs a system recovery or motherboard cache reset at your doorstep."
    },
    {
      "q": "Where can I get Samsung Smart TV repair near me in Karur?",
      "a": "Our service desk arranges doorstep visits across Pasupathipalayam, Kagithapuramam, Kovai Road, Thanthonimalai, and all surrounding Karur areas."
    },
    {
      "q": "How much does Samsung TV backlight replacement cost in Karur?",
      "a": "Samsung backlight strip replacement typically ranges between ₹1,500 and ₹4,200 depending on whether your model is a 32-inch Full HD, 43-inch Crystal 4K, or 55-inch QLED display."
    },
    {
      "q": "Can Samsung BN44 SMPS power boards be repaired at home?",
      "a": "Yes, Samsung BN44 boards with shorted rectifier diodes, blown fuses, or failed MOSFETs are routinely repaired on-site without changing the entire board."
    },
    {
      "q": "What should I do if my Samsung Smart remote stops responding?",
      "a": "Check battery charge first, then re-pair by holding Return and Play/Pause buttons simultaneously. If unresponsive, we test the TV's IR sensor eye."
    },
    {
      "q": "Can loose HDMI ports on Samsung televisions be repaired?",
      "a": "If your set-top box or gaming console shows No Signal on your Samsung TV, our technician inspects connector pins on-site, resolders loose tracks, or replaces the damaged HDMI socket directly."
    },
    {
      "q": "Why does my Samsung TV have vertical colored lines on the screen?",
      "a": "Vertical lines on Samsung screens usually result from failing T-Con boards or loose LVDS ribbons, which our technician tests on-site."
    },
    {
      "q": "Can cracked Samsung TV display glass be replaced cost-effectively?",
      "a": "If your Samsung display glass is cracked, replacement glass panel cost usually approaches that of a new television; we advise you honestly before any inspection fee."
    },
    {
      "q": "Why is my Samsung TV speaker vibrating during high volume dialogue?",
      "a": "Vibrating speaker sound on Samsung TVs is resolved by replacing the downward-firing acoustic drivers with matched units, restoring dialogue clarity."
    },
    {
      "q": "Is Samsung TV doorstep service available on Sundays in Karur?",
      "a": "Yes, our Karur desk arranges Samsung technician visits Monday through Sunday between 8:00 AM and 8:30 PM across all neighborhoods."
    },
    {
      "q": "How do I book an experienced Samsung TV technician in Karur?",
      "a": "Tap the Call button (+91 94420 54321) or send a WhatsApp message with your Samsung model and area in Karur."
    }
  ],
  "Sony": [
    {
      "q": "What does it mean when my Sony Bravia TV red light blinks 6 times?",
      "a": "A 6-blink error code on Sony Bravia televisions specifically indicates a backlight inverter or LED strip fault. The TV micro-controller detects an abnormal current draw and shuts down the display to prevent panel damage. Our Karur technician measures strip voltages on-site."
    },
    {
      "q": "Can Sony Android TV boot loop issues be fixed at home in Karur?",
      "a": "Yes. When a Sony TV gets stuck on the spinning Android circles or Google TV logo, our technician connects via USB service mode to clear cache, reset firmware, or service the system memory IC directly."
    },
    {
      "q": "Is Sony Bravia TV repair available at home in Karur Town?",
      "a": "Yes, our technicians travel directly to residences across Karur Town, Kovai Road, Sengunthapuram, and neighboring streets."
    },
    {
      "q": "What is the cost of Sony Bravia LED backlight repair in Karur?",
      "a": "Sony Bravia backlight replacement generally costs between ₹1,800 and ₹4,800 depending on screen size and whether your set uses Full HD direct LEDs or 4K Triluminos arrays."
    },
    {
      "q": "Is it possible to repair Sony G-Board power supplies at component level?",
      "a": "Yes, our technicians test Sony G-Board standby rails and replace failed bridge rectifiers or capacitors right at your home."
    },
    {
      "q": "How to fix a Sony Bravia Bluetooth remote that is not working?",
      "a": "Replace batteries and hold Volume Down and Mic buttons to re-pair via Bluetooth. If it still fails, our technician checks the internal Bluetooth receiver."
    },
    {
      "q": "What causes 'No Signal' on Sony Bravia HDMI input ports?",
      "a": "When Sony Bravia HDMI ports lose signal, our technician tests the internal HDMI switch IC and re-terminates loose connector contacts right at your home."
    },
    {
      "q": "What causes rainbow lines running down a Sony Bravia TV screen?",
      "a": "Rainbow stripes across Sony Bravia displays are diagnosed by testing T-Con gamma voltages and inspecting flexible panel connections."
    },
    {
      "q": "What are my options if my Sony Bravia TV screen glass is shattered?",
      "a": "When Sony Bravia screen glass is shattered from impact, replacement panel cost is very high; our technician provides honest guidance on whether repair is economical."
    },
    {
      "q": "What causes buzzing sound on dialogue in Sony Bravia televisions?",
      "a": "Buzzing audio on Sony Bravia sets is fixed by replacing the acoustic bass reflex drivers with genuine-spec units for clean sound reproduction."
    },
    {
      "q": "Can I schedule a Sony Bravia technician visit on weekends in Karur?",
      "a": "Yes, Sony Bravia doorstep visits are scheduled seven days a week, including weekends and local holidays, for your convenience."
    },
    {
      "q": "What is the quickest way to book Sony Bravia TV repair in Karur?",
      "a": "Simply click Call or WhatsApp on this page, share your Sony screen size and blink error, and choose a visit time."
    }
  ],
  "Panasonic": [
    {
      "q": "Can Panasonic TV power boards (TNPA series) be repaired in Karur?",
      "a": "Yes. Panasonic Viera models commonly use TNPA power supply boards. In most cases, blown bridge rectifiers, secondary MOSFETs, or swollen filter capacitors can be repaired at component level without replacing the whole board."
    },
    {
      "q": "What causes vertical colored lines on a Panasonic TV screen?",
      "a": "Vertical lines can stem from a loose LVDS ribbon cable connecting the mainboard to the T-Con board or degraded COF driver IC bonds along the edge of the LCD glass. The technician inspects connections on-site."
    },
    {
      "q": "How quickly can a Panasonic TV technician visit my house in Thanthonimalai?",
      "a": "Technician visits in Thanthonimalai and Sengunthapuram are typically organized within 2 to 4 hours of your service request."
    },
    {
      "q": "How much will it cost to replace Panasonic Viera backlight strips?",
      "a": "Panasonic Viera backlight replacement typically ranges between ₹1,400 and ₹3,800 based on screen size and IPS panel diode specifications."
    },
    {
      "q": "Can Panasonic TNPA power boards be fixed without full replacement?",
      "a": "Yes, Panasonic TNPA power boards can usually be restored by repairing secondary filter circuits and MOSFET switches on-site."
    },
    {
      "q": "Why is my Panasonic Viera TV ignoring remote control commands?",
      "a": "Check batteries first. If the front Viera indicator fails to blink when buttons are pressed, the IR receiver eye on the TV bezel may need service."
    },
    {
      "q": "How do you fix loose HDMI port connections on Panasonic TVs?",
      "a": "For Panasonic TVs showing black screen on HDMI inputs, we inspect physical port solder joints and test 5V signal continuity on the logic board."
    },
    {
      "q": "Can colored vertical lines on a Panasonic Viera display be repaired?",
      "a": "For colored lines on Panasonic Viera screens, our technician checks LVDS cable seating and measures IPS panel gate drive voltages."
    },
    {
      "q": "Is it worth replacing cracked display glass on a Panasonic TV?",
      "a": "For Panasonic TVs with cracked glass, panel replacement is rarely cost-effective compared to buying a replacement set, which we explain upfront."
    },
    {
      "q": "Why is my Panasonic Viera TV speaker crackling on loud serials?",
      "a": "Rattling noise in Panasonic Viera TVs is eliminated by installing fresh front-firing speaker drivers, restoring distortion-free speech."
    },
    {
      "q": "Does your team provide Panasonic TV repair service on public holidays?",
      "a": "Yes, our Panasonic repair network operates on all seven days, including Sundays and festival holidays, across Karur."
    },
    {
      "q": "How can I schedule a Panasonic Viera TV service visit in Karur?",
      "a": "Reach our local Karur desk via call or WhatsApp, describe the Viera TV fault, and confirm your doorstep appointment."
    }
  ],
  "Philips": [
    {
      "q": "Why is Ambilight glowing on my Philips TV but the screen remains completely dark?",
      "a": "In Philips Ambilight models, rear projection LEDs operate on a separate circuit from the display backlight strips. If the internal screen LED strips burn out, Ambilight continues working while the front picture stays black. Replacing the screen backlight strips resolves this."
    },
    {
      "q": "How do you fix Philips Saphi OS TV freezing on the shield startup logo?",
      "a": "When a Philips TV hangs on the opening logo or fails to launch apps, it points to corrupted firmware memory or unstable logic rail voltages. Our technician resets the boot partition or updates firmware on-site in Karur."
    },
    {
      "q": "Can I book doorstep Philips Ambilight TV repair in Kagithapuramam?",
      "a": "Yes, our local Karur team covers Kagithapuramam, Sukkaliyur, and nearby residential zones with doorstep service."
    },
    {
      "q": "What is the price range for Philips TV backlight replacement?",
      "a": "Philips TV backlight replacement usually costs between ₹1,350 and ₹3,600 depending on whether your set is a Smart LED or 4K Ambilight model."
    },
    {
      "q": "Do you service Philips dual-capacitor power supply boards on-site?",
      "a": "Yes, Philips power supply boards damaged by lightning spikes are serviced by replacing damaged capacitors and rectifiers on-site."
    },
    {
      "q": "What to do if my Philips TV remote control fails to change channels?",
      "a": "Fit fresh alkaline batteries and clean the remote lens. If the TV still ignores inputs, we check the front photodiode board on the Philips chassis."
    },
    {
      "q": "Can damaged HDMI ARC ports on Philips TVs be repaired?",
      "a": "On Philips televisions, missing set-top box video is fixed by resoldering loose surface-mount HDMI pins or replacing damaged ESD protection diodes."
    },
    {
      "q": "Why are there vertical multi-color bands on my Philips TV screen?",
      "a": "Multi-color bands on Philips displays are addressed by testing the timing controller PCB and cleaning display ribbon contacts on-site."
    },
    {
      "q": "Can physically broken Philips TV screen glass be repaired?",
      "a": "If Philips screen glass is broken, panel replacement typically costs nearly as much as a new TV; our team provides transparent feasibility advice before inspection."
    },
    {
      "q": "What causes rattling noise inside Philips TV speaker enclosures?",
      "a": "Crackling audio in Philips TV enclosures is solved by replacing the internal speaker pair with matched drivers, eliminating cabinet resonance."
    },
    {
      "q": "Is Philips TV doorstep inspection offered on Sundays in Karur?",
      "a": "Yes, we provide Sunday doorstep inspection for Philips televisions across all 60 residential sectors in Karur."
    },
    {
      "q": "How do I request a Philips TV technician home visit in Karur?",
      "a": "Call our helpline or message on WhatsApp with your Philips TV model and address to arrange a technician inspection."
    }
  ],
  "Toshiba": [
    {
      "q": "Why does my Toshiba REGZA TV show sound but no picture on the screen?",
      "a": "Toshiba REGZA displays rely on high-luminance direct LED arrays. When individual diodes wear out from daily running, the driver board shuts off the backlight string for safety. Sound continues playing through CEVO speakers while picture is lost."
    },
    {
      "q": "Can Toshiba VIDAA Smart TV Wi-Fi connection errors be fixed at home?",
      "a": "Yes. If VIDAA OS shows Wi-Fi disabled or repeatedly forgets your home network password, our technician tests the internal wireless card and checks 3.3V power continuity on the mainboard."
    },
    {
      "q": "Where in Karur do you provide Toshiba REGZA TV service?",
      "a": "We cover all major residential neighborhoods including Pasupathipalayam, Kovai Road, and Sengunthapuram with technician home visits."
    },
    {
      "q": "How much does Toshiba REGZA backlight strip repair cost?",
      "a": "Toshiba REGZA backlight strip repair generally ranges between ₹1,400 and ₹3,900 according to screen size and REGZA engine panel type."
    },
    {
      "q": "Can Toshiba REGZA power supply boards be repaired in Karur?",
      "a": "Yes, Toshiba REGZA power modules with swollen filter caps or shorted diodes are repaired at component level to keep costs minimal."
    },
    {
      "q": "How can I resolve Toshiba VIDAA TV remote unresponsive issues?",
      "a": "Confirm battery strength and re-pair using the VIDAA settings menu. If issues persist, our technician inspects the internal sensor circuit."
    },
    {
      "q": "Why does my Toshiba TV display 'No Signal' on HDMI inputs?",
      "a": "If Toshiba REGZA HDMI ports fail to detect streaming devices, our technician checks port ground continuity and services the HDMI controller circuit."
    },
    {
      "q": "What causes horizontal scanning lines on Toshiba REGZA displays?",
      "a": "Scanning lines on Toshiba REGZA screens are investigated by testing CEVO timing board outputs and ribbon cable integrity."
    },
    {
      "q": "What should I do if my Toshiba TV glass panel is broken by impact?",
      "a": "When Toshiba REGZA glass is shattered, panel replacement is expensive; we advise customers honestly regarding replacement feasibility before taking any fee."
    },
    {
      "q": "Why do Toshiba REGZA TV speakers produce muffled or distorted speech?",
      "a": "Muffled speech from Toshiba REGZA speakers is fixed by installing fresh high-output acoustic drivers for balanced dialogue and background sound."
    },
    {
      "q": "Can I book a Toshiba TV technician visit on Sunday afternoon?",
      "a": "Yes, you can easily book Sunday afternoon home visits for Toshiba televisions by calling our local service desk."
    },
    {
      "q": "What information is needed to book Toshiba TV repair in Karur?",
      "a": "Just share your Toshiba TV model code, observed issue, and locality with our desk via phone or WhatsApp."
    }
  ],
  "Sharp": [
    {
      "q": "What does it mean when a Sharp Aquos TV red indicator light blinks in sequence?",
      "a": "Sharp Aquos televisions use blink error sequences to indicate faults such as inverter over-current, lamp error, or power supply rail drop. Our technician decodes the blink pattern on-site in Karur to replace the faulty component."
    },
    {
      "q": "Can Japanese Sharp Aquos display panels with lines be repaired in Karur?",
      "a": "If the issue is caused by loose LVDS cables or T-Con gamma voltage shifts, our technician can repair the circuit. However, if the LCD glass is cracked or has internal COF tab damage, repair feasibility is checked before charging."
    },
    {
      "q": "Do you send technicians to Thorakkalpatti for Sharp Aquos repair?",
      "a": "Yes, our technician desk coordinates home visits to Thorakkalpatti, Karur Town, and nearby localities."
    },
    {
      "q": "What do you charge for Sharp Aquos TV backlight replacement?",
      "a": "Sharp Aquos backlight replacement typically costs between ₹1,500 and ₹4,000 based on whether you have a Full HD LED or 4K Japanese panel."
    },
    {
      "q": "Is Sharp Aquos power supply board component repair feasible at home?",
      "a": "Yes, our technicians diagnose Sharp UV2A power circuits on-site and replace failed diodes or regulators without whole-board cost."
    },
    {
      "q": "Why does my Sharp Aquos TV fail to respond to the remote handset?",
      "a": "Check battery terminals for corrosion. If new cells do not help, our technician tests the Aquos IR receiver eye and standby sensor line."
    },
    {
      "q": "Can broken HDMI sockets on Sharp Aquos TVs be replaced on-site?",
      "a": "Sharp Aquos HDMI ports with loose pins or no signal are repaired on-site by repairing motherboard circuit tracks or replacing the connector socket."
    },
    {
      "q": "Can barcode-like vertical lines on Sharp Aquos screens be fixed?",
      "a": "Vertical barcode lines on Sharp Aquos panels are inspected for T-Con bias voltage shifts and source driver IC bonding faults."
    },
    {
      "q": "Can cracked Japanese display glass on Sharp Aquos TVs be replaced?",
      "a": "For Sharp Aquos TVs with cracked Japanese glass, panel replacement usually exceeds 70% of TV value; we provide frank advice before arranging visits."
    },
    {
      "q": "Can buzzing speaker sound on Sharp Aquos TVs be repaired on-site?",
      "a": "Vibrating sound on Sharp Aquos TVs is resolved by replacing the bass reflex acoustic drivers with model-matched units on-site."
    },
    {
      "q": "Are Sharp Aquos TV repair visits available seven days a week in Karur?",
      "a": "Yes, Sharp Aquos repair visits are available every day of the week from 8:00 AM to 8:30 PM throughout Karur."
    },
    {
      "q": "How do I schedule a Sharp Aquos TV inspection in Karur?",
      "a": "Click the Call button or tap WhatsApp to share your Sharp Aquos symptoms and schedule a convenient visit."
    }
  ],
  "Haier": [
    {
      "q": "Why is my Haier Google TV stuck in an endless boot loop on the opening logo?",
      "a": "Haier Google TVs can get stuck in a restart loop due to interrupted automatic updates, corrupted cache, or eMMC storage errors. Our Karur technician carries firmware recovery USB drives to reflash system partitions at your home."
    },
    {
      "q": "Can loose HDMI ports on Haier bezel-less televisions be repaired on-site?",
      "a": "Yes. Our technician resolders loose surface-mount HDMI connector pins or replaces broken ports directly on the Haier motherboard to restore set-top box video."
    },
    {
      "q": "How do I schedule a Haier TV inspection in Thanthonimalai, Karur?",
      "a": "Simply call or message our local customer desk to book a prompt technician visit in Thanthonimalai or Kovai Road."
    },
    {
      "q": "How much does Haier TV backlight strip replacement cost in Karur?",
      "a": "Haier backlight replacement generally ranges from ₹1,300 to ₹3,500 depending on whether your TV is an HD Ready or Bezel-Less 4K model."
    },
    {
      "q": "Can Haier TV combo power boards be repaired on-site in Karur?",
      "a": "Yes, Haier integrated power boards can be repaired by replacing secondary voltage regulators and protection diodes on-site."
    },
    {
      "q": "What should I check if my Haier Google TV remote is not working?",
      "a": "Ensure remote batteries are charged, then hold Home and Back buttons to re-establish Bluetooth connection with your Haier TV."
    },
    {
      "q": "How do you resolve HDMI handshake issues on Haier televisions?",
      "a": "When Haier bezel-less TV HDMI ports fail to handshake with cable boxes, we inspect the connector pins and replace damaged switch ICs on-site."
    },
    {
      "q": "Why does my Haier TV show half of the screen dark with vertical lines?",
      "a": "When Haier TV screens show split lines, our technician measures timing controller lines and inspects ribbon seating on the chassis."
    },
    {
      "q": "Is shattered screen glass replacement practical for Haier TVs?",
      "a": "If Haier bezel-less glass is shattered, replacing the display assembly is costly; our technician explains the economics honestly before any service call."
    },
    {
      "q": "Why is my Haier TV speaker vibrating during movie dialogue?",
      "a": "Speaker buzz on Haier televisions is eliminated by replacing the internal down-firing sound modules, restoring clear dialogue for news and movies."
    },
    {
      "q": "Does Haier TV doorstep service operate on weekends in Karur?",
      "a": "Yes, our local technicians attend Haier TV service calls on Saturdays, Sundays, and public holidays across Karur."
    },
    {
      "q": "How can I book a Haier Google TV technician visit in Karur?",
      "a": "Contact our Karur customer desk by phone or WhatsApp, mention your Haier TV model, and book an inspection."
    }
  ],
  "Sansui": [
    {
      "q": "Why does my Sansui TV make a clicking noise and refuse to power on?",
      "a": "Continuous clicking without picture or standby light indicates a short-circuit on the secondary DC rails of the Sansui power board. Our technician checks rectifier diodes and filter capacitors to repair the board."
    },
    {
      "q": "How much does Sansui LED TV backlight replacement cost in Karur?",
      "a": "Backlight strip replacement for Sansui 32-inch to 55-inch televisions typically costs between ₹1,200 and ₹3,200 depending on screen size and DLED configuration. The technician confirms the exact quote after inspection."
    },
    {
      "q": "Are Sansui TV repair visits available across Sengunthapuram in Karur?",
      "a": "Yes, we provide doorstep service throughout Sengunthapuram, Kagithapuramam, and all 60 approved Karur residential sectors."
    },
    {
      "q": "What is the price of Sansui LED TV backlight replacement?",
      "a": "Sansui DLED backlight replacement usually ranges between ₹1,200 and ₹3,200 based on screen size and panel diode density."
    },
    {
      "q": "Do you repair Sansui DLED power supply boards at home?",
      "a": "Yes, Sansui power boards damaged by sudden voltage surges are repaired on-site by replacing shorted bridge rectifiers."
    },
    {
      "q": "How to fix a Sansui TV remote that does not turn the TV on?",
      "a": "Try a fresh pair of AAA batteries. If the standby LED does not flicker when pressing power, our technician checks the Sansui IR board."
    },
    {
      "q": "Why is my set-top box not detected on Sansui TV HDMI ports?",
      "a": "For Sansui TVs showing No Signal banner, our technician resolders loose HDMI terminals and checks video scalar input lines directly."
    },
    {
      "q": "What causes colored vertical stripes on Sansui DLED display panels?",
      "a": "Vertical stripes across Sansui DLED displays are checked by testing T-Con gamma reference lines and cable seating directly."
    },
    {
      "q": "Can broken display glass on a Sansui TV be replaced in Karur?",
      "a": "When Sansui display glass is broken, replacement panel cost is close to a new television; we discuss feasibility with you transparently before booking."
    },
    {
      "q": "What causes severe cabinet rattle from Sansui TV internal speakers?",
      "a": "Cabinet rattle in Sansui televisions is fixed by replacing the stereo acoustic box drivers with fresh units that handle high volume cleanly."
    },
    {
      "q": "Can I get Sansui TV repair on Sundays in Sengunthapuram, Karur?",
      "a": "Yes, Sansui TV repairs are carried out seven days a week, including Sunday visits in Sengunthapuram and Kagithapuramam."
    },
    {
      "q": "What is the process to schedule Sansui TV repair in Karur?",
      "a": "Simply call +91 94420 54321 or message our desk on WhatsApp with your Sansui TV screen size and location."
    }
  ],
  "Videocon": [
    {
      "q": "Can Videocon TV with built-in DDB satellite tuner still be used with external set-top boxes?",
      "a": "Yes. If the internal DDB tuner is outdated or malfunctioning, our technician configures external HDMI or AV ports to connect Airtel, Sun Direct, or Tata Play set-top boxes smoothly."
    },
    {
      "q": "Why is my Videocon Liquid Luminous TV displaying sound with a black screen?",
      "a": "Liquid Luminous displays use high-power LED strips. Burnt diodes break the circuit, causing the backlight inverter to turn off while audio continues. Replacing the backlight strips restores original picture quality."
    },
    {
      "q": "Can Videocon TV technicians visit our home in Sukkaliyur?",
      "a": "Our technicians regularly visit Sukkaliyur and Pasupathipalayam to carry out on-site board and backlight repairs."
    },
    {
      "q": "How much is the repair cost for Videocon TV backlight strips?",
      "a": "Videocon backlight strip repair typically costs between ₹1,150 and ₹3,000 depending on whether your TV is a standard LED or Liquid Luminous model."
    },
    {
      "q": "Can Videocon dual-rail power boards be fixed after voltage surges?",
      "a": "Yes, Videocon dual-rail power boards can be restored by replacing damaged filter capacitors and rectifier ICs at your home."
    },
    {
      "q": "Why is my Videocon TV ignoring remote button presses?",
      "a": "Replace handset batteries. If the TV continues ignoring inputs, the front infrared photodiode on the Videocon bezel likely requires repair."
    },
    {
      "q": "Can loose HDMI terminals on Videocon televisions be fixed?",
      "a": "On Videocon televisions, unstable HDMI signal is fixed by cleaning oxidized pins, resoldering tracks, or replacing the physical port socket."
    },
    {
      "q": "Can vertical lines running top to bottom on Videocon TVs be repaired?",
      "a": "For vertical lines on Videocon televisions, our technician tests Eyecon timing board voltages and cleans display ribbon contacts."
    },
    {
      "q": "What are the options if Videocon TV display panel glass is cracked?",
      "a": "For Videocon TVs with cracked display glass, replacement panels are generally not economical; we offer straightforward guidance before inspection."
    },
    {
      "q": "Why is my Videocon TV audio distorted even at moderate volume?",
      "a": "Audio distortion on Videocon TVs is resolved by replacing the high-decibel speaker cones with matched drivers to eliminate buzzing."
    },
    {
      "q": "Are Videocon TV repair technicians available on holidays in Karur?",
      "a": "Yes, our technicians handle Videocon TV repair calls on weekends and regional holidays with no extra emergency surcharge."
    },
    {
      "q": "How do I arrange a Videocon TV doorstep service visit?",
      "a": "Reach out via Call or WhatsApp, describe the Videocon TV problem, and our team will assign a local technician."
    }
  ],
  "Xiaomi": [
    {
      "q": "Why is my Mi TV stuck on the 'Mi' startup logo or rebooting continuously?",
      "a": "This common Xiaomi TV issue is typically caused by corrupted PatchWall or Android TV firmware, an interrupted system update, or bad memory sectors on the eMMC flash chip. Our technician performs firmware flashing and cache resets in Karur."
    },
    {
      "q": "Why does my Mi TV Bluetooth voice remote keep disconnecting?",
      "a": "Mi voice remotes use Bluetooth to pair with an internal module on the motherboard. Low batteries, radio interference, or a failing Bluetooth card cause unpairing. We re-pair or replace the module card on-site."
    },
    {
      "q": "Where can I find an experienced Mi TV repair technician in Kagithapuramam?",
      "a": "You can book experienced Mi TV doorstep visits across Kagithapuramam and Karur Town by tapping the Call or WhatsApp button."
    },
    {
      "q": "What is the charge for Xiaomi Mi TV backlight strip replacement?",
      "a": "Xiaomi Mi TV backlight replacement generally costs between ₹1,250 and ₹3,600 depending on whether you own a Mi 4A, 4X, or 5X 4K television."
    },
    {
      "q": "Is it possible to repair Mi TV integrated power boards at component level?",
      "a": "Yes, Mi TV power circuits with blown input fuses or failed primary switching MOSFETs are serviced at component level on-site."
    },
    {
      "q": "What to do when my Mi TV Bluetooth voice remote unpairs?",
      "a": "Unpair and re-pair by holding Mi and Home buttons near the TV. If it fails, our technician inspects the Bluetooth transceiver card."
    },
    {
      "q": "What causes set-top box signal drops on Mi TV HDMI ports?",
      "a": "If Mi TV HDMI ports show black screen with set-top boxes, our technician tests the HDMI equalizer chip and replaces damaged connector pins."
    },
    {
      "q": "Why are there thin vertical lines across my Mi TV display panel?",
      "a": "Thin vertical lines on Mi TVs are diagnosed by testing the T-Con timing chip and inspecting flexible flat display cables on-site."
    },
    {
      "q": "Can cracked screen glass on a Xiaomi Mi TV be replaced affordably?",
      "a": "If Mi TV screen glass is physically broken, glass assembly replacement costs almost as much as a new unit; our team advises you honestly before any charges."
    },
    {
      "q": "Can rattling sound from Mi TV 20W internal speakers be fixed?",
      "a": "Rattling sound from Mi TV 20W speakers is cured by installing a new internal acoustic driver set, restoring balanced stereo sound."
    },
    {
      "q": "Is Mi TV repair service open on Sundays across Karur?",
      "a": "Yes, Mi TV repair visits can be booked on Sundays between 8:00 AM and 8:30 PM across all Karur localities."
    },
    {
      "q": "What is the quickest way to book Mi TV repair in Karur?",
      "a": "Tap the Call or WhatsApp button to share your Mi TV model number and book a prompt doorstep technician visit."
    }
  ],
  "Hitachi": [
    {
      "q": "Why is my Hitachi TV not responding to the power switch or remote in Karur?",
      "a": "Hitachi televisions incorporate heavy-duty surge protection. A mains voltage spike often blows the input fuse or varistor on the SMPS board. Our technician replaces damaged components on-site to revive the television."
    },
    {
      "q": "Can Hitachi IPS panel backlight strips be replaced at home in Karur?",
      "a": "Yes. Our technician brings matched Hitachi backlight diode strips, safely opens the chassis, and installs fresh strips with even light dispersion across the IPS glass."
    },
    {
      "q": "Is doorstep Hitachi TV repair available around Thorakkalpatti?",
      "a": "Yes, our local Karur service network extends to Thorakkalpatti and all neighboring residential areas."
    },
    {
      "q": "What is the approximate cost for Hitachi TV backlight replacement in Karur?",
      "a": "Hitachi backlight replacement ranges from ₹1,400 to ₹3,800 depending on whether it is an Alpha series HD Ready or 4K IPS display."
    },
    {
      "q": "Can Hitachi Alpha power supply boards be serviced at home in Karur?",
      "a": "Yes, Hitachi Alpha power modules are repaired by replacing damaged Japanese filter capacitors and voltage regulators directly."
    },
    {
      "q": "Why is my Hitachi television unresponsive to remote signals?",
      "a": "Test with fresh cells. If the Hitachi TV indicator ignores keypresses, our technician inspects the IR photodiode and 3.3V standby rail."
    },
    {
      "q": "Can damaged HDMI connectors on Hitachi TVs be repaired on-site?",
      "a": "For Hitachi televisions displaying input error, our technician inspects the shielded HDMI terminal block and restores loose circuit connections."
    },
    {
      "q": "What causes green or pink vertical lines on Hitachi IPS panels?",
      "a": "Green or pink lines on Hitachi IPS panels are checked by measuring VGH and VGL bias voltages on the timing controller board."
    },
    {
      "q": "Is it economical to replace broken display glass on a Hitachi TV?",
      "a": "When Hitachi IPS display glass is shattered, panel replacement cost is prohibitive; we explain this clearly before scheduling an on-site visit."
    },
    {
      "q": "Why are Hitachi TV speakers producing a jarring rattle during news?",
      "a": "Jarring rattle in Hitachi cabinets is eliminated by replacing the Japanese-tuned sound drivers with fresh matched units on-site."
    },
    {
      "q": "Can I schedule a Hitachi TV inspection on Sunday morning?",
      "a": "Yes, our local desk organizes Sunday morning visits for Hitachi televisions across Thorakkalpatti and Karur Town."
    },
    {
      "q": "How can I schedule a Hitachi TV inspection in Karur?",
      "a": "Call our local Karur number or message on WhatsApp with your Hitachi model and preferred visit time slot."
    }
  ],
  "Intex": [
    {
      "q": "Why is my Intex TV speaker rattling heavily during news or dialogue?",
      "a": "Intex televisions use compact downward-firing speakers. Over continuous use, paper cones tear or voice coils loosen. Our technician replaces the speaker pair with fresh matched drivers to restore clean dialogue."
    },
    {
      "q": "Can Intex TV combo motherboards be repaired at low cost in Karur?",
      "a": "Yes. Intex televisions frequently use universal combo boards where 12V regulators, audio ICs, and backlight drivers can be serviced at component level, keeping repair costs very affordable."
    },
    {
      "q": "Can I get Intex TV repair service in Inam Karur, Karur?",
      "a": "We provide complete home inspection for Intex televisions throughout Inam Karur and Kagithapuramam."
    },
    {
      "q": "What do you charge for Intex LED TV backlight repair?",
      "a": "Intex LED backlight repair typically costs between ₹1,100 and ₹2,800 based on whether you have a 32-inch or 43-inch Star series screen."
    },
    {
      "q": "Do you repair Intex 12V combo power supply circuits on-site?",
      "a": "Yes, Intex 12V combo circuits can be fixed very affordably by replacing shorted diodes and power switching ICs on-site."
    },
    {
      "q": "How can I fix an Intex TV remote control that is not working?",
      "a": "Check battery contact springs. If the Intex TV remains unresponsive, our technician tests the universal IR sensor eye on-site."
    },
    {
      "q": "Why is my DTH box showing 'No Signal' on Intex TV HDMI ports?",
      "a": "On Intex televisions, wobbly HDMI sockets that flicker when touched are repaired by resoldering pin tracks or replacing the physical socket."
    },
    {
      "q": "Can white screen or vertical lines on Intex TVs be repaired at home?",
      "a": "Screen lines or white raster on Intex TVs are investigated by inspecting universal scalar timing lines and LVDS connections."
    },
    {
      "q": "Can cracked LCD glass on an Intex TV be replaced at low cost?",
      "a": "For Intex TVs with cracked LCD glass, buying a replacement TV is usually more economical than panel replacement, which we advise honestly upfront."
    },
    {
      "q": "What causes crackling audio from Intex downward-firing speakers?",
      "a": "Crackling audio on Intex televisions is fixed by installing fresh downward-firing acoustic cones, restoring loud and clean voice output."
    },
    {
      "q": "Are Intex TV doorstep technicians available on weekends in Karur?",
      "a": "Yes, doorstep service for Intex televisions is active seven days a week, including Sundays, across all Karur areas."
    },
    {
      "q": "What is the procedure to book Intex TV doorstep repair in Karur?",
      "a": "Contact our service desk via call or WhatsApp, state your Intex TV issue, and confirm a technician visit."
    }
  ],
  "Micromax": [
    {
      "q": "Why does my Micromax TV freeze on the 'Canvas' logo screen?",
      "a": "Micromax Canvas smart televisions store firmware on an onboard eMMC chip. System updates or power cuts during write operations cause boot sector corruption. Our technician resets system cache or reflashes the firmware."
    },
    {
      "q": "Sound is loud on my Micromax TV, but the screen has no light. What is the fix?",
      "a": "This is a definite sign of burnt backlight LED strips. Replacing the full set of strips inside the Micromax panel restores full illumination and color balance."
    },
    {
      "q": "How to book a Micromax TV service call near Mengles Road?",
      "a": "Reach out to our customer helpline to arrange a convenient technician visit near Mengles Road or Pasupathipalayam."
    },
    {
      "q": "How much does Micromax TV backlight replacement usually cost?",
      "a": "Micromax Canvas backlight replacement generally ranges between ₹1,200 and ₹3,200 depending on screen size and panel diode rows."
    },
    {
      "q": "Can Micromax Canvas power supply boards be repaired without replacement?",
      "a": "Yes, Micromax Canvas power boards are serviced by replacing blown fuses, bridge rectifiers, and secondary capacitors on-site."
    },
    {
      "q": "What to do if my Micromax Canvas remote stops responding?",
      "a": "Fit fresh batteries first. If the Canvas TV still does not respond, our technician checks the front receiver board and cable connection."
    },
    {
      "q": "How do you fix loose HDMI sockets on Micromax Canvas televisions?",
      "a": "When Micromax Canvas HDMI ports lose video sync, we test the signal filter capacitors and replace damaged connector pins on the mainboard."
    },
    {
      "q": "Why does my Micromax Canvas TV have duplicate jumping images?",
      "a": "Duplicate or jumping lines on Micromax Canvas displays are checked by testing panel gate driver voltages and ribbon alignment."
    },
    {
      "q": "What should I do if my Micromax Canvas TV screen glass is broken?",
      "a": "If Micromax Canvas screen glass is broken, panel replacement is rarely practical; our desk gives you realistic advice before any diagnostic fee."
    },
    {
      "q": "Why do Micromax Canvas TV speakers sound distorted and muffled?",
      "a": "Distorted speech on Micromax Canvas TVs is resolved by replacing the internal speaker drivers with fresh units for clear audio playback."
    },
    {
      "q": "Does your team service Micromax televisions on public holidays?",
      "a": "Yes, we schedule Micromax repair visits on public holidays and Sundays to prevent long entertainment downtime."
    },
    {
      "q": "How do I arrange a Micromax Canvas TV technician visit?",
      "a": "Simply call +91 94420 54321 or tap WhatsApp, describe your Canvas TV symptoms, and choose your visit slot."
    }
  ],
  "Kodak": [
    {
      "q": "Why is my Kodak CA PRO 4K TV showing sound but the screen remains dark?",
      "a": "Kodak 4K televisions use high-output direct-lit LED arrays. When a diode burns open, the driver trips power to the entire string. We install model-matched replacement backlight arrays to restore the display."
    },
    {
      "q": "Can Kodak Google TV Wi-Fi drop issues be resolved on-site in Karur?",
      "a": "Yes. Our technician tests the 2.4GHz/5GHz internal Wi-Fi card and updates network driver settings on-site to ensure uninterrupted OTT streaming."
    },
    {
      "q": "Do technicians travel to Chinna Andankovil for Kodak TV repair?",
      "a": "Yes, our technicians travel to Chinna Andankovil and Karur Town to inspect Kodak televisions on-site."
    },
    {
      "q": "What is the price range for Kodak 4K TV backlight strips?",
      "a": "Kodak CA PRO and 7XPRO backlight replacement usually costs from ₹1,350 to ₹3,600 based on screen dimensions and 4K specifications."
    },
    {
      "q": "Is Kodak CA PRO power board component repair available in Karur?",
      "a": "Yes, Kodak power supply boards damaged by lightning spikes can be repaired by replacing shorted MOSFETs at your doorstep."
    },
    {
      "q": "Why is my Kodak Google TV voice remote not connecting?",
      "a": "Re-pair the Kodak remote by holding Home and Back buttons close to the screen. If it drops connection, we test the internal wireless card."
    },
    {
      "q": "Can Kodak 4K TV HDMI ports with loose pins be repaired at home?",
      "a": "For Kodak CA PRO televisions, our technician tests the 4K HDMI 2.0 port array and replaces physically damaged connectors directly on-site."
    },
    {
      "q": "What causes vertical colored lines across Kodak CA PRO displays?",
      "a": "Colored stripes on Kodak CA PRO screens are diagnosed by measuring T-Con clock signals and inspecting display flex ribbons."
    },
    {
      "q": "Can physically cracked Kodak CA PRO display glass be replaced?",
      "a": "When Kodak CA PRO display glass is shattered, replacement panels approach the cost of a new television; we provide clear, honest advice before inspection."
    },
    {
      "q": "Can severe speaker buzz on Kodak CA PRO televisions be repaired?",
      "a": "Severe speaker buzz on Kodak CA PRO TVs is cured by installing new high-output acoustic drivers, eliminating distortion on high volume."
    },
    {
      "q": "Can I get Kodak TV repair on Sundays in Chinna Andankovil?",
      "a": "Yes, technicians visit Chinna Andankovil and Karur Town for Kodak TV service on Sundays with prior booking."
    },
    {
      "q": "How can I book a Kodak TV inspection in Karur Town?",
      "a": "Reach our local team via phone or WhatsApp with your Kodak TV details to schedule an on-site inspection."
    }
  ],
  "OnePlus": [
    {
      "q": "Why does my OnePlus TV show a bright green or pink vertical line across the display?",
      "a": "Vertical colored lines on OnePlus televisions can indicate panel gate driver (COF) bonding stress or a loose LVDS flex cable. Our technician tests T-Con signal paths on-site to check repair possibilities."
    },
    {
      "q": "Why is my OnePlus TV stuck in an endless loop on spinning dots?",
      "a": "The spinning dots animation indicates an OxygenPlay / Android TV boot freeze, usually caused by corrupt cache or low internal storage. Our technician clears cache partitions or performs firmware recovery."
    },
    {
      "q": "Where can I get OnePlus TV repair near me around Pasupathipalayam?",
      "a": "Technicians are available for prompt doorstep visits in Pasupathipalayam, Kovai Road, and adjacent Karur streets."
    },
    {
      "q": "What is the expected charge for OnePlus TV backlight replacement in Karur?",
      "a": "OnePlus TV backlight replacement typically ranges between ₹1,450 and ₹3,900 depending on whether your unit is a Y1S Full HD or U1S 4K display."
    },
    {
      "q": "Can OnePlus SMPS power units be repaired at component level?",
      "a": "Yes, OnePlus SMPS power units with unstable voltage rails can be repaired at component level without full board replacement."
    },
    {
      "q": "How to fix a OnePlus TV Bluetooth remote that keeps unpairing?",
      "a": "Press and hold OnePlus and Home buttons to re-pair. If unpairing recurs, our technician checks the Bluetooth module on the Gamma board."
    },
    {
      "q": "What to do if all HDMI ports on my OnePlus TV show black screen?",
      "a": "On OnePlus TVs showing black screen across HDMI ports, we inspect the Gamma Engine HDMI receiver chip and repair loose connector solder joints."
    },
    {
      "q": "Can a single green vertical line on a OnePlus TV screen be fixed?",
      "a": "A vertical line on OnePlus screens is evaluated by testing T-Con mini-LVDS data lines and inspecting panel source driver bonds."
    },
    {
      "q": "Is broken screen glass replacement feasible for OnePlus televisions?",
      "a": "For OnePlus TVs with cracked panel glass, screen replacement is very costly; our customer team explains the financial feasibility before scheduling."
    },
    {
      "q": "What causes crackling sound during movie bass on OnePlus TVs?",
      "a": "Crackling bass on OnePlus televisions is fixed by replacing the Dolby Audio tuned speaker drivers with genuine-fit replacements on-site."
    },
    {
      "q": "Is OnePlus TV doorstep repair available seven days a week?",
      "a": "Yes, our OnePlus TV doorstep service runs seven days a week between 8:00 AM and 8:30 PM across Karur."
    },
    {
      "q": "What is the simplest way to book OnePlus TV repair in Karur?",
      "a": "Call our helpline or click WhatsApp, share your OnePlus TV model number, and book a home technician visit."
    }
  ],
  "Sanyo": [
    {
      "q": "Can Sanyo Kaizen TV power supply problems be repaired in Karur?",
      "a": "Yes. Sanyo Kaizen models benefit from Panasonic-engineered circuit designs. In most cases, blown bridge rectifiers or secondary capacitors on the SMPS board can be serviced at component level."
    },
    {
      "q": "Why is my Sanyo TV screen blinking on and off every few seconds?",
      "a": "Screen blinking points to a failing backlight boost circuit or an aging LED diode string that triggers safety shutdown. Our technician measures boost voltages on-site to fix the fault."
    },
    {
      "q": "Is doorstep Sanyo Kaizen TV repair supported in Kagithapuramam?",
      "a": "Yes, we organize doorstep repair visits for Sanyo televisions across Kagithapuramam, Sengunthapuram, and nearby areas."
    },
    {
      "q": "What is the cost of Sanyo Kaizen LED backlight replacement?",
      "a": "Sanyo Kaizen backlight replacement generally costs from ₹1,300 to ₹3,500 based on screen size and whether your set is Full HD or 4K."
    },
    {
      "q": "Do you service Sanyo Kaizen power supply boards at home?",
      "a": "Yes, Sanyo Kaizen power boards benefit from component-level servicing, replacing failed diodes and capacitors on-site."
    },
    {
      "q": "What should I do if my Sanyo Kaizen TV remote fails to work?",
      "a": "Replace remote batteries. If the Kaizen TV does not register keypresses, our technician inspects the IR sensor board for loose tracks."
    },
    {
      "q": "Why is my set-top box cutting out on Sanyo Kaizen HDMI ports?",
      "a": "If Sanyo Kaizen HDMI ports drop set-top box video, our technician verifies signal voltage lines and resolders loose connector terminals."
    },
    {
      "q": "Why are there milky vertical bands on my Sanyo Kaizen TV screen?",
      "a": "Milky bands on Sanyo Kaizen displays are addressed by checking timing board gamma voltages and reseating ribbon connectors."
    },
    {
      "q": "What are my options if Sanyo Kaizen TV panel glass is cracked?",
      "a": "If Sanyo Kaizen display glass is broken by impact, panel replacement cost is high; we discuss options transparently before booking any visit."
    },
    {
      "q": "Why is my Sanyo Kaizen TV audio distorted during news broadcasts?",
      "a": "Distorted sound on Sanyo Kaizen TVs is resolved by installing fresh acoustic driver units, restoring crisp dialogue for serials and films."
    },
    {
      "q": "Can I schedule Sanyo TV service on Sunday in Kagithapuramam?",
      "a": "Yes, you can schedule a Sanyo TV inspection on Sunday in Kagithapuramam or any other Karur neighborhood."
    },
    {
      "q": "How do I schedule a Sanyo Kaizen TV service visit in Karur?",
      "a": "Contact our customer desk by phone or WhatsApp with your Sanyo TV screen size to confirm an appointment."
    }
  ],
  "Akai": [
    {
      "q": "Why is my Akai Fire TV stuck on the 'Fire TV' logo screen?",
      "a": "Akai Fire TV Edition models can freeze on the logo if internal storage is full or an Amazon software update was interrupted. Our technician connects via USB service mode to restore firmware functionality."
    },
    {
      "q": "Can Akai Alexa voice remote pairing issues be checked at home in Karur?",
      "a": "Yes. If the Alexa voice remote refuses to pair, our technician inspects the internal Bluetooth module and IR receiver board to restore voice search and remote commands."
    },
    {
      "q": "Can an Akai Fire TV technician visit my residence in Karur Town?",
      "a": "Our local Karur technicians visit residences throughout Karur Town and Thanthonimalai on all seven days."
    },
    {
      "q": "How much do you charge for Akai Fire TV backlight repair?",
      "a": "Akai Fire TV backlight repair typically ranges between ₹1,350 and ₹3,400 depending on whether you have a 32-inch or 50-inch 4K model."
    },
    {
      "q": "Can Akai Fire TV power supply circuits be fixed on-site?",
      "a": "Yes, Akai Fire TV power boards are repaired by replacing blown input protection parts and secondary rail capacitors."
    },
    {
      "q": "Why is my Akai Alexa voice remote not responding to commands?",
      "a": "Hold the Home button for 10 seconds to re-pair the Alexa remote. If voice fails, our technician checks the Bluetooth card on the Akai board."
    },
    {
      "q": "Can damaged HDMI sockets on Akai Fire TVs be replaced on-site?",
      "a": "For Akai Fire TVs failing to recognize external inputs, we inspect the HDMI switch circuit and replace worn physical port pins on-site."
    },
    {
      "q": "What causes vertical rainbow stripes on Akai Fire TV screens?",
      "a": "Rainbow stripes on Akai Fire TV screens are investigated by testing the T-Con timing controller and inspecting display ribbons."
    },
    {
      "q": "Can shattered screen glass on an Akai Fire TV be replaced?",
      "a": "When Akai Fire TV screen glass is shattered, panel replacement is usually uneconomical; our desk offers honest advice before any fee is incurred."
    },
    {
      "q": "What causes harsh buzzing during dialogue on Akai Fire TVs?",
      "a": "Harsh buzzing on Akai Fire TVs is eliminated by replacing the Japanese acoustic sound drivers with fresh matched units directly at your home."
    },
    {
      "q": "Does Akai Fire TV repair service operate on weekends in Karur?",
      "a": "Yes, Akai Fire TV service calls are handled seven days a week, including Sunday appointments, throughout Karur."
    },
    {
      "q": "What is the process to book Akai Fire TV repair in Karur?",
      "a": "Tap Call or WhatsApp on this page, describe the Akai Fire TV fault, and schedule a technician home visit."
    }
  ],
  "Onida": [
    {
      "q": "Why is my Onida TV making a harsh buzzing sound from the Devil's Horn speakers?",
      "a": "Onida televisions feature high-wattage subwoofers and speaker cones. Heavy bass over time can tear the speaker cone paper or vibrate internal mountings. Replacing or refitting the speaker units restores clean sound."
    },
    {
      "q": "What should I do if my Onida TV has sound but no picture?",
      "a": "When audio plays without video, the LED backlight diode strips have burned out. Our technician checks the strip forward voltage on-site and installs a new matched backlight array."
    },
    {
      "q": "Where in Thanthonimalai can I get Onida TV repair service?",
      "a": "Doorstep service for Onida televisions is available across Thanthonimalai, Pasupathipalayam, and surrounding residential roads."
    },
    {
      "q": "What is the price for Onida LED TV backlight replacement?",
      "a": "Onida LED backlight replacement usually ranges from ₹1,250 to ₹3,300 based on screen dimensions and whether it is a KY Rock or Fire TV set."
    },
    {
      "q": "Is component repair possible for Onida high-current SMPS boards?",
      "a": "Yes, Onida high-current power boards damaged by voltage fluctuations are serviced on-site by replacing shorted rectifiers."
    },
    {
      "q": "How to troubleshoot an Onida TV remote that is not working?",
      "a": "Test with new batteries. If the Onida TV fails to switch channels, our technician inspects the front IR photodiode circuit."
    },
    {
      "q": "How do you resolve 'No Input Detected' on Onida HDMI ports?",
      "a": "On Onida televisions showing No Input Detected, our technician checks HDMI port pin tension and replaces damaged connector blocks directly."
    },
    {
      "q": "Can horizontal line interference on Onida televisions be repaired?",
      "a": "Horizontal line noise on Onida televisions is checked by testing display flex cable grounding and timing board voltage rails."
    },
    {
      "q": "What should I do if my Onida TV display glass is cracked?",
      "a": "For Onida televisions with cracked glass, replacement panel cost is nearly the price of a new set; we explain this upfront before inspection."
    },
    {
      "q": "Why is my Onida TV Devil's Horn speaker vibrating loudly on bass?",
      "a": "Heavy vibration in Onida cabinets is resolved by servicing or replacing the Devil s Horn acoustic drivers for punchy, rattle-free audio."
    },
    {
      "q": "Can I book an Onida TV inspection on Sunday in Thanthonimalai?",
      "a": "Yes, our technicians visit homes in Thanthonimalai and surrounding Karur areas for Onida TV repairs on Sundays."
    },
    {
      "q": "How can I request an Onida TV technician home visit in Karur?",
      "a": "Simply call our Karur number or message on WhatsApp with your Onida model details to book service."
    }
  ],
  "Aiwa": [
    {
      "q": "Why does my Aiwa Magnifiq TV have sound but the picture is completely black?",
      "a": "Aiwa Magnifiq displays use high-luminance direct LED arrays. When diode strips burn out, the display goes dark while Amphitheatre audio continues playing. We replace the backlight strips on-site."
    },
    {
      "q": "Can Aiwa Google TV freezing on the startup screen be repaired in Karur?",
      "a": "Yes. Our technician inspects motherboard eMMC storage and logic rail voltages, resetting system cache or reflashing Google TV firmware to restore normal booting."
    },
    {
      "q": "Do you provide doorstep Aiwa TV inspection along Kovai Road?",
      "a": "Yes, we arrange timely home visits along Kovai Road, Sengunthapuram, and throughout Karur for Aiwa televisions."
    },
    {
      "q": "How much does Aiwa Magnifiq backlight strip replacement cost?",
      "a": "Aiwa Magnifiq backlight replacement typically costs between ₹1,400 and ₹3,800 depending on whether you own a Full HD or 4K Google TV."
    },
    {
      "q": "Can Aiwa Magnifiq power supply boards be repaired in Karur?",
      "a": "Yes, Aiwa Magnifiq power supply circuits can be repaired at component level by replacing shorted switching transistors."
    },
    {
      "q": "What should I do if my Aiwa Magnifiq remote stops responding?",
      "a": "Check remote battery levels. If the Magnifiq TV ignores commands, our technician inspects the IR eye and Bluetooth transceiver."
    },
    {
      "q": "Can loose HDMI ARC ports on Aiwa Magnifiq TVs be repaired?",
      "a": "If Aiwa Magnifiq HDMI ports fail to communicate with soundbars, we test ARC audio lines and resolder loose terminal tracks on-site."
    },
    {
      "q": "Why does my Aiwa Magnifiq display show negative solarized colors?",
      "a": "Solarized colors or lines on Aiwa Magnifiq displays are diagnosed by testing gamma reference voltages on the T-Con board."
    },
    {
      "q": "Can broken screen glass on an Aiwa Magnifiq TV be replaced?",
      "a": "If Aiwa Magnifiq screen glass is broken, display panel replacement is rarely economical; our team advises you with complete transparency."
    },
    {
      "q": "Can muffled speech on Aiwa Magnifiq televisions be repaired?",
      "a": "Muffled speech on Aiwa Magnifiq TVs is fixed by installing new Amphitheatre acoustic drivers, restoring wide-stage sound clarity."
    },
    {
      "q": "Are Aiwa TV doorstep repair visits available on holidays?",
      "a": "Yes, Aiwa TV repair appointments can be scheduled on public holidays and weekends with our local customer desk."
    },
    {
      "q": "How do I book an Aiwa Magnifiq TV inspection in Karur?",
      "a": "Reach out to our customer desk via call or WhatsApp, describe the Magnifiq TV fault, and confirm a visit."
    }
  ],
  "TCL": [
    {
      "q": "Why is my TCL TV standby light glowing amber or blinking without turning blue?",
      "a": "An amber standby light on TCL televisions indicates that the system is unable to complete its boot sequence due to power rail drops or firmware lockup. Our technician tests power outputs and resets motherboard firmware."
    },
    {
      "q": "Can TCL QLED backlight and local dimming faults be repaired in Karur?",
      "a": "Yes. We service TCL C-Series QLED and P-Series 4K models, replacing worn backlight strips or repairing multi-zone driver circuits right at your home."
    },
    {
      "q": "Can I schedule TCL QLED TV service in Sengunthapuram, Karur?",
      "a": "Technicians can be scheduled for visits in Sengunthapuram, Kagithapuramam, and all local Karur neighborhoods."
    },
    {
      "q": "What is the cost of TCL QLED TV backlight repair in Karur?",
      "a": "TCL QLED and 4K backlight repair generally ranges between ₹1,500 and ₹4,200 depending on whether your set is a P-Series or C-Series QLED model."
    },
    {
      "q": "Do you repair TCL AiPQ power management boards on-site?",
      "a": "Yes, TCL power boards with tripped protection lines can be restored by replacing failed diodes and power ICs on-site."
    },
    {
      "q": "How to fix a TCL Google TV voice remote pairing failure?",
      "a": "Hold Home and OK buttons to re-pair the TCL voice remote. If pairing times out, our technician checks the internal wireless module."
    },
    {
      "q": "What causes 4K gaming consoles to show 'No Signal' on TCL HDMI ports?",
      "a": "For TCL QLED televisions, our technician checks HDMI 2.1 high-speed data pairs and replaces damaged connector sockets right at your home."
    },
    {
      "q": "What causes vertical color stripes and ghosting on TCL QLED screens?",
      "a": "Vertical stripes on TCL QLED screens are inspected by checking AiPQ timing lines and panel source board ribbon connections."
    },
    {
      "q": "Is it practical to replace cracked display glass on a TCL QLED TV?",
      "a": "When TCL QLED display glass is shattered, replacement panel cost is close to buying a new TV; our technicians give you frank advice beforehand."
    },
    {
      "q": "What causes distorted bass and buzzing audio on TCL QLED TVs?",
      "a": "Distorted bass on TCL QLED televisions is cured by replacing the internal sound units with matched Onkyo-spec drivers on-site."
    },
    {
      "q": "Can I schedule TCL TV service on Sundays in Sengunthapuram, Karur?",
      "a": "Yes, TCL TV doorstep inspection is available on Sundays across Sengunthapuram and all Karur residential sectors."
    },
    {
      "q": "What is the quickest way to schedule TCL TV service in Karur?",
      "a": "Click Call or WhatsApp to share your TCL TV model code and book an experienced technician visit."
    }
  ],
  "iFFALCON": [
    {
      "q": "Why is my iFFALCON TV showing sound but no picture on the screen?",
      "a": "iFFALCON televisions use CSOT display glass with direct LED backlights. Burnt diode strings cause the backlight to cut out while dialogue continues. Replacing the backlight set restores clear video."
    },
    {
      "q": "How can iFFALCON Google TV slow buffering and app crashes be fixed?",
      "a": "App crashes and buffering usually stem from filled system cache or failing Wi-Fi reception. Our technician clears system memory and checks antenna connections on-site."
    },
    {
      "q": "Where can I get iFFALCON TV repair near Kagithapuramam?",
      "a": "Our desk coordinates doorstep iFFALCON TV visits across Kagithapuramam, Thanthonimalai, and neighboring localities."
    },
    {
      "q": "What do you charge for iFFALCON TV backlight strip replacement?",
      "a": "iFFALCON backlight strip replacement usually costs from ₹1,300 to ₹3,500 depending on screen size and CSOT panel specifications."
    },
    {
      "q": "Can iFFALCON CSOT-matched power boards be serviced at home?",
      "a": "Yes, iFFALCON power supply modules are serviced on-site by replacing shorted secondary rail capacitors and diodes."
    },
    {
      "q": "Why is my iFFALCON TV ignoring remote control button presses?",
      "a": "Fit fresh alkaline batteries. If the iFFALCON TV still does not respond, our technician checks the front IR sensor eye for damage."
    },
    {
      "q": "How do you fix loose HDMI sockets on iFFALCON televisions?",
      "a": "On iFFALCON TVs showing video dropouts, we test HDMI connector pin alignment and repair damaged solder connections on the mainboard."
    },
    {
      "q": "Can vertical lines and half-dark screens on iFFALCON TVs be fixed?",
      "a": "Display lines on iFFALCON televisions are evaluated by testing CSOT panel timing voltages and cleaning ribbon cable contacts."
    },
    {
      "q": "Can physically broken screen glass on an iFFALCON TV be replaced?",
      "a": "For iFFALCON TVs with cracked glass, screen replacement is costly; our service desk provides honest guidance regarding replacement practicality."
    },
    {
      "q": "Why are iFFALCON TV internal speakers crackling at high volume?",
      "a": "Crackling sound on iFFALCON televisions is resolved by replacing the internal stereo box drivers with fresh units for clean dialogue."
    },
    {
      "q": "Does iFFALCON TV repair service operate seven days a week?",
      "a": "Yes, iFFALCON TV service visits are available seven days a week, Monday through Sunday, across Karur."
    },
    {
      "q": "How do I arrange an iFFALCON TV doorstep inspection visit?",
      "a": "Contact our local desk by phone or WhatsApp with your iFFALCON TV details to schedule an inspection."
    }
  ],
  "Acer": [
    {
      "q": "Why is my Acer TV 30W speaker producing distorted sound during dialogue?",
      "a": "Acer televisions use high-decibel acoustic drivers. High volume over years of daily viewing can tear driver surrounds or loosen mounting screws. Our technician replaces or reseats the speaker drivers."
    },
    {
      "q": "Sound is clear on my Acer 4K TV, but the screen is pitch black. What is the cause?",
      "a": "This is a classic backlight strip burnout symptom. While the mainboard and audio circuit work properly, the LEDs have failed. Installing a fresh backlight strip set resolves the problem."
    },
    {
      "q": "Is doorstep Acer TV repair available in Pasupathipalayam, Karur?",
      "a": "Yes, our repair technicians travel directly to residences in Pasupathipalayam, Karur Town, and nearby areas."
    },
    {
      "q": "What is the price estimate for Acer TV backlight replacement in Karur?",
      "a": "Acer I-Series and H-Series backlight replacement typically ranges between ₹1,400 and ₹3,700 based on screen dimensions and 4K resolution."
    },
    {
      "q": "Is Acer 30W audio power supply board repair feasible in Karur?",
      "a": "Yes, Acer power circuits are repaired by replacing blown fuses, filter capacitors, and voltage regulators right at your home."
    },
    {
      "q": "What to do when an Acer TV remote control fails to respond?",
      "a": "Check batteries and re-pair the Acer remote via Google TV settings. If unresponsive, our technician inspects the Bluetooth receiver."
    },
    {
      "q": "Why is my cable box not detected on Acer TV HDMI ports?",
      "a": "If Acer Google TV HDMI ports show black screen, our technician tests the ESD suppression diodes and replaces damaged port pins directly."
    },
    {
      "q": "Why does my Acer TV screen show fine vertical colored lines?",
      "a": "Fine vertical lines on Acer screens are checked by measuring T-Con clock signals and inspecting frameless ribbon connections."
    },
    {
      "q": "What are the repair options for a cracked Acer TV display panel?",
      "a": "If Acer frameless display glass is broken, panel replacement cost is very high; we discuss feasibility with you candidly before taking up inspection."
    },
    {
      "q": "Can severe speaker rattle on Acer 30W televisions be repaired?",
      "a": "Harsh speaker rattle on Acer TVs is fixed by installing fresh 30W high-output acoustic drivers, restoring powerful distortion-free sound."
    },
    {
      "q": "Can I get Acer TV doorstep repair on Sunday in Pasupathipalayam?",
      "a": "Yes, you can book an Acer TV repair visit on Sunday in Pasupathipalayam or any neighboring Karur locality."
    },
    {
      "q": "What steps are required to book Acer TV repair in Karur?",
      "a": "Simply tap Call or WhatsApp on this page, mention your Acer TV screen size, and choose your visit timing."
    }
  ],
  "Hisense": [
    {
      "q": "Why is my Hisense Tornado TV soundbar buzzing during speech?",
      "a": "Hisense Tornado televisions feature high-wattage integrated soundbars. Dust accumulation or torn speaker cones cause resonance vibration. Our technician repairs or replaces the soundbar driver units."
    },
    {
      "q": "Can Hisense ULED multi-zone local dimming issues be repaired in Karur?",
      "a": "Yes. Our technician tests LED boost driver voltages and individual dimming zone lines to fix uneven dark patches or flickering backlight zones on-site."
    },
    {
      "q": "Do your technicians cover Karur Town for Hisense TV service?",
      "a": "We provide on-site service coverage throughout Karur Town, Kovai Road, and all surrounding localities."
    },
    {
      "q": "How much do you charge for Hisense ULED backlight repair?",
      "a": "Hisense Tornado and ULED backlight repair generally costs from ₹1,500 to ₹4,200 depending on whether your set uses direct-lit or local dimming zones."
    },
    {
      "q": "Can Hisense Tornado dual-transformer power boards be repaired?",
      "a": "Yes, Hisense dual-transformer power boards can be repaired at component level by replacing shorted switching MOSFETs."
    },
    {
      "q": "How to troubleshoot a Hisense TV remote that is not working?",
      "a": "Replace handset batteries. If the Hisense TV fails to respond, our technician tests the internal IR receiver and Bluetooth transceiver."
    },
    {
      "q": "Can broken HDMI connectors on Hisense Tornado TVs be replaced?",
      "a": "For Hisense Tornado TVs with failing HDMI ARC audio, we inspect the physical connector and replace the audio return switch IC on-site."
    },
    {
      "q": "What causes multi-color vertical lines on Hisense ULED displays?",
      "a": "Multi-colored stripes on Hisense ULED displays are investigated by testing Hi-View timing outputs and panel driver chips."
    },
    {
      "q": "Can shattered display glass on a Hisense Tornado TV be replaced?",
      "a": "When Hisense Tornado display glass is shattered, replacement panel expense is significant; we advise you honestly before any charges are incurred."
    },
    {
      "q": "Why is my Hisense Tornado soundbar buzzing during speech?",
      "a": "Buzzing sound from Hisense Tornado soundbars is cured by repairing or replacing the integrated acoustic drivers directly at your home."
    },
    {
      "q": "Is Hisense TV technician service available on weekends in Karur?",
      "a": "Yes, our Hisense TV repair technicians are on duty seven days a week between 8:00 AM and 8:30 PM in Karur."
    },
    {
      "q": "What is the procedure to schedule a Hisense TV technician visit in Karur?",
      "a": "Reach our customer desk via call or WhatsApp, describe your Hisense TV issue, and arrange a home visit."
    }
  ],
  "BPL": [
    {
      "q": "Why is my BPL TV completely dead with no red indicator light after a storm?",
      "a": "Lightning and voltage surges frequently damage the input varistor, fuse, or bridge rectifier on the BPL power board. Our technician repairs the power circuit on-site to restore power."
    },
    {
      "q": "Can BPL TV backlight strips be replaced at home in Karur?",
      "a": "Yes. Our technician carries model-matched backlight arrays for BPL 32-inch, 43-inch, and 50-inch televisions and completes installation in front of you."
    },
    {
      "q": "Can I get BPL TV repair near Sukkaliyur in Karur?",
      "a": "Technicians are available for home visits around Sukkaliyur, Thanthonimalai, and adjacent Karur sectors."
    },
    {
      "q": "What is the cost of BPL LED TV backlight replacement in Karur?",
      "a": "BPL Stellar backlight replacement usually ranges between ₹1,200 and ₹3,200 depending on whether you have an HD Ready or Full HD model."
    },
    {
      "q": "Do you service BPL standardized Indian SMPS boards at home?",
      "a": "Yes, BPL Indian SMPS boards with swollen capacitors or blown fuses are quickly repaired on-site with standard components."
    },
    {
      "q": "Why is my BPL television not responding to remote handset inputs?",
      "a": "Try a fresh set of batteries. If the BPL TV indicator does not blink, our technician tests the front sensor eye on-site."
    },
    {
      "q": "What causes set-top box video to cut out on BPL HDMI ports?",
      "a": "On BPL televisions showing No Signal with DTH boxes, our technician resolders loose HDMI pins and cleans oxidized internal socket contacts."
    },
    {
      "q": "Can vertical stripes running through channels on BPL TVs be repaired?",
      "a": "Vertical lines running through BPL television channels are diagnosed by testing timing controller bias rails on-site."
    },
    {
      "q": "Is it economical to replace broken screen glass on a BPL television?",
      "a": "For BPL televisions with broken screen glass, panel replacement is rarely economical; our desk provides clear, realistic advice before booking."
    },
    {
      "q": "What causes muffled sound and buzzing from BPL internal speakers?",
      "a": "Muffled audio on BPL televisions is eliminated by installing fresh stereo speaker drivers, restoring clean dialogue for daily viewing."
    },
    {
      "q": "Does your team repair BPL televisions on Sundays in Sukkaliyur?",
      "a": "Yes, Sunday repair appointments for BPL televisions are regularly scheduled across Sukkaliyur and Karur Town."
    },
    {
      "q": "How do I book a BPL TV doorstep service call in Karur?",
      "a": "Call +91 94420 54321 or click WhatsApp to share your BPL TV symptoms and confirm a technician visit."
    }
  ],
  "Vu": [
    {
      "q": "Why does my Vu Glo QLED TV have sound but the picture stays pitch dark?",
      "a": "Vu Glo panels operate at high peak brightness, which causes LED diodes to wear out over years of regular use. Replacing the complete backlight diode array restores original brilliant picture quality."
    },
    {
      "q": "Why is my Vu Cinema TV 40W soundbar rattling during movie playback?",
      "a": "Cabinet vibration or torn voice coils in the integrated soundbar cause loud rattling on bass. Our technician replaces the acoustic drivers with genuine-spec units to restore cinema sound."
    },
    {
      "q": "Where can I book Vu Glo TV doorstep service in Kovai Road?",
      "a": "You can schedule a doorstep inspection along Kovai Road and Pasupathipalayam with our local service desk."
    },
    {
      "q": "How much does Vu Glo QLED backlight strip replacement cost?",
      "a": "Vu Glo QLED and Cinema TV backlight replacement typically costs from ₹1,450 to ₹4,000 depending on screen size and Glo Panel ratings."
    },
    {
      "q": "Can Vu Glo Panel high-capacity power boards be fixed on-site?",
      "a": "Yes, Vu Glo power modules with tripped protection lines are restored by replacing damaged MOSFETs and diodes on-site."
    },
    {
      "q": "What should I do if my Vu Glo TV remote stops functioning?",
      "a": "Check battery contacts and re-pair via Bluetooth. If the Vu Glo TV ignores inputs, our technician inspects the wireless receiver card."
    },
    {
      "q": "How do you resolve loose HDMI port connections on Vu Glo TVs?",
      "a": "If Vu Glo TV HDMI inputs lose connection during video playback, we test port ground lines and replace damaged connector sockets on-site."
    },
    {
      "q": "Why does my Vu Glo TV screen show image jitter and vertical lines?",
      "a": "Image jitter and lines on Vu Glo QLED screens are evaluated by checking Glo Panel timing signals and ribbon cable seating."
    },
    {
      "q": "What should I do if my Vu Glo QLED TV screen glass is cracked?",
      "a": "If Vu Glo QLED glass is cracked, replacement Glo Panel assemblies are expensive; our team explains the economics honestly before any visit."
    },
    {
      "q": "Can vibrating rattle from Vu Cinema TV 40W soundbars be fixed?",
      "a": "Vibrating rattle on Vu Glo televisions is resolved by replacing the 40W soundbar acoustic drivers with genuine-spec units on-site."
    },
    {
      "q": "Can I schedule Vu Glo TV repair on Sunday afternoon in Kovai Road?",
      "a": "Yes, you can schedule Sunday afternoon service for Vu Glo televisions along Kovai Road with our local helpline."
    },
    {
      "q": "What is the quickest way to request Vu Glo TV repair in Karur?",
      "a": "Tap the Call or WhatsApp button to provide your Vu TV model details and book a doorstep service appointment."
    }
  ],
  "Lloyd": [
    {
      "q": "Why is my Havells Lloyd TV red standby light blinking four times continuously?",
      "a": "A 4-blink error on Lloyd televisions indicates a secondary voltage cutoff or backlight inverter fault detected by the system. Our technician measures power board rails on-site to replace the failed part."
    },
    {
      "q": "Can Lloyd Smart TV Wi-Fi connection problems be checked at home in Karur?",
      "a": "Yes. If your Lloyd TV cannot detect wireless networks or disconnects during YouTube streaming, our technician tests the internal wireless card and checks antenna continuity."
    },
    {
      "q": "Is Lloyd TV repair available at home in Thanthonimalai, Karur?",
      "a": "Yes, doorstep service for Lloyd televisions is available in Thanthonimalai, Kagithapuramam, and throughout Karur."
    },
    {
      "q": "What is the price of Lloyd Smart TV backlight replacement?",
      "a": "Lloyd Smart TV backlight replacement generally ranges between ₹1,400 and ₹3,800 based on whether your TV is an HD Ready or Novante 4K model."
    },
    {
      "q": "Is Lloyd Havells Micro Dimming power board repair available in Karur?",
      "a": "Yes, Lloyd Havells power units are serviced at component level by replacing shorted secondary diodes and capacitors."
    },
    {
      "q": "How to fix a Lloyd Smart TV remote that refuses to pair?",
      "a": "Hold Home and Back buttons to re-pair with your Lloyd TV. If pairing fails, our technician checks the internal Bluetooth receiver."
    },
    {
      "q": "Can damaged HDMI sockets on Lloyd televisions be repaired on-site?",
      "a": "For Lloyd televisions with loose HDMI ports, our technician repairs board solder pads and installs fresh model-matched port terminals."
    },
    {
      "q": "What causes vertical colored bars across Lloyd Smart TV displays?",
      "a": "Colored bars across Lloyd displays are inspected by measuring Micro Dimming timing voltages and checking flex ribbon tracks."
    },
    {
      "q": "Can cracked display glass on a Lloyd television be replaced?",
      "a": "When Lloyd display glass is shattered from impact, screen replacement cost approaches a new set; we provide transparent advice before inspection."
    },
    {
      "q": "Why are Lloyd TV front-firing speakers producing harsh audio buzz?",
      "a": "Harsh audio buzz on Lloyd televisions is fixed by replacing the front-firing speaker drivers with fresh matched units for clear speech."
    },
    {
      "q": "Is Lloyd TV doorstep service available seven days a week in Karur?",
      "a": "Yes, Lloyd TV doorstep repairs operate seven days a week across Thanthonimalai, Kagithapuramam, and all Karur sectors."
    },
    {
      "q": "How can I schedule a Lloyd TV technician visit in Karur?",
      "a": "Simply contact our local desk via call or WhatsApp with your Lloyd TV model to schedule a home visit."
    }
  ],
  "VW": [
    {
      "q": "Why does my VW TV turn on with sound but the screen remains totally black?",
      "a": "In VW televisions, burnt LED backlight diodes break the series circuit, preventing the screen from lighting up while audio continues. Replacing the backlight strips fixes the issue."
    },
    {
      "q": "Can affordable combo motherboards on VW televisions be repaired at home?",
      "a": "Yes. VW televisions use cost-effective combo logic boards where power regulators, sound amplifier chips, and display circuits can be serviced at component level."
    },
    {
      "q": "Do you service VW televisions in Thorakkalpatti area?",
      "a": "Our technicians visit residences in Thorakkalpatti, Sengunthapuram, and all surrounding Karur areas."
    },
    {
      "q": "What is the charge for VW TV backlight strip repair in Karur?",
      "a": "VW Playwall backlight strip repair typically costs between ₹1,150 and ₹3,000 depending on whether you own a 32-inch or 43-inch frameless screen."
    },
    {
      "q": "Can VW combo power supply circuits be repaired at low cost?",
      "a": "Yes, VW combo boards can be fixed very affordably by repairing the 12V regulator circuit and input protection components."
    },
    {
      "q": "Why is my VW television ignoring remote control button presses?",
      "a": "Replace batteries with fresh cells. If the VW TV ignores commands, our technician tests the front IR photodiode circuit on-site."
    },
    {
      "q": "Why does my VW TV display 'No Signal' across all HDMI ports?",
      "a": "On VW Playwall TVs showing input signal loss, we test the combo board HDMI circuit and resolder loose surface-mount connector pins."
    },
    {
      "q": "Can vertical lines and negative picture on VW TVs be repaired?",
      "a": "Display lines on VW Playwall screens are diagnosed by testing combo board scalar outputs and cleaning panel ribbon contacts."
    },
    {
      "q": "Is broken screen glass replacement worthwhile for a VW television?",
      "a": "For VW televisions with broken glass, replacing the LCD panel is not cost-effective; our helpline offers straightforward advice before any visit."
    },
    {
      "q": "What causes severe speaker rattle during movies on VW televisions?",
      "a": "Severe speaker rattle on VW televisions is eliminated by installing new stereo acoustic drivers, restoring clean volume for movies."
    },
    {
      "q": "Can I get VW TV repair on Sunday in Thorakkalpatti?",
      "a": "Yes, technicians are available for Sunday VW television inspections in Thorakkalpatti and nearby areas."
    },
    {
      "q": "What is the procedure to book VW TV repair in Karur?",
      "a": "Reach our customer team by phone or WhatsApp, describe your VW TV problem, and confirm a visit slot."
    }
  ],
  "Acerpure": [
    {
      "q": "Why is my Acerpure TV stuck in an endless loop on the Google TV startup screen?",
      "a": "System file corruption or an interrupted software update can trap Acerpure TVs in a boot loop. Our technician clears cache partitions or performs firmware recovery at your home."
    },
    {
      "q": "Can Acerpure frameless LED TV backlight problems be repaired in Karur?",
      "a": "Yes. Our technician installs model-matched backlight arrays for Acerpure Life and Aspire series televisions directly at your doorstep."
    },
    {
      "q": "Can an Acerpure TV technician visit my home in Inam Karur?",
      "a": "Home visits for Acerpure televisions can be scheduled across Inam Karur, Pasupathipalayam, and nearby streets."
    },
    {
      "q": "What is the cost to replace Acerpure TV backlight strips?",
      "a": "Acerpure Life backlight replacement usually ranges from ₹1,350 to ₹3,600 based on screen size and frameless panel specifications."
    },
    {
      "q": "Do you service Acerpure pure-matrix power boards at home?",
      "a": "Yes, Acerpure power supply circuits can be restored by replacing shorted diodes and secondary rail capacitors on-site."
    },
    {
      "q": "What to do when an Acerpure TV remote control stops working?",
      "a": "Check battery charge and re-pair via Google TV settings. If unresponsive, our technician inspects the Acerpure Bluetooth module."
    },
    {
      "q": "How do you fix loose HDMI connectors on Acerpure televisions?",
      "a": "If Acerpure TV HDMI ports fail to detect streaming sticks, our technician inspects 5V pin power and replaces damaged physical connectors."
    },
    {
      "q": "Why does my Acerpure display show colored vertical stripes?",
      "a": "Colored vertical stripes on Acerpure screens are checked by testing timing board voltage rails and inspecting display ribbons."
    },
    {
      "q": "What are my options if Acerpure TV display panel glass is broken?",
      "a": "If Acerpure screen glass is cracked, panel replacement expense is high; our customer desk explains the feasibility honestly before booking."
    },
    {
      "q": "Can vibrating buzz during dialogues on Acerpure TVs be repaired?",
      "a": "Vibrating dialogue on Acerpure TVs is resolved by replacing the internal acoustic drivers with fresh units for balanced voice clarity."
    },
    {
      "q": "Does your team service Acerpure televisions on weekends in Karur?",
      "a": "Yes, our team provides Acerpure TV service on weekends and festival holidays throughout Karur."
    },
    {
      "q": "How do I arrange an Acerpure TV inspection visit in Karur?",
      "a": "Click Call or WhatsApp on this page, share your Acerpure TV details, and book a doorstep inspection."
    }
  ],
  "Redmi": [
    {
      "q": "Why does my Redmi X-Series TV have sound but the screen is pitch black?",
      "a": "Direct-lit LED backlight diode failure is common after years of heavy viewing. The audio and mainboard work, but the panel cannot illuminate. Replacing the backlight array restores full brightness."
    },
    {
      "q": "Why does my Redmi TV 30W speaker buzz during loud scenes?",
      "a": "High-decibel output can loosen speaker mounts or fatigue the cone material over time. Our technician replaces the speaker units with matched drivers to eliminate buzz."
    },
    {
      "q": "Where in Kagithapuramam can I get Redmi TV repair service?",
      "a": "Doorstep service for Redmi televisions is readily available across Kagithapuramam, Kovai Road, and Karur Town."
    },
    {
      "q": "How much does Redmi X-Series backlight replacement cost?",
      "a": "Redmi Smart TV X-Series backlight replacement generally costs between ₹1,300 and ₹3,600 depending on whether your set is a 43, 50, or 55-inch 4K model."
    },
    {
      "q": "Can Redmi Vivid Picture power boards be repaired at component level?",
      "a": "Yes, Redmi power boards with tripped standby rails are repaired on-site by replacing shorted MOSFETs and diodes."
    },
    {
      "q": "How to resolve Redmi TV Bluetooth remote connection drops?",
      "a": "Re-pair the Redmi remote by pressing buttons near the logo. If it disconnects repeatedly, we test the internal wireless transceiver."
    },
    {
      "q": "What causes HDMI signal dropouts during gaming on Redmi TVs?",
      "a": "For Redmi X-Series TVs with HDMI handshake drops, we test the MediaTek input receiver lines and repair loose port connections on-site."
    },
    {
      "q": "What causes vertical lines and double images on Redmi TV screens?",
      "a": "Double images or lines on Redmi displays are investigated by testing PatchWall timing outputs and source driver IC lines."
    },
    {
      "q": "Can cracked screen glass on a Redmi Smart TV be replaced affordably?",
      "a": "When Redmi display glass is shattered, screen panel replacement costs almost as much as a new TV; we provide honest advice before inspection."
    },
    {
      "q": "Why do Redmi TV 30W speakers buzz during high volume scenes?",
      "a": "Harsh buzzing on Redmi TVs is cured by installing fresh 30W stereo drivers, restoring punchy dialogue without vibration."
    },
    {
      "q": "Can I schedule Redmi TV repair on Sunday in Kagithapuramam?",
      "a": "Yes, Sunday repair appointments for Redmi televisions can be booked in Kagithapuramam and across Karur."
    },
    {
      "q": "What is the easiest way to book Redmi TV repair in Karur?",
      "a": "Simply call +91 94420 54321 or tap WhatsApp, mention your Redmi TV symptoms, and choose your visit time."
    }
  ],
  "Mi": [
    {
      "q": "Why does my Mi TV Horizon Edition show sound but the bezel-less screen stays dark?",
      "a": "In Mi Horizon Edition TVs, burnt backlight diodes shut off screen lighting while the audio continues. Our technician installs factory-spaced backlight strips to restore edge-to-edge illumination."
    },
    {
      "q": "How do you repair Mi TV PatchWall eMMC flash memory errors in Karur?",
      "a": "When a Mi TV cannot boot past the logo or apps freeze constantly, our technician tests the eMMC storage chip, rewrites system partitions, or replaces the memory IC."
    },
    {
      "q": "Is Mi Horizon TV doorstep repair offered around Pasupathipalayam?",
      "a": "Yes, our local technicians travel directly to Pasupathipalayam, Thanthonimalai, and all 60 residential localities in Karur."
    },
    {
      "q": "What is the charge for Mi Horizon TV backlight strip repair?",
      "a": "Mi Horizon Edition backlight repair typically ranges from ₹1,300 to ₹3,500 depending on whether you own a 32-inch or 43-inch bezel-less TV."
    },
    {
      "q": "Is Mi Horizon combo power board repair available on-site in Karur?",
      "a": "Yes, Mi Horizon combo power boards are serviced at component level by replacing failed rectifier diodes and capacitors."
    },
    {
      "q": "Why is my Mi Horizon TV remote not communicating with the TV?",
      "a": "Hold Home and Mi buttons to re-pair with your Mi Horizon TV. If it fails, our technician tests the internal Bluetooth receiver card."
    },
    {
      "q": "Can wobbly HDMI sockets on Mi Horizon televisions be repaired?",
      "a": "On Mi Horizon televisions, loose HDMI sockets that lose picture when bumped are repaired by reinforcing board solder tracks directly."
    },
    {
      "q": "Can vertical lines across Mi Horizon bezel-less screens be fixed?",
      "a": "Vertical lines across Mi Horizon screens are evaluated by testing bezel-less panel ribbon connections and T-Con bias voltages."
    },
    {
      "q": "What should I do if my Mi Horizon bezel-less display glass is shattered?",
      "a": "For Mi Horizon TVs with broken bezel-less glass, replacement assemblies are costly; our desk explains the options transparently before booking."
    },
    {
      "q": "What causes crackling audio from Mi Horizon internal sound drivers?",
      "a": "Crackling audio on Mi Horizon televisions is fixed by replacing the tuned acoustic drivers with fresh units, restoring crisp stereo output."
    },
    {
      "q": "Is Mi Horizon TV doorstep repair available on public holidays?",
      "a": "Yes, Mi Horizon TV home visits are arranged on public holidays and Sundays between 8:00 AM and 8:30 PM."
    },
    {
      "q": "How can I request a Mi Horizon TV service visit in Karur?",
      "a": "Reach out via Call or WhatsApp with your Mi Horizon TV model code to book a convenient doorstep visit."
    }
  ],
  "Hyundai": [
    {
      "q": "Why is my Hyundai TV Magic Remote air-mouse pointer not appearing on screen?",
      "a": "Hyundai WebOS televisions use Bluetooth to communicate with Magic Remotes. Battery drain, pairing loss, or a failing internal Bluetooth module causes the pointer to vanish. We re-pair or repair the module on-site."
    },
    {
      "q": "Why is my Hyundai WebOS TV playing audio clearly while the display is dark?",
      "a": "This symptom indicates burnt LED backlight strips. The audio processor and WebOS motherboard are working normally, but the screen illumination has failed. We replace the strips on-site."
    },
    {
      "q": "Do you provide Hyundai WebOS TV repair across Karur Town?",
      "a": "We handle doorstep repairs for Hyundai televisions across Karur Town, Kagithapuramam, and surrounding neighborhoods."
    },
    {
      "q": "How much does Hyundai WebOS TV backlight replacement cost?",
      "a": "Hyundai WebOS TV backlight replacement usually costs between ₹1,350 and ₹3,700 based on screen dimensions and A+ grade panel type."
    },
    {
      "q": "Can Hyundai WebOS SMPS power boards be serviced without whole-board replacement?",
      "a": "Yes, Hyundai WebOS power boards damaged by thunderstorms are repaired on-site by replacing shorted varistors and fuses."
    },
    {
      "q": "How to troubleshoot a Hyundai Magic Remote air pointer that vanishes?",
      "a": "Press the scroll wheel to register the Magic Remote with WebOS. If the pointer remains missing, we inspect the Bluetooth module on-site."
    },
    {
      "q": "How do you resolve 'No Connection' errors on Hyundai HDMI ports?",
      "a": "If Hyundai WebOS TV HDMI ports show No Connection, our technician checks the HDMI equalizer IC and replaces worn connector pins on-site."
    },
    {
      "q": "Why does my Hyundai WebOS TV show vertical rainbow stripes on screen?",
      "a": "Rainbow stripes on Hyundai WebOS screens are checked by inspecting panel timing lines and cleaning display flex ribbon contacts."
    },
    {
      "q": "Can cracked panel glass on a Hyundai WebOS TV be replaced cost-effectively?",
      "a": "If Hyundai WebOS panel glass is cracked, screen replacement is rarely economical; our team advises you with complete honesty before any inspection."
    },
    {
      "q": "Can jarring vibration rattle from Hyundai WebOS TV speakers be fixed?",
      "a": "Jarring vibration on Hyundai WebOS TVs is resolved by replacing the internal box stereo drivers with fresh units for clear speech."
    },
    {
      "q": "Does Hyundai WebOS TV repair operate seven days a week in Karur?",
      "a": "Yes, our Hyundai TV repair service operates seven days a week across Karur Town and surrounding neighborhoods."
    },
    {
      "q": "How do I schedule a Hyundai WebOS TV technician visit in Karur?",
      "a": "Tap the Call button or message on WhatsApp to share your Hyundai TV fault and confirm an on-site appointment."
    }
  ]
};

function getBrandFaqs(brand) {
  const brandName = brand.name || brand;
  if (allBrandFaqs[brandName]) {
    return allBrandFaqs[brandName];
  }
  return allBrandFaqs["Samsung"];
}

module.exports = { getBrandFaqs };
