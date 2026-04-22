import Image from "next/image"
import Link from "next/link"

export default function HomeServicesSection() {
  return (
    <div className="service3-section-area sp1" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-header heading6">
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
                  className="inline-block align-middle"
                />
                Our Solutions
              </h5>
              <h2 className="text-anime-style-3">
                Integrated Access, Mobility &amp; Security Solutions
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                At Balosh Integrated Services, we deliver tailor-made solutions
                built around each client&apos;s unique needs, combining innovation,
                modern technology, and dependable delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
            data-aos-delay={100}
          >
            <div className="service-carousel-area owl-carousel">
              {[
                {
                  img: "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg",
                  icon: "/assets/img/icons/service-img7.svg",
                  title: "Access Control",
                  desc: "Secure and scalable access management across hardware and software, including biometrics, visitor management, and end-to-end support.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/ASC.png",
                  icon: "/assets/img/icons/service-icons8.svg",
                  title: "Automated Entrances",
                  desc: "Intelligent doors, gates, barriers, bollards, turnstiles, and shutters built for high-throughput environments.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/carpark.jpg",
                  icon: "/assets/img/icons/service-icons9.svg",
                  title: "Car Parking Solutions",
                  desc: "End-to-end parking ecosystems with ticketing, ANPR, cashless payments, and real-time occupancy visibility.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/Wings_m_ee.jpg",
                  icon: "/assets/img/icons/service-img7.svg",
                  title: "Toll Road Management",
                  desc: "Integrated toll solutions with multi-lane processing, real-time reporting, audit trails, and nationwide support.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/Access-Control_2.jpg",
                  icon: "/assets/img/icons/service-icons8.svg",
                  title: "Security Systems",
                  desc: "Screening and threat-detection systems integrated with access control, CCTV, and incident management workflows.",
                },
                {
                  img: "/assets/img/all-images/balosh-solutions/maintenance.png",
                  icon: "/assets/img/icons/service-icons9.svg",
                  title: "Cross-cutting Capabilities",
                  desc: "Custom software development, rental options, and API-based system integration for flexible operations.",
                },
              ].map((card) => (
                <div className="service-boxarea" key={card.title}>
                  <div className="img1">
                    <Image
                      src={card.img}
                      alt=""
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="content-area">
                    <div className="icons">
                      <Image src={card.icon} alt="" width={48} height={48} />
                    </div>
                    <div className="content-area-pera">
                      <Link href="/#service">{card.title}</Link>
                      <p>{card.desc}</p>
                      {/* <Link href="/#service" className="readmore">
                        Learn More <i className="fa-solid fa-arrow-right" />
                      </Link> */}
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
