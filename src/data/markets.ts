export type MarketItem = {
  title: string
  image: string
  description: string
}

export const marketPageIntro = {
  eyebrow: "Our Market",
  title: "Industries We Serve",
  description: [
    "Balosh delivers tailored access control and security solutions across seven key industries. Our expertise allows us to adapt to the unique demands of each environment, delivering solutions that improve security, operational efficiency, and the everyday experience of the people who use these spaces.",
  ],
}

export const markets: MarketItem[] = [
  {
    title: "Commercial",
    image: "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg",
    description:
      "We deliver integrated access control and security solutions that enhance security, optimise facility management, and support the operational efficiency of corporate offices, business parks, and commercial buildings.",
  },
  {
    title: "Residential",
    image: "/assets/img/all-images/balosh-solutions/ASC.png",
    description:
      "Our residential solutions cover estate access control, visitor management, facility management and payment applications and security systems, ensuring that gated communities, residential developments, and private estates are safe, efficiently managed, and well controlled.",
  },
  {
    title: "Education",
    image: "/assets/img/all-images/balosh-solutions/carpark.jpg",
    description:
      "We provide access management, attendance tracking, and safety systems for schools, universities, and campuses, creating secure, well regulated environments that support learning without disrupting daily flow.",
  },
  {
    title: "Events",
    image: "/assets/img/all-images/balosh-solutions/evm.png",
    description:
      "From concerts to conferences, we deliver scalable access control, crowd management, and traffic coordination systems that ensure events run safely, smoothly, and without operational surprises.",
  },
  {
    title: "Leisure",
    image: "/assets/img/all-images/balosh-blog/federal-palace.png",
    description:
      "Our leisure solutions support clubs, recreational facilities, and hospitality venues with access control, membership management, visitor flow, and safety systems, all designed to protect the experience your guests expect.",
  },
  {
    title: "Public Sector",
    image: "/assets/img/all-images/balosh-blog/npa-eto.png",
    description:
      "We work with government agencies, ministries, and public institutions to implement access control and security systems that meet the demands of accountability, public safety, and regulatory compliance at scale.",
  },
  {
    title: "Transport",
    image: "/assets/img/all-images/balosh-blog/airport-contract-award.png",
    description:
      "We provide advanced traffic and mobility management solutions, including ANPR systems, automated toll plazas, and vehicle flow optimisation for airports, seaports, toll roads, and major transport hubs. Our aviation expertise includes full car park management, ANPR integration, and access systems for airport terminals as delivered at MMA2, Lagos.",
  },
]
