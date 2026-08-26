export interface TrustIndicator {
  label: string;
  sublabel?: string;
}

export interface ServiceFeature {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  substeps?: {
    name: string;
    duration?: string;
    details: string;
  }[];
}

export interface CapabilityCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ApplicationCategory {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ProcessPillar {
  title: string;
  description: string;
}

export interface PromoterBio {
  name: string;
  role: string;
  experience: string;
  education: string;
  summary: string;
  highlights: string[];
}

export const siteContent = {
  hero: {
    eyebrow: "PRECISION HOT DIP GALVANIZING",
    headline: "Protecting steel for what comes next.",
    subheadline:
      "Specification-led hot dip galvanizing for iron, steel and ferrous alloys. Operating temperatures up to 650°C providing double cathodic and barrier protection with ~3600 psi coating strength.",
    locationBadge: "Serving industrial projects from Harohalli, Karnataka.",
    primaryCta: "Start a project",
    secondaryCta: "Explore our process",
    heroImage: "/images/galvanizing-hero.jpg",
    heroAlt: "Hot dip galvanizing facility with fabricated steel structure being immersed into zinc kettle"
  },

  trustStrip: [
    { label: "Double Protection", sublabel: "Cathodic sacrificial & barrier defense" },
    { label: "~3600 PSI Strength", sublabel: "High metallurgical bond adhesion" },
    { label: "Up to 650°C Bath", sublabel: "Electrically heated molten zinc furnace" },
    { label: "Harohalli, Karnataka", sublabel: "IS 2629 aligned operations" }
  ] as TrustIndicator[],

  // Authentic About Us content scraped from live site
  aboutPage: {
    eyebrow: "ABOUT AJASRA VERVETECH",
    title: "Family-Owned Hot Dip Galvanizing Excellence Since 2020",
    overview:
      "M/s Ajasra Vervetech is a partnership firm and a family owned business, promoted by Mrs. Kalpana Sreedar and Mr. K. Sreedar. Established in the year 2020, the business unit expertise in hot dip galvanizing of ferrous products across diverse heavy engineering, construction, energy, and infrastructure sectors.",
    plantLocation:
      "The plant is located at Plot #274-D/B, 2nd Phase, Harohalli Industrial Area, Kanakapura Taluk, Ramanagara District, Harohalli-562112, Karnataka.",
    promotersSectionTitle: "You're in Good Hands",
    promotersSectionSubtitle:
      "Decades of direct engineering leadership, greenfield plant execution, and business management.",
    promoters: [
      {
        name: "Mr. K. Sreedar",
        role: "Promoter & Technical Director",
        experience: "32+ Years Experience",
        education: "Diploma in Mechanical Engineering",
        summary:
          "An engineer and entrepreneur with over 32 years of rich industrial experience. He has held responsible senior positions in manufacturing, quality assurance, administration, equipment handling, and maintenance of greenfield projects at various large-scale multinational companies.",
        highlights: [
          "Served as Department Manager & Deputy General Manager (DGM) at an MNC.",
          "Independent technical consultant since June 2016, successfully establishing statutory approvals and execution for 2 greenfield projects.",
          "Specialized expertise in designing, installation, and commissioning of 2 complete Hot Dip Galvanizing plants, along with CNC machining and hot forging lines.",
          "Certified Lead Auditor for Quality Management Systems (ISO 9001).",
          "Certified Lead Auditor for Environmental Management Systems (ISO 14001)."
        ]
      },
      {
        name: "Mrs. Kalpana Sreedar",
        role: "Promoter & Commercial Director",
        experience: "33+ Years Experience",
        education: "Bachelor of Arts (BA)",
        summary:
          "An entrepreneur with over 33 years of professional and business experience. Having started her career in the industrial garment sector as a team lead supervisor for 4 years, she established and runs her own commercial enterprise with an emphasis on disciplined operations and quality execution.",
        highlights: [
          "Over three decades of active entrepreneurship and organizational management.",
          "Experienced in team leadership, process supervision, and commercial operations.",
          "Co-founded Ajasra Vervetech to provide dependable, specification-led industrial galvanizing services."
        ]
      }
    ] as PromoterBio[],
    galvanizedComponents: [
      { title: "Steel Structures", desc: "Warehouse framing, PEB structures, trusses & girders" },
      { title: "Fasteners & Hardware", desc: "High-tensile bolts, nuts, threaded rods & studs" },
      { title: "Brackets, Joints & Anchors", desc: "Foundation anchor bolts, heavy connection brackets & joints" },
      { title: "Rigging & Lifting Hardware", desc: "Tongs, clevises, edge lifters, hooks & ball rings" },
      { title: "Clamps & Construction Parts", desc: "Pipe clamps, beam clamps, staging & scaffolding parts" },
      { title: "Power & Transmission", desc: "Lattice transmission towers, substation structures & cross-arms" },
      { title: "Oil & Gas Components", desc: "Skids, piping supports, platforms & vessel brackets" },
      { title: "Shipping & Marine Parts", desc: "Marine hardware, dock fittings & salt-spray resistant parts" },
      { title: "Automotive Components", desc: "Chassis brackets, sub-frame assemblies & structural braces" },
      { title: "Construction Equipment", desc: "Batching plant components, formwork brackets & excavator attachments" }
    ]
  },

  servicePanel: {
    eyebrow: "WHAT WE DO",
    heading: "Built for protection. Ready for industry.",
    description:
      "We provide the service of hot dip galvanization to iron, steel and ferrous alloys to give them long-term resistance to abrasion, environmental impacts, and wear by immersing components in pure molten zinc.",
    features: [
      {
        id: "double-corrosion-defense",
        number: "01",
        title: "Double Corrosion Protection",
        description:
          "Combines sacrificial cathodic protection (zinc corrodes preferentially to protect base metal) and impervious barrier shielding."
      },
      {
        id: "high-coating-strength",
        number: "02",
        title: "3600 PSI Bond Strength",
        description:
          "Metallurgical reaction produces durable zinc-iron alloy layers that are physically stronger than the base steel itself."
      },
      {
        id: "high-temp-bath",
        number: "03",
        title: "Controlled Zinc Bath (Up to 650°C)",
        description:
          "Electrically heated melting furnace maintaining uniform bath temperature for complete alloy layer development."
      },
      {
        id: "centrifuge-finishing",
        number: "04",
        title: "Centrifuge Excess Removal & Quench",
        description:
          "High-speed centrifuge spin to remove surplus zinc followed by de-oxidant quench cooling to stabilize finish."
      }
    ] as ServiceFeature[]
  },

  // Full detailed 3-step process extracted directly from live website
  detailedProcess: [
    {
      step: "01",
      title: "Surface Preparation",
      subtitle: "Chemical cleaning for optimal metallurgical bonding",
      description:
        "The surface of the steel is treated systematically in order to increase its adhesion and ensure a flawless reaction with molten zinc.",
      substeps: [
        {
          name: "Caustic Degreasing (NaOH)",
          duration: "5 to 8 Minutes",
          details:
            "Steel is dipped in a versatile alkaline caustic soda (NaOH) solution to eliminate manufacturing oils, grease, grime, and shop dirt. The steel is then thoroughly rinsed in fresh water."
        },
        {
          name: "Acid Pickling (Pickle Liquor)",
          duration: "~3 Minutes (Part Dependent)",
          details:
            "Dipped in an acidic pickling liquor to dissolve mill scale (flaky mixed iron oxides from hot rolling) and surface inorganic impurities. Rinsed with water prior to fluxing."
        },
        {
          name: "Flux Coating & Hot Plate Drying",
          duration: "Pre-Dip Conditioning",
          details:
            "Dipped in a Zinc Ammonium Chloride flux solution to inhibit oxidation upon exposure to air. Dried on an electrically heated hot plate which facilitates molten zinc wetting and adhesion."
        }
      ]
    },
    {
      step: "02",
      title: "Hot Dip Galvanizing & Centrifuge",
      subtitle: "Immersion in molten zinc at high operating temperatures",
      description:
        "Prepared steel is immersed in pure molten zinc up to 650°C until temperature equilibrium is achieved, followed by excess zinc removal and quenching.",
      substeps: [
        {
          name: "Molten Zinc Immersion",
          duration: "Until Reaction / Bubbling Ceases",
          details:
            "Steel is lowered into the molten zinc bath and held until component temperature equilibrates with the bath. A complete metallurgical zinc-iron alloy layer forms over all internal and external surfaces."
        },
        {
          name: "Centrifuge Zinc Removal",
          duration: "Immediate Post-Lift",
          details:
            "When the reaction stops, components are lifted and transferred to a high-speed centrifuge where excess molten zinc is removed by centrifugal force for uniform coating and clean threads."
        },
        {
          name: "Quench Tank & De-Oxidant Cooling",
          duration: "Rapid Thermal Stabilization",
          details:
            "Steel is cooled in a quench tank or dipped in a specialized de-oxidant solution to immediately reduce temperature and prevent undesirable atmospheric post-reactions."
        },
        {
          name: "Fume Extraction & Wet Scrubber",
          duration: "Continuous Environmental Control",
          details:
            "Fume extraction hood positioned at the zinc kettle connected to a wet scrubber system with chimney height 3 meters above roof level for clean emissions."
        }
      ]
    },
    {
      step: "03",
      title: "4-Point Quality Inspection",
      subtitle: "Verification against international & Indian standards",
      description:
        "Every batch undergoes rigorous quality inspection to verify that the coating fulfills standard durability and aesthetic criteria.",
      substeps: [
        {
          name: "Coating Thickness",
          details: "Measured across critical surfaces using calibrated magnetic / electromagnetic gauges to verify required micron thickness."
        },
        {
          name: "Coating Adherence",
          details: "Evaluating the metallurgical bond strength (~3600 psi) to ensure coating will not flake or peel during handling or service."
        },
        {
          name: "Coating Uniformity",
          details: "Inspecting all exterior surfaces, interior cavities, holes, and corners for continuous unbroken zinc coverage."
        },
        {
          name: "Visual Appearance",
          details: "Checking for smooth metallic spangle finish, free from flux inclusions, ash marks, or dross contamination."
        }
      ]
    }
  ] as ProcessStage[],

  capabilities: {
    eyebrow: "SOLUTIONS & SERVICES",
    heading: "Capabilities that keep work moving.",
    subheadline: "Robust zinc protection tailored to fabrication complexities, batch sizes, and demanding structural requirements.",
    items: [
      {
        id: "hot-dip-galvanizing",
        tag: "Core Service",
        title: "Hot Dip Galvanizing",
        description:
          "Durable zinc coating for iron, steel and ferrous alloys exposed to demanding environments at bath temperatures up to 650°C.",
        image: "/images/zinc-kettle-dip.jpg",
        alt: "Fabricated steel assembly emerging from molten zinc galvanizing bath"
      },
      {
        id: "structural-steel",
        tag: "Heavy Structures",
        title: "Structural Steel Protection",
        description:
          "Comprehensive corrosion barrier for columns, beams, trusses, and prefabricated building members with ~3600 psi bond strength.",
        image: "/images/structural-steel.jpg",
        alt: "Hot dip galvanized structural steel beams organized in logistics yard"
      },
      {
        id: "industrial-fabrication",
        tag: "Assemblies",
        title: "Industrial Fabrication",
        description:
          "Careful handling and zinc coating for welded spools, tanks, enclosures, and machinery sub-assemblies with centrifuge finishing.",
        image: "/images/steel-fabrication.jpg",
        alt: "Industrial steel pipe and flange fabrication prepared for galvanizing"
      },
      {
        id: "infrastructure-components",
        tag: "Civil & Energy",
        title: "Infrastructure Components",
        description:
          "Long-term protection for solar mounting structures, highway barriers, transmission towers, and brackets.",
        image: "/images/infrastructure-steel.jpg",
        alt: "Galvanized transmission tower lattice steel structures"
      }
    ] as CapabilityCard[]
  },

  featureSplit: {
    eyebrow: "WHY AJASRA VERVETECH",
    heading: "The right finish starts with the right conversation.",
    description:
      "We begin by understanding your material, dimensions, quantity, handling requirements, and project context. That helps create a smoother path from incoming steel to finished protection.",
    image: "/images/facility-logistics.jpg",
    imageAlt: "Ajasra Vervetech organized steel material handling and overhead crane facility",
    pillars: [
      {
        title: "Caustic degreasing & acid pickling",
        description: "5-8 min alkaline degreasing and targeted acid pickling to thoroughly strip mill scale and contaminants."
      },
      {
        title: "Zinc ammonium chloride fluxing",
        description: "Organic flux barrier preventing oxidation before immersion in our electrically heated zinc furnace."
      },
      {
        title: "Centrifugal excess removal",
        description: "Centrifuge spin immediately after lift for clean threads, uniform thickness, and sharp profiles."
      },
      {
        title: "4-Point quality assurance",
        description: "Rigorous checks across coating thickness, adherence, uniformity, and spangle appearance."
      }
    ] as ProcessPillar[],
    cta: "Discuss your requirement"
  },

  applications: {
    eyebrow: "INDUSTRIAL APPLICATIONS",
    heading: "Protection for the work behind the work.",
    subheadline: "Ensuring long service life across vital commercial, industrial, and infrastructure steel assets.",
    categories: [
      {
        id: "app-structural",
        index: "01",
        title: "Structural Steel",
        description:
          "Industrial warehouse frameworks, pre-engineered buildings, bridge girders, and architectural steel columns.",
        image: "/images/structural-steel.jpg",
        alt: "Galvanized structural steel columns and I-beams"
      },
      {
        id: "app-fabrication",
        index: "02",
        title: "Industrial Fabrication",
        description:
          "Pressure vessels, conveyor frames, platforms, handrails, skids, and customized heavy manufacturing weldments.",
        image: "/images/steel-fabrication.jpg",
        alt: "Custom fabricated welded steel assemblies"
      },
      {
        id: "app-infrastructure",
        index: "03",
        title: "Infrastructure & Energy",
        description:
          "Transmission towers, substation steel, railway electrification masts, highway guardrails, and solar PV trackers.",
        image: "/images/infrastructure-steel.jpg",
        alt: "Galvanized steel infrastructure and transmission lattice towers"
      }
    ] as ApplicationCategory[]
  },

  ctaBanner: {
    heading: "Have steel to protect?",
    description:
      "Share the basics of your project and start a practical conversation with our team.",
    primaryCta: "Request a quote",
    whatsappCta: "Chat on WhatsApp",
    backgroundImage: "/images/cta-banner-bg.jpg"
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Start your galvanizing project with us.",
    description:
      "Whether you need an immediate batch quote, guidance on venting design, or a reliable long-term galvanizing partner in Harohalli.",
    whatsappDirectNote: "Submitting this form connects directly with our team on WhatsApp for an immediate response."
  }
};
