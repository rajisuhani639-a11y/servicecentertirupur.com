/**
 * Helper to validate word counts for customer problem scenarios
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

// Map of expanded customer problem scenarios for all 29 brands.
// Every scenario must strictly have between 40 and 50 words (inclusive).
const expandedBrandProblems = {
  carrier: [
    {
      quote: "Carrier AC on pannina fan odudhu, aana cooling varala",
      text: "Summer-la Carrier AC switch on pannina indoor fan normal-ah run aagudhu, aana cooling mattum konjam kooda illa nu customer contact pannuvanga. Intha situation-la outdoor compressor capacitor, dust adanja condenser fins, illana gas pressure drop aagirukalaam. Local technician first unit-a inspect pannitu fault explain panni fix pannuvanga."
    },
    {
      quote: "Flexicool mode change panna cooling kurayudhu",
      text: "Remote-la 6-in-1 Flexicool mode change pannum bodhu cooling sudden-ah drop aagi room heat aagudhu nu complaint varum. Inverter circuit board communication, room sensor thermistor impedance, illana voltage fluctuation idhuku main reason-aa irukalaam. Technician PCB signals and sensor values digital meter vechu test panni correct-aa guide pannuvanga."
    },
    {
      quote: "Carrier indoor unit keela water drip aagi wall nanayudhu",
      text: "Carrier AC run aagi half an hour-la indoor unit bottom corner-la irunthu continuous-aa water drop aagi wall nanayudhu nu call pannuvanga. Drain tray algae sludge, dirty air filter condensation, illana drain pipe bend idhuku reason. Pressure wash vechu drain line clear panni water leakage-a technician stop pannuvanga."
    },
    {
      quote: "Outdoor unit romba vibration and humming sound pannudhu",
      text: "Carrier outdoor unit on aagum bodhu heavy humming sound and terrace wall adhirura alavuku vibration varudhu nu customer solluvanga. Condenser fan blade unbalance, worn-out motor rubber bushing, illana compressor mounting bolt loose aagirukalaam. Technician bolts tighten panni, fan motor alignment check panni smooth soundless operation restore pannuvanga."
    },
    {
      quote: "Display-la E1 error code kaati AC switch off aagidudhu",
      text: "Carrier inverter split AC start panni 3 minutes-la indoor display panel-la E1 error code blink aagi fan stop aagidudhu nu solluvanga. Room temperature sensor open circuit illana indoor coil sensor failure idhuku common reason. Technician sensor resistance test panni, compatible sensor fit panni error code clear pannuvanga."
    },
    {
      quote: "Night-la cooling nalla irukku, afternoon-la cooling illa",
      text: "Carrier AC night time-la super-ah cool pannudhu, aana afternoon veyyil nerathula compressor cut-off aagi warm air blow pannudhu nu ketpanga. High ambient heat nerathula outdoor condenser coil dust blockage-naala compressor trip aagum. Technician outdoor coil deep jet wash service panni cooling efficiency-a restore panni tharuvanga."
    }
  ],

  daikin: [
    {
      quote: "Daikin AC remote-la on pannina outdoor unit on aagala",
      text: "Daikin split AC indoor unit on aagi green light eriyudhu, aana outdoor unit fan odave illa nu customer request pannuvanga. Inverter communication cable loose connection, outdoor PCB power fuse blow, illana compressor relay failure idhuku reason-aa irukalaam. Technician outdoor cover open panni complete circuit test panni solve pannuvanga."
    },
    {
      quote: "Coanda airflow swing flap proper-ah open aagala",
      text: "Daikin AC switch on pannum bodhu swing flap sound mattum varudhu, aana flap open aagala nu complaint varum. Intha situation-la louver swing motor gear teeth strip aagirukalaam, illana flap hinge plastic lock break aagirukalaam. Swing motor test panni, flap alignment adjust panni smooth airflow deliver panna technician mudivangala."
    },
    {
      quote: "Display-la U4 error code blinking aagi AC ninnudhu",
      text: "Daikin inverter AC run aagitu irukum bodhe sudden-aa U4 error display panni compressor and blower stop aagidudhu nu solluvanga. Indoor PCB kum outdoor inverter board kum communication cut aanaalum idhu nadakkum. Wiring signal check panni, outdoor inverter board fault irukka nu technician inspect panni explain pannuvanga."
    },
    {
      quote: "Afternoon time-la Daikin AC-la cooling romba slow-ah irukku",
      text: "Night-la room chilled-aa irukku, aana afternoon 1 PM to 4 PM cooling romba dull-aa irukku nu customers solluvanga. Outdoor unit direct sun exposure, condenser fin dirt accumulation, illana heat sink paste dry aanaalum compressor trip aagum. Technician outdoor jet cleaning panni cooling efficiency normal-aa restore pannuvanga."
    },
    {
      quote: "Indoor unit front cover-la irunthu ice drops vizhudhu",
      text: "Daikin AC run aagum bodhu front grill mela ice katti, drop drops-aa room floor-la sottudhu nu customer inform pannuvanga. Dirty air filter airflow restrict pannaalum, illana R32 refrigerant slight drop aanaalum cooling coil freeze aagum. Ice defrost panni, filter wash panni pressure level-a technician check pannuvanga."
    },
    {
      quote: "Outdoor unit blower fan slow-ah suthudhu, heavy heat",
      text: "Outdoor unit compressor run aagudhu, aana fan speed romba slow-aa irundhu surrounding romba heat aagudhu nu customer solluvanga. Fan motor capacitor microfarad drop aanaalum, illana BLDC fan motor bearing tight aanaalum speed kuraiyum. Technician motor speed test panni, capacitor replace panni normal airflow bring pannuvanga."
    }
  ],

  samsung: [
    {
      quote: "Samsung WindFree mode-la cooling feel aagala",
      text: "Samsung WindFree AC micro-holes vazhiya cool air varala, room warm-aa irukku nu customers ask pannuvanga. WindFree panel tiny holes-la Karur dust full-aa adanju airflow block aagirukalaam. Front panel unclip panni micro-mesh foam wash and blower pressure clean panni uniform gentle cooling restore panna technician mudivangala."
    },
    {
      quote: "AC start pannina main switch MCB trip aagidudhu",
      text: "Remote-la power button press panni outdoor start aagum bodhu main MCB trip aagudhu nu customer contact pannuvanga. Compressor terminal short circuit, outdoor PCB surge damage, illana start capacitor fault idhuku main reason-aa irukalaam. Complete electrical wiring and earthing test panni safe-aa fault identify panni technician fix pannuvanga."
    },
    {
      quote: "Indoor unit right side-la water leak aagi switchboard nanayudhu",
      text: "Samsung split AC run aagum bodhu indoor unit corner-la irunthu water drip aagi wall nanayudhu nu urgent-aa call pannuvanga. Drain pan algae sludge, drain hose choke, illana mounting plate balance unlevel aagirukalaam. Drain line clear panni indoor level re-align panni technician water leakage problem-a solve pannuvanga."
    },
    {
      quote: "Display-la C1 54 illana E1 01 error code kaatudhu",
      text: "Samsung inverter AC start aana udane display panel-la C1 error blinking aagi compressor turn-on aagala nu solluvanga. Indoor room thermistor sensor illana outdoor ambient sensor resistance drift aagirukalaam. Technician digital multimeter vechu sensor ohms value test panni, genuine compatible sensor replace panni error clear pannuvanga."
    },
    {
      quote: "Samsung AC remote sensor signal receive panna matengudhu",
      text: "Remote-la new battery pottalum AC display respond aagala, beep sound varala nu customer complaint pannuvanga. Indoor display PCB-la IR receiver eye sensor burn aagirukalaam, illana board moisture-naala short aagirukalaam. Receiver sensor test panni display board check panni remote functions-a technician normal-aa operate panna vaipanga."
    },
    {
      quote: "Convertible 5-in-1 mode change panna room cool aagala",
      text: "Samsung 5-in-1 convertible mode 40% illana 60%-ku mathina cooling romba slow-aa aagidudhu nu customers solluvanga. Inverter compressor frequency scaling logic, outdoor heat dissipation, illana sensor reading-la mismatch irukalaam. Outdoor coil clean panni, board logic check panni optimum capacity run aaga technician test pannuvanga."
    }
  ],

  voltas: [
    {
      quote: "Voltas AC-la fan odudhu, aana cooling mattum konjam kooda illa",
      text: "Summer peak time-la Voltas split AC run aanaalum warm air blow aagudhu nu customers karur service desk-la ketpanga. Indha situation-la outdoor compressor run capacitor 45/50 mfd weak aagirukalaam, illana condenser dust adanjirukalaam. Local technician unit inspect panni, capacitor test panni actual fault explain panni fix pannuvanga."
    },
    {
      quote: "Maha Adjustable mode switch panna compressor cut-off aagudhu",
      text: "Voltas Maha Adjustable mode change pannum bodhu cooling increase aagala, compressor frequent-aa trip aagidudhu nu solluvanga. Low voltage supply, PCB relay communication delay, illana room sensor value shift idhuku common cause. Technician voltage drop and sensor resistance check panni proper stable cooling restore panni tharuvanga."
    },
    {
      quote: "Voltas indoor unit-la irunthu ceiling fan mela water therikidhu",
      text: "Indoor unit blower wheel rotate aagum bodhu water droplets room-la therikidhu nu customer complaint pannuvanga. Drain tray water overflow aagi blower fan water pick-up pannudhu. Drain hose block remove panni, cooling coil tray chemical wash panni leak complete-aa stop panna technician mudivangala."
    },
    {
      quote: "Outdoor unit heavy vibration and rattle sound pannudhu",
      text: "Voltas outdoor unit on aagum bodhu heavy rattling sound terrace wall-la ketkudhu nu inform pannuvanga. Wall mounting bracket bolt loose aanaalum, illana outdoor fan blade crack aanaalum excessive vibration varum. Technician bracket tight panni, anti-vibration rubber pads install panni smooth soundless working guarantee pannuvanga."
    },
    {
      quote: "Display-la E4 illana F1 error code flash aagudhu",
      text: "Voltas inverter AC start aagi few minutes-la display panel-la E4 error code blink aagi shut down aagudhu nu customer solluvanga. Indoor evaporator coil copper sensor value fail aanaalum idhu kaatum. Technician digital meter vechu sensor test panni, compatible fresh sensor replace panni problem solve pannuvanga."
    },
    {
      quote: "Voltas Window AC cooling drop aagi heavy sound kudukkuthu",
      text: "Old Voltas Window AC switch on pannina blower sound koodudhu, aana room cooling kuranjuduchu nu solluvanga. Window AC rear condenser fins mud-naala choke aagirukalaam, illana fan motor bearing oil dry aagirukalaam. Technician window unit dismantle panni full jet wash panni motor lubricate pannuvanga."
    }
  ],

  "o-general": [
    {
      quote: "O-General AC extreme heat-la cooling kurayudhu",
      text: "O-General heavy duty split AC Karur 40 degree heat-la afternoon cooling drop aagudhu nu customers call pannuvanga. Rooftop outdoor condenser unit-la heat accumulate aagi thermal overload switch trip aagirukalaam. Technician outdoor coil high pressure water wash panni, proper heat ventilation ensure panni chilling restore pannuvanga."
    },
    {
      quote: "Indoor blower switch on panna mild squeaking sound varudhu",
      text: "O-General AC run aagum bodhu indoor unit right side-la continuous squeaking noise ketkudhu nu complain varum. Cross flow blower wheel plastic bushing dry aanaalum, illana motor shaft bearing wear aanaalum noise varum. Technician blower dismantle panni, high grade silicon grease apply panni noise-a eliminate pannuvanga."
    },
    {
      quote: "AC display light blink aagi outdoor turn on aagala",
      text: "Remote press pannina operation lamp 5 times continuously blink aagi compressor kick-in aagala nu customer solluvanga. Outdoor unit communication fuse, compressor capacitor, illana inverter module power surge-naala protect mode poirukalaam. Technician control board and capacitor check panni exact repair estimate upfront-aa confirm pannuvanga."
    },
    {
      quote: "Indoor unit drain tray-la overflow aagi water sottudhu",
      text: "O-General split AC continuous running-la indoor bottom corner-la drops drip aagi carpet nanayudhu nu request varum. Heavy humidity time-la drain pan slime dust choke aagirukalaam. Technician vacuum suction drain pipe cleaning panni, tray slope verify panni water dripping problem-a permanent-aa stop pannuvanga."
    },
    {
      quote: "Remote temperature 18 vetchalum room chill aagala",
      text: "Remote-la 18 degree set panninaalum room normal fan breeze maadhiri dhaan irukku nu customer complaint pannuvanga. Outdoor condenser fan slow-aa run aanaalum, illana copper pipe flare joint minor gas leak aanaalum idhu nadakkum. Technician suction gauge test panni, leak brazing check panni cooling solve pannuvanga."
    },
    {
      quote: "Outdoor unit compressor cut-in aagum bodhu heavy thump sound",
      text: "O-General compressor start aagum bodhu heavy mechanical thump sound ketkudhu nu customer inform pannuvanga. Compressor internal spring unbalance illana outdoor bracket anchor bolt loose aagirukalaam. Technician outdoor bracket check panni, heavy rubber dampers fit panni compressor vibration sound-a normalise panni tharuvanga."
    }
  ],

  panasonic: [
    {
      quote: "Panasonic Miraie app connection and AC on aagala",
      text: "Panasonic smart AC WiFi indicator continuously blink aagudhu, app connect aagala, cooling cut aagudhu nu customers solluvanga. Indoor WiFi PCB module sync error, voltage spike, illana board sensor signal disconnect aagirukalaam. Technician control board inspect panni, module reset panni proper remote and app functioning restore pannuvanga."
    },
    {
      quote: "Nanoe-X air purification indicator red light blink aagudhu",
      text: "Panasonic AC-la nanoe-X air filter light red color-la flash aagi airflow dull aagidudhu nu complain varum. Nanoe generator pin-la dust accumulate aagirukalaam, illana air purification filter choked aagirukalaam. Technician nanoe module safely clean panni, air filters jet wash panni fresh pure airflow ensure pannuvanga."
    },
    {
      quote: "Twin Cool Inverter AC cooling intermittent-aa irukku",
      text: "Panasonic Twin Cool inverter AC 10 minutes chill air kudukkuthu, apram warm air blow aagudhu nu solluvanga. Outdoor inverter board heatsink thermistor over-temp trip aagalaam, illana outdoor condenser coil blocked aagirukalaam. Technician heatsink paste apply panni, condenser fins clean panni non-stop steady cooling restore pannuvanga."
    },
    {
      quote: "Indoor unit-la irunthu plastic smell and fan noise varudhu",
      text: "AC switch on panna mild burning smell and indoor fan unbalance sound varudhu nu customer inform pannuvanga. Blower motor bearing tight aagi motor overheat aanaalum, illana blower wheel leaf trap aanaalum idhu nadakkum. Technician motor winding test panni, blower clean panni smooth airflow deliver panna mudivangala."
    },
    {
      quote: "Display-la H16 illana F99 error code varudhu",
      text: "Panasonic inverter AC display panel-la H16 error kaati compressor stop aagidudhu nu customer contact pannuvanga. Outdoor compressor current transformer fault illana inverter power transistor fault idhuku common reason. Technician outdoor circuit board diagnosis panni, safe repair suggestion upfront price explain panni proceed pannuvanga."
    },
    {
      quote: "Continuous running-la cooling coil full-aa ice katti ninnudhu",
      text: "Indoor unit front grill remove panni paatha copper coil mela thick ice katti air throw block aagirukku nu solluvanga. Indoor filter dirt blockage illana R32 gas pressure slight-aa kuranjaalum idhu aagum. Technician ice melt panni, suction pressure measure panni exact cooling service execute pannuvanga."
    }
  ],

  hitachi: [
    {
      quote: "Hitachi Expandable Inverter AC cooling slow-ah feel aagudhu",
      text: "Hitachi Expandable Inverter AC remote-la full capacity set panninaalum room cooling slow-aa nadakudhu nu customer solluvanga. Outdoor ambient sensor reading mismatch illana outdoor condenser fins Karur dust-naala choke aagirukalaam. Technician outdoor coil deep jet cleaning panni, sensor ohms calibrate panni full capacity cooling bring pannuvanga."
    },
    {
      quote: "Hitachi i-Clean auto cleaning brush jam aagi sound varudhu",
      text: "Hitachi AC-la auto cleaning function on aagum bodhu clicking sound varudhu, filter clean aagala nu complaint varum. Auto clean motor gear slider-la dust particles stuck aagirukalaam. Technician front mechanism dismantle panni, cleaning slider lubricate panni, micro-mesh filter wash panni perfect smooth operation confirm pannuvanga."
    },
    {
      quote: "Outdoor unit switch-on aana 5 minutes-la trip aagudhu",
      text: "Hitachi outdoor compressor start aagi chilled air vara aarambikkum bodhe outdoor unit sudden-aa cut-off aagidudhu nu customer inform pannuvanga. Compressor run capacitor microfarad drop aagirukalaam, illana condenser fan motor weak aagirukalaam. Technician capacitor test panni, fresh replacement panni continuous uninterrupted cooling ensure pannuvanga."
    },
    {
      quote: "Display timer light continuously 3 times blink aagudhu",
      text: "Hitachi indoor unit timer light 3 times blink aagi compressor on aagave illa nu customers direct-aa ketpanga. Indoor thermistor sensor circuit open aanaalum, illana freeze thermistor failure aanaalum idhu nadakkum. Technician digital meter vechu sensor value test panni, compatible thermistor replace panni error clear pannuvanga."
    },
    {
      quote: "Indoor unit drain pipe leak aagi wall mela staining varudhu",
      text: "Hitachi split AC use pannum bodhu wall paint mela water dampness and dripping irukku nu urgent visit ketpanga. Drain pipe elbow joint loose aanaalum, illana algae slime block aanaalum leak aagum. Pressure drain wash panni, pipe joint tightly seal panni leakage technician stop pannuvanga."
    },
    {
      quote: "Tropical Rotary compressor heavy sound and heat kudukkuthu",
      text: "Hitachi outdoor unit surrounding area excessive heat aagi heavy metal vibration sound produce pannudhu nu solluvanga. Compressor mounting rubber grommets crack aagi bracket mela vibrate aagalaam. Technician rubber dampers change panni, fan blade alignment verify panni smooth whisper quiet cooling restore panni tharuvanga."
    }
  ],

  bajaj: [
    {
      quote: "Bajaj split AC-la blower fan mattum odudhu, cooling illa",
      text: "Bajaj split AC on pannina indoor blower normal-aa breeze kudukkuthu, aana cooling mattum konjam kooda illa nu customers ask pannuvanga. Outdoor condenser run capacitor weak aagirukalaam, illana compressor overload relay trip aagirukalaam. Local technician unit inspect panni, electrical components test panni cooling problem-a resolve pannuvanga."
    },
    {
      quote: "Indoor unit right corner-la irunthu continuous water drip",
      text: "Bajaj AC running-la floor-la water pool aagi bed side nananjudum nu customer complaint pannuvanga. Drain tray algae dust choke, illana drain hose gradient slope thappa irundhaalum leak aagum. Technician drain pan chemical wash panni, drain pipe flush panni water leakage complete-aa arrest pannuvanga."
    },
    {
      quote: "Bajaj AC remote sensor press pannina respond panna matengudhu",
      text: "Remote key press panna display panel beep sound kudukkala, temperature change aagala nu customer call pannuvanga. Indoor display PCB infrared receiver sensor damage aagirukalaam, illana display connector wire loose aagirukalaam. Technician receiver sensor test panni, board dry clean panni smooth remote functioning restore pannuvanga."
    },
    {
      quote: "Afternoon peak heat-la AC cooling sudden-aa shut down aagudhu",
      text: "Night super cooling tharudhu, aana afternoon 2 PM-ku outdoor fan stop aagi warm air blow aagudhu nu solluvanga. Outdoor unit condenser fins heavy dust accumulation-naala heat release aaga mudiyama compressor trip aagum. Technician outdoor deep jet wash service panni cooling efficiency-a normalise pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing noise produce pannudhu",
      text: "Bajaj AC on panna terrace wall-la buzzing and rattling sound ketkudhu nu inform pannuvanga. Outdoor fan motor balance weight shift aanaalum, illana bracket anchor bolts loose aanaalum vibration varum. Technician mechanical bolts tighten panni, fan blade alignment check panni soundless performance deliver pannuvanga."
    },
    {
      quote: "Cooling coil front grill-la white ice form aagi air flow block",
      text: "AC front grill open panna copper coil full-aa ice katti air throw full-aa ninnuduchu nu customer solluvanga. Air filter dust-naala air intake block aanaalum, illana minor refrigerant drop aanaalum ice form aagum. Technician ice defrost panni, gas pressure test panni problem fix pannuvanga."
    }
  ],

  midea: [
    {
      quote: "Midea Inverter AC Eco mode-la room cool aagave illa",
      text: "Midea AC Eco mode switch pannina cooling totally drop aagi room heat aagudhu nu customers call pannuvanga. Inverter board compressor frequency control failure, indoor sensor calibration drift, illana outdoor dirt blockage reason-aa irukalaam. Technician circuit readings test panni, outdoor fins wash panni optimum cooling restore panna mudivangala."
    },
    {
      quote: "Indoor swing louver flap stuck aagi rattling sound varudhu",
      text: "Midea split AC switch on panna swing flap open aagala, continuous clicking noise mattum varudhu nu solluvanga. Step motor plastic gear teeth wear aanaalum, illana swing linkage rod dislocate aanaalum flap move aagadhu. Technician step motor test panni, genuine flap motor replace panni airflow restore pannuvanga."
    },
    {
      quote: "Display-la EC illana E3 error code blink aagi AC off aagudhu",
      text: "Midea inverter AC start panni 10 minutes-la EC error code display panni compressor turn off aagidudhu nu solluvanga. Refrigerant pressure loss, pipe temperature sensor fail, illana communication error idhuku common reason. Technician manifold gauge vechu suction pressure test panni, sensor test panni solution suggest pannuvanga."
    },
    {
      quote: "Golden Fin outdoor condenser-la heavy dust adanju cooling dull",
      text: "Midea Golden Fin AC summer-la cooling efficiency romba kuranjuduchu, room cool aaga 2 hours edukkudhu nu customer solluvanga. Outdoor fin gaps-la micro dust adanju heat exchange block aagirukalaam. Technician pressurized jet pump wash panni fins deep clean panni instant rapid cooling thirumba tharuvanga."
    },
    {
      quote: "Water indoor unit rear side-la leak aagi wall paint peel aagudhu",
      text: "Indoor unit pinadi irunthu wall vazhiya water drop drip aagi dampness aagudhu nu customer inform pannuvanga. Drain back trough choke aagirukalaam, illana copper pipe condensation insulation torn aagirukalaam. Technician insulation re-wrap panni, back trough clear panni wall leakage-a permanent-aa stop pannuvanga."
    },
    {
      quote: "Outdoor fan motor slow-aa suthudhu, heavy heat discharge",
      text: "Outdoor compressor on aagudhu, aana condenser fan slow-aa suthura nala outdoor excessively heat aagudhu nu complain varum. Outdoor fan motor run capacitor value drop aanaalum, illana motor winding resistance drop aanaalum speed kuraiyum. Capacitor test panni replace panni technician fan speed normalise pannuvanga."
    }
  ],

  onida: [
    {
      quote: "Onida Inverter AC on panna cooling start aagave illa",
      text: "Onida split AC remote-la on pannina indoor display light eriyudhu, aana 15 minutes aanaalum cool breeze varala nu solluvanga. Outdoor compressor start relay, run capacitor, illana inverter module power gate failure idhuku reason-aa irukalaam. Technician electrical circuit inspect panni, clear diagnosis panni quick repair execute pannuvanga."
    },
    {
      quote: "Display-la E3 error code blink aagi indoor blower stop aagudhu",
      text: "Onida AC run aagitu irukum bodhe display panel-la E3 error code kaati blower fan shut down aagidudhu nu customer solluvanga. Indoor room sensor illana coil copper thermistor impedance shift aagirukalaam. Technician multimeter vechu thermistor ohms test panni, correct replacement panni error clear pannuvanga."
    },
    {
      quote: "Indoor unit bottom drain line-la algae block aagi water overflow",
      text: "Onida AC switch on panna 20 minutes-la indoor unit bottom edge-la water overflow aagudhu nu customer contact pannuvanga. Drain pan-la algae sludge and dust mud accumulate aagi pipe choke aagirukalaam. Technician pressure water wash panni drain line clear panni slope perfectly align pannuvanga."
    },
    {
      quote: "Outdoor unit heavy vibration and buzzing noise produce pannudhu",
      text: "Onida outdoor unit terrace-la heavy vibration and humming sound kudukkuthu nu complain varum. Wall mounting bracket loose aanaalum, illana compressor bottom rubber pads wear out aanaalum sound koodum. Technician mounting bolts tighten panni, heavy rubber bushes fit panni silent operation ensure pannuvanga."
    },
    {
      quote: "Afternoon heat-la Onida AC compressor trip aagi fan mattum odudhu",
      text: "Karur afternoon peak sun time-la compressor continuous-aa run aagama 5 minutes-ku oru thadava cut-off aagudhu nu customer ketpanga. Condenser coil dust clogging-naala high discharge pressure create aagi thermal trip aagum. Technician chemical coil wash panni cooling capacity stable-aa maintain panna vaipanga."
    },
    {
      quote: "Remote-la temperature set panna respond panna matengudhu",
      text: "Remote control-la mode mathinaalum temperature change panninaalum indoor beep sound vara matengudhu nu solluvanga. Display PCB-la IR sensor receiver eye solder dry joint illana sensor weak aagirukalaam. Technician display board check panni, receiver eye resolder illana replace panni remote response restore pannuvanga."
    }
  ]
};

console.log("Validating expanded brand problems 1 to 10...");
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
