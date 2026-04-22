export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  client: string;
  products: string[];
  excerpt: string;
  description: string[];
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
      "This project demonstrates Balosh's capability in handling large-scale, high-traffic events with precision and efficiency.",
    ],
  },
  {
    id: 2,
    slug: "dangote-refinery-commissioning-event-security",
    title: "Dangote Refinery Commissioning Event Security",
    client: "Dangote Refinery (Commissioning Event)",
    products: ["Access Control Rental Systems", "Event Entry Management Solutions"],
    excerpt:
      "Balosh deployed rental access control for the Dangote Refinery commissioning, enforcing strict zone-level authorization.",
    description: [
      "Balosh deployed its access control rental solution for the commissioning of the Dangote Refinery, one of the most high-profile industrial events in Nigeria.",
      "The system ensured strict access regulation, enabling only authorized personnel and guests into designated zones.",
      "This highlights Balosh's ability to deliver secure and reliable solutions for high-security, government-level and industrial events.",
    ],
  },
  {
    id: 3,
    slug: "lasuth-car-park-management-system",
    title: "LASUTH Car Park Management System",
    client: "Lagos State University Teaching Hospital",
    products: ["Car Park Management System", "Ticketing and Access Control Infrastructure"],
    excerpt:
      "Balosh restructured LASUTH parking operations with controlled vehicle entry/exit and stronger traffic flow management.",
    description: [
      "Balosh was engaged to restructure and optimize the parking system at LASUTH, improving traffic flow and operational efficiency.",
      "The project introduced a controlled car park system designed to regulate vehicle entry and exit while maximizing available parking space.",
      "The solution improved order, reduced congestion, and enhanced revenue management within the facility.",
    ],
  },
  {
    id: 4,
    slug: "vgc-estate-access-control",
    title: "Victoria Garden City Estate Access Control",
    client: "Victoria Garden City",
    products: ["Estate Access Control Systems", "Gate Automation and Entry Management"],
    excerpt:
      "Balosh implemented controlled estate entry points and improved resident verification at VGC.",
    description: [
      "Balosh secured a contract to implement access control systems at Victoria Garden City, one of Lagos' most prominent residential estates.",
      "The project focused on enhancing estate security by regulating entry points and improving resident verification processes.",
      "This deployment reinforces Balosh's expertise in residential estate security infrastructure and controlled community access.",
    ],
  },
  {
    id: 5,
    slug: "npa-electronic-truck-call-up-eto",
    title: "Nigerian Ports Authority Electronic Call-Up System (ETO)",
    client: "Nigerian Ports Authority",
    products: ["Electronic Truck Call-Up System", "Traffic and Access Management Infrastructure"],
    excerpt:
      "Balosh contributed to ETO implementation to regulate truck movement and ease port-access congestion.",
    description: [
      "In collaboration with partners, Balosh contributed to the implementation of the Electronic Truck Call-Up System (ETO) for the Nigerian Ports Authority.",
      "The system was designed to regulate truck movement to and from Lagos ports, addressing long-standing traffic congestion issues.",
      "This project demonstrates Balosh's capacity in large-scale traffic and access management systems beyond traditional security applications.",
    ],
  },
  {
    id: 6,
    slug: "federal-palace-hotel-casino-entry-system",
    title: "Federal Palace Hotel and Casino Car Park and Entry System",
    client: "Federal Palace Hotel and Casino",
    products: ["Car Park Ticketing System", "Entrance Control Systems"],
    excerpt:
      "Balosh delivered guest-friendly parking and entry control infrastructure for a major hospitality facility.",
    description: [
      "Balosh was appointed to supply and install a car park ticketing and entrance control system at the Federal Palace Hotel and Casino in Victoria Island.",
      "The system was designed to enhance guest experience, streamline vehicle access, and improve parking revenue management.",
      "This highlights Balosh's strength in delivering tailored solutions for hospitality and commercial environments.",
    ],
  },
  {
    id: 7,
    slug: "osborne-foreshore-estate-security-upgrade",
    title: "Osborne Foreshore Estate Security Upgrade",
    client: "Osborne Foreshore Estate",
    products: ["Estate Access Control Systems", "Entrance Security Infrastructure"],
    excerpt:
      "Balosh upgraded estate entrance security and improved resident and visitor monitoring.",
    description: [
      "Balosh upgraded the entrance infrastructure of Osborne Foreshore Estate, a high-end residential community.",
      "The solution improved access control, enhanced security, and ensured better monitoring of residents and visitors within the estate.",
      "This project further establishes Balosh as a trusted provider for premium residential developments.",
    ],
  },
  {
    id: 8,
    slug: "landmark-access-control-entry-management",
    title: "Landmark Access Control and Entry Management",
    client: "Landmark Group",
    products: ["Turnstile Systems", "Access Control Infrastructure", "Crowd Entry Management"],
    excerpt:
      "Balosh deployed turnstile-based access control at Landmark to improve security and visitor flow in a high-traffic venue.",
    description: [
      "Balosh Integrated Services deployed access control and entry management solutions at Landmark, a major lifestyle and entertainment destination in Lagos.",
      "The installation focused on regulating pedestrian access using turnstile systems to ensure controlled entry while maintaining smooth visitor flow.",
      "The solution enhanced security, reduced unauthorized access, and improved overall crowd management efficiency within the facility.",
    ],
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
  },
  {
    id: 10,
    slug: "mma2-airport-car-park-lagos",
    title: "MMA2 Airport Car Park, Lagos",
    client: "MMA2 Airport, Lagos",
    products: [
      "Car Park Management System Upgrade",
      "ANPR Integration",
      "Vehicle Classification and Tariffing",
      "Plastic Card Ticketing System",
    ],
    excerpt:
      "Balosh modernized MMA2 parking operations, cutting downtime and improving throughput with ANPR-enabled, cost-efficient infrastructure.",
    description: [
      "MMA2's multi-story car park was constrained by ageing equipment, expensive imported consumables, and frequent failures that caused passenger queues and revenue leakage.",
      "Balosh replaced legacy systems with modern equipment at less than half the previous cost, migrated from paper tickets to reusable plastic cards, and implemented vehicle classification with ANPR support for faster dispute-free processing.",
      "The result was major cost reduction, near-zero downtime in a 24/7 environment, faster traffic throughput, and stronger revenue performance through accurate tariffing and improved operational control.",
    ],
  },
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
      "Balosh stabilized immediate operations, deployed proprietary turnstiles designed for Nigerian conditions, introduced facial recognition and QR entry, and integrated accounting with access control for automatic membership-based permissions.",
      "The upgraded system delivered zero unauthorized access, zero downtime, faster operations, complete entry visibility for members, staff, and guests, and measurable improvement in dues collection and administrative efficiency.",
    ],
  },
  {
    id: 12,
    slug: "ikeja-city-mall-car-park-reset",
    title: "Ikeja City Mall Car Park",
    client: "Ikeja City Mall",
    products: [
      "Car Park Operations Takeover",
      "Reusable Card Ticketing",
      "On-site Engineering and Spare Parts Program",
    ],
    excerpt:
      "Balosh reset Ikeja City Mall parking operations with near-zero downtime and significant monthly revenue growth.",
    description: [
      "The mall's car park suffered long outages, undertrained technical support, dependency on foreign specialists, and consumable shortages that forced manual ticketing and enabled revenue leakage.",
      "From July 1, 2024, Balosh implemented a full operational reset by replacing paper ticketing with reusable cards, deploying trained on-site teams, and maintaining local spare parts stock for rapid response.",
      "The deployment delivered near-zero downtime, faster vehicle processing, improved customer experience, and up to 60% revenue increase in peak months by eliminating manual processes and fraud exposure.",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((project) => project.slug === slug);
}
