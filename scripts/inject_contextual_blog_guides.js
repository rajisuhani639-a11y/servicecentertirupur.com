const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const cat = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'scripts', 'site_catalog.json'), 'utf8'));

const GUIDE_CONFIGS = {
  ac: {
    heading: 'Helpful Erode AC Repair Guides & Tips',
    subtext: 'Practical troubleshooting advice, leak prevention, and pricing guidance for air conditioners in Erode homes:',
    cards: [
      {
        title: 'AC Not Cooling in Erode? Common Problems and What to Check First',
        tag: 'Cooling Guide',
        desc: 'Weak airflow, outdoor compressor tripping, dirty nylon filters, or copper pipe frost. Step-by-step checks before calling service.',
        url: '/blog/air-conditioner-not-cooling-in-erode.html'
      },
      {
        title: 'AC Water Leakage at Home in Erode: Common Reasons and Repair Tips',
        tag: 'Leak Prevention',
        desc: 'Indoor water dripping on walls or mattress? Why algae blocks drain pipes, tray leveling issues, and how technicians fix it.',
        url: '/blog/ac-water-leakage-repair-in-erode.html'
      },
      {
        title: 'How Much Can Appliance Repair Cost in Erode?',
        tag: 'Pricing Guide',
        desc: 'Transparent inspection charges, run capacitor costs, and gas leak recharge pricing across Erode neighborhoods.',
        url: '/blog/appliance-repair-cost-guide-in-erode.html'
      },
      {
        title: 'Home Appliance Repair in Erode: AC, Fridge, Washer & TV',
        tag: 'Erode Guide',
        desc: 'Handling Erode summer heat, power fluctuations, and arranging doorstep visits across local neighborhoods.',
        url: '/blog/home-appliance-repair-guide-in-erode.html'
      }
    ]
  },
  fridge: {
    heading: 'Helpful Erode Refrigerator Repair Guides & Tips',
    subtext: 'Practical cooling troubleshooting, noise diagnosis, and cost factors for refrigerators in Erode:',
    cards: [
      {
        title: 'Best Way to Handle Refrigerator Cooling Problems in Erode',
        tag: 'Cooling Guide',
        desc: 'Freezer working but bottom compartment warm? Door gasket paper test, air damper blocks, and defrost heater checks.',
        url: '/blog/refrigerator-not-cooling-in-erode.html'
      },
      {
        title: 'Refrigerator Making Clicking or Loud Noise in Erode? What to Check',
        tag: 'Noise Diagnosis',
        desc: 'Compressor start relay tripping, fan blade rattling against ice, and distinguishing normal sounds from motor stalls.',
        url: '/blog/refrigerator-clicking-noise-repair-in-erode.html'
      },
      {
        title: 'How Much Can Appliance Repair Cost in Erode?',
        tag: 'Pricing Guide',
        desc: 'Typical prices for PTC start relays, thermostat replacement, fan motors, and compressor overhauls.',
        url: '/blog/appliance-repair-cost-guide-in-erode.html'
      },
      {
        title: 'Common Home Appliance Problems in Erode and When to Call for Repair',
        tag: 'Safety Guide',
        desc: 'Food spoilage risks, burning odors, hot side panels, and when doorstep technician inspection is essential.',
        url: '/blog/common-appliance-problems-when-to-call-technician-erode.html'
      }
    ]
  },
  'washing-machine': {
    heading: 'Helpful Erode Washing Machine Repair Guides & Tips',
    subtext: 'Practical laundry troubleshooting, drainage checks, and repair vs replace factors for Erode homes:',
    cards: [
      {
        title: 'Washing Machine Not Draining in Erode? Simple Checks Before Calling',
        tag: 'Drain Guide',
        desc: 'Clearing bottom coin trap filters, unkinking rear hoses, error codes OE & 5E, and borewell sediment blocks.',
        url: '/blog/washing-machine-not-draining-in-erode.html'
      },
      {
        title: 'Which Washing Machine Problem Needs a Technician in Erode?',
        tag: 'Repair Guide',
        desc: 'Drum not spinning, violent vibration during spin, jammed door lock, and high-pitched bearing screeching.',
        url: '/blog/washing-machine-repair-problems-in-erode.html'
      },
      {
        title: 'Old vs New Washing Machines: Common Repair Problems in Erode Homes',
        tag: 'Repair vs Replace',
        desc: 'Comparing mechanical semi-automatic machines with modern inverter washers. Spare parts availability and the 40% rule.',
        url: '/blog/old-vs-new-washing-machine-repair-in-erode.html'
      },
      {
        title: 'How Much Can Appliance Repair Cost in Erode?',
        tag: 'Pricing Guide',
        desc: 'Inspection charges, drain pump replacement, drive belt costs, and drum bearing repair estimates.',
        url: '/blog/appliance-repair-cost-guide-in-erode.html'
      }
    ]
  },
  tv: {
    heading: 'Helpful Erode TV Repair Guides & Tips',
    subtext: 'Practical LED display checks, Smart TV troubleshooting, and backlight diagnostic advice in Erode:',
    cards: [
      {
        title: 'TV Screen Black but Sound Working in Erode — What Could Be Wrong?',
        tag: 'Display Guide',
        desc: 'How to use the mobile flashlight test to confirm burned-out LED backlight strips, T-Con boards, and HDMI source checks.',
        url: '/blog/tv-screen-black-sound-working-in-erode.html'
      },
      {
        title: 'Smart TV Repair in Erode: Display, Sound, Power and Software Problems',
        tag: 'Smart TV Guide',
        desc: 'Android boot logo loop recovery, Wi-Fi connectivity drops, vertical screen lines, and blinking standby power lights.',
        url: '/blog/smart-tv-repair-guide-in-erode.html'
      },
      {
        title: 'How Much Can Appliance Repair Cost in Erode?',
        tag: 'Pricing Guide',
        desc: 'Estimated costs for LED backlight strip sets (32" to 55"), power supply board fixes, and software reflashing.',
        url: '/blog/appliance-repair-cost-guide-in-erode.html'
      },
      {
        title: 'Common Home Appliance Problems in Erode and When to Call for Repair',
        tag: 'Safety Guide',
        desc: 'Surge protection against industrial power spikes, screen cleaning precautions, and safe hardware reset.',
        url: '/blog/common-appliance-problems-when-to-call-technician-erode.html'
      }
    ]
  },
  general: {
    heading: 'Helpful Erode Appliance Repair Guides & Advice',
    subtext: 'Practical homeowner guides, transparent pricing insights, and local appliance troubleshooting across Erode:',
    cards: [
      {
        title: 'Home Appliance Repair in Erode: AC, Fridge, Washing Machine and TV',
        tag: 'Local Guide',
        desc: 'Handling high summer heat, borewell water mineral scaling, and arranging doorstep visits across Erode.',
        url: '/blog/home-appliance-repair-guide-in-erode.html'
      },
      {
        title: 'How Much Can Appliance Repair Cost in Erode?',
        tag: 'Pricing Guide',
        desc: 'Clear inspection fee guidance, spare parts cost factors, and deciding between repair and replacement.',
        url: '/blog/appliance-repair-cost-guide-in-erode.html'
      },
      {
        title: 'Common Home Appliance Problems in Erode and When to Call for Repair',
        tag: 'Troubleshooting',
        desc: 'Safe DIY checks for filters and plugs vs critical warning signs that need an experienced technician.',
        url: '/blog/common-appliance-problems-when-to-call-technician-erode.html'
      },
      {
        title: 'AC Not Cooling in Erode? Common Problems and What to Check First',
        tag: 'Cooling Guide',
        desc: 'Checking dirty nylon filters, outdoor fan operation, low gas ice formation, and capacitor testing.',
        url: '/blog/air-conditioner-not-cooling-in-erode.html'
      }
    ]
  }
};

