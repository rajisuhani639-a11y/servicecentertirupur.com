const fs = require('fs');
const path = require('path');

const brandScenarios = {
  "Samsung": [
    {
      scenario: "Palayamkottai Family Home — 5E Drain Error",
      text: "Palayamkottai side-la oru customer veetla Samsung front load wash mudinjathukku apram water full-ah drum-la nikkama irundhadhu, 5E error vandhuchu. Technician visit panni front bottom drain filter check pannapo coin maati pump stuck aagirundhadhu. Filter clean pannitu pump test panni drain cycle complete aaguradha confirm panni kuduthaanga."
    },
    {
      scenario: "Vannarpettai Apartment — Heavy Shaking During Spin",
      text: "Vannarpettai apartment-la Samsung Wobble top load machine spin cycle appo romba satham pottu adichikittu irundhadhu. Display-la dC error vandhadhu. Technician check panni 4 suspension rods tension poiduchu-nu sonnaanga. Puthiya damper rods maathunathum machine balance aagi drum romba smooth-ah silent-ah spin aaga aaramichiduchu."
    },
    {
      scenario: "Tirunelveli Town House — Water Not Filling Issue",
      text: "Town Nellaiappar temple pakkam irukkura veetla Samsung fully automatic machine-la water flow romba slow-ah irundhadhu, 4C error kaatuchu. Technician inlet valve filter-la hard water salt adachirundhadhai remove panni valve replace pannanga. Water intake speed normal aagi wash program thadangal illama smooth-ah run aachu."
    },
    {
      scenario: "Perumalpuram Clinic — Door Latch Stuck",
      text: "Perumalpuram area-la Samsung front load wash mudinju door lock aagi thirakka mudiyala. Customer handle pottu ilukkaamal call pannanga. Technician vandhu emergency door release latch use panni open pannitu, faulty bi-metal door switch maathi door smooth-ah lock and open aagura maadhiri ready pannanga."
    },
    {
      scenario: "Maharaja Nagar Residence — Spin Tub Not Working",
      text: "Maharaja Nagar-la Samsung semi-automatic twin tub machine-la wash nallaa aachu aana spin dryer rotate aagala. Technician check pannapo spin safety lid switch cut aagi run capacitor weak-ah irundhadhu. Switch re-wire panni puthiya capacitor maathunadhum spin motor full speed-la fast-ah run aaga aaramichiduchu."
    },
    {
      scenario: "KTC Nagar Home — PCB Display Dead",
      text: "KTC Nagar veetla Samsung digital inverter machine-la power on aagala, display full-ah blank-ah irundhadhu. Technician power socket check pannitu PCB board power section-la capacitor burn aagirundhadhai identify panni component level repair panni board restore pannanga. Machine thirumba normal condition-ku vandhadhu."
    }
  ],
  "Whirlpool": [
    {
      scenario: "Palayamkottai House — Water Draining Continuously",
      text: "Palayamkottai area-la Whirlpool top load machine-la water tap on panna podhum, drum-la water nikkama drain pipe vazhiya veliye poiduchu. Technician visit panni drain valve open pannapo coin stuck aagirundhadhai eduthu, damaged rubber flap maathunadhum water hold aagi wash cycle smooth-ah start aachu nalla speed-la."
    },
    {
      scenario: "Tirunelveli Junction Home — Spin Motor Hum Without Running",
      text: "Junction railway station pakkam Whirlpool Ace semi automatic machine-la wash nallaa aachu aana spin podumbodhu motor hum sound mattum vandhadhu. Technician buffer seal check panni loose contact sari panni, weak capacitor-ai puthidhaaga maathi spin function-ai instant-ah ready panni nallaa run aaguradha check panni kuduthaanga."
    },
    {
      scenario: "Perumalpuram Residence — 360 BloomWash Vibration",
      text: "Perumalpuram veetla Whirlpool BloomWash machine spin aagumbodhu periya satham pottu cabinet side walls-la adichikittu irundhadhu. Technician inspect panni 4 suspension springs tension loss aagirundhadhai kandupidichu, puthiya set maathi machine leveling perfectly set panni complete-ah vibration-ai reduce panni silent-ah run aaga vechaanga nalla balance-oda."
    },
    {
      scenario: "Melapalayam Family — Water Not Filling",
      text: "Melapalayam bazaar pakkam Whirlpool machine-la water romba slow-ah fill aagi cycle stop aagirundhadhu. Technician inlet solenoid valve-la hard water salt scaling clean panni check pannanga. Valve coil weak aana nala puthiya valve maathunadhum water inlet speed sari aagi wash function restored aaiduchu nalla flow-oda."
    },
    {
      scenario: "Rahmath Nagar Apartment — Pulsator Stripped Spline",
      text: "Rahmath Nagar-la Whirlpool washer motor satham kekkudhu aana center pulsator plate thirumbala, clothes wash aagala. Technician check panni pulsator teeth theinju poiduchu-nu sonnaanga. Original pulsator assembly replace panni agitation function restore pannathum wash cycle clean-ah thuni thovaikka aaramichu nalla super-ah mudinjadhu."
    },
    {
      scenario: "Samathanapuram Home — PCB Beeping Mid-Cycle",
      text: "Samathanapuram collectorate area-la Whirlpool machine wash aagumbodhu paadhila beep sound pottu ninnuduchu. Technician control board and water level pressure pipe check panni, pipe-la lint block irundhadhai clear panni sensor line clean pannathum machine smooth-ah error illama full wash cycle run aagi mudinjadhu."
    }
  ],
  "Bosch": [
    {
      scenario: "Palayamkottai Villa — E18 Drain Pump Choked",
      text: "Palayamkottai main road-la oru customer veetla Bosch Series 6 front load machine E18 error kaati water drain aagama ninuduchu. Technician visit panni bottom drain pump filter open pannapo hairpin and safety pin maati impeller locked aagirundhadhu. Debris eduthu clean pannathum drain cycle perfectly work aachu."
    },
    {
      scenario: "Vannarpettai Residence — Roaring Bearing Noise",
      text: "Vannarpettai flyover pakkam irukkura veetla Bosch front load 1200 RPM spin aagumbodhu flight take-off maadhiri bayangarama sound vandhadhu. Technician check panni rear drum bearings and oil seal theinjirundhadhai confirm panni, heavy duty bearing set maathi sound-ai complete-ah silent aakkinaanga. Wash cycle super-ah mudinjadhu."
    },
    {
      scenario: "Perumalpuram House — Door Gasket Water Leakage",
      text: "Perumalpuram-la Bosch washing machine wash cycle run aagumbodhu front door vazhiya floor-la water leak aachu. Technician inspect panni door rubber gasket-la chinna keeral irundhadhai kandupidichu, puthiya genuine rubber bellow gasket replace panni water leak problem-ai completely arrest panni solve pannanga."
    },
    {
      scenario: "Tirunelveli Town Home — E17 Slow Water Intake",
      text: "Town West Car Street veetla Bosch washer-la water fill aaga romba neram aagi E17 error code vandhudhu. Technician inlet valve check panni overhead tank sediment adachirundhadhai remove panni, weak solenoid coil maathi normal water flow restore panni wash cycle ready pannanga."
    },
    {
      scenario: "Maharaja Nagar Residence — Drum Shaking Heavy",
      text: "Maharaja Nagar-la Bosch top load machine spin cycle appo heavy-ah vibrate aagi sound vandhadhu. Technician drum balance check panni suspension rods tension balance poiduchu-nu sonnaanga. Original damper set maathi leveling perfectly set pannathum machine vibration illama romba smooth-ah silent-ah run aachu."
    },
    {
      scenario: "KTC Nagar Home — Washer Dryer Not Heating",
      text: "KTC Nagar veetla Bosch washer dryer clothes wash pannudhu aana drying cycle-la heat aagala, clothes eerapadhama irundhadhu. Technician heating element coil test panni open circuit aana coil replace panni, lint condenser duct clean panni drying function-ai super-ah ready panni clothes dry aaga vechu kuduthaanga."
    }
  ],
  "IFB": [
    {
      scenario: "Palayamkottai Residence — drn Drain Error Blockage",
      text: "Palayamkottai bus stand pakkam IFB Elena front load machine-la wash cycle mudinjathukku apram water drum-la apdiye irundhadhu, drn error kaatuchu. Technician vandhu bottom filter open panni coin and lint block clear pannanga. Drain pump test panni cycle complete aaguradha check panni clean-ah kuduthaanga."
    },
    {
      scenario: "Vannarpettai Home — Door Latch dO Error",
      text: "Vannarpettai area-la IFB Senator machine door close pannalum start aagala, dO error blink aagitte irundhadhu. Customer handle check pannanga. Technician inspect panni bi-metal door lock switch burnt aagirundhadhai identify panni puthiya interlock maathunadhum door latch aagi machine thadangal illama run aachu."
    },
    {
      scenario: "Tirunelveli Town House — Water Leak Under Door",
      text: "Town Nellaiappar temple street-la IFB front load wash cycle appo front door rubber vazhiya floor-la water leak aagi room full-ah aachu. Technician check panni rubber bellow gasket-la cut irundhadhai kandupidichu, original IFB gasket maathi water leak issue-ai complete-ah arrest panni solve pannanga."
    },
    {
      scenario: "Perumalpuram Residence — Water Not Heating Err3",
      text: "Perumalpuram veetla IFB front load hot wash cycle-la water soodagala, Err3 error vandhadhu. Technician heater coil resistance multimeter-la test pannapo coil burnt aagirundhadhu. New tubular heating element and NTC thermistor replace pannathum hot wash program perfectly work aagi normal temperature vandhadhu."
    },
    {
      scenario: "Maharaja Nagar Home — Roaring High Spin Sound",
      text: "Maharaja Nagar-la IFB machine 1000 RPM spin-la pogumbodhu veede adhirara alavukku periya grinding satham vandhadhu. Technician tub open panni water seal poyi bearings rusted aagirundhadhai kaatinaanga. Puthiya heavy duty bearings set maathunathum machine sound complete-ah ninnu romba silent-ah super-ah aaiduchu nalla balance-la."
    },
    {
      scenario: "Melapalayam House — Top Load Agitation Stopped",
      text: "Melapalayam area-la IFB top load machine motor satham kekkudhu aana drum rotate aagala, clothes soak aagitte irundhadhu. Technician drive belt loose aagi pulsator coupling wear out aagirundhadhai fix panni, puthiya belt maathi agitation function-ai normal panna vechu cycle mudichu kuduthaanga."
    }
  ],
  "Haier": [
    {
      scenario: "Palayamkottai House — E2 Drain Pump Jam",
      text: "Palayamkottai South area-la Haier fully automatic machine-la wash cycle mudinju water veliye pogama E2 error kaatuchu. Technician visit panni front bottom drain filter open pannapo chinna coin pump fan-la maati locked aagirundhadhu. Filter clean panni pump restart pannathum drain cycle thadangal illama smooth-ah aachu."
    },
    {
      scenario: "Vannarpettai Residence — E4 Heavy Spin Vibration",
      text: "Vannarpettai apartment-la Haier Oceanus Wave top load spin aagumbodhu periya satham pottu adichikittu E4 error vandhadhu. Technician check panni 4 suspension rods tension poiduchu-nu sonnaanga. Original damper set maathi level set pannathum spin completely silent aagi vibration illama clean-ah odiduchu."
    },
    {
      scenario: "Tirunelveli Junction Home — E1 Slow Water Filling",
      text: "Junction central market pakkam irukkura veetla Haier washer-la water fill aaga 30 minutes eduthu E1 error code kaatuchu. Technician inlet valve filter-la hard water salt scaling clean panni, weak valve coil replace pannanga. Water speed normal aagi wash cycle super-ah time-ku mudinjadhu."
    },
    {
      scenario: "Perumalpuram House — Door Lock Switch Jammed",
      text: "Perumalpuram-la Haier front load wash mudinju door latch release aagala. Customer force pannaamal call pannanga. Technician emergency release use panni door open pannitu, faulty bi-metal door lock switch maathi proper-ah close and open aagura maadhiri safe-ah fix panni nallaa check panni kuduthaanga."
    },
    {
      scenario: "Melapalayam Home — Semi Automatic Spin Tub Silent",
      text: "Melapalayam bazaar road-la Haier twin tub machine-la wash nallaa aachu aana spin tub-la clothes potta motor rotate aagala. Technician check panni spin motor capacitor weak aagirundhadhai identify panni, puthiya capacitor maathunadhum spin motor fast-ah rotate aagi dry function super-ah aachu."
    },
    {
      scenario: "Maharaja Nagar Residence — Continuous Water Drainage",
      text: "Maharaja Nagar-la Haier machine tap on panna podhum water drum-la nikkama direct-ah drain pipe vazhiya poiduchu. Technician drain valve open panni rubber flap-la maatiyirundha debris clear panni, new spring maathunadhum water drum-la perfectly hold aagi wash cycle smooth-ah start aachu."
    }
  ],
  "Videocon": [
    {
      scenario: "Tirunelveli Town Home — Spin Motor Hum Without Spin",
      text: "Town Nellaiappar temple street-la oru periyavanga veetla Videocon twin tub machine-la wash nallaa aachu aana spin podumbodhu motor satham kekkudhu aana drum rotate aagala. Technician check panni buffer seal leak sari panni, capacitor maathi spin motor-ai fast-ah run aaga ready pannanga."
    },
    {
      scenario: "Palayamkottai House — Drain Valve Water Leakage",
      text: "Palayamkottai side-la Videocon semi automatic washer-la water fill panna udane drain hose vazhiya veliye oodiduchu. Technician visit panni bottom drain valve open pannapo safety pin and coin maati rubber flap bend aagirundhadhai eduthu, puthiya drain flap pottu leak complete-ah arrest pannanga."
    },
    {
      scenario: "Vannarpettai Residence — Wash Timer Sticking",
      text: "Vannarpettai area-la Videocon washer wash timer 15 minutes set panna oru idathula stuck aagi motor continue-ah odikitte irundhadhu. Timer cutoff aagala. Technician mechanical timer inspect panni internal gears worn out aagirundhadhai kaatti, new 4-wire timer replace panni normal cycle restore pannanga."
    },
    {
      scenario: "Thatchanallur Home — Wash Pulsator Weak Rotation",
      text: "Thatchanallur bypass pakkam Videocon machine-la motor sound nallaa kekkudhu aana drum-la thuni potta pulsator rotate aaga theriyala. Technician back panel open panni drive belt romba loose aagi slip aagirundhadhai paarthu, puthiya V-belt maathi tension adjust panni wash power thirumba nallaa restore panni ready pannanga."
    },
    {
      scenario: "Pettai Industrial Area — Spin Tub Banging Heavily",
      text: "Pettai area-la Videocon semi-automatic machine-la spin cycle start panna drum outer wall-la bayangarama adichikittu irundhadhu. Technician motor base rubber mounting springs loose aagirundhadhai kandupidichu, mounting bushes replace panni smooth spin balance set panni sound illama super-ah run panna vechaanga nalla balance-la."
    },
    {
      scenario: "Perumalpuram Home — Top Load Drain Motor Fault",
      text: "Perumalpuram veetla Videocon Digi Gracia fully automatic washer-la wash mudinju water veliye pogama beep sound vandhadhu. Technician drain valve motor test pannapo coil cut aagirundhadhu. New drain tractor motor install pannathum water normal-ah drain aagi wash cycle thadangal illama complete aaiduchu super-ah."
    }
  ],
  "Godrej": [
    {
      scenario: "Palayamkottai House — E1 Water Inlet Salt Choke",
      text: "Palayamkottai area-la Godrej Eon top load machine-la water romba slow-ah fill aagi E1 error kaati cycle stop aachu. Technician visit panni inlet valve filter-la hard water salt scaling irundhadhai clean panni, weak solenoid valve maathunadhum water flow speed-ah aagi wash cycle perfectly mudinjadhu."
    },
    {
      scenario: "Vannarpettai Apartment — E3 Spin Heavy Vibration",
      text: "Vannarpettai apartment-la Godrej fully automatic machine spin podumbodhu bayangarama satham pottu adichikittu E3 error vandhadhu. Technician inspect panni 4 suspension damper springs tension balance poiduchu-nu sonnaanga. New damper set maathi level set pannathum machine smooth-ah silent-ah spin aaga aaramichiduchu nalla balance-la."
    },
    {
      scenario: "Tirunelveli Junction Residence — Spin Tub Dead",
      text: "Junction pakkam Godrej Edge semi automatic machine-la wash nallaa aachu aana spin tub-la clothes potta spin motor rotate aagala, hum sound mattum vandhadhu. Technician buffer seal check panni weak motor capacitor replace pannathum spin dryer full speed-la fast-ah rotate aagi ready aaiduchu."
    },
    {
      scenario: "Perumalpuram Home — Pulsator Stripped Spline",
      text: "Perumalpuram veetla Godrej machine motor satham kekkudhu aana center pulsator thirumbala, clothes wash aagala. Technician check panni pulsator center gear teeth theinju poiduchu-nu sonnaanga. Original Godrej roller coaster pulsator maathi wash function restore pannathum thuni romba clean-ah wash aachu nalla speed-la."
    },
    {
      scenario: "Rahmath Nagar House — Drain Valve Continuous Leak",
      text: "Rahmath Nagar-la Godrej washer tap on panna podhum water drum-la nikkama direct-ah drain hose vazhiya veliye poiduchu. Technician drain valve chamber open panni maatiyirundha safety pin eduthu, puthiya rubber flap maathunadhum water perfectly hold aagi washing program smooth-ah run aachu."
    },
    {
      scenario: "Maharaja Nagar Residence — Wash Timer Sticking",
      text: "Maharaja Nagar-la Godrej twin tub wash timer oru point-la stuck aagi switch off aagala, continuous-ah wash aagitte irundhadhu. Technician mechanical timer inspect panni burnt contacts irundhadhai kandupidichu, new original timer install panni cycle perfectly time-ku stop aagura maadhiri ready pannanga."
    }
  ],
  "Panasonic": [
    {
      scenario: "Palayamkottai House — U11 Drain Error Clearance",
      text: "Palayamkottai side-la oru customer veetla Panasonic top load machine-la wash cycle mudinjathukku apram water veliye pogama U11 error kaatuchu. Technician visit panni bottom drain valve open pannapo coin and threads maatiyirundhadhai clean panni, drain motor test panni cycle complete aaguradha confirm pannanga."
    },
    {
      scenario: "Vannarpettai Apartment — U13 Heavy Spin Shaking",
      text: "Vannarpettai area-la Panasonic ActiveFoam machine spin aagumbodhu periya satham pottu adichikittu U13 error kaatuchu. Technician check panni 4 suspension rods tension poiduchu-nu sonnaanga. Original damper set maathi level perfectly set pannathum spin completely smooth aagi sound illama silent-ah odiduchu nalla balance-la."
    },
    {
      scenario: "Tirunelveli Junction Home — U12 Lid Switch Failure",
      text: "Junction central market pakkam Panasonic washer lid close pannalum U12 error blink aagi spin aagala. Technician check panni lid safety magnetic switch faulty aagirundhadhai identify panni, puthiya lid switch replace panni spin function-ai instant-ah ready panni wash cycle-ai complete panna vechaanga."
    },
    {
      scenario: "Perumalpuram Residence — U14 Slow Water Filling",
      text: "Perumalpuram veetla Panasonic front load machine-la water fill aaga romba neram aagi U14 error code vandhudhu. Technician inlet solenoid valve-la hard water salt scaling clean panni, weak valve coil maathi normal water flow restore panni wash cycle-ai speed aakkinaanga thadangal illama super-ah."
    },
    {
      scenario: "Maharaja Nagar Home — Semi Automatic Spin Motor Silent",
      text: "Maharaja Nagar-la Panasonic twin tub machine-la wash nallaa aachu aana spin dryer rotate aagala, hum sound mattum vandhadhu. Technician buffer seal check panni weak motor capacitor replace pannathum spin dryer fast-ah rotate aagi clothes dry panna aaramichiduchu super-ah nalla speed-la."
    },
    {
      scenario: "Melapalayam House — Continuous Water Drainage",
      text: "Melapalayam-la Panasonic machine tap on panna podhum water drum-la nikkama direct-ah drain hose vazhiya veliye poiduchu. Technician drain valve chamber open panni maatiyirundha safety pin eduthu, new rubber flap maathunadhum water drum-la perfectly hold aagi wash program smooth-ah mudinjadhu thadangal illama."
    }
  ],
  "Onida": [
    {
      scenario: "Palayamkottai House — Spin Motor Hum Without Spin",
      text: "Palayamkottai bus stand pakkam Onida twin tub machine-la wash nallaa aachu aana spin podumbodhu motor satham kekkudhu aana drum rotate aagala. Technician check panni buffer seal leak aagi brake lock aana nala release panni, capacitor maathi spin ready panni kuduthaanga."
    },
    {
      scenario: "Vannarpettai Residence — Drain Valve Water Leakage",
      text: "Vannarpettai flyover pakkam Onida semi automatic washer-la water fill panna udane drain hose vazhiya veliye oodiduchu. Technician visit panni bottom drain valve open pannapo safety pin and coin maati rubber flap bend aagirundhadhai eduthu, puthiya drain flap pottu leak complete-ah arrest pannanga."
    },
    {
      scenario: "Tirunelveli Town Home — Wash Timer Sticking",
      text: "Town West Car Street-la Onida washer wash timer 15 minutes set panna oru idathula stuck aagi motor continue-ah odikitte irundhadhu. Timer cutoff aagala. Technician mechanical timer inspect panni internal gears worn out aagirundhadhai kaatti, new timer replace panni normal wash cycle restore pannanga."
    },
    {
      scenario: "Thatchanallur Home — Wash Pulsator Weak Rotation",
      text: "Thatchanallur-la Onida machine-la motor sound nallaa kekkudhu aana drum-la thuni potta pulsator rotate aaga theriyala. Technician back panel open panni drive belt romba loose aagi slip aagirundhadhai paarthu, puthiya V-belt maathi tension adjust panni wash rotation nalla speed-la restore panni kuduthaanga."
    },
    {
      scenario: "Pettai Industrial Area — Spin Tub Banging Heavily",
      text: "Pettai-la Onida semi-automatic machine-la spin cycle start panna drum outer wall-la bayangarama adichikittu irundhadhu. Technician motor base rubber mounting springs loose aagirundhadhai kandupidichu, mounting bushes replace panni smooth spin balance set panni vibration illama silent-ah odavaithaanga nalla result-oda super-ah nallaa."
    },
    {
      scenario: "Perumalpuram Home — Top Load Drain Motor Fault",
      text: "Perumalpuram veetla Onida Crystal fully automatic washer-la wash mudinju water veliye pogama beep sound vandhadhu. Technician drain valve motor test pannapo coil cut aagirundhadhu. New drain tractor motor install pannathum water normal-ah drain aagi wash cycle smooth-ah mudinjadhu thadangal illama nallaa."
    }
  ],
  "Hitachi": [
    {
      scenario: "Palayamkottai House — C02 Drain Pump Choke",
      text: "Palayamkottai side-la oru customer veetla Hitachi Big Drum front load machine-la wash cycle mudinju water veliye pogama C02 error kaatuchu. Technician visit panni front bottom drain filter open pannapo chinna coin pump fan-la maati locked aagirundhadhu. Filter clean panni pump restart pannathum drain smooth-ah aachu."
    },
    {
      scenario: "Vannarpettai Apartment — C04 Heavy Spin Vibration",
      text: "Vannarpettai apartment-la Hitachi top load spin aagumbodhu periya satham pottu adichikittu C04 error vandhadhu. Technician check panni 4 suspension rods tension poiduchu-nu sonnaanga. Original damper set maathi level set pannathum spin completely silent aagi drum smooth-ah odiduchu vibration illama nalla balance-la."
    },
    {
      scenario: "Tirunelveli Junction Home — C01 Slow Water Intake",
      text: "Junction central market pakkam irukkura veetla Hitachi washer-la water fill aaga 30 minutes eduthu C01 error code kaatuchu. Technician inlet valve filter-la hard water salt scaling clean panni, weak valve coil replace pannanga. Water speed normal aagi wash cycle time-ku mudinjadhu."
    },
    {
      scenario: "Perumalpuram House — Door Lock Switch Jammed",
      text: "Perumalpuram-la Hitachi front load wash mudinju door latch release aagala. Customer force pannaamal call pannanga. Technician emergency release use panni door open pannitu, faulty bi-metal door lock switch maathi proper-ah close and open aagura maadhiri safe-ah fix panni ready aakki kuduthaanga nalla condition-la."
    },
    {
      scenario: "Maharaja Nagar Residence — Roaring Bearing Noise",
      text: "Maharaja Nagar-la Hitachi front load 1200 RPM spin-la pogumbodhu veede adhirara alavukku periya grinding satham vandhadhu. Technician tub open panni water seal poyi bearings rusted aagirundhadhai kaatinaanga. Puthiya heavy duty bearings set maathunathum machine sound ninnu romba silent-ah super-ah aaiduchu nalla spin speed-la."
    },
    {
      scenario: "KTC Nagar Home — Continuous Water Drainage",
      text: "KTC Nagar-la Hitachi machine tap on panna podhum water drum-la nikkama direct-ah drain pipe vazhiya veliye poiduchu. Technician drain valve open panni rubber flap-la maatiyirundha debris clear panni, new spring maathi water hold aagura maadhiri perfectly ready panni kuduthaanga thadangal illama."
    }
  ]
};

// Check words count of all scenarios
let ok = true;
for (let bName in brandScenarios) {
  brandScenarios[bName].forEach((exp, idx) => {
    let count = exp.text.trim().split(/\s+/).length;
    if (count < 40 || count > 50) {
      console.log(`FAIL: ${bName} [${idx}] has ${count} words!`);
      ok = false;
    }
  });
}

if (ok) {
  console.log("All brandScenarios 1-10 are strictly 40-50 words!");
  let brands = require('./wm_brands_1_to_10.js');
  brands.forEach(b => {
    if (brandScenarios[b.name]) {
      b.experiences = brandScenarios[b.name];
    }
  });
  const filePath = path.join(__dirname, 'wm_brands_1_to_10.js');
  fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(brands, null, 2) + ';\n', 'utf8');
  console.log("Updated wm_brands_1_to_10.js successfully!");
}
