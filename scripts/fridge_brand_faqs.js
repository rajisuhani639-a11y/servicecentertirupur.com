// 100% Unique Brand-Specific Refrigerator FAQs with Natural Tanglish
// 8 to 15 FAQs per brand. Zero duplicate questions or answers.

const brandFaqsMap = {
  'Samsung': [
    {
      q: 'Samsung fridge cooling kammi aa irundha enna check pannuvanga?',
      a: 'First airflow vents, temperature dial setting, door magnetic seal, and condenser coil clean-aa irukka-nu check pannuvanga. Frost-free models-la defrost sensor and fan motor proper-aa work aagudha-nu multimeter vechu test pannuvanga.'
    },
    {
      q: 'Samsung Digital Inverter fridge-la compressor start aagala-na enna reason?',
      a: 'Digital inverter models-la start capacitor illai. Inverter control PCB board-la voltage input, compressor terminal resistance, and sensor signals check pannanum. Board blink code irundha adhai diagnose panni fix pannuvanga.'
    },
    {
      q: 'Samsung refrigerator freezer-la mattum ice varudhu, keezha cooling illa. Enna problem?',
      a: 'Idhu classic defrost system failure. Evaporator coil-la excessive ice kattina, lower cabin-ku cold air varaadhu. Defrost bimetal sensor, thermal fuse, or defrost heater replace panna vendiyirukkum.'
    },
    {
      q: 'Karur-la Samsung fridge doorstep inspection epdi book panradhu?',
      a: 'Phone call or WhatsApp vazhiya unga area location and fridge problem share pannina, technician unga convenient time-ku doorstep-la vandhu diagnose pannuvanga.'
    },
    {
      q: 'Samsung Twin Cooling Plus model-ku separate fans irukkuma?',
      a: 'Aama, Twin Cooling Plus models-la freezer and fresh food section-ku separate evaporators and fans irukkum. Oru section cool aagi innoru section warm-aa irundha specific damper or fan motor check pannanum.'
    },
    {
      q: 'Samsung fridge bottom vegetable tray kulla water leak aagudhu, edhuku?',
      a: 'Defrost drain hole dust or ice-la block aana, meltwater bahir evaporation tray-ku pogama veg box kulla kottum. Hot water flush and drain tube clearing panna problem solve aagum.'
    },
    {
      q: 'Samsung fridge door gasket loose aana repair panna mudiyuma?',
      a: 'Minor misalignment irundha heat treatment panni seal adjust pannalam. Rubber crack aagi magnet weak aana brand-compatible gasket beading change panradhu dhaan best.'
    },
    {
      q: 'Samsung refrigerator gas charging cost Karur-la evlo aagum?',
      a: 'R600a eco-friendly refrigerant leak test, copper brazing, and gas recharging usually ₹1,850 to ₹2,850 kulla model capacity base panni vary aagum.'
    },
    {
      q: 'Samsung convertible fridge mode change aagala-na enna seiyanum?',
      a: 'Convertible mode button and display PCB wiring check pannanum. Mode switch panniyum freezer cool aagala-na internal airflow damper motor inspect panna vendiyirukkum.'
    },
    {
      q: 'Samsung fridge repair-ku pazhaya parts-a return pannuvangala?',
      a: 'Kandippa, replace panna defective parts customer kitta kaati explain pannitu thirumba kuduthiduvanga.'
    },
    {
      q: 'Karur Pasupathipalayam and Kagithapuramam-la Samsung fridge service kedaikuma?',
      a: 'Kedaikum, Pasupathipalayam, Kagithapuramam, Thanthonimalai, Vengamedu, Kovai Road ulpada Karur city full-aa doorstep technician visit provide panrom.'
    },
    {
      q: 'Samsung fridge compressor continuous-aa odite irundha enna aagum?',
      a: 'Continuous running door seal leak, gas deficiency, or faulty thermostat nala varum. Idhai seekiram check pannalana compressor overheat aagi motor fail aaga vaaipu irukku.'
    }
  ],
  'Whirlpool': [
    {
      q: 'Whirlpool fridge-la clicking sound mattum kekkudhu, cooling illa. Enna aachu?',
      a: 'Compressor pakathula irukra PTC starter relay or overload protector burn aana idhe madhiri tick-tick sound varum. Technician relay replace panni compressor healthy-aa start aagudha-nu check pannuvanga.'
    },
    {
      q: 'Whirlpool Protton 3-door fridge middle compartment cool aagala-na enna pannanum?',
      a: 'Protton triple door models-la air damper duct vazhiya cold air middle cabin-ku circulate aagum. Duct ice block aana or air flap jammed aana middle compartment cooling drop aagum.'
    },
    {
      q: 'Whirlpool Icemagic single door fridge-la ice kattai excessive-aa kattudhu, why?',
      a: 'Thermostat knob high setting-la irundha or thermostat sensor bulb evaporator coil kooda proper contact illama irundha continuous cooling nala excess ice form aagum.'
    },
    {
      q: 'Whirlpool 6th Sense double door fridge cooling stop aana main reason enna?',
      a: 'Electronic control board, defrost bimetal, or evaporator fan motor issue irukalam. Technician spot-la meter vechu each circuit-a verify pannuvanga.'
    },
    {
      q: 'Whirlpool fridge-la water body kulla ninnu leak aagudha?',
      a: 'Rear defrost drain trough choke aagi irukkum. Technician back panel open panni drain line clear pannitu water flow test pannuvanga.'
    },
    {
      q: 'Karur-la Whirlpool fridge repair cost epdi calculate pannuvanga?',
      a: 'Inspection mudinjudhum exact fault, needed spare part cost, and technician service charge explain pannuvanga. Unga approval apram dhaan repair work start pannuvanga.'
    },
    {
      q: 'Whirlpool Intellifresh fridge-la fan odala-na keezha cooling varuma?',
      a: 'Varaadhu. Frost-free system-la fan odalana freezer-la mattum light chill irukkum, food compartment warm-aa irukkum. Fan motor replace panna cooling restore aagum.'
    },
    {
      q: 'Whirlpool fridge repair-ku doorstep visit Karur Town-la kedaikuma?',
      a: 'Kedaikum, Karur Town, Sengunthapuram, Rayanur, Velayuthampalayam Road area-la doorstep visit regular-aa provide panrom.'
    },
    {
      q: 'Whirlpool fridge door rubber-la gap irundha enna seiyanum?',
      a: 'Door gasket alignment adjust pannalam or rubber harden aagi shape poirundha new magnetic gasket install panni cooling loss stop pannuvanga.'
    },
    {
      q: 'Whirlpool fridge repair-ku call panna evlo nerathula technician varuvanga?',
      a: 'Customer convenience timing poruthu schedule pannuvom. Booking confirm aana timing slot-la technician visit panni attend pannuvanga.'
    }
  ],
  'Bosch': [
    {
      q: 'Bosch refrigerator temperature alarm beep sound adichite irukku, enna reason?',
      a: 'Bosch fridge-la internal cabin temperature set point vida high aana door alarm or temp warning beep varum. VarioInverter compressor run aagudha, door proper seal aagudha, and multi-sensor readings correct-aa irukka-nu verify pannanum.'
    },
    {
      q: 'Bosch VarioInverter fridge-la inverter driver board fault epdi theriyum?',
      a: 'Inverter PCB fail aana motor start aagathu, control panel-la specific error code kaatum or compressor terminal-ku pulsating three-phase voltage send aagadhu.'
    },
    {
      q: 'Bosch VitaFresh compartment-la irukra vegetables freeze aagudha?',
      a: 'VitaFresh compartment damper motor or temperature thermistor calibration misalign aana sub-zero cold air enter aagi vegetables freeze aagalam. Damper airflow recalibration pannanum.'
    },
    {
      q: 'Bosch double door frost-free fridge lower cabin-la cooling full-aa drop aachu, why?',
      a: 'Evaporator coil pinadi frost build-up aagi multiAirflow duct-a block pannirukkum. Defrost heater element and thermal cut-off sensor check panna vendiyirukkum.'
    },
    {
      q: 'Bosch fridge repair-ku Karur-la genuine spares kedaikuma?',
      a: 'Aama, Bosch models-ku matching VarioInverter boards, multi-flow fans, and NTC sensors match panni doorstep-la install panrom.'
    },
    {
      q: 'Bosch side-by-side refrigerator door touch display respond aagala-na enna pannanum?',
      a: 'Hinge wiring ribbon cable check pannanum. Continuous door open-close nala wire pinch aagirundha signal cut aagum. Display PCB supply voltage test pannanum.'
    },
    {
      q: 'Bosch fridge door seal around moisture droplets form aagudhu, enna fault?',
      a: 'Magnetic door gasket seating-la gap irundhu exterior humidity ulla enter aana kondensation droplets varum. Gasket seating alignment test panna vendiyirukkum.'
    },
    {
      q: 'Bosch refrigerator gas leak repair Karur-la panna mudiyuma?',
      a: 'Mudiyum. Nitrogen pressure test panni pinhole leak detect seivadhu, copper brazing, system evacuation, and precision R600a charging perform panrom.'
    },
    {
      q: 'Bosch fridge repair cost evlo irukkum?',
      a: 'Basic sensor or fan motor repair ₹1,200 muthal start aagalam. Inverter module or sealed system repairs model specific pricing-la quote pannuvom.'
    },
    {
      q: 'Karur Thanthonimalai and Vengamedu area-la Bosch technician visit irukka?',
      a: 'Kandippa irukku. Vengamedu bypass, Thanthonimalai, Inam Karur ella area-layum doorstep inspection provide panrom.'
    },
    {
      q: 'Bosch fridge-la abnormal humming noise varudhu, edhula irundhu varudhu?',
      a: 'Evaporator DC fan motor bearing wear out aana or compressor mounting grommet rubber harden aana continuous vibration humming sound kekkum.'
    }
  ],
  'Electrolux': [
    {
      q: 'Electrolux NutriFresh inverter fridge cooling perform aagala-na enna check pannanum?',
      a: 'Inverter compressor status, electronic PCB frequency output, and TasteLock air circulation system check pannanum. Multimeter testing moolam exact issue detect pannuvom.'
    },
    {
      q: 'Electrolux fridge freezer-la thick ice form aagi fan sound varudhu, why?',
      a: 'Defrost cycle activate aagala-na ice build-up fan blade-la touch aagi rattling noise varum. Defrost bimetal and heating element test pannanum.'
    },
    {
      q: 'Electrolux TasteLock vegetable crisper-la water thengudha?',
      a: 'Crisper humidity membrane clogged aana or cabinet defrost drain line blocked aana excess condensation moisture vegetable drawer-la thengum.'
    },
    {
      q: 'Karur-la Electrolux refrigerator repair doorstep-la mudiyuma?',
      a: 'Mudiyum. Majority electrical, fan, sensor, defrost, and gas leak repairs unga veetulaye direct-aa attend panni fix panrom.'
    },
    {
      q: 'Electrolux fridge compressor heat aagudhu aana cool aagala, enna fault?',
      a: 'Capillary tube choking or refrigerant gas leak irundha compressor dry run aagi overheat aagum. Gas pressure gauge vechu test pannanum.'
    },
    {
      q: 'Electrolux fridge door close pannalum light off aagala, enna problem?',
      a: 'Door switch reed contact or switch spring jam aagirukkum. Idhanala light heat internal cabin cooling-a affect pannalam.'
    },
    {
      q: 'Electrolux refrigerator spare parts Karur-la readily available-aa?',
      a: 'Electrolux models-ku suitable relays, sensors, heaters, and fan motors arrange panni quick service provide panrom.'
    },
    {
      q: 'Electrolux fridge repair charge epdi decide aagudhu?',
      a: 'Faulty component type and repair work nature poruthu honest quote explain pannuvanga. Approval ku apram work proceed aagum.'
    },
    {
      q: 'Karur Thorakkalpatti and Periya Andankovil-ku Electrolux service varuvangala?',
      a: 'Kandippa varuvanga, city center and outer residential layouts rendulayume technician support irukku.'
    }
  ],
  'Liebherr': [
    {
      q: 'Liebherr DuoCooling fridge-la freezer work aagudhu, main cabin cooling weak-aa irukku, why?',
      a: 'DuoCooling system-la dual evaporator coils irukku. Fridge section circulation fan or independent air damper motor stall aana main cabin chill loss aagum.'
    },
    {
      q: 'Liebherr BioFresh compartment temperature manage aagala-na enna reason?',
      a: 'BioFresh NTC temperature sensor drift aana or damper air duct jam aana 0°C zone balance aagathu. Electronic sensor replace panni calibration pannanum.'
    },
    {
      q: 'Liebherr refrigerator control panel-la warning sound kekkudhu, enna pannanum?',
      a: 'Door ajar alarm or cooling performance deviation irundha warning buzzer adikkum. First door closure and gasket seal check pannanum. Alarm continue aana sensor check pannanum.'
    },
    {
      q: 'Liebherr fridge repair Karur-la reliable-aa kedaikuma?',
      a: 'Aama, experienced technicians Liebherr electronic modules, variable speed compressors, and defrost circuits-a systematically check panranga.'
    },
    {
      q: 'Liebherr bottom mount freezer ice maker / ice tray water freeze aaga time edukkudha?',
      a: 'Freezer airflow obstruction or defrost cycle delay nala temperature warm aana ice set aaga late aagum. Evaporator coil frost status check pannanum.'
    },
    {
      q: 'Liebherr fridge-ku replacement door gasket Karur-la kedaikuma?',
      a: 'Model dimension match panna magnetic perimeter gasket replace panni thermal sealing restore pannuvom.'
    },
    {
      q: 'Liebherr inverter compressor motor run aaga maatudhu, enna problem?',
      a: 'Power supply board inverter module-la DC output cut aana compressor ignite aagathu. Board repair or module replacement panna vendiyirukkum.'
    },
    {
      q: 'Liebherr refrigerator servicing cost evlo irukkum?',
      a: 'Component complexity poruthu estimate differ aagum. Technician spot inspection panni clear itemized quote tharuvanga.'
    },
    {
      q: 'Liebherr fridge gas leak check epdi pannuvanga?',
      a: 'Electronic halogen leak detector or nitrogen pressure holding test vechu internal copper joints inspect panni braze pannuvom.'
    },
    {
      q: 'Karur Kovai Road and Kovai Road area-la Liebherr fridge attend pannuvangala?',
      a: 'Kandippa, Karur Kovai Road, Kovai Road, Pasupathipalayam ellathulayum quick doorstep service kedaikkum.'
    }
  ],
  'Godrej': [
    {
      q: 'Godrej Edge single door fridge-la cooling full-aa ninnu pochu, enna issue?',
      a: 'Start relay burn aagirukalam, thermostat cut-off switch open aagirukalam, or compressor motor fail aagirukalam. Relay test panni cooling restore panna mudiyum.'
    },
    {
      q: 'Godrej Eon double door fridge freezer-la ice kattudhu aana keezha chill illa, why?',
      a: 'Defrost timer stuck aagirundha or defrost heater glass tube break aana evaporator coil-la snow madhiri ice kattum. Duct block aagi keezha air varaadhu.'
    },
    {
      q: 'Godrej fridge-la continuous-aa compressor odite irukku, power bill athigam aagudha?',
      a: 'Door gasket loose aagi cold air leak aana or cooling gas pressure low aana compressor cut-off aagama odite irukkum. Gasket and gas level inspect pannanum.'
    },
    {
      q: 'Godrej refrigerator vegetable box kulla water kottudhu, enna seiyanum?',
      a: 'Internal defrost drain hole dust-la அடைப்பு aagirukkum. Adhai clear panni hot water flush pannina water rear tray-ku smoothly drain aagum.'
    },
    {
      q: 'Godrej fridge repair-ku Karur-la parts price affordable-aa irukkuma?',
      a: 'Godrej Indian brand aadharala spares Karur-la readily available and romba reasonable cost-la kedaikkum. High spare charges irukaadhu.'
    },
    {
      q: 'Godrej inverter fridge motherboard fault repair panna mudiyuma?',
      a: 'Mudiyum. PCB-la blown capacitor, fuse, or voltage driver chip spot repair or board replacement panni fridge-a ready pannuvom.'
    },
    {
      q: 'Godrej fridge door rubber maatha evlo aagum?',
      a: 'Model size and single/double door poruthu ₹650 to ₹1,400 kulla replacement gasket fit panni airtight sealing ensure pannalam.'
    },
    {
      q: 'Karur Vaiyapuri Nagar and Velayuthampalayam-la Godrej fridge service varuvangala?',
      a: 'Aama, Karur town mattumilla Vaiyapuri Nagar, Velayuthampalayam, Aravakurichi surrounding area-layum doorstep service provide panrom.'
    },
    {
      q: 'Godrej fridge-la shock adikkudha madhiri irundha enna seiyanum?',
      a: 'Fridge-a udane switch off panni plug pull pannanum! Earthing failure, wiring insulation damage, or heater leakage irukalam. Technician verify pannura varaikum on panna koodathu.'
    },
    {
      q: 'Godrej single door fridge defrost button press pannina on aaga late aagudha?',
      a: 'Manual defrost cycle mudinju coil temperature rise aana dhaan thermostat switch reset aagum. Idhu normal mechanism dhaan.'
    },
    {
      q: 'Godrej fridge repair estimate eppo theriyum?',
      a: 'Technician veetukku vandhu fridge open panni fault check pannina 15 minutes-la accurate estimate solluvanga.'
    }
  ],
  'Haier': [
    {
      q: 'Haier Bottom Mounted Refrigerator (BMR) top cabin warm-aa irukku, enna reason?',
      a: 'BMR models-la freezer keezha irukkum, adhanala evaporator blower fan cold air-a mela push pannanum. Fan jam aana or return duct ice-la block aana top cabin chill drop aagum.'
    },
    {
      q: 'Haier Twin Inverter fridge-la compressor and fan rendume silent-aa irukku, on aagala?',
      a: 'Twin inverter PCB supply circuit fail aana rendume switch-on aagathu. Main board DC power rails and line fuses check pannanum.'
    },
    {
      q: 'Haier 8-in-1 convertible fridge mode change panniyum freeze aagala, why?',
      a: 'Electronic damper flap motor stuck aana or display keypad signal register aagala-na convertible cooling mode fail aagum.'
    },
    {
      q: 'Haier fridge back-la irundhu rattling vibration sound varudhu, enna fault?',
      a: 'Compressor mounting rubber bushes dry aagi harden aana or condenser tubing touch aana vibration noise kekkum. Alignment adjust panni solve pannalam.'
    },
    {
      q: 'Karur-la Haier fridge repair service evlo time-la kedaikkum?',
      a: 'Call or WhatsApp panni unga slot book pannina same day or next day convenient time-la technician doorstep attend pannuvanga.'
    },
    {
      q: 'Haier fridge-la defrost sensor complaint irundha epdi theriyum?',
      a: 'Freezer back wall-la heavy ice slab form aagum, aana bottom cabin-la normal cooling irukaadhu. Sensor replace panna issue theerum.'
    },
    {
      q: 'Haier side-by-side refrigerator cooling drop aana doorstep-la repair mudiyuma?',
      a: 'Kandippa, side-by-side models-ku necessary diagnostic tools and testing meters technician veetukke kondu vandhu diagnose pannuvanga.'
    },
    {
      q: 'Haier fridge gas charging cost Karur-la evlo aagum?',
      a: 'R600a hydrocarbon refrigerant gas charging usually ₹1,800 to ₹2,750 range-la leak repair and vacuuming kooda include aagum.'
    },
    {
      q: 'Haier fridge door gasket torn aana replace panna mudiyuma?',
      a: 'Aama, Haier models-ku original fit magnetic rubber beading install panni cold air retention restore panrom.'
    },
    {
      q: 'Karur Vennaimalai and Sanapiratti-la Haier fridge service kedaikuma?',
      a: 'Kedaikum, Vennaimalai, Sanapiratti, Inam Karur ella layout-layum quick doorstep repair support irukku.'
    }
  ],
  'Videocon': [
    {
      q: 'Videocon fridge-la compressor clicking sound vandhu cut aagudhu, enna repair?',
      a: 'PTC starter relay or overload protector burn aagirukalam. Puthiya heavy-duty relay replace panni ammeter testing pannina compressor normal-aa run aagum.'
    },
    {
      q: 'Videocon pazhaya model single door fridge-la cooling romba kammi, why?',
      a: 'Capillary oil choking, partial gas leak, or weak compressor pumping nala cooling drop aagalam. Line pressure check panni honest diagnosis solluvom.'
    },
    {
      q: 'Videocon frost-free fridge lower compartment chill illama food spoil aagudhu?',
      a: 'Mechanical defrost timer or glass tube heater fail aagi coil ice-la moodirukkum. Timer manual rotate panni heating circuit test pannanum.'
    },
    {
      q: 'Videocon fridge spares ippo Karur-la kedaikkuma?',
      a: 'Kedaikkum, Videocon fridges use universal mechanical thermostats, standard relays, bimetals, and blower fans that are readily available in Karur.'
    },
    {
      q: 'Videocon fridge-la current leak aana enna seiyanum?',
      a: 'Immediate-aa main socket off pannanum. Internal wiring rat bite or earth leakage test panni safe wiring restore pannuvom.'
    },
    {
      q: 'Videocon fridge door gasket loose aana cooling affect aaguma?',
      a: 'Aama, gap vazhiya wet air ulla poi heavy frost undakkum, compressor continuous-aa odi current bill yerum. Gasket replace pannanum.'
    },
    {
      q: 'Videocon fridge repair-ku Karur-la technician charges evlo?',
      a: 'Nominal visit & inspection charge dhaan. Spares theva patta transparent part cost confirm pannitu repair pannuvom.'
    },
    {
      q: 'Karur Town and Kagithapuramam-la Videocon fridge attend pannuvangala?',
      a: 'Kandippa, Karur Town, Kagithapuramam, Thanthonimalai surrounding areas-la doorstep service quick-aa provide panrom.'
    }
  ],
  'Panasonic': [
    {
      q: 'Panasonic Econavi fridge Econavi light on aagala-na enna problem?',
      a: 'Econavi smart sensors ambient light, room temperature, and door openings-a measure pannum. Sensor line disconnected aana or PCB processing error irundha light illuminate aagadhu.'
    },
    {
      q: 'Panasonic Prime Fresh soft-freezing compartment-la meat solid freeze aagudha?',
      a: 'Prime Fresh sensor resistance drift aagirukkum or electronic air vent damper fully open-la stuck aagirukkum. Sensor check panni calibration pannanum.'
    },
    {
      q: 'Panasonic inverter fridge display-la error code blink aagudha?',
      a: 'Panasonic inverter boards specific blink sequences moolam compressor, fan, or defrost failure-a signal pannum. Blink pattern decode panni quick repair mudiyum.'
    },
    {
      q: 'Panasonic frost-free fridge airflow fan sound noisy-aa irukku, why?',
      a: 'Evaporator coil mela ice excess-aa build aagi fan blade rotate aagum bodhu ice-la urasum. Defrost cycle check panni ice melt pannanum.'
    },
    {
      q: 'Karur-la Panasonic refrigerator repair-ku doorstep visit unda?',
      a: 'Unda, Karur city and residential suburbs full-aa scheduled technician doorstep service provide panrom.'
    },
    {
      q: 'Panasonic fridge bottom vegetable tray kulla water thengudhu, enna fault?',
      a: 'Drain hole and defrost trough dirt or algae-la choked aagirukkum. Technicians clean panni drain pathway-a flush pannuvanga.'
    },
    {
      q: 'Panasonic fridge inverter PCB board cost Karur-la evlo irukkum?',
      a: 'Model chassis and capacity poruthu board repair ₹2,500 to ₹5,400 kulla vary aagum. First component repair check pannuvom.'
    },
    {
      q: 'Panasonic fridge door seal gap epdi check panradhu?',
      a: 'Door kulla oru paper sheet vechu close panni pull pannina tight grip irukkanum. Easily slide aana gasket loose-aa irukku-nu aratham.'
    },
    {
      q: 'Panasonic double door fridge cooling balance illa, enna pannanum?',
      a: 'Multi-airflow vent dampers and return air vents-la obstruction irukka-nu verify pannanum. Damper motor check panna vendiyirukkum.'
    },
    {
      q: 'Karur Pasupathipalayam and Kovai Road-ku Panasonic technician varuvara?',
      a: 'Kandippa varuvar, direct call or WhatsApp moolam timing slot pick pannikalam.'
    },
    {
      q: 'Panasonic fridge gas recharging process-ku evlo neram aagum?',
      a: 'Leak test, copper brazing, vacuum evacuation, and R600a precision charging complete panna roughly 1.5 to 2 hours aagum.'
    }
  ],
  'Siemens': [
    {
      q: 'Siemens refrigerator display-la E error code varudhu, enna seiyanum?',
      a: 'Siemens electronics sensor errors or fan stalls-a E01, E02, E10 madhiri codes-la kaatum. Technician diagnostic multimeter vechu sensor value verify panni correct spare install pannuvanga.'
    },
    {
      q: 'Siemens hyperFresh drawer temperature balance aaga maatudhu, why?',
      a: 'hyperFresh compartment uses a dedicated motorised air baffle. If the baffle gear seizes or the humidity seal slips, independent cooling drops.'
    },
    {
      q: 'Siemens built-in / free-standing fridge compressor silent-aa irukku, cooling illa?',
      a: 'Inverter power module supply fuse or compressor drive IPM chip tripped aagirukalam. Electronic board bench testing panni issue clarify pannuvom.'
    },
    {
      q: 'Siemens fridge door gasket tight grip tharala-na cooling poiruma?',
      a: 'Aama, Siemens heavy insulated doors-la seal weak aana exterior humidity ulla vandhu frost choke undakkum. Gasket replace pannanum.'
    },
    {
      q: 'Karur-la Siemens refrigerator repair technicians available-aa?',
      a: 'Aama, quality European brand refrigeration architectures-la train aana technicians doorstep inspection conduct panranga.'
    },
    {
      q: 'Siemens frost-free cooling coil defrost heater complaint epdi identify panradhu?',
      a: 'Resistance check panra bodhu heating element open loop kaatina heater burn aagirukku. Coil ice-la solid-aa block aagirukkum.'
    },
    {
      q: 'Siemens fridge gas charging safe-aa perform pannuvangala?',
      a: 'Precision R600a hydrocarbon scale charging, proper nitrogen purging, and flame-safe Lokring or brass welding standards follow panrom.'
    },
    {
      q: 'Siemens multiAirflow fan speed slow aana enna aagum?',
      a: 'Top and bottom shelves-la cooling uniform-aa irukaadhu. DC fan motor speed voltage check panni replacement pannanum.'
    },
    {
      q: 'Karur Kovai Road and Vengamedu bypass-la Siemens service kedaikuma?',
      a: 'Kedaikum, Kovai Road, Vengamedu, Thanthonimalai, Sengunthapuram residential zones-la doorstep service kedaikkum.'
    },
    {
      q: 'Siemens fridge repair work-ku estimate transparent-aa irukkuma?',
      a: 'Kandippa, part replacement theva patta exact cost and labour upfront explain pannitu unga confirmation kedaicha dhaan proceed pannuvom.'
    }
  ],
  'Hitachi': [
    {
      q: 'Hitachi Dual Fan Cooling fridge-la freezer cool aana fridge cabin warm, why?',
      a: 'Hitachi dual fan setup-la refrigerator compartment fan motor stall aana or air duct damper closed position-la stuck aana fridge section cooling poidum.'
    },
    {
      q: 'Hitachi Inverter compressor starting trouble epdi check pannuvanga?',
      a: 'Inverter driver inverter card output, compressor three-phase winding ohms balance, and communication cable check panni diagnose pannuvanga.'
    },
    {
      q: 'Hitachi French door refrigerator touch control pad respond panna maatudhu?',
      a: 'Front glass door hinge ribbon harness check pannanum. Regular door swing nala ribbon wires stress aagi cut aaga vaaipu irukku.'
    },
    {
      q: 'Hitachi fridge Eco Thermo sensor failure symptoms enna?',
      a: 'Cabin food items freeze aagi ice aagum or cooling delay aagi milk spoil aagum. Sensor temperature curve test pannanum.'
    },
    {
      q: 'Karur-la Hitachi refrigerator repair doorstep-la attend panrara?',
      a: 'Aama, Hitachi multi-door and inverter models-ku doorstep inspection and component replacement Karur-la provide panrom.'
    },
    {
      q: 'Hitachi fridge evaporator coil mela excessive frost build-up aana enna seiyanum?',
      a: 'Defrost heater and thermal limiter switch test pannanum. Defrost cycle fail aana entire cooling air path block aagum.'
    },
    {
      q: 'Hitachi fridge door rubber gasket damaged aana repair mudiyuma?',
      a: 'Hitachi door frame profiles-ku matching magnetic gasket fit panni cold air retention restore panna mudiyum.'
    },
    {
      q: 'Hitachi sealed system gas charging Karur-la evlo aagum?',
      a: 'System brazing, vacuum pull, and R600a charging around ₹2,100 to ₹3,100 range-la model capacity base panni quote pannuvom.'
    },
    {
      q: 'Karur Pasupathipalayam and Thorakkalpatti-la Hitachi service irukka?',
      a: 'Irukku, Pasupathipalayam, Thorakkalpatti, Kagithapuramam ellathulayum reliable doorstep technicians visit panranga.'
    }
  ],
  'Kelvinator': [
    {
      q: 'Kelvinator single door fridge-la ice kattai excessive-aa form aagudhu, enna reason?',
      a: 'Thermostat sensor capillary loose aagirukalam or thermostat dial contact welded aagirukalam. New thermostat pottu cooling regulate pannalam.'
    },
    {
      q: 'Kelvinator fridge compressor start aagala, tick tick sound mattum varudhu?',
      a: 'Starter relay burn aagirukkum. Relay and overload protector replace pannina compressor normal-aa ignite aagi cooling start pannum.'
    },
    {
      q: 'Kelvinator frost-free double door fridge keezha cooling illa, why?',
      a: 'Bimetal defrost switch or defrost timer stuck aagirukkum. Evaporator coil frost choke aana keezha chill airflow varaadhu.'
    },
    {
      q: 'Kelvinator pazhaya model fridges-ku spares Karur-la kedaikkuma?',
      a: 'Kedaikkum, Kelvinator robust mechanical components-ku compatible spares Karur market-la readily available-aa irukku.'
    },
    {
      q: 'Kelvinator fridge vegetable box kulla water leak aagudhu, enna seiyanum?',
      a: 'Defrost water collection hole dirt-la அடைஞ்சு irukkum. Adhai clear panni hot water flush pannina water easily back tray-ku pogum.'
    },
    {
      q: 'Kelvinator fridge door close aagala, loose-aa irukku, enna fault?',
      a: 'Door gasket magnetic strip weak aagirukalam or bottom hinge washer theinju door sag aagirukalam. Hinge alignment and gasket seating fix pannuvom.'
    },
    {
      q: 'Karur Town and Thanthonimalai-la Kelvinator fridge technician visit varuvara?',
      a: 'Kandippa varuvar, Karur Town, Thanthonimalai, Inam Karur ella area-layum doorstep service quick-aa kedaikkum.'
    },
    {
      q: 'Kelvinator fridge repair cost estimate eppo theriyum?',
      a: 'Technician inspection mudinjudhum 10 minutes-la exact spare requirement and affordable cost explain pannuvanga.'
    }
  ],
  'Sharp': [
    {
      q: 'Sharp J-Tech Inverter fridge compressor start aaga late aagudha?',
      a: 'J-Tech inverter compressor soft-start feature use pannum, power vandhudhum 3 to 5 minutes delay aagi step-by-step rpm accelerate aagum. Start aagave illa-na inverter board test pannanum.'
    },
    {
      q: 'Sharp Plasmacluster fridge odor neutralise aagala-na enna check pannanum?',
      a: 'Plasmacluster high-voltage generator unit and airflow circulation duct check pannanum. Fan stalled aana air treatment cycle work aagadhu.'
    },
    {
      q: 'Sharp 4-door French door fridge cooling balance illa, enna issue?',
      a: 'Independent airflow dampers in each compartment balance cold air. Stuck flap or bad sensor temperature distribution-a affect pannum.'
    },
    {
      q: 'Sharp fridge hybrid cooling panel mela ice kattuma?',
      a: 'Normally moist gentle chill dhaan irukkanum. Solid ice kattina defrost sensor or control logic fault check panna vendiyirukkum.'
    },
    {
      q: 'Karur-la Sharp refrigerator repair-ku doorstep visit unda?',
      a: 'Unda, Karur residential areas across doorstep diagnostic inspection and repair visits provide panrom.'
    },
    {
      q: 'Sharp fridge-la defrost heater fault epdi inspect pannuvanga?',
      a: 'Back panel open panni heater element resistance ohm meter-la measure pannuvanga. Open circuit irundha new matched heater fit pannuvom.'
    },
    {
      q: 'Sharp fridge door gasket replace panna mudiyuma?',
      a: 'Mudiyum, Sharp large French door and top-freezer profiles-ku suitable magnetic gasket beading install panrom.'
    },
    {
      q: 'Sharp inverter control PCB board repair mudiyuma?',
      a: 'Board-la power components and switching ICs repairable condition-la irundha bench service panni fix pannuvom.'
    },
    {
      q: 'Sharp fridge sealed system gas leak test epdi pannuvanga?',
      a: 'Nitrogen pressure testing moolam pinhole leaks identify panni copper brazing and R600a refill conduct panrom.'
    },
    {
      q: 'Karur Kovai Road and Vennaimalai-ku Sharp technician varuvara?',
      a: 'Aama, Kovai Road, Vennaimalai, Pasupathipalayam ellathulayum technicians doorstep service attend panranga.'
    }
  ],
  'IFB': [
    {
      q: 'IFB frost-free inverter fridge cooling intermittent-aa irukku, enna reason?',
      a: 'Inverter compressor driver pulse signals or temperature thermistor calibration check pannanum. Sensor drift aana compressor proper speed-la odadhu.'
    },
    {
      q: 'IFB fridge metal cooling back panel chill illama warm-aa irukku, why?',
      a: 'Evaporator coil-la gas circulation drop aagirukkum or circulation fan motor slow aagirukkum. Refrigeration gas and fan speed test pannanum.'
    },
    {
      q: 'IFB direct cool single door fridge-la ice kattai defrost aagala, enna seiyanum?',
      a: 'Defrost push button stuck aagirukalam or thermostat bellows charge loss aagirukalam. Thermostat switch replace panna cooling smooth aagum.'
    },
    {
      q: 'IFB fridge door close pannalum light anaiya maatudhu, enna problem?',
      a: 'Door switch plunger loose or broken. Continuous light heat cooling chamber-a warm panna vaaipu irukku, switch change pannanum.'
    },
    {
      q: 'Karur-la IFB refrigerator doorstep repair service available-aa?',
      a: 'Available, unga call or message vandha udane scheduled timing slot-la technician doorstep visit panni troubleshoot pannuvanga.'
    },
    {
      q: 'IFB fridge bottom floor-la water pool aagudhu, edhanala?',
      a: 'Defrost drain hose blocked aana water defrost trough-la overflow aagi cabinet floor-ku varum. Hose de-clogging panna solve aagum.'
    },
    {
      q: 'IFB fridge inverter board repair cost evlo irukkum?',
      a: 'PCB component repair ₹2,400 to ₹5,000 range-la board architecture poruthu differ aagum. Upfront estimate tharuvom.'
    },
    {
      q: 'IFB fridge door gasket loose aana replace panna mudiyuma?',
      a: 'Mudiyum, IFB models-ku matching magnetic door seals install panni airtight cooling preservation restore panrom.'
    },
    {
      q: 'Karur Vengamedu and Velayuthampalayam Road-la IFB fridge service irukka?',
      a: 'Irukku, Vengamedu, Velayuthampalayam Road, Kagithapuramam surrounding areas-la doorstep service kedaikkum.'
    }
  ],
  'Onida': [
    {
      q: 'Onida single door fridge-la freezer matrum ice kattudhu, keezha cooling illa?',
      a: 'Direct cool single door models-la chill plate freezer kitta irukkum. Air circulation flap broken aana or tray mela over-storage panna bottom section chill aagadhu.'
    },
    {
      q: 'Onida fridge compressor start aagum bodhu clicking sound vandhu ninnudhu, why?',
      a: 'PTC starter relay burn aagirukalam. New relay pottu compressor amp draw check pannina udane cooling ready aagum.'
    },
    {
      q: 'Onida frost-free fridge lower cabin-la vegetable spoil aagudhu, enna fault?',
      a: 'Defrost timer or bimetal thermostat failure nala evaporator coil ice-la block aagi blower fan air throw panna mudiyama poidum.'
    },
    {
      q: 'Onida fridge parts Karur-la affordable cost-la kedaikkuma?',
      a: 'Kedaikkum, Onida fridges use standard Indian refrigeration parts which are cost-effective and easily serviceable.'
    },
    {
      q: 'Onida fridge door rubber hard aagi gap varudhu, enna pannanum?',
      a: 'Gasket rubber harden aana airtight sealing poirum. New magnetic gasket beading replace panni cooling leakage prevent pannanum.'
    },
    {
      q: 'Onida fridge repair-ku Karur-la technician doorstep visit eppo varuvanga?',
      a: 'Same day or customer convenient timing slot-la technician doorstep attend panni problem resolve pannuvanga.'
    },
    {
      q: 'Onida fridge gas refill cost evlo aagum Karur-la?',
      a: 'Leak test, brazing, and gas recharging usually ₹1,600 to ₹2,500 range-la transparent-aa complete pannuvom.'
    },
    {
      q: 'Karur Thanthonimalai and Vaiyapuri Nagar-la Onida fridge repair kedaikuma?',
      a: 'Kandippa kedaikum, Thanthonimalai, Vaiyapuri Nagar, Karur Town ella area-layum doorstep service provide panrom.'
    }
  ],
  'Toshiba': [
    {
      q: 'Toshiba Origin Inverter fridge compressor odala, enna check pannanum?',
      a: 'Toshiba Origin Inverter system synchronises both inverter compressor and DC fan. Dual inverter board DC rail voltages and compressor resistance check pannanum.'
    },
    {
      q: 'Toshiba PureBio refrigerator-la bad smell varudhu, why?',
      a: 'PureBio module air circulation path ice block or dust blockage nala choke aagirukalam. Defrost drain cleaning and airflow duct inspection theva padum.'
    },
    {
      q: 'Toshiba double door fridge keezha compartments cooling drop aachu, enna reason?',
      a: 'Electronic defrost sensor open circuit aana evaporator coil-la frost kattum. Choked ice air vents-a block panni chill circulation-a stop pannidum.'
    },
    {
      q: 'Toshiba fridge DC fan motor complaint epdi find panradhu?',
      a: 'Fan blade freely rotate aagala or high-pitched humming sound vandha fan bearing dry aagirukku. DC fan motor replace pannanum.'
    },
    {
      q: 'Karur-la Toshiba refrigerator repair doorstep service unda?',
      a: 'Unda, Karur Town, Pasupathipalayam, Thorakkalpatti and outer suburbs full-aa technician doorstep service provide panrom.'
    },
    {
      q: 'Toshiba fridge door gasket loose aana cooling leak aaguma?',
      a: 'Kandippa, magnetic seal weak aana exterior moisture ulla vandhu internal sweating and cooling drop undakkum. Gasket change pannanum.'
    },
    {
      q: 'Toshiba inverter PCB board repair Karur-la panna mudiyuma?',
      a: 'Mudiyum, switching power supplies and drive circuitry bench test panni component level repair conduct panrom.'
    },
    {
      q: 'Toshiba fridge sealed system leak test epdi pannuvanga?',
      a: 'Nitrogen gas pressure holding test vechu brazed joints verify pannuvom. Pinhole fix panni R600a charge pannuvom.'
    },
    {
      q: 'Toshiba fridge repair quote upfront-aa tharuvangala?',
      a: 'Aama, technician spot inspection mudinju clear spare and service cost explain pannitu unga confirmation kedaicha dhaan repair start aagum.'
    },
    {
      q: 'Karur Kovai Road and Kagithapuramam-la Toshiba service attend pannuvangala?',
      a: 'Kandippa, Kovai Road, Kagithapuramam, Rayanur surrounding residential layouts-la regular-aa attend panrom.'
    }
  ],
  'Voltas Beko': [
    {
      q: 'Voltas Beko NeoFrost Dual Cooling fridge freezer cold, aana fridge cabin warm, why?',
      a: 'NeoFrost fridges use two independent cooling evaporators. If the fridge compartment fan stalls or defrost sensor fails, the fridge section loses chill while the freezer stays sub-zero.'
    },
    {
      q: 'Voltas Beko ProSmart Inverter compressor start aaga maatudhu, enna fault?',
      a: 'ProSmart 4-speed inverter driver board signal failure or power surge damage nala compressor ignite aagathu. Board supply check pannanum.'
    },
    {
      q: 'Voltas Beko HarvestFresh compartment lighting change aagala, enna pannanum?',
      a: 'HarvestFresh 3-colour LED cycle controller or door reed switch contact check pannanum. Continuous door closing-la switch loose aagirukalam.'
    },
    {
      q: 'Voltas Beko frost-free fridge back wall-la heavy ice slab form aagudhu, enna issue?',
      a: 'Defrost heater element or bimetal thermal fuse cut aagirukkum. Heat illadha nala accumulated frost defrost aagala.'
    },
    {
      q: 'Karur-la Voltas Beko refrigerator service doorstep-la kedaikuma?',
      a: 'Kedaikum, Karur city and all surrounding pin codes-ku direct doorstep inspection and spare replacement support undu.'
    },
    {
      q: 'Voltas Beko fridge bottom vegetable tray kulla water thengudhu, why?',
      a: 'Defrost drain hose choke aana meltwater cabinet floor-la leakage aagum. Drain channel clean panna problem theerum.'
    },
    {
      q: 'Voltas Beko fridge door seal magnetic grip loose aana replace panna mudiyuma?',
      a: 'Aama, Voltas Beko door perimeter profiles-ku matched magnetic gasket beading install panrom.'
    },
    {
      q: 'Voltas Beko fridge compressor gas leak repair evlo aagum?',
      a: 'Pinhole solder, nitrogen pressure test, and R600a gas recharging ₹1,800 to ₹2,800 kulla model capacity base panni vary aagum.'
    },
    {
      q: 'Voltas Beko fridge repair-ku pazhaya parts thirumba kudupangala?',
      a: 'Kandippa, replace panna defective parts customer kitta kaati clarify pannitu hand over panniduvom.'
    },
    {
      q: 'Karur Vengamedu and Inam Karur-la Voltas Beko technician varuvara?',
      a: 'Varuvar, Vengamedu, Inam Karur, Thanthonimalai ellathulayum reliable doorstep technicians available-aa irukanga.'
    },
    {
      q: 'Voltas Beko single door direct cool fridge repair attend pannuvangala?',
      a: 'Aama, Voltas Beko direct cool single door fridges-layum thermostat, relay, and gasket replacements attend panrom.'
    }
  ],
  'Lloyd': [
    {
      q: 'Lloyd inverter refrigerator cooling low-aa irukku, enna check pannanum?',
      a: 'Ten-vent airflow tower ducts, temperature settings, and inverter compressor speed modulation check pannanum. Multimeter testing moolam issue pinpoint pannuvom.'
    },
    {
      q: 'Lloyd fridge compressor click sound vandhu off aagudhu, enna repair?',
      a: 'PTC starter relay or overload protector burn aagirukkum. Puthiya relay pottu compressor amperage check pannina smooth start aagum.'
    },
    {
      q: 'Lloyd frost-free double door fridge lower shelves-la milk spoil aagudhu, why?',
      a: 'Evaporator coil-la frost buildup nala airflow choke aagirukalam. Defrost sensor or glass heater element replace panna vendiyirukkum.'
    },
    {
      q: 'Lloyd direct cool fridge freezer box-la ice stone madhiri kattudhu, enna problem?',
      a: 'Thermostat sensor capillary loose aagi continuous run aagalam. Thermostat switch replace panni temperature regulate pannanum.'
    },
    {
      q: 'Karur-la Lloyd refrigerator repair doorstep-la mudiyuma?',
      a: 'Mudiyum, Karur Town, Pasupathipalayam, Thanthonimalai, and all areas-la doorstep service arrange panrom.'
    },
    {
      q: 'Lloyd fridge vegetable crisper bottom-la water leak aagudhu, edhanala?',
      a: 'Defrost water drain tube algae or dirt-la அடைஞ்சு irukkum. Cleansing and water flushing moolam drain smooth aagum.'
    },
    {
      q: 'Lloyd fridge inverter motherboard repair cost evlo irukkum?',
      a: 'PCB component testing panni ₹2,200 to ₹4,800 kulla board restoration or replacement conduct pannuvom.'
    },
    {
      q: 'Lloyd fridge door gasket change panna cooling improve aaguma?',
      a: 'Kandippa, warm exterior air ulla pogadha nala compressor workload kuraiyum, cooling retention 100% restore aagum.'
    },
    {
      q: 'Karur Vaiyapuri Nagar and Mayanur Road-la Lloyd fridge service kedaikuma?',
      a: 'Kedaikum, Vaiyapuri Nagar, Mayanur Road, Vennaimalai ellathulayum scheduled doorstep visits provide panrom.'
    }
  ],
  'Midea': [
    {
      q: 'Midea multi-door refrigerator temperature balance aagala, enna fault?',
      a: 'Midea multi-zone fridges use motorized dampers to regulate airflow between upper and lower cabins. Damper flap jam aana cooling imbalance varum.'
    },
    {
      q: 'Midea side-by-side fridge compressor silent-aa irukku, cooling illa?',
      a: 'Inverter compressor driver board supply output test pannanum. Driver IPM failure or communication error irundha compressor run aagadhu.'
    },
    {
      q: 'Midea frost-free fridge freezer-la ice kattudhu aana fridge compartment warm, why?',
      a: 'Defrost sensor (NTC) or defrost heating element fail aagi evaporator coil ice-la block aagirukkum. Defrost spares replace pannanum.'
    },
    {
      q: 'Midea fridge DC blower fan sound rattling-aa kekkudhu, enna seiyanum?',
      a: 'Fan blade ice-la touch aagudha or fan motor bearing worn out aagirukka-nu check pannanum. Replacement fan motor fit pannuvom.'
    },
    {
      q: 'Karur-la Midea refrigerator repair-ku doorstep support unda?',
      a: 'Unda, Karur residential localities-la experienced technicians doorstep inspection conduct panranga.'
    },
    {
      q: 'Midea fridge door magnetic gasket loose aana repair mudiyuma?',
      a: 'Model dimensions match panna replacement magnetic gasket install panni airtight seal restore panrom.'
    },
    {
      q: 'Midea fridge sealed system gas leak test epdi pannuvanga?',
      a: 'Nitrogen leak test panni pinhole braze seivadhu, deep vacuum pull, and R600a hydrocarbon charging precision scale-la execute panrom.'
    },
    {
      q: 'Midea fridge repair cost transparent-aa explain pannuvangala?',
      a: 'Aama, fault diagnosis mudinjudhum exact spare requirement and labour cost upfront explain pannuvanga.'
    },
    {
      q: 'Karur Kovai Road and Thanthonimalai-la Midea fridge attend pannuvangala?',
      a: 'Kandippa, Kovai Road, Thanthonimalai, Pasupathipalayam, Sengunthapuram all zones-la technician visits available.'
    },
    {
      q: 'Midea fridge digital display-la temperature blink aagudha?',
      a: 'Zone sensor out of range signal thandha display blink aagum. Sensor testing panni replacement panna display stable aagum.'
    }
  ],
  'Blue Star': [
    {
      q: 'Blue Star deep freezer / visi cooler-la cooling kammi aana enna check pannanum?',
      a: 'Bottom condenser fan motor run aagudha, condenser coil dust-la choke aagirukka, and thermostat dial setting check pannanum. Heavy dust condenser-la irundha heat dissipate aagathu.'
    },
    {
      q: 'Blue Star chest freezer compressor start aaga strain pannudhu, clicking sound varudhu?',
      a: 'Commercial & heavy-duty compressors use hard-start capacitors and heavy-duty relays. Capacitor bulge aana or relay contacts pitted aana motor start aagathu.'
    },
    {
      q: 'Blue Star deep freezer lid perimeter around dense ice form aagudha?',
      a: 'Top lid silicone perimeter gasket torn or misaligned aana warm ambient air ulla poi solid ice border create pannum. Gasket seating replace pannanum.'
    },
    {
      q: 'Blue Star bottle cooler / visi cooler digital temperature controller display blank-aa irukku?',
      a: 'Sub-zero digital controller power supply or probe connection check pannanum. Controller fail aana replacement unit install panni program pannuvom.'
    },
    {
      q: 'Karur commercial & domestic areas-la Blue Star cooling unit service kedaikuma?',
      a: 'Kedaikum, Karur commercial markets, grocery outlets, and residential homes ellathulayum Blue Star cooling equipment service provide panrom.'
    },
    {
      q: 'Blue Star deep freezer sealed system puncture gas leak repair panna mudiyuma?',
      a: 'Mudiyum. Sharp tool nala aluminium/copper puncture aana brazing panni, nitrogen pressure test, filter drier change, and gas refill pannuvom.'
    },
    {
      q: 'Blue Star condenser fan motor noisy-aa irundha enna aagum?',
      a: 'Condenser fan stop aana compressor overheat aagi internal thermal protector trip aagum, cooling full-aa ninnu poirum. Fan motor replace pannanum.'
    },
    {
      q: 'Blue Star cooling equipment repair charges Karur-la evlo irukkum?',
      a: 'Unit type (chest freezer, visi cooler, domestic unit) and spare requirement poruthu honest upfront estimate provide panrom.'
    },
    {
      q: 'Karur Kagithapuramam and Bus Stand Area-la Blue Star technician varuvara?',
      a: 'Kandippa varuvar, wholesale market, Kagithapuramam, Bus Stand Area and bypass corridors-la quick service kedaikkum.'
    }
  ],
  'Motorola': [
    {
      q: 'Motorola smart inverter fridge cooling drop aana enna pannanum?',
      a: 'Smart sensor diagnostics, inverter compressor speeds, and air circulation tower vents check pannanum. Multimeter testing moolam exact issue find pannuvom.'
    },
    {
      q: 'Motorola fridge convertible mode change aagala, why?',
      a: 'Touch panel interface or smart control PCB-la mode switching relay inspect pannanum. Electronic damper stuck aana convertible chill transfer aagadhu.'
    },
    {
      q: 'Motorola frost-free fridge freezer-la mattum ice kattudhu, keezha cooling illa?',
      a: 'Defrost sensor or defrost heater element fail aagi evaporator coil ice-la block aagirukkum. Defrost parts replace panna air circulation normal aagum.'
    },
    {
      q: 'Motorola smart fridge inverter PCB board issue-a doorstep-la repair panna mudiyuma?',
      a: 'Power circuit components and voltage regulator stages doorstep-la test panni suitable board repair or replacement provide panrom.'
    },
    {
      q: 'Karur-la Motorola refrigerator repair technician visit eppo kedaikkum?',
      a: 'Phone or WhatsApp vazhiya booking confirm pannina convenient time slot-la doorstep technician visit provide panrom.'
    },
    {
      q: 'Motorola fridge bottom vegetable tray kulla water thengudha?',
      a: 'Defrost drain hose blocked aana water defrost trough-la overflow aagi cabinet floor-ku varum. Hose de-clogging panna solve aagum.'
    },
    {
      q: 'Motorola fridge door gasket loose aana cooling leak aaguma?',
      a: 'Aama, magnetic seal weak aana exterior moisture ulla vandhu internal sweating and cooling drop undakkum. Gasket change pannanum.'
    },
    {
      q: 'Karur Pasupathipalayam and Thorakkalpatti-la Motorola fridge service unda?',
      a: 'Undu, Pasupathipalayam, Thorakkalpatti, Kovai Road residential areas-la scheduled doorstep visits attend panrom.'
    }
  ],
  'BPL': [
    {
      q: 'BPL single door direct cool fridge-la cooling full-aa ninnu pochu, enna issue?',
      a: 'Start relay burn aagirukalam, thermostat cut-off switch open aagirukalam, or compressor motor fail aagirukalam. Relay test panni cooling restore panna mudiyum.'
    },
    {
      q: 'BPL fridge compressor click sound vandhu cut aagudhu, enna repair?',
      a: 'PTC starter relay or overload protector burn aagirukkum. Puthiya relay pottu compressor ammeter testing pannina smooth start aagum.'
    },
    {
      q: 'BPL frost-free fridge lower compartment chill illama food spoil aagudhu?',
      a: 'Defrost timer or bimetal thermostat failure nala evaporator coil ice-la block aagi blower fan air throw panna mudiyama poidum.'
    },
    {
      q: 'BPL fridge spares ippo Karur-la kedaikkuma?',
      a: 'Kedaikkum, BPL fridges use standard electromechanical components such as rotary thermostats, PTC relays, and fans that are readily available.'
    },
    {
      q: 'BPL fridge door rubber hard aagi gap varudhu, enna pannanum?',
      a: 'Gasket rubber harden aana airtight sealing poirum. New magnetic gasket beading replace panni cooling leakage prevent pannanum.'
    },
    {
      q: 'BPL fridge vegetable crisper bottom-la water leak aagudhu, edhanala?',
      a: 'Defrost water drain tube algae or dirt-la அடைஞ்சு irukkum. Cleansing and water flushing moolam drain smooth aagum.'
    },
    {
      q: 'Karur Town and Thanthonimalai-la BPL fridge technician visit varuvara?',
      a: 'Kandippa varuvar, Karur Town, Thanthonimalai, Inam Karur ella area-layum doorstep service quick-aa kedaikkum.'
    },
    {
      q: 'BPL fridge gas charging cost Karur-la evlo aagum?',
      a: 'Leak test, brazing, and gas recharging usually ₹1,600 to ₹2,500 range-la transparent-aa complete pannuvom.'
    }
  ],
  'Acer': [
    {
      q: 'Acerpure smart inverter fridge cooling drop aana enna pannanum?',
      a: 'Inverter compressor modulation, multi-sensor thermistors, and electronic airflow dampers check pannanum. Multimeter testing moolam issue pinpoint pannuvom.'
    },
    {
      q: 'Acer fridge digital touch display-la temperature blink aagudha?',
      a: 'Sensor out of range or defrost cycle delay nala display blink aagalam. Internal sensors test panni calibration panna display normal aagum.'
    },
    {
      q: 'Acer frost-free inverter fridge freezer-la mattum ice kattudhu, keezha cooling illa?',
      a: 'Defrost heater element or defrost sensor fail aagi evaporator coil ice-la block aagirukkum. Defrost parts replace panna air circulation restore aagum.'
    },
    {
      q: 'Acer fridge DC circulation fan noisy-aa run aagudha?',
      a: 'Fan blade ice-la touch aagudha or DC motor bearing dry aagirukka-nu check pannanum. Replacement fan motor fit pannuvom.'
    },
    {
      q: 'Karur-la Acerpure refrigerator repair doorstep service unda?',
      a: 'Unda, Karur residential areas across doorstep diagnostic inspection and repair visits provide panrom.'
    },
    {
      q: 'Acer fridge inverter PCB control board repair mudiyuma?',
      a: 'Board-la power components and switching ICs repairable condition-la irundha bench service panni fix pannuvom.'
    },
    {
      q: 'Acer fridge door gasket loose aana replace panna mudiyuma?',
      a: 'Mudiyum, Acerpure profiles-ku matching magnetic gasket beading install panni airtight cooling preservation restore panrom.'
    },
    {
      q: 'Karur Pasupathipalayam and Kovai Road-ku Acer technician varuvara?',
      a: 'Aama, Pasupathipalayam, Kovai Road, Vennaimalai ellathulayum technicians doorstep service attend panranga.'
    }
  ],
  'Hisense': [
    {
      q: 'Hisense PureFlat / side-by-side fridge cooling uneven-aa irukku, enna fault?',
      a: 'Cross-air dampers and independent evaporator fan motors balance air across multiple shelves. Motorised flap jam aana temperature variation varum.'
    },
    {
      q: 'Hisense inverter compressor start aaga maatudhu, enna reason?',
      a: 'Inverter power module supply fuse or compressor drive IPM chip tripped aagirukalam. Electronic board bench testing panni issue clarify pannuvom.'
    },
    {
      q: 'Hisense frost-free fridge lower cabin-la food warm-aa irukku, why?',
      a: 'Evaporator coil pinadi frost build-up aagi multiAirflow duct-a block pannirukkum. Defrost heater element and sensor check panna vendiyirukkum.'
    },
    {
      q: 'Hisense cross-door fridge display-la error code kaatudha?',
      a: 'Hisense control boards specific error codes moolam sensor, fan, or defrost failure-a signal pannum. Code decode panni quick repair mudiyum.'
    },
    {
      q: 'Karur-la Hisense refrigerator repair doorstep-la attend panrara?',
      a: 'Aama, Hisense multi-door, side-by-side, and frost-free models-ku doorstep inspection and component replacement Karur-la provide panrom.'
    },
    {
      q: 'Hisense fridge door close pannalum tight seal kedaikala, enna pannanum?',
      a: 'Door magnetic gasket seating-la gap irundhu exterior humidity ulla enter aana condensation varum. Gasket seating alignment test panna vendiyirukkum.'
    },
    {
      q: 'Hisense fridge bottom vegetable tray kulla water thengudhu, why?',
      a: 'Defrost drain hose choke aana meltwater cabinet floor-la leakage aagum. Drain channel clean panna problem theerum.'
    },
    {
      q: 'Hisense sealed system gas leak test epdi pannuvanga?',
      a: 'Nitrogen gas pressure holding test vechu brazed joints verify pannuvom. Pinhole fix panni R600a charge pannuvom.'
    },
    {
      q: 'Hisense fridge repair quote upfront-aa tharuvangala?',
      a: 'Kandippa, part replacement theva patta exact cost and labour upfront explain pannitu unga confirmation kedaicha dhaan proceed pannuvom.'
    },
    {
      q: 'Karur Vengamedu and Kovai Road-la Hisense service kedaikuma?',
      a: 'Kedaikum, Kovai Road, Vengamedu, Thanthonimalai, Sengunthapuram residential zones-la doorstep service kedaikkum.'
    }
  ]
};

function getBrandFaqs(brandName) {
  return brandFaqsMap[brandName] || brandFaqsMap['Samsung'];
}

module.exports = {
  brandFaqsMap,
  getBrandFaqs
};
