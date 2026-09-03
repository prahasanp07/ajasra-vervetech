export const siteConfig = {
  businessName: "Ajasra Vervetech",
  tagline: "Precision Hot Dip Galvanizing & Corrosion Protection",
  whatsappNumber: "918296663245",
  phoneDisplay: "+91 82966 63245",
  phoneTel: "+918296663245",
  email: "support@ajasravervetech.com",
  emailEndpoint: "/api/send-email.php",
  establishedYear: "2020",
  businessType: "Family-owned partnership firm",
  promoters: ["Mrs. Kalpana Sreedar", "Mr. K. Sreedar"],
  standards: "IS 2629 Aligned",
  coatingStrength: "3600 psi",
  maxBathTemp: "650°C",
  location: "Harohalli Industrial Area, Kanakapura, Karnataka",
  address: [
    "Plot No. 274-D/B, Road No. 5A",
    "2nd Phase, Harohalli Industrial Area",
    "Kanakapura Taluk, Ramanagara District",
    "Harohalli, Karnataka 562112",
    "India"
  ],
  mapsQuery: "Harohalli+Industrial+Area+Phase+2+Kanakapura+Karnataka",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Applications", href: "/#applications" },
    { label: "Contact", href: "/#contact" }
  ]
} as const;

export type SiteConfig = typeof siteConfig;
