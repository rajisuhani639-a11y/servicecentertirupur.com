// scripts/stories_tv.js
// 24 unique TV problem stories with 8 diverse grammatical heading styles each,
// matching simple Indian English and Tanglish descriptions, and ZERO corporate buzzwords.

module.exports = [
  {
    id: "tv_backlight_burnout",
    topic: "backlight strip failure",
    headingStyles: [
      (b, l) => `Sound Was Fine but the ${b} Screen Stayed Black`,
      (b, l) => `LED Backlight Strips Swapped Behind a Dark ${b} 4K Display`,
      (b, l) => `Torch Test Confirmed Burnt LED Beads Behind ${b} Television`,
      (b, l) => `Crisp 4K Picture Returned After LED Strip Replacement on ${b} TV`,
      (b, l) => `Burned LED Backlight Diodes Replaced on ${b} TV in ${l}`,
      (b, l) => `Audio Stayed Normal but ${b} Display Picture Disappeared Completely`,
      (b, l) => `In ${l}, ${b} TV Screen Went Pitch Dark During Evening News`,
      (b, l) => `Complete Backlight Channel Overhaul on ${b} Smart Television`
    ],
    en: (b, l) => `In ${l}, a homeowner was watching their ${b} TV when the picture suddenly went pitch black while audio stayed loud and clear. Our technician shone a torch on the dark glass and spotted faint moving outlines, confirming burned-out backlight LEDs. After installing a fresh aluminum LED strip set and testing brightness levels, the screen lit up bright and clear.`,
    ta: (b, l) => `${l}-la ${b} TV sound nalla ketuchu aana screen full dark-ah poiduchu. Technician torch light adichu test pannapo backlight LED strips burn aagirundhadhu. New aluminum LED strips change pannadhum picture bright-ah thirumbi vandhadhu.`
  },
  {
    id: "tv_tcon_vertical_lines",
    topic: "t-con board vertical lines",
    headingStyles: [
      (b, l) => `Coloured Vertical Bars Glitching Across ${b} Display`,
      (b, l) => `T-Con Timing Controller Board Cleaned and Reseated on ${b} TV`,
      (b, l) => `Why Coloured Lines Appeared on This ${b} 4K Screen`,
      (b, l) => `Distorted Picture and Double Lines Cleared from ${b} Panel`,
      (b, l) => `Oxidised T-Con Ribbon Cable Pins Serviced on ${b} TV at ${l}`,
      (b, l) => `Screen Started Showing Rainbow Lines Whenever ${b} TV Was Switched On`,
      (b, l) => `In ${l}, ${b} TV Developed Persistent Vertical Screen Distortion`,
      (b, l) => `Timing Controller Logic Board Servicing on ${b} Television`
    ],
    en: (b, l) => `In ${l}, vertical green and purple stripes started flashing across a 43-inch ${b} TV panel. The technician unmounted the back cover, checked the T-Con board with a digital meter, and found oxidised pins on the LVDS ribbon connector. After cleaning contacts with contact cleaner and reseating the ribbon cables firmly, all lines vanished and colors returned to normal.`,
    ta: (b, l) => `${l}-la ${b} TV-la green and purple vertical lines thonuchu. Back cover open panni T-Con board ribbon cable-ah check panni clean panni fix pannanga. Ippo screen lines illama clean-ah irukku.`
  },
  {
    id: "tv_motherboard_hdmi_failure",
    topic: "hdmi port signal drop",
    headingStyles: [
      (b, l) => `Set-Top Box Audio Was Fine but No Video on ${b} TV`,
      (b, l) => `HDMI ESD Protection Diode Replaced on ${b} Motherboard`,
      (b, l) => `Why All HDMI Ports Showed No Signal on ${b} Screen`,
      (b, l) => `Smooth Cable TV Video Playback Restored on ${b} Television`,
      (b, l) => `Cracked HDMI Port Solder Joints Rebuilt on ${b} TV in ${l}`,
      (b, l) => `${b} Smart TV Displayed No Signal from Tata Play Box`,
      (b, l) => `In ${l}, ${b} TV Motherboard Video Port Stopped Detecting Input`,
      (b, l) => `Motherboard Video Input Port Repair on ${b} Smart TV`
    ],
    en: (b, l) => `A resident in ${l} noticed their ${b} TV kept displaying 'No Signal' across all HDMI ports even though their setup box was working fine on another TV. Technician inspected the motherboard and found dry solder joints around HDMI-1 port and a blown ESD diode from a lightning surge. Resoldered the pin connections and replaced the diode, restoring high-definition playback.`,
    ta: (b, l) => `${l}-la ${b} TV HDMI port-la No Signal nu vandhute irundhadhu. Motherboard-la HDMI solder joints loose-ah irundhadhu. Adha resolder panni diode maathunadhum set-top box video clean-ah connect aachu.`
  },
  {
    id: "tv_smps_standby_drop",
    topic: "power supply standby blinking",
    headingStyles: [
      (b, l) => `Red Power Light on ${b} TV Kept Blinking Without TV Turning On`,
      (b, l) => `Bulging Capacitors Swapped on ${b} SMPS Power Supply Board`,
      (b, l) => `Why This ${b} Television Refused to Boot from Standby`,
      (b, l) => `Instant Startup Restored to Unresponsive ${b} Smart TV`,
      (b, l) => `Swollen 1000uF Power Capacitors Replaced on ${b} in ${l}`,
      (b, l) => `${b} Smart TV Stood Stuck with a Flickering Standby Lamp`,
      (b, l) => `In ${l}, ${b} TV Shut Down Suddenly and Refused to Power Back`,
      (b, l) => `Switch-Mode Power Supply Overhaul on ${b} Display`
    ],
    en: (b, l) => `Customer in ${l} called because their ${b} TV refused to wake from standby; the red LED just blinked five times and went off. Technician checked the SMPS board and found two 1000uF filter capacitors bulging with mild electrolyte leakage. Swapped them with heavy-duty 105°C rated capacitors, verified 12V and 24V supply rails, and the TV turned on immediately.`,
    ta: (b, l) => `${l}-la ${b} TV red light 5 thadava blink aagi off aayidum, picture varala. Power board-la capacitor swollen-ah irundhadhu. New capacitors change pannadhum TV udane on aachu.`
  },
  {
    id: "tv_firmware_bootloop",
    topic: "smart tv boot loop",
    headingStyles: [
      (b, l) => `${b} Smart TV Got Stuck in an Endless Logo Boot Loop`,
      (b, l) => `eMMC Firmware Flashed to Solve Bootloop on ${b} Android TV`,
      (b, l) => `Why the Android Boot Screen Kept Freezing on ${b} Display`,
      (b, l) => `Fast Boot Time and App Loading Restored on ${b} Television`,
      (b, l) => `Corrupted System Firmware Recovered on ${b} TV at ${l}`,
      (b, l) => `${b} TV Kept Restarting Over and Over Without Opening Home Screen`,
      (b, l) => `In ${l}, ${b} Smart TV Froze Solid on Startup Screen`,
      (b, l) => `Android Operating System Recovery on ${b} Smart Television`
    ],
    en: (b, l) => `In ${l}, a 55-inch ${b} smart TV kept restarting every two minutes, freezing continuously on the brand logo. Our technician checked the eMMC memory, cleared corrupted boot cache files via developer recovery mode, and flashed the latest verified firmware patch. The TV booted up smoothly in 15 seconds without losing customer app subscriptions.`,
    ta: (b, l) => `${l}-la ${b} smart TV logo vanthu vanthu restart aayite irundhadhu. System recovery mode poyi cache clear panni firmware update pannom. TV ippo smooth-ah load aagudhu.`
  },
  {
    id: "tv_wifi_disconnect",
    topic: "wifi network drop",
    headingStyles: [
      (b, l) => `OTT Apps Buffering on ${b} Smart TV Due to Frequent WiFi Disconnects`,
      (b, l) => `Internal Wireless Card Module Swapped on ${b} Smart TV`,
      (b, l) => `Why This ${b} 4K Screen Dropped Internet Every Ten Minutes`,
      (b, l) => `Stable 4K Video Streaming Restored on ${b} Smart Display`,
      (b, l) => `Loose Dual-Band Antenna Ribbon Cable Reconnected on ${b} in ${l}`,
      (b, l) => `${b} TV Refused to Connect to 5GHz Home Router Network`,
      (b, l) => `In ${l}, ${b} Television Lost Wireless Connectivity Intermittently`,
      (b, l) => `Internal Wireless Receiver Board Replacement on ${b} TV`
    ],
    en: (b, l) => `Customer in ${l} complained that Hotstar and YouTube kept pausing on their ${b} TV with a 'No Internet' warning while phones had full Wi-Fi speed. Technician opened the lower bezel casing, inspected the USB Wi-Fi card, and found dry solder on the 5GHz antenna pin. Installed a replacement module, tested signal strength, and streaming ran uninterrupted.`,
    ta: (b, l) => `${l}-la ${b} TV-la Wi-Fi disconnected nu adikkadi vandhudhu. Internal Wi-Fi module check panni new card maathunom. Ippo YouTube buffer aagama continuous-ah play aagudhu.`
  },
  {
    id: "tv_speaker_crackle",
    topic: "audio speaker crackling",
    headingStyles: [
      (b, l) => `Harsh Crackling and Vibrating Sound from ${b} TV Speakers`,
      (b, l) => `Torn Paper Speaker Cone Replaced on ${b} Television`,
      (b, l) => `Why ${b} TV Dialogue Sounded Muffled and Rattling at High Volume`,
      (b, l) => `Clear Bass and Speech Restored to ${b} Television Audio`,
      (b, l) => `Burnt Dual-Channel Audio IC Replaced on ${b} at ${l}`,
      (b, l) => `${b} TV Audio Buzzing Severely Whenever Action Scenes Played`,
      (b, l) => `In ${l}, ${b} Television Audio Started Distorting Heavily`,
      (b, l) => `Twin Internal Speaker Box Replacement on ${b} TV`
    ],
    en: (b, l) => `In ${l}, a ${b} TV produced loud buzzing vibrations whenever news anchors or music played at moderate volume. The technician unscrewed the internal speaker housings and discovered the right 10W speaker paper diaphragm had ripped along the foam surround. Installed an original twin-speaker box assembly, eliminating all rattling and restoring crisp dialogue.`,
    ta: (b, l) => `${l}-la ${b} TV sound vecha speaker-la loud vibration crackle ketuchu. Right side speaker cone tear aagirundhadhu. New speaker set pottadhum voice crystal clear-ah ketkudhu.`
  },
  {
    id: "tv_half_screen_dark",
    topic: "half screen dark",
    headingStyles: [
      (b, l) => `Bottom Half of ${b} Screen Went Dim While Top Stayed Bright`,
      (b, l) => `Secondary LED Backlight Channel Restored on ${b} Display`,
      (b, l) => `Why One Side of This ${b} 4K Screen Looked Shadowed`,
      (b, l) => `Uniform Edge-to-Edge Brightness Restored on ${b} Television`,
      (b, l) => `Burnt Lower Array Backlight Strip Replaced on ${b} in ${l}`,
      (b, l) => `${b} TV Displayed a Noticeable Dark Shadow Across Lower Section`,
      (b, l) => `In ${l}, ${b} Television Suffered Partial Backlight Failure`,
      (b, l) => `Multi-Zone Backlight Array Rebalancing on ${b} Screen`
    ],
    en: (b, l) => `A resident in ${l} noticed the lower half of their 50-inch ${b} screen was noticeably darker than the top half. Technician disassembled the optical diffuser layers and found the lower backlight rail had open-circuited at a series diode. Replaced the entire lower rail with matching voltage LEDs, balanced current on the power board, and brightness became uniform.`,
    ta: (b, l) => `${l}-la ${b} TV-la half screen mattum dark-ah aayiduchu. Lower backlight strip fail aagirundhadhu. New strip change panni uniform brightness set pannanga.`
  },
  {
    id: "tv_remote_ir_sensor",
    topic: "remote sensor not responding",
    headingStyles: [
      (b, l) => `${b} TV Stopped Responding to Remote Control Clicks`,
      (b, l) => `Corroded IR Sensor Eye Swapped on ${b} Front Sub-Board`,
      (b, l) => `Why ${b} Brand-New Remote Batteries Failed to Work with This TV`,
      (b, l) => `Instant Remote Key Response Restored to ${b} Television`,
      (b, l) => `Moisture Damage on Front Sensor Panel Cleaned on ${b} at ${l}`,
      (b, l) => `Customer Had to Stand Inches Away for ${b} Remote to Work`,
      (b, l) => `In ${l}, ${b} Smart TV Front Receiver Refused Remote Signals`,
      (b, l) => `Infrared Receiver Module Replacement on ${b} Smart TV`
    ],
    en: (b, l) => `In ${l}, a customer had to hold their remote two inches from the ${b} TV sensor for it to register any key press. Technician verified the remote itself was emitting strong infrared signals with an RF detector, then tested the TV's IR receiver eye. The photodiode had degraded from moisture during room cleaning. Swapped the sensor eye; the remote now works easily from 20 feet away.`,
    ta: (b, l) => `${l}-la ${b} TV remote romba kitta poyi press panna thaan work aachu. TV munnadi irukra IR sensor board check panni new eye maathunom. Ippo remote thoorathula irundhey nalla respond aagudhu.`
  },
  {
    id: "tv_blinking_red_led",
    topic: "standby error code blink",
    headingStyles: [
      (b, l) => `Front LED on ${b} TV Flashed Red Six Times in a Repeating Diagnostic Loop`,
      (b, l) => `Panel Power Regulation Track Repaired on ${b} Motherboard`,
      (b, l) => `Why This ${b} Television Kept Tripping into Protection Mode`,
      (b, l) => `Normal Green Power Light and Picture Restored on ${b} TV`,
      (b, l) => `Shorted 12V Boost Diode Replaced on ${b} Circuit in ${l}`,
      (b, l) => `${b} Smart TV Refused to Complete Power Handshake Sequence`,
      (b, l) => `In ${l}, ${b} Screen Shut Down with Blinking Diagnostic Code`,
      (b, l) => `Diagnostic Error Protection Reset on ${b} Television`
    ],
    en: (b, l) => `Customer in ${l} reported that their ${b} TV screen clicked twice, then flashed red six times repeatedly. The technician matched the blink code to a panel 12V line short. Opening the main chassis revealed a shorted ceramic capacitor pulling down the panel supply voltage. Replaced the capacitor, cleared the board fault code, and the TV booted smoothly into normal operation.`,
    ta: (b, l) => `${l}-la ${b} TV 6 thadava red light blink aagi standby aayidum. Panel 12V line-la capacitor short aagirundhadhu. New component maathunadhum normal green light vandhu screen on aachu.`
  },
  {
    id: "tv_screen_flicker_backlight",
    topic: "screen brightness flickering",
    headingStyles: [
      (b, l) => `Rapid Screen Flickering Strained Eyes on ${b} Smart TV`,
      (b, l) => `LED Driver Boost MOSFET Replaced on ${b} Power Board`,
      (b, l) => `Why the ${b} Display Brightness Pulsed Like a Strobe Light`,
      (b, l) => `Calm and Stable Screen Illumination Restored on ${b} TV`,
      (b, l) => `Overheated Backlight Driver Circuit Repaired on ${b} in ${l}`,
      (b, l) => `${b} TV Screen Started Pulsing Bright and Dim Intermittently`,
      (b, l) => `In ${l}, ${b} Display Flickered Rapidly During Dark Movie Scenes`,
      (b, l) => `LED Driver Voltage Stabilization on ${b} Smart Television`
    ],
    en: (b, l) => `In ${l}, a 43-inch ${b} TV started flickering like a strobe light every few seconds during movies. The technician tested the output voltage of the LED driver circuit and saw wild spikes between 60V and 110V. A high-voltage MOSFET on the driver board had developed internal leakage. Replaced the driver transistor and smoothed the gate voltage, providing rock-solid illumination.`,
    ta: (b, l) => `${l}-la ${b} TV screen light flash maadhiri thudichite irundhadhu. LED driver board-la MOSFET component leak aagirundhadhu. Adha change pannadhum flickering ninuttu stable light vandhudhu.`
  },
  {
    id: "tv_distorted_colors",
    topic: "gamma ic color distortion",
    headingStyles: [
      (b, l) => `Colours Appeared Washed Out and Inverted on ${b} Screen`,
      (b, l) => `Overheating Gamma Correction IC Replaced on ${b} T-Con`,
      (b, l) => `Why ${b} Actors Faces Looked Ghostly White and Solarized on TV`,
      (b, l) => `Rich Natural Skin Tones and Contrast Restored on ${b} Display`,
      (b, l) => `Burned Reference Voltage IC Swapped on ${b} at ${l}`,
      (b, l) => `${b} Smart TV Showed Neon Inverted Colors Across All Channels`,
      (b, l) => `In ${l}, ${b} Television Picture Contrast Collapsed into White`,
      (b, l) => `Color Mapping Reference Circuit Rebuilt on ${b} TV`
    ],
    en: (b, l) => `A resident in ${l} noticed human skin appeared bleached white with bright neon halos around hair on their ${b} TV. The technician diagnosed a burned Gamma IC on the T-Con board that had lost its stepped reference voltages. Replaced the AS15-F chip using SMD hot-air rework and applied thermal compound; colors returned to natural depth and accurate skin tones.`,
    ta: (b, l) => `${l}-la ${b} TV-la face ellam ghostly white and negative colors-ah therinjadhu. T-Con board-la Gamma IC overheat aagirundhadhu. Chip change pannadhum original natural colors thirumbi vandhadhu.`
  },
  {
    id: "tv_no_power_blown_fuse",
    topic: "power surge dead tv",
    headingStyles: [
      (b, l) => `${b} TV Stood Completely Dead After Sudden Lightning Surge`,
      (b, l) => `Ceramic Fuse and MOV Varistor Swapped on ${b} Power Board`,
      (b, l) => `Why No Power or Standby Light Showed on This ${b} Screen`,
      (b, l) => `Safe Power Supply Operation Restored to Dead ${b} Television`,
      (b, l) => `Burned Surge Protection Circuit Rebuilt on ${b} at ${l}`,
      (b, l) => `Sudden Evening Voltage Surge Knocked Out ${b} TV Main Board`,
      (b, l) => `In ${l}, ${b} Television Refused Any Sign of Electrical Life`,
      (b, l) => `Primary Input Surge Protection Overhaul on ${b} Display`
    ],
    en: (b, l) => `Following a thunderstorm in ${l}, a ${b} TV would not power on, and the front panel light remained dead. The technician found the primary 3.15A ceramic fuse charred and the MOV surge protector shattered, having sacrificed itself to block high voltage. Replaced both protection components, tested bridge rectifier diodes, and the TV started up without any damage to the costly main processor.`,
    ta: (b, l) => `${l}-la thunder surge vandhappo ${b} TV dead aayiduchu, light kooda eriyala. Power board fuse and varistor short aagirundhadhu. Protection parts maathunadhum TV safe-ah on aachu.`
  },
  {
    id: "tv_volume_stuck_keys",
    topic: "stuck front keys volume loop",
    headingStyles: [
      (b, l) => `Volume Bar Kept Rising to 100% on ${b} Television Automatically`,
      (b, l) => `Oxidised Front Tactile Button Assembly Replaced on ${b} TV`,
      (b, l) => `Why the ${b} On-Screen Menu Kept Popping Up by Itself on TV`,
      (b, l) => `Normal Key Navigation Restored to ${b} Television Controls`,
      (b, l) => `Short-Circuited Microswitch Cleared from Front Fascia on ${b} in ${l}`,
      (b, l) => `${b} Smart TV Refused to Lower Volume Even When Remote Pressed`,
      (b, l) => `In ${l}, ${b} TV Front Panel Key Membrane Developed a Short`,
      (b, l) => `Front Console Navigation Key Assembly Servicing on ${b} TV`
    ],
    en: (b, l) => `In ${l}, customer noticed their ${b} TV volume bar automatically climbed to 100 on power-up and pressing mute did nothing. The technician disconnected the physical button ribbon from the side bezel and verified the issue stopped, confirming a stuck tactile switch. Replaced the internal micro-switch panel with fresh dust-sealed switches, restoring total remote and manual control.`,
    ta: (b, l) => `${l}-la ${b} TV volume auto-va 100-ku poitu remote-kum respond pannala. Side panel button short aagirundhadhu. New switch strip fix pannadhum normal control thirumbi vandhadhu.`
  },
  {
    id: "tv_screen_solarization",
    topic: "lvds bit mapping error",
    headingStyles: [
      (b, l) => `Negative Oil-Painting Effect Appeared Across ${b} 4K Screen`,
      (b, l) => `LVDS Bit Depth Mode Reprogrammed in ${b} Service Menu`,
      (b, l) => `Why ${b} Video Looked Like an Inverted Comic Book on This TV`,
      (b, l) => `Crisp True-Color Video Playback Restored on ${b} Television`,
      (b, l) => `Corrupted Panel Parameter EPROM Restored on ${b} at ${l}`,
      (b, l) => `${b} Smart TV Showed Bizarre Washed-Out Posterized Pictures`,
      (b, l) => `In ${l}, ${b} TV Suffered Severe Screen Solarization Artifacts`,
      (b, l) => `Panel Bit Mapping and Gamma Calibration on ${b} Display`
    ],
    en: (b, l) => `Customer in ${l} called when their ${b} TV began showing video that looked like an oil painting with strange bright highlights and distorted contrast. Technician recognized an LVDS bit-depth mismatch between the motherboard and panel. Accessed factory engineering mode, corrected the JEIDA/VESA bit mode setting, and reset the panel profile, immediately restoring true high-definition rendering.`,
    ta: (b, l) => `${l}-la ${b} TV screen photo negative maadhiri weird color-ah maari irundhadhu. Service mode poyi LVDS bit settings correct pannom. Picture clarity udane normal aachu.`
  },
  {
    id: "tv_optical_audio_dropout",
    topic: "optical audio output dropout",
    headingStyles: [
      (b, l) => `Soundbar Audio Kept Cutting Out from ${b} Optical Port`,
      (b, l) => `Optical SPDIF Transmitter Port Replaced on ${b} Motherboard`,
      (b, l) => `Why ${b} External Sound Stopped Playing Through Home Theatre Setup`,
      (b, l) => `Crisp Digital Surround Sound Restored to ${b} Home Entertainment`,
      (b, l) => `Cracked Optical Jack Shutter Repaired on ${b} in ${l}`,
      (b, l) => `${b} TV Optical Cable Lost Red Light Beam Transmission`,
      (b, l) => `In ${l}, ${b} TV Audio Refused to Sync with Soundbar System`,
      (b, l) => `Digital Optical SPDIF Audio Port Servicing on ${b} TV`
    ],
    en: (b, l) => `In ${l}, an audiophile found their soundbar silent when connected to their ${b} TV via optical cable. The technician looked into the optical port and observed no red laser light emitted. Testing the port showed a fractured plastic dust shutter had pushed the internal optical diode off-center. Fitted a replacement optical jack, reconnected the Toslink cable, and digital 5.1 audio flowed smoothly.`,
    ta: (b, l) => `${l}-la ${b} TV optical port soundbar-ku sound send pannala, red light varala. Optical socket-ah change panni check pannom. Surround sound clean-ah play aagudhu.`
  },
  {
    id: "tv_ghosting_slow_motion",
    topic: "slow motion ghosting panel",
    headingStyles: [
      (b, l) => `Images Left a Trailing Blur and Slow-Motion Ghost on ${b} TV`,
      (b, l) => `Bypassed Damaged Gate Line Track on ${b} Display Panel`,
      (b, l) => `Why ${b} Fast Action Scenes Looked Smudged and Unwatchable`,
      (b, l) => `Sharp 60Hz Motion Clarity Restored on ${b} Television Screen`,
      (b, l) => `VGH Voltage Jumper Line Soldered on ${b} at ${l}`,
      (b, l) => `${b} Smart TV Retained Previous Frame Ghosts on New Scenes`,
      (b, l) => `In ${l}, ${b} Screen Developed Severe Motion Drag and Smearing`,
      (b, l) => `Side COF Gate Driver Voltage Restoration on ${b} Display`
    ],
    en: (b, l) => `A resident in ${l} noticed cricket players left ghosted trails and the picture looked sluggish on their ${b} TV. The technician detected that the VGH gate voltage rail had dropped from 28V to 9V due to an internal panel trace break. By running a precision copper jumper wire directly from the T-Con VGH pad to the side gate driver tab, smooth 60Hz motion was completely restored.`,
    ta: (b, l) => `${l}-la ${b} TV-la visuals slow motion maadhiri trailing blur aachu. Gate voltage line-la jumper wire pottu VGH power correct pannom. Ippo fast movements smooth-ah play aagudhu.`
  },
  {
    id: "tv_usb_short_restart",
    topic: "usb port pin short restart",
    headingStyles: [
      (b, l) => `Plugging In a Pen Drive Caused ${b} TV to Shut Down Instantly`,
      (b, l) => `Bent Internal USB Port Pins Straightened and Reseated on ${b}`,
      (b, l) => `Why ${b} Inserting External Drives Triggered an Emergency Power Cut`,
      (b, l) => `Safe USB Media Playback Restored to ${b} Television Chassis`,
      (b, l) => `Shorted 5V Power Rail Cleared on ${b} TV in ${l}`,
      (b, l) => `${b} TV Refused to Boot While Any Storage Drive Was Inserted`,
      (b, l) => `In ${l}, ${b} Television Shut Down on Any Media Port Insertion`,
      (b, l) => `Media Port Bus Power and Connector Reconditioning on ${b} TV`
    ],
    en: (b, l) => `In ${l}, inserting a USB thumb drive caused a ${b} TV to shut down with a click. Our technician inspected the side USB socket under magnification and spotted bent gold pins mashed against the metal outer shell, grounding the 5V power bus and triggering circuit protection. Desoldered the broken socket, soldered a fresh gold-plated USB jack, and tested movie playback without any hiccup.`,
    ta: (b, l) => `${l}-la pen drive potta udane ${b} TV click nu off aayidum. USB port pin bent aagi short aagirundhadhu. New USB port fix pannadhum movies nalla play aagudhu.`
  },
  {
    id: "tv_bluetooth_audio_lag",
    topic: "bluetooth headphone lag",
    headingStyles: [
      (b, l) => `Severe Audio Lip-Sync Delay on Bluetooth Earphones with ${b} TV`,
      (b, l) => `Bluetooth RF Antenna Solder Connection Refurbished on ${b}`,
      (b, l) => `Why ${b} Wireless Audio Stuttered and Dropped Out Beyond 5 Feet`,
      (b, l) => `Perfect Real-Time Dialogue Synchronization Restored on ${b}`,
      (b, l) => `Loose Bluetooth Transceiver Ground Lead Repaired on ${b} in ${l}`,
      (b, l) => `${b} Smart TV Stuttered Constantly on Wireless Sound Devices`,
      (b, l) => `In ${l}, ${b} Television Bluetooth Range Dropped to Barely a Meter`,
      (b, l) => `Bluetooth Wireless Transceiver Alignment on ${b} Television`
    ],
    en: (b, l) => `Customer in ${l} noticed wireless neckband audio was half a second behind actors lips on their ${b} TV, with frequent crackling if they sat back on the sofa. Technician examined the internal Bluetooth tranceiver PCB and found a dry solder joint on the trace antenna lead. Reflowed the joint with silver solder and upgraded audio latency settings, giving perfectly synced sound.`,
    ta: (b, l) => `${l}-la ${b} TV Bluetooth audio lip-sync aagama delay aagi ketuchu. Antenna solder loose-ah irundhadhu. Re-solder panni latency fix pannadhum perfect sync aachu.`
  },
  {
    id: "tv_burn_in_retention",
    topic: "pixel image retention",
    headingStyles: [
      (b, l) => `Faint Channel Logo Outlines Lingered Permanently on ${b} Screen`,
      (b, l) => `Deep Pixel Refresh and Sub-Pixel Calibration Run on ${b} TV`,
      (b, l) => `Why ${b} Static News Tickers Left Shadows Across This Display`,
      (b, l) => `Uniform and Clean Screen Surface Restored on ${b} Display`,
      (b, l) => `OLED Voltage Uniformity Table Recalibrated on ${b} at ${l}`,
      (b, l) => `${b} Smart TV Display Showed Persistent Ghost Outlines of Apps`,
      (b, l) => `In ${l}, ${b} Television Suffered Annoying Image Sticking Artifacts`,
      (b, l) => `Pixel Panel Uniformity and Voltage Rebalancing on ${b} TV`
    ],
    en: (b, l) => `A resident in ${l} noticed faint ghost outlines of a news logo remaining on screen even when playing movies on their ${b} TV. The technician ran a multi-stage automated panel refresher, adjusted sub-pixel drive voltages in the technician menu, and enabled panel shift protection. After an hour-long cycle, lingering shadows vanished and screen uniformity returned to factory levels.`,
    ta: (b, l) => `${l}-la ${b} TV-la channel logo shadow maadhiri thonite irundhadhu. Panel pixel refresher run panni voltage calibrate pannom. Shadow poitu screen clean aayiduchu.`
  },
  {
    id: "tv_sudden_blackout_relays",
    topic: "standby relay clicking off",
    headingStyles: [
      (b, l) => `${b} Screen and Sound Dropped Dead Mid-Movie After 20 Minutes of Viewing`,
      (b, l) => `Pitted Contact Power Relay Swapped on ${b} Main Board`,
      (b, l) => `Why This ${b} Television Shut Down Only When Warmed Up`,
      (b, l) => `Uninterrupted Continuous Viewing Restored on ${b} Smart TV`,
      (b, l) => `Thermal Expansion Dry Solder Point Repaired on ${b} in ${l}`,
      (b, l) => `${b} Smart TV Made a Sharp Click and Went Dark Mid-Movie`,
      (b, l) => `In ${l}, ${b} Television Tripped Its Internal Relay Periodically`,
      (b, l) => `Thermal Power Relay and Solder Track Overhaul on ${b} TV`
    ],
    en: (b, l) => `In ${l}, a 50-inch ${b} TV would play fine for roughly twenty minutes, then make a distinct clicking noise and go completely dark. The technician monitored temperature build-up and found a power board relay coil connection had developed thermal micro-fractures, opening the circuit when warm. Replaced the relay with a sealed Omron industrial unit, enabling hours of continuous playback.`,
    ta: (b, l) => `${l}-la ${b} TV 20 mins oduna odaney click nu saththam pottu off aayidum. Power relay heat aagi cut aagudhu. New heavy-duty relay potadhum nonstop-ah nalla run aagudhu.`
  },
  {
    id: "tv_headphone_jack_detect",
    topic: "headphone jack detection stuck",
    headingStyles: [
      (b, l) => `Internal Speakers on ${b} TV Stayed Muted Because TV Thought Headphones Were In`,
      (b, l) => `Stuck 3.5mm Headphone Detection Switch Freed on ${b} Board`,
      (b, l) => `Why ${b} No Sound Came from TV Speakers Despite Volume Set to High`,
      (b, l) => `Full Room-Filling Audio Restored to ${b} Internal Speakers`,
      (b, l) => `Debris-Jammed Audio Port Cleaned and Restored on ${b} at ${l}`,
      (b, l) => `${b} Smart TV Kept Showing a Headphone Icon on the Screen`,
      (b, l) => `In ${l}, ${b} Television Refused to Direct Sound to Built-in Speakers`,
      (b, l) => `Audio Jack Detection Switch Reconditioning on ${b} Television`
    ],
    en: (b, l) => `Customer in ${l} was baffled that their ${b} TV showed full volume on screen but produced no sound from its speakers, displaying a tiny earphone icon. The technician inspected the 3.5mm auxiliary port and found lint had jammed the internal leaf switch open, tricking the audio processor into muting speakers. Extracted the lint, treated contacts, and built-in speakers boomed clearly.`,
    ta: (b, l) => `${l}-la ${b} TV-la volume full-ah vechalum sound varala, earphone symbol kaatuchu. 3.5mm jack kulla dirt stuck aagirundhadhu. Clean panni switch release pannadhum speakers nalla paadudhu.`
  },
  {
    id: "tv_hdmi_arc_handshake",
    topic: "hdmi arc sound drop",
    headingStyles: [
      (b, l) => `HDMI ARC Stopped Sending Audio to Soundbar on ${b} Smart TV`,
      (b, l) => `CEC Handshake Firmware Table Reset and Re-paired on ${b}`,
      (b, l) => `Why the ${b} TV Remote Failed to Adjust Home Theatre Volume`,
      (b, l) => `Synchronized Single-Remote Audio Return Restored on ${b}`,
      (b, l) => `Oxidised HDMI-2 eARC Pin Contact Serviced on ${b} in ${l}`,
      (b, l) => `${b} Smart TV Dropped Audio Return Link Every Time It Restarted`,
      (b, l) => `In ${l}, ${b} Television eARC Audio Signal Kept Falling Asleep`,
      (b, l) => `High-Speed Audio Return Channel Calibration on ${b} TV`
    ],
    en: (b, l) => `In ${l}, a home theatre owner complained their ${b} TV refused to output Dolby audio through HDMI ARC, requiring them to use a separate soundbar remote. Technician checked HDMI-2 port pins, found mild oxidation, cleaned the gold contacts, and reset the Bravia Sync / eARC handshake cache. Audio return engaged immediately, allowing one remote to control everything.`,
    ta: (b, l) => `${l}-la ${b} TV HDMI ARC soundbar-ku connect aagala. ARC port clean panni CEC sync cache reset pannom. Ippo ore remote-la TV and soundbar perfect-ah control aagudhu.`
  },
  {
    id: "tv_ambient_sensor_dimming",
    topic: "ambient sensor brightness drop",
    headingStyles: [
      (b, l) => `${b} Screen Looked Terribly Dim in Daylight Even with Backlight Set to 100%`,
      (b, l) => `Faulty Ambient Light Sensor Bypassed on ${b} Front Bezel`,
      (b, l) => `Why This ${b} 4K Display Looked Murky and Dark in Daylight`,
      (b, l) => `Vibrant Daytime Screen Brightness Restored on ${b} Television`,
      (b, l) => `Dusty Light Sensor Photodiode Calibrated on ${b} at ${l}`,
      (b, l) => `${b} Smart TV Automatically Dimmed Itself Down to Pitch Black`,
      (b, l) => `In ${l}, ${b} Television Eco Sensor Malfunctioned Permanently`,
      (b, l) => `Ambient Light Sensor and Eco Brightness Circuit Servicing on ${b}`
    ],
    en: (b, l) => `A resident in ${l} called when their ${b} TV became so dim that daytime viewing was impossible, despite brightness set to maximum in the menu. Technician diagnosed a defective ambient light sensor on the bottom bezel that was reporting false zero-lux readings to the CPU. Recalibrated the eco sensor circuit and reset dynamic picture curves, restoring radiant daytime brilliance.`,
    ta: (b, l) => `${l}-la ${b} TV screen brightness 100 vechalum romba dim-ah irundhadhu. Bezel-la irukra light sensor fail aagi false dark reading koduthuchu. Sensor calibrate panni eco mode fix pannadhum nalla bright aachu.`
  }
];
