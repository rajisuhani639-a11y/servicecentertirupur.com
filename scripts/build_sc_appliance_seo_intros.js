// scripts/build_sc_appliance_seo_intros.js
// Generates completely unique, natural, human-sounding local SEO keyword intros
// for every appliance section across all 54 brand Service Center pages in Kanyakumari.

const introsData = {
  'washing-machine': [
    (b) => `Searching for a ${b} Washing Machine Service Center in Kanyakumari? If your washer is not draining, spinning or taking water properly, you can check local ${b} Washing Machine Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Washing Machine Repair Near Me in Kanyakumari? When your washing machine makes heavy drumming noise or stops mid-wash, our local ${b} Washing Machine Technician provides quick doorstep checking across Kanyakumari.`,
    (b) => `Need a dependable ${b} Washing Machine Service Center in Kanyakumari? Whether it is a front load spin fault or top load water overflow, this guide covers verified ${b} Washing Machine Repair Service in Kanyakumari.`,
    (b) => `Trying to find reliable ${b} Washing Machine Service Near Me in Kanyakumari? If your wash drum refuses to rotate or gives repeated error codes, local doorstep ${b} Washing Machine Repair in Kanyakumari is readily available.`,
    (b) => `If you are looking for ${b} Washing Machine Repair in Kanyakumari, you have reached the right place. From drain pump blockages to motor drive belt issues, get experienced ${b} Washing Machine Service Center assistance at your home.`,
    (b) => `Want to find a verified ${b} Washing Machine Technician Near Me in Kanyakumari? When your automatic washer faces door lock failure or PCB circuit issues, local doorstep checking provides quick relief.`,
    (b) => `For residents searching for ${b} Washing Machine Service Center support in Kanyakumari, doorstep diagnostic assistance is available for front load, top load, and semi-automatic machines across all nearby neighborhoods.`,
    (b) => `Having trouble finding trusted ${b} Washing Machine Repair Near Me in Kanyakumari? If your washer vibrates violently during spin cycles or fails to start, explore common repair requirements and local technician support here.`,
    (b) => `Need local help with your ${b} Washing Machine in Kanyakumari? When water keeps filling continuously or the spin tub stops turning, get accurate ${b} Washing Machine Service Center information and doorstep support.`,
    (b) => `Searching for prompt ${b} Washing Machine Repair Service in Kanyakumari? If your washer is stuck on rinse or triggers blinking warning lights, check local repair options and compatible spare parts information here.`,
    (b) => `Looking for a certified ${b} Washing Machine Service Center Kanyakumari? When washing cycles halt unexpectedly or bottom water leaks occur, find doorstep ${b} Washing Machine Repair Near Me assistance quickly.`,
    (b) => `If your washer is giving you trouble and you need ${b} Washing Machine Service Near Me in Kanyakumari, our doorstep technicians inspect drain pumps, motor belts, and electronic control boards across the district.`,
    (b) => `Trying to locate an experienced ${b} Washing Machine Technician in Kanyakumari? Whether dealing with twin-tub spin issues or inverter direct-drive drum balancing, find local doorstep service details right here.`,
    (b) => `Want dependable ${b} Washing Machine Repair in Kanyakumari for your home? When the washer timer stops progressing or water empties too slowly, explore verified ${b} Washing Machine Service Center options nearby.`,
    (b) => `For families searching for ${b} Washing Machine Repair Near Me in Kanyakumari, local doorstep technicians diagnose inlet solenoid valves, suspension rods, and pressure sensors with transparent checking.`,
    (b) => `Searching for convenient doorstep ${b} Washing Machine Service in Kanyakumari? If clothes remain wet after spin cycles or detergent fails to dispense, find helpful local repair information right on this page.`,
    (b) => `Looking for trusted ${b} Washing Machine Technician Near Me support in Kanyakumari? From motor capacitor replacement to drive belt realignment, local doorstep inspection helps restore smooth daily laundry cycles.`,
    (b) => `Need quick assistance from a ${b} Washing Machine Service Center in Kanyakumari? When your front load door will not open or an error code pauses the cycle, check local repair guidance and part estimates here.`,
    (b) => `If you are searching for affordable ${b} Washing Machine Repair Near Me in Kanyakumari, our local technician network checks drainage impellers, wiring harnesses, and spin bearings right at your doorstep.`,
    (b) => `Trying to find reliable ${b} Washing Machine Service Kanyakumari? Whether your washer needs drum descaling, vibration dampening, or inverter board repair, explore local service options tailored for Kanyakumari homes.`,
    (b) => `Want fast and transparent ${b} Washing Machine Repair Service in Kanyakumari? When your washer trips the home circuit or leaves clothes soapy, find local doorstep inspection details and part pricing here.`,
    (b) => `For homeowners looking for ${b} Washing Machine Service Center in Kanyakumari, our doorstep team provides multimeter testing for motors, valves, and control modules across all local residential streets.`,
    (b) => `Having trouble with a washer that will not spin and searching for ${b} Washing Machine Repair Near Me in Kanyakumari? Find practical troubleshooting tips and doorstep technician visit options here.`,
    (b) => `Need a professional ${b} Washing Machine Technician in Kanyakumari to check your laundry appliance? Learn about common pump blockages, drive belt replacements, and local doorstep service choices.`,
    (b) => `Searching for dependable ${b} Washing Machine Service Near Me in Kanyakumari? If your washer stops before final rinse or displays drain alerts, check local doorstep inspection details right away.`,
    (b) => `Looking for ${b} Washing Machine Repair Service in Kanyakumari with doorstep convenience? From semi-automatic gearboxes to fully automatic inverter PCBs, find local technician support across the district.`,
    (b) => `If your household washer stopped functioning and you need a ${b} Washing Machine Service Center Kanyakumari, this section explains common mechanical faults, spare parts, and doorstep checkup procedures.`,
    (b) => `Trying to find a friendly ${b} Washing Machine Technician Near Me in Kanyakumari? When washing cycles leave clothes unwashed or water leaks from the bottom, discover verified local repair options here.`,
    (b) => `Want clear guidance on ${b} Washing Machine Repair in Kanyakumari? Explore common washer faults, approximate spare part charges, and local doorstep technician booking choices right on this page.`,
    (b) => `For customers seeking prompt ${b} Washing Machine Service Center in Kanyakumari assistance, local technicians carry multi-meter testing gear and compatible spares for same-day doorstep checking.`
  ],

  'refrigerator': [
    (b) => `Searching for a ${b} Refrigerator Service Center in Kanyakumari? If your fridge is not cooling, freezing food excessively or making clicking noises, you are in the right place for ${b} Refrigerator Repair Near Me in Kanyakumari.`,
    (b) => `Looking for ${b} Refrigerator Repair Near Me in Kanyakumari? When the bottom vegetable compartment stays warm or the freezer accumulates heavy frost, our local ${b} Refrigerator Technician provides doorstep checking.`,
    (b) => `Need a trusted ${b} Refrigerator Service Center in Kanyakumari? From starter relay replacements to defrost timer diagnostics, find reliable ${b} Refrigerator Repair Service in Kanyakumari right here.`,
    (b) => `Trying to find dependable ${b} Refrigerator Service Near Me in Kanyakumari? If your fridge compressor runs continuously without cooling or trips the power, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Refrigerator Repair in Kanyakumari, explore common cooling faults and doorstep service options. Get experienced ${b} Refrigerator Service Center help for single door and frost-free models.`,
    (b) => `Want to find an expert ${b} Refrigerator Technician Near Me in Kanyakumari? When your double door fridge leaks water under the crisper tray or stops chilling milk, local doorstep inspection helps quickly.`,
    (b) => `For residents searching for ${b} Refrigerator Service Center support in Kanyakumari, local technicians provide gas pressure checks, thermostat testing, and door gasket replacements across all neighborhoods.`,
    (b) => `Having trouble with fridge cooling and searching for ${b} Refrigerator Repair Near Me in Kanyakumari? Whether the issue is a clogged drain pipe or fan motor failure, find local technician assistance here.`,
    (b) => `Need local help with your ${b} Refrigerator in Kanyakumari? When ice melts in the freezer or the compressor clicks every few minutes, find accurate ${b} Refrigerator Service Center information and doorstep support.`,
    (b) => `Searching for quick ${b} Refrigerator Repair Service in Kanyakumari? If your direct cool or inverter fridge has stopped chilling properly, check local repair choices and approximate spare part pricing here.`,
    (b) => `Looking for a reputable ${b} Refrigerator Service Center Kanyakumari? When cooling coils ice over or the cabinet warms up, find convenient doorstep ${b} Refrigerator Repair Near Me assistance today.`,
    (b) => `If your fridge has stopped cooling and you need ${b} Refrigerator Service Near Me in Kanyakumari, our local technicians check capillary tubes, overload protectors, and inverter boards right at home.`,
    (b) => `Trying to locate a skilled ${b} Refrigerator Technician in Kanyakumari? Whether dealing with multi-door cooling balance or single-door thermostat calibration, find local doorstep service details right here.`,
    (b) => `Want dependable ${b} Refrigerator Repair in Kanyakumari for your household? When cooling becomes uneven or strange humming noises emerge, explore verified ${b} Refrigerator Service Center options nearby.`,
    (b) => `For families searching for ${b} Refrigerator Repair Near Me in Kanyakumari, local doorstep technicians diagnose bi-metal sensors, defrost heaters, and condenser fans with transparent estimates.`,
    (b) => `Searching for convenient doorstep ${b} Refrigerator Service in Kanyakumari? If the door rubber gasket has loosened or the compressor vibrates heavily, find helpful local repair guidance right on this page.`,
    (b) => `Looking for trusted ${b} Refrigerator Technician Near Me support in Kanyakumari? From gas leak detection to relay replacements, local doorstep inspection helps restore optimal food preservation.`,
    (b) => `Need quick assistance from a ${b} Refrigerator Service Center in Kanyakumari? When your frost-free fridge stops blowing cool air downstairs, check local repair solutions and part estimates here.`,
    (b) => `If you are searching for affordable ${b} Refrigerator Repair Near Me in Kanyakumari, our local technician network checks cooling coils, thermostat switches, and relays right at your doorstep.`,
    (b) => `Trying to find reliable ${b} Refrigerator Service Kanyakumari? Whether your fridge needs defrost circuit servicing, fan lubrication, or inverter board repair, explore local service options here.`,
    (b) => `Want fast and transparent ${b} Refrigerator Repair Service in Kanyakumari? When food spoils quickly or the cabinet warms up, find local doorstep inspection details and part pricing right here.`,
    (b) => `For homeowners looking for ${b} Refrigerator Service Center in Kanyakumari, our doorstep team provides multimeter testing for compressors, sensors, and timers across all residential localities.`,
    (b) => `Having trouble with a fridge that won't cool and searching for ${b} Refrigerator Repair Near Me in Kanyakumari? Find practical troubleshooting guidance and doorstep technician visit options here.`,
    (b) => `Need a professional ${b} Refrigerator Technician in Kanyakumari to inspect your cooling appliance? Learn about common thermostat issues, fan motor checks, and local doorstep service choices.`
  ],

  'ac': [
    (b) => `Searching for a ${b} AC Service Center in Kanyakumari? If your air conditioner is blowing warm air, leaking water indoors or flashing an error code, explore local ${b} AC Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} AC Repair Near Me in Kanyakumari? When your split AC cooling weakens during hot summer afternoons, our local ${b} AC Technician provides quick doorstep checking and gas pressure testing.`,
    (b) => `Need a reliable ${b} AC Service Center in Kanyakumari? From outdoor fan capacitor replacement to refrigerant leak fixing, find trusted ${b} AC Repair Service in Kanyakumari right on this page.`,
    (b) => `Trying to find dependable ${b} AC Service Near Me in Kanyakumari? If your air conditioner trips the MCB switch or makes rattling blower sounds, local doorstep ${b} AC Repair in Kanyakumari is readily available.`,
    (b) => `If you are looking for ${b} AC Repair in Kanyakumari, explore common cooling problems and doorstep service choices. Get experienced ${b} AC Service Center support for inverter, fixed-speed, and window models.`,
    (b) => `Want to find an expert ${b} AC Technician Near Me in Kanyakumari? When your indoor unit drips water on the wall or fails to cool the room, local doorstep inspection provides rapid relief.`,
    (b) => `For residents searching for ${b} AC Service Center support in Kanyakumari, local technicians provide copper coil leak testing, R32/R410A gas top-ups, and capacitor replacements across all neighborhoods.`,
    (b) => `Having trouble with weak AC cooling and searching for ${b} AC Repair Near Me in Kanyakumari? Whether the issue is a choked condenser coil or slow blower fan, find local technician assistance here.`,
    (b) => `Need local help with your ${b} AC in Kanyakumari? When your outdoor compressor cuts off after 10 minutes or the display blinks warnings, find accurate ${b} AC Service Center information and doorstep support.`,
    (b) => `Searching for quick ${b} AC Repair Service in Kanyakumari? If your inverter split AC is not dropping the room temperature, check local repair choices and approximate spare part pricing here.`,
    (b) => `Looking for a reputable ${b} AC Service Center Kanyakumari? When indoor airflow turns lukewarm or the swing louver stops moving, find convenient doorstep ${b} AC Repair Near Me assistance today.`,
    (b) => `If your air conditioner stopped cooling and you need ${b} AC Service Near Me in Kanyakumari, our local technicians test run capacitors, gas pressure levels, and inverter IPM modules right at home.`,
    (b) => `Trying to locate a skilled ${b} AC Technician in Kanyakumari? Whether dealing with copper piping flare leaks or cross-flow blower bearing noise, find local doorstep service details right here.`,
    (b) => `Want dependable ${b} AC Repair in Kanyakumari for your home or office? When cooling efficiency drops or power consumption rises, explore verified ${b} AC Service Center options nearby.`,
    (b) => `For families searching for ${b} AC Repair Near Me in Kanyakumari, local doorstep technicians diagnose indoor thermistors, outdoor fan motors, and drainage trays with transparent estimates.`,
    (b) => `Searching for convenient doorstep ${b} AC Service in Kanyakumari? If the indoor filter is choked or the remote control will not change temperature, find helpful local repair guidance right on this page.`,
    (b) => `Looking for trusted ${b} AC Technician Near Me support in Kanyakumari? From coil brazing to fan motor capacitor replacement, local doorstep inspection helps restore chilling comfort quickly.`,
    (b) => `Need quick assistance from an ${b} AC Service Center in Kanyakumari? When your 1.5 Ton or 2 Ton AC stops cooling during peak daytime heat, check local repair solutions and part estimates here.`,
    (b) => `If you are searching for affordable ${b} AC Repair Near Me in Kanyakumari, our local technician network checks refrigerant suction pressure, electrical wiring, and blower drums at your doorstep.`,
    (b) => `Trying to find reliable ${b} AC Service Kanyakumari? Whether your air conditioner needs jet cleaning, drain declogging, or inverter board repair, explore local service options here.`,
    (b) => `Want fast and transparent ${b} AC Repair Service in Kanyakumari? When warm air blows from the vents or compressor noise increases, find local doorstep inspection details and part pricing right here.`,
    (b) => `For homeowners looking for an ${b} AC Service Center in Kanyakumari, our doorstep team provides electrical parameter testing for compressors, sensors, and fan motors across all local areas.`,
    (b) => `Having trouble with an AC that won't cool and searching for ${b} AC Repair Near Me in Kanyakumari? Find practical troubleshooting guidance and doorstep technician visit options here.`,
    (b) => `Need a professional ${b} AC Technician in Kanyakumari to inspect your cooling appliance? Learn about common capacitor faults, gas recharge costs, and local doorstep service choices.`,
    (b) => `Searching for dependable ${b} AC Service Near Me in Kanyakumari? If your indoor unit makes squeaking sounds or cooling takes hours, check local doorstep inspection details right away.`,
    (b) => `Looking for ${b} AC Repair Service in Kanyakumari with doorstep convenience? From 3-Star window units to 5-Star inverter split systems, find local technician support across the district.`,
    (b) => `If your household AC stopped chilling and you need an ${b} AC Service Center Kanyakumari, this section explains common mechanical faults, spare parts, and doorstep checkup procedures.`,
    (b) => `Trying to find a friendly ${b} AC Technician Near Me in Kanyakumari? When cooling performance drops or water drips along interior walls, discover verified local repair options here.`,
    (b) => `Want clear guidance on ${b} AC Repair in Kanyakumari? Explore common air conditioner faults, approximate spare part charges, and local doorstep technician booking choices right on this page.`
  ],

  'tv': [
    (b) => `Searching for a ${b} TV Service Center in Kanyakumari? If your television has normal sound but a dark screen, lines on the display or will not turn on, explore local ${b} TV Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} TV Repair Near Me in Kanyakumari? If your ${b} smart LED TV is stuck on the boot logo, has distorted audio or faces backlight failure, this section covers common repair options in Kanyakumari.`,
    (b) => `Need a trusted ${b} TV Service Center in Kanyakumari? For ${b} TV Repair Near Me, display panel issues, power SMPS problems, or sound faults, local doorstep checking is available across Kanyakumari areas.`,
    (b) => `Trying to find dependable ${b} TV Service Near Me in Kanyakumari? When your LED TV standby light blinks continuously without screen activation, local doorstep ${b} TV Repair in Kanyakumari is readily accessible.`,
    (b) => `If you are looking for ${b} TV Repair in Kanyakumari, explore common smart TV faults and doorstep inspection choices. Get experienced ${b} TV Service Center help for 32-inch to 65-inch 4K UHD models.`,
    (b) => `Want to find a verified ${b} TV Technician Near Me in Kanyakumari? When horizontal color lines run across your screen or HDMI ports fail to detect inputs, local doorstep testing provides quick clarity.`,
    (b) => `For residents searching for ${b} TV Service Center support in Kanyakumari, local technicians provide LED backlight strip replacements, power supply board repairs, and T-Con diagnostics across all areas.`,
    (b) => `Having trouble with TV display brightness and searching for ${b} TV Repair Near Me in Kanyakumari? Whether the issue is a dead backlight array or motherboard firmware loop, find local assistance here.`,
    (b) => `Need local help with your ${b} Smart TV in Kanyakumari? When dialogue sounds crackly through internal speakers or the picture goes black, find accurate ${b} TV Service Center information and doorstep support.`,
    (b) => `Searching for quick ${b} TV Repair Service in Kanyakumari? If your smart Android or Google TV will not power on past standby mode, check local repair choices and approximate spare part pricing here.`,
    (b) => `Looking for a reputable ${b} TV Service Center Kanyakumari? When picture clarity degrades or screen flickering begins, find convenient doorstep ${b} TV Repair Near Me assistance right away.`,
    (b) => `If your television screen went dark and you need ${b} TV Service Near Me in Kanyakumari, our local technicians test backlight voltage strips, SMPS power rails, and logic boards right at home.`,
    (b) => `Trying to locate a skilled ${b} TV Technician in Kanyakumari? Whether dealing with eMMC software recovery or LVDS ribbon cable cleaning, find local doorstep service details right here.`,
    (b) => `Want dependable ${b} TV Repair in Kanyakumari for your living room screen? When power surges cause standby failure or audio disappears, explore verified ${b} TV Service Center options nearby.`,
    (b) => `For families searching for ${b} TV Repair Near Me in Kanyakumari, local doorstep technicians diagnose timing controller boards, LED drivers, and stereo speaker units with transparent estimates.`,
    (b) => `Searching for convenient doorstep ${b} TV Service in Kanyakumari? If picture contrast fades or colored vertical bands appear, find helpful local repair guidance right on this page.`,
    (b) => `Looking for trusted ${b} TV Technician Near Me support in Kanyakumari? From backlight strip array renewal to SMPS capacitor replacement, local doorstep inspection helps restore sharp viewing.`,
    (b) => `Need quick assistance from a ${b} TV Service Center in Kanyakumari? When your 4K smart television refuses to boot or drops Wi-Fi connectivity, check local repair solutions and part estimates here.`,
    (b) => `If you are searching for affordable ${b} TV Repair Near Me in Kanyakumari, our local technician network checks power regulator circuits, display ribbons, and audio ICs right at your doorstep.`,
    (b) => `Trying to find reliable ${b} TV Service Kanyakumari? Whether your screen needs backlight array fitting, speaker replacement, or mainboard repair, explore local service options here.`,
    (b) => `Want fast and transparent ${b} TV Repair Service in Kanyakumari? When sound plays without video or the remote sensor fails to respond, find local doorstep inspection details and part pricing here.`,
    (b) => `For homeowners looking for a ${b} TV Service Center in Kanyakumari, our doorstep team provides electronic multitester diagnosis for power supply, T-Con, and display modules across all areas.`,
    (b) => `Having trouble with a television that won't show picture and searching for ${b} TV Repair Near Me in Kanyakumari? Find practical troubleshooting guidance and doorstep technician visit options here.`,
    (b) => `Need a professional ${b} TV Technician in Kanyakumari to inspect your smart television? Learn about common backlight faults, power circuit checks, and local doorstep service choices.`,
    (b) => `Searching for dependable ${b} TV Service Near Me in Kanyakumari? If your screen shows patchy dark spots or sound becomes muffled, check local doorstep inspection details right away.`,
    (b) => `Looking for ${b} TV Repair Service in Kanyakumari with doorstep convenience? From 32-inch HD screens to 65-inch 4K panels, find local technician support across the district.`,
    (b) => `If your home entertainment screen stopped working and you need a ${b} TV Service Center Kanyakumari, this section explains common display faults, spare parts, and doorstep checkup procedures.`,
    (b) => `Trying to find a friendly ${b} TV Technician Near Me in Kanyakumari? When display backlights fail or the power board clicks repeatedly, discover verified local repair options here.`,
    (b) => `Want clear guidance on ${b} TV Repair in Kanyakumari? Explore common television faults, approximate spare part charges, and local doorstep technician booking choices right on this page.`,
    (b) => `For customers seeking prompt ${b} TV Service Center in Kanyakumari assistance, local technicians carry LED testers and circuit diagnostic gear for same-day doorstep checking.`,
    (b) => `Need doorstep ${b} TV Repair in Kanyakumari for sound or picture faults? From HDMI board testing to LED strip replacement, find verified technician choices across Kanyakumari.`
  ],

  'washer-dryer': [
    (b) => `Searching for a ${b} Washer Dryer Service Center in Kanyakumari? If your combo washer completes washing but leaves clothes wet after drying, explore local ${b} Washer Dryer Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Washer Dryer Repair Near Me in Kanyakumari? When drying cycles fail to heat or clothes come out damp, our local ${b} Washer Dryer Technician provides quick doorstep checking.`,
    (b) => `Need a dependable ${b} Washer Dryer Service Center in Kanyakumari? From heating coil testing to dryer blower fan cleaning, find trusted ${b} Washer Dryer Repair Service in Kanyakumari right here.`,
    (b) => `Trying to find reliable ${b} Washer Dryer Service Near Me in Kanyakumari? If your condensation dryer produces whistling sounds or stops mid-drying, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Washer Dryer Repair in Kanyakumari, explore common drying faults and doorstep service choices. Get experienced ${b} Washer Dryer Service Center support for combo front load models.`,
    (b) => `Want to find a verified ${b} Washer Dryer Technician Near Me in Kanyakumari? When drying lint blocks airflow channels or NTC temperature sensors report false errors, local doorstep testing helps quickly.`,
    (b) => `For residents searching for ${b} Washer Dryer Service Center support in Kanyakumari, local technicians provide heating element replacements, lint duct declogging, and blower motor checks across all areas.`,
    (b) => `Having trouble with damp laundry and searching for ${b} Washer Dryer Repair Near Me in Kanyakumari? Whether the issue is a burned heating element or seized blower fan, find local technician assistance here.`,
    (b) => `Need local help with your ${b} Washer Dryer in Kanyakumari? When drying time doubles or clothes smell damp after condensation cycles, find accurate ${b} Washer Dryer Service Center details and doorstep support.`,
    (b) => `Searching for quick ${b} Washer Dryer Repair Service in Kanyakumari? If your washer dryer combo gives sensor dry errors or trips heating relays, check local repair choices and approximate spare pricing here.`,
    (b) => `Looking for a reputable ${b} Washer Dryer Service Center Kanyakumari? When spin drying becomes noisy or heat fails to generate, find convenient doorstep ${b} Washer Dryer Repair Near Me assistance today.`,
    (b) => `If your washer dryer stopped heating and you need ${b} Washer Dryer Service Near Me in Kanyakumari, our local technicians check heating coils, thermistors, and blower impellers right at home.`,
    (b) => `Trying to locate an experienced ${b} Washer Dryer Technician in Kanyakumari? Whether dealing with condensation spray nozzle blockages or drive belt slippage, find local doorstep service details right here.`,
    (b) => `Want dependable ${b} Washer Dryer Repair in Kanyakumari for your household? When condensation drying fails to remove moisture effectively, explore verified ${b} Washer Dryer Service Center options nearby.`
  ],

  'dishwasher': [
    (b) => `Searching for a ${b} Dishwasher Service Center in Kanyakumari? If the dishwasher is not draining, cleaning properly or completing its cycle, this section covers common ${b} Dishwasher Repair requirements in Kanyakumari.`,
    (b) => `Looking for ${b} Dishwasher Repair Near Me in Kanyakumari? When dirty water remains in the tub or spray arms refuse to rotate, our local ${b} Dishwasher Technician provides doorstep checking.`,
    (b) => `Need a trusted ${b} Dishwasher Service Center in Kanyakumari? From drain pump unblocking to water inlet solenoid valve replacement, find reliable ${b} Dishwasher Repair Service in Kanyakumari right here.`,
    (b) => `Trying to find dependable ${b} Dishwasher Service Near Me in Kanyakumari? If your dishwasher displays water tap warning symbols or fails to dissolve detergent, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Dishwasher Repair in Kanyakumari, explore common washing faults and doorstep service choices. Get experienced ${b} Dishwasher Service Center support for 12 to 15 place-setting models.`,
    (b) => `Want to find a verified ${b} Dishwasher Technician Near Me in Kanyakumari? When food particles clog spray arm nozzles or circulation pumps hum without water flow, local doorstep testing provides quick clarity.`,
    (b) => `For residents searching for ${b} Dishwasher Service Center support in Kanyakumari, local technicians provide drain impeller clearing, water heating element testing, and door latch repairs across all areas.`,
    (b) => `Having trouble with dirty dishes and searching for ${b} Dishwasher Repair Near Me in Kanyakumari? Whether the issue is a jammed drain pump or calcified heating element, find local technician assistance here.`,
    (b) => `Need local help with your ${b} Dishwasher in Kanyakumari? When standing water triggers beeping alarms or wash cycles abort midway, find accurate ${b} Dishwasher Service Center information and doorstep support.`,
    (b) => `Searching for quick ${b} Dishwasher Repair Service in Kanyakumari? If your built-in or freestanding dishwasher leaves greasy film on plates, check local repair choices and approximate spare pricing here.`,
    (b) => `Looking for a reputable ${b} Dishwasher Service Center Kanyakumari? When wash arm water pressure drops or door microswitches lose contact, find convenient doorstep ${b} Dishwasher Repair Near Me assistance today.`
  ],

  'chest-freezer': [
    (b) => `Looking for ${b} Chest Freezer Repair Near Me in Kanyakumari? Cooling problems, thermostat issues and compressor-related faults can affect freezer performance, so local ${b} Chest Freezer Service in Kanyakumari can be checked based on the model.`,
    (b) => `Searching for a ${b} Chest Freezer Service Center in Kanyakumari? If your commercial or home deep freezer runs continuously without reaching sub-zero cold, explore local ${b} Chest Freezer Repair Near Me options here.`,
    (b) => `Need a dependable ${b} Chest Freezer Service Center in Kanyakumari? From compressor starter relay replacement to lid gasket sealing, find trusted ${b} Chest Freezer Repair Service in Kanyakumari right on this page.`,
    (b) => `Trying to find reliable ${b} Chest Freezer Service Near Me in Kanyakumari? When your deep freezer clicks repeatedly or loses freezing temperature during humid weather, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Chest Freezer Repair in Kanyakumari, explore common deep freezing faults and doorstep service choices. Get experienced ${b} Chest Freezer Service Center support for 100L to 500L models.`,
    (b) => `Want to find a verified ${b} Chest Freezer Technician Near Me in Kanyakumari? When ice cream softens or heavy frost crusts along the upper lid perimeter, local doorstep inspection helps quickly.`,
    (b) => `For businesses and homes searching for ${b} Chest Freezer Service Center support in Kanyakumari, local technicians provide gas pressure checks, thermostat calibrations, and compressor repairs across all areas.`
  ],

  'microwave-oven': [
    (b) => `Searching for a ${b} Microwave Oven Service Center in Kanyakumari? If your microwave runs and turntable spins but food does not heat up, explore local ${b} Microwave Oven Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Microwave Oven Repair Near Me in Kanyakumari? When touch keypad buttons become unresponsive or sparks buzz inside the cooking chamber, our local ${b} Microwave Technician provides safe doorstep checking.`,
    (b) => `Need a trusted ${b} Microwave Oven Service Center in Kanyakumari? From high-voltage diode replacement to magnetron testing, find reliable ${b} Microwave Oven Repair Service in Kanyakumari right here.`,
    (b) => `Trying to find dependable ${b} Microwave Oven Service Near Me in Kanyakumari? If your convection or grill oven trips the home circuit breaker or fails to heat, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Microwave Oven Repair in Kanyakumari, explore common heating faults and doorstep inspection choices. Get experienced ${b} Microwave Oven Service Center help for solo and convection models.`,
    (b) => `Want to find a verified ${b} Microwave Technician Near Me in Kanyakumari? When turntable glass plates stop rotating or carbonized mica waveguide sheets spark, local doorstep testing provides quick clarity.`,
    (b) => `For residents searching for ${b} Microwave Oven Service Center support in Kanyakumari, local technicians provide high-voltage circuit diagnostics, door interlock switch checks, and keypad repairs across all areas.`,
    (b) => `Having trouble with microwave heating and searching for ${b} Microwave Oven Repair Near Me in Kanyakumari? Whether the issue is a blown high-voltage fuse or burned diode, find local technician assistance here.`,
    (b) => `Need local help with your ${b} Microwave Oven in Kanyakumari? When baking convection fans hum loudly or timer displays freeze, find accurate ${b} Microwave Oven Service Center details and doorstep support.`,
    (b) => `Searching for quick ${b} Microwave Oven Repair Service in Kanyakumari? If your grill microwave stops browning food or produces burning smells, check local repair choices and approximate spare pricing here.`,
    (b) => `Looking for a reputable ${b} Microwave Oven Service Center Kanyakumari? When door latches fail to lock or cooking cycles shut down after seconds, find convenient doorstep ${b} Microwave Oven Repair Near Me assistance today.`,
    (b) => `If your microwave stopped heating food and you need ${b} Microwave Oven Service Near Me in Kanyakumari, our local technicians safely test magnetrons, high-voltage capacitors, and diodes right at home.`,
    (b) => `Trying to locate an experienced ${b} Microwave Technician in Kanyakumari? Whether dealing with glass turntable motor replacement or touch membrane flex repairs, find local doorstep service details right here.`,
    (b) => `Want dependable ${b} Microwave Oven Repair in Kanyakumari for your kitchen? When oven heating becomes inconsistent or sparking occurs, explore verified ${b} Microwave Oven Service Center options nearby.`,
    (b) => `For families searching for ${b} Microwave Oven Repair Near Me in Kanyakumari, local doorstep technicians diagnose power boards, quartz grill elements, and cooling fans with transparent estimates.`,
    (b) => `Searching for convenient doorstep ${b} Microwave Oven Service in Kanyakumari? If the digital display blinks error codes or turntable drive couplers wear out, find helpful local repair guidance right on this page.`,
    (b) => `Looking for trusted ${b} Microwave Technician Near Me support in Kanyakumari? From mica sheet renewal to high-voltage capacitor testing, local doorstep inspection helps restore safe cooking.`,
    (b) => `Need quick assistance from a ${b} Microwave Oven Service Center in Kanyakumari? When your oven runs with light and sound but leaves food stone cold, check local repair solutions and part estimates here.`
  ],

  'air-purifier': [
    (b) => `Searching for a ${b} Air Purifier Service Center in Kanyakumari? If your purifier air quality light stays permanently red or airflow has weakened, explore local ${b} Air Purifier Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Air Purifier Repair Near Me in Kanyakumari? When the blower fan produces high-pitched whining noise or filter reset indicators keep flashing, our local ${b} Air Purifier Technician provides doorstep checking.`,
    (b) => `Need a dependable ${b} Air Purifier Service Center in Kanyakumari? From True HEPA H13 filter replacement to PM2.5 laser sensor calibration, find trusted ${b} Air Purifier Repair Service in Kanyakumari right here.`,
    (b) => `Trying to find reliable ${b} Air Purifier Service Near Me in Kanyakumari? If musty odors emit from the top exhaust or auto cleaning modes stop responding, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Air Purifier Repair in Kanyakumari, explore common air filtration faults and doorstep service choices. Get experienced ${b} Air Purifier Service Center support for room and tower models.`,
    (b) => `Want to find a verified ${b} Air Purifier Technician Near Me in Kanyakumari? When dust sensors report false pollution levels or DC blower motors vibrate, local doorstep inspection helps quickly.`,
    (b) => `For residents searching for ${b} Air Purifier Service Center support in Kanyakumari, local technicians provide optical sensor cleaning, composite filter renewals, and power board checks across all areas.`,
    (b) => `Having trouble with indoor air quality and searching for ${b} Air Purifier Repair Near Me in Kanyakumari? Whether the issue is a clogged carbon filter or faulty air quality sensor, find local technician assistance here.`,
    (b) => `Need local help with your ${b} Air Purifier in Kanyakumari? When touch control buttons freeze or fan speeds will not change, find accurate ${b} Air Purifier Service Center details and doorstep support.`,
    (b) => `Searching for quick ${b} Air Purifier Repair Service in Kanyakumari? If your room air purifier stops circulating fresh air, check local repair choices and approximate spare filter pricing here.`,
    (b) => `Looking for a reputable ${b} Air Purifier Service Center Kanyakumari? When filtration efficiency drops along dusty transport corridors, find convenient doorstep ${b} Air Purifier Repair Near Me assistance today.`,
    (b) => `If your air purifier fan stopped spinning and you need ${b} Air Purifier Service Near Me in Kanyakumari, our local technicians inspect brushless motors, laser dust probes, and power boards right at home.`
  ],

  'air-cooler': [
    (b) => `Searching for a ${b} Air Cooler Service Center in Kanyakumari? If your cooler is blowing dry warm air, leaking water or making humming motor sounds, explore local ${b} Air Cooler Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Air Cooler Repair Near Me in Kanyakumari? When the submersible water pump stops pumping water over cooling pads, our local ${b} Air Cooler Technician provides quick doorstep checking.`,
    (b) => `Need a dependable ${b} Air Cooler Service Center in Kanyakumari? From submersible pump replacement to dense honeycomb pad renewal, find trusted ${b} Air Cooler Repair Service in Kanyakumari right here.`,
    (b) => `Trying to find reliable ${b} Air Cooler Service Near Me in Kanyakumari? If your desert or tower cooler motor runs at only one speed or water overflows, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Air Cooler Repair in Kanyakumari, explore common evaporative cooling faults and doorstep service choices. Get experienced ${b} Air Cooler Service Center support for all models.`,
    (b) => `Want to find a verified ${b} Air Cooler Technician Near Me in Kanyakumari? When louver swing motors get stuck or fan motor capacitors degrade, local doorstep inspection provides quick clarity.`,
    (b) => `For residents searching for ${b} Air Cooler Service Center support in Kanyakumari, local technicians provide water distribution descaling, pump replacements, and fan motor servicing across all areas.`,
    (b) => `Having trouble with summer cooling and searching for ${b} Air Cooler Repair Near Me in Kanyakumari? Whether the issue is a seized water pump or broken speed selector switch, find local technician assistance here.`,
    (b) => `Need local help with your ${b} Air Cooler in Kanyakumari? When water distribution channels clog with mineral scale or fan blades rattle, find accurate ${b} Air Cooler Service Center information and doorstep support.`,
    (b) => `Searching for quick ${b} Air Cooler Repair Service in Kanyakumari? If your room cooler stops delivering cold air during hot weather, check local repair choices and approximate spare pricing here.`
  ],

  'water-purifier': [
    (b) => `Searching for a ${b} Water Purifier Service Center in Kanyakumari? If your RO system has low water flow, high TDS output or continuous beeping alarms, explore local ${b} Water Purifier Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Water Purifier Repair Near Me in Kanyakumari? When pure water flow drops to a trickle or filters clog with borewell sediment, our local ${b} Water Purifier Technician provides doorstep checking.`,
    (b) => `Need a dependable ${b} Water Purifier Service Center in Kanyakumari? From certified RO membrane replacement to booster pump repairs, find trusted ${b} Water Purifier Repair Service in Kanyakumari right on this page.`,
    (b) => `Trying to find reliable ${b} Water Purifier Service Near Me in Kanyakumari? If your RO+UV purifier leaks from elbow joints or the booster pump vibrates heavily, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Water Purifier Repair in Kanyakumari, explore common purification faults and doorstep service choices. Get experienced ${b} Water Purifier Service Center help for multi-stage RO models.`,
    (b) => `Want to find a verified ${b} Water Purifier Technician Near Me in Kanyakumari? When UV lamps fail to ignite or auto cut-off switches allow water tank overflow, local doorstep testing provides quick clarity.`
  ],

  'water-heater': [
    (b) => `Searching for a ${b} Geyser Service Center in Kanyakumari? If your water heater takes excessive time to heat, trips the home MCB or leaks from the safety valve, explore local ${b} Geyser Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Geyser Repair Near Me in Kanyakumari? When water heating stops completely or electrical shock warnings occur, our local ${b} Geyser Technician provides safe doorstep checking.`,
    (b) => `Need a trusted ${b} Geyser Service Center in Kanyakumari? From heavy-duty copper heating element descaling to thermostat testing, find reliable ${b} Geyser Repair Service in Kanyakumari right on this page.`,
    (b) => `Trying to find dependable ${b} Water Heater Service Near Me in Kanyakumari? If water continuously drips from the pressure relief valve or the tank flange leaks, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Geyser Repair in Kanyakumari, explore common water heating problems and doorstep service choices. Get experienced ${b} Water Heater Service Center support for storage and instant models.`,
    (b) => `Want to find a verified ${b} Geyser Technician Near Me in Kanyakumari? When thermal cut-outs trip repeatedly or sacrificial magnesium anodes need renewal, local doorstep inspection helps quickly.`
  ],

  'audio-system': [
    (b) => `Searching for a ${b} Audio System Service Center in Kanyakumari? If your soundbar powers on but produces no sound through HDMI ARC or Bluetooth, explore local ${b} Soundbar Repair Near Me options for doorstep service.`,
    (b) => `Looking for ${b} Soundbar Repair Near Me in Kanyakumari? When subwoofers hum loudly, sound crackles at high volumes or wireless speakers disconnect, our local ${b} Audio Technician provides doorstep checking.`,
    (b) => `Need a dependable ${b} Audio Service Center in Kanyakumari? From digital amplifier IC troubleshooting to power supply SMPS board repair, find trusted ${b} Audio System Repair Service in Kanyakumari right here.`,
    (b) => `Trying to find reliable ${b} Soundbar Service Near Me in Kanyakumari? If optical input ports fail to detect audio signals or remote sensors stop responding, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Audio System Repair in Kanyakumari, explore common acoustic faults and doorstep service choices. Get experienced ${b} Audio Service Center help for 2.1 to 5.1 surround sound models.`
  ],

  'kitchen-appliances': [
    (b) => `Searching for a ${b} Kitchen Appliances Service Center in Kanyakumari? If your kitchen chimney suction has weakened, grease drips from the collector or hob burners won't spark, explore local repair options here.`,
    (b) => `Looking for ${b} Kitchen Chimney Repair Near Me in Kanyakumari? When auto-clean heating coils fail, touch motion sensors freeze or suction motors hum, our local technician provides doorstep checking.`,
    (b) => `Need a dependable ${b} Kitchen Appliances Service Center in Kanyakumari? From chimney centrifugal blower degreasing to gas hob pulse ignition generator replacement, find trusted service options here.`,
    (b) => `Trying to find reliable ${b} Kitchen Chimney Service Near Me in Kanyakumari? If oily fumes escape into the kitchen or baffle filters get clogged, local doorstep repair is readily accessible.`,
    (b) => `If you are looking for ${b} Gas Hob Repair in Kanyakumari, explore common cooking appliance faults and doorstep service choices. Get experienced ${b} Kitchen Appliances Service Center help for hobs and chimneys.`
  ],

  'smart-appliances': [
    (b) => `Searching for a ${b} Smart Appliances Service Center in Kanyakumari? If your connected appliance displays offline on mobile apps or Wi-Fi handshake fails, explore local ${b} Smart Appliance Repair Near Me options for doorstep service.`
  ]
};

function getApplianceSeoIntro(brandSlug, brandName, category, brandIndex) {
  const variations = introsData[category];
  if (!variations || variations.length === 0) {
    return `Searching for a ${brandName} Service Center in Kanyakumari? For ${brandName} Repair Near Me and doorstep checking across Kanyakumari, our local technicians provide prompt diagnostic assistance.`;
  }

  const idx = (brandIndex * 2 + brandSlug.length) % variations.length;
  return variations[idx](brandName);
}

module.exports = {
  getApplianceSeoIntro,
  introsData
};
