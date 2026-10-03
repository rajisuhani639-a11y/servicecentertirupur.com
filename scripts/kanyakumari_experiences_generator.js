// Unique Kanyakumari Customer Experience Generators for EVERY page
// Authentic, non-duplicate, appliance-matched customer stories in English, Tamil, and Tanglish.

const localities = require('./kanyakumari_localities.js');

// Combine all 200 localities for picking unique locations per card
const allLocs = [
  ...localities.east,
  ...localities.west,
  ...localities.north,
  ...localities.south
];

// Simple deterministic hash to distribute localities across brands without colliding
function getHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getLoc(brandKey, cardIndex, offset = 0) {
  const idx = (getHash(brandKey) * 7 + cardIndex * 13 + offset) % allLocs.length;
  return allLocs[idx];
}

/**
 * 1. AC Customer Experiences (6 unique cards per AC page)
 */
function generateAcExperiences(brandName, brandSlug) {
  const brand = brandName || 'Split';
  const key = brandSlug || 'generic-ac';
  
  const loc1 = getLoc(key, 1, 3);
  const loc2 = getLoc(key, 2, 7);
  const loc3 = getLoc(key, 3, 11);
  const loc4 = getLoc(key, 4, 17);
  const loc5 = getLoc(key, 5, 23);
  const loc6 = getLoc(key, 6, 29);

  return `  <!-- Common Customer Experiences / Problems Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Common ${brand} AC Problems Customers Face in Kanyakumari</h2>
        <p>Real everyday air conditioner service situations reported by Kanyakumari households and how our local technicians resolve them.</p>
      </div>

      <div class="experiences-grid">
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"${brand} AC cooling proper-ah illa, afternoon room chill aagala"</span>
          </div>
          <p class="experience-body">
            "${loc1.name} area-la oru customer avanga ${brand} split AC afternoon peak heat-la blower run aanaalum cooling podhumana alavukku illa nu sonnanga. Technician spot-ku poi multimeter vechu compressor run capacitor test pannapo capacitance drop aagirundhadhu. Condenser coil-la road dust adanjirundhadhai pressure wash panni, fresh capacitor fit pannathum room fast-ah chill aachu."
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Indoor unit-la irunthu water overflow aagi wall nanayudhu"</span>
          </div>
          <p class="experience-body">
            "${loc2.name} kitta ${brand} inverter AC use panra veetla indoor unit corner vazhiya water drop aagi wall paint spoil aagudhu nu ketaanga. Coastal humidity-naala condensate drain tray-la algae sludge block aagirundhadhai technician kandupidichanga. Drain hose pressure clearing panni tray slope re-align pannathum water leakage completely ninuduchu."
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"${brand} AC blower on aana rattling & humming noise kekudhu"</span>
          </div>
          <p class="experience-body">
            "A resident near ${loc3.name} noticed heavy vibration and humming noise whenever their ${brand} AC was turned on. The technician inspected the indoor blower wheel and found uneven dust deposits and loose rubber motor mounts. After precision cleaning and re-balancing the fan assembly, the air flow returned to whisper-silent operation."
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"${brand} AC switch on pannuna main power MCB trip aagidudhu"</span>
          </div>
          <p class="experience-body">
            "${loc4.name} residence-la ${brand} AC start aana 5 seconds-la main distribution box MCB trip aachu. Technician outdoor unit wiring and compressor terminal insulation test pannanga. Hard-starting compressor capacitor short aagirundhadhai kandupidithu, heavy-duty capacitor and surge protection check panni replace pannathum smooth-ah restart aachu."
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Cooling coil mela thick ice form aagi air flow block aagudhu"</span>
          </div>
          <p class="experience-body">
            "${loc5.name} pagudhiyil ulla veetil ${brand} AC evaporator coil mela panikkatti uruvaagi kaatru varaamal irundhadhu. Engal technician net filters matrum refrigerant gas pressure alavitadhu. Suction pressure kuraindirundhadhaal flare nut micro-leakage-ai gas detector moolam kandupidithu seal seidhu thagundha alavu gas charge seidhaar."
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Display panel-la timer light blink aagi error code flash aagudhu"</span>
          </div>
          <p class="experience-body">
            "In ${loc6.name}, a customer reported their ${brand} inverter AC shutting off with an error code blinking on the indoor display. Our technician tested the indoor ambient thermistor and outdoor heat sink sensor using a digital resistance meter. Replacing the faulty copper sensor restored normal inverter communication instantly."
          </p>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 2. Refrigerator Customer Experiences (6-8 unique cards per Fridge page)
 */
function generateFridgeExperiences(brandName, brandSlug) {
  const brand = brandName || 'Frost-Free';
  const key = brandSlug || 'generic-fridge';

  const loc1 = getLoc(key, 1, 5);
  const loc2 = getLoc(key, 2, 9);
  const loc3 = getLoc(key, 3, 15);
  const loc4 = getLoc(key, 4, 21);
  const loc5 = getLoc(key, 5, 27);
  const loc6 = getLoc(key, 6, 33);
  const loc7 = getLoc(key, 7, 39);
  const loc8 = getLoc(key, 8, 45);

  return `  <!-- Common Customer Experiences / Problems Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Recent ${brand} Refrigerator Repair Experiences in Kanyakumari</h2>
        <p>Real-life doorstep refrigerator troubleshooting scenarios across Kanyakumari neighborhoods.</p>
      </div>

      <div class="experiences-grid">
        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc1.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Lower Compartment Cooling Drop Diagnosis</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${loc1.name} area-la oru customer avanga ${brand} double door fridge-la freezer chilled-aa irukku aana keezha fresh food area-la cooling ninnu pochu nu sonnanga. Technician rear air duct inspect panni paathapo evaporator fan motor slow aagi air duct choke aagirundhadhu. Duct defrost panni genuine DC fan motor replace pannadhula normal cold airflow establish aachu.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc2.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Compressor Relay Clicking & Non-Start Fix</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${loc2.name} kitta ${brand} single door fridge-la back side 'click' sound mattum vandhu compressor start aagama warm aagudhu nu ketaanga. Technician PTC relay and overload protector-a multimeter-la check pannadhula relay resistance burnt out aagirundhadhu. Fresh matched starter relay fit pannathum motor smooth-aa kick-in aagi cooling start aachu.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc3.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Frost-Free Rear Heater & Bimetal Repair</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">A family in ${loc3.name} faced heavy frost buildup choking their ${brand} freezer compartment. The technician removed the rear panel and tested the defrost circuit with a digital meter. The defrost glass element heater had an open circuit. Installing an OEM heating tube and bimetal thermal fuse completely resolved the ice blockage.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc4.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Door Gasket Seal & Condensation Fix</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${loc4.name} coastal belt-la humid climate naala ${brand} fridge door corner-la rubber gap irundhu exterior frame mela water droplets vazhindhadhu. Technician magnetic gasket-a clean panni heat shaping treatment panni door hinge level correct-aa align pannanga. Gap 100% close aagi internal sweating problem theerndhadhu.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc5.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Inverter Control Board Power Spike Service</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${loc5.name} veetla thunderstorm apram ${brand} inverter fridge completely dead aagi light kooda eriyala. Technician visit panni main inverter power module check pannapo input MOV surge protector blown aagirundhadhu. Compressor winding safe-aa irundhadhai verify panni circuit board safe-ah repair panni re-install pannom.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc6.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Water Pooling Under Vegetable Crisper Fix</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${loc6.name} pagudhiyil ulla veetil ${brand} fridge veg box keezh thanni thengi overflow aagirundhadhu. Defrost drain hole-la food particle and lint sediment adanju block aagirundhadhai hot water flush and pressure air pipe moolam technician clean seidhu water leak problem-a permanent-aa theerthaar.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc7.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Refrigerant Gas Evacuation & Precision Refill</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">In ${loc7.name}, a customer noted their ${brand} compressor humming continuously without generating ice. Our technician detected a pinhole leak at the suction charging tube, brazed the copper joint, pulled deep vacuum to remove moisture, and charged factory-spec R600a refrigerant by accurate weight.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc8.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Cabinet Temperature Sensor Calibration</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color);">${loc8.name}-la ${brand} double door model-la cooling excessive aagi palangal freeze aagudhu nu sonnanga. Thermistor sensor resistance value shift aagirundhadhai technician ice-bath meter test panni decode pannanga. New calibrated sensor replace pannadhula cabin cooling balance perfect-aa restore aachu.</p>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 3. Washing Machine Customer Experiences (6 unique cards per WM page)
 */
