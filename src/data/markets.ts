export type MarketItem = {
  title: string
  image: string
  description: string
}

export const marketPageIntro = {
  eyebrow: "Our Market",
  title: "Industries We Serve",
  description: [
    "Balosh provides tailored solutions across residential, commercial, education, public services, transportation, access control, traffic management, and event operations.",
    "Our expertise allows us to adapt to the unique needs of each segment, delivering efficient, reliable, and high-quality services that support seamless operations and enhance everyday experiences.",
  ],
}

export const markets: MarketItem[] = [
  {
    title: "Commercial",
    image: "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg",
    description:
      "We deliver integrated solutions that optimize operational efficiency, enhance security infrastructure, and support seamless facility management across commercial environments.",
  },
  {
    title: "Residential",
    image: "/assets/img/all-images/balosh-solutions/ASC.png",
    description:
      "Our residential offerings focus on access control, safety systems, and environment management, ensuring secure, efficient, and well-regulated living spaces.",
  },
  {
    title: "Education",
    image: "/assets/img/all-images/balosh-solutions/carpark.jpg",
    description:
      "We provide structured solutions for educational institutions, including access management, safety protocols, and operational support to maintain secure and conducive learning environments.",
  },
  {
    title: "Events",
    image: "/assets/img/all-images/balosh-solutions/evm.png",
    description:
      "We offer end-to-end event operational support, including crowd management, access control systems, traffic coordination, and on-ground logistics for seamless execution.",
  },
  {
    title: "Leisure",
    image: "/assets/img/all-images/balosh-blog/federal-palace.png",
    description:
      "Our services in leisure environments are designed to support operational flow, safety compliance, and visitor management across recreational and hospitality spaces.",
  },
  {
    title: "Public Sector",
    image: "/assets/img/all-images/balosh-blog/npa-eto.png",
    description:
      "We work with government and public institutions to implement scalable solutions that enhance service delivery, improve infrastructure management, and ensure regulatory compliance.",
  },
  {
    title: "Transport",
    image: "/assets/img/all-images/balosh-blog/airport-contract-award.png",
    description:
      "We provide advanced traffic and mobility management solutions, including access systems, flow optimization, and operational coordination to improve transport efficiency and safety. Our expertise also extends to delivering comprehensive security solutions for airports, ensuring secure, efficient, and well-managed aviation environments.",
  },
]
