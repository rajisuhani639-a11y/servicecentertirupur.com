const fs = require('fs');

let code = fs.readFileSync('scripts/generate_clean_tv_brands_1_to_10.js', 'utf8');

// Update Sony Remote
code = code.replace(
  'val2: "Bluetooth pairing disconnected, remote firmware out of sync, or the internal Bluetooth transceiver on the TV motherboard is faulty."',
  'val2: "Bluetooth pairing lost, mic button firmware desynchronized, or internal Bluetooth transceiver chip on Bravia mainboard has failed."'
);
code = code.replace(
  'val3: "Performs manual hardware re-pairing sequence, resets remote Bluetooth cache, and verifies internal antenna 3.3V power."',
  'val3: "Performs Sony hardware pairing button sequence, clears remote registration in settings, and measures 3.3V Bluetooth antenna rail."'
);

// Update Panasonic Android TV
code = code.replace(
  'problems: "Television stuck on Android boot animation, Wi-Fi failing to connect to broadband, remote voice search dead."',
  'problems: "Viera television stuck on Android boot animation, home Wi-Fi failing to authenticate, remote mic unresponsive."'
);
code = code.replace(
  'checks: "Accesses Android recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module."',
  'checks: "Enters Panasonic service bootloader, clears system partition cache, and tests 3.3V power to internal Wi-Fi card."'
);
code = code.replace(
  'parts: "Android logic motherboard, internal Wi-Fi module, flash memory chip, remote sensor board."',
  'parts: "Panasonic Android logic board, internal Wi-Fi transceiver, flash memory chip, IR sensor assembly."'
);
code = code.replace(
  'whenNeeded: "When the television reboots continuously or streaming apps crash every time they open."',
  'whenNeeded: "When Viera TV reboots in a continuous loop or streaming apps crash on launch."'
);

// Update Philips Smart OS
code = code.replace(
  'val3: "Enters recovery bootloader mode, clears system cache, or reflashes manufacturer firmware on the Philips logic board."',
  'val3: "Initiates Philips service recovery mode via technician remote, wipes corrupted cache partition, and updates Saphi OS image."'
);

// Update Philips Full HD LED
code = code.replace(
  'problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines."',
  'problems: "Standby light dead following thunderstorm, Ambilight switch error, speaker buzzing during dialogue."'
);
code = code.replace(
  'checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages."',
  'checks: "Measures 12V SMPS main rail, tests power filter capacitors, and checks audio amplifier impedance."'
);
code = code.replace(
  'parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable."',
  'parts: "Philips power supply unit, Ambilight switch module, stereo speaker pair, LVDS cable."'
);
code = code.replace(
  'whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."',
  'whenNeeded: "When the TV fails to turn on after an electrical surge or audio rattles during serials."'
);

// Update Toshiba Full HD LED
code = code.replace(
  'problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines."',
  'problems: "TV will not power on from remote, red indicator blinks in pairs, dark vertical bands on display."'
);
code = code.replace(
  'checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages."',
  'checks: "Tests standby 5V rail on REGZA power board, checks backlight driver voltage booster."'
);
code = code.replace(
  'parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable."',
  'parts: "REGZA power supply PCB, direct-lit LED strips, audio driver units, LVDS cable."'
);
code = code.replace(
  'whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."',
  'whenNeeded: "When the screen is dark in one quadrant or the power indicator clicks continuously."'
);

// Update Toshiba 4K
code = code.replace(
  'problems: "Sound playing clearly while display is black, red indicator light blinking, HDMI port failing to detect DTH box."',
  'problems: "Dialogue audible but REGZA screen stays black, power LED blinks, HDMI port not recognizing cable box."'
);
code = code.replace(
  'checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC."',
  'checks: "Measures LED booster forward voltage, checks REGZA Engine standby rail, and inspects HDMI controller."'
);
code = code.replace(
  'parts: "REGZA 4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector."',
  'parts: "REGZA 4K LED backlight array, REGZA SMPS power module, mainboard, HDMI port."'
);
code = code.replace(
  'whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."',
  'whenNeeded: "When REGZA screen goes black after a few minutes or video cuts out during cable viewing."'
);

// Update Toshiba Smart
code = code.replace(
  'checks: "Accesses service recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module."',
  'checks: "Enters VIDAA factory diagnostic mode, tests eMMC flash sectors, and verifies 3.3V wireless module line."'
);
code = code.replace(
  'parts: "VIDAA/Google TV motherboard, internal Wi-Fi module, eMMC flash memory, remote sensor."',
  'parts: "VIDAA/Google TV motherboard, wireless receiver card, flash storage IC, remote sensor."'
);
code = code.replace(
  'whenNeeded: "When the TV cannot get past the opening logo or streaming apps crash every time they open."',
  'whenNeeded: "When VIDAA TV freezes on the opening animation or OTT apps crash repeatedly."'
);

// Update Sharp Full HD LED
code = code.replace(
  'problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines."',
  'problems: "UV2A screen image ghosting, power LED blinking alternating red and green, no audio."'
);
code = code.replace(
  'checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages."',
  'checks: "Tests UV2A timing controller VGH/VGL voltages and inspects power inverter feedback."'
);
code = code.replace(
  'parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable."',
  'parts: "Sharp SMPS board, UV2A panel driver, speaker set, LVDS harness."'
);
code = code.replace(
  'whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."',
  'whenNeeded: "When the power light flashes alternating colors or moving images leave smeared trails."'
);