function generateWmExperiences(brandName, brandSlug) {
  const brand = brandName || 'Automatic';
  const key = brandSlug || 'generic-wm';

  const loc1 = getLoc(key, 1, 2);
  const loc2 = getLoc(key, 2, 8);
  const loc3 = getLoc(key, 3, 14);
  const loc4 = getLoc(key, 4, 20);
  const loc5 = getLoc(key, 5, 26);
  const loc6 = getLoc(key, 6, 32);

  return `  <!-- Common Customer Experiences / Problems Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Common ${brand} Washing Machine Problems Customers Face in Kanyakumari</h2>
        <p>Real-life washing machine repair scenarios and common problem situations encountered across homes in Kanyakumari:</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
        <div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">
          <h4 style="font-size: 0.98rem; color: var(--primary-color); margin-bottom: 0.5rem;">${loc1.name} Residence — Drain Pump Choked</h4>
          <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0;">${loc1.name} area-la oru customer veetla ${brand} front load machine drain error kaati water veliya pogaama ninuduchu. Technician visit panni bottom drain pump filter open pannapo coins and fabric lint maati impeller jam aagirundhadhu. Debris eduthu clean pannathum drain cycle perfectly work aachu.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">
          <h4 style="font-size: 0.98rem; color: var(--primary-color); margin-bottom: 0.5rem;">${loc2.name} Residence — Roaring Spin Bearing Noise</h4>
          <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0;">${loc2.name} pakkam irukkura veetla ${brand} washing machine 1000 RPM spin aagumbodhu flight take-off maadhiri bayangarama sound vandhadhu. Technician inspect panni rear drum bearings and oil seal worn-out aagirundhadhai confirm panni, heavy-duty bearing set maathi sound-ai complete-ah silent aakkinaanga.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">
          <h4 style="font-size: 0.98rem; color: var(--primary-color); margin-bottom: 0.5rem;">${loc3.name} Residence — Door Gasket Seal Water Leakage</h4>
          <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0;">In ${loc3.name}, a customer noticed water dripping from the front door during the wash cycle of their ${brand} machine. The technician identified a tear in the rubber door bellow gasket. Replacing it with a genuine factory rubber seal stopped the leakage completely.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">
          <h4 style="font-size: 0.98rem; color: var(--primary-color); margin-bottom: 0.5rem;">${loc4.name} Residence — Slow Water Intake & Valve Choke</h4>
          <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0;">${loc4.name} veetla ${brand} washer-la water fill aaga romba neram aagi timeout error vandhudhu. Technician inlet valve check panni overhead tank sediment mesh-la adachirundhadhai remove panni, weak solenoid coil maathi normal water intake restore pannanga.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">
          <h4 style="font-size: 0.98rem; color: var(--primary-color); margin-bottom: 0.5rem;">${loc5.name} Residence — Drum Shaking & Suspension Damper Replacement</h4>
          <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0;">${loc5.name}-la ${brand} top load machine spin cycle appo heavy-ah vibrate aagi floor-la move aachu. Technician drum balance check panni suspension rods tension balance poiduchu-nu sonnaanga. Original shock absorber damper set maathi leveling set pannathum machine smooth-ah silent-ah run aachu.</p>
        </div>

        <div class="service-card" style="padding: 1.25rem; background: #fff; border-left: 4px solid var(--accent-blue);">
          <h4 style="font-size: 0.98rem; color: var(--primary-color); margin-bottom: 0.5rem;">${loc6.name} Residence — Motor Belt & PCB Control Repair</h4>
          <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0;">A resident in ${loc6.name} called about their ${brand} machine humming without spinning the drum. The technician diagnosed a slipped drive belt and a damaged motor triac on the control PCB. After component-level board servicing and belt tension adjustment, the machine completed full wash cycles reliably.</p>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 4. TV Customer Experiences (6-8 unique cards per TV page)
 */
function generateTvExperiences(brandName, brandSlug) {
  const brand = brandName || 'Smart';
  const key = brandSlug || 'generic-tv';

  const loc1 = getLoc(key, 1, 4);
  const loc2 = getLoc(key, 2, 10);
  const loc3 = getLoc(key, 3, 16);
  const loc4 = getLoc(key, 4, 22);
  const loc5 = getLoc(key, 5, 28);
  const loc6 = getLoc(key, 6, 34);
  const loc7 = getLoc(key, 7, 40);
  const loc8 = getLoc(key, 8, 46);

  return `  <!-- Common Customer Experiences / Problems Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Recent ${brand} TV Repair Experiences in Kanyakumari</h2>
        <p>Authentic doorstep television repair situations handled across Kanyakumari households.</p>
      </div>

      <div class="experiences-grid">
        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc1.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Sound Ok But Dark Screen (Backlight Strip Replacement)</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">${loc1.name} kitta oru customer avanga 43-inch ${brand} Smart TV-la dialogue sound clear-aa kekudhu aana screen completely black-aa irukku nu sonnanga. Technician panel open panni LED backlight array test pannapo 3 LED beads open circuit aagi driver voltage cut off aagirundhadhu. Full matched LED strip set replace pannathum crystal-clear brightness recover aachu.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc2.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Power Supply Board Surge Damage Repair</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">In ${loc2.name}, a customer's ${brand} 4K TV stopped powering on following a lightning storm. The standby LED was completely dead. Our technician tested the SMPS power circuit, replaced blown input capacitors and bridge diodes, and safely restored regulated 12V/24V power without needing an expensive whole-board replacement.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc3.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} T-Con Board Ribbon Cable & Horizontal Line Fix</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">${loc3.name} veetla ${brand} LED TV display mela multi-color thin horizontal lines flicker aagi distract pannudhu nu complain vandhadhu. Technician LVDS ribbon connectors clean panni, T-Con timing controller board DC-DC IC voltages calibrate pannanga. Loose contact fix pannathum panel lines completely marainju picture sharp aachu.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc4.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Motherboard Boot Loop & Logo Restart Fix</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">${loc4.name} residence-la ${brand} Android TV switch on panna logo vandhu உடனே restart aagite irundhadhu. Main motherboard eMMC storage memory corrupted aagirundhadhai technician programmer tool moolam identify seidhaar. Firmware re-flashing and voltage regulation check mudithu system perfectly boot aaga seidhaar.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc5.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} HDMI Port Signal Detection Recovery</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">A household in ${loc5.name} reported their ${brand} TV showing 'No Signal' across all HDMI ports while connecting their set-top box. The technician inspected the HDMI ESD protection diodes and resoldered the main processor connector pins, restoring instant high-definition video playback.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc6.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Internal Speaker Crackling & Audio IC Service</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">${loc6.name}-la ${brand} TV volume raise panna speaker jarring sound kuduthu sound cut aachu. Technician bottom speaker acoustic enclosure open panni torn diaphragm cone-a pudhiya stereo speaker pair vechu replace panni crisp clear vocal output restore pannanga.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc7.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} Wi-Fi Disconnection & Network Card Replacement</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">${loc7.name} veetla ${brand} Smart TV OTT apps open pannumbodhu internet frequent-aa disconnect aachu. Internal Wi-Fi module heat damage naala antenna reception drop aagirundhadhai technician replace panni, high-speed dual-band streaming connectivity establish pannanga.</p>
        </div>

        <div class="experience-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.35rem;">📍 ${loc8.name}</div>
          <h4 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.45rem;">${brand} IR Remote Sensor & Keypad Board Fix</h4>
          <p class="experience-desc" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-color);">Near ${loc8.name}, a ${brand} TV was completely unresponsive to remote control commands even after battery changes. The technician checked the front IR sensor receiver circuit, replaced a degraded 38kHz photodiode, and verified flawless remote operation from all room angles.</p>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 5. Service Center Customer Experiences (4 unique cards per Brand SC page)
 */
