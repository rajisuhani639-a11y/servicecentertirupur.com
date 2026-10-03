function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

const expandedBrandProblems = {
  godrej: [
    {
      quote: "Godrej 5-in-1 Convertible mode-la cooling delay aagudhu",
      text: "Godrej 5-in-1 convertible inverter AC remote-la full cooling mode switch panna cooling pick up aaga 25 minutes aagudhu nu customers ketpanga. Compressor frequency inverter driver logic, indoor thermistor sensor calibration, illana outdoor dirt blockage idhuku reason. Technician electronic readings test panni, outdoor fins clean panni quick cooling bring pannuvanga."
    },
    {
      quote: "Indoor unit right side-la irunthu continuous water drops",
      text: "Godrej split AC on pannina indoor unit corner-la water drop aagi wooden wardrobe mela sottudhu nu urgent visit ketpanga. Condensate drain tray algae choke, illana drain pipe angle bend aagirukalaam. Technician drain pipe-a pressure wash panni flush panni, water leak problem-a complete-aa stop pannuvanga."
    },
    {
      quote: "Anti-corrosive Blue Fin coil mela heavy dust adanjirukku",
      text: "Godrej Blue Fin outdoor condenser unit mela Karur roadside dust full-aa adanju cooling kuranjuduchu nu solluvanga. Outdoor fin heat rejection block aana compressor overload trip aagum. Technician pressurized water jet wash panni fins deep clean panni, compressor load reduce panni chilling restore panni tharuvanga."
    },
    {
      quote: "Outdoor unit run aagum bodhu humming and buzzing sound",
      text: "Godrej AC outdoor unit switch on aana heavy buzzing sound wall-la ketkudhu nu customer solluvanga. Outdoor condenser fan blade unbalance, mounting bracket loose bolts, illana motor bushing wear aagirukalaam. Technician brackets tighten panni, fan balance verify panni silent smooth running guarantee pannuvanga."
    },
    {
      quote: "Display panel-la E1 error code blink aagi fan ninnudhu",
      text: "Godrej inverter AC start panni few minutes-la display panel-la E1 error code blink aagi indoor blower shut down aagidudhu nu customer inform pannuvanga. Room thermistor sensor open circuit illana coil sensor impedance drift idhuku cause. Digital multimeter vechu sensor test panni fresh sensor replace panni technician fix pannuvanga."
    },
    {
      quote: "Afternoon time-la compressor frequent-aa trip aagidudhu",
      text: "Night super chilling kudukkuthu, aana afternoon 12 PM to 3 PM compressor frequent-aa cut-off aagi warm breeze tharudhu nu solluvanga. Rooftop heat build-up, outdoor fan speed drop, illana capacitor weak aagirukalaam. Fan motor capacitor test panni, airflow improve panni stable cooling technician ensure pannuvanga."
    }
  ],

  "blue-star": [
    {
      quote: "Blue Star AC Deep Cooling mode-la room cool aagala",
      text: "Blue Star Deep Cooling mode set panninaalum room warm-aa irukku, cooling increase aagala nu customers contact pannuvanga. Inverter compressor power control board, room thermistor impedance, illana outdoor air circulation restriction idhuku reason. Technician PCB parameter test panni, coil clean panni proper cooling delivery restore pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration terrace floor mela create pannudhu",
      text: "Blue Star heavy-duty outdoor unit run aagum bodhu floor adhirura alavuku vibration sound varudhu nu complain varum. Compressor bottom rubber dampers hardness increase aagi wear out aagirukalaam, illana stand bolt loose aagirukalaam. Heavy-duty rubber shock absorbers replace panni, mounting tighten panni vibration technician control pannuvanga."
    },
    {
      quote: "Indoor unit evaporator coil mela thick white ice katti ninnudhu",
      text: "Blue Star AC run aagitu irukum bodhe front grill mela thick ice form aagi air throw complete-aa block aagirukku nu solluvanga. Air filter heavy lint blockage illana R32 refrigerant pressure drop idhuku cause. Technician ice defrost panni, filters wash panni, suction pressure test panni problem fix pannuvanga."
    },
    {
      quote: "Display-la EC illana E5 error code flash aagudhu",
      text: "Blue Star inverter AC on panna 5 minutes-la display panel-la EC error flash aagi compressor cut-off aagidudhu nu customer solluvanga. Copper tube flare joint minor leakage illana system pressure drop idhuku common reason. Technician nitrogen leak test panni, flare joints brazing panni gas recharge panni tharuvanga."
    },
    {
      quote: "Indoor blower motor switch on panna rattling noise varudhu",
      text: "Indoor unit blower fan on panna continuous clicking and rattling sound bedroom-la disturbing-aa irukku nu solluvanga. Cross-flow blower wheel-la dust unbalance illana blower end bearing dry aagirukalaam. Technician blower wheel dismantle panni deep clean panni, shaft lubricate panni quiet performance restore pannuvanga."
    },
    {
      quote: "Remote control sensor signal receive panna delay pannudhu",
      text: "Remote key press panni 3 or 4 times try pannina dhaan AC respond aagudhu nu customer complaint pannuvanga. Indoor display PCB infrared receiver sensor lens dirty aagirukalaam illana receiver circuit weak aagirukalaam. Technician display board check panni, sensor circuit service panni instant remote response restore pannuvanga."
    }
  ],

  lloyd: [
    {
      quote: "Lloyd 5-in-1 Convertible mode switch panna cooling delay",
      text: "Lloyd 5-in-1 convertible split AC remote-la full cooling mode switch panna compressor start aaga delay aagudhu nu customers inform pannuvanga. Inverter controller board logic, supply voltage variation, illana room sensor temperature reading mismatch idhuku reason. Technician circuit board diagnosis panni, sensor calibration check panni rapid chilling restore panni tharuvanga."
    },
    {
      quote: "Lloyd Golden Fin coil mela heavy mud dust adanjirukku",
      text: "Lloyd Golden Fin outdoor condenser unit mela bypass road dust adanju cooling efficiency romba dull aagidudhu nu complain varum. Condenser fin heat release aaga mudiyama compressor overload trip aagum. Local technician pressurized water jet wash panni fins deep clean panni uninterrupted cooling guarantee pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain tray-la overflow aagi wall nanayudhu",
      text: "Lloyd AC continuous running-la indoor bottom panel-la irunthu continuous water drip aagi bedroom wall nanayudhu nu call varum. Drain hose pipe-la algae slime block illana pipe slope reverse aagirukalaam. Technician drain line pressure wash panni flush panni, indoor mounting slope level perfectly align pannuvanga."
    },
    {
      quote: "Display-la E3 error code blink aagi indoor blower shut down",
      text: "Lloyd inverter AC start panna few minutes-la display-la E3 error code flash aagi compressor and blower off aagidudhu nu customer solluvanga. Indoor copper coil thermistor sensor resistance value fail aanaalum idhu kaatum. Digital multimeter vechu sensor ohms test panni compatible fresh thermistor technician replace pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "Lloyd outdoor unit run aana terrace wall-la buzzing sound and vibration room-la ketkudhu nu customer inform pannuvanga. Condenser fan blade dust weight unbalance illana bracket wall anchor bolts loose aagirukalaam. Technician bracket bolts tighten panni, fan blade clean panni smooth vibration-free working restore pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la cooling totally cut-off aagudhu",
      text: "Night chilled cooling kudukkuthu, aana afternoon 1 PM to 4 PM compressor frequent-aa trip aagi warm air tharudhu nu solluvanga. Outdoor unit direct sun heat and capacitor microfarad drop idhuku cause. Compressor capacitor test panni, outdoor airflow improve panni continuous stable cooling technician ensure pannuvanga."
    }
  ],

  ifb: [
    {
      quote: "IFB Fast Cool Inverter compressor start aaga hesitation",
      text: "IFB Fast Cool inverter split AC switch on pannina indoor fan odudhu, aana compressor start aaga 15 minutes aagudhu nu customer solluvanga. Outdoor inverter board IPM module, start capacitor, illana room sensor resistance drift idhuku main reason-aa irukalaam. Technician electronic board readings test panni fault identify panni fix pannuvanga."
    },
    {
      quote: "Titanium Gold Fin outdoor coil-la dust choking cooling drop",
      text: "IFB Gold Fin condenser unit mela street dust accumulate aagi heat reject aagala, room cool aaga time edukkudhu nu complaint varum. Fins air passage block aana compressor overload thermal protector trip aagum. Technician pressurized water jet cleaning panni fins clean panni instant strong cooling restore pannuvanga."
    },
    {
      quote: "Indoor swing flap dislocation aagi rattling noise varudhu",
      text: "IFB split AC switch on panna air swing flap open aagama continuous ticking noise mattum varudhu nu customer request pannuvanga. Flap drive stepper motor gear teeth wear out aagirukalaam illana hinge lock broken aagirukalaam. Technician stepper motor test panni, genuine louver motor replace panni air distribution normalise pannuvanga."
    },
    {
      quote: "Display-la E4 error code blink aagi AC off aagidudhu",
      text: "IFB inverter AC running-la sudden-aa E4 error display panel-la blink aagi compressor shut down aagidudhu nu customer solluvanga. Indoor evaporator coil thermistor sensor open circuit illana outdoor communication drop idhuku reason. Technician digital meter vechu sensor ohms check panni, fault rectify panni error clear pannuvanga."
    },
    {
      quote: "Indoor unit right corner-la water leak aagi floor nanayudhu",
      text: "IFB AC run aagum bodhu indoor bottom corner-la water drop drops-aa drip aagi wooden floor nananjudum nu urgent visit ketpanga. Condensate drain pipe algae choke illana indoor unit mounting unlevel aagirukalaam. Pressure drain cleaning panni slope adjust panni water leakage technician complete-aa stop pannuvanga."
    }
  ],

  haier: [
    {
      quote: "Haier Self-Clean frost wash cycle stuck aagi cooling illa",
      text: "Haier AC Self-Clean feature activate panna cycle complete aagala, cooling thirumba start aagave illa nu customers call pannuvanga. Frost freeze sensor reading mismatch, indoor PCB sequence lock, illana drain block idhuku reason-aa irukalaam. Technician board cycle reset panni, sensor ohms test panni normal manual and auto cooling restore pannuvanga."
    },
    {
      quote: "Triple Inverter compressor frequency drop aagi cooling slow",
      text: "Haier Triple Inverter split AC remote-la turbo mode set panninaalum room cooling romba slow-aa nadakudhu nu complaint varum. Outdoor PCB inverter driver heatsink paste dry aanaalum, illana ambient sensor fault aanaalum compressor speed kuraiyum. Heatsink compound re-apply panni, outdoor fins clean panni optimum performance technician restore pannuvanga."
    },
    {
      quote: "Indoor cross-flow blower heavy dust accumulation vibration",
      text: "Haier indoor unit on panna bedroom-la continuous vibration and humming sound ketkudhu nu customer solluvanga. Blower fan blades mela uneven sticky dust accumulate aagi wheel unbalance aagirukalaam. Technician front cabinet dismantle panni, blower deep wash panni, shaft bearing lubricate panni soundless airflow bring pannuvanga."
    },
    {
      quote: "Indoor drain tray algae slime block aagi water drip",
      text: "Haier AC switch on panna 30 minutes-la indoor front panel bottom-la water drop drops-aa drip aagudhu nu solluvanga. Condensate water drain pan-la algae jelly accumulate aagi outlet choke aagirukalaam. Technician vacuum suction drain line cleaning panni, tray flush panni water leakage issue-a complete-aa solve pannuvanga."
    },
    {
      quote: "Display panel-la F3 illana E7 error code flash aagudhu",
      text: "Haier inverter AC running-la sudden-aa F3 error code display panel-la flash aagi compressor stop aagidudhu nu customer inform pannuvanga. Outdoor inverter board communication failure illana compressor discharge sensor fault idhuku cause. Technician circuit board trace panni, sensor test panni clear affordable repair execute pannuvanga."
    },
    {
      quote: "Outdoor unit fan slow speed run aagi compressor overheat",
      text: "Outdoor unit compressor continuous-aa run aagudhu, aana fan speed slow-aa irundhu unit extreme-aa heat aagudhu nu customer solluvanga. Outdoor fan motor capacitor microfarad value drop aagirukalaam. Technician capacitor capacitance meter vechu test panni, fresh capacitor replace panni normal fan RPM bring pannuvanga."
    }
  ],

  whirlpool: [
    {
      quote: "Whirlpool 6th Sense Intellicool temperature adjust aagala",
      text: "Whirlpool 6th Sense AC room temperature correct-aa maintain panna matengudhu, occasional warm breeze blow aagudhu nu customers inform pannuvanga. Room thermistor sensor drift, electronic expansion valve delay, illana inverter logic communication drop idhuku cause. Technician electronic sensors calibrate panni, logic test panni reliable consistent comfort cooling restore panna mudivangala."
    },
    {
      quote: "MagniCool compressor afternoon heat-la sudden trip aagudhu",
      text: "Night super chilling tharudhu, aana afternoon 1 PM to 3 PM Whirlpool compressor frequent-aa trip aagi warm air blow aagudhu nu solluvanga. Outdoor condenser coil heavy dust clogging-naala discharge pressure spike aagi thermal trip aagum. Technician pressurized water jet wash panni fins deep clean panni non-stop cooling guarantee pannuvanga."
    },
    {
      quote: "Indoor unit right corner-la water drip aagi carpet nanayudhu",
      text: "Whirlpool split AC run aagum bodhu indoor bottom corner-la water drop drops-aa drip aagi bedroom carpet nananjudum nu customer call pannuvanga. Drain tray algae dust choke, illana drain hose bend aagirukalaam. Technician drain line clear panni, tray chemical wash panni water leakage complete-aa arrest pannuvanga."
    },
    {
      quote: "Outdoor unit heavy rattling vibration wall-la ketkudhu",
      text: "Whirlpool outdoor unit on aagum bodhu heavy rattling sound terrace wall-la ketkudhu nu complain varum. Condenser fan blade balance weight shift aanaalum, illana bracket anchor bolts loose aanaalum vibration varum. Technician mechanical bolts tighten panni, anti-vibration pads fit panni soundless performance deliver pannuvanga."
    },
    {
      quote: "Display-la E1 illana F2 error code blink aagidudhu",
      text: "Whirlpool inverter AC start aagi few minutes-la display panel-la E1 error code blink aagi indoor blower shut down aagidudhu nu customer solluvanga. Indoor room sensor illana coil copper thermistor impedance shift aagirukalaam. Multimeter vechu thermistor ohms test panni compatible fresh sensor technician replace pannuvanga."
    },
    {
      quote: "Indoor evaporator coil full-aa ice katti air throw block",
      text: "Front cover open panni paatha copper coil full-aa white ice katti air throw complete-aa ninnuduchu nu customer solluvanga. Air filter dust blockage illana R32 refrigerant pressure drop idhuku cause. Technician ice defrost panni, filters wash panni, suction pressure test panni cooling problem fix pannuvanga."
    }
  ],

  hisense: [
    {
      quote: "Hisense Inverter AC switch on panna cooling start aagala",
      text: "Hisense split AC remote-la on pannina indoor fan normal-aa breeze kudukkuthu, aana compressor start aagave illa nu customers call pannuvanga. Outdoor inverter board IPM power circuit, start capacitor, illana room sensor value shift idhuku reason. Technician outdoor cover open panni complete circuit test panni upfront repair estimate explain pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "Hisense AC running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit request pannuvanga. Condensate drain pipe-la algae dust slime choke aagirukalaam illana pipe slope unlevel aagirukalaam. Pressure drain cleaning panni slope adjust panni water leakage technician complete-aa stop pannuvanga."
    },
    {
      quote: "Outdoor unit fan motor heavy humming sound kudukkuthu",
      text: "Hisense outdoor unit run aana continuous humming noise and terrace vibration ketkudhu nu complain varum. Outdoor condenser fan blade dust unbalance illana motor bearing wear aagirukalaam. Technician mounting bolts tighten panni, fan blade balance verify panni silent smooth operation restore panni tharuvanga."
    },
    {
      quote: "Display-la E4 error code blink aagi compressor shut down",
      text: "Hisense inverter AC start aana 5 minutes-la display-la E4 error code flash aagi compressor off aagidudhu nu customer solluvanga. Indoor coil copper sensor impedance failure illana communication disconnect idhuku cause. Digital multimeter vechu sensor ohms test panni fresh sensor replace panni technician fix pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la cooling totally cut-off aagudhu",
      text: "Night super chilling kudukkuthu, aana afternoon 1 PM to 4 PM compressor frequent-aa trip aagi warm breeze tharudhu nu solluvanga. Outdoor unit direct sun heat and capacitor microfarad drop idhuku reason. Compressor capacitor test panni, outdoor airflow improve panni continuous stable cooling technician ensure pannuvanga."
    }
  ],

  sharp: [
    {
      quote: "Sharp J-Tech Inverter compressor cooling slow-aa irukku",
      text: "Sharp J-Tech Inverter AC remote-la low temperature set panninaalum room cooling reach aaga romba time edukkudhu nu customer solluvanga. Inverter controller PCB frequency regulation, outdoor coil dirt layer, illana room sensor reading mismatch idhuku reason. Heatsink paste check panni, outdoor jet cleaning panni rapid cooling technician bring pannuvanga."
    },
    {
      quote: "Plasmacluster Ion air discharge-la fan rattling sound",
      text: "Sharp AC switch on panna Plasmacluster ion generator section-la irunthu continuous clicking rattling noise ketkudhu nu complain varum. Ionizer pin dust accumulation illana indoor cross-flow fan bearing dry aagirukalaam. Technician front cabinet dismantle panni, ionizer unit clean panni, motor bearing lubricate panni silent airflow restore pannuvanga."
    },
    {
      quote: "Indoor unit right corner-la water drop aagi wall nanayudhu",
      text: "Sharp split AC use pannum bodhu wall paint mela water dampness and continuous dripping irukku nu customer inform pannuvanga. Condensate drain hose elbow joint slime block aagirukalaam. Pressure drain wash panni, drain pipe tightly seal panni indoor mounting slope-a technician perfectly adjust pannuvanga."
    },
    {
      quote: "Display-la 1-1 illana 2-1 error code blink aagi off aagudhu",
      text: "Sharp inverter AC start aana udane indoor timer light pattern-aa blink aagi shut down aagidudhu nu customer contact pannuvanga. Thermistor sensor resistance value out-of-range illana outdoor fan motor stall idhuku cause. Multimeter vechu sensor ohms measure panni genuine sensor replace panni error clear pannuvanga."
    },
    {
      quote: "Outdoor unit compressor start aagum bodhu heavy thump sound",
      text: "Sharp compressor cut-in aagum bodhu heavy mechanical thump sound terrace wall-la ketkudhu nu customer inform pannuvanga. Compressor mounting rubber cushions hardened aagirukalaam illana stand bolt loose aagirukalaam. Technician heavy rubber dampers replace panni, mounting bolts tighten panni vibration sound-a normalise panni tharuvanga."
    }
  ],

  acerpure: [
    {
      quote: "Acerpure Dual Inverter AC cooling start aaga delay aagudhu",
      text: "Acerpure inverter split AC switch on pannina indoor fan normal-aa blow pannudhu, aana compressor start aaga 15 minutes aagudhu nu customers call pannuvanga. Inverter PCB driver communication delay, room sensor calibration drift, illana outdoor power line voltage drop idhuku cause. Technician electronic circuit inspect panni quick repair execute pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "Acerpure AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "Acerpure outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display panel-la E1 error code blink aagi indoor blower off",
      text: "Acerpure inverter split AC start panni 3 minutes-la indoor display panel-la E1 error code blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana indoor coil sensor failure idhuku reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la compressor frequent-aa trip",
      text: "Acerpure AC night time-la super-ah cool pannudhu, aana afternoon veyyil nerathula compressor cut-off aagi warm air blow pannudhu nu ketpanga. High ambient heat nerathula outdoor condenser coil dust blockage-naala compressor trip aagum. Technician outdoor coil deep jet wash service panni cooling efficiency-a restore panni tharuvanga."
    }
  ],

  kelvinator: [
    {
      quote: "Kelvinator heavy-duty AC-la blower fan odudhu, cooling illa",
      text: "Kelvinator split AC switch on pannina indoor blower breeze kudukkuthu, aana cooling mattum konjam kooda illa nu customer contact pannuvanga. Intha situation-la outdoor compressor capacitor, dust adanja condenser fins, illana gas pressure drop aagirukalaam. Local technician first unit-a inspect pannitu fault explain panni fix pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae choke water overflow",
      text: "Kelvinator AC running-la indoor bottom panel-la water drop drops-aa drip aagi floor nananjudum nu customer complaint pannuvanga. Drain tray algae dust choke, illana drain hose gradient slope thappa irundhaalum leak aagum. Technician drain pan chemical wash panni, drain pipe flush panni water leakage complete-aa arrest pannuvanga."
    },
    {
      quote: "Outdoor unit run aagum bodhu heavy metal rattling sound",
      text: "Kelvinator AC on panna terrace wall-la buzzing and rattling sound ketkudhu nu inform pannuvanga. Outdoor fan motor balance weight shift aanaalum, illana bracket anchor bolts loose aanaalum vibration varum. Technician mechanical bolts tighten panni, fan blade alignment check panni soundless performance deliver pannuvanga."
    },
    {
      quote: "Afternoon peak heat-la compressor trip aagi fan mattum odudhu",
      text: "Night super cooling tharudhu, aana afternoon 2 PM-ku outdoor fan stop aagi warm air blow aagudhu nu solluvanga. Outdoor unit condenser fins heavy dust accumulation-naala heat release aaga mudiyama compressor trip aagum. Technician outdoor deep jet wash service panni cooling efficiency-a normalise pannuvanga."
    },
    {
      quote: "Display-la E3 error code blink aagi indoor blower ninnudhu",
      text: "Kelvinator split AC run aagitu irukum bodhe display panel-la E3 error code kaati blower fan shut down aagidudhu nu customer solluvanga. Indoor room sensor illana coil copper thermistor impedance shift aagirukalaam. Technician multimeter vechu thermistor ohms test panni, correct replacement panni error clear pannuvanga."
    },
    {
      quote: "Kelvinator Window AC vibration and low cooling issue",
      text: "Kelvinator Window AC on panna excessive cabinet vibration and weak cooling tharudhu nu customer inform pannuvanga. Rear condenser fins dirt mud accumulation illana fan motor sleeve bearing play idhuku cause. Technician window unit dismantle panni, coil pressure clean panni, motor bearing lubricate panni solve pannuvanga."
    }
  ]
};

console.log("Validating expanded brand problems 11 to 20...");
let errorCount = 0;
for (const [brand, problems] of Object.entries(expandedBrandProblems)) {
  problems.forEach((p, idx) => {
    const c = wordCount(p.text);
    if (c < 40 || c > 50) {
      console.error(`ERROR: ${brand} problem ${idx + 1} has ${c} words: "${p.text}"`);
      errorCount++;
    }
  });
}
console.log(`Validation finished with ${errorCount} errors.`);
module.exports = expandedBrandProblems;
