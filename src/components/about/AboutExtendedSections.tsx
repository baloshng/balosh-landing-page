import Image from "next/image"
import Link from "next/link"
import WhyBaloshWheelSection from "@/components/WhyBaloshWheelSection"
import { aboutNavigationLinks } from "@/data/aboutSections"

const whoWeAreParagraphs = [
  "Since 2005, Balosh Integrated Services Limited has built its reputation on three uncompromising pillars: reliability, credibility, and quiet dominance.",
  "We operate end-to-end: design, development, installation, and ongoing support, all in-house, with no middlemen and no gaps in accountability. From the terminals that move millions to the institutions that govern a nation, the names that define Nigeria's most critical spaces have one thing in common: Balosh.",
  "For 20+ years, Nigeria's airports, government institutions, major retail destinations, corporate campuses, and critical national infrastructure have entrusted their security and access operations to us. That trust is not given lightly, and we have never taken it for granted.",
  "We don't rely on advertising. We let our work speak for itself.",
  "We are builders, operators, and long-term partners, trusted by the organisations that cannot afford to get access control and security wrong.",
]

const valuePillars = [
  {
    title: "Built on Trust",
    description:
      "We operate with transparency and take full responsibility for every system we deliver. Our clients rely on us because we stand behind our work, consistently and without compromise.",
  },
  {
    title: "Client-First Thinking",
    description:
      "We build long-term partnerships, not one-off projects, delivering solutions tailored to each client's environment and real operational needs.",
  },
  {
    title: "People Who Deliver",
    description:
      "Our strength lies in our team. We invest in continuous development and empower our people to take ownership, solve problems, and deliver results in complex, high-demand environments.",
  },
  {
    title: "Innovation with Agility",
    description:
      "We don't just adopt new technologies; we respond quickly to changing needs. Our approach allows us to adapt systems, integrate new solutions, and continuously improve performance.",
  },
  {
    title: "Community Impact",
    description:
      "Our work extends beyond installations. By enabling safer access and improving how people move through critical spaces, we contribute to safer, more efficient communities and to the development of local expertise and employment.",
  },
  {
    title: "Excellence Without Compromise",
    description:
      "In the environments we operate in, failure is not an option. We are committed to delivering systems that perform consistently, reliably, and at scale.",
  },
]

const journeyParagraphs = [
  "Founded in 2005, Balosh Integrated Services began with a clear focus: to bring structure, reliability, and control to environments where it matters most.",
  "Over the past two decades, that focus has driven our growth into a trusted leader in access control and infrastructure systems, delivering solutions across Nigeria's most critical and high-traffic environments.",
  "Today, our systems support over 200,000 daily check-ins across Nigeria, reflecting the scale, reliability, and operational confidence our clients depend on. Backed by a team of over 100 skilled professionals nationwide, we continue to deliver consistent performance across sectors.",
  "Our evolution has been shaped by a commitment to building systems that work in real conditions. By developing and deploying OEM hardware tailored specifically for the Nigerian environment, we ensure durability, efficiency, and long-term value across every deployment.",
  "As Balosh continues to grow, one thing remains constant: a commitment to delivering solutions that perform consistently, reliably, and at scale.",
]

const journeyHighlights = [
  {
    title: "2005 Foundation",
    description:
      "Balosh Integrated Services began with a focus on structure, reliability, and control.",
    iconClass: "fa-solid fa-award",
  },
  {
    title: "Two Decades of Growth",
    description:
      "Balosh expanded into a trusted leader in access control and infrastructure systems.",
    iconClass: "fa-solid fa-forward",
  },
  {
    title: "200,000+ Daily Check-ins",
    description:
      "Balosh systems now support large-scale movement across critical and high-traffic environments.",
    iconClass: "fa-solid fa-chart-line",
  },
  {
    title: "100+ Skilled Professionals",
    description:
      "A nationwide team supports consistent delivery, service, and long-term performance.",
    iconClass: "fa-solid fa-users",
  },
]

const teamCulture = [
  {
    title: "Ownership is expected",
    description: "Every team member is accountable for results",
  },
  {
    title: "Collaboration drives execution",
    description: "Complex challenges are solved as one team",
  },
  {
    title: "Continuous growth is a priority",
    description: "Through training, mentorship, and real-world experience",
  },
]

const leadershipTeam = [
  {
    title: "Strategic Leadership",
    role: "Management Team",
    image: "/assets/img/all-images/team-img1.png",
    profile:
      "Sets the clear vision and strategic direction that guide Balosh's growth, credibility, and culture.",
  },
  {
    title: "Delivery Leadership",
    role: "Operations Team",
    image: "/assets/img/all-images/team-img2.png",
    profile:
      "Keeps project delivery, support, and service standards aligned across demanding client environments.",
  },
  {
    title: "Technical Leadership",
    role: "Systems Team",
    image: "/assets/img/all-images/team-img3.png",
    profile:
      "Applies deep industry expertise to system design, integration, installation, and long-term reliability.",
  },
]

