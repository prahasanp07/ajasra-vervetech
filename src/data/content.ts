export interface TrustIndicator {
  label: string;
  sublabel?: string;
}

export interface ServiceFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  bulletPoints?: string[];
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

export interface ProcessTank {
  id: string;
  stepNumber: number;
  name: string;
  subname?: string;
  category: 'Chemical Pretreatment' | 'Flux & Preheating' | 'Galvanizing & Centrifuge' | 'Post-Treatment';
  bathType: string;
  colorFamily: 'blue' | 'red' | 'tan' | 'beige' | 'amber';
  tankColor: string;
  tankColorTop: string;
  tankColorSide: string;
  temperature: string;
  chemistry: string;
  dwellTime: string;
  purpose: string;
  details: string;
  isSpinning?: boolean;
}

export interface CapabilityCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface StatutoryCertificate {
  id: string;
  tag: string;
  badgeColor?: string;
  title: string;
  issuingAuthority: string;
  regNumber: string;
  validity: string;
  scope?: string;
  description: string;
  image: string;
  alt: string;
}

export interface StatutoryApprovalsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: StatutoryCertificate[];
}

export type SectorCategoryId = 'all' | 'energy' | 'construction' | 'metro' | 'engineering';

export interface SectorComponentItem {
  id: string;
  title: string;
  category: 'energy' | 'construction' | 'metro' | 'engineering';
  categoryLabel: string;
  tag: string;
  slideNumber: number;
  description: string;
  image: string;
  alt: string;
  specHighlights: string[];
}

export interface SectorInfo {
  id: SectorCategoryId;
  label: string;
  icon: string;
  slideRef: string;
  count: number;
  description: string;
}

export interface SectorShowcaseData {
  eyebrow: string;
  title: string;
  subtitle: string;
  sectors: SectorInfo[];
  components: SectorComponentItem[];
}

export interface IndustryItem {
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

export interface InfrastructureItem {
  id: string;
  number: string;
  title: string;
  highlight?: string;
  description: string;
  badge?: string;
  subItems?: string[];
}

export interface InfrastructureData {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: InfrastructureItem[];
  zincBath: {
    length: number;
    width: number;
    depth: number;
    formatted: string;
    description: string;
  };
  images: {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    badge: string;
  }[];
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
      "Specification led hot dip galvanizing for iron, steel and ferrous alloys. Operating temperatures up to 480°C providing double cathodic and barrier protection as per IS-2629.",
    locationBadge: "Serving energy sectors and engineering products.",
    primaryCta: "Start a project",
    secondaryCta: "Explore our process",
    heroImage: "/images/ajasra-interior-1.png",
    heroAlt: "Hot dip galvanizing facility with fabricated steel structure being immersed into zinc kettle"
  },

  trustStrip: [
    { label: "Double Protection", sublabel: "Cathodic sacrificial & barrier defense" },
    { label: "Higher Bond Strength", sublabel: "High metallurgical bond adhesion" },
    { label: "Up to 480°C Bath", sublabel: "Electrically heated molten zinc furnace" },
    { label: "Harohalli, Karnataka", sublabel: "IS-2629 aligned operations" }
  ] as TrustIndicator[],

