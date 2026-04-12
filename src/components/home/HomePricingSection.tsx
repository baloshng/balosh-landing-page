import Image from "next/image"

export default function HomePricingSection() {
  const markets = [
    {
      title: "Access Control",
      image: "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg",
      description: "Secure identity-based entry and movement control for facilities and high-footfall sites.",
    },
    {
      title: "Automated Entrances",
      image: "/assets/img/all-images/balosh-solutions/ASC.png",
      description: "Automated entrance systems that improve throughput, control, and operational efficiency.",
    },
    {
      title: "Car Parking",
      image: "/assets/img/all-images/balosh-solutions/carpark.jpg",
      description: "Smart parking infrastructure for ticketing, access regulation, and traffic flow optimization.",
    },
    {
      title: "Event Management",
      image: "/assets/img/all-images/balosh-solutions/evm.png",
      description: "Event-ready access solutions for credential validation, queue control, and safe crowd movement.",
    },
    {
      title: "Maintenance Services",
      image: "/assets/img/all-images/balosh-solutions/maintenance.png",
      description: "Preventive and corrective support services to keep deployed systems stable and reliable.",
    },
    {
      title: "Toll Roads & Traffic Management",
      image: "/assets/img/all-images/balosh-solutions/Wings_m_ee.jpg",
      description: "Traffic and tolling control systems for roadway flow management and vehicle access regulation.",
    },
  ]

  return (
    <div className="pricing-section-area sp2" id="market">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="pricing-header text-center heading6">
              <h5 data-aos="fade-left" data-aos-duration={800} data-aos-delay={100}>
                <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="mr-2 inline-block align-middle" unoptimized />
                Our Market
              </h5>
              <h2 className="text-anime-style-3">Industries We Serve</h2>
              <p data-aos="fade-left" data-aos-duration={1000} data-aos-delay={300}>
                Balosh solutions serve multiple market segments, from controlled facility access to traffic and event operations.
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
                    style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "8px" }}
                    unoptimized
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
