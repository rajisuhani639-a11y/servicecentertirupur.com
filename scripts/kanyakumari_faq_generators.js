// Kanyakumari Appliance & Service Center FAQ Section Generators
// Features appliance-specific FAQs, parts, and approximate cost ranges with disclaimers.

/**
 * 1. AC FAQs (For all AC pages)
 */
function generateAcFaqs(brandName) {
  const brand = brandName || 'Air Conditioner';
  return `  <!-- AC FAQs Section -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — ${brand} AC Repair in Kanyakumari</h2>
        <p>Clear, direct answers about air conditioner checking, servicing, spare parts, and approximate costs in Kanyakumari.</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of an AC capacitor replacement in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹500–₹1,200 for a dual run or fan motor capacitor (35µF to 55µF), depending on the AC tonnage, brand model, and technician inspection at your doorstep.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of an AC compressor replacement?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹4,000–₹10,000+ depending on whether it is a non-inverter rotary compressor or an inverter scroll/twin-rotary compressor, refrigerant type (R32/R410A), and capacity (1 Ton to 2 Ton). Final pricing is quoted after physical inspection.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of an AC indoor or outdoor fan motor?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹1,500–₹3,000+ depending on whether it is an AC blower motor or outdoor fan motor, compatible specifications, and technician verification.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of an inverter AC PCB board repair or replacement?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹2,000–₹6,000+ for inverter controller PCB circuit repair or replacement, depending on whether it is an indoor display PCB or outdoor power IPM module.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does AC gas leak checking and refilling cost in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹1,800–₹3,200 depending on refrigerant type (R32, R410A, or R22), nitrogen pressure leak testing, copper tube brazing, and AC tonnage. The technician measures pressure with gauges before confirming the estimate.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is water leaking from my ${brand} Split AC indoor unit into the bedroom?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            In Kanyakumari's humid coastal climate, high condensation creates algae sludge inside the drain pan and narrow drain hose. If the drain pipe is choked or the unit is slightly unlevel, water overflows. Our technician clears the drain line using pressure cleaning and re-aligns the unit slope.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Does low cooling always mean the AC is low on refrigerant gas?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            No! In most homes across Kanyakumari, poor cooling is caused by thick dust choking the indoor mesh filters, road dust caked on outdoor condenser coils, or a weakened run capacitor. Refrigerant is never consumed during normal operation; it only drops if there is an actual physical leak.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is included in AC deep jet cleaning service?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Deep jet service includes high-pressure water washing of the indoor evaporator coil fins with a protective wash bag jacket, cleaning the cross-flow blower wheel, flushing the drain tray, jet washing the outdoor condenser unit, and checking electrical connections.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is ice forming on my ${brand} AC indoor cooling coil?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Ice forms when airflow over the cooling coil drops drastically due to dirty filters or a slow blower fan, or when refrigerant gas pressure drops below normal operating range. The technician safely thaws the ice, washes the filters, and measures operating suction pressure.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How does coastal salt air in Kanyakumari affect air conditioners?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Localities near the coastline like Colachel, Muttom, Kovalam, and Kanyakumari Town experience salt air that accelerates corrosion on condenser coils and copper tubing. Regular water jet servicing and anti-corrosion blue/gold fin checks help extend the lifespan of the outdoor unit.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How quickly can a technician visit my home in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Technicians generally visit on the same day or within a few hours across all East, West, North, and South Kanyakumari localities based on route availability.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Are replacement spare parts covered under warranty?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes, tested replacement spare parts such as capacitors, fan motors, sensors, and repaired PCB boards carry standard service warranty periods confirmed by the visiting technician.
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 2. Refrigerator FAQs (For all Fridge pages)
 */
function generateFridgeFaqs(brandName) {
  const brand = brandName || 'Refrigerator';
  return `  <!-- Refrigerator FAQs Section -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — ${brand} Fridge Repair in Kanyakumari</h2>
        <p>Expert answers about refrigerator problems, doorstep checking, cooling faults, spare parts, and approximate costs in Kanyakumari.</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a refrigerator compressor replacement in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹2,500–₹3,000+ for single-door models, and ₹3,500–₹6,500+ for double-door or inverter compressors, depending on capacity, refrigerant type (R600a/R134a), and technician inspection.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a refrigerator thermostat or temperature sensor?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹500–₹1,200 depending on whether it is a mechanical bellows thermostat or an electronic digital thermistor sensor matching your specific model.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a refrigerator fan motor?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹700–₹1,500 for an internal evaporator airflow fan motor or condenser cooling motor, depending on voltage (AC vs DC motor) and model requirements.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a refrigerator door gasket replacement?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹500–₹1,200 for a magnetic door rubber gasket, depending on single door or double door dimensions and mounting type.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a compressor starter relay and overload protector (OLP)?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹300–₹700 for a compatible PTC starter relay and thermal overload switch, which is one of the most common reasons for a compressor humming or clicking.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is my frost-free refrigerator freezing ice in the top freezer but warm in the bottom compartment?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            This issue occurs when the internal air passage between freezer and fresh food section is choked with ice. Common causes include a failed defrost glass heating element, a broken bimetal thermostat, or a blocked air damper. Our technician tests the defrost cycle and restores clear cold airflow.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is water pooling under the vegetable crisper box?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            During the auto-defrost cycle, melted water flows through a small drain hole behind the evaporator into a rear evaporation pan. When dust, food debris, or ice crystals block this drain hole, water overflows into the bottom shelf. The technician cleans and flushes the drain channel.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Can an inverter refrigerator control board be repaired?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes, in many cases voltage surge damage, blown bridge rectifiers, or failed capacitors on the inverter PCB module can be repaired at component level for around ₹1,200–₹2,500, avoiding the high cost of a brand new board.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much does refrigerator gas recharging cost in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹1,200–₹2,200 including copper brazing of the charging pin valve, nitrogen vacuum leak testing, and charging eco-friendly R600a or R134a refrigerant by accurate weight.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Do technicians carry spare parts during doorstep visits in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes, our local technicians carry common fast-moving components like relays, overload protectors, thermostats, bimetal sensors, fan motors, and capacitors to enable same-day repairs across Kanyakumari homes.
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 3. Washing Machine FAQs (For all WM pages)
 */
function generateWmFaqs(brandName) {
  const brand = brandName || 'Washing Machine';
  return `  <!-- Washing Machine FAQs Section -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — ${brand} Washing Machine Repair in Kanyakumari</h2>
        <p>Reliable answers about washing machine drain issues, spin errors, spare parts, and approximate repair costs in Kanyakumari.</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a washing machine drain pump replacement in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹700–₹1,500 depending on front load vs top load model, magnetic pump specifications, and technician inspection at your doorstep.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a water inlet valve?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹500–₹1,000 for single, dual, or triple solenoid inlet valves that control fresh water inflow during wash and rinse stages.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a front load door lock switch (interlock)?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹600–₹1,500 depending on thermal bimetal or solenoid-actuated door interlock mechanisms matching your front load washer model.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a washing machine drive belt replacement?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹400–₹900 for heavy-duty ribbed poly-V motor drive belts that transfer torque from the motor to the drum pulley.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a washing machine control PCB board repair or replacement?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹2,000–₹5,000+ depending on whether the issue requires component-level repair (replacing blown triacs, relays, or power transformers) or a full control motherboard replacement.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is my washing machine shaking violently and making loud banging noise during the spin cycle?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Severe shaking and banging usually occurs when the hydraulic suspension shock absorber struts (in front loaders) or 4-corner suspension rods (in top loaders) lose damping tension. It can also happen if the machine leveling feet are uneven on tiled flooring. Replacing worn damper sets restores stable, quiet spinning.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why does my front load machine show a drain error code and stop with water inside?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Drain errors (like E18, OE, 5E, or F02) almost always indicate that small foreign objects such as coins, safety pins, hair bands, or heavy fabric lint have jammed the drain pump impeller or clogged the coin trap filter. The technician safely drains the water, cleans the filter chamber, and tests pump drainage.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What causes roaring grinding noise when the drum turns?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            A loud metallic grinding or jet-engine sound during high spin indicates that water has seeped past the rubber tub seal into the rear drum ball bearings, causing rust and wear. Our technicians replace the twin bearings, water seal, and inspect the drum spider arm.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is water filling very slowly into my machine?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            In many Kanyakumari localities, sediment and scale from overhead tanks accumulate inside the small mesh filter of the inlet hose. Cleaning this filter mesh or replacing a weakened electromagnetic solenoid valve restores normal water flow.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Do technicians repair both semi-automatic and fully automatic machines in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes, our local technicians repair top-load fully automatic, front-load inverter models, washer-dryers, and twin-tub semi-automatic machines across all neighborhoods in Kanyakumari.
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 4. TV FAQs (For all TV pages)
 */
function generateTvFaqs(brandName) {
  const brand = brandName || 'Television';
  return `  <!-- TV FAQs Section -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — ${brand} TV Repair in Kanyakumari</h2>
        <p>Direct answers regarding Smart LED TV display faults, backlight issues, power boards, and approximate repair costs in Kanyakumari.</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of an LED TV backlight strip replacement in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹1,000–₹3,000+ for a complete brand-compatible LED backlight strip array (32-inch to 55-inch models), depending on screen size, aluminum backing type, and technician inspection at your home.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a TV power supply (SMPS) board repair or replacement?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹1,500–₹4,000+ depending on whether the power circuit requires component-level repair (switching MOSFET, fuse, capacitors) or a complete regulated board replacement.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What is the approximate cost of a TV main motherboard repair or replacement?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost may be around ₹2,000–₹6,000+ for Smart / Android TV motherboard servicing, eMMC memory reprogramming, or board replacement depending on screen resolution (HD, FHD, 4K) and processor model.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why does my ${brand} TV have clear audio but a completely black dark screen?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            When dialogue and audio work normally but the display stays dark, the LED backlight array inside the panel has failed, or the backlight booster driver circuit is cut off. You can test this by shining a mobile flashlight closely at the dark screen — if faint picture silhouettes are visible, the display panel glass is fine and only the backlight strips need replacement.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Can thin horizontal or vertical lines on the TV screen be fixed?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Horizontal or vertical lines are often caused by loose ribbon cable connections between the T-Con timing controller board and display glass, or minor IC voltage drops. Our technician cleans and tests the ribbon paths. If the glass panel itself has internal micro-cracks, panel replacement cost is evaluated.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why is my Smart TV stuck on the brand logo screen and rebooting continuously?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            A boot loop occurs when the television's Android firmware crashes or the internal eMMC flash memory develops bad sectors. The technician performs a recovery flash, updates the firmware via USB programmer, and regulates voltage supplies.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Why are HDMI ports showing 'No Signal' after thunderstorms in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Electrical surges traveling through cable set-top box wires during monsoon lightning often damage the delicate HDMI ESD protection diodes or HDMI switch IC on the TV motherboard. Our technician replaces the damaged protection diodes to restore video input.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Do technicians repair televisions directly at customer homes in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes, our technicians conduct doorstep TV inspections, backlight tests, power supply repairs, sensor fixes, and software updates across Kanyakumari homes, avoiding the risk of transporting fragile screens.
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/**
 * 5. Service Center Brand FAQs (Covers all appliances supported by that brand with approximate part costs)
 */
function generateServiceCenterFaqs(brandName, supportedAppliances) {
  const brand = brandName || 'Brand';
  const apps = (supportedAppliances && supportedAppliances.length > 0)
    ? supportedAppliances
    : ['Air Conditioner', 'Refrigerator', 'Washing Machine', 'Television'];

  let faqs = `  <!-- Brand Service Center FAQs Section -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions about ${brand} Service in Kanyakumari</h2>
        <p>Doorstep checking, repairs, supported home appliances, spare parts, and approximate cost details in Kanyakumari.</p>
      </div>

      <div style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
        
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">Where is the ${brand} Service Center located in Kanyakumari?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">We provide local doorstep service for ${brand} home appliances across Kanyakumari district. Our technicians visit your residence directly in areas like Nagercoil, Vadasery, Kottar, Suchindram, Marthandam, Thuckalay, and Colachel, so you do not need to transport heavy appliances.</p>
        </div>

        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">How quickly can a technician visit for ${brand} Service Near Me in Kanyakumari?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">Technician visits are usually arranged on the same day or within a few hours depending on technician route availability in your specific Kanyakumari locality.</p>
        </div>

        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">What ${brand} appliances do you service in Kanyakumari?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">We service verified ${brand} home appliances including ${apps.join(', ')}.</p>
        </div>
`;

  // Add AC cost FAQ if AC is supported
  if (apps.includes('AC') || apps.includes('Air Conditioner')) {
    faqs += `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">What is the approximate cost of ${brand} AC parts like capacitors and PCB boards?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">For ${brand} air conditioners, approximate cost for an AC run capacitor may be around ₹500–₹1,200, an indoor/outdoor fan motor approximately ₹1,500–₹3,000+, and an inverter control PCB repair approximately ₹2,000–₹6,000+, depending on the model, part and technician inspection.</p>
        </div>`;
  }

  // Add Refrigerator cost FAQ if Refrigerator is supported
  if (apps.includes('Refrigerator') || apps.includes('Fridge')) {
    faqs += `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">What is the approximate cost of ${brand} refrigerator compressor and thermostat replacement?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">For ${brand} refrigerators, approximate cost for compressor replacement may be around ₹2,500–₹3,000+ for single door units and ₹3,500–₹6,500+ for frost-free inverter models. A thermostat or defrost sensor is approximately ₹500–₹1,200, and a relay/OLP approximately ₹300–₹700, depending on model and doorstep inspection.</p>
        </div>`;
  }

  // Add Washing Machine cost FAQ if Washing Machine is supported
  if (apps.includes('Washing Machine') || apps.includes('Washer')) {
    faqs += `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">What is the approximate cost of ${brand} washing machine drain pumps and motor belts?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">For ${brand} washing machines, approximate cost for a drain pump replacement may be around ₹700–₹1,500, a water inlet valve approximately ₹500–₹1,000, a door lock interlock approximately ₹600–₹1,500, a motor belt approximately ₹400–₹900, and PCB repair approximately ₹2,000–₹5,000+, depending on the model and technician verification.</p>
        </div>`;
  }

  // Add TV cost FAQ if TV is supported
  if (apps.includes('TV') || apps.includes('Television')) {
    faqs += `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">What is the approximate cost of ${brand} TV backlight strips and power boards?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">For ${brand} LED and Smart TVs, approximate cost for a complete backlight strip replacement may be around ₹1,000–₹3,000+ depending on screen size. A power supply (SMPS) board repair is approximately ₹1,500–₹4,000+, and a main board service approximately ₹2,000–₹6,000+, depending on the model, part and technician inspection.</p>
        </div>`;
  }

  // Add Microwave cost FAQ if Microwave is supported
  if (apps.includes('Microwave')) {
    faqs += `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">What is the approximate cost of ${brand} microwave oven magnetron and heating parts?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">For ${brand} microwave ovens, approximate cost for magnetron replacement may be around ₹1,200–₹2,500, a high-voltage diode or capacitor approximately ₹400–₹900, and door safety interlock switches approximately ₹300–₹700, depending on model and inspection.</p>
        </div>`;
  }

  // Standard service center trust questions
  faqs += `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">How is the repair cost estimated for ${brand} appliances in Kanyakumari?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">The technician first inspects the ${brand} appliance at your home and explains the root problem, needed spare parts, and expected cost. Repair work starts only after you approve the estimate.</p>
        </div>

        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">Do you use tested replacement parts for ${brand} appliance repairs?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">Yes, we use verified compatible spare parts matching ${brand} specifications to ensure reliable operation and safe performance.</p>
        </div>

        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">Which areas in Kanyakumari do you cover for ${brand} home appliance repair?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">We cover all residential and commercial areas across Kanyakumari including Nagercoil, Vadasery, Kottar, Suchindram, Marthandam, Thuckalay, Colachel, Kulasekharam, Aralvaimozhi, and all 200 localities in the district.</p>
        </div>

        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem 1.35rem; background: #fff; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.02rem; color: var(--primary-color); margin-bottom: 0.4rem; font-weight: 600;">How do I book a technician visit for ${brand} service in Kanyakumari?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin: 0;">You can call our support number directly at +91 92115 12088 or send a message on WhatsApp with your ${brand} appliance model and address in Kanyakumari to schedule a convenient visit.</p>
        </div>

      </div>
    </div>
  </section>`;

  return faqs;
}

/**
 * 6. Index Page FAQs
 */
function generateIndexFaqs() {
  return `  <!-- Frequently Asked Questions Section -->
  <section class="section section-bg-muted" id="faqSection">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions — Appliance Service in Kanyakumari</h2>
        <p>Clear, direct answers about doorstep appliance repair, spare parts, visiting charges, and approximate costs in Kanyakumari.</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>What are the approximate repair costs for home appliances in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Approximate cost depends on the appliance and part required: an AC capacitor may be around ₹500–₹1,200; a washing machine drain pump approximately ₹700–₹1,500; a refrigerator compressor approximately ₹2,500–₹3,000+; and TV backlight strips approximately ₹1,000–₹3,000+. The technician inspects the appliance at your home and confirms the estimate before starting work.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How much is the technician visiting and inspection charge in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Our standard doorstep inspection charge is ₹249. If you approve the repair estimate and proceed with the service, the inspection charge is adjusted against your final bill.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Which appliances do you repair at doorstep in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            We provide doorstep inspection and repair for Air Conditioners (Split, Window, Inverter), Refrigerators (Single Door, Double Door, Frost-Free), Washing Machines (Front Load, Top Load, Semi-Automatic), Smart LED & 4K Televisions, and Microwave Ovens across all major brands.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>How quickly can a technician visit my location in Kanyakumari?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Technician visits are typically scheduled on the same day or within a few hours across all East, West, North, and South Kanyakumari areas including Nagercoil, Marthandam, Suchindram, Thuckalay, Colachel, and surrounding villages.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            <span>Are replacement parts guaranteed and tested?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer">
            Yes, our technicians use tested compatible replacement parts matching OEM specifications, and all repairs are backed by a standard service warranty period confirmed on your service invoice.
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = {
  generateAcFaqs,
  generateFridgeFaqs,
  generateWmFaqs,
  generateTvFaqs,
  generateServiceCenterFaqs,
  generateIndexFaqs
};