// Update Sharp 4K
code = code.replace(
  'checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC."',
  'checks: "Tests Japanese UV2A backlight forward voltages, measures Aquos standby rails, and inspects HDMI switch."'
);
code = code.replace(
  'parts: "Aquos 4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector."',
  'parts: "Aquos 4K LED backlight strips, Sharp SMPS board, logic motherboard, HDMI socket."'
);
code = code.replace(
  'whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."',
  'whenNeeded: "When Aquos screen cuts off into standby or picture goes black while sound is audible."'
);

// Update Haier Full HD LED
code = code.replace(
  'checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages."',
  'checks: "Tests AC bridge rectifier on combo board, checks IR photodiode voltages, and measures 24V backlight driver line."'
);
code = code.replace(
  'parts: "Combo motherboard, internal speaker set, T-Con timing controller, LVDS cable."',
  'parts: "Haier combo motherboard, IR receiver module, direct-lit LED bars, LVDS cable."'
);
code = code.replace(
  'whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."',
  'whenNeeded: "When the TV refuses to turn on from standby or picture appears dim in the center."'
);

// Update Sansui Full HD LED
code = code.replace(
  'problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines."',
  'problems: "DLED screen dim with dark patches, TV not turning on, tinny audio from speakers."'
);
code = code.replace(
  'checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages."',
  'checks: "Measures DLED strip current draw, tests standby transformer output, and checks speaker voice coils."'
);
code = code.replace(
  'parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable."',
  'parts: "Sansui power supply board, DLED backlight array, internal speaker pair, LVDS cable."'
);
code = code.replace(
  'whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."',
  'whenNeeded: "When circular bright coins appear on screen or television fails to boot up."'
);

// Update Sansui 4K
code = code.replace(
  'checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC."',
  'checks: "Measures DLED forward voltage per strip, inspects 4K Pro SMPS standby rail, and tests HDMI switch."'
);
code = code.replace(
  'parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector."',
  'parts: "Sansui 4K LED backlight array, 4K Pro SMPS power board, main logic board, HDMI socket."'
);
code = code.replace(
  'whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."',
  'whenNeeded: "When 4K Pro screen goes black during video playback or powers off after a few minutes."'
);

// Update Sansui Smart
code = code.replace(
  'checks: "Accesses service recovery mode, clears system partition cache, and tests internal Wi-Fi/Bluetooth module."',
  'checks: "Enters Sansui recovery console, wipes cache partition, and checks 3.3V Wi-Fi card supply."'
);
code = code.replace(
  'parts: "Android motherboard, internal Wi-Fi module, eMMC flash memory, remote sensor."',
  'parts: "Sansui Android motherboard, internal Wi-Fi module, eMMC flash memory, remote sensor."'
);
code = code.replace(
  'whenNeeded: "When the TV cannot get past the opening logo or streaming apps crash every time they open."',
  'whenNeeded: "When the TV freezes on the Sansui logo or streaming apps crash on startup."'
);

// Update Xiaomi Full HD LED
code = code.replace(
  'problems: "Television completely dead with no standby light, speaker buzzing during speech, colored screen lines."',
  'problems: "Mi 4A power completely off, red LED not responding, distorted dialogue from bottom speakers."'
);
code = code.replace(
  'checks: "Tests 12V and 24V SMPS outputs, checks speaker cone condition, and tests T-Con gamma voltages."',
  'checks: "Inspects single combo board fuse, measures secondary 12V DC rail, and tests down-firing speaker drivers."'
);
code = code.replace(
  'parts: "SMPS power supply board, internal speaker set, T-Con timing controller, LVDS cable."',
  'parts: "Unified combo motherboard, down-firing speaker set, LVDS cable, remote sensor."'
);
code = code.replace(
  'whenNeeded: "When the TV will not turn on after a power cut or sound distorts at moderate volume."',
  'whenNeeded: "When the TV will not wake from standby or sound distorts during Tamil movies."'
);

// Update Xiaomi 4K
code = code.replace(
  'checks: "Measures forward voltage across each backlight strip, inspects SMPS standby rails, and tests HDMI switch IC."',
  'checks: "Measures forward voltage across direct-lit LED arrays, inspects secondary standby rails, and tests HDMI eARC IC."'
);
code = code.replace(
  'parts: "4K LED backlight strips, SMPS power supply board, main logic board, HDMI connector."',
  'parts: "Mi 4K LED backlight strips, SMPS power supply board, PatchWall logic board, HDMI eARC port."'
);
code = code.replace(
  'whenNeeded: "When display turns completely dark while audio plays or television shuts off after a few minutes."',
  'whenNeeded: "When Mi 4K screen stays dark during video playback or television reboots after starting."'
);

fs.writeFileSync('scripts/generate_clean_tv_brands_1_to_10.js', code, 'utf8');
console.log('Updated generate_clean_tv_brands_1_to_10.js cleanly!');
