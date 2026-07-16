import Image from "next/image"

const whoWeAreParagraphs = [
  "Since 2005, Balosh Integrated Services Limited has built its reputation on three uncompromising pillars: reliability, credibility, and quiet dominance.",
  "We operate end to end across design, development, installation, and ongoing support, all in house, with no middlemen and no gaps in accountability. From the terminals that move millions to the institutions that govern a nation, the names that define Nigeria's most critical spaces have one thing in common: Balosh.",
  "For 21 years, Nigeria's airports, government institutions, major retail destinations, corporate campuses, and critical national infrastructure have entrusted their security and access operations to us. That trust is not given lightly, and we have never taken it for granted.",
  "We don't rely on advertising. We let our work speak for itself.",
  "We are builders, operators, and long term partners trusted by organisations that cannot afford to get access control and security wrong.",
]

export default function HomeAboutSection() {
  return (
    <div className="about3-section-area sp1" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
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
              <h2
                className="text-anime-style-3"
                data-aos="fade-right"
                data-aos-duration="950"
                data-aos-delay="150"
              >
                Built on Trust
              </h2>
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
        </div>
      </div>
    </div>
  )
}
