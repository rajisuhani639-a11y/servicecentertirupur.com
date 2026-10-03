// scripts/apply_ifb_content_updates.js
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update IFB Washing Machine Page
const wmFile = path.join(ROOT_DIR, 'washing-machine', 'ifb-washing-machine-repair-service-in-madurai.html');
let wmContent = fs.readFileSync(wmFile, 'utf8');

const wmTarget = '<!-- Customer Service Experiences (100% Unique Per Page) -->';

const wmSection = `<!-- Helpful Customer Guide: IFB Washing Machine Charges, Common Problems & Care -->
  <section class="section" style="background: #ffffff; border-bottom: 1px solid var(--border-color); padding: 2.75rem 0;">
    <div class="container">
      <div class="section-header" style="text-align: left; max-width: 900px; margin-bottom: 1.75rem;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.05em;">Customer Questions &amp; Advice</span>
        <h2 style="font-size: 1.6rem; color: var(--primary-color); margin-top: 0.35rem; margin-bottom: 0.5rem;">Helpful Answers About IFB Washing Machine Service in Madurai</h2>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Straightforward answers to what Madurai homeowners commonly ask about service charges, common problems, machine life, and free-service options.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <!-- Card 1: Service Charges -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">What Are the Service Charges for an IFB Washing Machine?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            When booking repair, it helps to understand that service costs are divided into three parts: the doorstep inspection visit, the actual repair or labor work, and the spare-part price if any component needs replacement.
          </p>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0;">
            A doorstep inspection in Madurai generally starts at a nominal visit fee (₹200 to ₹350), which is adjusted into the final bill once you approve the fix. Minor fixes like coin trap cleaning or belt alignment are modest, while genuine parts like drain pumps, door lock switches, or inverter motor PCBs depend on your exact IFB model number. Charges can vary depending on the problem, model and parts required.
          </p>
        </div>

        <!-- Card 2: Common Problems -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">What Common Problems Happen in an IFB Washing Machine?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            Because of hard borewell water in many Madurai areas (like K.K. Nagar, Iyer Bungalow, and Tirunagar), calcium buildup on the heater element and Aqua Energie mesh is common. This leads to slow water fill or heating failure.
          </p>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0;">
            Other frequent complaints include front-door latch lock errors (dO / dOOr code), drain pump choking from loose fabric threads or coins, and loud drum rumbling during high-speed spinning caused by worn shock absorbers or drum bearings.
          </p>
        </div>

        <!-- Card 3: Expected Machine Life -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">What Is the Expected Life of an IFB Washing Machine?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            With regular care, an IFB front load or top load washing machine normally lasts between 8 to 12 years, and often even longer. Heavy-duty stainless steel drums and solid suspension give these machines strong mechanical longevity.
          </p>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0;">
            To get the longest life, run a descaling cycle every 45 to 60 days to protect the heater, keep loads within rated capacity, and leave the door open slightly after each wash so moisture dries naturally without degrading the rubber gasket.
          </p>
        </div>

        <!-- Card 4: Free Service & Warranty Questions -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">How to Check Free Service and Warranty for an IFB Washer?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            Customers often ask whether IFB service is free. Free service is not automatic for every request. It strictly depends on your product warranty status, mandatory free-service coupons included at purchase, or active comprehensive AMC contracts.
          </p>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0;">
            If your machine is under the original manufacturer warranty, always check your purchase invoice and contact official brand channels for covered claims. If your warranty has expired, our independent local technicians provide transparent doorstep repair with upfront pricing and tested replacement parts.
          </p>
        </div>
      </div>

      <!-- Quick Helpful Guide Links -->
      <div style="margin-top: 1.5rem; background: #eff6ff; border-left: 4px solid var(--accent-blue); padding: 1rem 1.25rem; border-radius: 0 6px 6px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
        <div>
          <strong style="color: var(--primary-color); font-size: 0.95rem;">Looking for in-depth guidance?</strong>
          <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: #475569;">Read our local guides on <a href="../blog/ifb-washing-machine-problems-causes-service-madurai.html" style="color: var(--accent-blue); font-weight: 600;">IFB Washing Machine Common Problems &amp; Fixes</a> and <a href="../blog/ifb-washing-machine-service-charges-cost-warranty-madurai.html" style="color: var(--accent-blue); font-weight: 600;">IFB Service Charges, Lifespan &amp; Free Service Advice</a>.</p>
        </div>
        <a href="../servicecenter/ifb-service-center-madurai.html" style="font-size: 0.88rem; font-weight: 700; color: #ffffff; background: var(--accent-blue); padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; white-space: nowrap;">View IFB Service Center Madurai →</a>
      </div>
    </div>
  </section>

  `;

if (wmContent.includes(wmTarget)) {
  wmContent = wmContent.replace(wmTarget, wmSection + wmTarget);
  fs.writeFileSync(wmFile, wmContent, 'utf8');
  console.log('✓ Updated IFB Washing Machine page with customer guidance section');
} else {
  console.error('Failed to locate target in IFB Washing Machine page');
}

// 2. Update IFB Service Center Page
const scFile = path.join(ROOT_DIR, 'servicecenter', 'ifb-service-center-madurai.html');
let scContent = fs.readFileSync(scFile, 'utf8');

