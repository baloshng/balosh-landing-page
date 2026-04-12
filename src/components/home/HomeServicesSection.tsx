import Image from "next/image"
import Link from "next/link"

export default function HomeServicesSection() {
  return (
    <div className="service3-section-area sp1" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-header heading6">
              <h5 data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="inline-block align-middle" unoptimized />
                Our Service
              </h5>
              <h2 className="text-anime-style-3">Complete Protection Services</h2>
              <p data-aos="fade-left" data-aos-duration={1000} data-aos-delay={400}>
                With advanced technology, 24/7 surveillance capabilities personalized <br className="d-lg-block d-none" /> service, we&apos;re committed to safeguarding what matters most to you.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={300}>
            <div className="service-carousel-area owl-carousel">
              {[
                {
                  img: "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg",
                  icon: "/assets/img/icons/service-img7.svg",
                  title: "Tripod Bridge Turnstiles",
                  desc: "Integrated access control solution for secure and controlled movement.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/ASC.png",
                  icon: "/assets/img/icons/service-icons8.svg",
                  title: "Linear Tripod Turnstiles",
                  desc: "Integrated access control solution for secure and controlled movement.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/carpark.jpg",
                  icon: "/assets/img/icons/service-icons9.svg",
                  title: "Automated Ticketing Terminals",
                  desc: "Smart car park solution for automated vehicle entry, ticketing, and exit.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/CarPark-1.jpg",
                  icon: "/assets/img/icons/service-img7.svg",
                  title: "Structured Parking Arrangements",
                  desc: "Smart car park solution for automated vehicle entry, ticketing, and exit.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/Digital-Door-Access.jpg",
                  icon: "/assets/img/icons/service-icons8.svg",
                  title: "Digital Door Access",
                  desc: "Secure entrance control system with digital authentication access points.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/Access-Control_2.jpg",
                  icon: "/assets/img/icons/service-icons9.svg",
                  title: "Entrance Control",
                  desc: "Secure entrance control system with digital authentication access points.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/evm.png",
                  icon: "/assets/img/icons/service-img7.svg",
                  title: "Rentals",
                  desc: "Short-term and event-based security equipment rental services.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/maintenance.png",
                  icon: "/assets/img/icons/service-icons8.svg",
                  title: "Maintenance Service",
                  desc: "Preventive and corrective maintenance for deployed security systems.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/Wings_m_ee.jpg",
                  icon: "/assets/img/icons/service-icons9.svg",
                  title: "Toll roads & Traffic Management",
                  desc: "Traffic control solutions for toll operations and roadway flow management.",
                },
              ].map((card) => (
                <div className="service-boxarea" key={card.title}>
                  <div className="img1">
                    <Image src={card.img} alt="" width={800} height={600} className="h-full w-full object-cover" unoptimized />
                  </div>
                  <div className="content-area">
                    <div className="icons">
                      <Image src={card.icon} alt="" width={48} height={48} unoptimized />
                    </div>
                    <div className="content-area-pera">
                      <Link href="/#service">{card.title}</Link>
                      <p>{card.desc}</p>
                      <Link href="/#service" className="readmore">
                        Learn More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