function buildGuidesSection(config) {
  const cardsHtml = config.cards.map(c => `
        <div class="service-card" style="padding: 1.25rem; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="margin-bottom: 0.5rem;">
              <span class="blog-card-tag">${c.tag}</span>
            </div>
            <h3 style="font-size: 1.05rem; color: var(--primary-color); line-height: 1.35; margin-bottom: 0.5rem;"><a href="${c.url}" style="color: inherit; text-decoration: none;">${c.title}</a></h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 0.75rem;">${c.desc}</p>
          </div>
          <div style="border-top: 1px solid var(--border-color); padding-top: 0.65rem; margin-top: auto;">
            <a href="${c.url}" style="font-size: 0.85rem; font-weight: 700; color: var(--accent-blue); text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">Read Guide →</a>
          </div>
        </div>`).join('');

  return `
  <!-- Helpful Erode Appliance Repair Guides Section -->
  <section class="section" style="border-top: 1px solid var(--border-color); background: #ffffff;">
    <div class="container">
      <div class="section-header">
        <h2>${config.heading}</h2>
        <p>${config.subtext}</p>
      </div>

      <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">${cardsHtml}
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="/blog/index.html" class="brand-pill" style="display: inline-flex; font-size: 0.95rem; padding: 0.65rem 1.4rem; background: #f8fafc; border: 1px solid var(--border-color);">Explore All 12 Erode Appliance Guides &amp; Blog Hub →</a>
      </div>
    </div>
  </section>
`;
}

let modifiedCount = 0;

Object.values(cat).forEach(item => {
  const filePath = path.join(ROOT_DIR, item.file);
  if (!fs.existsSync(filePath)) return;
  if (item.file === 'sitemap.html') return; // Skip sitemap.html

  let content = fs.readFileSync(filePath, 'utf8');

  // Determine which config to use
  let configKey = 'general';
  if (item.app === 'ac') configKey = 'ac';
  else if (item.app === 'fridge') configKey = 'fridge';
  else if (item.app === 'washing-machine') configKey = 'washing-machine';
  else if (item.app === 'tv') configKey = 'tv';

  const config = GUIDE_CONFIGS[configKey];
  const sectionHtml = buildGuidesSection(config);

  // Remove existing section if present
  content = content.replace(/\s*<!-- Helpful Erode Appliance Repair Guides Section -->[\s\S]*?<\/section>/g, '');

  // Insert immediately before <footer class="site-footer"
  if (content.includes('<footer class="site-footer"')) {
    content = content.replace('<footer class="site-footer"', `${sectionHtml}\n  <footer class="site-footer"`);
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
  } else {
    console.warn(`[WARNING] No footer found in ${item.file}`);
  }
});

console.log(`✓ Successfully injected contextual blog guides into ${modifiedCount} existing pages!`);
