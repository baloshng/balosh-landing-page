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
    title: "Establishment",
    description: "Balosh Integrated Services was founded, focusing on access control solutions.",
    iconClass: "fa-solid fa-award",
  },
  {
    title: "Expansion",
    description:
      "Successfully managed parking facilities, enhancing customer satisfaction and operational efficiency.",
    iconClass: "fa-solid fa-forward",
  },
  {
    title: "Growth",
    description: "Expanded our workforce to over 300 employees, managing an average of 100,000 passages daily.",
    iconClass: "fa-solid fa-chart-line",
  },
  {
    title: "Digital Innovation",
    description:
      "Ventured into mobile app development, creating estate management and recreational center applications to meet the evolving needs of our clients.",
    iconClass: "fa-solid fa-code",
  },
]

export default function AboutExtendedSections() {
  return (
    <>
      <section className="about3-section-area sp1 about-page-section" id="corporate-philosophy">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <div className="heading6">
                <h5>
                  <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="inline-block align-middle" unoptimized />
                  Corporate Philosophy
                </h5>
                <h2>Our Vision</h2>
                <p>
                  Our philosophy is not just a set of statements; it’s a commitment to excellence in every interaction. At Balosh Integrated
                  Services, we are dedicated to creating secure environments that empower businesses and communities, ensuring a brighter,
                  safer future for all.
                </p>
                <h2 className="mt-6">Our Mission</h2>
                <p>
                  At Balosh Integrated Services, our mission is to be the leading provider of access control solutions, driven by a
                  commitment to integrity, customer satisfaction, and innovation. Our foundational beliefs guide every aspect of our
                  operations:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-page-pillars">
                {corporateMissionPillars.map((pillar) => (
                  <article className="about-page-pillar-card" key={pillar.title}>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about3-section-area sp1 about-page-section about-page-section-alt" id="our-people">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6">
                <h5>
                  <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="inline-block align-middle" unoptimized />
                  Our People
                </h5>
                <p>
                  At Balosh Integrated Services, our greatest assets are our people, and we take immense pride in their contributions. We
                  rely on their enthusiasm, talent, and commitment to drive our success in today’s competitive market. Our employees are the
                  cornerstone of our ability to deliver exceptional service to our customers.
                </p>
                <p>
                  We believe that a positive employee experience directly translates to superior customer service. To ensure this, Balosh is
                  dedicated to fostering a work environment that is safe, promotes well-being, and treats everyone with respect. Our culture
                  emphasizes teamwork and open communication, allowing all employees to share ideas and collaborate effectively. We prioritize
                  professional development by offering comprehensive training programs, mentorship opportunities, and clear pathways for career
                  advancement.
                </p>
                <p>
                  Diversity and inclusion are integral to our workplace philosophy. We actively seek to hire individuals from varied
                  backgrounds, ensuring that our workforce reflects the communities we serve. Our inclusive policies and diversity training
                  foster an environment where every employee feels valued and respected.
                </p>
                <p>
                  Employee well-being is a priority at Balosh. We offer wellness programs, flexible work arrangements, and resources such as
                  Employee Assistance Programs to support mental health. Our social activities and team-building events help create a strong
                  sense of community among our staff.
                </p>
                <p>
                  As we continue to grow, we remain committed to providing our employees with the tools and opportunities they need to thrive.
                  At Balosh Integrated Services, we don’t just build a successful business; we cultivate a supportive and dynamic workplace
                  where our people can excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about3-section-area sp1 about-page-section" id="how-we-work">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6">
                <h5>
                  <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="inline-block align-middle" unoptimized />
                  How We Work
                </h5>
                <p>
                  At Balosh Integrated Services, we operate with a clear vision and a strong commitment to performance and delivery. Our
                  pursuit of excellence is evident in every aspect of our work, as we provide high-quality products and services tailored to
                  meet the needs of our customers. Central to our ethos is the promise of safe delivery.
                </p>
                <p>
                  Health and safety are fundamental principles that guide our operations. We cultivate a culture of rigorous attention to
                  detail and meticulous planning, ensuring that these values are integrated into every project. This disciplined approach not
                  only enhances our project management capabilities but also guarantees successful outcomes.
                </p>
                <p>
                  However, our commitment to safe delivery extends beyond mere health and safety. We recognize the importance of our customers’
                  valuable assets and take full responsibility for their investments. We treat our customers’ risks and reputations as if they
                  were our own, fostering a sense of accountability in all our endeavors. This dedication has enabled us to build long-term
                  partnerships with our clients, relationships that are grounded in trust and collaboration and have stood the test of time.
                </p>
                <p>
                  At Balosh Integrated Services, we don’t just deliver projects; we cultivate enduring partnerships that drive mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about3-section-area sp1 about-page-section about-page-section-alt" id="milestones">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6">
                <h5>
                  <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="inline-block align-middle" unoptimized />
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

      <section className="about3-section-area sp1 about-page-section" id="md-message">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading6 about-page-quote-card">
                <h5>
                  <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="inline-block align-middle" unoptimized />
                  MD&apos;s Message
                </h5>
                <p>
                  As we look ahead to our 20th anniversary next July, this year marks a significant moment for Balosh Integrated Services!
                  Our journey has been made possible by two vital pillars: our incredible customers and our committed employees.
                </p>
                <p>
                  We are immensely grateful for the trust our customers place in us. Their confidence - reflected in their continued business,
                  referrals, and partnership - drives us to exceed expectations every day. Our dedicated employees embody this spirit of
                  excellence, delivering services with remarkable quality and efficiency. Their unwavering commitment fills us with excitement
                  for the bright future ahead.
                </p>
                <p>
                  In the past year, I have been particularly proud of our company’s resilience. Together, we have navigated unprecedented
                  challenges and successfully expanded our range of solutions to address evolving needs. Our major projects not only showcase
                  our capabilities but also highlight our dedication to innovation and service excellence.
                </p>
                <p>
                  As we approach our 20th anniversary, I want to extend my heartfelt gratitude to our employees, customers, and partners.
                  Together, we are building a brighter future, and I am confident that Balosh Integrated Services will continue to thrive as we
                  provide solutions that truly make a difference.
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
