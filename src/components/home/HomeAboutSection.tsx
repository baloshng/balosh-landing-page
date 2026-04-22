import Image from "next/image"
import Link from "next/link"

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
                About Us
              </h5>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Since 2005, Balosh Integrated Services Limited has built its
                reputation on three uncompromising pillars: reliability,
                credibility, and consistent industry leadership. We provide
                fully integrated, end-to-end services, from design and
                development to installation and ongoing support, all managed
                in-house. From major transport terminals and government
                institutions to corporate campuses and leading retail
                destinations, Balosh has become a trusted name in securing and
                managing high-value spaces across Nigeria.
              </p>

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
                Why Choose Us
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
                There are many vendors, but there is only one Balosh. Our
                systems are built for Nigeria&apos;s realities, delivered with
                full end-to-end accountability, and designed for long-term
                operational reliability.
              </p>
              <div className="space32"></div>
              <div
                className="all-progress-area"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="0"
              >
                <div className="progres-section-area">
                  <div className="check">
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </div>
                  <div className="about5-boxes">
                    <h3>Built for Nigeria&apos;s Realities</h3>
                    <div className="about5-bar">
                      <span className="about5-per">
                        <span className="per">95%</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space20"></div>
                <div className="progres-section-area">
                  <div className="check">
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </div>
                  <div className="about5-boxes">
                    <h3>End-to-End Accountability</h3>
                    <div className="about5-bar2">
                      <span className="about5-per2">
                        <span className="per">97%</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space20"></div>
                <div className="progres-section-area">
                  <div className="check">
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </div>
                  <div className="about5-boxes">
                    <h3>Built for the Long Term</h3>
                    <div className="about5-bar">
                      <span className="about5-per">
                        <span className="per">94%</span>
                      </span>
                    </div>
                  </div>
                </div>
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
