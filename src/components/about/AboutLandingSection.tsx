import Link from "next/link"
import { aboutLegacyLinks } from "@/data/aboutLegacyLinks"

export default function AboutLandingSection() {
  return (
    <section className="about-landing-section sp1">
      <div className="container">
        <div className="row align-items-start gy-4">
          <div className="col-lg-6">
            <div className="about-landing-intro heading6">
              <h5>About Balosh</h5>
              <h2>Access, Mobility, and Security Solutions Built for Real-World Operations</h2>
              <p>
                Balosh Integrated Services has delivered access control and operational security solutions in
                Nigeria since 2005. We support commercial, institutional, residential, and event environments
                with systems designed for throughput, safety, and reliability.
              </p>
              <p>
                This page gives you a fast route into our company background and leadership perspectives,
                including links to the key About resources from the legacy Balosh website.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-landing-link-grid">
              {aboutLegacyLinks.map((item) => (
                <article className="about-landing-link-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.href} target="_blank" rel="noreferrer">
                    Open Resource <i className="fa-solid fa-arrow-up-right-from-square" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
