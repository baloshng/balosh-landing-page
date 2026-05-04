export type SolutionItem = {
  id: number
  slug: string
  title: string
  eyebrow: string
  excerpt: string
  description: string[]
  image: string
  icon: string
  equipment: string[]
}

export const solutionsPageIntro = {
  title: "Integrated Access, Mobility & Security Solutions",
  description:
    "At Balosh Integrated Services, we deliver tailor-made solutions built around the unique needs of every client. With expertise across multiple sectors, we combine innovation with the latest technology to provide services that are not only effective but also future-ready and reliable.",
}

export const solutions: SolutionItem[] = [
  {
    id: 1,
    slug: "access-control",
    title: "Access Control",
    eyebrow: "Controlled Entry",
    excerpt:
      "Secure, scalable access management for organisations that need reliable control over who enters each space.",
    description: [
      "Access Control provides secure, scalable access management solutions that integrate hardware and software systems. It includes advanced biometric options such as fingerprint, facial recognition, iris scanning, and multi-modal authentication. These systems also integrate time and attendance tracking, visitor management, and workforce security features. The service is delivered end-to-end, covering design, installation, system integration, and ongoing support.",
    ],
    image: "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg",
    icon: "/assets/img/icons/service-img7.svg",
    equipment: [
      "Tripod Bridge Turnstiles",
      "Linear Tripod Turnstiles",
      "Digital Door Access",
      "Entrance Controls",
    ],
  },
  {
    id: 2,
    slug: "automated-entrances",
    title: "Automated Entrances",
    eyebrow: "Smart Entry Systems",
    excerpt:
      "Automated entrance systems that support safe, efficient movement across busy access points.",
    description: [
      "Automated Entrances focus on intelligent entry and exit systems, including automatic doors and gates, barriers, bollards, turnstiles, and roller shutters. These solutions are built to handle high-traffic environments while maintaining strong security integration. They can be seamlessly connected with access control systems, ANPR technology, and centralized dashboard monitoring for efficient oversight and control.",
    ],
    image: "/assets/img/all-images/balosh-solutions/ASC.png",
    icon: "/assets/img/icons/service-icons8.svg",
    equipment: ["Entrance Controls", "Digital Door Access"],
  },
  {
    id: 3,
    slug: "car-park-management",
    title: "Car Park Management",
    eyebrow: "Parking Flow",
    excerpt:
      "Structured parking systems for organised vehicle movement, ticketing, access control, and ongoing operation.",
    description: [
      "Car Park Management delivers complete, end-to-end parking ecosystems that include design, supply, installation, operation, and maintenance. The system features automated barriers with ticketing, ANPR integration, and cashless payment options. They also provide real-time occupancy monitoring through digital dashboards, with flexible operational models, including leasing options where required.",
    ],
    image: "/assets/img/all-images/balosh-solutions/carpark.jpg",
    icon: "/assets/img/icons/service-icons9.svg",
    equipment: ["Automated Ticketing Terminals", "Structured Parking Arrangement"],
  },
  {
    id: 4,
    slug: "toll-road-management",
    title: "Toll Road Management",
    eyebrow: "Road Movement",
    excerpt:
      "Traffic and toll-management systems for regulated vehicle movement, payment workflows, and operational reporting.",
    description: [
      "Toll Road Management covers fully integrated toll-plaza solutions, including hardware and software systems. These support multi-lane toll processing with multiple payment methods, including cash, cards, and RFID. The system provides real-time revenue reporting, detailed audit trails, and nationwide maintenance support, ensuring reliability across large-scale road infrastructure.",
    ],
    image: "/assets/img/all-images/balosh-solutions/Wings_m_ee.jpg",
    icon: "/assets/img/icons/service-img7.svg",
    equipment: ["Toll Roads & Traffic Management", "Automated Ticketing Terminals"],
  },
  {
    id: 5,
    slug: "security-systems",
    title: "Security Systems",
    eyebrow: "Facility Protection",
    excerpt:
      "Integrated security support for environments where access, monitoring, and control must work together.",
    description: [
      "Security Systems offers comprehensive screening and threat-detection solutions for high-security environments. These include walk-through metal detectors, baggage scanners, and under-vehicle inspection systems. The solutions are fully integrated with access control, CCTV surveillance, and incident management platforms, supported by end-to-end implementation and 24/7 operational assistance.",
    ],
    image: "/assets/img/all-images/balosh-solutions/Access-Control_2.jpg",
    icon: "/assets/img/icons/service-icons8.svg",
    equipment: ["Digital Door Access", "Entrance Controls"],
  },
  {
    id: 6,
    slug: "cross-cutting-capabilities",
    title: "Cross-cutting Capabilities",
    eyebrow: "Lifecycle Support",
    excerpt:
      "Software, rental, maintenance, and integration capabilities that support flexible, connected operations.",
    description: [
      "Cross-cutting Capabilities includes custom software development tailored to specific business needs, flexible equipment rental solutions to support varying project demands, and seamless system integration with API access, enabling different platforms and technologies to work together efficiently.",
    ],
    image: "/assets/img/all-images/balosh-solutions/maintenance.png",
    icon: "/assets/img/icons/service-icons9.svg",
    equipment: ["Rentals", "Maintenance Service"],
  },
]

export const solutionNavigationLinks = solutions.map(
  ({ slug, title, excerpt }) => ({
    id: slug,
    title,
    href: `/solutions/${slug}`,
    description: excerpt,
  }),
)

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug)
}