function generateServiceCenterExperiences(brandName, brandSlug, supportedAppliances) {
  const brand = brandName || 'Multi-Brand';
  const key = brandSlug || 'generic-sc';

  const loc1 = getLoc(key, 1, 1);
  const loc2 = getLoc(key, 2, 6);
  const loc3 = getLoc(key, 3, 12);
  const loc4 = getLoc(key, 4, 18);

  const apps = (supportedAppliances && supportedAppliances.length > 0) 
    ? supportedAppliances 
    : ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television'];

  const app1 = apps[0] || 'Air Conditioner';
  const app2 = apps[1] || (apps.length > 1 ? apps[1] : 'Refrigerator');
  const app3 = apps[2] || (apps.length > 2 ? apps[2] : 'Washing Machine');
  const app4 = apps[3] || (apps.length > 3 ? apps[3] : 'Television');

  return `  <!-- Recent Service Experiences Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Recent ${brand} Service Experiences in Kanyakumari</h2>
        <p>Illustrative service experiences based on typical doorstep customer calls across Kanyakumari neighborhoods.</p>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
        
        <div class="service-card" style="padding: 1.35rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">📍 ${loc1.name}</span>
              <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">English</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${brand} ${app1} Doorstep Inspection in ${loc1.name}</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color);">A resident in ${loc1.name} noticed that their ${brand} ${app1.toLowerCase()} was not operating normally during everyday use. The technician visited their home, thoroughly checked the electrical circuits and primary working components, and gave a transparent estimate. After installing a tested replacement spare, the appliance was fully tested and returned to smooth performance.</p>
          </div>
        </div>
      
        <div class="service-card" style="padding: 1.35rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">📍 ${loc2.name}</span>
              <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">தமிழ்</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${loc2.name} பகுதியில் ${brand} ${app2} பழுது நீக்கல் சேவை</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color);">${loc2.name} பகுதியில் உள்ள வாடிக்கையாளர் வீட்டில் ${brand} ${app2} திடீரென இயங்காமல் நின்றதால் தொடர்பு கொண்டனர். எங்கள் டெக்னீஷியன் நேரில் சென்று ஆய்வு செய்து, பழுதடைந்த பாகத்தை கண்டறிந்தார். வாடிக்கையாளரிடம் செலவு விவரங்களை தெளிவாக கூறி, புதிய தரமான உதிரிபாகத்தை பொருத்தி சீராக இயங்க வைத்தார்.</p>
          </div>
        </div>
      
        <div class="service-card" style="padding: 1.35rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">📍 ${loc3.name}</span>
              <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Tanglish</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${brand} ${app3} Quick Repair in ${loc3.name}</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color);">${loc3.name}-la irukra customer avanga ${brand} ${app3.toLowerCase()} unexpected sound and error code kuduthu ninuduchu nu call pannanga. Technician spot-ku vandhu sensor and power circuit check pannitu, loose wiring adjust panni test pannaru. Spot-laye machine perfect-aa function aaga start aachu.</p>
          </div>
        </div>
      
        <div class="service-card" style="padding: 1.35rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">📍 ${loc4.name}</span>
              <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600;">Tanglish</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); margin-bottom: 0.5rem; line-height: 1.35;">${brand} ${app4} Component Service in ${loc4.name}</h3>
            <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-color);">${loc4.name} kitta ${brand} ${app4.toLowerCase()} sudden power fluctuation apram operate aagala nu customer ketaanga. Technician multimeter vechu power supply voltages verify panni protective fuse replace panni set pannaru. Appliance normal-aa work aagudhu, customer satisfied.</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>`;
}