const scTarget = '<!-- Customer Service Experiences (100% Unique Per Page) -->';

const scSection = `<!-- IFB Appliance Ownership & Service Advice (PAA Intent) -->
  <section class="section" style="background: #ffffff; border-bottom: 1px solid var(--border-color); padding: 2.75rem 0;">
    <div class="container">
      <div class="section-header" style="text-align: left; max-width: 920px; margin-bottom: 1.75rem;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.05em;">IFB Ownership &amp; Service Advice</span>
        <h2 style="font-size: 1.6rem; color: var(--primary-color); margin-top: 0.35rem; margin-bottom: 0.5rem;">IFB Appliance Service Charges, Common Issues &amp; Care in Madurai</h2>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Everything Madurai customers need to know about IFB washing machine, microwave, and appliance repair costs, typical problems, warranty terms, and booking doorstep help.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 1.5rem;">
        <!-- Card 1: Broad Service Charges -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">How Are IFB Appliance Service Charges Calculated?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            Whether you own an IFB front load washer, dishwasher, or microwave oven, overall service costs always depend on three transparent parts:
          </p>
          <ul style="margin: 0 0 0.75rem 1.2rem; padding: 0; font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">
            <li><strong>Doorstep Inspection Visit:</strong> ₹200 to ₹350 standard checking fee, waived or adjusted when service is done.</li>
            <li><strong>Labor / Service Charge:</strong> Depends on whether the job is basic cleaning, filter descaling, or major mechanical overhaul.</li>
            <li><strong>Spare Part Price:</strong> Charges can vary depending on the problem, model and parts required (e.g. heating coils, motors, PCB boards).</li>
          </ul>
          <p style="font-size: 0.88rem; color: var(--text-subtle); line-height: 1.5; margin: 0;">Our technicians provide an exact written quote on-site before starting any replacement.</p>
        </div>

        <!-- Card 2: Common Washing Machine Issues in Madurai -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">What Common Issues Do IFB Washing Machines Face in Madurai?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            In Madurai, high TDS water from deep borewells is the single biggest cause of IFB appliance breakdowns. Calcium deposits choke the Aqua Energie filter cartridges, encrust water heating elements, and cause false pressure readings.
          </p>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0;">
            Other frequent service calls involve front-load door lock delay faults (dOOR errors), coin trap blockages preventing proper spin drying, and electrical voltage fluctuations in developing city pockets that damage sensitive microcontroller circuit boards.
          </p>
        </div>

        <!-- Card 3: Free Service & Warranty Rules -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">When Can You Get Free Service for IFB Appliances?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            Free service is never guaranteed on every repair call. It applies strictly under specific conditions: when your product is within its active manufacturer warranty period, during initial promotional free installation visits, or under a valid paid annual maintenance contract (AMC).
          </p>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0;">
            Always keep your original purchase invoice and warranty card safe to confirm coverage terms. For out-of-warranty machines, our local Madurai service team offers competitive, honest pricing without high dealership markups.
          </p>
        </div>

        <!-- Card 4: When to Call for Immediate Service -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.35rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.6rem;">When Should You Call a Technician for Your IFB Washer?</h3>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0.75rem;">
            Never force open a stuck front-load door, as this breaks the internal latch mechanism. If you notice a burning smell, continuous water intake with drum overflowing, or severe violent shaking during spin cycles, stop the machine immediately.
          </p>
          <p style="font-size: 0.9rem; color: var(--text-color); line-height: 1.6; margin-bottom: 0;">
            Booking an on-site technician check within 24 hours prevents minor motor capacitor or bearing issues from turning into expensive drum spider or PCB damage.
          </p>
        </div>
      </div>

      <!-- Quick Helpful Guide Links -->
      <div style="margin-top: 1.5rem; background: #eff6ff; border-left: 4px solid var(--accent-blue); padding: 1rem 1.25rem; border-radius: 0 6px 6px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
        <div>
          <strong style="color: var(--primary-color); font-size: 0.95rem;">Looking for dedicated IFB washing machine help?</strong>
          <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: #475569;">Visit our dedicated <a href="../washing-machine/ifb-washing-machine-repair-service-in-madurai.html" style="color: var(--accent-blue); font-weight: 600;">IFB Washing Machine Repair Service page</a>, or read our new blog on <a href="../blog/ifb-washing-machine-service-charges-cost-warranty-madurai.html" style="color: var(--accent-blue); font-weight: 600;">IFB Washing Machine Service Cost, Lifespan &amp; Free Service Guide</a>.</p>
        </div>
        <a href="tel:+919211512088" style="font-size: 0.88rem; font-weight: 700; color: #ffffff; background: var(--accent-blue); padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; white-space: nowrap;">Call Technician: 92115 12088</a>
      </div>
    </div>
  </section>

  `;

if (scContent.includes(scTarget)) {
  scContent = scContent.replace(scTarget, scSection + scTarget);
  fs.writeFileSync(scFile, scContent, 'utf8');
  console.log('✓ Updated IFB Service Center page with customer ownership section');
} else {
  console.error('Failed to locate target in IFB Service Center page');
}