  // Authentic Vision & Mission scraped verbatim from ajasravervetech.com
  visionMission: {
    eyebrow: "OUR CORE VALUES",
    title: "Our Vision & Mission",
    vision: {
      title: "Our Vision",
      text: "Our vision is to provide quality services to potential customers and prioritize customer satisfaction through environmentally friendly procedures, along with the help of team work and coordination to uphold human values at all points of time and inspiring each of us to believe that hard work and dedication can take us to great heights."
    },
    mission: {
      title: "Our Mission",
      text: "Our mission is to capture the potential market quickly and provide the best and quality service by inspiring and implementing good values."
    }
  },

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
      "We provide the service of hot dip galvanization to iron, steel and ferrous alloys to give them long-term resistant to corrosion, abrasion, environmental impacts, and wear by immersing components in pure molten zinc in accordance with IS-2629.",
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
        title: "Higher Bond Strength",
        description:
          "Metallurgical reaction produces durable zinc-iron alloy layers that are physically stronger than the base steel itself."
      },
      {
        id: "high-temp-bath",
        number: "03",
        title: "Controlled Zinc Bath (Up to 480°C)",
        description:
          "Electrically heated melting furnace maintaining uniform bath temperature for complete alloy layer development."
      },
      {
        id: "centrifuge-finishing",
        number: "04",
        title: "Centrifuge Excess Removal & Quench",
        description:
          "High-speed centrifuge spin to remove surplus zinc followed by passivation quench cooling to stabilize finish."
      },
      {
        id: "inspection-packing",
        number: "05",
        title: "Inspection & Packing",
        description:
          "Fettling process to carry-out imperfection on the HDG surface and Visual inspection."
      },
      {
        id: "inhouse-lab",
        number: "06",
        title: "In-House Lab Facility",
        description:
          "In-house lab facility testing as per customer requirement:",
        bulletPoints: [
          "IS-2629",
          "IS-3203",
          "IS-2633",
          "IS-6745",
          "As per customer requirement"
        ]
      }
    ] as ServiceFeature[]
  },

  // Authentic Infrastructure data scraped from slide
  infrastructure: {
    eyebrow: "PLANT & FACILITY SPECIFICATIONS",
    title: "Infrastructure",
    subtitle: "Engineered for high-throughput, specification-grade hot dip galvanizing at our Harohalli Industrial Area facility.",
    items: [
      {
        id: "infra-power",
        number: "01",
        title: "100 KVA of electrical HT power.",
        description: "Dedicated high-tension electrical substation yard supporting stable continuous power delivery for the electrically heated zinc furnace, drying plates, and high-capacity equipment.",
        badge: "100 KVA HT Substation"
      },
      {
        id: "infra-shed",
        number: "02",
        title: "5000 sft industrial shed with 1000 sft mezzanine floor.",
        description: "6,000 sq.ft. total covered industrial area engineered with dedicated high-clearance bays, material staging lanes, supervisor monitoring mezzanine, and integrated lab facilities.",
        badge: "5000 + 1000 sft Facility"
      },
      {
        id: "infra-capacity",
        number: "03",
        title: "2400 MT/annum hot dip galvanizing equipment with suitable utility equipment",
        description: "High-throughput galvanizing capacity backed by complete plant utilities ensuring seamless operations, emission control, and ISO standard compliance.",
        subItems: [
          "Wet scrubber (fume extraction hood & chimney 3m above roof level)",
          "Air compressor system",
          "Material handling equipment & overhead crane monorail",
          "Digital industrial weighing scale",
          "Fully equipped in-house laboratory"
        ],
        badge: "2400 MT/Annum Capacity"
      },
      {
        id: "infra-zinc-bath",
        number: "04",
        title: "Size of Zinc Bath – 1000 X 550 X 750 mm.",
        highlight: "1000 X 550 X 750 mm",
        description: "Electrically heated molten zinc kettle maintaining uniform operating temperature up to 480°C for complete metallurgical Zn-Fe alloy diffusion.",
        badge: "Zinc Kettle 1000x550x750 mm"
      },
      {
        id: "infra-storage",
        number: "05",
        title: "Dedicated storage for chemicals, Zinc, customer parts.",
        description: "Segregated and organized holding yards for pre-treatment chemical stocks, pure zinc ingots, incoming fabricated steel, and finished galvanized customer parts awaiting dispatch.",
        badge: "Dedicated Segregated Storage"
      }
    ],
    zincBath: {
      length: 1000,
      width: 550,
      depth: 750,
      formatted: "1000 X 550 X 750 mm",
      description: "Electrically heated molten zinc furnace with continuous temperature telemetry control."
    },
    images: [
      {
        src: "/images/ajasra-interior-2.png",
        alt: "5000 sft industrial shed with 1000 sft mezzanine floor, in-house laboratory, and dedicated storage",
        title: "5,000 sft Shed & 1,000 sft Mezzanine",
        subtitle: "High-bay industrial facility with mezzanine supervisor floor, in-house laboratory, and organized stores.",
        badge: "Plant Floor & Mezzanine"
      },
      {
        src: "/images/ajasra-interior-1.png",
        alt: "2400 MT/annum hot dip galvanizing equipment line, wet scrubber exhaust ducting, and monorail handling",
        title: "2,400 MT/Annum Galvanizing Line",
        subtitle: "Full continuous tank line with overhead crane monorail, zinc kettle, and wet scrubber fume extraction.",
        badge: "Galvanizing Tank Line"
      },
      {
        src: "/images/ajasra-interior-3.png",
        alt: "100 KVA electrical HT power transformer substation yard with safety fencing at Harohalli facility",
        title: "100 KVA Dedicated Electrical HT Power",
        subtitle: "Dedicated transformer yard ensuring uninterrupted power to the molten zinc furnace and utilities.",
        badge: "100 KVA HT Power Yard"
      }
    ]
  } as InfrastructureData,

  // Physical 12-tank / 12-stage Hot Dip Galvanizing sequence matching plant flow diagram
  processFlowTanks: [
    {
      id: "degreasing",
      stepNumber: 1,
      name: "Degreasing",
      category: "Chemical Pretreatment",
      bathType: "Caustic Degreasing Bath",
      colorFamily: "blue",
      tankColor: "#a3c9ea",
      tankColorTop: "#c0dcf2",
      tankColorSide: "#7faecf",
      temperature: "60°C – 80°C",
      chemistry: "Alkaline Caustic Soda (NaOH) solution",
      dwellTime: "5 to 8 Minutes",
      purpose: "Eliminate manufacturing oils, shop grease, and organic contaminants.",
      details: "Heated alkaline degreasing bath strips surface lubricants, drawing oils, cutting fluids, and organic residues to ensure clean bare steel ready for acid reaction."
    },
    {
      id: "rinsing-1",
      stepNumber: 2,
      name: "Rinsing",
      subname: "Post-Degreasing",
      category: "Chemical Pretreatment",
      bathType: "Rinse Tank 1",
      colorFamily: "blue",
      tankColor: "#4a95df",
      tankColorTop: "#7cb2eb",
      tankColorSide: "#3075b8",
      temperature: "Ambient",
      chemistry: "Overflowing fresh water",
      dwellTime: "1 to 2 Minutes",
      purpose: "Washes off residual caustic alkaline solution.",
      details: "Prevents caustic drag-over into the acid pickling tanks, protecting acid tank chemistry and preventing premature acid bath exhaustion."
    },
    {
      id: "pickling-1",
      stepNumber: 3,
      name: "Pickling",
      subname: "Stage 1 (Primary Scale Removal)",
      category: "Chemical Pretreatment",
      bathType: "Acid Pickling Tank 1",
      colorFamily: "red",
      tankColor: "#f24949",
      tankColorTop: "#f97979",
      tankColorSide: "#c93030",
      temperature: "Ambient",
      chemistry: "Inhibited Hydrochloric Acid (HCl 10–14%)",
      dwellTime: "5 to 12 Minutes (Part dependent)",
      purpose: "Primary chemical dissolution of heavy mill scale and superficial rust.",
      details: "Acid liquor reacts with and dissolves mill scale (mixed iron oxides FeO, Fe2O3, Fe3O4) and atmospheric oxidation from hot-rolled steel."
    },
    {
      id: "pickling-2",
      stepNumber: 4,
      name: "Pickling",
      subname: "Stage 2 (Deep Crevice Clearing)",
      category: "Chemical Pretreatment",
      bathType: "Acid Pickling Tank 2",
      colorFamily: "red",
      tankColor: "#f24949",
      tankColorTop: "#f97979",
      tankColorSide: "#c93030",
      temperature: "Ambient",
      chemistry: "Secondary Acid Bath (Refined Liquor)",
      dwellTime: "3 to 8 Minutes",
      purpose: "Deep penetration cleaning & 100% bare metallurgical surface exposure.",
      details: "Ensures complete oxide dissolution inside intricate crevices, hollow sections, weld fillets, and threaded areas without over-etching."
    },
    {
      id: "rinsing-2",
      stepNumber: 5,
      name: "Rinsing",
      subname: "Post-Acid Stage 1",
      category: "Chemical Pretreatment",
      bathType: "Rinse Tank 2",
      colorFamily: "blue",
      tankColor: "#4a95df",
      tankColorTop: "#7cb2eb",
      tankColorSide: "#3075b8",
      temperature: "Ambient",
      chemistry: "Fresh water rinse",
      dwellTime: "1 to 2 Minutes",
      purpose: "Primary flush of free acid and dissolved iron salts.",
      details: "Thoroughly washes off residual acid liquor and dissolved iron chlorides from fabricated steel pockets, minimizing chemical transfer."
    },
    {
      id: "rinsing-3",
      stepNumber: 6,
      name: "Rinsing",
      subname: "Post-Acid Stage 2 (Clean Finishing)",
      category: "Chemical Pretreatment",
      bathType: "Rinse Tank 3",
      colorFamily: "blue",
      tankColor: "#4a95df",
      tankColorTop: "#7cb2eb",
      tankColorSide: "#3075b8",
      temperature: "Ambient",
      chemistry: "Cascading high-purity fresh water",
      dwellTime: "1 to 2 Minutes",
      purpose: "Cascading clean rinse to eliminate acid carryover into flux bath.",
      details: "Secondary clean water rinse ensures zero iron chloride drag-over into the hot fluxing tank, directly reducing zinc kettle dross generation."
    },
    {
      id: "hot-fluxing",
      stepNumber: 7,
      name: "Hot Fluxing",
      category: "Flux & Preheating",
      bathType: "Hot Flux Tank",
      colorFamily: "tan",
      tankColor: "#e5aa76",
      tankColorTop: "#f2c69e",
      tankColorSide: "#b87f4e",
      temperature: "65°C – 80°C",
      chemistry: "Zinc Ammonium Chloride (ZnCl₂ · 2NH₄Cl)",
      dwellTime: "1 to 3 Minutes",
      purpose: "Deposits protective flux film and inhibits airborne re-oxidation.",
      details: "Chemical flux dissolves any micro-oxidation that forms after rinsing and leaves a protective crystalline salt film on the clean steel before zinc dipping."
    },
    {
      id: "drying",
      stepNumber: 8,
      name: "Drying",
      category: "Flux & Preheating",
      bathType: "Hot Drying Plate & Oven",
      colorFamily: "beige",
      tankColor: "#f5e4d2",
      tankColorTop: "#fbf1e6",
      tankColorSide: "#cfbda7",
      temperature: "100°C – 120°C",
      chemistry: "Electrically heated air & hot drying table",
      dwellTime: "3 to 6 Minutes",
      purpose: "Complete moisture removal and steel pre-warming.",
      details: "Removes all surface water to avoid dangerous molten zinc spattering or steam explosions upon immersion, while preheating steel to minimize thermal shock in the zinc kettle."
    },
    {
      id: "zinc-bath",
      stepNumber: 9,
      name: "Zinc Bath",
      category: "Galvanizing & Centrifuge",
      bathType: "Molten Zinc Kettle",
      colorFamily: "amber",
      tankColor: "#ebb076",
      tankColorTop: "#f4c99e",
      tankColorSide: "#bc814d",
      temperature: "445°C – 480°C",
      chemistry: "High-Grade Molten Zinc (>99.9% Pure Zn)",
      dwellTime: "Until bubbling ceases & temperature equilibrates",
      purpose: "Solid-liquid metallurgical reaction creating Zn-Fe alloy layers.",
      details: "Steel is immersed in pure molten zinc. A metallurgical diffusion reaction builds Gamma, Delta, and Zeta alloy layers, topped with pure Eta zinc, achieving ~3600 psi adhesion and double cathodic + barrier defense."
    },
    {
      id: "spinning",
      stepNumber: 10,
      name: "Spinning",
      subname: "Centrifuge Excess Removal",
      category: "Galvanizing & Centrifuge",
      bathType: "High-Speed Centrifuge Unit",
      colorFamily: "amber",
      tankColor: "#d48843",
      tankColorTop: "#e5aa76",
      tankColorSide: "#a86427",
      temperature: "Immediate Post-Lift",
      chemistry: "High-G Centrifugal Rotation",
      dwellTime: "30 to 60 Seconds",
      purpose: "Spins off surplus molten zinc for fasteners, threaded hardware, and small assemblies.",
      details: "Immediately upon lift-out, fasteners and small components are transferred into a high-speed centrifuge basket where centrifugal force expels excess molten zinc, preventing lumps and ensuring clean threads.",
      isSpinning: true
    },
    {
      id: "cooling",
      stepNumber: 11,
      name: "Cooling",
      subname: "Quench Tank",
      category: "Post-Treatment",
      bathType: "Quench Cooling Tank",
      colorFamily: "blue",
      tankColor: "#4a95df",
      tankColorTop: "#7cb2eb",
      tankColorSide: "#3075b8",
      temperature: "Ambient to 40°C",
      chemistry: "Water Quench / Conditioned De-Oxidant bath",
      dwellTime: "1 to 3 Minutes",
      purpose: "Arrests zinc-iron reaction and rapidly solidifies zinc coating.",
      details: "Rapid cooling stops continuous alloy formation (preventing brittle over-growth) and enables swift, damage-free handling and fettling."
    },
    {
      id: "passivation",
      stepNumber: 12,
      name: "Passivation",
      category: "Post-Treatment",
      bathType: "Chemical Passivation Bath",
      colorFamily: "tan",
      tankColor: "#e5aa76",
      tankColorTop: "#f2c69e",
      tankColorSide: "#b87f4e",
      temperature: "Ambient",
      chemistry: "Dichromate / Eco-friendly Passivation Solution",
      dwellTime: "30 to 60 Seconds",
      purpose: "Inhibits wet storage stain (white rust) during storage and logistics.",
      details: "Deposits a passivating barrier film on the fresh zinc surface that protects galvanized components against humidity, moisture, and white rust formation during transport and warehouse storage."
    }
  ] as ProcessTank[],

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
        "Prepared steel is immersed in pure molten zinc up to 480°C until temperature equilibrium is achieved, followed by excess zinc removal and quenching.",
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

  statutoryApprovals: {
    eyebrow: "STATUTORY APPROVALS & COMPLIANCE",
    title: "Statutory Approvals & Certificates Received",
    subtitle: "Officially certified, audited, and compliant with ISO 9001:2015 quality standards, Government of India MSME schemes, and statutory taxation authorities.",
    items: [
      {
        id: "iso-9001-2015",
        tag: "ISO 9001:2015",
        badgeColor: "var(--color-lime)",
        title: "ISO 9001:2015 Quality Management",
        issuingAuthority: "TÜV INDIA / TÜV NORD GROUP (NABCB & IAF)",
        regNumber: "Certificate No: QM 08 01944 | Audit: Q 10811/2021",
        validity: "Valid until 13.06.2027 (Initial: 14.06.2021)",
        scope: "Provision of Hot Dip Galvanizing Process",
        description: "Accredited quality management system for precision hot dip galvanizing of ferrous products conforming to international ISO standards.",
        image: "/images/certifications/ajasra-cert-1.png",
        alt: "TÜV NORD ISO 9001:2015 Quality Certificate for Ajasra Vervetech"
      },
      {
        id: "msme-zed-bronze",
        tag: "MSME ZED BRONZE",
        badgeColor: "#F59E0B",
        title: "Zero Defect Zero Effect (ZED) Bronze",
        issuingAuthority: "Ministry of MSME, Government of India",
        regNumber: "Cert No: 01022023_026570 | UDYAM-KR-29-0000665",
        validity: "Issued: 01-Feb-2023 (3 Years Validity)",
        scope: "Sustainable Manufacturing & Environmental Conformance",
        description: "Awarded under the MSME Sustainable (ZED) Certification Scheme demonstrating defect-free production and minimal environmental impact.",
        image: "/images/certifications/ajasra-cert-3.png",
        alt: "MSME ZED Bronze Sustainable Certification Certificate"
      },
      {
        id: "gstin-pan",
        tag: "GSTIN & PAN REGISTRATIONS",
        badgeColor: "var(--color-copper)",
        title: "GSTIN & Income Tax PAN",
        issuingAuthority: "Government of India & Commercial Taxes Karnataka",
        regNumber: "GSTIN: 29ABSFA8302N1ZS | PAN: ABSFA8302N",
        validity: "Incorporated / Active from October 2020",
        scope: "Form GST REG-06 & Income Tax Permanent Account Number",
        description: "Statutory goods & service tax registration (LVO 155 - Ramanagara) and corporate PAN for seamless industrial invoicing and contracting.",
        image: "/images/certifications/ajasra-gst-pan.png",
        alt: "Form GST REG-06 and PAN Card Certificate for Ajasra Vervetech"
      },
      {
        id: "firm-registration",
        tag: "FIRM REGISTRATION",
        badgeColor: "#38BDF8",
        title: "Registrar of Firms (Govt of Karnataka)",
        issuingAuthority: "Office of the Registrar of Firms, Ramanagara",
        regNumber: "Firm No: RMG-F16-2020-21 (Form C 10 A)",
        validity: "Registered on 06-Oct-2020",
        scope: "Section 58(1) of Indian Partnership Act, 1932",
        description: "Acknowledged and registered partnership firm under the Indian Partnership Act, 1932 for industrial manufacturing and galvanizing operations.",
        image: "/images/certifications/ajasra-registration-1.png",
        alt: "Certificate of Registration of Firm from Registrar of Firms Ramanagara"
      },
      {
        id: "udyam-registration",
        tag: "UDYAM MSME",
        badgeColor: "var(--color-lime)",
        title: "Udyam Registration Certificate",
        issuingAuthority: "Ministry of Micro, Small & Medium Enterprises, GoI",
        regNumber: "Udyam Reg No: UDYAM-KR-29-0000665",
        validity: "Registered on 28-Oct-2020",
        scope: "Manufacturing Enterprise - NIC 32909 (Other Articles)",
        description: "Official Government of India MSME enterprise registration certifying manufacturing operations at Plot 274-D/B, Harohalli Industrial Area.",
        image: "/images/certifications/ajasra-udyam.png",
        alt: "Government of India Udyam Registration Certificate"
      }
    ] as StatutoryCertificate[]
  } as StatutoryApprovalsData,

  capabilities: {
    eyebrow: "STATUTORY APPROVALS & COMPLIANCE",
    heading: "Statutory Approvals & Certificates Received",
    subheadline: "Officially certified, audited, and compliant with ISO 9001:2015 quality standards, Government of India MSME schemes, and statutory taxation authorities.",
    items: [
      {
        id: "iso-9001-2015",
        tag: "ISO 9001:2015",
        title: "ISO 9001:2015 Quality Management",
        description:
          "TÜV NORD / TÜV INDIA audited and certified quality management system accredited by NABCB & IAF for Hot Dip Galvanizing processes (Reg: QM 08 01944).",
        image: "/images/certifications/ajasra-cert-1.png",
        alt: "TÜV NORD ISO 9001:2015 Certificate"
      },
      {
        id: "msme-zed-bronze",
        tag: "MSME ZED Bronze",
        title: "Zero Defect Zero Effect (ZED)",
        description:
          "Awarded by Ministry of MSME, Govt. of India under Sustainable ZED Certification Scheme for defect-free and environmentally responsible manufacturing.",
        image: "/images/certifications/ajasra-cert-3.png",
        alt: "MSME ZED Bronze Certificate"
      },
      {
        id: "gstin-pan",
        tag: "GSTIN & PAN",
        title: "GSTIN & Income Tax PAN",
        description:
          "Form GST REG-06 (29ABSFA8302N1ZS) from Commercial Taxes Karnataka and PAN (ABSFA8302N) from Income Tax Department, Government of India.",
        image: "/images/certifications/ajasra-gst-pan.png",
        alt: "GST Registration Certificate and PAN Card"
      },
      {
        id: "firm-registration",
        tag: "Firm Registration",
        title: "Govt. of Karnataka Firm Registration",
        description:
          "Registered under Section 58(1) of Indian Partnership Act, 1932 by Office of the Registrar of Firms, Ramanagara (Firm No: RMG-F16-2020-21).",
        image: "/images/certifications/ajasra-registration-1.png",
        alt: "Registrar of Firms Form C Certificate"
      },
      {
        id: "udyam-registration",
        tag: "Udyam MSME",
        title: "Govt. of India Udyam MSME",
        description:
          "Certified Manufacturing Micro Enterprise under Ministry of MSME (UDYAM-KR-29-0000665) at Plot 274-D/B, Harohalli Industrial Area Phase 2.",
        image: "/images/certifications/ajasra-udyam.png",
        alt: "Udyam Registration Certificate"
      }
    ] as CapabilityCard[]
  },

  featureSplit: {
    eyebrow: "WHY AJASRA VERVETECH",
    heading: "The right finish starts with the right conversation.",
    description:
      "We begin by understanding your material, dimensions, quantity, handling requirements, and project context. That helps create a smoother path from incoming steel to finished protection.",
    image: "/images/ajasra-front-1.png",
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

  // Exact authentic 7 industries cater list scraped verbatim from ajasravervetech.com
  industriesWeCater: {
    eyebrow: "INDUSTRIES WE CATER",
    heading: "Industries We Cater",
    subheadline:
      "We provide industries with high quality customized ISO material standard precision galvanizing services in accordance with IS-2629.",
    items: [
      {
        id: "ind-energy",
        index: "01",
        title: "Energy",
        description:
          "As an alternate source of energy, solar cells are more prone to external elements of rust, dust and decay. Galvanization helps in utilizing all of the energy provided by the solar cells.",
        image: "/images/infrastructure-steel.jpg",
        alt: "Solar mounting purlins and renewable energy steel structures"
      },
      {
        id: "ind-general-engineering",
        index: "02",
        title: "General Engineering",
        description:
          "Engines, machines and structures wear out from time to time. It is advisable to keep them protected through galvanizing.",
        image: "/images/steel-fabrication.jpg",
        alt: "Galvanized machinery, frames, and engineered steel assemblies"
      },
      {
        id: "ind-agricultural",
        index: "03",
        title: "Agricultural Equipments",
        description:
          "Farming equipment, irrigation systems, grain systems are open to the atmosphere and in desperate need of prevention of rust.",
        image: "/images/infrastructure-steel.jpg",
        alt: "Galvanized agricultural structures and irrigation pipe components"
      },
      {
        id: "ind-construction",
        index: "04",
        title: "Construction",
        description:
          "Street furniture, building frameworks, steel frames, balconies, verandahs, staircases, ladders and walkways are susceptible to oxygen and need to be coated with a layer of galvanized steel to make them more durable and safer.",
        image: "/images/structural-steel.jpg",
        alt: "Galvanized structural steel frameworks and building frames"
      },
      {
        id: "ind-hardwares",
        index: "05",
        title: "Hardwares",
        description:
          "We undertake galvanizing services for Pole line hardware, nuts and bolts, washers, hinges brackets, and other essential tools and equipment, fasteners, among others.",
        image: "/images/zinc-kettle-dip.jpg",
        alt: "Centrifuge hot dip galvanized pole line hardware and fasteners"
      },
      {
        id: "ind-automotive",
        index: "06",
        title: "Automotive",
        description:
          "Skeletal body of the vehicles, Bumpers and Reinforcements, Door Beams and Seatings, Chassis and Frames are vulnerable to rust and need to be galvanized periodically.",
        image: "/images/facility-logistics.jpg",
        alt: "Automotive chassis, brackets, and tubular frame galvanizing"
      },
      {
        id: "ind-shipping",
        index: "07",
        title: "Shipping",
        description:
          "Gear and ring locks, boat trailers, connecting rods, anchor lifting shackle are liable to corrosion. Help prevent and protect them through our galvanizing services.",
        image: "/images/galvanizing-hero.jpg",
        alt: "Marine hardware, boat trailers, and anchor lifting shackles"
      }
    ] as IndustryItem[]
  },

  sectorShowcase: {
    eyebrow: "PROVEN SECTOR DELIVERABLES",
    title: "Components Galvanized Across Key Industries",
    subtitle: "Real photographed assemblies, hardware, and structural steel galvanized to Indian Standard IS-2629 at our Harohalli plant for Energy, Metro, Construction, and General Engineering sectors.",
    sectors: [
      {
        id: 'all',
        label: 'All Components',
        icon: '🏭',
        slideRef: 'Slides 8–12',
        count: 18,
        description: 'Complete gallery of precision galvanized ferrous parts, hardware, and fabricated assemblies.'
      },
      {
        id: 'energy',
        label: 'Energy Sector',
        icon: '⚡',
        slideRef: 'Slide 8',
        count: 4,
        description: 'High-voltage transmission line hardware, porcelain insulator pins, drop-forged socket eyes, and substation switchgear brackets.'
      },
      {
        id: 'construction',
        label: 'Construction',
        icon: '🏗️',
        slideRef: 'Slide 9',
        count: 3,
        description: 'Scaffolding hook clamps, formwork hardware, serrated channel saddle clamps, and pre-engineered building (PEB) purlin cleats.'
      },
      {
        id: 'metro',
        label: 'Metro Rail & Transit',
        icon: '🚇',
        slideRef: 'Slide 11',
        count: 4,
        description: 'Underground tunnel cable tray cantilever racks, curved tunnel lining wall brackets, and trackside signaling structural beams.'
      },
      {
        id: 'engineering',
        label: 'General Engineering',
        icon: '⚙️',
        slideRef: 'Slides 10 & 12',
        count: 7,
        description: 'Heavy structural base plates, machinery panel framing, welded cantilever arms, helical ground anchors, and mounting clamps.'
      }
    ],
    components: [
      // Slide 8: Energy Sector
      {
        id: 'energy-insulator-hardware',
        title: 'Ball & Socket Insulator Hardware',
        category: 'energy',
        categoryLabel: 'Energy Sector',
        tag: 'Transmission Line',
        slideNumber: 8,
        description: 'High-voltage porcelain and composite insulator string ball & socket pin fittings with uniform sacrificial zinc coating preventing galvanic pitting.',
        image: '/images/components/energy-insulator-hardware.png',
        alt: 'Galvanized ball and socket insulator pins and caps for energy transmission lines',
        specHighlights: ['Uniform zinc coating', 'Precision pin fitment', 'High-tensile forged steel']
      },
      {
        id: 'energy-socket-clevis-eyes',
        title: 'Socket Eyes & Clevis Fittings',
        category: 'energy',
        categoryLabel: 'Energy Sector',
        tag: 'Tower Hardware',
        slideNumber: 8,
        description: 'Heavy-duty drop-forged socket eyes, clevis eyes, and Y-clevis connectors for transmission tower cross-arms and earth-wire suspension.',
        image: '/images/components/energy-socket-clevis-eyes.jpg',
        alt: 'Galvanized socket eyes, clevis eyes and Y-clevis fittings for electrical towers',
        specHighlights: ['Drop forged steel', 'Centrifuge spin finishing', 'IS-2629 compliant']
      },
      {
        id: 'energy-forged-clevis-link',
        title: 'Forged Insulator Clevis Link',
        category: 'energy',
        categoryLabel: 'Energy Sector',
        tag: 'Substation Fitting',
        slideNumber: 8,
        description: 'Precision dual-eye forged tension link designed for high mechanical load rating in outdoor substation switchyards and distribution gantries.',
        image: '/images/components/energy-forged-clevis-link.jpg',
        alt: 'Galvanized forged clevis link for electrical substations',
        specHighlights: ['Heavy mechanical loading', 'Smooth metallic finish', 'Salt-fog resistant']
      },
      {
        id: 'energy-transformer-bracket',
        title: 'Transformer & Switchgear Mounting Bracket',
        category: 'energy',
        categoryLabel: 'Energy Sector',
        tag: 'Switchgear & Power',
        slideNumber: 8,
        description: 'Fabricated heavy-gauge steel connector bracket with slotted mounting apertures for outdoor distribution transformers and electrical busbars.',
        image: '/images/components/energy-transformer-bracket.jpg',
        alt: 'Galvanized transformer and electrical switchgear mounting bracket',
        specHighlights: ['Heavy plate gauge', 'Slotted tolerance holes', 'Complete interior hole coating']
      },

      // Slide 9: Construction
      {
        id: 'construction-formwork-clamps',
        title: 'Scaffolding & Formwork Clamps',
        category: 'construction',
        categoryLabel: 'Construction',
        tag: 'Formwork & Rigging',
        slideNumber: 9,
        description: 'Forged scaffolding hook clamps and formwork locking connectors with smooth zinc finishes ensuring reliable on-site mechanical locking.',
        image: '/images/components/construction-formwork-clamps.png',
        alt: 'Galvanized scaffolding and formwork hook clamps',
        specHighlights: ['High impact resistance', 'Reusable on-site', 'Smooth anti-galling finish']
      },
      {
        id: 'construction-beam-saddle-clamp',
        title: 'Serrated Channel Saddle Clamp',
        category: 'construction',
        categoryLabel: 'Construction',
        tag: 'Structural Framing',
        slideNumber: 9,
        description: 'Heavy folded steel saddle clamp with serrated gripping teeth for secure slip-resistant structural member attachment without on-site welding.',
        image: '/images/components/construction-beam-saddle-clamp.jpg',
        alt: 'Galvanized serrated structural beam channel saddle clamp',
        specHighlights: ['Serrated grip edges', 'Pre-punched bolt slots', 'Zero on-site welding']
      },
      {
        id: 'construction-purlin-cleat-bracket',
        title: 'Slotted Purlin Cleat & Facade Bracket',
        category: 'construction',
        categoryLabel: 'Construction',
        tag: 'PEB & Facades',
        slideNumber: 9,
        description: 'Pre-engineered building (PEB) purlin cleat with curved adjustment slots allowing thermal expansion and precise alignment of roof and wall framing.',
        image: '/images/components/construction-purlin-cleat-bracket.jpg',
        alt: 'Galvanized purlin cleat and facade adjustment bracket',
        specHighlights: ['Thermal expansion slots', 'PEB structural fitment', 'Edge-to-edge zinc barrier']
      },

      // Slide 11: Metro
      {
        id: 'metro-cable-tray-cantilever-rack',
        title: 'Multi-Tier Tunnel Cable Tray Rack',
        category: 'metro',
        categoryLabel: 'Metro & Rail Transit',
        tag: 'Tunnel Cabling',
        slideNumber: 11,
        description: 'Curved structural vertical spine with 4-tier welded cantilever arms designed for supporting high-voltage traction power and signaling cables along curved metro tunnel walls.',
        image: '/images/components/metro-cable-tray-cantilever-rack.jpg',
        alt: 'Galvanized multi-tier curved metro tunnel cable tray cantilever support rack',
        specHighlights: ['Curved tunnel profile match', 'Heavy cantilever welds', 'Subterranean humidity resistant']
      },
      {
        id: 'metro-tunnel-signaling-beams',
        title: 'Trackside Signaling & Cable Bracket Beams',
        category: 'metro',
        categoryLabel: 'Metro & Rail Transit',
        tag: 'Track Infrastructure',
        slideNumber: 11,
        description: 'Heavy steel channel brackets with end mounting flanges and pre-slotted fixing holes for trackside signaling, electrical conduits, and walkway gratings.',
        image: '/images/components/metro-tunnel-signaling-beams.jpg',
        alt: 'Galvanized trackside signaling beams and cable brackets for metro rail',
        specHighlights: ['Multiple length tiers', 'Continuous dip coating', 'High vibration tolerance']
      },
      {
        id: 'metro-curved-tunnel-bracket',
        title: 'Curved Tunnel Lining Wall Bracket',
        category: 'metro',
        categoryLabel: 'Metro & Rail Transit',
        tag: 'Underground Transit',
        slideNumber: 11,
        description: 'Radius-formed backing plate welded to an angle cantilever arm, conforming precisely to the curvature of precast concrete tunnel segments.',
        image: '/images/components/metro-curved-tunnel-bracket.jpg',
        alt: 'Galvanized radius curved tunnel lining wall support bracket',
        specHighlights: ['Precast lining radius fit', 'Slotted anchor bolt holes', 'Double cathodic protection']
      },
      {
        id: 'metro-vertical-cable-rack',
        title: '3-Tier Straight Wall Cable Rack',
        category: 'metro',
        categoryLabel: 'Metro & Rail Transit',
        tag: 'Substation & Station',
        slideNumber: 11,
        description: 'Straight vertical mounting bracket featuring three tiered cantilever support arms for electrical equipment rooms, station shafts, and viaduct cable routing.',
        image: '/images/components/metro-vertical-cable-rack.jpg',
        alt: 'Galvanized 3-tier vertical cable support rack for metro transit',
        specHighlights: ['Straight shaft installation', 'Turned-up cable retention lips', '100% zinc weld coverage']
      },

      // Slides 10 & 12: General Engineering
      {
        id: 'engineering-base-gusset-plates',
        title: 'Heavy Base Plates & Ridge Brackets',
        category: 'engineering',
        categoryLabel: 'General Engineering',
        tag: 'Heavy Steelwork',
        slideNumber: 10,
        description: 'Thick-plate structural column base plates with precision bored anchor bolt openings and folded structural apex brackets, hot dip galvanized with uniform zinc flow.',
        image: '/images/components/engineering-base-gusset-plates.png',
        alt: 'Galvanized heavy base plates and stamped structural ridge brackets',
        specHighlights: ['Thick plate galvanizing', 'Unclogged precision holes', 'High load-bearing capacity']
      },
      {
        id: 'engineering-panel-framing-assembly',
        title: 'Machinery Panel Framing Fabrication',
        category: 'engineering',
        categoryLabel: 'General Engineering',
        tag: 'Enclosures & Frames',
        slideNumber: 10,
        description: 'Complete welded perimeter enclosure frame with inner angle reinforcements, mounting flanges, and perforated step brackets for heavy machinery housing.',
        image: '/images/components/engineering-panel-framing-assembly.png',
        alt: 'Galvanized welded panel frame assembly for industrial machinery',
        specHighlights: ['Complex welded assembly', 'Vented hollow sections', 'Smooth spangle appearance']
      },
      {
        id: 'engineering-cantilever-arms-duct',
        title: 'Welded Cantilever Arms & Transition Chutes',
        category: 'engineering',
        categoryLabel: 'General Engineering',
        tag: 'Industrial Ducting',
        slideNumber: 10,
        description: 'Heavy triangular cantilever bracket arms alongside smooth-radius conical transition duct chutes for industrial ventilation and bulk material handling.',
        image: '/images/components/engineering-cantilever-arms-duct.png',
        alt: 'Galvanized triangular cantilever arms and transition chute ducting',
        specHighlights: ['Triangular truss strength', 'Formed curved sheet coating', 'Abrasion resistant']
      },
      {
        id: 'engineering-channel-beam-bracket',
        title: 'Heavy Channel Beam Clevis Bracket',
        category: 'engineering',
        categoryLabel: 'General Engineering',
        tag: 'Equipment Mounts',
        slideNumber: 12,
        description: 'Channel section base welded to dual vertical clevis plates and gusset stiffeners with large pin bores for heavy industrial equipment mounting.',
        image: '/images/components/engineering-channel-beam-bracket.jpg',
        alt: 'Galvanized heavy steel channel beam bracket with dual clevis plates',
        specHighlights: ['Heavy dual clevis ears', 'Thick structural channel', 'Clean pin bore tolerances']
      },
      {
        id: 'engineering-clamping-straps-brackets',
        title: 'Clamping Straps, Z-Brackets & U-Clamps',
        category: 'engineering',
        categoryLabel: 'General Engineering',
        tag: 'Mounting Hardware',
        slideNumber: 12,
        description: 'Assortment of slotted tie bars, Z-brackets, pipe U-clamps, and spacer plates finished in centrifuge hot dip galvanizing for burr-free threads and slots.',
        image: '/images/components/engineering-clamping-straps-brackets.jpg',
        alt: 'Galvanized structural clamping straps, Z-brackets, and mounting clips',
        specHighlights: ['Centrifuge spin cleaned', 'Multiple bracket geometries', 'Thread clearance preserved']
      },
      {
        id: 'engineering-helical-earth-anchors',
        title: 'Helical Earth Anchors & Guy Rods',
        category: 'engineering',
        categoryLabel: 'General Engineering',
        tag: 'Utility Grounding',
        slideNumber: 12,
        description: 'Extended steel tie rods with welded helical earth auger blades and forged eye heads for utility pole guying, solar field foundations, and civil earth retention.',
        image: '/images/components/engineering-helical-earth-anchors.jpg',
        alt: 'Galvanized helical earth anchor screw rods with forged eye heads',
        specHighlights: ['Helical auger blade coating', 'Sub-soil corrosion resistance', 'Forged eye tensile integrity']
      },
      {
        id: 'engineering-adjustable-mounting-strap',
        title: 'Adjustable Multi-Slot Mounting Strap',
        category: 'engineering',
        categoryLabel: 'General Engineering',
        tag: 'Custom Brackets',
        slideNumber: 12,
        description: 'Heavy stamped angled bracket strap with multi-position locking notches and bolt apertures for adjustable field installations.',
        image: '/images/components/engineering-adjustable-mounting-strap.jpg',
        alt: 'Galvanized adjustable angled mounting strap bracket with locking notches',
        specHighlights: ['Multi-slot adjustment', 'Formed angle rigidity', 'Clean notch profiles']
      }
    ] as SectorComponentItem[]
  } as SectorShowcaseData,

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
      "Whether you need an immediate batch quote, guidance on venting design, or a reliable long-term galvanizing partner in Harohalli in accordance with IS-2629.",
    whatsappDirectNote: "Submitting this form connects directly with our team on WhatsApp for an immediate response."
  }
};