const differenceItems = [
  {
    title: "Built for Nigeria's Realities",
    description:
      "Our systems are engineered to perform in demanding conditions, from power variability to large-scale, complex environments. We don't adapt foreign solutions; we build for where we operate.",
  },
  {
    title: "End-to-End Accountability",
    description:
      "We manage every stage in-house: hardware, software, installation, and ongoing support, ensuring seamless delivery and a single point of accountability.",
  },
  {
    title: "Proprietary OEM Hardware",
    description:
      "Our solutions are powered by hardware designed specifically for Nigerian conditions, offering durability, faster parts access, and flexible customisation.",
  },
  {
    title: "Global Technology, Local Expertise",
    description:
      "We combine world-class technology partnerships with deep local knowledge to deliver solutions that truly work where it matters most.",
  },
  {
    title: "A Reputation Earned Through Results",
    description:
      "For over 20+ years, our clients have become our strongest advocates, driven by consistent performance and the trust built through every project.",
  },
  {
    title: "Built for the Long Term",
    description:
      "We don't just deliver projects; we build lasting partnerships. Your uptime, reliability, and long-term success remain our priority long after installation.",
  },
]

export default function AboutExtendedSections() {
  return (
    <>
      <section className="about-page-section about-page-nav-section sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="heading6 text-center">
                <h5 data-aos="fade-up" data-aos-duration="800">
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  About Balosh
                </h5>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Identity, Direction, and the People Behind the Brand
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  The About Us page is structured to communicate Balosh&apos;s
                  identity, values, journey, team structure, difference, and
                  leadership in one clear path.
                </p>
              </div>
            </div>
          </div>
          <div className="about-page-nav-grid">
            {aboutNavigationLinks.map((item, index) => (
              <Link
                className="about-page-nav-card"
                href={item.href}
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={120 + index * 70}
              >
                <span className="about-page-nav-card-kicker">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="about-page-nav-card-title">
                  {item.title}
                  <i className="fa-solid fa-arrow-right" />
                </span>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about3-section-area sp1 about-page-section" id="who-we-are">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="heading6">
                <h5 data-aos="fade-right" data-aos-duration="800">
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Introduction
                </h5>
                <h2 data-aos="fade-right" data-aos-duration="950" data-aos-delay="120">
                  Who We Are
                </h2>
                {whoWeAreParagraphs.map((paragraph) => (
                  <p key={paragraph} data-aos="fade-right" data-aos-duration="1050">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyBaloshWheelSection id="about-why-balosh" />

      <section
        className="about3-section-area sp1 about-page-section about-page-section-alt"
        id="what-we-stand-for"
      >
        <div className="container">
          <div className="row align-items-start gy-4">
            <div className="col-lg-5">
              <div className="heading6">
                <h5 data-aos="fade-right" data-aos-duration="800">
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Mission and Vision
                </h5>
                <h2 data-aos="fade-right" data-aos-duration="950" data-aos-delay="80">
                  Built on Principles That Deliver
                </h2>
                <h3 data-aos="fade-right" data-aos-duration="950" data-aos-delay="140">
                  What We Stand For
                </h3>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="180">
                  At Balosh, our work is guided by principles that shape how we
                  design, deliver, and support every system.
                </p>
                <div style={{ height: "1.5rem" }} />
                <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="220">
                  Our Focus
                </h3>
                <p data-aos="fade-right" data-aos-duration="1050" data-aos-delay="260">
                  We create secure, efficient environments that give
                  organisations and communities confidence, control, and
                  operational clarity.
                </p>
                <div style={{ height: "1.5rem" }} />
                <h3 data-aos="fade-right" data-aos-duration="1100" data-aos-delay="300">
                  Our Commitment
                </h3>
                <p data-aos="fade-right" data-aos-duration="1150" data-aos-delay="340">
                  To be Nigeria&apos;s most trusted provider of access control and security
                  infrastructure, driven by integrity, long-term client partnerships,
                  and a relentless commitment to systems that actually work.
                </p>
           
              </div>
            </div>
            <div className="col-lg-7">
              <div className="heading6 about-page-section-subhead">
                <h3 data-aos="fade-left" data-aos-duration="900">What Drives Us</h3>
              </div>
              <div className="about-page-pillars">
                {valuePillars.map((pillar, index) => (
                  <article
                    className="about-page-pillar-card"
                    key={pillar.title}
                    data-aos="fade-left"
                    data-aos-duration="950"
                    data-aos-delay={100 + index * 70}
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

      <section className="about3-section-area sp1 about-page-section" id="balosh-journey">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="heading6">
                <h5 data-aos="fade-right" data-aos-duration="800">
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  The Balosh Journey
                </h5>
                <h2 data-aos="fade-right" data-aos-duration="950" data-aos-delay="100">
                  Our Journey
                </h2>
                {journeyParagraphs.map((paragraph) => (
                  <p key={paragraph} data-aos="fade-right" data-aos-duration="1050">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                {journeyHighlights.map((milestone, index) => (
                  <div
                    className="col-lg-6 col-md-6"
                    key={milestone.title}
                    data-aos="fade-up"
                    data-aos-duration="950"
                    data-aos-delay={100 + index * 90}
                  >
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
          </div>
        </div>
      </section>

      <section
        className="about3-section-area sp1 about-page-section about-page-section-alt"
        id="balosh-allstars"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="heading6">
                <h5 data-aos="fade-right" data-aos-duration="800">
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Balosh Allstars
                </h5>
                <h2 data-aos="fade-right" data-aos-duration="950" data-aos-delay="80">
                  The Team Behind Every Important Door
                </h2>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="140">
                  Behind every door we open is a team we call the Balosh
                  Allstars, engineers, technicians, software developers, and
                  support specialists who take full ownership of every outcome.
                </p>
                <p data-aos="fade-right" data-aos-duration="1050" data-aos-delay="180">
                  Because at Balosh, &quot;we open important doors&quot;, and
                  the people behind those doors matter just as much as the
                  systems themselves.
                </p>
                <p data-aos="fade-right" data-aos-duration="1100" data-aos-delay="220">
                  Our team is built to deliver in environments where performance
                  is critical. Their expertise, responsiveness, and commitment
                  to excellence ensure that every system we design, install, and
                  support works, consistently and at scale.
                </p>
                <p data-aos="fade-right" data-aos-duration="1150" data-aos-delay="260">
                  We recognise that opening doors goes beyond access, it is
                  about opportunity, trust, and impact. By bringing together
                  people from diverse backgrounds, we foster a culture that
                  encourages new thinking, adaptability, and stronger outcomes
                  for clients. At Balosh, we don&apos;t just open important doors, We have the team that ensures what&apos;s behind them works.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading6 text-center">
                <h3 data-aos="fade-left" data-aos-duration="900">
                  We have built a culture where:
                </h3>
              </div>
              <div className="space20" />
              <div className="row g-3">
                {teamCulture.map((item, index) => {
                  const wrapperClass =
                    index === 2
                      ? "col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2"
                      : "col-12 col-md-6"

                  return (
                    <div className={wrapperClass} key={item.title}>
                      <article
                        className="about-page-pillar-card h-100"
                        data-aos="fade-left"
                        data-aos-duration="950"
                        data-aos-delay={80 + index * 90}
                      >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </article>
                    </div>
                  )
                })}
              </div>
      
              <div className="space20" />
            </div>
          </div>
        </div>
      </section>

      <section className="about3-section-area sp1 about-page-section" id="balosh-difference">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-5">
              <div className="heading6">
                <h5 data-aos="fade-right" data-aos-duration="800">
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  The Balosh Difference
                </h5>
                <h2 data-aos="fade-right" data-aos-duration="950" data-aos-delay="80">
                  Why Leaders Choose Balosh
                </h2>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="140">
                  There are many vendors, but there is only one Balosh.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-page-pillars">
                {differenceItems.map((item, index) => (
                  <article
                    className="about-page-pillar-card"
                    key={item.title}
                    data-aos="fade-left"
                    data-aos-duration="950"
                    data-aos-delay={100 + index * 70}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about3-section-area sp1 about-page-section about-page-section-alt"
        id="balosh-leadership"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="heading6 text-center">
                <h5 data-aos="fade-up" data-aos-duration="800">
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Meet the Team
                </h5>
                <h2 data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
                  Balosh Leadership Team
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="180">
                Our management team brings together decades of experience, strategic insight, and a shared 
                commitment to excellence. With a clear vision and deep industry expertise, they drive Balosh&apos;s growth 
                while ensuring the consistent delivery of reliable, high-quality solutions across every project.
                </p>
              </div>
            </div>
          </div>
          <div className="about-page-team-grid">
            {leadershipTeam.map((member, index) => (
              <article
                className="about-page-team-card"
                key={member.title}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={120 + index * 100}
              >
                <div className="about-page-team-card-image">
                  <Image
                    src={member.image}
                    alt={member.title}
                    width={370}
                    height={370}
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  />
                </div>
                <div className="about-page-team-card-content">
                  <span>{member.role}</span>
                  <h3>{member.title}</h3>
                  <p>{member.profile}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
