const whyBaloshItems = [
  {
    title: "Proven Track Record",
    description:
      "21 years of experience, Balosh has developed solutions for every unique environment.",
    iconClass: "fa-solid fa-award",
  },
  {
    title: "Largest Car Park Management Portfolio",
    description:
      "80% Market Share, You will find Balosh at most high profile locations.",
    iconClass: "fa-solid fa-square-parking",
  },
  {
    title: "250+ Workforce",
    description:
      "We have a workforce of over 250 staff spread across 20 locations.",
    iconClass: "fa-solid fa-users-gear",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We are yet to lose a customer, so we must be doing something right.",
    iconClass: "fa-solid fa-thumbs-up",
  },
  {
    title: "90% Referrals",
    description: "We have no sales team but our work speaks for us.",
    iconClass: "fa-solid fa-share-nodes",
  },
  {
    title: "109M+ Check-ins / Year",
    description:
      "Balosh is used to check-in more than 300,000 times everyday, for every unique environment.",
    iconClass: "fa-solid fa-door-open",
  },
]

type WhyBaloshWheelSectionProps = {
  id?: string
}

export default function WhyBaloshWheelSection({
  id = "why-balosh",
}: WhyBaloshWheelSectionProps) {
  return (
    <section className="why-balosh-wheel-section sp1" id={id}>
      <div className="why-balosh-wheel-container">
        <h2
          className="why-balosh-wheel-title"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Why Balosh?
        </h2>

        <div
          className="why-balosh-wheel"
          data-aos="zoom-in"
          data-aos-duration="1100"
          data-aos-delay="120"
        >
          <svg
            className="why-balosh-wheel-track"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <circle
              className="why-balosh-wheel-base-ring"
              cx="50"
              cy="50"
              r="46"
            />
            <circle
              className="why-balosh-wheel-glow"
              cx="50"
              cy="50"
              r="46"
              transform="rotate(-125 50 50)"
            />
          </svg>

          {whyBaloshItems.map((item, index) => (
            <article
              className={`why-balosh-wheel-item why-balosh-wheel-item-${index + 1}`}
              key={item.title}
            >
              <div className="why-balosh-wheel-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="why-balosh-wheel-node" aria-hidden>
                <span className={item.iconClass} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
