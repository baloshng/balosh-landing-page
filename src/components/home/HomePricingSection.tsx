import Image from "next/image"

export default function HomePricingSection() {
  const markets = [
    {
      title: "Commercial",
      image: "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg",
      description:
        "Integrated solutions that optimize operational efficiency, strengthen security infrastructure, and support seamless facility management.",
    },
    {
      title: "Residential",
      image: "/assets/img/all-images/balosh-solutions/ASC.png",
      description:
        "Access control, safety systems, and environment management that keep living spaces secure, efficient, and well-regulated.",
    },
    {
      title: "Education",
      image: "/assets/img/all-images/balosh-solutions/carpark.jpg",
      description:
        "Structured access, safety protocols, and operational support for secure and conducive learning environments.",
    },
    {
      title: "Events",
      image: "/assets/img/all-images/balosh-solutions/evm.png",
      description:
        "End-to-end event operations including crowd management, access control, traffic coordination, and on-ground logistics.",
    },
    {
      title: "Leisure",
      image: "/assets/img/all-images/balosh-solutions/maintenance.png",
      description:
        "Visitor-management and safety-focused services for recreational and hospitality environments.",
    },
    {
      title: "Public Sector",
      image: "/assets/img/all-images/balosh-solutions/Wings_m_ee.jpg",
      description:
        "Scalable solutions for government and public institutions to improve service delivery and infrastructure performance.",
    },
    {
      title: "Transport",
      image: "/assets/img/all-images/balosh-solutions/CarPark-1.jpg",
      description:
        "Advanced mobility management for access, flow optimization, and airport-grade operational security.",
    },
  ]

  return (
    <div className="pricing-section-area sp2" id="market">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="pricing-header text-center heading6">
              <h5
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={100}
              >
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 inline-block align-middle"
                />
                Our Market
              </h5>
              <h2 className="text-anime-style-3">Industries We Serve</h2>
              <p
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                Balosh provides tailored solutions across residential,
                commercial, education, public services, transportation, and
                event operations, adapting to each sector&apos;s specific needs.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {markets.map((market, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800 + index * 100}
              data-aos-delay={400}
              data-aos-offset={40}
              key={market.title}
            >
              <div className="pricing-boxarea">
                <div className="img1">
                  <Image
                    src={market.image}
                    alt={market.title}
                    width={800}
                    height={440}
                    className="rounded-[8px] object-cover"
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="space20" />
                <h3>{market.title}</h3>
                <p>{market.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
