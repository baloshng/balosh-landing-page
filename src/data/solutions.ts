export type SolutionItem = {
  id: number
  slug: string
  title: string
  eyebrow: string
  excerpt: string
  description: string[]
  features: string[]
  image: string
  icon: string
  equipment: string[]
}

export const solutionsPageIntro = {
  title: "Integrated Access, Mobility & Security Solutions",
  description:
    "At Balosh Integrated Services, we deliver end-to-end solutions built around the unique operational needs of every client. With deep expertise across multiple sectors, we combine precision engineering, proprietary hardware, and custom software to deliver reliable, scalable, and long-lasting services.",
}

export const solutions: SolutionItem[] = [
  {
    id: 1,
    slug: "access-control",
    title: "Access Control",
    eyebrow: "Controlled Entry",
    excerpt: "Secure, scalable access management — designed around your environment.",
    description: [
      "Access Control provides secure, scalable access management for organisations that need reliable control over who enters each space. Each system is designed around the client's environment, security profile, and operating requirements.",
      "Our access control systems combine hardware and software into a single, accountable solution. We provide:",
    ],
    features: [
      "Advanced biometric options: fingerprint, facial recognition, iris scanning, and multi-modal authentication",
      "Time and attendance integration for workforce management",
      "Visitor management and workforce security features",
      "End-to-end delivery: design, installation, system integration, and ongoing support",
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
    excerpt: "Intelligent entry and exit systems for high-traffic environments.",
    description: [
      "Automated Entrances support safe, efficient movement across busy access points while maintaining the level of control required in secure environments.",
      "We design and install automated entrance systems that balance high throughput with strong security:",
    ],
    features: [
      "Automatic doors, gates, barriers, bollards, turnstiles, and roller shutters",
      "Seamless integration with access control systems, ANPR technology, and dashboard monitoring",
      "Built for volume — without sacrificing security or reliability",
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
    excerpt: "End-to-end car park ecosystems — from design to daily operation.",
    description: [
      "Car Park Management delivers structured parking systems for organised vehicle movement, reliable access control, and efficient day-to-day operation.",
      "We deliver complete parking solutions for airports, malls, estates, and high-traffic facilities:",
    ],
    features: [
      "Automated barriers with ticketing, ANPR integration, and cashless payment options",
      "Real-time occupancy monitoring with live digital dashboards",
      "Flexible models — including operational and lease arrangements",
      "Design, supply, installation, operation, and maintenance — all managed by Balosh",
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
    excerpt: "Fully integrated toll-plaza solutions for Nigeria's road infrastructure.",
    description: [
      "Toll Road Management delivers traffic and toll-management systems for regulated vehicle movement, payment workflows, and operational reporting at scale.",
      "Fully integrated toll-plaza solutions for Nigeria's road infrastructure.",
    ],
    features: [
      "Multi-lane toll processing with cash, card, and RFID payment options",
      "Real-time revenue reporting and detailed audit trails",
      "Nationwide maintenance support and operational reliability",
      "Hardware and software delivered as one complete system",
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
      "Comprehensive screening and threat-detection for high-security environments.",
    description: [
      "Security Systems provides integrated facility protection for environments where access, monitoring, and control must work together without gaps.",
      "Comprehensive screening and threat-detection for high-security environments.",
    ],
    features: [
      "Walk-through metal detectors, baggage scanners, and under-vehicle inspection systems",
      "Full integration with access control, CCTV, and incident management platforms",
      "End-to-end implementation and 24/7 operational support",
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
      "Cross-cutting Capabilities support flexible, connected operations across the full solution lifecycle, from software and equipment availability to platform interoperability.",
    ],
    features: [
      "Custom Software Development — tailored applications, dashboards, and integrations built in-house",
      "Equipment Rentals — flexible rental solutions for varying project demands",
      "System Integration & API Access — enabling different platforms and technologies to work seamlessly together",
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
