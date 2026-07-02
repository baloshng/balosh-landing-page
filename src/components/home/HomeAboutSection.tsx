import Image from "next/image"
import Link from "next/link"

const whoWeAreParagraphs = [
  "Since 2005, Balosh Integrated Services Limited has built its reputation on three uncompromising pillars: reliability, credibility, and quiet dominance.",
  "We operate end to end across design, development, installation, and ongoing support, all in house, with no middlemen and no gaps in accountability. From the terminals that move millions to the institutions that govern a nation, the names that define Nigeria's most critical spaces have one thing in common: Balosh.",
  "For 21 years, Nigeria's airports, government institutions, major retail destinations, corporate campuses, and critical national infrastructure have entrusted their security and access operations to us. That trust is not given lightly, and we have never taken it for granted.",
  "We don't rely on advertising. We let our work speak for itself.",
  "We are builders, operators, and long term partners trusted by organisations that cannot afford to get access control and security wrong.",
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
            <div className="about-header-area heading6 home-who-we-are-copy">
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
