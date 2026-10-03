// Refrigerator Brand Data for Brands 1 to 6
// 1. Samsung, 2. Whirlpool, 3. Bosch, 4. Electrolux, 5. Liebherr, 6. Godrej
// 100% Unique Brand-Specific Content. No AI buzzwords. 80-90% Tanglish in customer experiences.

const brands1to6 = [
  {
    name: 'Samsung',
    slug: 'samsung-refrigerator-repair-service-in-karur.html',
    h1: 'Samsung Refrigerator Repair Service in Karur',
    metaTitle: 'Samsung Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Samsung refrigerator repair in Karur? Doorstep inspection for Samsung Digital Inverter, Twin Cooling, convertible & double door fridges. Cooling and compressor repairs.',
    searchIntentIntro: 'Searching for Samsung refrigerator repair near me in Karur? Whether your Samsung Digital Inverter double door fridge has stopped chilling milk or the freezer is collecting thick ice sheets, our technicians visit your doorstep across Karur. From Kagithapuramam to Pasupathipalayam and Kovai Road, get reliable Samsung fridge repair near me with honest troubleshooting, genuine replacement spares, and clear guidance.',
    tanglishIntroBox: 'Samsung fridge-la cooling kammi aa irukka? Freezer proper-aa freeze aagala? Compressor continuous-aa odudha illa clicking sound vandhu ninnudha? Technician unga veetukke vandhu complete checkup pannuvanga. Problem enna-nu explain pannitu approval vaangi dhaan repair work proceed aagum.',
    whyRepair: 'Samsung refrigerators are known for Digital Inverter compressors and Twin Cooling Plus airflow systems. When voltage dips hit Karur or the defrost cycle gets interrupted, the evaporator coil chokes with ice, blocking chill to the fresh food zone. Timely technician inspection prevents food spoilage and protects your inverter compressor from burnout.',
    localContent: 'We provide quick Samsung refrigerator repair in Karur covering Pasupathipalayam, Kagithapuramam, Thanthonimalai, Vengamedu, Inam Karur, Kovai Road, and Kovai Road bypass layouts. Our local technicians carry testing multimeters, defrost sensors, fan assemblies, and starter relays directly to your residence.',
    whenToCall: 'Call for technician inspection if your Samsung fridge stops cooling suddenly, makes repeated clicking noises, shows ice buildup behind the freezer panel, leaks water beneath the vegetable tray, or produces an unusual electrical burning smell (in which case, unplug the fridge immediately).',
    types: [
      {
        name: 'Samsung Digital Inverter Double Door Refrigerator Repair',
        badge: 'Frost Free Double Door Fridge',
        desc: 'Samsung frost-free double door models with Digital Inverter technology adjust motor speed automatically. In Karur households, power fluctuations can stress the inverter control board or cause defrost sensor failure.',
        searchIntent: 'Searching for <strong>Samsung double door fridge repair near me</strong> in Karur? We diagnose cooling imbalance between freezer and lower cabin at your doorstep.',
        problems: 'Freezer freezing solid while fresh food cabin stays warm, continuous compressor humming with low chill, water pooling under crisper.',
        checks: 'Defrost sensor resistance, evaporator coil frost pattern, blower fan rpm, and inverter PCB output voltages.',
        parts: 'Defrost sensor, bimetal fuse, evaporator DC fan motor, and inverter control board.',
        whenNeeded: 'When vegetables spoil quickly or milk fails to stay cold on middle shelves.'
      },
      {
        name: 'Samsung Twin Cooling Plus Refrigerator Repair',
        badge: 'Dual Evaporator Refrigerator',
        desc: 'Twin Cooling Plus units use separate evaporator coils for the fridge and freezer compartments to keep food fresh without odor mixing. A stuck damper or fan stall causes uneven cooling.',
        searchIntent: 'Looking for <strong>Samsung refrigerator repair in Karur</strong> for Twin Cooling models? We service dual fan circuits and convertible airflow dampers.',
        problems: 'One compartment cooling normally while the other remains at room temperature, mode switching errors, airflow blockage.',
        checks: 'Dual evaporator fan motors, motorised air flap operation, and compartment thermistor accuracy.',
        parts: 'Compartment thermistors, airflow dampers, DC fan motors, and control module.',
        whenNeeded: 'When odor mixes between compartments or one cabin stops cooling altogether.'
      },
      {
        name: 'Samsung Convertible Refrigerator Repair',
        badge: '5-in-1 Convertible Fridge',
        desc: 'Samsung convertible models allow turning the freezer into extra fridge space. When electronic relays or control dampers fail, the mode conversion does not function.',
        searchIntent: 'Need <strong>Samsung fridge service in Karur</strong> for convertible 5-in-1 fridges? Doorstep inspection for mode switches and temperature boards.',
        problems: 'Convertible mode button unresponsive, freezer failing to convert to fridge temperature, rapid frost accumulation.',
        checks: 'Display touch PCB, compartment baffle dampers, and temperature calibration.',
        parts: 'Mode control switch, airflow baffle motor, and temperature sensors.',
        whenNeeded: 'When convertible settings fail to switch or freezer freezes fresh items.'
      },
      {
        name: 'Samsung Direct Cool Single Door Refrigerator Repair',
        badge: 'Single Door Direct Cool',
        desc: 'Samsung single door direct cool fridges with Digital Inverter or reciprocating compressors provide compact daily storage. Common issues include thermostat failure and gas leakage.',
        searchIntent: 'Looking for <strong>Samsung single door fridge repair in Karur</strong>? Quick doorstep fix for thermostat, starter relay, and cooling coil leaks.',
        problems: 'Ice building into a solid block on freezer box, compressor clicking every three minutes, zero cooling with warm body.',
        checks: 'Rotary thermostat contacts, PTC starter relay, overload protector, and capillary line pressure.',
        parts: 'PTC starter relay, thermostat switch, door gasket, and R600a refrigerant gas.',
        whenNeeded: 'When ice builds up uncontrollably or the compressor refuses to start.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Compartment Not Cooling',
        desc: 'The freezer freezes water into ice, but the lower shelves stay warm and milk spoils within hours.',
        badge: 'Airflow & Defrost',
        label1: 'Probable Cause', val1: 'Defrost heater or sensor failure choking air ducts',
        label2: 'Technician Check', val2: 'Tests heating element resistance and fan airflow',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears iced duct'
      },
      {
        title: 'Compressor Clicking Sound Every Few Minutes',
        desc: 'A distinct click is heard from behind the fridge every 2 to 3 minutes, but the cooling motor does not run.',
        badge: 'Starter Circuit',
        label1: 'Probable Cause', val1: 'Burnt PTC starter relay or voltage trip',
        label2: 'Technician Check', val2: 'Tests relay resistance and compressor winding health',
        label3: 'Resolution', val3: 'Installs new heavy-duty starter relay assembly'
      },
      {
        title: 'Water Leaking Beneath Vegetable Tray',
        desc: 'Defrost water collects inside the cabinet instead of draining into the evaporation tray at the back.',
        badge: 'Drain Line',
        label1: 'Probable Cause', val1: 'Defrost drain hole choked with food residue or ice',
        label2: 'Technician Check', val2: 'Inspects drain trough and rear outlet tube',
        label3: 'Resolution', val3: 'Flushes drain line and clears ice blockage'
      },
      {
        title: 'Excessive Frost Buildup on Freezer Walls',
        desc: 'Thick white snow-like frost forms rapidly across the freezer compartment within two days.',
        badge: 'Door Seal / Sensor',
        label1: 'Probable Cause', val1: 'Worn magnetic door gasket or failed defrost timer',
        label2: 'Technician Check', val2: 'Performs paper slip test on door seal and tests bimetal',
        label3: 'Resolution', val3: 'Aligns or replaces door gasket and bimetal switch'
      },
      {
        title: 'Digital Inverter PCB Error Light Blinking',
        desc: 'The refrigerator remains dead or compressor speed fluctuates with blinking diagnostic lights.',
        badge: 'Control Board',
        label1: 'Probable Cause', val1: 'Power surge damage to inverter power module',
        label2: 'Technician Check', val2: 'Measures DC rail voltages and IPM signal lines',
        label3: 'Resolution', val3: 'Repairs power circuitry or replaces inverter PCB'
      },
      {
        title: 'Continuous Motor Running Without Cut-off',
        desc: 'The compressor runs day and night without stopping, leading to high electricity bills.',
        badge: 'Cooling Efficiency',
        label1: 'Probable Cause', val1: 'Low refrigerant charge or faulty temperature sensor',
        label2: 'Technician Check', val2: 'Checks gas operating pressure and sensor resistance',
        label3: 'Resolution', val3: 'Brazes leak joint and recharges R600a refrigerant'
      }
    ],
    customerExperiences: [
      {
        location: 'Kagithapuramam',
        title: 'Samsung 253L Inverter Double Door Cooling Drop Fix',
        tanglishText: 'Kagithapuramam Railway Colony kitta irundha customer call pannanga. Avanga Samsung Digital Inverter double door fridge-la freezer matrum ice aagudhu, keezha milk and vegetables cooling illama spoil aagudhu-nu sonnanga. Technician spot-ku poi back panel remove pannadhula, defrost bimetal sensor fail aagi cooling coil full-aa ice kattirundhadhu. Defrost sensor replace panni hot air stream vechu blocked ice clear pannom. Airflow duct open aagi 40 minutes-la lower cabin-layum proper cooling start aachu. Customer romba satisfied.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Samsung 324L Twin Cooling Clicking Noise Repair',
        tanglishText: 'Pasupathipalayam 7th Cross-la irundha customer kitta irundhu call vandhudhu. Fridge back side-la irundhu every 3 minutes-ku click-clack sound kekkudhu, compressor start aagala-nu sonnanga. Technician check panni paathadhula starter relay overheat aagi contact burn aagirundhadhu. Multimeter vechu compressor motor winding ohms healthy-aa irukka-nu verify pannitu, genuine PTC relay install pannom. Ammeter-la running current steady-aa irundhadhu, cooling instant-aa pick up aachu.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Samsung Direct Cool Single Door Water Leakage Solution',
        tanglishText: 'Thanthonimalai central bazaar market road-la irukra residence-la Samsung single door fridge-la veg tray kulla daily water overflow aagudhu-nu complaint pannanga. Technician inspect pannadhula defrost drain cup dust and algae-la choke aagirundhadhu. High-pressure warm water flush panni drain pipe-a completely clear pannom. Rear compressor tray-ku water proper-aa discharge aagudha-nu check pannitu door gasket alignment kooda adjust pannom. Problem periya expense illama spot-laye solve aachu.'
      },
      {
        location: 'Vengamedu',
        title: 'Samsung Convertible 5-in-1 Mode Damper Rectification',
        tanglishText: 'Vengamedu bypass kitta pudhiya veetula Samsung convertible double door fridge use panranga. Freezer-a normal fridge mode-ku switch pannina temperature balance aagama items freeze aagudhu-nu sonnanga. Technician inspect panni motorised air damper flap stuck aagi irundhadhai kandupidichanga. Damper motor replace panni display PCB settings recalibrate pannom. Rendu compartment-layum uniform cooling maintain aagudha-nu digital thermometer vechu confirm pannom.'
      },
      {
        location: 'Inam Karur',
        title: 'Samsung 275L Inverter Motherboard Voltage Surge Fix',
        tanglishText: 'Inam Karur main road-la heavy lightning and voltage fluctuation apram Samsung fridge power on aagala-nu customer contact pannanga. Technician check pannadhula main inverter PCB-la fuse and input varistor burn aagirundhadhu. Compressor winding safe-aa irundhadhai test pannitu, board power stage-a bench repair panni test pannom. Re-installation ku apram inverter motor smooth-aa cycle aachu. Customer romba relief aanaanga.'
      },
      {
        location: 'Kovai Road',
        title: 'Samsung Double Door Magnetic Gasket Replacement',
        tanglishText: 'Kovai Road layout-la oru customer avanga Samsung fridge door close panniyum side-la light gap irundhu internal cabinet-la water droplets kattudhu-nu sonnanga. Old rubber gasket-la magnet weak aagi mold formed aagirundhadhu. Original matching profile magnetic gasket order panni replace pannom. Gasket airtight grip super-aa set aachu, cabinet internal humidity problem completely arrest aachu.'
      },
      {
        location: 'Vennaimalai',
        title: 'Samsung Frost Free Refrigerator Gas Recharge & Pinhole Braze',
        tanglishText: 'Vennaimalai housing unit-la Samsung fridge compressor odite irundhadhu aana freezer and fresh food section rendulayume zero cooling. Technician vacuum gauge and electronic sniffer vechu test pannadhula copper suction line-la micro pinhole leak irundhadhu. Silver brazing panni leak arrest pannom, deep vacuum pull panni exact weight R600a gas charge pannom. Frost pattern freezer coil full-aa spread aagi cooling perfectly restore aachu.'
      }
    ],
    whyChoose: [
      'Experienced technicians with hands-on practice in Samsung Digital Inverter and Twin Cooling circuits',
      'Doorstep inspection across all Karur residential localities with fast response',
      'Honest fault diagnosis and transparent explanation before any replacement',
      'Quality spare parts matching Samsung model specifications',
      'Post-repair cooling verification and temperature testing before handover'
    ]
  },
  {
    name: 'Whirlpool',
    slug: 'whirlpool-refrigerator-repair-service-in-karur.html',
    h1: 'Whirlpool Refrigerator Repair Service in Karur',
    metaTitle: 'Whirlpool Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Whirlpool refrigerator repair in Karur? Doorstep service for Whirlpool 6th Sense, Intellifresh, Protton 3-door & single door fridges. Cooling and part repairs.',
    searchIntentIntro: 'Searching for Whirlpool refrigerator repair near me in Karur? When your Whirlpool 6th Sense frost-free fridge stops cooling food or the Icemagic single door compressor clicks without starting, our technicians provide quick doorstep repair across Karur. Whether you are located in Karur Town, Sengunthapuram, or Rayanur, find verified Whirlpool fridge repair near me with transparent estimates and genuine spares.',
    tanglishIntroBox: 'Whirlpool fridge-la cooling ninnu pocha? Protton 3-door model middle compartment warm-aa irukka? Starter relay tick-tick nu sound kudukudha? Technician unga veetukke vandhu system-a examine pannuvanga. Accurate fault kandupidichu reasonable cost-la repair mudipanga.',
    whyRepair: 'Whirlpool refrigerators use 6th Sense temperature control and Intellifresh airflow ducts to keep groceries fresh. In Karur summer conditions or after voltage fluctuations, components like the defrost bimetal, thermostat, or start relay can wear out. Timely service restores cold air circulation and protects the sealed compressor.',
    localContent: 'We service Whirlpool refrigerators across all areas in Karur including Karur Town, Sengunthapuram, Rayanur, Thorakkalpatti, and Velayuthampalayam Road. Our technicians carry replacement thermostats, relays, fan motors, and defrost sensors for immediate doorstep repairs.',
    whenToCall: 'Reach out for inspection if your Whirlpool fridge stops cooling the lower cabin, shows continuous frost accumulation, leaks water onto the kitchen floor, produces humming compressor noise without chill, or gives an electrical burning smell (switch off main power immediately).',
    types: [
      {
        name: 'Whirlpool Intellifresh Double Door Refrigerator Repair',
        badge: 'Frost Free Double Door',
        desc: 'Whirlpool Intellifresh frost-free refrigerators use microprocessors to balance cooling between compartments. Faulty fan motors or defrost circuits frequently lead to cooling loss in the food section.',
        searchIntent: 'Searching for <strong>Whirlpool double door fridge repair near me</strong> in Karur? We test Intellifresh defrost systems and blower fans at your doorstep.',
        problems: 'Freezer section cold while lower shelves remain at room temperature, fan motor vibrating, water leaking inside crisper.',
        checks: 'Bimetal thermostat, defrost timer, evaporator fan motor, and return air ducts.',
        parts: 'Defrost timer, bimetal switch, evaporator fan motor, and heater element.',
        whenNeeded: 'When milk spoils quickly or airflow from back vents feels weak.'
      },
      {
        name: 'Whirlpool Protton Triple Door Refrigerator Repair',
        badge: '3-Door Refrigerator',
        desc: 'Whirlpool Protton multi-door fridges have three separate zones for freezer, fresh food, and active fresh vegetables. Blocked air ducts or failed damper flaps cause temperature imbalance.',
        searchIntent: 'Looking for <strong>Whirlpool refrigerator repair in Karur</strong> for Protton 3-door models? Doorstep diagnosis for multi-zone dampers.',
        problems: 'Middle vegetable drawer freezing or remaining warm, bottom bin smelling damp, clicking sound from back.',
        checks: 'Air damper flap mechanism, multi-zone thermistors, and defrost drainage.',
        parts: 'Motorised damper flap, temperature sensors, and drain tray.',
        whenNeeded: 'When middle drawer fails to maintain freshness or vegetables freeze.'
      },
      {
        name: 'Whirlpool Icemagic Single Door Refrigerator Repair',
        badge: 'Direct Cool Single Door',
        desc: 'Whirlpool Icemagic direct cool models provide reliable daily freezing for compact households. Common issues involve thermostat bellows failure, burnt starter relays, and gas leaks.',
        searchIntent: 'Need <strong>Whirlpool single door fridge repair in Karur</strong>? Fast fix for Icemagic thermostat, relay, and cooling coil problems.',
        problems: 'Freezer box icing up uncontrollably, compressor clicking without starting, zero cooling with warm sides.',
        checks: 'Rotary thermostat, PTC starter relay, overload protector, and gas pressure.',
        parts: 'Starter relay, mechanical thermostat switch, and door gasket.',
        whenNeeded: 'When ice builds up like a rock or the compressor will not ignite.'
      }
    ],
    problems: [
      {
        title: 'Lower Cabin Food Spoilage',
        desc: 'Freezer operates fine but lower compartment cooling drops completely, spoiling cooked food and milk.',
        badge: 'Airflow Choked',
        label1: 'Probable Cause', val1: 'Defrost bimetal switch or timer failure',
        label2: 'Technician Check', val2: 'Inspects evaporator coil ice buildup and fan rotation',
        label3: 'Resolution', val3: 'Replaces bimetal and manually clears frozen ducts'
      },
      {
        title: 'Compressor Humming Without Starting',
        desc: 'Compressor attempts to start with a buzzing hum and clicks off after a few seconds without cooling.',
        badge: 'Starter Relay',
        label1: 'Probable Cause', val1: 'Burnt PTC relay or weak capacitor',
        label2: 'Technician Check', val2: 'Measures relay resistance and compressor winding ohms',
        label3: 'Resolution', val3: 'Replaces starter relay and overload protector'
      },
      {
        title: 'Water Dripping from Internal Freezer Panel',
        desc: 'Melted defrost water drips inside the cabinet rather than flowing into the rear drain pan.',
        badge: 'Drainage Issue',
        label1: 'Probable Cause', val1: 'Blocked defrost drain line or frozen drain trough',
        label2: 'Technician Check', val2: 'Opens rear interior panel and clears drainage chute',
        label3: 'Resolution', val3: 'Flushes debris with warm water and tests drainage'
      },
      {
        title: 'Excessive Ice Layer in Single Door Freezer',
        desc: 'Direct cool freezer box gets filled with thick ice that prevents closing the freezer flap.',
        badge: 'Thermostat Fault',
        label1: 'Probable Cause', val1: 'Thermostat contact welded or capillary dislodged',
        label2: 'Technician Check', val2: 'Tests thermostat cut-off temperature in ice bath',
        label3: 'Resolution', val3: 'Installs new calibrated rotary thermostat'
      },
      {
        title: 'Loud Whirring Sound from Freezer',
        desc: 'A buzzing or whirring noise stops whenever the freezer door is opened and resumes upon closing.',
        badge: 'Fan Motor',
        label1: 'Probable Cause', val1: 'Evaporator fan blade rubbing against accumulated frost',
        label2: 'Technician Check', val2: 'Inspects fan bearing and clears coil frost buildup',
        label3: 'Resolution', val3: 'Defrosts coil and lubricates or replaces fan motor'
      },
      {
        title: 'Continuous Compressor Running',
        desc: 'The fridge runs continuously without cycling off, consuming excessive electricity.',
        badge: 'Refrigerant / Seal',
        label1: 'Probable Cause', val1: 'Pinhole gas leak or worn door magnetic gasket',
        label2: 'Technician Check', val2: 'Checks suction pressure and inspects door seal grip',
        label3: 'Resolution', val3: 'Fixes leak point and recharges refrigerant'
      }
    ],
    customerExperiences: [
      {
        location: 'Karur Town',
        title: 'Whirlpool 265L 6th Sense Double Door Defrost Repair',
        tanglishText: 'Karur Town flower market kitta irundha customer call pannanga. Avanga Whirlpool 6th Sense fridge-la freezer matrum ice aagudhu, keezha cooling ninnu milk curdling aagudhu-nu sonnanga. Technician visit panni back panel khazhati paathadhula defrost timer switch stuck aagirundhadhu. Puthiya genuine timer and bimetal change pannom. 30 minutes hot water steam-la block aana ice clear panni fan check pannom. Keezha cooling vents-la nalla chill air வர start aachu. Customer romba happy.'
      },
      {
        location: 'Sengunthapuram',
        title: 'Whirlpool Icemagic Single Door Starter Relay Fix',
        tanglishText: 'Sengunthapuram residential area-la Whirlpool single door fridge-la cooling ninnu compressor clicking sound varudhu-nu sonnanga. Technician spot-ku poi compressor terminal check pannadhula PTC starter relay overheat aagi crumbly aagirundhadhu. Compressor winding megger test panni coils safe-aa irukkadhu-nu confirm pannitu puthiya relay match panni fit pannom. Unit udane start aagi freezer plate chill aaga aarambichadhu.'
      },
      {
        location: 'Rayanur',
        title: 'Whirlpool Protton 3-Door Middle Cabin Cooling Restoration',
        tanglishText: 'Rayanur-la Whirlpool Protton triple door fridge use panra customer contact pannanga. Middle fresh cabin-la vegetables spoil aagudhu, cooling-ye vara maatudhu-nu sonnanga. Technician inspect pannadhula motorised damper air flap lint and frozen moisture nala closed position-la stuck aagirundhadhu. Damper assembly clean panni re-align pannom. Airflow smooth-aa circulate aagi target temperature reach aachu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Whirlpool Double Door Water Overflow Problem Solve',
        tanglishText: 'Thorakkalpatti layout-la Whirlpool double door fridge bottom veg box kulla water thengi floor-la leak aagudhu-nu sonnanga. Technician inner back grill remove panni drain trough inspect pannadhula dust particle block aagirundhadhu. Flexible cleaning wire and hot water pottu drain pipe flush pannom. Rear compressor tray-ku water drop by drop flow aaguradha verify pannom. Problem periya expense illama spot-la solve aachu.'
      },
      {
        location: 'Velayuthampalayam Road',
        title: 'Whirlpool Frost Free Refrigerator Fan Motor Replacement',
        tanglishText: 'Velayuthampalayam Road bypass kitta Whirlpool frost-free fridge-la oru periya grinding sound varudhu-nu complain pannanga. Technician paathadhula evaporator fan motor bush theinju blade frame-la scratch aagitu irundhadhu. High-speed DC fan motor replace pannom. Fridge ippo whisper quiet-aa run aagudhu, cooling distribution super-aa irukku-nu customer feed back thandhanga.'
      }
    ],
    whyChoose: [
      'Knowledgeable technicians handling Whirlpool 6th Sense, Intellifresh, and Protton platforms',
      'quick doorstep visit across Karur Town and surrounding areas',
      'Systematic multimeter testing of starter circuits and defrost components',
      'Affordable repair estimates with zero hidden charges',
      'Thorough testing of cooling and temperature cut-off before completion'
    ]
  },
  {
    name: 'Bosch',
    slug: 'bosch-refrigerator-repair-service-in-karur.html',
    h1: 'Bosch Refrigerator Repair Service in Karur',
    metaTitle: 'Bosch Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Bosch refrigerator repair in Karur? Doorstep inspection for Bosch VarioInverter, VitaFresh, multiAirflow double door & side-by-side fridges. Cooling diagnosis.',
    searchIntentIntro: 'Searching for Bosch refrigerator repair near me in Karur? When your quality Bosch VarioInverter refrigerator beeps temperature alarms or the VitaFresh compartment loses cooling, our technicians deliver careful doorstep diagnosis across Karur. Whether you reside in Thanthonimalai, Pasupathipalayam, or Vengamedu, get reliable Bosch fridge repair near me with trained component troubleshooting and authentic replacement spares.',
    tanglishIntroBox: 'Bosch fridge-la temperature alarm beep sound adichite irukka? VarioInverter compressor start aagala? VitaFresh section-la cooling balance miss aagudha? Bosch precision German engineering-ku trained technicians unga doorstep-la attend pannuvanga. Systematic multimeter testing panni accurate solution provide panrom.',
    whyRepair: 'Bosch refrigerators incorporate VarioInverter compressor drives, VitaFresh humidity chambers, and multiAirflow distribution channels. In Karur conditions, fine electronics can react to supply voltage dips or clogged condenser airflow. Timely service keeps electronic dampers and inverter modules operating smoothly without compressor failure.',
    localContent: 'We provide specialized Bosch refrigerator repair in Karur serving Thanthonimalai, Pasupathipalayam, Vengamedu bypass, Inam Karur, and Kovai Road. Our technicians arrive with precision multimeters, sensor test probes, VarioInverter components, and vacuum charging rigs.',
    whenToCall: 'Contact our technicians if your Bosch fridge sounds persistent warning alarms, displays error codes, exhibits cold freezer but warm food compartments, builds moisture around door gaskets, or emits a burnt electrical odor (unplug from socket immediately).',
    types: [
      {
        name: 'Bosch VarioInverter Double Door Refrigerator Repair',
        badge: 'VarioInverter Frost Free',
        desc: 'Bosch double door refrigerators use VarioInverter compressors that modulate speed across multiple steps. Inverter module failure or sensor drift can disrupt cooling cycles.',
        searchIntent: 'Searching for <strong>Bosch double door fridge repair near me</strong> in Karur? We diagnose VarioInverter drive modules and multiAirflow ducts.',
        problems: 'Inverter compressor not turning over, temperature alarm beeping repeatedly, cooling drop in lower fresh food cabin.',
        checks: 'VarioInverter drive voltages, multiAirflow fan speed, and evaporator sensor resistance.',
        parts: 'Inverter power module, multiAirflow DC fan, and temperature sensors.',
        whenNeeded: 'When the alarm beeps continuously or food spoils on door shelves.'
      },
      {
        name: 'Bosch VitaFresh Multi-Door Refrigerator Repair',
        badge: 'VitaFresh Multi-Zone',
        desc: 'Bosch VitaFresh multi-door refrigerators maintain dedicated near-0°C humidity zones for meat and vegetables. Electronic damper failures cause freezing or premature spoilage.',
        searchIntent: 'Looking for <strong>Bosch refrigerator repair in Karur</strong> for VitaFresh models? Doorstep testing for electronic dampers and zone sensors.',
        problems: 'Vegetables freezing solid in VitaFresh crisper, meat compartment remaining warm, touch panel error codes.',
        checks: 'Motorised damper valve, humidity sensors, and digital control PCB.',
        parts: 'Zone thermistors, electronic damper motor, and display wiring harness.',
        whenNeeded: 'When crisper drawer temperature drifts or vegetables turn icy.'
      },
      {
        name: 'Bosch Side-by-Side Refrigerator Repair',
        badge: 'Side-by-Side Inverter',
        desc: 'Bosch side-by-side refrigerators feature high-capacity dual cooling circuits with digital touch control. Problems include touch panel failure, airflow blockage, and gas leaks.',
        searchIntent: 'Need <strong>Bosch fridge service in Karur</strong> for side-by-side models? Diagnostic inspection for touch displays, dual fans, and sealed circuits.',
        problems: 'Touch screen buttons not responding, freezer unable to reach sub-zero temperatures, water dripping inside.',
        checks: 'Touch display PCB, dual evaporator fans, and defrost heating elements.',
        parts: 'Display control board, DC circulation fan, and defrost heater element.',
        whenNeeded: 'When display panel flickers or one half loses cooling performance.'
      }
    ],
    problems: [
      {
        title: 'Temperature Alarm Sounding Continuously',
        desc: 'The internal alarm beeps persistently to signal that the cabinet temperature has risen above safe levels.',
        badge: 'Thermal Alert',
        label1: 'Probable Cause', val1: 'Air damper stuck closed or defrost sensor failure',
        label2: 'Technician Check', val2: 'Measures compartment temperatures and tests damper motor',
        label3: 'Resolution', val3: 'Re-aligns or replaces motorized air damper'
      },
      {
        title: 'VarioInverter Compressor Failing to Ignite',
        desc: 'The compressor stays silent while the electronic board attempts to trigger motor start without success.',
        badge: 'Inverter Board',
        label1: 'Probable Cause', val1: 'Blown IPM driver on VarioInverter board',
        label2: 'Technician Check', val2: 'Tests DC bus voltage and 3-phase compressor terminal balance',
        label3: 'Resolution', val3: 'Restores power supply circuit or replaces inverter board'
      },
      {
        title: 'VitaFresh Drawer Freezing Fresh Produce',
        desc: 'Vegetables and fruits in the VitaFresh compartment turn into solid ice due to excessive cold airflow.',
        badge: 'Zone Damper',
        label1: 'Probable Cause', val1: 'Zone thermistor drifted out of calibration',
        label2: 'Technician Check', val2: 'Reads thermistor resistance curve with multimeter',
        label3: 'Resolution', val3: 'Installs new calibrated NTC sensor'
      },
      {
        title: 'Frost Choking multiAirflow Evaporator',
        desc: 'A dense layer of frost blocks rear air vents, cutting off chilled circulation to the main refrigerator.',
        badge: 'Defrost Cycle',
        label1: 'Probable Cause', val1: 'Open defrost heating element or blown thermal cut-off',
        label2: 'Technician Check', val2: 'Measures element continuity and inspects fuse',
        label3: 'Resolution', val3: 'Replaces heating element and clears duct ice'
      },
      {
        title: 'Condensation Droplets on Door Gasket Lip',
        desc: 'Moisture droplets accumulate around the inner door frame, indicating warm air infiltration.',
        badge: 'Door Boundary',
        label1: 'Probable Cause', val1: 'Magnetic door gasket misaligned or deformed',
        label2: 'Technician Check', val2: 'Inspects door plumb and magnetic seal grip',
        label3: 'Resolution', val3: 'Adjusts door hinges and re-seats magnetic gasket'
      },
      {
        title: 'Gradual Loss of Chilling Performance',
        desc: 'Compressor runs continuously at high speed, but cabinets gradually lose cooling over several days.',
        badge: 'Refrigerant Circuit',
        label1: 'Probable Cause', val1: 'Micro-leak in copper evaporator or condenser joint',
        label2: 'Technician Check', val2: 'Conducts nitrogen pressure test to find leak spot',
        label3: 'Resolution', val3: 'Brazes joint, pulls deep vacuum, and refills R600a'
      }
    ],
    customerExperiences: [
      {
        location: 'Thanthonimalai',
        title: 'Bosch VarioInverter Double Door Beep Alarm Diagnosis',
        tanglishText: 'Thanthonimalai area-la oru customer avanga Bosch VarioInverter double door fridge continuous-aa beep sound adichite irukku, food compartment warm aagudhu-nu sonnanga. Technician spot-ku poi paathadhula internal temperature set point reach aagadha nala warning buzzer trigger aagirundhadhu. Multi-meter vechu inspect pannadhula multiAirflow DC fan motor jam aagi cold air circulate aagala. Puthiya DC fan motor match panni install pannom. 30 minutes-la alarm silence aagi normal chill establish aachu.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Bosch VitaFresh Drawer Freezing Vegetable Problem',
        tanglishText: 'Pasupathipalayam main layout-la Bosch VitaFresh fridge use panra family contact pannanga. VitaFresh drawer kulla vecha thakkali and keerai solid ice madhiri freeze aagudhu-nu sonnanga. Technician inspect panni paathadhula motorised damper baffle fully open-la stuck aagi zero degree cold air continuously rush aagitu irundhadhu. Damper unit change panni thermistor calibration verify pannom. Fresh food vegetables fresh-aa maintain aaga aarambichadhu.'
      },
      {
        location: 'Vengamedu',
        title: 'Bosch 415L Inverter Driver PCB Module Service',
        tanglishText: 'Vengamedu bypass kitta Bosch 415L fridge sudden power cut-ku apram completely silent aagi cooling ninnu pochu. Technician visit panni VarioInverter board check pannadhula power line input MOV and bridge rectifier fuse tripped aagirundhadhu. Compressor winding safe-aa 12 ohms balance irundhadhu. Board circuit rebuild panni bench test panni re-fit pannom. Motor smooth-aa start aagi whisper silent-aa cycle run aachu.'
      },
      {
        location: 'Inam Karur',
        title: 'Bosch Frost Free Rear Duct Defrost Heater Fix',
        tanglishText: 'Inam Karur-la Bosch fridge freezer-la matrum ice irundhadhu, fresh food compartment full-aa warm. Technician inner back casing open panni paathadhula evaporator fins mela solid snow block aagi air passages closed-aa irundhadhu. Multimeter check-la defrost heater glass element open circuit kaatuchu. Matched OEM replacement heater fit panni ice completely melt pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Bosch Side-by-Side Display Touch Panel Recovery',
        tanglishText: 'Kovai Road housing colony-la Bosch side-by-side fridge door display touch buttons press panna respond aagala-nu complaint. Technician door hinge wiring loom check pannadhula continuous door swing nala 2 internal ribbon wires fatigue aagi cut aagirundhadhu. Harness repair panni flexible conduit protection kuduthom. Touch temperature settings instant-aa operate aachu, customer romba relieved.'
      },
      {
        location: 'Vennaimalai',
        title: 'Bosch Bottom Freezer Gasket Seal Realignment',
        tanglishText: 'Vennaimalai-la Bosch bottom freezer model door rubber corner-la light gap irundhu fridge frame mela condensation droplets oothudhu-nu sonnanga. Warm humid Karur air ulla penetrate aagirundhadhu. Technician magnetic gasket remove panni heat shaping treatment panni door hinge level correct-aa align pannanga. Gap 100% close aagi internal sweating problem theerndhadhu.'
      },
      {
        location: 'Kovai Road',
        title: 'Bosch Precision Gas Evacuation & R600a Recharge',
        tanglishText: 'Kovai Road residence-la Bosch fridge compressor odite irundhadhu aana cooling absent. Technician pressure gauge vechu test pannadhula sealed line-la low pressure irundhadhu. Nitrogen holding test-la suction line brazed joint micro leak confirm aachu. Joint re-braze panni high-vacuum pump vechu moisture pull pannitu, digital weight scale-la exact R600a charge pannom. Frost pattern perfect-aa create aachu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Bosch Multi-Zone Temperature Sensor Calibration',
        tanglishText: 'Thorakkalpatti-la Bosch double door fridge-la cooling fluctuation problem irundhadhu. Sensor reading irregular-aa signal send panni compressor unneccessarily off aagitu irundhadhu. Technician evaporator and cabin thermistors-a water bath calibration test panni out-of-range sensor-a replace pannanga. Temperature perfectly stable aagi machine normal-aa function aachu.'
      }
    ],
    whyChoose: [
      'Technicians trained in Bosch VarioInverter and VitaFresh multiAirflow systems',
      'Diagnostic testing with precision digital multimeters and temperature sensors',
      'quick doorstep support across all Karur localities',
      'Transparent fault explanation and upfront spare pricing',
      'Post-repair temperature profiling to verify proper cooling recovery'
    ]
  },
  {
    name: 'Electrolux',
    slug: 'electrolux-refrigerator-repair-service-in-karur.html',
    h1: 'Electrolux Refrigerator Repair Service in Karur',
    metaTitle: 'Electrolux Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Electrolux refrigerator repair in Karur? Doorstep service for Electrolux NutriFresh inverter, TasteLock & French door fridges. Cooling and part repair.',
    searchIntentIntro: 'Searching for Electrolux refrigerator repair near me in Karur? Whether your Electrolux NutriFresh inverter fridge is not maintaining cooling or the TasteLock crisper has moisture accumulation, our technicians provide quick doorstep repair across Karur. From Thorakkalpatti to Periya Andankovil and Kagithapuramam, get dependable Electrolux fridge repair near me with verified troubleshooting and transparent pricing.',
    tanglishIntroBox: 'Electrolux fridge-la cooling drop aagirukka? Freezer-la ice block aagi fan sound kekkudha? NutriFresh inverter board proper-aa respond panna maatudha? Technician unga veetukke vandhu system-a check pannuvanga. Accurate diagnosis panni genuine spares vechu repair mudipanga.',
    whyRepair: 'Electrolux refrigerators feature NutriFresh inverter technology, TasteLock humidity auto-regulation, and multi-flow cooling ducts. When environmental humidity or voltage fluctuations hit Karur, airflow fans or defrost sensors can act up. quick repair prevents spoiled food and protects your inverter compressor.',
    localContent: 'We service Electrolux refrigerators throughout Karur including Thorakkalpatti, Periya Andankovil, Kagithapuramam, Pasupathipalayam, and Karur Town. Our technicians carry diagnostic gear and replacement parts for convenient doorstep service.',
    whenToCall: 'Call for technician inspection if your Electrolux fridge stops cooling the food cabin, rattles inside the freezer, leaks water beneath vegetable bins, fails to turn on, or gives off an electrical burning odor (unplug immediately).',
    types: [
      {
        name: 'Electrolux NutriFresh Inverter Double Door Refrigerator Repair',
        badge: 'NutriFresh Inverter',
        desc: 'Electrolux NutriFresh double door refrigerators adjust inverter compressor speeds to keep internal temperatures steady. Sensor drift or inverter board faults reduce chilling performance.',
        searchIntent: 'Searching for <strong>Electrolux double door fridge repair near me</strong> in Karur? We diagnose NutriFresh inverter boards and multi-flow vents.',
        problems: 'Inverter compressor not spinning, food spoiling on lower shelves, defrost error blinking.',
        checks: 'Inverter output frequency, multi-flow fan motor, and evaporator thermistor.',
        parts: 'Inverter PCB, evaporator fan motor, and defrost sensor.',
        whenNeeded: 'When temperatures fluctuate or compressor fails to cycle up.'
      },
      {
        name: 'Electrolux French Door & Multi-Door Refrigerator Repair',
        badge: 'French Door Bottom Freezer',
        desc: 'Electrolux French door fridges feature wide storage and bottom-mounted freezers. Electronic dampers and dual fans can fail, leading to uneven compartment cooling.',
        searchIntent: 'Looking for <strong>Electrolux refrigerator repair in Karur</strong> for French door models? Doorstep service for dampers, fans, and sensors.',
        problems: 'Freezer operating normally while wide fresh food cabin stays warm, door seal condensation, ice maker stalling.',
        checks: 'Air damper flap motor, dual circulation fans, and hinge wiring.',
        parts: 'Electronic damper valve, DC blower motor, and door gasket.',
        whenNeeded: 'When the main compartment warms up or condensation forms on door frames.'
      }
    ],
    problems: [
      {
        title: 'Fresh Food Section Losing Chill',
        desc: 'Freezer holds sub-zero cold, but items in the upper or lower fresh food section remain warm.',
        badge: 'Airflow Issue',
        label1: 'Probable Cause', val1: 'Defrost sensor or multi-flow fan motor failure',
        label2: 'Technician Check', val2: 'Inspects evaporator coil ice buildup and fan rotation',
        label3: 'Resolution', val3: 'Replaces defrost sensor and clears frozen air ducts'
      },
      {
        title: 'Clicking Relay Sound Behind Refrigerator',
        desc: 'A repeated clicking sound occurs every few minutes with zero cooling production.',
        badge: 'Starter Circuit',
        label1: 'Probable Cause', val1: 'PTC starter relay or overload protector failure',
        label2: 'Technician Check', val2: 'Measures relay resistance and compressor winding health',
        label3: 'Resolution', val3: 'Installs new matched starter relay assembly'
      },
      {
        title: 'Water Gathering in TasteLock Crisper',
        desc: 'Excess condensation collects beneath vegetable drawers, spoiling leafy greens.',
        badge: 'Drainage Issue',
        label1: 'Probable Cause', val1: 'Clogged defrost drain tube or blocked drain trough',
        label2: 'Technician Check', val2: 'Inspects drain channel and flushes debris',
        label3: 'Resolution', val3: 'Cleans and flushes defrost drainage pathway'
      },
      {
        title: 'Vibrating Fan Noise from Freezer Duct',
        desc: 'A rattling or whirring noise occurs inside the freezer and stops when the door is opened.',
        badge: 'Fan Assembly',
        label1: 'Probable Cause', val1: 'Fan blade contacting ice frost or worn motor bearing',
        label2: 'Technician Check', val2: 'Checks blade clearance and motor shaft play',
        label3: 'Resolution', val3: 'Clears coil frost and lubricates or replaces fan motor'
      },
      {
        title: 'NutriFresh Inverter PCB Unresponsive',
        desc: 'The refrigerator has power at the wall outlet but will not illuminate or turn on the motor.',
        badge: 'Control Board',
        label1: 'Probable Cause', val1: 'Power surge damage to main control motherboard',
        label2: 'Technician Check', val2: 'Tests input fuse, varistor, and DC regulator stages',
        label3: 'Resolution', val3: 'Repairs power circuitry or replaces control board'
      },
      {
        title: 'Continuous Compressor Run with Zero Ice',
        desc: 'The motor runs warm continuously, but the freezer is unable to freeze water.',
        badge: 'Refrigerant Leak',
        label1: 'Probable Cause', val1: 'Refrigerant leak in sealed aluminum or copper tubing',
        label2: 'Technician Check', val2: 'Performs pressure leak test on sealed circuit',
        label3: 'Resolution', val3: 'Brazes leak joint, vacuums lines, and recharges R600a'
      }
    ],
    customerExperiences: [
      {
        location: 'Thorakkalpatti',
        title: 'Electrolux NutriFresh Double Door Cooling Recovery',
        tanglishText: 'Thorakkalpatti layout-la oru customer call pannanga. Avanga Electrolux NutriFresh inverter double door fridge-la freezer matrum ice aagudhu, keezha cooling ninnu pochu-nu sonnanga. Technician spot-ku poi back panel dismantle pannadhula defrost sensor fail aagi evaporator coil full-aa ice kattirundhadhu. Defrost sensor change panni duct ice melt pannom. Fan motor check panni re-assemble pannadhuku apram lower shelves-la 40 minutes-la proper cooling recover aachu.'
      },
      {
        location: 'Periya Andankovil',
        title: 'Electrolux French Door TasteLock Moisture Overflow Fix',
        tanglishText: 'Periya Andankovil-la Electrolux French door fridge use panra family contact pannanga. TasteLock crisper kulla water thengi vegetables spoil aagudhu-nu sonnanga. Technician inspect panni paathadhula defrost water drain channel lint-la block aagi cabinet kulla kottudhu. Drain tube hot water stream vechu de-clog pannom. Water rear tray-ku easily flow aagudha-nu test panni solve pannom.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Electrolux Inverter Compressor Starter Relay Replacement',
        tanglishText: 'Kagithapuramam-la Electrolux fridge-la clicking sound vandhu compressor cut aagudhu-nu complaint. Technician spot-la ammeter and multimeter vechu test pannadhula starter relay overheat aagi contact burn aagirundhadhu. Genuine replacement relay install panni compressor current draw check pannom. Motor smooth-aa start aagi steady chill create aachu.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Electrolux Frost Free Evaporator Fan Motor Change',
        tanglishText: 'Pasupathipalayam 4th Street-la Electrolux frost-free fridge-la oru loud whirring sound kekkudhu-nu sonnanga. Technician paathadhula evaporator fan motor bush theinju blade frame-la touch aagitu irundhadhu. New DC fan motor replace panni air circulation test pannom. Machine ippo completely silent-aa run aagudhu.'
      },
      {
        location: 'Karur Town',
        title: 'Electrolux Double Door Magnetic Gasket Renewal',
        tanglishText: 'Karur Town residential layout-la Electrolux fridge door rubber loose aagi side-la gap irundhadhu. Cold air veliya leak aagi compressor continuous-aa oditu irundhadhu. Original matching profile magnetic gasket replace panni door alignment adjust pannom. Tight airtight grip establish aagi cooling retention restore aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Electrolux Refrigerant Leakage Braze & R600a Refill',
        tanglishText: 'Kovai Road bypass kitta Electrolux fridge motor odite irundhadhu aana freezer-la chill illa. Technician pressure gauge vechu test pannadhula copper filter drier kitta hairline crack leak irundhadhu. Pinhole silver braze panni, deep vacuum pull panni exact weight R600a gas charge pannom. Cooling within 45 minutes perfectly normal aachu.'
      }
    ],
    whyChoose: [
      'Experienced technicians with specialized knowledge in Electrolux NutriFresh and TasteLock systems',
      'Doorstep diagnostic service across Karur residential areas',
      'Multimeter inspection of sensors, fan motors, and control boards',
      'Fair, transparent pricing with no hidden charges',
      'complete testing of cooling temperatures before call completion'
    ]
  },
  {
    name: 'Liebherr',
    slug: 'liebherr-refrigerator-repair-service-in-karur.html',
    h1: 'Liebherr Refrigerator Repair Service in Karur',
    metaTitle: 'Liebherr Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Liebherr refrigerator repair in Karur? Doorstep inspection for Liebherr DuoCooling, BioFresh & inverter double door fridges. Cooling and electronic repairs.',
    searchIntentIntro: 'Searching for Liebherr refrigerator repair near me in Karur? When your German-engineered Liebherr DuoCooling refrigerator sounds a warning alarm or the BioFresh zero-degree drawer drifts in temperature, our technicians provide precision doorstep repair across Karur. Whether located in Kovai Road, Pasupathipalayam, or Kovai Road, find trusted Liebherr fridge repair near me with verified troubleshooting and genuine parts.',
    tanglishIntroBox: 'Liebherr fridge-la warning beep sound adikkudha? DuoCooling dual system-la freezer cool aana main cabin warm-aa irukka? BioFresh drawer-la temperature balance thappa aagudha? Liebherr advanced refrigeration-ku experienced technicians unga doorstep-la attend pannuvanga. Systematic multimeter inspection panni problem solve panrom.',
    whyRepair: 'Liebherr refrigerators use DuoCooling dual refrigeration circuits and BioFresh technology to preserve food quality without cross-contamination. In Karur, voltage dips or warm humid air entering through a loose door seal can cause electronic sensor drift or frost choke. Proper repair maintains temperature stability and safeguards your inverter compressor.',
    localContent: 'We provide specialized Liebherr refrigerator repair across Karur including Kovai Road, Pasupathipalayam, Kovai Road, Thanthonimalai, and Thorakkalpatti. Our technicians arrive equipped with electronic diagnostic gear, sensor probes, and matched components.',
    whenToCall: 'Contact our technicians if your Liebherr fridge sounds an alert tone, experiences cooling failure in either compartment, shows frost accumulation behind the interior panel, leaks water around the base, or produces an electrical burning odor (unplug immediately).',
    types: [
      {
        name: 'Liebherr DuoCooling Double Door Refrigerator Repair',
        badge: 'DuoCooling Dual Evaporator',
        desc: 'Liebherr DuoCooling models employ two separate evaporators for the freezer and refrigerator sections. If one fan motor or sensor fails, cooling drops in that specific compartment.',
        searchIntent: 'Searching for <strong>Liebherr double door fridge repair near me</strong> in Karur? We diagnose DuoCooling dual evaporator fans and sensors.',
        problems: 'Freezer working at sub-zero cold while fresh food cabin stays warm, continuous warning tone, frost choking air vents.',
        checks: 'DuoCooling fan speeds, independent evaporator sensors, and control board output.',
        parts: 'Dedicated DC circulation fan, compartment thermistors, and defrost heater.',
        whenNeeded: 'When the refrigerator cabin warms up despite an operational freezer.'
      },
      {
        name: 'Liebherr BioFresh Multi-Zone Refrigerator Repair',
        badge: 'BioFresh Food Preservation',
        desc: 'Liebherr BioFresh refrigerators maintain compartments at just above 0°C with controlled humidity. Faulty temperature sensors or air baffle dampers cause produce to freeze or spoil.',
        searchIntent: 'Looking for <strong>Liebherr refrigerator repair in Karur</strong> for BioFresh models? Doorstep testing for BioFresh sensors and motorized dampers.',
        problems: 'Vegetables freezing into ice in BioFresh drawer, humidity control failing, digital error codes.',
        checks: 'BioFresh NTC thermistor accuracy, motorized air baffle flap, and door seal tightness.',
        parts: 'BioFresh temperature sensor, air damper valve, and control PCB.',
        whenNeeded: 'When items in BioFresh drawers freeze solid or spoil too soon.'
      }
    ],
    problems: [
      {
        title: 'Refrigerator Section Losing Chill in DuoCooling',
        desc: 'The freezer functions properly at -18°C, but the refrigerator cabin warms up to ambient levels.',
        badge: 'Dual Circuit',
        label1: 'Probable Cause', val1: 'Fridge compartment circulation fan stall or sensor failure',
        label2: 'Technician Check', val2: 'Tests dedicated fan motor voltage and thermistor value',
        label3: 'Resolution', val3: 'Replaces DC circulation fan or recalibrates sensor'
      },
      {
        title: 'Electronic Warning Buzzer Sounding',
        desc: 'An alert tone sounds intermittently or continuously from the top electronic display panel.',
        badge: 'System Warning',
        label1: 'Probable Cause', val1: 'Cabin temperature deviating from setpoint or door ajar sensor',
        label2: 'Technician Check', val2: 'Inspects door switch contact and verifies internal chill',
        label3: 'Resolution', val3: 'Re-aligns door switch or repairs cooling circuit fault'
      },
      {
        title: 'BioFresh Compartment Over-Freezing',
        desc: 'Delicate salads, fruits, and dairy inside the BioFresh drawer freeze solid.',
        badge: 'Sensor Calibration',
        label1: 'Probable Cause', val1: 'BioFresh NTC thermistor resistance drifting out of range',
        label2: 'Technician Check', val2: 'Measures thermistor resistance curve against temperature table',
        label3: 'Resolution', val3: 'Installs new calibrated BioFresh sensor probe'
      },
      {
        title: 'Dense Frost Choking Rear Evaporator Panel',
        desc: 'A solid ice slab forms behind the rear wall, blocking chilled airflow to shelves.',
        badge: 'Defrost Cycle',
        label1: 'Probable Cause', val1: 'Defrost heating element failure or open thermal fuse',
        label2: 'Technician Check', val2: 'Tests heating element continuity and thermal limiter',
        label3: 'Resolution', val3: 'Replaces defrost heater element and clears ice'
      },
      {
        title: 'Inverter Compressor Not Turning Over',
        desc: 'The refrigerator has power and interior LED operates, but the compressor remains silent.',
        badge: 'Inverter Driver',
        label1: 'Probable Cause', val1: 'Inverter driver board power fault or signal interruption',
        label2: 'Technician Check', val2: 'Measures inverter drive output and compressor windings',
        label3: 'Resolution', val3: 'Repairs inverter driver circuit or replaces module'
      },
      {
        title: 'Moisture Sweating Around Door Perimeter',
        desc: 'Water droplets condense around the door perimeter, indicating outside air leakage.',
        badge: 'Thermal Seal',
        label1: 'Probable Cause', val1: 'Magnetic door gasket deformed or hinge out of level',
        label2: 'Technician Check', val2: 'Conducts seal gap test and inspects hinge bushings',
        label3: 'Resolution', val3: 'Adjusts door hinges and re-seats magnetic gasket'
      }
    ],
    customerExperiences: [
      {
        location: 'Kovai Road',
        title: 'Liebherr DuoCooling Fridge Section Fan Motor Rectification',
        tanglishText: 'Kovai Road layout-la oru resident avanga Liebherr DuoCooling fridge-la freezer -18 degree-la perfect-aa irukku, aana main fridge cabin-la cooling full-aa drop aachu-nu sonnanga. Technician spot-ku poi independent fridge circuit test pannadhula dedicated DC blower fan motor jam aagirundhadhu. New matched DC fan motor install panni multiAirflow channels check pannom. 30 minutes-la fridge cabin target temperature-ku reach aachu.'
      },
      {
        location: 'Pasupathipalayam',
        title: 'Liebherr BioFresh Temperature Sensor Calibration',
        tanglishText: 'Pasupathipalayam-la Liebherr BioFresh fridge use panra customer contact pannanga. BioFresh crisper kulla vecha fruits and cheese freeze aagudhu-nu sonnanga. Technician multimeter vechu BioFresh NTC thermistor resistance measure pannadhula sensor out of range signal send pannitu irundhadhu. Precision NTC thermistor replace panni calibration execute pannom. 0 degree preservation perfectly balance aachu.'
      },
      {
        location: 'Kovai Road',
        title: 'Liebherr Inverter Power Driver Board Restoration',
        tanglishText: 'Kovai Road-la sudden power surge apram Liebherr fridge display alarm beep panni compressor run aagala. Technician visit panni inverter driver card check pannadhula DC bus fuse open circuit aagirundhadhu. Inverter power components repair panni bench-la simulate pannom. Re-installation ku apram motor whisper silent-aa cycle run aachu, customer romba happy.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Liebherr Frost Free Evaporator Defrost Heater Fix',
        tanglishText: 'Thanthonimalai area-la Liebherr fridge back wall-la heavy ice slab form aagi air vents block aagirundhadhu. Technician rear panel open panni paathadhula defrost heating element burnt aagirundhadhu. OEM matching heater element install panni steam treatment-la ice clear pannom. Air circulation super-aa recover aachu.'
      },
      {
        location: 'Thorakkalpatti',
        title: 'Liebherr Door Perimeter Magnetic Gasket Realignment',
        tanglishText: 'Thorakkalpatti layout-la Liebherr fridge door corner-la light gap irundhu frame mela moisture condensation varudhu-nu sonnanga. Technician magnetic gasket heat shaping treatment panni door hinge level correct-aa align pannanga. Gap 100% close aagi internal sweating problem complete-aa stop aachu.'
      },
      {
        location: 'Vengamedu',
        title: 'Liebherr Double Door Water Drainage De-clogging',
        tanglishText: 'Vengamedu bypass kitta Liebherr double door fridge veg box kulla water thengudhu-nu complaint. Technician inner back grill remove panni defrost drain channel check pannadhula dust particles-la block aagirundhadhu. Flexible cleaning wire and hot water pottu drain line flush pannom. Problem periya expense illama spot-la theerndhadhu.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Liebherr Sealed Circuit Nitrogen Leak Test & R600a Refill',
        tanglishText: 'Kagithapuramam-la Liebherr fridge motor odite irundhadhu aana cooling absent. Technician pressure gauge vechu test pannadhula sealed line-la low pressure irundhadhu. Nitrogen test-la copper line micro leak detect panni silver braze pannom. Deep vacuum pull panni exact weight R600a charge pannom. Cooling within 40 minutes normal aachu.'
      },
      {
        location: 'Vennaimalai',
        title: 'Liebherr Door Open Alarm Switch Repair',
        tanglishText: 'Vennaimalai-la Liebherr fridge door proper-aa moodiyum door alarm sound adichite irundhadhu. Door reed switch contact loose aagirundhadhu. Switch replace panni wiring re-seat pannom. Alarm issue instant-aa solve aachu.'
      },
      {
        location: 'Karur Town',
        title: 'Liebherr Variable Speed Inverter Motor Testing',
        tanglishText: 'Karur Town-la Liebherr fridge cooling intermittent-aa irundhadhu. Inverter board-ku motor-kum idaiyila communication signal check pannom. Terminal connection re-crimping panni test pannadhula cooling stability perfectly restore aachu.'
      }
    ],
    whyChoose: [
      'Specialized technicians familiar with Liebherr DuoCooling and BioFresh engineering',
      'Doorstep diagnostic testing with digital precision multimeters and sensor probes',
      'quick response across Karur Town and residential suburbs',
      'Honest fault explanations with transparent spare pricing',
      'Thorough temperature profiling before completing the service call'
    ]
  },
  {
    name: 'Godrej',
    slug: 'godrej-refrigerator-repair-service-in-karur.html',
    h1: 'Godrej Refrigerator Repair Service in Karur',
    metaTitle: 'Godrej Refrigerator Repair Service in Karur | Fridge Repair',
    metaDesc: 'Looking for Godrej refrigerator repair in Karur? Doorstep service for Godrej Edge Neo single door, Eon frost-free double door & inverter fridges. Quick local repairs.',
    searchIntentIntro: 'Searching for Godrej refrigerator repair near me in Karur? When your Godrej Edge Neo single door fridge stops freezing ice or the Eon double door frost-free compartment loses cooling, our technicians visit your home across Karur. From Karur Town to Vaiyapuri Nagar and Velayuthampalayam, find trusted Godrej fridge repair near me with economical spare parts and dependable service.',
    tanglishIntroBox: 'Godrej fridge-la cooling ninnu pocha? Single door model-la ice kattai excessive-aa kattudha? Compressor click-click nu sound kuduthu start aagala? Godrej Indian brand refrigerators-ku experienced local technicians unga veetukke vandhu check pannuvanga. Reason-a explain pannitu affordable cost-la repair mudipanga.',
    whyRepair: 'Godrej refrigerators are among the most popular and durable cooling appliances in Karur homes. Over years of daily running, starter relays can burn out, direct cool thermostats can lose calibration, or defrost timers can fail. Economical repairs restore peak cooling and prevent premature compressor replacement.',
    localContent: 'We repair Godrej refrigerators across all localities in Karur including Karur Town, Vaiyapuri Nagar, Velayuthampalayam, Thanthonimalai, Inam Karur, and Sengunthapuram. Replacement relays, thermostats, fan motors, and timers are stocked for quick doorstep resolution.',
    whenToCall: 'Call for technician inspection if your Godrej fridge fails to cool, builds thick ice blocks in the single door freezer, leaks water beneath the crisper drawer, produces clicking noises at the compressor, or gives off an electrical burning smell (switch off main power immediately).',
    types: [
      {
        name: 'Godrej Edge Neo Single Door Refrigerator Repair',
        badge: 'Direct Cool Single Door',
        desc: 'Godrej Edge Neo direct cool single door models are widely used for daily milk and food storage. Mechanical thermostats, starter relays, and door gaskets are common wear items.',
        searchIntent: 'Searching for <strong>Godrej single door fridge repair near me</strong> in Karur? Quick doorstep fix for Edge Neo thermostat, relay, and cooling coil leaks.',
        problems: 'Excessive ice buildup on freezer plate, compressor clicking without starting, zero cooling with warm body.',
        checks: 'Rotary thermostat contacts, PTC starter relay, overload protector, and capillary line pressure.',
        parts: 'PTC starter relay, mechanical thermostat switch, door gasket, and R600a refrigerant.',
        whenNeeded: 'When ice builds up uncontrollably or the compressor will not turn on.'
      },
      {
        name: 'Godrej Eon Double Door Refrigerator Repair',
        badge: 'Frost Free Double Door',
        desc: 'Godrej Eon frost-free refrigerators circulate cold air from the top freezer into the food cabin. Defrost timer failures and choked air ducts often cause lower cabin cooling loss.',
        searchIntent: 'Looking for <strong>Godrej double door fridge repair in Karur</strong>? Doorstep diagnosis for Eon defrost timers, heaters, and blower fans.',
        problems: 'Freezer freezing solid while fresh food cabin stays warm, continuous fan humming, water pooling under crisper.',
        checks: 'Defrost timer, bimetal switch, evaporator fan motor, and return air vents.',
        parts: 'Defrost timer, bimetal thermostat, evaporator DC fan motor, and glass tube heater.',
        whenNeeded: 'When milk spoils quickly or airflow from vents feels weak.'
      },
      {
        name: 'Godrej Inverter Refrigerator Repair',
        badge: 'Inverter Technology',
        desc: 'Godrej inverter refrigerators modulate compressor speed to reduce power consumption. Inverter driver boards and thermistors are tested with multimeters during service.',
        searchIntent: 'Need <strong>Godrej fridge service in Karur</strong> for inverter models? Doorstep testing for inverter driver boards and temperature sensors.',
        problems: 'Inverter compressor not spinning, error code blinking, erratic compartment cooling.',
        checks: 'Inverter PCB output voltages, compressor winding balance, and cabin thermistors.',
        parts: 'Inverter motherboard, temperature sensor probe, and fan motor.',
        whenNeeded: 'When the fridge fails to cool after power fluctuations or flashes errors.'
      }
    ],
    problems: [
      {
        title: 'Single Door Freezer Box Over-Freezing',
        desc: 'Ice builds into a dense solid rock inside the freezer box, making it impossible to close the flap.',
        badge: 'Thermostat Failure',
        label1: 'Probable Cause', val1: 'Thermostat contact welded or sensing capillary dislodged',
        label2: 'Technician Check', val2: 'Tests cut-off temperature with a multimeter and ice water',
        label3: 'Resolution', val3: 'Installs new calibrated rotary thermostat'
      },
      {
        title: 'Compressor Clicking Sound Every Few Minutes',
        desc: 'A clicking sound is heard from behind the fridge every 2 to 3 minutes, but the cooling pump never starts.',
        badge: 'Starter Relay',
        label1: 'Probable Cause', val1: 'Burnt PTC starter relay or open overload protector',
        label2: 'Technician Check', val2: 'Tests relay resistance and compressor winding health',
        label3: 'Resolution', val3: 'Replaces starter relay and overload protector'
      },
      {
        title: 'Eon Double Door Lower Cabin Warm',
        desc: 'Freezer freezes ice cubes properly, but the lower compartment has no cooling and milk curdles.',
        badge: 'Defrost Failure',
        label1: 'Probable Cause', val1: 'Defrost timer or bimetal failure causing iced evaporator',
        label2: 'Technician Check', val2: 'Tests defrost timer motor and measures heater resistance',
        label3: 'Resolution', val3: 'Replaces defrost timer and clears ice blockage'
      },
      {
        title: 'Water Leaking Beneath Vegetable Drawer',
        desc: 'Defrost water overflows into the vegetable tray rather than draining into the rear compressor pan.',
        badge: 'Drain Line Clogged',
        label1: 'Probable Cause', val1: 'Defrost drain hole choked with dust or food particles',
        label2: 'Technician Check', val2: 'Inspects drain trough and rear outlet hose',
        label3: 'Resolution', val3: 'Cleans and flushes drainage line with warm water'
      },
      {
        title: 'Door Gasket Loose with Cold Air Escape',
        desc: 'Cold air escapes along the door frame, causing high electricity bills and moisture buildup.',
        badge: 'Door Gasket',
        label1: 'Probable Cause', val1: 'Rubber gasket hardened, cracked, or lost magnetic grip',
        label2: 'Technician Check', val2: 'Inspects seal contact around the entire perimeter',
        label3: 'Resolution', val3: 'Replaces magnetic rubber door gasket'
      },
      {
        title: 'Compressor Running Continuously Without Chill',
        desc: 'The compressor runs warm continuously, but the interior shelves remain completely room temperature.',
        badge: 'Refrigerant Leak',
        label1: 'Probable Cause', val1: 'Pinhole gas leak in copper tubing or capillary choke',
        label2: 'Technician Check', val2: 'Checks suction pressure and inspects brazed joints',
        label3: 'Resolution', val3: 'Brazes leak spot, pulls vacuum, and recharges gas'
      }
    ],
    customerExperiences: [
      {
        location: 'Karur Town',
        title: 'Godrej Edge Neo Single Door Relay Replacement',
        tanglishText: 'Karur Town bus stand kitta irundha customer call pannanga. Avanga Godrej Edge Neo single door fridge-la cooling full-aa ninnu compressor clicking sound varudhu-nu sonnanga. Technician spot-ku poi check pannadhula PTC relay overheat aagi contact burn aagirundhadhu. Compressor winding ohms test panni coils safe-nu confirm pannitu puthiya heavy-duty relay fit pannom. Motor instant-aa ignite aagi cooling plates chill aaga aarambichadhu. Customer romba satisfied.'
      },
      {
        location: 'Vaiyapuri Nagar',
        title: 'Godrej Eon Double Door Defrost Timer Problem Fix',
        tanglishText: 'Vaiyapuri Nagar weaving town-la oru customer avanga Godrej Eon double door fridge-la freezer matrum ice aagudhu, keezha cooling ninnu milk spoil aagudhu-nu complaint pannanga. Technician inspect pannadhula mechanical defrost timer gear stuck aagi heating cycle trigger aagala. Evaporator coil full-aa ice kattirundhadhai steam panni clear pannom. New defrost timer and bimetal switch install panni test pannadhula lower cabin air flow perfect-aa return aachu.'
      },
      {
        location: 'Velayuthampalayam',
        title: 'Godrej Single Door Thermostat Ice Over-Accumulation Fix',
        tanglishText: 'Velayuthampalayam main road-la Godrej single door fridge freezer-la ice rock madhiri solid-aa kattudhu-nu sonnanga. Defrost button press panniyum solve aagala. Technician inspect pannadhula thermostat contact welded aagi compressor cut-off aagama non-stop-aa run aagitu irundhadhu. Original calibrated rotary thermostat replace pannom. Machine ippo proper interval-la cut-off aagi temperature maintain panradhu.'
      },
      {
        location: 'Thanthonimalai',
        title: 'Godrej Double Door Vegetable Crisper Water Leakage Fix',
        tanglishText: 'Thanthonimalai area-la Godrej double door fridge veg box kulla water thengi floor-la leak aagudhu-nu sonnanga. Technician back panel open panni paathadhula defrost drain cup dust particle-la block aagirundhadhu. High-pressure warm water flush panni drain pipe-a completely clear pannom. Rear compressor tray-ku water proper-aa discharge aagudha-nu check pannitu solve pannom.'
      },
      {
        location: 'Inam Karur',
        title: 'Godrej Inverter Motherboard Voltage Surge Recovery',
        tanglishText: 'Inam Karur-la sudden thunder and voltage surge apram Godrej inverter fridge on aagala. Technician check pannadhula main PCB-la input fuse and varistor blown aagirundhadhu. Inverter power section-a bench repair panni test pannom. Re-installation ku apram inverter compressor smooth-aa speed pick up aachu.'
      },
      {
        location: 'Sengunthapuram',
        title: 'Godrej Single Door Magnetic Door Gasket Renewal',
        tanglishText: 'Sengunthapuram layout-la Godrej fridge door rubber loose aagi side-la gap irundhadhu. Cold air veliya leak aagi current bill athigam aagudhu-nu sonnanga. Matching magnetic gasket replace panni door alignment adjust pannom. Tight airtight grip establish aagi cooling retention restore aachu.'
      },
      {
        location: 'Kagithapuramam',
        title: 'Godrej Frost Free Refrigerator Gas Recharge & Pinhole Braze',
        tanglishText: 'Kagithapuramam-la Godrej fridge compressor odite irundhadhu aana zero cooling. Technician pressure gauge vechu test pannadhula copper filter drier kitta micro pinhole leak irundhadhu. Silver brazing panni leak arrest pannom, vacuum pump pottu exact weight refrigerant gas charge pannom. Frost pattern freezer coil full-aa spread aagi cooling restore aachu.'
      }
    ],
    whyChoose: [
      'Experienced technicians with extensive repair history across Godrej Edge Neo and Eon fridges',
      'Doorstep service across Karur Town, Vaiyapuri Nagar, Velayuthampalayam, and nearby areas',
      'Ready availability of economical, compatible spare parts',
      'Clear, honest fault explanation with upfront estimates',
      'Cooling and cut-off verification before call closure'
    ]
  }
];

module.exports = brands1to6;
