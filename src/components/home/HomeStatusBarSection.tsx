'use client'

import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { projects } from "@/data/projects"

const CIRCLE_RADIUS = 70
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS

const proofStats = [
  { label: "Of operational excellence", value: "20+ Years", progress: 96 },
  { label: "Daily check-ins across Nigeria", value: "200,000+", progress: 98 },
  { label: "Skilled professionals nationwide", value: "250+", progress: 93 },
  { label: "Served across Nigeria", value: "7 Sectors", progress: 95 },
]

const featuredCaseStudies = [
  {
    slug: "zenith-bank-plc",
    result:
      "Balosh delivered access control for the Zenith Bank Tech Fair 2025, managing secure entry for over attendees.",
  },
  {
    slug: "ikoyi-club-access-control-upgrade",
    result:
      "Balosh delivered a full access overhaul at Ikoyi Club, enabling zero unauthorized access and zero downtime.",
  },
  {
    slug: "dangote-refinery-commissioning-event-security",
    result:
      "Balosh deployed rental access control for the Dangote Refinery commissioning, enforcing strict zone level authorization.",
  },
]
  .flatMap((item) => {
    const project = projects.find((projectItem) => projectItem.slug === item.slug)
    return project ? [{ ...project, result: item.result }] : []
  })

export default function HomeStatusBarSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.3,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`home-proof-section sp1 ${isInView ? "animate-bars" : ""}`}
      aria-label="Balosh performance highlights"
    >
      <div className="container">
        <div className="home-proof-intro heading6" data-aos="fade-up" data-aos-duration="900">
          <h5>
            <Image
              src="/assets/img/icons/finger2.svg"
              alt=""
              width={20}
              height={20}
              className="home-proof-intro__icon"
            />
            Balosh Integrated Services Limited
          </h5>
          <h2 className="text-anime-style-3">
            Infrastructure Behind Nigeria&apos;s Safest, Most Efficient Spaces
          </h2>
          <p>
            Balosh Integrated Services Limited is the infrastructure behind
            Nigeria&apos;s safest, most efficient spaces. For over two decades,
            we have delivered end to end access control and security
            infrastructure solutions across the country&apos;s most demanding
            environments, including airports, government facilities, corporate
            campuses, retail destinations, hospitals, and gated communities.
            We design, build, install, and support every system in house. One
            partner. No gaps. No excuses.
          </p>
        </div>

        <div className="home-proof-stats" data-aos="fade-up" data-aos-duration="1000">
          {proofStats.map((item) => (
            <div className="home-proof-stat" key={item.label}>
              <div className="home-proof-circle">
                <svg viewBox="0 0 160 160" className="home-proof-circle__svg" aria-hidden>
                  <circle
                    className="home-proof-circle__bg"
                    cx="80"
                    cy="80"
                    r={CIRCLE_RADIUS}
                  />
                  <circle
                    className="home-proof-circle__progress"
                    cx="80"
                    cy="80"
                    r={CIRCLE_RADIUS}
                    style={
                      {
                        strokeDasharray: CIRCUMFERENCE,
                        "--home-proof-circumference": CIRCUMFERENCE,
                        "--home-proof-target-offset": CIRCUMFERENCE - (item.progress / 100) * CIRCUMFERENCE,
                      } as CSSProperties
                    }
                  />
                </svg>
                <div className="home-proof-circle__content">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="home-proof-case-grid" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
          {featuredCaseStudies.map((project) => (
            <article className="home-proof-case-card" key={project.slug}>
              <span className="home-proof-case-card__client">{project.client}</span>
              <h3>{project.title}</h3>
              <p>{project.result}</p>
              <Link href={`/projects/${project.slug}`}>
                Learn more <i className="fa-solid fa-arrow-right" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
