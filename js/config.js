/**
 * Centralized Site Configuration for servicecentertirupur.com
 * Single source of truth for contact details, domain, and service information.
 */
const SITE_CONFIG = {
  brandName: "Service Center Tirupur",
  tagline: "Local Home Appliance Repair & Service in Tirupur",
  domain: "servicecentertirupur.com",
  siteUrl: "https://servicecentertirupur.com",
  
  // Primary Contact Details (Consistent across all pages, calls, schemas, and floating buttons)
  phoneDisplay: "+91 88820 55269",
  phoneRaw: "+918882055269",
  phoneDigitsOnly: "8882055269",
  whatsappNumber: "918882055269",
  whatsappPrefillMessage: "Hello, I need home appliance repair service in Tirupur. Please share the service details.",
  email: "support@servicecentertirupur.com",
  
  // Working Hours & Location Details
  workingHours: "Monday to Sunday: 8:00 AM - 8:30 PM",
  serviceLocation: {
    city: "Tirupur",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "641604",
    streetAddress: "Chikanna Chettiar St, Kamatchi Amman, Chikkanna, Tiruppur, Tamil Nadu 641604, India",
    latitude: 11.099761,
    longitude: 77.347941
  },
  
  // Verified Service Localities in and around Tiruppur (Single Source of Truth)
  localities: [
    { name: "Avinashi Road", landmark: "Pushpa Theatre Junction, Kumar Nagar Signal" },
    { name: "Kumar Nagar", landmark: "60 Feet Road, Kongu Nagar Link" },
    { name: "P.N. Road", landmark: "New Bus Stand, Pushpa Theatre, Pandian Nagar" },
    { name: "Pandian Nagar", landmark: "P.N. Road Corridor, 60 Feet Road" },
    { name: "15 Velampalayam", landmark: "Bus Terminus, Ring Road Junction" },
    { name: "Velampalayam", landmark: "Police Station Road, Metal Ware Hub" },
    { name: "Angeripalayam", landmark: "Railway Overbridge, Garment Cluster" },
    { name: "Gandhi Nagar", landmark: "Signal, Avinashi Highway Link" },
    { name: "Kangeyam Road", landmark: "Nallur Junction, St. Joseph School" },
    { name: "Nallur", landmark: "Panchayat Office, Kangeyam Road" },
    { name: "Muthanampalayam", landmark: "Ring Road Link, Housing Units" },
    { name: "Palladam Road", landmark: "Toll Gate, Arulpuram Signal" },
    { name: "Veerapandi", landmark: "Common Effluent Plant, Textile Hub" },
    { name: "Andipalayam", landmark: "Lake Area, Mangalam Road" },
    { name: "Mangalam Road", landmark: "Corporation Office, Alangadu" },
    { name: "Karuvampalayam", landmark: "Bazaar Street, Main Road" },
    { name: "Thennampalayam", landmark: "Daily Market, Dharapuram Road" },
    { name: "Dharapuram Road", landmark: "KNP Colony, Murungampalayam" },
    { name: "KNP Colony", landmark: "Community Hall, Dharapuram Highway" },
    { name: "Boyampalayam", landmark: "Ring Road, Industrial Belt" },
    { name: "Anupparpalayam", landmark: "Brass Market, High School Road" },
    { name: "Kongu Nagar", landmark: "Park Road, Main Residential Street" },
    { name: "S.V. Colony", landmark: "Central Colony, 3rd Street" },
    { name: "Rayapuram", landmark: "Railway Station Link, Bazaar" },
    { name: "Neruperichal", landmark: "Printing Units, Panchayat Road" },
    { name: "Pooluvapatti", landmark: "Four Roads Junction, P.N. Road" },
    { name: "Perumanallur", landmark: "NH 544 Four Roads, Toll Road" },
    { name: "Arulpuram", landmark: "Palladam Highway, Garment Park" },
    { name: "Chinnakarai", landmark: "Industrial Gate, Palladam Road" },
    { name: "Chettipalayam", landmark: "Housing Unit, High School Link" }
  ],

  // Appliance Services Offered
  services: [
    { id: "washing-machine", name: "Washing Machine Repair", icon: "washing-machine" },
    { id: "refrigerator", name: "Refrigerator / Fridge Repair", icon: "fridge" },
    { id: "ac", name: "Air Conditioner (AC) Service", icon: "ac" },
    { id: "tv", name: "LED / Smart TV Repair", icon: "tv" }
  ]
};

// Freeze configuration to prevent accidental runtime modification
if (typeof Object.freeze === "function") {
  Object.freeze(SITE_CONFIG);
  Object.freeze(SITE_CONFIG.serviceLocation);
  Object.freeze(SITE_CONFIG.localities);
  Object.freeze(SITE_CONFIG.services);
}
