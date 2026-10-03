/**
 * Main Interactive Script for servicecentertirupur.com
 * Handles mobile menu, floating triggers, booking modal, and FAQ accordion.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollFloatingCTAs();
  initFAQAccordion();
  initQuickBookingForm();
  syncDynamicContactLinks();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("mainNav");
  const navBackdrop = document.getElementById("navBackdrop");

  if (!menuBtn || !navMenu) return;

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : menuBtn.getAttribute("aria-expanded") !== "true";
    menuBtn.setAttribute("aria-expanded", String(isExpanded));
    navMenu.classList.toggle("nav-open", isExpanded);
    if (navBackdrop) {
      navBackdrop.classList.toggle("backdrop-visible", isExpanded);
    }
    document.body.classList.toggle("overflow-hidden", isExpanded);
  }

  menuBtn.addEventListener("click", () => toggleMenu());

  if (navBackdrop) {
    navBackdrop.addEventListener("click", () => toggleMenu(false));
  }

  // Close when clicking nav links
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });
}

/**
 * Floating Viewport CTA:
 * Positioned fixed at ~55vh from page load via CSS.
 * No scroll-trigger logic needed; visible from initial page load.
 */
function initScrollFloatingCTAs() {
  // Pure CSS fixed positioning at 55vh handles visibility from page load.
}

/**
 * Clean accessible FAQ Accordion
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      
      // Close other open faqs in the same group
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("open");
          const otherBtn = other.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

/**
 * Quick Booking & Callback Form
 * Allows user to pick Appliance, Locality, and Phone, then submit via WhatsApp or direct Call
 */
function initQuickBookingForm() {
  const forms = document.querySelectorAll(".quick-booking-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const applianceSelect = form.querySelector("[name='appliance']");
      const localitySelect = form.querySelector("[name='locality']");
      const phoneInput = form.querySelector("[name='phone']");
      const issueInput = form.querySelector("[name='issue']");

      const appliance = applianceSelect ? applianceSelect.value : "Home Appliance";
      const locality = localitySelect ? localitySelect.value : "Tiruppur";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const issue = issueInput ? issueInput.value.trim() : "Inspection & Repair required";

      if (!phone || phone.length < 10) {
        alert("Please enter a valid 10-digit phone number.");
        if (phoneInput) phoneInput.focus();
        return;
      }

      const msg = `Hello Service Center Tirupur,\n\nI need service for:\n* Appliance: ${appliance}\n* Issue: ${issue}\n* My Location: ${locality}, Tirupur\n* Contact Phone: ${phone}\n\nPlease let me know technician visit availability and service details.`;
      
      const encodedMsg = encodeURIComponent(msg);
      const waPhone = typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.whatsappNumber ? SITE_CONFIG.whatsappNumber : "918882055269";
      const whatsappUrl = `https://wa.me/${waPhone}?text=${encodedMsg}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  });
}

/**
 * Ensure all tel: and wa.me links are consistent across the DOM
 */
function syncDynamicContactLinks() {
  if (typeof SITE_CONFIG === "undefined") return;

  document.querySelectorAll("a.sync-call").forEach(a => {
    a.href = `tel:${SITE_CONFIG.phoneRaw}`;
    if (a.hasAttribute("data-text-phone")) {
      a.textContent = SITE_CONFIG.phoneDisplay;
    }
  });

  document.querySelectorAll("a.sync-whatsapp").forEach(a => {
    const currentHref = a.getAttribute("href") || "";
    const textMatch = currentHref.match(/[?&]text=([^&]+)/);
    const msg = textMatch ? decodeURIComponent(textMatch[1]) : SITE_CONFIG.whatsappPrefillMessage;
    a.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  });
}
