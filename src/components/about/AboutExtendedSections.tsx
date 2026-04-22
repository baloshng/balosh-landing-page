import Image from "next/image"

const corporateMissionPillars = [
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty and transparency, fostering trust with our clients and partners.",
  },
  {
    title: "Customer-Centricity",
    description:
      "Our customers are our priority. We view our relationships as partnerships, actively seeking their feedback to tailor our solutions and ensure complete satisfaction.",
  },
  {
    title: "Employee Empowerment",
    description:
      "We believe that our employees are our greatest asset. By investing in their professional development, recognizing their contributions, and promoting an inclusive environment, we create a motivated and engaged workforce.",
  },
  {
    title: "Innovation and Agility",
    description:
      "We embrace a proactive approach to innovation, continuously adapting our strategies to meet the ever-evolving needs of the market. Our commitment to research and development, combined with an agile mindset, allows us to integrate the latest technologies and methodologies into our offerings.",
  },
  {
    title: "Community Engagement",
    description:
      "We recognize our responsibility to give back to the communities we serve. Through outreach programs, sustainable practices, and support for local economies, we strive to make a positive impact while enhancing community safety through our innovative solutions.",
  },
  {
    title: "Excellence and Security",
    description:
      "Our philosophy is not just a set of statements; it’s a commitment to excellence in every interaction. At Balosh Integrated Services, we are dedicated to creating secure environments that empower businesses and communities, ensuring a brighter, safer future for all.",
  },
]

const milestones = [
  {
    title: "2005 Foundation",
    description:
      "Balosh Integrated Services was founded and began delivering access control and security solutions in Nigeria.",
    iconClass: "fa-solid fa-award",
  },
  {
    title: "Nationwide Growth",
    description:
      "Over nearly two decades, Balosh built a strong nationwide presence supported by over 100 skilled professionals.",
    iconClass: "fa-solid fa-forward",
  },
  {
    title: "Operational Scale",
    description:
      "Balosh systems now manage over 200,000 daily check-ins across multiple sectors and high-throughput environments.",
    iconClass: "fa-solid fa-chart-line",
  },
  {
    title: "Built for Local Conditions",
    description:
      "Balosh deploys OEM hardware designed for Nigerian operating conditions, improving durability, uptime, and long-term value.",
    iconClass: "fa-solid fa-code",
  },
]

export default function AboutExtendedSections() {
  return (
    <>
      <section
        className="about3-section-area sp1 about-page-section"
        id="corporate-philosophy"
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <div className="heading6">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Corporate Philosophy
                </h5>
                <h2>Our Vision</h2>
                <p>
                  Our philosophy is not just a set of statements; it’s a
                  commitment to excellence in every interaction. At Balosh
                  Integrated Services, we are dedicated to creating secure
                  environments that empower businesses and communities, ensuring
                  a brighter, safer future for all.
                </p>
                <h2 className="mt-6">Our Mission</h2>
                <p>
                  At Balosh Integrated Services, our mission is to be the
                  leading provider of access control solutions, driven by a
                  commitment to integrity, customer satisfaction, and
                  innovation. Our foundational beliefs guide every aspect of our
                  operations:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-page-pillars">
                {corporateMissionPillars.map((pillar) => (
                  <article
                    className="about-page-pillar-card"
                    key={pillar.title}
                  >
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about3-section-area sp1 about-page-section about-page-section-alt"
        id="our-people"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Our Team
                </h5>
                <p>
                  Behind every door Balosh opens is a team of engineers,
                  technicians, software developers, and support specialists who
                  take personal ownership of client outcomes. At Balosh
                  Integrated Services, our people are at the heart of
                  everything we do, and their expertise drives our ability to
                  deliver exceptional value in a competitive landscape.
                </p>
                <p>
                  We are committed to creating a work environment that is safe,
                  respectful, and empowering, where collaboration thrives and
                  every voice is heard. Through continuous learning, mentorship,
                  and clear growth pathways, we equip our team with the tools
                  they need to succeed and evolve.
                </p>
                <p>
                  Diversity and inclusion remain central to our culture. By
                  embracing individuals from varied backgrounds, we foster a
                  workplace that reflects the communities we serve and
                  encourages innovation through different perspectives.
                </p>
                <p>
                  We also prioritize employee well-being by supporting both
                  professional and personal growth, ensuring our team remains
                  motivated, balanced, and inspired.
                </p>
                <p>
                  At Balosh, we do not just build a business, we cultivate a
                  dynamic environment where people can thrive, contribute
                  meaningfully, and achieve excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about3-section-area sp1 about-page-section"
        id="how-we-work"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  What Sets Us Apart
                </h5>
                <p>
                  There are many vendors, but there is only one Balosh. Leaders
                  choose us because we combine proven technology with deep local
                  operating expertise and full lifecycle accountability.
                </p>
                <p>
                  <strong>Built for Nigeria&apos;s Realities:</strong> Our
                  systems are engineered to perform in demanding conditions,
                  from power variability to large-scale and complex
                  environments.
                </p>
                <p>
                  <strong>End-to-End Accountability:</strong> We manage every
                  stage in-house, from hardware and software to installation and
                  ongoing support, ensuring seamless delivery and full
                  responsibility.
                </p>
                <p>
                  <strong>Global Technology, Local Expertise:</strong> We pair
                  world-class technology with local insight to deliver solutions
                  that work where it matters most.
                </p>
                <p>
                  <strong>Built for the Long Term:</strong> We do not just
                  deliver projects, we build partnerships focused on uptime,
                  reliability, and long-term client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about3-section-area sp1 about-page-section about-page-section-alt"
        id="milestones"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Milestones
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            {milestones.map((milestone) => (
              <div className="col-lg-6 col-md-6" key={milestone.title}>
                <article className="about-page-milestone-card">
                  <span className="about-page-milestone-icon">
                    <i className={milestone.iconClass} />
                  </span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about3-section-area sp1 about-page-section"
        id="management-team"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Management Team
                </h5>
                <p>
                  Our management team brings together experience, strategic
                  insight, and a shared commitment to excellence. With a clear
                  vision and deep industry expertise, they drive Balosh&apos;s
                  growth while ensuring consistent delivery of reliable,
                  high-quality solutions across every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about3-section-area sp1 about-page-section"
        id="md-message"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6 about-page-quote-card">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  MD&apos;s Message
                </h5>
                <p>
                  At Balosh Integrated Services, our direction is clear: deliver
                  reliable, future-focused access, mobility, and security
                  solutions that help our clients operate with confidence.
                </p>
                <p>
                  The trust placed in us by major institutions across Nigeria
                  has been earned through consistency, expertise, and results.
                  We remain committed to strengthening that trust through
                  disciplined execution, innovation, and service excellence.
                </p>
                <p>
                  Our people continue to be our strongest advantage. Their
                  ownership, technical capability, and commitment to quality are
                  what make it possible for Balosh to perform in some of the
                  country&apos;s most demanding operating environments.
                </p>
                <p>
                  We appreciate our clients, partners, and employees for their
                  continued confidence and collaboration. Together, we will
                  continue building secure, efficient, and future-ready
                  operations.
                </p>
                <div className="about-page-signoff">
                  <strong>Roy Femi Oshinbolu</strong>
                  <span>Managing Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
