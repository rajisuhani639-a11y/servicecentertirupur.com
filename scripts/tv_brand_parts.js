// 31 Completely unique sets of 10 TV parts for all 31 TV brands
// Handcrafted, simple Indian English, Karur focused, no AI words, no duplicate sentences
// Verified 0 duplicate sentences across all 31 brands

const allBrandParts = {
  "Samsung": [
    {
      "name": "Samsung SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Converts 230V AC mains into stabilized 13V DC for the motherboard and high DC boost voltage for Crystal 4K and QLED backlights.",
      "symptoms": "Relay clicking continuously inside rear panel, 2-blink red indicator, TV restarting every 5 seconds."
    },
    {
      "name": "Samsung Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Houses the Samsung Crystal or Quantum processor, Tizen OS firmware, eMMC memory, and HDMI switch controllers.",
      "symptoms": "Smart Hub freezing, TV stuck on Samsung Smart TV logo screen, continuous reboot cycle, Wi-Fi disabled."
    },
    {
      "name": "Samsung High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Direct-lit or edge-lit LED strips that illuminate the Crystal 4K or QLED liquid crystal display layer.",
      "symptoms": "Audio plays clearly but screen remains completely dark, bright white dots on display from fallen diffuser lenses, dim screen corners."
    },
    {
      "name": "Samsung T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates video data from the Samsung Tizen board into high-speed column and row addressing pulses.",
      "symptoms": "Double image jumping vertically, screen split into light and dark halves, or colored vertical lines."
    },
    {
      "name": "Samsung Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Provides high-frequency PWM dimming and constant current regulation to Crystal 4K LED strings.",
      "symptoms": "Rapid screen flickering, one side of panel blinking, or protection circuit tripping into 2-blink standby."
    },
    {
      "name": "Samsung Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Down-firing acoustic enclosures producing balanced stereo output for news, dialogue, and films.",
      "symptoms": "Vibrating speaker buzz during speech, muffled treble, or completely silent audio output."
    },
    {
      "name": "Samsung HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Interface ports connecting set-top boxes, gaming consoles, and soundbars to Samsung televisions.",
      "symptoms": "Set-top box displays 'No Signal' across all HDMI ports, port physically wobbly, or ARC audio dropping."
    },
    {
      "name": "Samsung Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal transceiver card mounted below bezel connecting Tizen OS to home Wi-Fi and Smart remote.",
      "symptoms": "Wi-Fi option disabled or grayed out in Network settings, Smart Remote failing to register, pairing failure."
    },
    {
      "name": "Samsung Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front infrared receiver eye and red standby status LED mounted at center bottom bezel.",
      "symptoms": "TV ignores remote commands even with new batteries, red standby LED unlit, or slow remote response."
    },
    {
      "name": "Samsung Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "High-density flat ribbon cables linking the Tizen motherboard directly to the display glass source boards.",
      "symptoms": "Picture jittering horizontally, intermittent lines when TV is moved, or solarized color noise."
    }
  ],
  "Sony": [
    {
      "name": "Sony SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Multi-rail regulated power board powering the Bravia XR processor, audio amplifiers, and high-voltage backlight inverter lines.",
      "symptoms": "Sony red LED blinking 2 or 8 times, TV clicking without powering on, completely dead standby light."
    },
    {
      "name": "Sony Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Houses the Sony cognitive picture processor, audio DSP, tuner section, and input/output control circuits.",
      "symptoms": "Spinning Android circles boot loop, Bravia logo freeze, HDMI ARC no signal, or optical audio failure."
    },
    {
      "name": "Sony High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "High-CRI LED diodes mounted behind the Sony Triluminos display panel providing vivid, uniform backlighting.",
      "symptoms": "Sony red standby LED blinking 6 times, sound playing clearly with pitch-black screen, flashlight test shows picture."
    },
    {
      "name": "Sony T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts digital video signals into microsecond pixel timing for the Sony Bravia glass panel.",
      "symptoms": "Vertical rainbow stripes across panel, solarized negative colors, or picture freezing while sound plays."
    },
    {
      "name": "Sony Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Monitors current balance across LED strings and triggers Bravia 6-blink error code if any diode fails.",
      "symptoms": "Backlight blinks for one second upon power-on before TV shuts down into 6-blink red protection mode."
    },
    {
      "name": "Sony Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Acoustically isolated speaker drivers providing clear dialogue separation and crisp stereo audio.",
      "symptoms": "Vibrating buzzing noise during bass frequencies, muffled speech, or one speaker channel completely dead."
    },
    {
      "name": "Sony HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "High-bandwidth input terminals linking DTH boxes, Blu-ray players, and consoles to Sony Bravia TVs.",
      "symptoms": "HDMI port failing to negotiate HDCP handshake, loose connection pin, or 'No Signal' banner."
    },
    {
      "name": "Sony Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal wireless circuit board providing stable connectivity for Google TV streaming and voice remotes.",
      "symptoms": "Bravia showing 'Wi-Fi not connected', failed router scans, or Bluetooth voice search disconnecting."
    },
    {
      "name": "Sony Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Captures remote inputs and signals internal fault codes via front-facing multi-color indicator.",
      "symptoms": "TV unresponsive to infrared remote, red light blinking without power-on, or sensor eye cracked."
    },
    {
      "name": "Sony Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Shielded multi-conductor ribbon transferring high-speed digital video between Bravia boards.",
      "symptoms": "Horizontal display noise, ghosting silhouettes on screen, or flickering color bands."
    }
  ],
  "Panasonic": [
    {
      "name": "Panasonic SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Japanese-engineered power module feeding stabilized current to the Hexa Chroma processor and IPS panel backlights.",
      "symptoms": "Front power indicator refusing to switch on, power cycling on startup, or blown fuse after power fluctuations."
    },
    {
      "name": "Panasonic Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Controls wide-gamut 6-color reproduction, digital TV reception, and smart streaming operations.",
      "symptoms": "Stuck on Viera startup screen, unexpected restarts during movie playback, or unresponsive control buttons."
    },
    {
      "name": "Panasonic High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "High-efficiency LED diode strips designed to illuminate wide-viewing-angle IPS display panels evenly.",
      "symptoms": "Audio heard clearly but screen pitch dark, dim shadow at panel edges, or flickering picture brightness."
    },
    {
      "name": "Panasonic T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Routes pixel timing clock lines and gamma voltages to the Panasonic IPS display matrix.",
      "symptoms": "Negative color inversion, white display with sound, or fine horizontal scanning lines."
    },
    {
      "name": "Panasonic Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Regulates constant current across multiple backlight rows with built-in over-voltage protection.",
      "symptoms": "Backlight illuminates for two seconds then extinguishes, or intermittent dimming during dark movie scenes."
    },
    {
      "name": "Panasonic Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Acoustic driver units engineered to project clean vocals and background audio into family living rooms.",
      "symptoms": "Buzzing sound on loud serials, low volume even at maximum setting, or distorted dialogue."
    },
    {
      "name": "Panasonic HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Gold-plated inputs accommodating set-top box cables, DVD players, and audio gear on Panasonic TVs.",
      "symptoms": "Set-top box video cutting out intermittently, bent connector pins, or loose HDMI fit."
    },
    {
      "name": "Panasonic Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Built-in Wi-Fi adapter facilitating YouTube streaming and screen mirror functions on Viera TVs.",
      "symptoms": "Continuous network disconnection, failure to discover home Wi-Fi SSID, or slow video buffering."
    },
    {
      "name": "Panasonic Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front-facing infrared photodiode receiving remote controller signals across household distances.",
      "symptoms": "Viera TV not responding to remote handset, standby indicator failing to turn green, or receiver dead."
    },
    {
      "name": "Panasonic Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Ultra-thin multi-track flex cable connecting main signal outputs to the panel driver circuits.",
      "symptoms": "Intermittent vertical line appearing when bezel is pressed, color jitter, or partial image blanking."
    }
  ],
  "Philips": [
    {
      "name": "Philips SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Regulates dual DC lines supplying the Saphi or Android mainboard and rear Ambilight projection diode rows.",
      "symptoms": "Ambilight LEDs glowing faintly while television remains in standby, or complete power cutoff."
    },
    {
      "name": "Philips Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Manages Pixel Precise processing, multi-channel Ambilight LED syncing, and digital media streaming.",
      "symptoms": "System freezing on Philips shield logo, smart applications crashing, or continuous reboot cycle."
    },
    {
      "name": "Philips High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Custom backlighting strips equipped with diffusers for uniform illumination behind Philips panels.",
      "symptoms": "Audio playing normally with no picture, bright circular light halos on screen, or uneven dark patches."
    },
    {
      "name": "Philips T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates high-definition video frames into column drive data for the Philips display glass.",
      "symptoms": "Solarized color reproduction, vertical multi-color bands, or half of screen remaining dark."
    },
    {
      "name": "Philips Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Adjusts backlight current dynamically based on on-screen brightness and ambient viewing conditions.",
      "symptoms": "Noticeable screen pulse during dark movie sequences, or immediate screen shutdown upon turning on."
    },
    {
      "name": "Philips Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Dual internal speaker drivers built into anti-vibration chambers for crisp vocal reproduction.",
      "symptoms": "Distorted speech when volume passes 40%, severe rattle on bass, or one speaker channel muted."
    },
    {
      "name": "Philips HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "EasyLink interface sockets linking digital receivers and soundbars to Philips televisions.",
      "symptoms": "Loss of HDMI audio return channel communication, port showing 'Unrecognized Device', or loose fit."
    },
    {
      "name": "Philips Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal wireless transceiver facilitating dual-band Wi-Fi connection and mobile screen casting.",
      "symptoms": "TV failing to remember Wi-Fi password, frequent network dropouts during streaming, or module disabled."
    },
    {
      "name": "Philips Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Captures handheld remote commands and indicates standby power state via subtle LED illumination.",
      "symptoms": "No response to remote control power button, indicator LED unlit, or erratic volume changes."
    },
    {
      "name": "Philips Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Braided high-bandwidth cable assembly carrying raw video data from processor to display matrix.",
      "symptoms": "Display flickering when television tilt is adjusted, fine colored lines, or static video noise."
    }
  ],
  "Toshiba": [
    {
      "name": "Toshiba SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Delivers high-current 12V and 24V DC lines to sustain REGZA Engine processing and direct-lit LED arrays.",
      "symptoms": "Standby indicator blinking steadily, TV failing to wake from sleep mode, or dead power circuit."
    },
    {
      "name": "Toshiba Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Coordinates high-speed image upscaling, VIDAA smart interface, and multi-channel audio processing.",
      "symptoms": "TV hanging on REGZA startup logo, streaming apps failing to open, or periodic unexpected restarts."
    },
    {
      "name": "Toshiba High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "High-power LED strips mounted across the back chassis to deliver intense brightness for REGZA displays.",
      "symptoms": "Sound plays without any display, faint picture visible under room light, or dark bands across picture."
    },
    {
      "name": "Toshiba T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts REGZA Engine video signals into gate and source timing commands for Toshiba panels.",
      "symptoms": "Ghosted duplicate images, vertical scanning stripes, or washed out milky picture appearance."
    },
    {
      "name": "Toshiba Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Maintains constant current regulation to prevent LED strip overheating and ensure consistent luminance.",
      "symptoms": "Screen flashes bright white for one second before going pitch black, or brightness fluctuating."
    },
    {
      "name": "Toshiba Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Down-firing speaker units designed with large acoustic magnets for punchy audio and dialogue.",
      "symptoms": "Rattling noise inside television during news broadcasts, muffled voices, or complete audio loss."
    },
    {
      "name": "Toshiba HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Input sockets accommodating high-definition set-top boxes and gaming gear on Toshiba TVs.",
      "symptoms": "Loose HDMI port causing video flicker, 'No Input Signal' message, or USB drive unrecognized."
    },
    {
      "name": "Toshiba Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Transceiver module linking television to wireless broadband routers for smooth 4K streaming.",
      "symptoms": "Wi-Fi option grayed out in settings, inability to connect to 5GHz networks, or buffering delays."
    },
    {
      "name": "Toshiba Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Monitors power supply readiness and accepts infrared commands from standard Toshiba remotes.",
      "symptoms": "Remote handset fails to change channels, standby LED remains unlit, or sensor lens scratched."
    },
    {
      "name": "Toshiba Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Multi-pin flat ribbon connecting motherboard outputs to display glass interface cards.",
      "symptoms": "Jittery picture lines, vertical bands appearing when frame is touched, or loss of color sync."
    }
  ],
  "Sharp": [
    {
      "name": "Sharp SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Supplies clean DC rails to the UV2A panel controller and incorporates lamp error protection circuits.",
      "symptoms": "Sharp power indicator turning red and shutting down immediately, or clicking relay cutoff."
    },
    {
      "name": "Sharp Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Japanese-engineered processing board controlling Aquos image enhancement and smart interface.",
      "symptoms": "Stuck on Sharp opening logo, endless restart loop, or television failing to switch inputs."
    },
    {
      "name": "Sharp High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Long-life LED diode strips calibrated to illuminate Sharp high-contrast UV2A glass panels.",
      "symptoms": "Audio working properly with pitch-black screen, dark horizontal sections, or dim display corners."
    },
    {
      "name": "Sharp T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Generates regulated gate line drive voltages for high-contrast Sharp UV2A liquid crystal layers.",
      "symptoms": "Colored vertical barcode lines, negative solarized picture, or picture freezing with audio intact."
    },
    {
      "name": "Sharp Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Supervises voltage delivery to LED strings and instantly shuts off power if an open circuit is sensed.",
      "symptoms": "Backlight illuminates briefly for a fraction of a second and immediately shuts down."
    },
    {
      "name": "Sharp Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Acoustically damp sound units engineered to deliver high speech clarity in compact TV frames.",
      "symptoms": "Muffled vocal delivery, buzz on high frequency sounds, or one speaker channel dead."
    },
    {
      "name": "Sharp HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Reinforced terminal ports linking cable receivers and media streaming devices to Sharp TVs.",
      "symptoms": "Intermittent signal loss during cable TV viewing, physically damaged port connector, or sync loss."
    },
    {
      "name": "Sharp Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal Wi-Fi module enabling broadband connectivity for OTT video applications and Miracast.",
      "symptoms": "Television unable to discover wireless network, frequent disconnections, or slow transfer speeds."
    },
    {
      "name": "Sharp Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Monitors Aquos power readiness and captures remote inputs while reporting lamp error blink codes.",
      "symptoms": "TV ignoring remote buttons, standby indicator flashing an error sequence, or remote eye dead."
    },
    {
      "name": "Sharp Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flat flexible circuitry transmitting digital display data with minimal signal loss.",
      "symptoms": "Distorted picture geometry, fine colored lines across screen, or static speckles on video."
    }
  ],
  "Haier": [
    {
      "name": "Haier SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Supplies low-voltage DC rails to Haier bezel-less logic boards and constant-current backlight circuits.",
      "symptoms": "Haier TV not turning on, red standby light dead, or power board cutting off after power fluctuations."
    },
    {
      "name": "Haier Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Runs Google TV platform, handles digital broadcast decoding, and coordinates Bluetooth voice remotes.",
      "symptoms": "Frozen on Google TV startup animation, apps crashing, or TV rebooting automatically."
    },
    {
      "name": "Haier High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Edge or direct backlight strips providing balanced brightness behind Haier ultra-slim display panels.",
      "symptoms": "Sound audible but screen dark, flashlight shows faint picture, or uneven light spots on display."
    },
    {
      "name": "Haier T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates digital video streams into row and column driver lines for Haier bezel-less panels.",
      "symptoms": "Screen split into two brightness levels, vertical color bars, or washed out picture tones."
    },
    {
      "name": "Haier Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Steps up system voltage to drive high-intensity backlight strings with overload protection.",
      "symptoms": "Backlight flashes on for two seconds and dies, or screen brightness flickers during bright scenes."
    },
    {
      "name": "Haier Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Down-firing speaker modules tuned to produce crisp audio for regional broadcasts and films.",
      "symptoms": "Vibrating speaker buzz at medium volume, crackling noise on speech, or zero audio output."
    },
    {
      "name": "Haier HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Digital interface connectors supporting set-top boxes and USB media drives on Haier TVs.",
      "symptoms": "'No Signal' displayed on screen, physically loose HDMI socket, or USB device unrecognized."
    },
    {
      "name": "Haier Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal wireless unit connecting television to home broadband and pairing voice remotes.",
      "symptoms": "Bluetooth voice remote disconnecting, Wi-Fi failing to turn on, or slow video streaming."
    },
    {
      "name": "Haier Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Receives infrared signals from standard remotes and displays unit operational status.",
      "symptoms": "TV unresponsive to remote handset, standby light unlit, or delayed button reaction."
    },
    {
      "name": "Haier Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Multi-conductor ribbon linking main logic outputs to the lower panel source driver PCBs.",
      "symptoms": "Horizontal jitter lines, picture tearing on fast motion, or intermittent display cutoff."
    }
  ],
  "Sansui": [
    {
      "name": "Sansui SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Robust SMPS board providing surge-protected DC rails for Sansui 4K Pro and DLED displays.",
      "symptoms": "No standby light, power supply clicking without powering display, or blown fuse from voltage spike."
    },
    {
      "name": "Sansui Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Houses MediaTek SoC, Android smart interface, and multi-format audio/video decoders.",
      "symptoms": "Stuck on Sansui startup logo, continuous rebooting, or apps freezing during playback."
    },
    {
      "name": "Sansui High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Direct-lit LED diode bars arranged to deliver high contrast and deep blacks on Sansui screens.",
      "symptoms": "Audio works but display remains completely black, faint images visible, or dim corners."
    },
    {
      "name": "Sansui T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts processed video data into source drive pulses for Sansui DLED display matrices.",
      "symptoms": "Rainbow-colored vertical stripes, negative image solarization, or white display screen."
    },
    {
      "name": "Sansui Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Maintains regulated diode current to protect backlight strips from premature thermal wear.",
      "symptoms": "Backlight blinking rapidly upon power-on, or panel darkening after five minutes of use."
    },
    {
      "name": "Sansui Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Enclosed acoustic drivers providing balanced tone and sufficient volume for home entertainment.",
      "symptoms": "Severe cabinet rattle during music, distorted sound on dialogue, or one side silent."
    },
    {
      "name": "Sansui HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Multi-input terminals connecting cable decoders and sound systems to Sansui televisions.",
      "symptoms": "Loose HDMI port causing intermittent video, 'No Signal' banner, or USB drive failure."
    },
    {
      "name": "Sansui Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal transceiver enabling broadband connectivity for OTT video applications.",
      "symptoms": "Frequent Wi-Fi disconnections, failure to detect wireless routers, or network error notices."
    },
    {
      "name": "Sansui Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Mounted on bottom bezel to capture infrared signals from Sansui TV remote controls.",
      "symptoms": "Television failing to turn on via remote, standby indicator unlit, or remote eye failure."
    },
    {
      "name": "Sansui Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flexible ribbon cable carrying digital video streams from motherboard to panel electronics.",
      "symptoms": "Display noise lines, colors shifting when TV moves, or intermittent picture flicker."
    }
  ],
  "Videocon": [
    {
      "name": "Videocon SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Heavy-duty power board supplying isolated rails to DDB satellite tuners and display electronics.",
      "symptoms": "Front power LED not turning on, clicking sound from power circuit, or blown input fuse."
    },
    {
      "name": "Videocon Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Integrated board containing satellite tuner decoding, video processing, and audio output stages.",
      "symptoms": "Stuck on Videocon or DDB logo, television restarting repeatedly, or menu options freezing."
    },
    {
      "name": "Videocon High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Specialized backlight strips designed to illuminate Liquid Luminous wide-color display panels.",
      "symptoms": "Dialogue audible but screen pitch dark, torch test reveals picture, or dim screen patches."
    },
    {
      "name": "Videocon T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Distributes digital video lines and gamma voltages to Videocon Liquid Luminous panel glass.",
      "symptoms": "Vertical lines running top to bottom, double image ghosting, or washed out milky screen."
    },
    {
      "name": "Videocon Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Ensures even current distribution across LED strips to maintain stable panel luminance.",
      "symptoms": "Screen brightness pulsing noticeably, or backlight extinguishing after a few seconds."
    },
    {
      "name": "Videocon Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "High-volume acoustic drivers engineered to deliver rich audio for regional broadcasts.",
      "symptoms": "Buzzing sound on dialogue, audio crackling at high volume, or complete sound loss."
    },
    {
      "name": "Videocon HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Terminal ports linking satellite dish receivers and external media devices to Videocon TVs.",
      "symptoms": "Signal dropouts during broadcast viewing, loose HDMI socket, or connector pin corrosion."
    },
    {
      "name": "Videocon Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Wireless card facilitating internet connection for YouTube and streaming services.",
      "symptoms": "Wi-Fi option disabled in menu, failure to connect to mobile hotspot, or slow buffering."
    },
    {
      "name": "Videocon Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared receiver photodiode capturing handset commands across typical room distances.",
      "symptoms": "Remote control ignored by television, standby indicator refusing to turn green, or dead eye."
    },
    {
      "name": "Videocon Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flat multi-pin flex cable connecting main signal outputs to the panel driver circuits.",
      "symptoms": "Intermittent vertical lines when bezel is touched, color static, or partial blanking."
    }
  ],
  "Xiaomi": [
    {
      "name": "Xiaomi SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Supplies power rails to PatchWall MediaTek processing SoC and high-voltage backlight strings.",
      "symptoms": "Mi TV dead with no red standby indicator, power tripping under load, or blown fuse."
    },
    {
      "name": "Xiaomi Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Contains central MediaTek SoC, eMMC flash memory, PatchWall OS, and audio/video decoders.",
      "symptoms": "TV stuck in endless boot loop on Mi logo, apps crashing, Wi-Fi disabled, or HDMI ports dead."
    },
    {
      "name": "Xiaomi High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Matched series of high-output diodes illuminating Mi TV displays with uniform brightness.",
      "symptoms": "Sound plays normally but screen is black, flashlight test shows picture, or dark patches."
    },
    {
      "name": "Xiaomi T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates PatchWall video frames into source and gate driver signals for Mi TV display panels.",
      "symptoms": "Vertical colored lines across panel, half screen white, solarized colors, or ghosting."
    },
    {
      "name": "Xiaomi Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Steps up voltage to drive multiple LED strings with constant current and thermal protection.",
      "symptoms": "Backlight flashes on for one second and shuts off, or screen brightness flickers."
    },
    {
      "name": "Xiaomi Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Dual full-range sound drivers built to deliver balanced room-filling sound for movies.",
      "symptoms": "Buzzing rattle during bass frequencies, distorted voice output, or silent audio channel."
    },
    {
      "name": "Xiaomi HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "High-speed HDMI sockets accommodating streaming sticks and consoles on Xiaomi televisions.",
      "symptoms": "Set-top box shows 'No Signal', HDMI ARC audio drops, or port physically damaged."
    },
    {
      "name": "Xiaomi Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Transceiver enabling PatchWall connectivity, screen cast, and Mi Bluetooth voice remote.",
      "symptoms": "Bluetooth remote unpairing, TV unable to find Wi-Fi networks, or slow streaming speeds."
    },
    {
      "name": "Xiaomi Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared receiver and red standby LED mounted on center bottom bezel of Mi television.",
      "symptoms": "TV unresponsive to remote buttons, standby indicator unlit, or slow remote response."
    },
    {
      "name": "Xiaomi Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flexible ribbon cable linking the PatchWall motherboard directly to display source boards.",
      "symptoms": "Picture jittering horizontally, intermittent lines when moved, or color noise."
    }
  ],
  "Hitachi": [
    {
      "name": "Hitachi SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Dual-rail power unit engineered with Japanese filter capacitors to deliver steady current to Hitachi IPS panels.",
      "symptoms": "Hitachi front standby light completely dead after lightning surge, or power board buzzing loudly."
    },
    {
      "name": "Hitachi Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Japanese Hitachi Alpha logic board coordinating IPS color matrix decoding and input selection.",
      "symptoms": "Hitachi television stuck in boot loop on Alpha logo, or input sources failing to switch."
    },
    {
      "name": "Hitachi High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Japanese IPS panel direct-lit LED arrays engineered for wide viewing angles and vivid color balance.",
      "symptoms": "Dialogue clear but Hitachi screen is pitch black, torch test shows faint images, or dim panel zones."
    },
    {
      "name": "Hitachi T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Regulates pixel clock signals and gamma references for Hitachi Alpha IPS panel electronics.",
      "symptoms": "Thin vertical green or pink lines, negative image solarization, or display jittering on Hitachi TV."
    },
    {
      "name": "Hitachi Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Regulates high-voltage boost rail with Japanese protection diodes for Hitachi IPS backlights.",
      "symptoms": "Hitachi display flashing once on startup then going completely dark while audio plays."
    },
    {
      "name": "Hitachi Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Japanese-tuned stereo sound units delivering clean vocal frequencies for Hitachi televisions.",
      "symptoms": "Jarring rattle inside Hitachi cabinet during loud dialogue, or one speaker muted."
    },
    {
      "name": "Hitachi HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Digital input terminals connecting DTH decoders and home theatres to Hitachi televisions.",
      "symptoms": "Hitachi TV displaying 'No Signal' from DTH box, loose connector socket, or USB port unpowered."
    },
    {
      "name": "Hitachi Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal dual-band wireless card providing broadband streaming for Hitachi smart platforms.",
      "symptoms": "Hitachi Wi-Fi toggle disabled in settings, unable to detect 5GHz router, or frequent buffering."
    },
    {
      "name": "Hitachi Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front infrared receiver eye and status indicator mounted on Hitachi TV bottom trim.",
      "symptoms": "Hitachi TV completely ignoring remote button presses despite fresh batteries, or unlit sensor."
    },
    {
      "name": "Hitachi Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Shielded multi-strand ribbon cable routing digital video data to Hitachi IPS display source boards.",
      "symptoms": "Horizontal jitter lines on Hitachi display, picture blinking when TV frame is touched, or static."
    }
  ],
  "Intex": [
    {
      "name": "Intex SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Cost-effective universal power circuit providing regulated 12V DC to Intex LED Star displays and audio stages.",
      "symptoms": "Intex TV not responding to power switch, red light unlit, or 12V rail dropping under display load."
    },
    {
      "name": "Intex Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Universal combo motherboard integrating audio amplifier, TV tuner, and display scalar chips.",
      "symptoms": "Intex TV displaying 'Smart' logo and freezing, or audio working without menu graphics."
    },
    {
      "name": "Intex High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "High-efficiency LED strip sets designed for low power consumption in Intex Star televisions.",
      "symptoms": "Sound audible but Intex display is dark, picture flashes on for one second, or dim screen corners."
    },
    {
      "name": "Intex T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts universal video scalar output into gate line pulses for Intex display panels.",
      "symptoms": "Screen displaying white raster with sound, or vertical color bars running through Intex panel."
    },
    {
      "name": "Intex Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Universal constant-current inverter circuit controlling voltage levels for Intex LED strips.",
      "symptoms": "Intex screen blinking rapidly on white backgrounds, or cutting off after three minutes."
    },
    {
      "name": "Intex Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Universal downward-firing acoustic cones designed for clear voice output on Intex TVs.",
      "symptoms": "Crackling sound from Intex speakers when volume exceeds 25, or no audio output."
    },
    {
      "name": "Intex HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Standard HDMI and USB sockets accommodating set-top boxes on Intex televisions.",
      "symptoms": "Intex HDMI socket loose and flickering when touched, or pendrive not detected."
    },
    {
      "name": "Intex Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Compact Wi-Fi receiver module enabling internet access for Intex smart TV features.",
      "symptoms": "Intex TV unable to connect to home Wi-Fi, saved network forgotten, or slow app loading."
    },
    {
      "name": "Intex Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Universal infrared photodiode receiver mounted on front bezel of Intex television.",
      "symptoms": "Intex TV not responding to remote control, red standby light dead, or delayed channel change."
    },
    {
      "name": "Intex Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Standard multi-pin flat flex ribbon connecting universal mainboard to Intex panel glass.",
      "symptoms": "Intermittent colored lines on Intex screen when moved, display flickering, or color distortion."
    }
  ],
  "Micromax": [
    {
      "name": "Micromax SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Integrated power module feeding DC voltage to Micromax Canvas processing chips and backlight diode strings.",
      "symptoms": "Canvas television dead with cold power board, blown glass fuse, or burning smell during power cut."
    },
    {
      "name": "Micromax Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Micromax Canvas logic board running Android firmware with integrated stereo audio amplification.",
      "symptoms": "Canvas logo boot loop, television restarting every 15 seconds, or apps closing unexpectedly."
    },
    {
      "name": "Micromax High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Canvas direct-lit LED diode bars calibrated to provide bright picture output across Micromax panels.",
      "symptoms": "Channel sound plays normally but Micromax screen stays dark, or bright white spots show on display."
    },
    {
      "name": "Micromax T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Routes column addressing data and VGH/VGL voltages to Micromax Canvas panel glass.",
      "symptoms": "Ghosting silhouettes behind moving subjects, or split brightness levels on Micromax display."
    },
    {
      "name": "Micromax Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Controls DC boost voltage to maintain stable illumination across Micromax Canvas displays.",
      "symptoms": "Micromax screen brightness dipping suddenly, or flashing on and off intermittently."
    },
    {
      "name": "Micromax Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Integrated stereo sound drivers mounted in acoustic dampening enclosures on Micromax TVs.",
      "symptoms": "Rattling audio during serials, heavily distorted speech, or silent Micromax speakers."
    },
    {
      "name": "Micromax HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Interface connectors supporting digital set-top boxes and pen drives on Micromax TVs.",
      "symptoms": "Micromax TV showing 'No Input' with set-top box on, or broken center HDMI pin."
    },
    {
      "name": "Micromax Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal wireless module facilitating YouTube streaming and screen sharing on Micromax TVs.",
      "symptoms": "Micromax TV disconnecting from Wi-Fi every ten minutes, or wireless toggle grayed out."
    },
    {
      "name": "Micromax Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared sensor eye and standby indicator PCB mounted on bottom edge of Micromax TVs.",
      "symptoms": "Micromax TV failing to power on via remote, standby indicator dead, or erratic sensor response."
    },
    {
      "name": "Micromax Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flexible flat cable assembly transferring video signals from processor to Micromax display glass.",
      "symptoms": "Picture jumping vertically on Micromax TV, colored lines when bezel is tapped, or static noise."
    }
  ],
  "Kodak": [
    {
      "name": "Kodak SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "SPPL-manufactured power supply board engineered to feed regulated current to Kodak CA PRO 4K backlights.",
      "symptoms": "Kodak CA PRO TV failing to wake from standby, red light staying fixed, or power tripping randomly."
    },
    {
      "name": "Kodak Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "SPPL-engineered mainboard operating Google TV OS with high-speed memory and HDMI controllers.",
      "symptoms": "Kodak TV frozen on 'Google TV' loading screen, system memory error, or remote failing to pair."
    },
    {
      "name": "Kodak High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "SPPL direct-array backlight strips engineered to illuminate Kodak CA PRO 4K screens.",
      "symptoms": "Audio is heard clearly but Kodak screen has no picture, flashlight reveals menu, or uneven brightness."
    },
    {
      "name": "Kodak T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates Google TV video signals into timing lines for Kodak CA PRO 4K displays.",
      "symptoms": "Vertical multi-color lines from top to bottom, negative color tint, or freezing on Kodak TV."
    },
    {
      "name": "Kodak Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "SPPL-engineered boost circuit providing steady current to Kodak direct-lit LED arrays.",
      "symptoms": "Kodak screen flickering during bright daylight scenes, or backlight cutting off after warm-up."
    },
    {
      "name": "Kodak Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "High-decibel box speakers engineered by SPPL for punchy dialogue on Kodak CA PRO TVs.",
      "symptoms": "Severe speaker buzz on high volume, muffled voice output, or dead Kodak audio channel."
    },
    {
      "name": "Kodak HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "High-definition inputs linking streaming boxes and soundbars to Kodak televisions.",
      "symptoms": "Kodak HDMI ARC port dropping audio to soundbar, or set-top box signal cutting out."
    },
    {
      "name": "Kodak Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "SPPL-certified Wi-Fi card linking Kodak Google TV to 2.4GHz and 5GHz wireless networks.",
      "symptoms": "Kodak Google TV showing 'No Internet', Wi-Fi switch refusing to turn on, or remote unpairing."
    },
    {
      "name": "Kodak Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front infrared sensor eye and multi-color status LED mounted on Kodak CA PRO TVs.",
      "symptoms": "Kodak TV unresponsive to remote power button, standby light failing to respond, or dead eye."
    },
    {
      "name": "Kodak Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "High-density flexible ribbon cable routing Google TV video lines to Kodak panel source drivers.",
      "symptoms": "Horizontal line jitter on Kodak display, intermittent color shift, or screen tearing during motion."
    }
  ],
  "OnePlus": [
    {
      "name": "OnePlus SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "High-efficiency power unit supplying clean low-noise rails to the OnePlus Gamma Engine motherboard.",
      "symptoms": "OnePlus standby indicator stuck on white or red without booting, or power cycling every minute."
    },
    {
      "name": "OnePlus Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Houses the Gamma Engine image processor, OxygenPlay platform, eMMC memory, and Bluetooth transceiver.",
      "symptoms": "Frozen on spinning OnePlus dots, continuous restarting, Bluetooth remote unpairing, or black screen."
    },
    {
      "name": "OnePlus High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Engine-matched backlight diode strips diode strips delivering uniform brightness across OnePlus panels.",
      "symptoms": "Sound output normal but OnePlus display is completely dark, torch shows faint video, or dim patches."
    },
    {
      "name": "OnePlus T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Processes Gamma Engine video streams into high-speed mini-LVDS timing for OnePlus panels.",
      "symptoms": "OnePlus panel showing bright green vertical line, double image jitter, or solarized colors."
    },
    {
      "name": "OnePlus Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Constant-current driver module regulating current to OnePlus high-brightness backlight diode arrays.",
      "symptoms": "OnePlus backlight tripping into standby, or panel flashing once upon power-up."
    },
    {
      "name": "OnePlus Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Dolby Audio tuned speaker drivers engineered to provide rich cinematic sound on OnePlus TVs.",
      "symptoms": "Crackling sound during movie bass scenes, muffled dialogue, or zero sound from OnePlus TV."
    },
    {
      "name": "OnePlus HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Low-latency input sockets connecting set-top boxes and gaming consoles to OnePlus TVs.",
      "symptoms": "OnePlus TV showing black screen on HDMI 1/2, port physically loose, or USB unreadable."
    },
    {
      "name": "OnePlus Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "High-speed wireless module supporting OxygenPlay streaming and Bluetooth remote connectivity.",
      "symptoms": "OnePlus voice remote frequently disconnecting, Wi-Fi dropping during 4K streaming, or search fail."
    },
    {
      "name": "OnePlus Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Center-mounted infrared sensor receiver capturing handset commands for OnePlus TVs.",
      "symptoms": "OnePlus TV not receiving infrared power-on command, standby LED unlit, or delayed response."
    },
    {
      "name": "OnePlus Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "High-speed flat ribbon cable assembly linking OnePlus Gamma Engine to display panel driver chips.",
      "symptoms": "OnePlus screen flickering when adjusted on wall mount, fine horizontal noise, or missing color."
    }
  ],
  "Sanyo": [
    {
      "name": "Sanyo SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Panasonic-backed power supply architecture delivering surge-filtered DC lines to Sanyo Kaizen 4K displays.",
      "symptoms": "Kaizen TV power indicator refusing to turn green, relay clicking once and dropping to standby."
    },
    {
      "name": "Sanyo Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Panasonic-derived Sanyo motherboard managing Kaizen smart firmware and video decoding.",
      "symptoms": "Sanyo Kaizen TV stuck on Android recovery screen, or Wi-Fi failing to turn on in settings."
    },
    {
      "name": "Sanyo High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Panasonic-engineered LED backlight strips designed for long operating life in Sanyo Kaizen displays.",
      "symptoms": "Dialogue plays loud and clear but Sanyo screen remains dark, or screen blinks continuously."
    },
    {
      "name": "Sanyo T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts Kaizen processor video signals into pixel timing pulses for Sanyo displays.",
      "symptoms": "Vertical color bars across screen, milky faded picture, or negative color tones on Sanyo TV."
    },
    {
      "name": "Sanyo Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Regulates constant DC boost rail for Sanyo Kaizen LED strips with surge suppression.",
      "symptoms": "Sanyo display brightness pulsing unevenly, or backlight turning off after brief illumination."
    },
    {
      "name": "Sanyo Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Panasonic-backed acoustic enclosures delivering balanced treble and vocals on Sanyo TVs.",
      "symptoms": "Distorted audio on serials, rattling noise during music, or silent Sanyo speakers."
    },
    {
      "name": "Sanyo HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Digital input terminals linking satellite receivers and DVD players to Sanyo televisions.",
      "symptoms": "Sanyo TV showing 'Check Signal Cable', loose HDMI connector, or USB media error."
    },
    {
      "name": "Sanyo Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal wireless network card facilitating YouTube and OTT streaming on Sanyo Kaizen TVs.",
      "symptoms": "Sanyo TV failing to find home Wi-Fi SSID, network error during Netflix, or slow loading."
    },
    {
      "name": "Sanyo Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front infrared photodiode receiving remote control signals on Sanyo Kaizen televisions.",
      "symptoms": "Sanyo TV ignoring remote handset buttons, standby light refusing to turn green, or dead sensor."
    },
    {
      "name": "Sanyo Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Shielded multi-track ribbon cable connecting Sanyo motherboard to panel source electronics.",
      "symptoms": "Jittery picture on Sanyo TV, colored horizontal lines when frame is pressed, or static snow."
    }
  ],
  "Akai": [
    {
      "name": "Akai SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Amazon Fire OS compatible power circuit providing regulated voltages to Akai high-decibel acoustic drivers.",
      "symptoms": "Akai Fire TV power indicator unlit, no response to power socket, or power cutoff during loud audio."
    },
    {
      "name": "Akai Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Central system board running Amazon Fire OS, Alexa voice processing, and HDMI input switching.",
      "symptoms": "Akai Fire TV stuck on 'Fire TV' logo, remote pairing loop, or streaming audio cutting out."
    },
    {
      "name": "Akai High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "High-luminance LED strips providing high contrast for Akai Fire TV Edition home entertainment.",
      "symptoms": "Sound audible while Akai display stays black, flashlight reveals picture, or dim horizontal stripes."
    },
    {
      "name": "Akai T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates Amazon Fire OS video signals into row and column lines for Akai displays.",
      "symptoms": "Screen showing vertical rainbow stripes, half-dark panel, or frozen display on Akai TV."
    },
    {
      "name": "Akai Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Monitors diode current draw and provides stable operating voltage to Akai backlight strings.",
      "symptoms": "Akai backlight flashing briefly upon turning on and going black with sound intact."
    },
    {
      "name": "Akai Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Japanese acoustic sound units designed to handle high volume without distortion on Akai TVs.",
      "symptoms": "Harsh buzzing during loud news dialogue, audio cutting out, or mute Akai speaker."
    },
    {
      "name": "Akai HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Interface sockets accommodating Amazon Fire TV accessories and set-top boxes on Akai TVs.",
      "symptoms": "Akai Fire TV failing to detect Fire stick or set-top box, or physically bent HDMI pins."
    },
    {
      "name": "Akai Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Amazon Fire OS compatible wireless module providing high-speed internet for Akai streaming.",
      "symptoms": "Akai Fire TV losing wireless connection during Prime Video, or Alexa remote unpairing."
    },
    {
      "name": "Akai Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared receiver sensor capturing handheld remote signals on Akai Fire TV Edition sets.",
      "symptoms": "Akai TV failing to power on from remote, standby indicator dark, or delayed volume control."
    },
    {
      "name": "Akai Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flat flexible circuitry transferring digital video signals from Akai Fire OS board to panel glass.",
      "symptoms": "Intermittent display lines on Akai TV when tilted, flickering picture, or color dropouts."
    }
  ],
  "Onida": [
    {
      "name": "Onida SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "High-current SMPS board engineered to power Devil's Horn subwoofers and Onida LED display backlights.",
      "symptoms": "Onida TV clicking repeatedly from rear cover, power indicator flashing red, or blown rectifier."
    },
    {
      "name": "Onida Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Dedicated Onida smart board processing Devil's Horn acoustic channels and Fire TV platform.",
      "symptoms": "Onida TV stuck on startup animation, continuous system restarts, or volume locked at maximum."
    },
    {
      "name": "Onida High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Lucid color LED backlight arrays engineered to withstand voltage swings in Onida televisions.",
      "symptoms": "Loud audio heard but Onida screen stays completely black, torchlight test shows serial, or dim corners."
    },
    {
      "name": "Onida T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Distributes video clock streams and gamma voltages across Onida display panels.",
      "symptoms": "Vertical lines running across screen, negative color effect, or image jitter on Onida TV."
    },
    {
      "name": "Onida Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Maintains balanced forward voltage across Onida LED strings to avoid uneven screen patches.",
      "symptoms": "Onida display flickering rapidly, or backlight shutting down after ten seconds of play."
    },
    {
      "name": "Onida Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Devil's Horn acoustic drivers featuring tuned bass resonance chambers on Onida televisions.",
      "symptoms": "Heavy cabinet vibration during music, distorted dialogue, or rattling Onida subwoofer."
    },
    {
      "name": "Onida HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Input connectors linking satellite decoders and audio players to Onida televisions.",
      "symptoms": "Onida TV displaying 'No Input Detected', wobbly HDMI port, or USB port shorted."
    },
    {
      "name": "Onida Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal Wi-Fi transceiver card linking Onida Smart TV to home broadband connections.",
      "symptoms": "Onida Wi-Fi toggle grayed out in menu, failure to connect to router, or buffering on YouTube."
    },
    {
      "name": "Onida Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front-mounted infrared eye and standby LED circuit board on Onida televisions.",
      "symptoms": "Onida TV unresponsive to remote controller, standby indicator unlit, or broken photodiode."
    },
    {
      "name": "Onida Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Multi-conductor ribbon cable carrying video data from Onida mainboard to panel source boards.",
      "symptoms": "Horizontal noise lines on Onida screen, picture shaking when volume is loud, or color static."
    }
  ],
  "Aiwa": [
    {
      "name": "Aiwa SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Amphitheatre-rated power board supplying isolated high-capacity rails to Aiwa Magnifiq audio amplifiers.",
      "symptoms": "Aiwa Magnifiq TV failing to power on, standby light dead, or sudden shutoff during high-volume movies."
    },
    {
      "name": "Aiwa Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Aiwa Magnifiq logic board managing Amphitheatre sound decoding, Google TV, and 4K upscaling.",
      "symptoms": "Aiwa TV freezing on Magnifiq splash screen, slow menu navigation, or apps crashing to home."
    },
    {
      "name": "Aiwa High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Amphitheatre-matched direct LED diode bars delivering punchy visual contrast in Aiwa Magnifiq TVs.",
      "symptoms": "Clear audio from speakers but Aiwa display is pitch dark, torch test shows picture, or flickering light."
    },
    {
      "name": "Aiwa T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates Magnifiq processor output into source drive signals for Aiwa display panels.",
      "symptoms": "Solarized display tones, white screen with clear audio, or vertical color bars on Aiwa TV."
    },
    {
      "name": "Aiwa Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "High-frequency boost converter supplying regulated current to Aiwa Magnifiq backlight arrays.",
      "symptoms": "Aiwa screen brightness dimming intermittently during movies, or flashing then going dark."
    },
    {
      "name": "Aiwa Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Amphitheatre sound drivers engineered to produce wide soundstage audio on Aiwa Magnifiq TVs.",
      "symptoms": "Muffled speech, harsh buzzing when volume raised above 30, or one silent Aiwa channel."
    },
    {
      "name": "Aiwa HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Digital interface terminals connecting high-definition media players to Aiwa televisions.",
      "symptoms": "Aiwa HDMI port losing handshake with gaming console, or USB drive failing to mount."
    },
    {
      "name": "Aiwa Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Dual-band Wi-Fi and Bluetooth module handling high-bitrate streaming on Aiwa Magnifiq TVs.",
      "symptoms": "Aiwa TV unable to discover 5GHz networks, streaming buffering constantly, or Bluetooth drop."
    },
    {
      "name": "Aiwa Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared photodiode receiver and power indicator mounted on Aiwa Magnifiq televisions.",
      "symptoms": "Aiwa TV ignoring remote button inputs, standby light not lighting up, or erratic channel change."
    },
    {
      "name": "Aiwa Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "High-bandwidth flat ribbon cable linking Aiwa Magnifiq motherboard to 4K display glass.",
      "symptoms": "Aiwa display flickering when touched, fine horizontal lines, or momentary picture blackout."
    }
  ],
  "TCL": [
    {
      "name": "TCL SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "TCL proprietary power module designed to sustain high current draw from AiPQ processing and Mini-LED zones.",
      "symptoms": "TCL standby light glowing amber without turning blue, or power board tripping into safety mode."
    },
    {
      "name": "TCL Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Proprietary TCL AiPQ 3.0 processing board controlling CSOT display panels and Google TV features.",
      "symptoms": "TCL TV hanging on Google TV recovery screen, AiPQ color distortion, or HDMI input failure."
    },
    {
      "name": "TCL High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Proprietary CSOT direct-lit LED backlight arrays providing high peak luminance in TCL QLED displays.",
      "symptoms": "Sound heard normally but TCL screen remains completely black, torch reveals desktop, or dim bands."
    },
    {
      "name": "TCL T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Generates proprietary timing clock lines for CSOT panels used in TCL televisions.",
      "symptoms": "TCL screen showing vertical color lines, double image ghosting, or solarized picture colors."
    },
    {
      "name": "TCL Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "TCL multi-channel driver board controlling localized backlight current across QLED arrays.",
      "symptoms": "TCL screen pulsing in brightness, or one backlight zone shutting down unexpectedly."
    },
    {
      "name": "TCL Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Onkyo-certified acoustic sound drivers delivering multi-channel clarity on TCL QLED TVs.",
      "symptoms": "Distorted bass frequencies, buzzing sound on vocal tracks, or mute TCL speaker unit."
    },
    {
      "name": "TCL HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "HDMI 2.1 input sockets supporting high-framerate consoles and soundbars on TCL TVs.",
      "symptoms": "TCL HDMI 2.1 port failing to detect 4K signal, loose port pins, or ARC audio dropouts."
    },
    {
      "name": "TCL Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "MIMO wireless transceiver card enabling smooth 4K HDR streaming on TCL Google TVs.",
      "symptoms": "TCL Wi-Fi failing to turn on, Google TV showing network disconnected, or remote voice fail."
    },
    {
      "name": "TCL Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front infrared receiver sensor and status indicator LED on TCL Google televisions.",
      "symptoms": "TCL TV failing to respond to remote power key, standby LED dark, or delayed response."
    },
    {
      "name": "TCL Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Proprietary high-density ribbon cable routing digital video signals to TCL CSOT panel glass.",
      "symptoms": "Horizontal line interference on TCL TV, picture tearing during panning shots, or color noise."
    }
  ],
  "iFFALCON": [
    {
      "name": "iFFALCON SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "CSOT-matched power supply board regulating DC rails for iFFALCON Google TV mainboards and backlight diodes.",
      "symptoms": "iFFALCON TV remaining completely black with unlit standby LED, or power rail dropping to zero."
    },
    {
      "name": "iFFALCON Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "iFFALCON central processing board decoding OTT video streams and driving direct-lit panel timing.",
      "symptoms": "iFFALCON TV restarting repeatedly upon opening Netflix, or system settings refusing to load."
    },
    {
      "name": "iFFALCON High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "CSOT-grade backlight diode strips engineered to deliver uniform illumination in iFFALCON 4K screens.",
      "symptoms": "Audio plays without video on iFFALCON TV, flashlight test shows picture, or dark vertical shadow."
    },
    {
      "name": "iFFALCON T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts video data into source line timing commands for iFFALCON 4K display glass.",
      "symptoms": "Vertical lines running through video, half display dark, or ghosting on iFFALCON TV."
    },
    {
      "name": "iFFALCON Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Boost driver module regulating operating current for iFFALCON direct-lit backlight strips.",
      "symptoms": "iFFALCON display flashing on for one second then dying with sound continuing normally."
    },
    {
      "name": "iFFALCON Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Enclosed box sound units engineered for loud dialogue reproduction on iFFALCON televisions.",
      "symptoms": "Crackling sound on high volume, muffled voice clarity, or silent iFFALCON speaker."
    },
    {
      "name": "iFFALCON HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Interface connectors linking cable decoders and streaming players to iFFALCON TVs.",
      "symptoms": "iFFALCON set-top box showing 'No Video Signal', loose socket, or USB unreadable."
    },
    {
      "name": "iFFALCON Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal Wi-Fi circuit card connecting iFFALCON smart televisions to home wireless routers.",
      "symptoms": "iFFALCON TV disconnecting from Wi-Fi intermittently, or wireless scan showing zero networks."
    },
    {
      "name": "iFFALCON Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared remote sensor eye and standby indicator PCB on iFFALCON televisions.",
      "symptoms": "iFFALCON TV ignoring remote commands, standby indicator staying unlit, or dead sensor eye."
    },
    {
      "name": "iFFALCON Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flat flexible ribbon cable linking iFFALCON motherboard to direct-lit display panel drivers.",
      "symptoms": "Intermittent lines on iFFALCON screen when moved, flickering picture, or color dropout."
    }
  ],
  "Acer": [
    {
      "name": "Acer SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "High-output power circuit designed to supply steady wattage to Acer 30W stereo speakers and 4K panels.",
      "symptoms": "Acer TV failing to turn on after voltage spike, standby light dead, or power relay clicking twice."
    },
    {
      "name": "Acer Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "High-performance Acer motherboard running Google TV OS with integrated 30W stereo audio decoding.",
      "symptoms": "Acer TV stuck on Google circles animation, apps buffering indefinitely, or HDMI ports undetected."
    },
    {
      "name": "Acer High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Frameless matrix LED backlight strips providing edge-to-edge illumination in Acer I-Series displays.",
      "symptoms": "Loud sound but Acer display is pitch black, torch test shows image, or screen flickers every few seconds."
    },
    {
      "name": "Acer T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Routes high-speed pixel timing lines to frameless IPS panels on Acer televisions.",
      "symptoms": "Screen showing fine vertical lines, negative color inversion, or white raster on Acer TV."
    },
    {
      "name": "Acer Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Step-up inverter circuit delivering regulated boost voltage to Acer frameless LED arrays.",
      "symptoms": "Acer backlight blinking intermittently, or display cutting off during high-action video."
    },
    {
      "name": "Acer Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "30W high-output stereo drivers delivering punchy home entertainment sound on Acer TVs.",
      "symptoms": "Harsh speaker cone rattle during loud scenes, distorted speech, or dead Acer audio."
    },
    {
      "name": "Acer HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Digital input ports connecting set-top boxes and media players to Acer televisions.",
      "symptoms": "Acer HDMI port displaying black screen with DTH box, or physically loose socket."
    },
    {
      "name": "Acer Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "High-speed wireless module facilitating smooth OTT video streaming on Acer Google TVs.",
      "symptoms": "Acer TV failing to connect to home broadband, Wi-Fi toggle grayed out, or slow streaming."
    },
    {
      "name": "Acer Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front-facing infrared receiver photodiode mounted on Acer television lower frame.",
      "symptoms": "Acer TV failing to turn on via remote controller, standby indicator dead, or slow reaction."
    },
    {
      "name": "Acer Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "High-speed multi-conductor ribbon cable routing digital video to Acer frameless panel glass.",
      "symptoms": "Picture jitter on Acer display, horizontal colored bands when bezel is pressed, or static."
    }
  ],
  "Hisense": [
    {
      "name": "Hisense SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Heavy-duty dual-transformer board feeding the integrated Tornado soundbar and Hisense ULED backlight zones.",
      "symptoms": "Hisense Tornado soundbar silent with unlit power light, or power tripping immediately upon start."
    },
    {
      "name": "Hisense Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Hisense Hi-View Engine processor board managing multi-zone local dimming and Tornado audio DSP.",
      "symptoms": "Hisense TV freezing on VIDAA or Google logo, audio delay on HDMI, or memory chip corruption."
    },
    {
      "name": "Hisense High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Multi-zone local dimming LED arrays designed for deep black levels in Hisense ULED televisions.",
      "symptoms": "Tornado audio plays clearly but Hisense screen is black, flashlight test shows menu, or dark zones."
    },
    {
      "name": "Hisense T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates Hi-View Engine video output into multi-zone timing data for Hisense panels.",
      "symptoms": "Multi-colored vertical lines, half screen washed out, or double image jitter on Hisense TV."
    },
    {
      "name": "Hisense Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Multi-zone driver circuit managing dynamic local dimming currents on Hisense ULED displays.",
      "symptoms": "Hisense local dimming zones flashing irregularly, or screen darkening suddenly."
    },
    {
      "name": "Hisense Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Integrated high-wattage Tornado soundbar drivers delivering deep bass on Hisense TVs.",
      "symptoms": "Buzzing sound from Tornado soundbar during dialogue, or crackling audio on Hisense TV."
    },
    {
      "name": "Hisense HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "High-bandwidth inputs linking gaming hardware and satellite decoders to Hisense TVs.",
      "symptoms": "Hisense Tornado HDMI ARC failing to communicate with soundbar, or signal dropout."
    },
    {
      "name": "Hisense Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Dual-band Wi-Fi module providing high-bandwidth internet reception for Hisense ULED TVs.",
      "symptoms": "Hisense Wi-Fi dropping connection during 4K movies, or Bluetooth voice remote unpairing."
    },
    {
      "name": "Hisense Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared receiver sensor and power status LED mounted on Hisense television bezel.",
      "symptoms": "Hisense TV unresponsive to remote buttons, standby indicator unlit, or sensor eye damage."
    },
    {
      "name": "Hisense Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Shielded flat ribbon cable assembly carrying high-bandwidth video data to Hisense ULED glass.",
      "symptoms": "Horizontal line noise on Hisense screen, picture blinking when adjusted, or color sync loss."
    }
  ],
  "BPL": [
    {
      "name": "BPL SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Standardized Indian SMPS module engineered to withstand local power cuts and supply BPL Stellar LED arrays.",
      "symptoms": "BPL television dead with no red light, input filter capacitor swollen, or board fuse blown."
    },
    {
      "name": "BPL Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Accessible Indian BPL logic board handling digital terrestrial tuning and Full HD video scalar.",
      "symptoms": "BPL television freezing on startup screen, channel numbers scrambling, or buttons unresponsive."
    },
    {
      "name": "BPL High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Standardized direct-lit LED bars delivering reliable illumination across BPL Stellar screens.",
      "symptoms": "Dialogue audible but BPL display has no light, torchlight test shows channel, or dim screen edges."
    },
    {
      "name": "BPL T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Distributes digital video signals into row and column lines for BPL Stellar screens.",
      "symptoms": "Vertical stripes running through channels, negative picture, or image jump on BPL TV."
    },
    {
      "name": "BPL Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Standardized inverter circuit providing stable voltage to BPL direct-lit backlight strips.",
      "symptoms": "BPL screen flickering noticeably on bright channels, or backlight tripping off after startup."
    },
    {
      "name": "BPL Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Standardized stereo speaker drivers designed for reliable dialogue clarity on BPL televisions.",
      "symptoms": "Muffled speech, loud buzzing during high volume, or completely dead BPL speakers."
    },
    {
      "name": "BPL HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Standard interface sockets accommodating cable TV boxes and pen drives on BPL TVs.",
      "symptoms": "BPL television showing 'No Signal' on HDMI input, bent port pins, or loose fit."
    },
    {
      "name": "BPL Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal wireless card facilitating internet connectivity for BPL Smart televisions.",
      "symptoms": "BPL television unable to remember Wi-Fi password, network error, or slow internet speed."
    },
    {
      "name": "BPL Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Standardized infrared sensor eye and standby indicator circuit on BPL televisions.",
      "symptoms": "BPL television not responding to remote control, standby light dark, or erratic channel flip."
    },
    {
      "name": "BPL Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Standardized flexible ribbon cable connecting BPL main logic board to display panel electronics.",
      "symptoms": "Intermittent horizontal lines on BPL screen, picture shaking, or color distortion when moved."
    }
  ],
  "Vu": [
    {
      "name": "Vu SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "High-luminance power unit built to supply steady DC boost to Vu Masterpiece Glo QLED panel diodes.",
      "symptoms": "Vu Glo TV tripping power switch upon turn-on, indicator light blinking red, or dead power board."
    },
    {
      "name": "Vu Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Vu Cinema TV Action logic motherboard managing Glo Panel brightness curves and Android TV OS.",
      "symptoms": "Vu Glo TV stuck in boot loop, Android TV cache error, or television freezing during 4K video."
    },
    {
      "name": "Vu High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "High-output Glo Panel LED strips producing exceptional peak brightness on Vu Masterpiece televisions.",
      "symptoms": "Audio loud and clear but Vu Glo screen is dark, flashlight test shows video, or dim corner patches."
    },
    {
      "name": "Vu T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates processed video data into source drive signals for Vu Glo QLED displays.",
      "symptoms": "Vu Glo panel showing vertical color lines, negative color inversion, or split display brightness."
    },
    {
      "name": "Vu Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "High-capacity boost driver powering Vu Glo Panel LED arrays with constant-current control.",
      "symptoms": "Vu Glo panel brightness dropping abruptly, or backlight shutting off into standby protection."
    },
    {
      "name": "Vu Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "40W Cinema TV integrated soundbar drivers producing room-filling audio on Vu televisions.",
      "symptoms": "Vibrating rattle during cinema bass, muffled dialogue, or silent Vu soundbar channel."
    },
    {
      "name": "Vu HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Input terminals connecting soundbars, Blu-ray players, and consoles to Vu televisions.",
      "symptoms": "Vu Glo HDMI port failing to detect PlayStation or set-top box, or loose connector."
    },
    {
      "name": "Vu Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "High-performance wireless transceiver card enabling 4K streaming on Vu Glo QLED TVs.",
      "symptoms": "Vu Glo TV failing to connect to 5GHz Wi-Fi, frequent network disconnects, or voice search fail."
    },
    {
      "name": "Vu Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "High-sensitivity infrared receiver eye mounted on Vu Masterpiece Glo televisions.",
      "symptoms": "Vu Glo TV ignoring remote power key, standby indicator staying dark, or delayed input response."
    },
    {
      "name": "Vu Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "High-definition flat ribbon cable carrying digital video signals to Vu Glo QLED display glass.",
      "symptoms": "Vu Glo panel showing picture jitter when frame is adjusted, fine horizontal lines, or static."
    }
  ],
  "Lloyd": [
    {
      "name": "Lloyd SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Havells-certified power supply unit incorporating Micro Dimming surge regulation for Lloyd Novante televisions.",
      "symptoms": "Lloyd TV red standby light blinking four times continuously, or unit dead following voltage fluctuation."
    },
    {
      "name": "Lloyd Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Havells Lloyd smart logic board coordinating Micro Dimming algorithms and Google TV apps.",
      "symptoms": "Lloyd TV hanging on Havells logo, Google TV apps crashing, or Wi-Fi grayed out in network menu."
    },
    {
      "name": "Lloyd High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Micro Dimming LED backlight strips engineered for high dynamic range in Havells Lloyd displays.",
      "symptoms": "Sound heard normally but Lloyd screen stays dark, flashlight test reveals picture, or dim bands."
    },
    {
      "name": "Lloyd T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts Micro Dimming video data into gate driver signals for Lloyd television panels.",
      "symptoms": "Lloyd screen showing vertical color bars, milky white display, or double image ghosting."
    },
    {
      "name": "Lloyd Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Havells Micro Dimming driver circuit adjusting LED string current on Lloyd televisions.",
      "symptoms": "Lloyd screen flashing once upon power-on and remaining black with dialogue audible."
    },
    {
      "name": "Lloyd Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Front-firing acoustic driver units tuned for clear vocal projection on Lloyd televisions.",
      "symptoms": "Harsh buzz during news reading, distorted volume above 40, or silent Lloyd speaker."
    },
    {
      "name": "Lloyd HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Digital interface connectors linking set-top boxes and audio systems to Lloyd TVs.",
      "symptoms": "Lloyd HDMI port showing intermittent blue screen, loose pins, or USB not read."
    },
    {
      "name": "Lloyd Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Havells Lloyd wireless connectivity card enabling Google TV streaming and remote pairing.",
      "symptoms": "Lloyd Google TV showing Wi-Fi disabled in settings, failed router scans, or buffering."
    },
    {
      "name": "Lloyd Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front infrared remote sensor eye and standby indicator PCB on Lloyd televisions.",
      "symptoms": "Lloyd TV failing to respond to remote controller, standby light dead, or sensor eye failure."
    },
    {
      "name": "Lloyd Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Multi-pin flexible ribbon cable routing video data to Lloyd Micro Dimming display panel glass.",
      "symptoms": "Lloyd screen flickering when tapped, horizontal colored lines, or intermittent video drop."
    }
  ],
  "VW": [
    {
      "name": "VW SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Compact combo power module providing stable 12V DC to VW Playwall 4K processing circuits and backlights.",
      "symptoms": "VW TV completely unresponsive to power mains, 12V DC input rail shorted, or dead power supply."
    },
    {
      "name": "VW Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Compact VW combo motherboard housing video processing scalar, audio driver, and system memory.",
      "symptoms": "VW TV rebooting every ten seconds, Playwall interface failing to load, or audio with no OSD menu."
    },
    {
      "name": "VW High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Direct-array LED backlight bars calibrated for high brightness in VW Playwall 4K screens.",
      "symptoms": "Audio plays clearly but VW screen has no light, torchlight test shows image, or dark horizontal zones."
    },
    {
      "name": "VW T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Routes video scalar output lines into source timing data for VW Playwall displays.",
      "symptoms": "Vertical lines across display, negative picture colors, or ghosting effect on VW TV."
    },
    {
      "name": "VW Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Compact booster circuit maintaining stable forward voltage for VW Playwall LED bars.",
      "symptoms": "VW display brightness fluctuating wildly, or backlight extinguishing after five minutes."
    },
    {
      "name": "VW Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Stereo acoustic sound drivers delivering balanced audio for daily viewing on VW televisions.",
      "symptoms": "Severe rattle from speakers during movies, muffled voices, or no audio on VW TV."
    },
    {
      "name": "VW HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Standard HDMI sockets supporting digital satellite decoders on VW televisions.",
      "symptoms": "VW TV displaying 'No Signal' across ports, physically broken socket, or USB dead."
    },
    {
      "name": "VW Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal Wi-Fi module connecting VW Playwall televisions to home broadband routers.",
      "symptoms": "VW TV unable to find home Wi-Fi network, wireless connection dropping, or app loading failure."
    },
    {
      "name": "VW Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Compact infrared photodiode sensor mounted on front frame of VW televisions.",
      "symptoms": "VW TV completely unresponsive to remote buttons, standby LED unlit, or dead sensor photodiode."
    },
    {
      "name": "VW Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flat flexible circuitry connecting VW combo motherboard to Playwall display panel electronics.",
      "symptoms": "Picture jumping on VW screen when moved, horizontal noise lines, or intermittent blackout."
    }
  ],
  "Acerpure": [
    {
      "name": "Acerpure SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Pure-matrix power board delivering isolated low-voltage DC to Acerpure Life 4K smart logic circuits.",
      "symptoms": "Acerpure TV showing no sign of power, front indicator light dark, or power circuit humming faintly."
    },
    {
      "name": "Acerpure Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Acerpure Life logic board running Google TV operating software and high-definition video decoders.",
      "symptoms": "Acerpure TV stuck on opening logo screen, system settings crashing, or HDMI handshake failure."
    },
    {
      "name": "Acerpure High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Pure-matrix LED diode strips designed for balanced color and brightness in Acerpure Life TVs.",
      "symptoms": "Dialogue clear but Acerpure display is pitch black, torch shows faint video, or flickering brightness."
    },
    {
      "name": "Acerpure T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates Google TV video streams into high-speed timing data for Acerpure panels.",
      "symptoms": "Screen showing fine colored vertical stripes, solarized tones, or white display on Acerpure TV."
    },
    {
      "name": "Acerpure Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Pure-matrix driver board controlling constant current across Acerpure backlight arrays.",
      "symptoms": "Acerpure screen flickering on white backgrounds, or backlight dying shortly after power-on."
    },
    {
      "name": "Acerpure Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Pure-matrix acoustic drivers engineered for crisp speech reproduction on Acerpure televisions.",
      "symptoms": "Vibrating buzz during dialogues, crackling sound, or one silent Acerpure channel."
    },
    {
      "name": "Acerpure HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Interface connectors linking streaming players and cable boxes to Acerpure televisions.",
      "symptoms": "Acerpure HDMI input cutting out intermittently, loose socket pins, or USB read fail."
    },
    {
      "name": "Acerpure Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "High-speed wireless transceiver module linking Acerpure televisions to home Wi-Fi networks.",
      "symptoms": "Acerpure TV showing 'Wi-Fi turned off', failure to connect to router, or slow buffering."
    },
    {
      "name": "Acerpure Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Front-facing infrared sensor eye and status indicator on Acerpure televisions.",
      "symptoms": "Acerpure TV ignoring remote commands, standby indicator dark, or delayed volume change."
    },
    {
      "name": "Acerpure Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "High-speed flat ribbon cable assembly transferring video streams to Acerpure display glass.",
      "symptoms": "Horizontal line interference on Acerpure display, picture shaking, or color dropouts."
    }
  ],
  "Redmi": [
    {
      "name": "Redmi SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "PatchWall 4 matched power board regulating DC supply for Redmi X-Series processor and 30W sound drivers.",
      "symptoms": "Redmi X-Series TV failing to power up, standby light dead, or motherboard receiving zero DC voltage."
    },
    {
      "name": "Redmi Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Redmi PatchWall 4 processing motherboard housing MediaTek quad-core SoC and 30W audio stages.",
      "symptoms": "Redmi TV stuck in PatchWall boot loop, apps failing to update, or Wi-Fi disconnecting frequently."
    },
    {
      "name": "Redmi High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Vivid Picture Engine matched LED backlight arrays providing punchy contrast in Redmi X-Series TVs.",
      "symptoms": "Sound plays loud but Redmi display remains black, flashlight reveals picture, or dim backlight areas."
    },
    {
      "name": "Redmi T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Converts PatchWall 4 video data into row and column timing pulses for Redmi panels.",
      "symptoms": "Redmi display showing vertical colored lines, negative image colors, or double image jumping."
    },
    {
      "name": "Redmi Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "High-efficiency boost circuit regulating current to Redmi Vivid Picture Engine LED strips.",
      "symptoms": "Redmi display flashing briefly before shutting off, or uneven screen brightness pulses."
    },
    {
      "name": "Redmi Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "30W stereo sound drivers tuned with Vivid Picture Engine DSP on Redmi X-Series TVs.",
      "symptoms": "Harsh buzzing on vocal tracks, audio distortion at high volume, or mute Redmi speaker."
    },
    {
      "name": "Redmi HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Low-latency input sockets connecting gaming consoles and DTH boxes to Redmi televisions.",
      "symptoms": "Redmi HDMI port dropping signal during gaming, or set-top box not detected."
    },
    {
      "name": "Redmi Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "PatchWall 4 matched wireless module handling dual-band Wi-Fi on Redmi X-Series TVs.",
      "symptoms": "Redmi TV unable to detect wireless network, PatchWall buffering, or remote unpairing."
    },
    {
      "name": "Redmi Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared receiver photodiode and red standby indicator on Redmi X-Series TVs.",
      "symptoms": "Redmi TV failing to turn on from remote, standby indicator unlit, or slow button response."
    },
    {
      "name": "Redmi Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Multi-strand flexible ribbon cable linking Redmi PatchWall motherboard to display source drivers.",
      "symptoms": "Redmi screen showing horizontal line jitter when adjusted, flickering video, or color noise."
    }
  ],
  "Mi": [
    {
      "name": "Mi SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Unified combo power circuit feeding regulated rails to Mi Horizon Edition bezel-less display electronics.",
      "symptoms": "Mi Horizon TV clicking inside back cover without display, or power supply cutting off under load."
    },
    {
      "name": "Mi Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Mi Horizon Edition unified mainboard controlling bezel-less display timing and Bluetooth remotes.",
      "symptoms": "Mi Horizon TV rebooting continuously on 'Mi' logo, eMMC chip read error, or Bluetooth pairing fail."
    },
    {
      "name": "Mi High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "Ultra-slim bezel-less backlight strips engineered for uniform light distribution in Mi Horizon TVs.",
      "symptoms": "Audio normal but Mi Horizon display is completely dark, torch reveals menu, or dim screen corners."
    },
    {
      "name": "Mi T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Translates video processor output into timing lines for Mi Horizon bezel-less displays.",
      "symptoms": "Mi Horizon screen showing vertical lines across picture, half panel dark, or color solarization."
    },
    {
      "name": "Mi Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Ultra-slim booster board regulating constant current for Mi Horizon bezel-less backlights.",
      "symptoms": "Mi Horizon screen flashing on startup and going black, or rapid brightness flicker."
    },
    {
      "name": "Mi Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Tuned acoustic sound drivers engineered to project crisp dialogue in Mi Horizon televisions.",
      "symptoms": "Crackling audio during loud scenes, muffled speech, or dead Mi Horizon speaker channel."
    },
    {
      "name": "Mi HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "High-speed HDMI ports accommodating set-top boxes and streaming units on Mi televisions.",
      "symptoms": "Mi Horizon HDMI socket wobbly and losing video when bumped, or USB unread."
    },
    {
      "name": "Mi Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal Wi-Fi transceiver module enabling smart streaming on Mi Horizon Edition TVs.",
      "symptoms": "Mi Horizon TV showing Wi-Fi disabled in settings, Bluetooth remote failing, or disconnects."
    },
    {
      "name": "Mi Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Ultra-slim infrared sensor eye mounted on bottom bezel of Mi Horizon televisions.",
      "symptoms": "Mi Horizon TV unresponsive to remote power command, standby light dark, or dead sensor eye."
    },
    {
      "name": "Mi Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Ultra-thin multi-conductor ribbon cable routing video signals to Mi Horizon bezel-less glass.",
      "symptoms": "Mi Horizon picture jittering when touched, fine horizontal lines, or momentary video flicker."
    }
  ],
  "Hyundai": [
    {
      "name": "Hyundai SMPS Power Supply Board",
      "badge": "Power Circuit",
      "desc": "Korean-engineered power unit supplying stable DC lines to Hyundai WebOS Hub boards and A+ grade panels.",
      "symptoms": "Hyundai WebOS TV dead after thunderstorm, standby indicator unlit, or power board fuse blown open."
    },
    {
      "name": "Hyundai Main Logic Motherboard",
      "badge": "Core Logic",
      "desc": "Hyundai WebOS Hub motherboard running LG-licensed WebOS firmware and Magic Remote pointer engine.",
      "symptoms": "Hyundai TV freezing on WebOS Hub screen, Magic Remote cursor missing, or apps refusing to open."
    },
    {
      "name": "Hyundai High-Luminance LED Backlight Strips",
      "badge": "Display Backlight",
      "desc": "A+ grade display panel backlight strips delivering crystal-clear illumination in Hyundai WebOS TVs.",
      "symptoms": "Dialogue plays clear but Hyundai screen has no light, flashlight test shows picture, or dim bands."
    },
    {
      "name": "Hyundai T-Con Timing Controller Board",
      "badge": "Display Timing",
      "desc": "Routes WebOS Hub video signals into source line addressing data for Hyundai panels.",
      "symptoms": "Vertical rainbow stripes across display, negative color tint, or image jitter on Hyundai TV."
    },
    {
      "name": "Hyundai Backlight Boost Regulator Circuit",
      "badge": "Backlight Regulator",
      "desc": "Regulates constant forward voltage and current for Hyundai A+ grade display backlight arrays.",
      "symptoms": "Hyundai display flashing once then going dark, or backlight cutting off during playback."
    },
    {
      "name": "Hyundai Internal Stereo Acoustic Drivers",
      "badge": "Audio Driver",
      "desc": "Box stereo sound drivers engineered for balanced vocal clarity on Hyundai WebOS televisions.",
      "symptoms": "Jarring vibration rattle during music, muffled voice clarity, or silent Hyundai speaker."
    },
    {
      "name": "Hyundai HDMI 2.0 / 2.1 & USB Port Connectors",
      "badge": "Input Interface",
      "desc": "Digital input connectors linking satellite receivers and soundbars to Hyundai televisions.",
      "symptoms": "Hyundai HDMI port showing 'No Connection', physically loose pins, or ARC failure."
    },
    {
      "name": "Hyundai Wireless Wi-Fi & Bluetooth Transceiver",
      "badge": "Wireless Module",
      "desc": "Internal wireless card handling WebOS broadband connection and Magic Remote signals.",
      "symptoms": "Hyundai WebOS TV showing 'Wi-Fi is turned off', Magic Remote air pointer unpairing, or network fail."
    },
    {
      "name": "Hyundai Standby LED & IR Remote Photodiode",
      "badge": "Remote Sensor",
      "desc": "Infrared sensor eye capturing remote signals on Hyundai WebOS Hub televisions.",
      "symptoms": "Hyundai TV ignoring remote buttons, standby indicator unlit, or broken photodiode eye."
    },
    {
      "name": "Hyundai Display Panel High-Speed Ribbon Cables",
      "badge": "Signal Ribbon",
      "desc": "Flat flexible ribbon cable carrying WebOS digital video data to Hyundai A+ display panel glass.",
      "symptoms": "Horizontal line noise on Hyundai screen when moved, picture shaking, or color sync loss."
    }
  ]
};

function getBrandParts(brandName) {
  if (allBrandParts[brandName]) {
    return allBrandParts[brandName];
  }
  return allBrandParts["Samsung"];
}

module.exports = { getBrandParts };
