export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  client: string;
  products: string[];
  excerpt: string;
  description: string[];
  caseStudy?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  detailEmbed?: {
    type: "youtube";
    permalink: string;
  };
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    slug: "davido-timeless-concert-access-control",
    title: "Davido Timeless Concert Access Control",
    client: "Davido Timeless Concert (Event Organizers)",
    products: [
      "Access Control System (Turnstiles)",
      "Credential Verification",
      "Crowd Control Setup",
    ],
    excerpt:
      "Balosh delivered access control for the Timeless concert, managing secure entry for over 22,000 attendees.",
    description: [
      "Balosh Integrated Services provided access control solutions for the Timeless concert, managing entry for over 22,000 attendees.",
      "The deployment included controlled entry systems and verification processes to ensure secure and organized crowd movement throughout the event.",
      "This project demonstrates Balosh's capability in handling large scale, high traffic events with precision and efficiency.",
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/wect-ogzIpE",
    },
  },
  {
    id: 2,
    slug: "dangote-refinery-commissioning-event-security",
    title: "Dangote Refinery Commissioning Event Security",
    client: "Dangote Refinery (Commissioning Event)",
    products: ["Access Control Rental Systems", "Event Entry Management Solutions"],
    excerpt:
      "Balosh deployed rental access control for the Dangote Refinery commissioning, enforcing strict zone level authorization.",
    description: [
      "Balosh deployed its access control rental solution for the commissioning of the Dangote Refinery, one of the most high profile industrial events in Nigeria.",
      "The system ensured strict access regulation, enabling only authorized personnel and guests into designated zones.",
      "This highlights Balosh's ability to deliver secure and reliable solutions for high security, government level and industrial events.",
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/etl3fQyHANA",
    },
  },
  {
    id: 3,
    slug: "zenith-bank-plc",
    title: "Zenith Bank PLC",
    client: "Zenith Bank",
    products: ["Access Control Rental Systems", "Event Entry Management Solutions"],
    excerpt:
      "Balosh delivered access control for the Zenith Bank Tech Fair 2025, managing secure entry for over attendees.",
      description: [
        "Balosh Integrated Services provided access control solutions for the Zenith Bank Tech Fair 2025, managing entry for attendees.",
        "The deployment included controlled entry systems and verification processes to ensure secure and organized crowd movement throughout the event.",
        "This project demonstrates Balosh's capability in handling large scale, high traffic events with precision and efficiency.",
      ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/-ZuAY30bHsk?feature=share",
    },
  },
  {
    id: 4,
    slug: "polo-club",
    title: "Polo Club",
    client: "Polo Club",
    products: ["Car Park Management System", "Toll Road Management"],
    excerpt:
      "Live at the NPA Lagos International Polo Tournament, powering secure, seamless access from the very first point of entry. Because every great event starts with intelligent access control.",
    description: [
      "Live at the NPA Lagos International Polo Tournament, powering secure, seamless access from the very first point of entry. Because every great event starts with intelligent access control.",
      "Balosh implemented a robust toll management solution for the NPA Lagos International Polo Tournament to facilitate controlled and efficient vehicle access. The system ensured accurate toll collection, reduced congestion at entry points, and optimized traffic movement, contributing to a well-organized and professionally managed event.",
      "This project demonstrates our ability to deploy scalable toll management solutions for large-scale events, helping organizers improve operational efficiency while enhancing the visitor experience."
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/e8z4VnabDPM?feature=share",
    },
  },
  {
    id: 5,
    slug: "muson-centre",
    title: "Muson Centre",
    client: "Musical Society of Nigeria: MUSON",
    products: ["Car Park Management System", "Toll Road Management"],
    excerpt:
      "Smart Toll Management at MUSON Centre.",
    description: [
      "Smart Toll Management at MUSON Centre.",
      "Balosh implemented a robust toll management solution for the MUSON Centre to facilitate controlled and efficient vehicle access. The system ensured accurate toll collection, reduced congestion at entry points, and optimized traffic movement, contributing to a well-organized and professionally managed event.",
      "This project demonstrates our ability to deploy scalable toll management solutions for large-scale events, helping organizers improve operational efficiency while enhancing the visitor experience.",
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/N5LsPNnBzVI?feature=share",
    },
  },
  {
    id: 6,
    slug: "pitstop-village-ikoyi",
    title: "Pitstop Village Ikoyi",
    client: "Pitstop Village Ikoyi",
    products: [
      "Access Control System (Turnstiles)",
      "Credential Verification",
      "Crowd Control Setup",
    ],
    excerpt:
    "Balosh delivered access control for Pitstop Village Ikoyi, managing secure entry for attendees.",
    description: [
      "Balosh deployed its access control rental solution for the commissioning of the Pitstop Village Ikoyi.",
      "The system ensured strict access regulation, enabling only authorized personnel and guests into designated zones.",
      "This highlights Balosh's ability to deliver secure and reliable solutions for high security, government level and industrial events.",
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/URJyeyyVlx8?feature=share",
    },
  },
  // {
  //   id: 7,
  //   slug: "osborne-foreshore-estate-security-upgrade",
  //   title: "Osborne Foreshore Estate Security Upgrade",
  //   client: "Osborne Foreshore Estate",
  //   products: ["Estate Access Control Systems", "Entrance Security Infrastructure"],
  //   excerpt:
  //     "Balosh upgraded estate entrance security and improved resident and visitor monitoring.",
  //   description: [
  //     "Balosh upgraded the entrance infrastructure of Osborne Foreshore Estate, a high end residential community.",
  //     "The solution improved access control, enhanced security, and ensured better monitoring of residents and visitors within the estate.",
  //     "This project further establishes Balosh as a trusted provider for premium residential developments.",
  //   ],
  // },
  {
    id: 8,
    slug: "landmark-access-control-entry-management",
    title: "Landmark Access Control and Entry Management",
    client: "Landmark Group",
    products: ["Turnstile Systems", "Access Control Infrastructure", "Crowd Entry Management"],
    excerpt:
      "Balosh deployed turnstile based access control at Landmark to improve security and visitor flow in a high traffic venue.",
    description: [
      "Balosh Integrated Services deployed access control and entry management solutions at Landmark, a major lifestyle and entertainment destination in Lagos.",
      "The installation focused on regulating pedestrian access using turnstile systems to ensure controlled entry while maintaining smooth visitor flow.",
      "The solution enhanced security, reduced unauthorized access, and improved overall crowd management efficiency within the facility.",
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/_v4Ljo7Fzv0",
    },
  },
  {
    id: 9,
    slug: "greensprings-school-secure-access-control",
    title: "Greensprings School Secure Access Control System",
    client: "Greensprings School",
    products: ["Turnstile Access Control", "Biometric and Controlled Entry Systems", "Student and Staff Access Management"],
    excerpt:
      "Balosh implemented controlled campus entry to strengthen safety and administrative oversight.",
    description: [
      "Balosh Integrated Services implemented a secure access control solution for Greensprings School, a leading private educational institution in Lagos.",
      "The project deployed controlled entry systems to ensure that only authorized students, staff, and visitors gain access to the premises.",
      "The system supports structured movement and monitoring across the school environment, improving safety and administrative control.",
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/Vwoy10T-HAs",
    },
  },
  // {
  //   id: 10,
  //   slug: "mma2-airport-car-park-lagos",
  //   title: "MMA2 Airport Car Park, Lagos",
  //   client: "MMA2 Airport, Lagos",
  //   products: [
  //     "Car Park Management System Upgrade",
  //     "ANPR Integration",
  //     "Vehicle Classification and Tariffing",
  //     "Plastic Card Ticketing System",
  //   ],
  //   excerpt:
  //     "Balosh modernized MMA2 parking operations, cutting downtime and improving throughput with ANPR enabled, cost efficient infrastructure.",
  //   description: [
  //     "MMA2's multi story car park was constrained by ageing equipment, expensive imported consumables, and frequent failures that caused passenger queues and revenue leakage.",
  //     "Balosh replaced legacy systems with modern equipment at less than half the previous cost, migrated from paper tickets to reusable plastic cards, and implemented vehicle classification with ANPR support for faster dispute free processing.",
  //     "The result was major cost reduction, near zero downtime in a 24/7 environment, faster traffic throughput, and stronger revenue performance through accurate tariffing and improved operational control.",
  //   ],
  //   caseStudy: [
  //     {
  //       heading: "The Challenge",
  //       paragraphs: [
  //         "MMA2 is one of Nigeria's busiest airports, and its multi storey car park wasn't keeping up. Outdated equipment cost more than twice as much as modern alternatives, spare parts had to be imported causing costly delays, and system failures forced manual processing that left passengers stuck in queues while still being charged as they waited. There was no vehicle classification system and no ANPR technology, creating revenue leakage and congestion at every turn.",
  //       ],
  //     },
  //     {
  //       heading: "The Solution",
  //       paragraphs: [
  //         "We replaced the ageing infrastructure with modern, cost effective equipment at less than half the previous price. Paper tickets gave way to reusable plastic cards, eliminating imported consumables entirely. A vehicle classification system was introduced to enable accurate, differentiated tariffs, and ANPR cameras were deployed to handle lost tickets swiftly and without dispute. Trained staff and locally stocked spare parts ensured rapid response to any issues.",
  //       ],
  //     },
  //     {
  //       heading: "The Results",
  //       paragraphs: [
  //         "The MMA2 transformation proves what the right technology and the right support can deliver, even in the most demanding environments.",
  //       ],
  //       bullets: [
  //         "Major cost savings on both equipment and consumables",
  //         "Near zero downtime with 24/7 reliability in a 24/7 environment",
  //         "Increased revenue through accurate vehicle classification and tariffing",
  //         "Faster throughput, with queues eliminated and passengers moving freely",
  //         "Lost tickets resolved instantly via number plate lookup",
  //       ],
  //     },
  //   ],
  // },
  {
    id: 11,
    slug: "ikoyi-club-access-control-upgrade",
    title: "Ikoyi Club Access Control",
    client: "Ikoyi Club, Lagos",
    products: [
      "Access Control Software Upgrade",
      "Proprietary Turnstiles",
      "Facial Recognition and QR Access",
      "Accounts-to-Access Integration",
    ],
    excerpt:
      "Balosh delivered a full access overhaul at Ikoyi Club, enabling zero unauthorized access and zero downtime.",
    description: [
      "Ikoyi Club faced recurring turnstile failures, unreliable access cards, and a disconnected membership workflow that required manual activation and deactivation of access rights.",
      "Balosh stabilized immediate operations, deployed proprietary turnstiles designed for Nigerian conditions, introduced facial recognition and QR entry, and integrated accounting with access control for automatic membership based permissions.",
      "The upgraded system delivered zero unauthorized access, zero downtime, faster operations, complete entry visibility for members, staff, and guests, and measurable improvement in dues collection and administrative efficiency.",
    ],
    caseStudy: [
      {
        heading: "The Challenge",
        paragraphs: [
          "For one of Lagos' most prestigious members only institutions, access control is about far more than security. It is about prestige and member trust. Yet frequent turnstile breakdowns were creating dangerous gaps in security, and unreliable access cards made controlling entry nearly impossible. A complete disconnect between the accounts department and access control software meant staff had to manually activate and deactivate member access, an error prone process that left lapsed and unauthorised memberships slipping through undetected.",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "We moved quickly, immediately repairing existing turnstiles and replacing the access control software to restore security without delay. From there, we delivered a full upgrade:",
        ],
        bullets: [
          "Proprietary turnstiles engineered specifically for the Nigerian environment",
          "Facial recognition and QR code readers introduced alongside card access for seamless, flexible entry",
          "Full integration between accounting and access control software, so member access now activates or deactivates automatically based on subscription status",
          "A formal SLA guaranteeing proactive maintenance and rapid response times",
        ],
      },
      {
        heading: "The Results",
        paragraphs: [
          "The Ikoyi Club project is proof that the right access control system doesn't just secure a building. It protects an institution's identity.",
        ],
        bullets: [
          "Zero unauthorised access, with entry strictly controlled, guests included",
          "Zero downtime, a complete reversal from constant failures",
          "Hundreds of staff hours saved through automated account management",
          "Measurable increase in membership dues payment and revenue",
          "Full entry records for members, staff, and guests anytime, anywhere",
          "Adopted by HR for staff time and attendance tracking",
        ],
      },
    ],
    detailEmbed: {
      type: "youtube",
      permalink: "https://youtube.com/shorts/LOcAhRh7AcY",
    },
  },
  // {
  //   id: 12,
  //   slug: "ikeja-city-mall-car-park-reset",
  //   title: "Ikeja City Mall Car Park",
  //   client: "Ikeja City Mall",
  //   products: [
  //     "Car Park Operations Takeover",
  //     "Reusable Card Ticketing",
  //     "On site Engineering and Spare Parts Program",
  //   ],
  //   excerpt:
  //     "Balosh reset Ikeja City Mall parking operations with near zero downtime and significant monthly revenue growth.",
  //   description: [
  //     "The mall's car park suffered long outages, undertrained technical support, dependency on foreign specialists, and consumable shortages that forced manual ticketing and enabled revenue leakage.",
  //     "From July 1, 2024, Balosh implemented a full operational reset by replacing paper ticketing with reusable cards, deploying trained on site teams, and maintaining local spare parts stock for rapid response.",
  //     "The deployment delivered near zero downtime, faster vehicle processing, improved customer experience, and up to 60% revenue increase in peak months by eliminating manual processes and fraud exposure.",
  //   ],
  //   caseStudy: [
  //     {
  //       heading: "The Challenge",
  //       paragraphs: [
  //         "Ikeja City Mall's car park had been poorly managed for years. Frequent system failures, some lasting up to three months, were caused by a lack of spare parts and undertrained engineers. Fixing problems meant flying in specialists from South Africa, leaving the facility crippled in the meantime. A chronic shortage of imported ticket consumables forced heavy reliance on manual ticketing, opening the door to revenue leakage and fraud while frustrating shoppers and damaging the mall's reputation.",
  //       ],
  //     },
  //     {
  //       heading: "The Solution",
  //       paragraphs: [
  //         "Taking over operations on 1st July 2024, we delivered a complete reset:",
  //       ],
  //       bullets: [
  //         "Paper ticketing replaced with reusable plastic cards, eliminating imported consumables, reducing mechanical failures, and cutting paper waste",
  //         "Full staffing overhaul with trained personnel and on site standby engineers, ending the need for costly overseas specialists",
  //         "Comprehensive spare parts stock maintained locally at all times, keeping resolution times minimal and emergency imports firmly in the past",
  //       ],
  //     },
  //     {
  //       heading: "The Results",
  //       paragraphs: [
  //         "The Ikeja City Mall turnaround shows exactly what the right technology, the right people, and the right preparation can deliver.",
  //       ],
  //       bullets: [
  //         "Near zero downtime compared to failures lasting months under the previous operator",
  //         "Up to 60% revenue increase in some months with manual processing and fraud eliminated",
  //         "Faster throughput as reusable cards process vehicles more quickly, reducing congestion at peak times",
  //         "Improved shopper experience with faster, smoother, and frustration free parking",
  //       ],
  //     },
  //   ],
  // },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((project) => project.slug === slug);
}
