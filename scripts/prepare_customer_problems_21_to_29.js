function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

const expandedBrandProblems = {
  tcl: [
    {
      quote: "TCL Gentle Cool smart louver flap stuck aagidudhu",
      text: "TCL smart inverter AC switch on panna Gentle Cool perforated louver flap open aagama clicking sound mattum varudhu nu customer solluvanga. Flap drive step motor gear teeth wear aagirukalaam illana louver linkage arm dislodge aagirukalaam. Technician louver mechanism dismantle panni, stepper motor test panni smooth uniform airflow restore pannuvanga."
    },
    {
      quote: "AI Inverter PCB circuit surge fault-naala compressor cut-off",
      text: "TCL split AC remote-la on pannina indoor blower run aagudhu, aana compressor start aagum bodhe cut-off aagidudhu nu complain varum. Inverter PCB driver communication delay, room sensor calibration drift, illana outdoor power line voltage drop idhuku cause. Technician electronic circuit inspect panni quick repair execute pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "TCL outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display panel-la E1 error code blink aagi indoor blower off",
      text: "TCL inverter split AC start panni 3 minutes-la indoor display panel-la E1 error code blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana indoor coil sensor failure idhuku reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "TCL AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la compressor frequent-aa trip",
      text: "TCL AC night time-la super-ah cool pannudhu, aana afternoon veyyil nerathula compressor cut-off aagi warm air blow pannudhu nu ketpanga. High ambient heat nerathula outdoor condenser coil dust blockage-naala compressor trip aagum. Technician outdoor coil deep jet wash service panni cooling efficiency-a restore panni tharuvanga."
    }
  ],

  bpl: [
    {
      quote: "BPL split AC on pannina indoor fan odudhu, cooling illa",
      text: "BPL split AC switch on pannina indoor blower normal-aa breeze kudukkuthu, aana cooling mattum konjam kooda illa nu customer contact pannuvanga. Intha situation-la outdoor compressor capacitor, dust adanja condenser fins, illana gas pressure drop aagirukalaam. Local technician first unit-a inspect pannitu fault explain panni fix pannuvanga."
    },
    {
      quote: "BPL Window AC heavy vibration and cabinet humming noise",
      text: "BPL Window AC on panna heavy metal vibration and fan humming sound bedroom-la ketkudhu nu complain varum. Fan motor rubber mountings hardened aagirukalaam illana blower wheel dust unbalance aagirukalaam. Technician front cabinet dismantle panni, motor rubber cushions replace panni, blower deep wash panni silent working restore pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain tray-la algae slime water leak",
      text: "BPL AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Display panel-la error code blink aagi fan stop aagidudhu",
      text: "BPL split AC start panni few minutes-la display panel-la error code blink aagi fan shut down aagidudhu nu solluvanga. Room thermistor sensor open circuit illana indoor coil copper sensor failure idhuku cause. Digital multimeter vechu sensor resistance test panni, compatible fresh sensor fit panni technician fix pannuvanga."
    },
    {
      quote: "Afternoon peak heat-la compressor trip aagi fan mattum odudhu",
      text: "Night super cooling tharudhu, aana afternoon 2 PM-ku outdoor fan stop aagi warm air blow aagudhu nu solluvanga. Outdoor unit condenser fins heavy dust accumulation-naala heat release aaga mudiyama compressor trip aagum. Technician outdoor deep jet wash service panni cooling efficiency-a normalise pannuvanga."
    }
  ],

  mitsubishi: [
    {
      quote: "Mitsubishi Heavy Inverter AC cooling slow-aa irukku",
      text: "Mitsubishi Heavy Inverter split AC remote-la full cooling set panninaalum room chilled temperature reach aaga delay aagudhu nu customers inform pannuvanga. Electronic expansion valve pulse delay, room thermistor sensor calibration, illana outdoor dirt layer idhuku reason. Electronic readings test panni, outdoor fins clean panni quick cooling bring pannuvanga."
    },
    {
      quote: "Indoor cross-flow fan bearing stiffness clicking noise",
      text: "Mitsubishi AC on panna indoor cross-flow fan right corner-la continuous clicking noise ketkudhu nu complain varum. Cross-flow fan bearing plastic seat wear aanaalum, illana dust unbalance aanaalum noise varum. Technician fan wheel dismantle panni, special damping grease apply panni whisper-quiet air throw restore panni tharuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "Mitsubishi AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "Mitsubishi outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display panel-la timer light blinking pattern error",
      text: "Mitsubishi inverter AC start panni 3 minutes-la indoor timer light pattern-aa blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana outdoor coil sensor failure idhuku reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    }
  ],

  motorola: [
    {
      quote: "Motorola Smart Inverter AC convertible mode response delay",
      text: "Motorola smart inverter AC remote app-la convertible capacity change pannina cooling adjust aaga romba neram edukkudhu nu customer solluvanga. Inverter controller board logic, supply voltage variation, illana room sensor temperature reading mismatch idhuku reason. Technician circuit board diagnosis panni, sensor calibration check panni rapid chilling restore panni tharuvanga."
    },
    {
      quote: "Indoor unit right corner-la water drip aagi wall nanayudhu",
      text: "Motorola split AC run aagum bodhu indoor bottom corner-la water drop drops-aa drip aagi bedroom wall nananjudum nu customer call pannuvanga. Drain tray algae dust choke, illana drain hose bend aagirukalaam. Technician drain line clear panni, tray chemical wash panni water leakage complete-aa arrest pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing noise terrace-la",
      text: "Motorola outdoor unit run aana terrace wall-la buzzing sound and vibration room-la ketkudhu nu customer inform pannuvanga. Condenser fan blade dust weight unbalance illana bracket wall anchor bolts loose aagirukalaam. Technician bracket bolts tighten panni, fan blade clean panni smooth vibration-free working restore pannuvanga."
    },
    {
      quote: "Display-la E4 error code blink aagi indoor blower shut down",
      text: "Motorola inverter AC start panna few minutes-la display-la E4 error code flash aagi compressor and blower off aagidudhu nu customer solluvanga. Indoor copper coil thermistor sensor resistance value fail aanaalum idhu kaatum. Digital multimeter vechu sensor ohms test panni compatible fresh thermistor technician replace pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la cooling totally cut-off aagudhu",
      text: "Night chilled cooling kudukkuthu, aana afternoon 1 PM to 4 PM compressor frequent-aa trip aagi warm air tharudhu nu solluvanga. Outdoor unit direct sun heat and capacitor microfarad drop idhuku cause. Compressor capacitor test panni, outdoor airflow improve panni continuous stable cooling technician ensure pannuvanga."
    }
  ],

  kenstar: [
    {
      quote: "Kenstar split AC on pannina blower fan odudhu, cooling illa",
      text: "Kenstar split AC switch on pannina indoor blower breeze kudukkuthu, aana cooling mattum konjam kooda illa nu customer contact pannuvanga. Intha situation-la outdoor compressor capacitor, dust adanja condenser fins, illana gas pressure drop aagirukalaam. Local technician first unit-a inspect pannitu fault explain panni fix pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "Kenstar AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "Kenstar outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display panel-la E1 error code blink aagi indoor blower off",
      text: "Kenstar inverter split AC start panni 3 minutes-la indoor display panel-la E1 error code blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana indoor coil sensor failure idhuku reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la compressor frequent-aa trip",
      text: "Kenstar AC night time-la super-ah cool pannudhu, aana afternoon veyyil nerathula compressor cut-off aagi warm air blow pannudhu nu ketpanga. High ambient heat nerathula outdoor condenser coil dust blockage-naala compressor trip aagum. Technician outdoor coil deep jet wash service panni cooling efficiency-a restore panni tharuvanga."
    }
  ],

  electrolux: [
    {
      quote: "Electrolux Multi-Stage Inverter compressor cooling slow",
      text: "Electrolux inverter split AC switch on pannina indoor blower run aagudhu, aana compressor full cooling speed reach aaga delay aagudhu nu customers call pannuvanga. Outdoor inverter board IPM power circuit, start capacitor, illana room sensor value shift idhuku reason. Technician outdoor cover open panni complete circuit test panni fix pannuvanga."
    },
    {
      quote: "Indoor unit right corner-la water drip aagi wall nanayudhu",
      text: "Electrolux split AC run aagum bodhu indoor bottom corner-la water drop drops-aa drip aagi bedroom wall nananjudum nu customer call pannuvanga. Drain tray algae dust choke, illana drain hose bend aagirukalaam. Technician drain line clear panni, tray chemical wash panni water leakage complete-aa arrest pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing noise terrace-la",
      text: "Electrolux outdoor unit run aana terrace wall-la buzzing sound and vibration room-la ketkudhu nu customer inform pannuvanga. Condenser fan blade dust weight unbalance illana bracket wall anchor bolts loose aagirukalaam. Technician bracket bolts tighten panni, fan blade clean panni smooth vibration-free working restore pannuvanga."
    },
    {
      quote: "Display-la E3 error code blink aagi indoor blower shut down",
      text: "Electrolux inverter AC start panna few minutes-la display-la E3 error code flash aagi compressor and blower off aagidudhu nu customer solluvanga. Indoor copper coil thermistor sensor resistance value fail aanaalum idhu kaatum. Digital multimeter vechu sensor ohms test panni compatible fresh thermistor technician replace pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la cooling totally cut-off aagudhu",
      text: "Night chilled cooling kudukkuthu, aana afternoon 1 PM to 4 PM compressor frequent-aa trip aagi warm air tharudhu nu solluvanga. Outdoor unit direct sun heat and capacitor microfarad drop idhuku cause. Compressor capacitor test panni, outdoor airflow improve panni continuous stable cooling technician ensure pannuvanga."
    }
  ],

  sansui: [
    {
      quote: "Sansui split AC-la blower fan odudhu, cooling illa",
      text: "Sansui split AC switch on pannina indoor blower breeze kudukkuthu, aana cooling mattum konjam kooda illa nu customer contact pannuvanga. Intha situation-la outdoor compressor capacitor, dust adanja condenser fins, illana gas pressure drop aagirukalaam. Local technician first unit-a inspect pannitu fault explain panni fix pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "Sansui AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "Sansui outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display panel-la E1 error code blink aagi indoor blower off",
      text: "Sansui inverter split AC start panni 3 minutes-la indoor display panel-la E1 error code blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana indoor coil sensor failure idhuku reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la compressor frequent-aa trip",
      text: "Sansui AC night time-la super-ah cool pannudhu, aana afternoon veyyil nerathula compressor cut-off aagi warm air blow pannudhu nu ketpanga. High ambient heat nerathula outdoor condenser coil dust blockage-naala compressor trip aagum. Technician outdoor coil deep jet wash service panni cooling efficiency-a restore panni tharuvanga."
    }
  ],

  havells: [
    {
      quote: "Havells inverter AC-la smart mode response slow-aa irukku",
      text: "Havells inverter split AC remote-la smart cooling mode select pannina room cooling adjust aaga romba neram edukkudhu nu customer solluvanga. Inverter controller board logic, supply voltage variation, illana room sensor temperature reading mismatch idhuku reason. Technician circuit board diagnosis panni, sensor calibration check panni rapid chilling restore panni tharuvanga."
    },
    {
      quote: "Indoor swing flap louver gear slip aagi clicking sound",
      text: "Havells split AC switch on panna air swing flap open aagama continuous ticking noise mattum varudhu nu customer request pannuvanga. Flap drive stepper motor gear teeth wear out aagirukalaam illana hinge lock broken aagirukalaam. Technician stepper motor test panni, genuine louver motor replace panni air distribution normalise pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "Havells AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "Havells outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display panel-la E1 error code blink aagi indoor blower off",
      text: "Havells inverter split AC start panni 3 minutes-la indoor display panel-la E1 error code blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana indoor coil sensor failure idhuku reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    }
  ],

  acer: [
    {
      quote: "Acer Quad Inverter AC cooling start aaga delay aagudhu",
      text: "Acer quad inverter split AC switch on pannina indoor fan normal-aa blow pannudhu, aana compressor start aaga 15 minutes aagudhu nu customers call pannuvanga. Inverter PCB driver communication delay, room sensor calibration drift, illana outdoor power line voltage drop idhuku cause. Technician electronic circuit inspect panni quick repair execute pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block water drip",
      text: "Acer AC continuous running-la indoor bottom panel-la water drop drops-aa drip aagi wall nanayudhu nu urgent visit ketpanga. Drain tray algae sludge, dirty air filter condensation, illana drain hose bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing sound terrace-la",
      text: "Acer outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display panel-la E1 error code blink aagi indoor blower off",
      text: "Acer inverter split AC start panni 3 minutes-la indoor display panel-la E1 error code blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana indoor coil sensor failure idhuku reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    },
    {
      quote: "Afternoon peak sun time-la compressor frequent-aa trip",
      text: "Acer AC night time-la super-ah cool pannudhu, aana afternoon veyyil nerathula compressor cut-off aagi warm air blow pannudhu nu ketpanga. High ambient heat nerathula outdoor condenser coil dust blockage-naala compressor trip aagum. Technician outdoor coil deep jet wash service panni cooling efficiency-a restore panni tharuvanga."
    }
  ]
};

console.log("Validating expanded brand problems 21 to 29...");
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