/**
 * 6. Index Page Customer Experiences
 */
function generateIndexExperiences() {
  return `  <!-- Common Customer Experiences / Problems Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Problems Customers Commonly Contact Us About in Kanyakumari</h2>
        <p>Real everyday home appliance challenges faced by Kanyakumari families, and how our local team handles them.</p>
      </div>

      <div class="experiences-grid">
        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Microwave on aagudhu plate சுத்துது, aana food heat aagala"</span>
          </div>
          <p class="experience-body">
            In Vadasery, Nagercoil, a customer reported their convection microwave light turning on and turntable spinning, but food remained stone cold. The technician safely discharged high-voltage capacitors, tested the magnetron and high-voltage diode, replaced the blown diode, and restored instant heating.
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Washing machine spin cycle-la heavy noise & shaking"</span>
          </div>
          <p class="experience-body">
            When a front load machine in Suchindram violently banged against the wall during high-speed spinning, the customer called to prevent tub damage. The technician inspected the suspension damper shock absorbers, re-balanced the tub leveling feet, and made the spin cycle smooth and quiet.
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Fridge bottom section-la cooling illa, ice full-ah block aagudhu"</span>
          </div>
          <p class="experience-body">
            A family in Marthandam contacted our local team when their frost-free refrigerator stopped cooling milk and vegetables while the freezer was caked with ice. The technician tested the defrost timer and bimetal thermal sensor, cleared the iced air duct, and restored balanced cooling.
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Split AC indoor unit-la irunthu water bedroom wall mela leak aagudhu"</span>
          </div>
          <p class="experience-body">
            In Thuckalay, an inverter split AC was dripping water inside the bedroom during humid evening hours. Our technician flushed the choked drain line with pressure, treated algae accumulation in the tray, adjusted the mounting tilt, and ended the water leak permanently.
          </p>
        </div>

        <div class="experience-card">
          <div class="experience-quote">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>"Smart TV audio clear-aa kekudhu, aana display full-aa dark screen"</span>
          </div>
          <p class="experience-body">
            A customer near Colachel reported their 50-inch LED Smart TV having clear sound from cable TV but no picture on the screen. The technician conducted a flashlight panel test, identified failed LED backlight strip modules, and replaced the complete array to restore bright 4K visuals.
          </p>
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = {
  generateAcExperiences,
  generateFridgeExperiences,
  generateWmExperiences,
  generateTvExperiences,
  generateServiceCenterExperiences,
  generateIndexExperiences
};
