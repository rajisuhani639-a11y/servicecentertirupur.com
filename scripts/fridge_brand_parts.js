// Refrigerator Brand Parts in Simple Indian English
// Adapted to each brand's refrigerator range. No heavy AI buzzwords.

const brandPartsMap = {
  'Samsung': [
    {
      name: 'Digital Inverter Compressor',
      desc: 'The inverter compressor pumps cooling gas at varying speeds. If the fridge is not cooling, making repeated clicking noises, or not turning on at all, the compressor windings and driver must be tested.'
    },
    {
      name: 'Twin Cooling Evaporator Fan Motor',
      desc: 'This fan blows cold air through the freezer and fridge air channels. When the fan stops or makes buzzing sounds, the freezer may stay cold but the bottom food cabin becomes warm.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse',
      desc: 'The defrost sensor checks how much ice has formed on the cooling coil. If it goes bad, the coil gets completely choked with ice, stopping airflow into the fridge.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'The heater turns on at set intervals to melt excess frost from the cooling coils. When it burns out, thick ice builds up behind the back panel and cooling drops.'
    },
    {
      name: 'Main Inverter PCB Control Board',
      desc: 'The electronic PCB manages temperature sensors, fan speed, and inverter compressor frequency. Power surges can damage this board, causing error lights or complete power loss.'
    },
    {
      name: 'Convertible Mode Air Damper',
      desc: 'In convertible Samsung models, this motorised flap opens and closes to redirect air when switching between fridge and freezer modes. If stuck, temperature control fails.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'The rubber door seal holds cold air inside and keeps warm Karur air out. If the gasket is torn, loose, or hardened, moisture gathers inside and cooling leaks out.'
    },
    {
      name: 'Drain Hole & Evaporation Tray',
      desc: 'Melted water from the daily defrost cycle flows through a drain pipe into a tray over the compressor. If dust or algae chokes this pipe, water leaks under the vegetable box.'
    }
  ],
  'Whirlpool': [
    {
      name: '6th Sense Microprocessor Control Board',
      desc: 'This electronic board reads internal temperature sensors and adjusts cooling automatically. If it develops a fault, cooling becomes unstable or the fridge will not switch on.'
    },
    {
      name: 'PTC Starter Relay & Overload Protector',
      desc: 'This small electrical unit gives the initial boost to start the compressor and cuts power if the motor gets too hot. A clicking noise usually means this part has failed.'
    },
    {
      name: 'Intellifresh Airflow Circulation Fan',
      desc: 'The fan circulates cold air across the shelves in frost-free and triple door models. If it jams or wears out, cooling drops in the lower food compartments.'
    },
    {
      name: 'Bi-Metal Defrost Thermostat',
      desc: 'This switch turns off the defrost heater once the cooling coil is free of ice. If faulty, frost builds up like a solid rock, blocking the air vents completely.'
    },
    {
      name: 'Direct Cool Rotary Thermostat',
      desc: 'In single door Icemagic fridges, the rotary knob thermostat controls how long the compressor runs. If it fails, items inside either freeze into ice or remain warm.'
    },
    {
      name: 'Defrost Glass Tube Heater',
      desc: 'Located directly under the cooling coil, this glass heater element melts frost. If the heater filament breaks, frost chokes the back duct within a few days.'
    },
    {
      name: 'Door Magnetic Gasket Seal',
      desc: 'The rubber beading around the door edges keeps the cabinet airtight. If it becomes loose or cracked, cold air escapes and the compressor has to run constantly.'
    },
    {
      name: 'Drain Trough & Defrost Hose',
      desc: 'Carries melted defrost water to the rear evaporation pan. When blocked with food residue, water overflows onto the lower shelves or kitchen floor.'
    }
  ],
  'Bosch': [
    {
      name: 'VarioInverter Compressor Drive Module',
      desc: 'The inverter module controls the variable speed motor with precision. If the fridge shows an error code or the motor fails to turn over, this module is tested.'
    },
    {
      name: 'VitaFresh Multi-Zone Temperature Sensors',
      desc: 'Special sensors monitor the separate 0°C meat and vegetable zones. When a sensor drifts out of range, food items may freeze solid or spoil too soon.'
    },
    {
      name: 'MultiAirflow DC Evaporator Fan',
      desc: 'This quiet DC fan pushes chilled air through multiple vents on every shelf level. If it stops rotating, temperatures become uneven across the cabinet.'
    },
    {
      name: 'Motorised Air Damper Valve',
      desc: 'This electronically controlled flap meters the exact volume of cold air flowing from the freezer into the fresh food section. A stuck flap causes cooling imbalance.'
    },
    {
      name: 'Defrost Heating Element & Thermal Cutout',
      desc: 'Clears frost from the aluminum cooling fins during automatic defrost cycles. If the heating circuit opens, frost blocks air circulation entirely.'
    },
    {
      name: 'Airtight Magnetic Door Seal',
      desc: 'High-grade silicone rubber gasket maintains a tight thermal seal. If damaged, humidity enters the fridge and causes heavy condensation along the door frame.'
    },
    {
      name: 'Touch Display Control Unit',
      desc: 'The digital touch panel on the front door lets you set temperatures and functions. If keys do not respond or the screen flickers, the board is checked.'
    },
    {
      name: 'Sealed Refrigerant System & Filter Drier',
      desc: 'Circulates R600a hydrocarbon gas through copper lines. If a joint develops a pinhole leak, the compressor runs continuously without making cooling.'
    }
  ],
  'Electrolux': [
    {
      name: 'NutriFresh Inverter Compressor',
      desc: 'Runs at varying speeds to save power while keeping temperatures steady. If it does not start or makes strange rattling sounds, the technician inspects it.'
    },
    {
      name: 'TasteLock Humidity Control Membrane',
      desc: 'Maintains optimal humidity levels in the vegetable crisper. If damaged or misplaced, vegetables lose moisture quickly or collect standing water.'
    },
    {
      name: 'Multi-Flow Evaporator Fan Motor',
      desc: 'Pushes chilled air through multiple back-panel vents. If the fan bearing wears out, it makes a grinding sound or fails to push cold air to lower shelves.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse Assembly',
      desc: 'Monitors the cooling coil temperature and turns on the heater to clear frost. A failed sensor causes ice to choke the cooling duct.'
    },
    {
      name: 'Electronic Control PCB',
      desc: 'The brain of the refrigerator that coordinates inverter speeds, defrost timings, and door alarms. Voltage spikes can trip or damage this board.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Creates a tight seal along the cabinet perimeter. When the rubber hardens or tears, warm air gets in and creates heavy frost.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Heats the cooling coil periodically to melt accumulated frost. If open-circuit, cooling drops drastically within two to three days.'
    },
    {
      name: 'Defrost Drain Tube',
      desc: 'Takes melted frost water to the rear compressor tray. If blocked, water leaks out into the bottom drawers of the fridge.'
    }
  ],
  'Liebherr': [
    {
      name: 'DuoCooling Dual Evaporator Fan',
      desc: 'Liebherr fridges use two separate cooling circuits for the freezer and fridge. If the fridge fan fails, the freezer works fine while the main cabin loses chill.'
    },
    {
      name: 'BioFresh Precision Temperature Sensor',
      desc: 'Monitors the near-0°C BioFresh drawer for fresh meat and produce. If the sensor goes out of calibration, food inside can freeze or lose freshness.'
    },
    {
      name: 'Variable Speed Inverter Compressor',
      desc: 'Pumps refrigerant according to cooling demand. If it fails to start or buzzes quietly without compressing, the inverter driver and windings are tested.'
    },
    {
      name: 'Defrost Heating Element',
      desc: 'Melts ice off the evaporator coils automatically. When the element breaks, ice accumulates until all airflow vents are completely blocked.'
    },
    {
      name: 'Electronic Main Logic Board',
      desc: 'Controls dual-zone temperatures, door open alarms, and compressor speed. Power fluctuations can corrupt or burn out components on this board.'
    },
    {
      name: 'Magnetic Cabinet Door Gasket',
      desc: 'A heavy-duty rubber seal that prevents outside heat and humidity from entering. If misaligned or cracked, moisture droplets form on shelves.'
    },
    {
      name: 'Internal Air Circulation Duct',
      desc: 'Directs chilled air evenly behind shelves. If obstructed by ice, the technician clears the blockage and tests the defrost system.'
    },
    {
      name: 'R600a Refrigeration Sealed System',
      desc: 'Transfers heat out of the fridge using eco-friendly refrigerant. If a leak occurs, both compartments gradually stop cooling.'
    }
  ],
  'Godrej': [
    {
      name: 'Reciprocating / Inverter Compressor',
      desc: 'The compressor pumps cooling gas through the condenser and evaporator. If it trips the home fuse or makes clicking noises without cooling, it needs checking.'
    },
    {
      name: 'PTC Starter Relay & Overload Protector',
      desc: 'Starts the compressor motor safely and cuts power during voltage fluctuations. Clicking sounds usually indicate a burnt starter relay.'
    },
    {
      name: 'Direct Cool Mechanical Thermostat',
      desc: 'Found in Edge single door models to set cooling levels. When it fails, vegetables in the bottom tray freeze into ice or the fridge does not cool at all.'
    },
    {
      name: 'Frost-Free Evaporator Fan Motor',
      desc: 'Circulates cold air from the freezer coil into the food compartment in Eon double door models. If stuck or noisy, lower cabin cooling stops.'
    },
    {
      name: 'Defrost Timer & Bimetal Switch',
      desc: 'Controls the automatic defrost cycle in frost-free models. If the timer stops turning, heavy frost blocks the cooling vents.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Melts frost off the cooling coil so air can pass through. If the heater is open, thick ice forms behind the plastic freezer panel.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Ensures the door shuts tight against the cabinet. If loose or cracked, cold air leaks out and electricity consumption goes up.'
    },
    {
      name: 'Drain Pipe & Condensation Tray',
      desc: 'Drains melted defrost water outside. If clogged with dust, water collects inside the vegetable tray.'
    }
  ],
  'Haier': [
    {
      name: 'Twin Inverter Compressor & Fan System',
      desc: 'In Haier twin inverter fridges, both compressor and fan run on DC inverter power. If either component fails to match speed, cooling becomes weak.'
    },
    {
      name: 'Bottom Mount (BMR) Blower Fan',
      desc: 'Since the freezer is at the bottom, this fan pushes chilled air upward to the top food section. If it stops, the top section turns warm.'
    },
    {
      name: 'Convertible Mode Motorised Damper',
      desc: 'Controls airflow between compartments in 8-in-1 convertible models. If the damper motor jams, convertible temperature switching fails.'
    },
    {
      name: 'Defrost Sensor (NTC Thermistor)',
      desc: 'Measures frost temperature on the evaporator. A faulty sensor causes the coil to ice up solid, choking cold airflow.'
    },
    {
      name: 'Main Inverter PCB Controller',
      desc: 'Manages inverter frequencies, sensor readings, and digital display functions. Voltage surges can damage this board.'
    },
    {
      name: 'Defrost Heater Tube',
      desc: 'Turns on automatically to melt frost off the cooling coil. If broken, frost builds up like a solid brick in the freezer.'
    },
    {
      name: 'Magnetic Door Beading',
      desc: 'Keeps outside warm air from getting inside the fridge. If damaged or dirty, condensation drops form on shelves.'
    },
    {
      name: 'Drain Trough & Defrost Outlet',
      desc: 'Takes defrost water to the evaporation tray. When clogged with debris, water pools on the freezer floor.'
    }
  ],
  'Videocon': [
    {
      name: 'Hermetic Compressor',
      desc: 'The main cooling pump in Videocon refrigerators. If it makes loud vibrations, gets extremely hot, or trips the power MCB, it needs thorough testing.'
    },
    {
      name: 'PTC Starter Relay',
      desc: 'Supplies initial power to the compressor start winding. If it burns out, the compressor clicks every few minutes without starting.'
    },
    {
      name: 'Rotary Dial Thermostat',
      desc: 'Regulates cabin temperature in single door models. If the internal gas bellows fail, the fridge either freezes everything or stops cooling.'
    },
    {
      name: 'Frost-Free Air Circulation Fan',
      desc: 'Pushes chilled air into the lower compartment. When the fan motor seizes from moisture, the lower cabin stays warm while the freezer stays cold.'
    },
    {
      name: 'Mechanical Defrost Timer',
      desc: 'A geared timer switch that turns on the heater every 8 hours. If the internal gear teeth wear down, defrosting stops completely.'
    },
    {
      name: 'Glass Tube Defrost Heater',
      desc: 'Heats up during defrost to clear ice from the evaporator coil. If the filament snaps, the cooling coil becomes choked with ice.'
    },
    {
      name: 'Cabinet Door Gasket',
      desc: 'Seals the door edges tightly against the steel cabinet. If the rubber is hardened or torn, cold air escapes continuously.'
    },
    {
      name: 'Drain Line Hose',
      desc: 'Carries defrost meltwater away from the cooling coil. If choked with dust or food particles, water leaks inside the fridge.'
    }
  ],
  'Panasonic': [
    {
      name: 'Econavi Inverter Compressor',
      desc: 'Adjusts motor rpm based on door opening patterns and room temperature. If it fails to start or makes humming noises, the drive circuit is checked.'
    },
    {
      name: 'Prime Fresh Soft-Freeze Sensor',
      desc: 'Maintains -3°C soft-freezing in the Prime Fresh compartment. If faulty, meats and fish freeze solid or fail to stay chilled.'
    },
    {
      name: '3D Airflow Evaporator Fan Motor',
      desc: 'Circulates chilled air through multi-directional vents. If the fan slows down or stops, temperatures become uneven across shelves.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse',
      desc: 'Detects ice accumulation on the cooling coil and prevents heater overheating. If broken, ice chokes the air passages.'
    },
    {
      name: 'Inverter Main Control PCB',
      desc: 'Coordinates Econavi sensors, inverter compressor frequency, and fan speeds. Power surges can damage its delicate microcontrollers.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Melts frost off the cooling fins automatically. If the heater is open, thick frost blocks air circulation within days.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Provides a tight seal to keep warm humid Karur air outside. If cracked or misaligned, moisture accumulates inside the fridge.'
    },
    {
      name: 'Defrost Drain Tube & Catch Pan',
      desc: 'Directs melted ice water to the rear pan. If choked with algae or dust, water leaks out under the vegetable drawer.'
    }
  ],
  'Siemens': [
    {
      name: 'Inverter Speed Compressor',
      desc: 'The variable speed pump responsible for maintaining stable cooling. If it trips power or fails to start, the inverter power module is tested.'
    },
    {
      name: 'hyperFresh Temperature & Humidity Sensors',
      desc: 'Monitors conditions inside the hyperFresh meat and vegetable drawers. When sensors drift, food spoils quickly or freezes.'
    },
    {
      name: 'multiAirflow DC Circulation Fan',
      desc: 'Whisper-quiet DC fan distributing chilled air evenly across all levels. If the fan motor fails, cooling drops in the main cabinet.'
    },
    {
      name: 'Electronic Air Damper Motor',
      desc: 'Regulates chilled air moving from the freezer into the food cabin. If the motor jams, temperature control between compartments fails.'
    },
    {
      name: 'Defrost Heating Element & Safety Fuse',
      desc: 'Keeps the cooling fins free of ice automatically. If the heating circuit opens, frost blocks the airflow completely.'
    },
    {
      name: 'Inverter Power Control PCB',
      desc: 'Controls compressor motor frequency and power regulation. If power dips or surges strike, this board requires testing.'
    },
    {
      name: 'Airtight Door Seal Gasket',
      desc: 'Precision rubber gasket maintaining a tight thermal seal. If damaged, humidity enters the fridge and causes condensation.'
    },
    {
      name: 'Touch Display Control Unit',
      desc: 'Lets you set temperatures and special cooling modes. If the panel buttons are unresponsive or flickering, the board is checked.'
    }
  ],
  'Hitachi': [
    {
      name: 'Dual Fan Cooling Dedicated Motors',
      desc: 'Hitachi fridges use separate fans for the freezer and refrigerator compartments. If one fan stops, cooling drops in that specific section.'
    },
    {
      name: 'Inverter Compressor Driver Board',
      desc: 'Regulates compressor motor speed based on cooling requirements. If the board fails, the compressor will not turn on.'
    },
    {
      name: 'Eco Thermo-Sensor Assembly',
      desc: 'Detects micro-temperature changes on each shelf. If damaged, cooling becomes erratic or the compressor runs without stopping.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Heats up during automatic defrost to clear the evaporator coil. When the heater burns out, ice blocks the air channels.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'A heavy-duty rubber seal preventing cold air leakage on large French door models. If loose, moisture forms on the door dividers.'
    },
    {
      name: 'Main Logic Control Board',
      desc: 'The brain of the refrigerator managing dual fans, inverter drive, and touch panel. Power fluctuations can damage this board.'
    },
    {
      name: 'Defrost Drain Channel',
      desc: 'Directs melted frost water to the evaporation tray. When clogged, water overflows inside the bottom storage bin.'
    },
    {
      name: 'Sealed R600a Refrigeration Circuit',
      desc: 'Carries refrigerant gas through cooling tubes. If a joint leaks gas, the compressor runs warm without producing any cooling.'
    }
  ],
  'Kelvinator': [
    {
      name: 'Hermetic Reciprocating Compressor',
      desc: 'The primary cooling pump in Kelvinator refrigerators. If the motor fails to start, makes loud metallic sounds, or trips the breaker, it must be checked.'
    },
    {
      name: 'PTC Starter Relay & Overload Protector',
      desc: 'Helps the compressor start smoothly and cuts power if it gets too hot. A clicking sound every few minutes indicates a burnt relay.'
    },
    {
      name: 'Mechanical Thermostat Switch',
      desc: 'Controls cooling in direct cool single door fridges. If the bellows lose charge, items inside either freeze completely or stay warm.'
    },
    {
      name: 'Evaporator Fan Motor',
      desc: 'Blows cold air through the air ducts in frost-free models. If seized by dust or moisture, cooling in the lower compartment stops.'
    },
    {
      name: 'Bimetal Defrost Switch',
      desc: 'Closes the circuit to activate the defrost heater when frost forms. If faulty, the cooling coil becomes choked with solid ice.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Melts ice off the cooling coil automatically. If the element is open, air circulation stops completely.'
    },
    {
      name: 'Cabinet Door Gasket',
      desc: 'Maintains an airtight boundary around the door. If cracked or loose, warm air enters and creates heavy ice buildup.'
    },
    {
      name: 'Defrost Drain Tube',
      desc: 'Channels water from the defrost trough to the back tray. If clogged, water collects under the crisper box.'
    }
  ],
  'Sharp': [
    {
      name: 'J-Tech Inverter Compressor',
      desc: 'Provides fine-tuned cooling with 36 micro-steps. If the motor fails to spin or vibrates abnormally, the inverter driver is tested.'
    },
    {
      name: 'Hybrid Cooling Panel Sensor',
      desc: 'Monitors the aluminum back panel that gently chills food without drying it out. If faulty, temperature distribution becomes uneven.'
    },
    {
      name: 'Evaporator DC Blower Fan',
      desc: 'Distributes cold air across multi-door compartments. If it stops spinning, upper or lower compartments lose cooling.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse',
      desc: 'Monitors the cooling coil and shuts down the heater safely. If bad, ice builds up like a rock, stopping airflow.'
    },
    {
      name: 'Inverter Control PCB Board',
      desc: 'Controls J-Tech compressor speed, fan motors, and display indicators. Power fluctuations can damage this board.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Heats the cooling coil periodically to clear frost. If open, thick frost builds up behind the back panel.'
    },
    {
      name: 'Door Magnetic Gasket Seal',
      desc: 'Prevents air leakage on large French door and top-mount models. If loose or torn, moisture accumulates on shelves.'
    },
    {
      name: 'Condensate Drain Outlet',
      desc: 'Directs melted defrost water to the compressor pan. If blocked, water leaks out into the vegetable drawers.'
    }
  ],
  'IFB': [
    {
      name: 'Metal Cooling Inverter Compressor',
      desc: 'Regulates cooling gas pressure across metal-backed cooling panels. If the compressor hums without starting, it needs testing.'
    },
    {
      name: 'PTC Starter Relay & Overload Protector',
      desc: 'Protects the compressor motor from power surges. If burnt, the compressor clicks repeatedly without turning on.'
    },
    {
      name: 'Evaporator Air Circulation Fan',
      desc: 'Pushes chilled air through multi-vent towers. If the motor slows down or seizes, cooling in the fresh food section drops.'
    },
    {
      name: 'Defrost Sensor (NTC Thermistor)',
      desc: 'Measures frost levels on the cooling coil. If faulty, the coil chokes with ice and air circulation stops.'
    },
    {
      name: 'Main Inverter Control PCB',
      desc: 'Controls compressor rpm, temperature sensors, and fan speeds. If damaged by voltage spikes, the fridge will not switch on.'
    },
    {
      name: 'Defrost Heating Element',
      desc: 'Melts frost off the cooling fins during automatic defrost. If broken, solid ice blocks the cooling vents.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Keeps outside warm humid air from entering. If torn or loose, cold air escapes and frost accumulates on door edges.'
    },
    {
      name: 'Defrost Drain Pipe & Tray',
      desc: 'Channels meltwater away from the cooling coil. When blocked, water collects on the bottom floor of the fridge.'
    }
  ],
  'Onida': [
    {
      name: 'Hermetic Cooling Compressor',
      desc: 'The primary pump that produces refrigeration. If it overheats, makes loud vibrations, or trips the home circuit breaker, it needs inspection.'
    },
    {
      name: 'PTC Starter Relay',
      desc: 'Supplies initial starting power to the compressor windings. A clicking sound every few minutes indicates a burnt starter relay.'
    },
    {
      name: 'Direct Cool Thermostat Switch',
      desc: 'Controls the cooling cycle in single door models. If the bellows fail, items inside either freeze completely or stay warm.'
    },
    {
      name: 'Frost-Free Blower Fan Motor',
      desc: 'Circulates cold air through the food compartment in double door models. If stuck, the lower compartment stays warm.'
    },
    {
      name: 'Mechanical Defrost Timer',
      desc: 'Switches the fridge into defrost mode automatically. If internal contacts wear out, frost blocks the cooling fins.'
    },
    {
      name: 'Defrost Heater Tube',
      desc: 'Melts ice off the cooling coil so air can circulate. If broken, frost chokes the back duct within a few days.'
    },
    {
      name: 'Cabinet Door Gasket',
      desc: 'Seals the door tightly against the cabinet frame. If cracked or hard, cold air leaks out continuously.'
    },
    {
      name: 'Drain Trough & Hose',
      desc: 'Carries defrost meltwater away. If choked with dust or food particles, water pools inside the vegetable tray.'
    }
  ],
  'Toshiba': [
    {
      name: 'Origin Inverter Compressor',
      desc: 'Provides efficient cooling by adjusting motor speeds smoothly. If it clicks or fails to start, the inverter board and windings are checked.'
    },
    {
      name: 'Inverter DC Evaporator Fan',
      desc: 'Synchronises speed with the compressor to deliver balanced airflow. If it fails, cooling drops across the fresh food shelves.'
    },
    {
      name: 'Dual Inverter Control PCB',
      desc: 'Controls both compressor and fan speeds simultaneously. Power fluctuations can damage this board, causing error lights.'
    },
    {
      name: 'Electronic Defrost Sensor',
      desc: 'Monitors frost buildup on the cooling coil. If faulty, the coil gets completely choked with ice, stopping airflow.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Heats up during automatic defrost to clear the evaporator coil. When the heater burns out, ice blocks the air channels.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Maintains an airtight boundary around the door. If loose or cracked, warm air enters and creates heavy ice buildup.'
    },
    {
      name: 'PureBio Air Duct Module',
      desc: 'Assists in odor removal and clean air circulation. If airflow is blocked by ice, cooling performance drops.'
    },
    {
      name: 'Condensate Drain Outlet',
      desc: 'Channels melted defrost water outside. If clogged with dust, water collects inside the vegetable tray.'
    }
  ],
  'Voltas Beko': [
    {
      name: 'ProSmart Inverter Compressor',
      desc: 'Operates at four variable speeds for energy-efficient cooling. If it fails to turn on or vibrates abnormally, the inverter driver is tested.'
    },
    {
      name: 'NeoFrost Dual Cooling Evaporator Fan',
      desc: 'Circulates air separately in the fridge and freezer compartments. If the fan seizes, one compartment will lose cooling.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse',
      desc: 'Monitors the cooling coil temperature and turns on the heater to clear frost. A failed sensor causes ice to choke the cooling duct.'
    },
    {
      name: 'Defrost Heating Element',
      desc: 'Melts frost off the cooling coil automatically. If the heater is open, thick ice forms behind the plastic freezer panel.'
    },
    {
      name: 'Inverter Main Control PCB',
      desc: 'Manages inverter frequencies, temperature sensors, and door alarms. Voltage spikes can trip or damage this board.'
    },
    {
      name: 'Active Fresh Blue Light Sensor',
      desc: 'Maintains fresh conditions in the vegetable crisper. If damaged, vegetable preservation is affected.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Keeps outside warm humid air from entering. If torn or loose, cold air escapes and frost accumulates on door edges.'
    },
    {
      name: 'Defrost Drain Tube',
      desc: 'Directs melted ice water to the rear pan. If choked with algae or dust, water leaks out under the vegetable drawer.'
    }
  ],
  'Lloyd': [
    {
      name: 'Inverter Cooling Compressor',
      desc: 'Pumps refrigerant through the cooling lines at variable speeds. If it makes clicking sounds or fails to start, it needs inspection.'
    },
    {
      name: 'Ten-Vent Airflow Circulation Fan',
      desc: 'Circulates chilled air through ten individual air vents. If the fan motor wears out, cooling becomes uneven across shelves.'
    },
    {
      name: 'PTC Starter Relay & Overload Protector',
      desc: 'Starts the compressor motor safely and cuts power during voltage fluctuations. Clicking sounds indicate a burnt starter relay.'
    },
    {
      name: 'Direct Cool Rotary Thermostat',
      desc: 'Regulates cabin temperature in single door models. If it fails, items inside either freeze into ice or remain warm.'
    },
    {
      name: 'Defrost Sensor (NTC Thermistor)',
      desc: 'Measures frost levels on the cooling coil. If faulty, the coil chokes with ice and air circulation stops.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Heats the cooling coil periodically to clear frost. If open, thick frost builds up behind the back panel.'
    },
    {
      name: 'Inverter Control Board',
      desc: 'The brain of the refrigerator managing inverter speeds and temperature sensors. Power surges can damage this board.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Seals the door edges tightly against the cabinet. If loose or cracked, cold air escapes and electricity consumption goes up.'
    }
  ],
  'Midea': [
    {
      name: 'Variable Speed Inverter Compressor',
      desc: 'Regulates cooling gas pressure across multi-door and side-by-side models. If the compressor hums without starting, it needs testing.'
    },
    {
      name: 'Multi-Air Flow DC Circulation Fan',
      desc: 'Blows chilled air through multiple ducts in the freezer and fridge sections. If it stops rotating, cooling drops significantly.'
    },
    {
      name: 'Motorised Air Damper Flap',
      desc: 'Controls how much cold air flows from the freezer into the food cabin. If jammed, the food cabin becomes warm.'
    },
    {
      name: 'Multi-Zone NTC Temperature Sensors',
      desc: 'Monitors temperatures in various compartments. If a sensor drifts, the fridge cools erratically or sounds false alarms.'
    },
    {
      name: 'Inverter Control PCB Board',
      desc: 'Controls compressor motor frequency and power regulation. If power dips or surges strike, this board requires testing.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Melts ice off the cooling coil automatically. If the element is open, air circulation stops completely.'
    },
    {
      name: 'Magnetic Cabinet Door Gasket',
      desc: 'A heavy-duty rubber seal preventing cold air leakage on large doors. If loose, moisture forms on the door dividers.'
    },
    {
      name: 'Defrost Drain Tube & Catch Pan',
      desc: 'Directs melted ice water to the rear pan. If choked with algae or dust, water leaks out under the vegetable drawer.'
    }
  ],
  'Blue Star': [
    {
      name: 'Heavy-Duty Commercial & Domestic Compressor',
      desc: 'Engineered for continuous cooling in deep freezers and cooling units. If it trips the circuit breaker or overheats, the technician tests it.'
    },
    {
      name: 'Hard-Start Capacitor & Relay Assembly',
      desc: 'Provides high starting torque to fire up heavy-duty compressors. If the capacitor bulges or fails, the motor cannot start.'
    },
    {
      name: 'Condenser Cooling Fan Motor',
      desc: 'Dissipates heat from the bottom-mounted condenser coil. If the fan seizes with dirt, the compressor overheats and cuts off.'
    },
    {
      name: 'Digital Temperature Controller / Thermostat',
      desc: 'Monitors and maintains sub-zero temperatures in deep freezers. If faulty, items start defrosting or the temperature display blinks.'
    },
    {
      name: 'Chest Freezer Lid Perimeter Gasket',
      desc: 'Heavy silicone gasket keeping room heat out of chest freezers. If torn, dense ice accumulates around the lid perimeter.'
    },
    {
      name: 'Copper Capillary & High-Capacity Filter Drier',
      desc: 'Regulates refrigerant pressure and absorbs moisture inside the sealed line. If choked, cooling drops drastically.'
    },
    {
      name: 'Defrost Drain Plug & Channel',
      desc: 'Allows manual defrost water to drain out cleanly. If blocked, water stays inside the freezer tub and freezes solid.'
    },
    {
      name: 'Sealed Refrigerant Gas Circuit',
      desc: 'Maintains high cooling pressure with R134a or R404a/R600a. If a copper brazed joint develops a leak, cooling is lost completely.'
    }
  ],
  'Motorola': [
    {
      name: 'Smart Inverter Compressor',
      desc: 'Runs at varying speeds to save power and maintain uniform cooling. If it fails to turn on or vibrates abnormally, it is tested.'
    },
    {
      name: 'Smart Sensor Multi-Probe Assembly',
      desc: 'Measures ambient and internal temperatures to adjust cooling. If damaged, cooling becomes erratic or the display flashes an error.'
    },
    {
      name: 'Evaporator DC Blower Fan Motor',
      desc: 'Pushes cold air through the multi-cooling tower into both cabins. If stuck or noisy, the lower compartment warms up.'
    },
    {
      name: 'Smart Inverter Main PCB',
      desc: 'The microprocessor board that coordinates convertible modes and inverter frequencies. Power surges can damage this board.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse',
      desc: 'Monitors the cooling coil temperature and activates the heater to melt frost. A failed sensor causes ice to choke the duct.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Heats up during automatic defrost to clear the evaporator coil. When the heater burns out, ice blocks the air channels.'
    },
    {
      name: 'Magnetic Door Gasket Seal',
      desc: 'Prevents warm air entry along the door perimeter. If loose, condensation forms inside and cooling escapes.'
    },
    {
      name: 'Defrost Drain Tube',
      desc: 'Directs melted ice water to the rear pan. If choked with algae or dust, water leaks out under the vegetable drawer.'
    }
  ],
  'BPL': [
    {
      name: 'Hermetic Reciprocating Compressor',
      desc: 'The primary cooling pump in BPL refrigerators. If it makes loud vibrations, gets extremely hot, or trips the power MCB, it needs thorough testing.'
    },
    {
      name: 'PTC Starter Relay & Overload Protector',
      desc: 'Supplies initial power to the compressor start winding. If it burns out, the compressor clicks every few minutes without starting.'
    },
    {
      name: 'Direct Cool Rotary Thermostat',
      desc: 'Regulates cabin temperature in single door models. If the internal bellows fail, the fridge either freezes everything or stops cooling.'
    },
    {
      name: 'Evaporator Fan Motor',
      desc: 'Pushes chilled air into the lower compartment. When the fan motor seizes from moisture, the lower cabin stays warm.'
    },
    {
      name: 'Bimetal Defrost Switch',
      desc: 'Closes the circuit to activate the defrost heater when frost forms. If faulty, the cooling coil becomes choked with solid ice.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Melts frost off the cooling coil so air can circulate. If broken, solid ice blocks the cooling vents.'
    },
    {
      name: 'Cabinet Door Gasket',
      desc: 'Seals the door edges tightly against the steel cabinet. If the rubber is hardened or torn, cold air escapes continuously.'
    },
    {
      name: 'Defrost Drain Hose',
      desc: 'Carries defrost meltwater away from the cooling coil. If choked with dust or food particles, water leaks inside the fridge.'
    }
  ],
  'Acer': [
    {
      name: 'Smart Inverter Compressor',
      desc: 'The variable speed cooling pump in Acerpure refrigerators. If it fails to turn on or vibrates abnormally, the inverter driver is tested.'
    },
    {
      name: 'Digital Temperature Sensor Assembly',
      desc: 'Monitors temperatures across multi-flow compartments. If a sensor drifts, the fridge cools erratically or sounds false alarms.'
    },
    {
      name: 'Evaporator DC Circulation Fan',
      desc: 'Distributes cold air across multi-door compartments. If it stops spinning, upper or lower compartments lose cooling.'
    },
    {
      name: 'Inverter Main Control PCB',
      desc: 'Coordinates sensor inputs, inverter compressor speeds, and digital display controls. Power surges can damage its delicate microcontrollers.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Heats the cooling coil periodically to clear frost. If open, thick frost builds up behind the back panel.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse',
      desc: 'Detects ice accumulation on the cooling coil and prevents heater overheating. If broken, ice chokes the air passages.'
    },
    {
      name: 'Magnetic Door Gasket',
      desc: 'Maintains an airtight boundary around the door. If loose or cracked, warm air enters and creates heavy ice buildup.'
    },
    {
      name: 'Condensate Drain Outlet',
      desc: 'Channels melted defrost water outside. If clogged with dust, water collects inside the vegetable tray.'
    }
  ],
  'Hisense': [
    {
      name: 'Inverter Compressor Driver Board',
      desc: 'Regulates compressor motor speed based on cooling requirements. If the board fails, the compressor will not turn on.'
    },
    {
      name: 'PureFlat Cross-Flow Evaporator Fan',
      desc: 'Circulates chilled air quietly through multi-zone vents. If the fan seizes or slows down, cooling in the food cabin drops.'
    },
    {
      name: 'Motorised Cross-Air Damper',
      desc: 'Controls how much cold air flows from the freezer into the food cabin. If jammed, the food cabin becomes warm.'
    },
    {
      name: 'Multi-Sensor Thermistor Array',
      desc: 'Measures temperatures across independent cooling zones. If a sensor goes bad, cooling becomes erratic.'
    },
    {
      name: 'Defrost Heater Element',
      desc: 'Melts frost off the cooling fins automatically. If the heater is open, thick frost blocks air circulation within days.'
    },
    {
      name: 'Defrost Sensor & Thermal Fuse',
      desc: 'Monitors the cooling coil temperature and turns on the heater to clear frost. A failed sensor causes ice to choke the cooling duct.'
    },
    {
      name: 'Magnetic Door Gasket Seal',
      desc: 'Prevents air leakage on large French door and PureFlat models. If loose or torn, moisture accumulates on shelves.'
    },
    {
      name: 'Defrost Drain Tube & Catch Pan',
      desc: 'Directs melted ice water to the rear pan. If choked with algae or dust, water leaks out under the vegetable drawer.'
    }
  ]
};

function getBrandParts(brandName) {
  return brandPartsMap[brandName] || brandPartsMap['Samsung'];
}

module.exports = {
  brandPartsMap,
  getBrandParts
};
