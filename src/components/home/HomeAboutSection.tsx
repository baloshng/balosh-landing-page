import Image from "next/image"
import Link from "next/link"

const whoWeAreParagraphs = [
  "Since 2005, Balosh Integrated Services Limited has built its reputation on three uncompromising pillars: reliability, credibility, and consistent industry leadership. For two decades, we have delivered trusted security and access control solutions across Nigeria's most critical environments.",
  "We provide fully integrated, end-to-end services, from design and development to installation and ongoing support, all managed in-house. This approach ensures seamless execution, accountability, and the highest standards of quality at every stage.",
  "From major transport terminals handling millions of people to government institutions, corporate campuses, and leading retail destinations, Balosh has become a trusted name in securing and managing high-value spaces. Our solutions are built to perform in demanding environments, supporting efficiency, safety, and operational excellence.",
  "The trust placed in us by Nigeria's most important institutions has been earned through consistency, expertise, and results. It is a responsibility we take seriously, and one that continues to drive our commitment to delivering reliable, future-focused solutions.",
]

const baloshDifference = [
  {
    title: "Built for Nigeria's Realities",
    percent: 95,
    altBar: false,
  },
  {
    title: "End-to-End Accountability",
    percent: 97,
    altBar: true,
  },
  {
    title: "Proprietary OEM Hardware",
    percent: 94,
    altBar: false,
  },
  {
    title: "Global Technology, Local Expertise",
    percent: 96,
    altBar: true,
  },
  {
    title: "A Reputation Earned Through Results",
    percent: 98,
    altBar: false,
  },
  {
    title: "Built for the Long Term",
    percent: 94,
    altBar: true,
  },
]

export default function HomeAboutSection() {
  return (
    <div className="about3-section-area sp1" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-header-area heading6">
              <h5
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Who We Are
              </h5>
              {whoWeAreParagraphs.map((paragraph, index) => (
                <p
                  data-aos="fade-right"
                  data-aos-duration={1000 + index * 100}
                  data-aos-delay={200 + index * 50}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}

              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="350"
              >
                <Image
                  src="/assets/img/all-images/balosh-why-balosh.png"
                  alt="Why Balosh infographic"
                  width={1024}
                  height={506}
                  className="h-auto w-full"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-header-area heading6">
              <h5
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                The Balosh Difference
              </h5>
              <h2 className="text-anime-style-3">
                Why Leaders Choose <br className="d-lg-block d-none" />
                Balosh
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                There are many vendors, but there is only one Balosh.
              </p>
              <div className="space32"></div>
              <div
                className="all-progress-area"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="0"
              >
                {baloshDifference.map((item, index) => (
                  <div key={item.title}>
                    {index > 0 ? <div className="space20"></div> : null}
                    <div className="progres-section-area">
                      <div className="check">
                        <span>
                          <i className="fa-solid fa-check"></i>
                        </span>
                      </div>
                      <div className="about5-boxes">
                        <h3>{item.title}</h3>
                        <div
                          className={item.altBar ? "about5-bar2" : "about5-bar"}
                        >
                          <span
                            className={
                              item.altBar ? "about5-per2" : "about5-per"
                            }
                            style={{ width: `${item.percent}%` }}
                          >
                            <span className="per">{item.percent}%</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1300"
                data-aos-delay="300"
              >
                <Link href="/#contact" className="header-btn4">
                  Talk to Us <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
