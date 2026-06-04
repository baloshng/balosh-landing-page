"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import type { TrustedClient } from "@/data/trustedClients"

type HomeTrustedClientsSectionProps = {
  clients: TrustedClient[]
}

export default function HomeTrustedClientsSection({
  clients,
}: HomeTrustedClientsSectionProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  const loop = reduceMotion ? clients : [...clients, ...clients]

  return (
    <div className="trusted-clients-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-lg-auto text-center">
            <div className="trusted-clients-header heading5">
              <h5
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={0}
                data-aos-offset={40}
                className="mb-2"
              >
                Clients We Serve
              </h5>
              {/* <p
                className="mb-0"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={100}
                data-aos-offset={40}
              >
                Logos of companies Balosh has served across access, parking,
                traffic, and security operations.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="trusted-clients-marquee-outer mt-4"
        data-aos="fade-up"
        data-aos-duration={900}
        data-aos-delay={200}
        data-aos-offset={40}
      >
        <div className="trusted-clients-marquee-mask">
          <div className="trusted-clients-marquee-track">
            {loop.map((client, idx) => (
              <div
                className="trusted-clients-marquee__item"
                key={`${client.name}-${idx}`}
              >
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  width={320}
                  height={128}
                  className="trusted-clients-marquee__img"
                  sizes="(max-width: 767px) 220px, 320px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
