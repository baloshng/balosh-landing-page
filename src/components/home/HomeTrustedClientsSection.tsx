"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import type { TrustedClient } from "@/data/trustedClients"

type HomeTrustedClientsSectionProps = {
  clients: TrustedClient[]
}

export default function HomeTrustedClientsSection({ clients }: HomeTrustedClientsSectionProps) {
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
                data-aos-delay={200}
                data-aos-offset={40}
                className="mb-2"
              >
                Trusted By These Companies
              </h5>
              <p
                className="mb-0"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={300}
                data-aos-offset={40}
              >
                A selection of organisations that rely on Balosh for access, parking, and traffic solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="trusted-clients-marquee-outer mt-4"
        data-aos="fade-up"
        data-aos-duration={900}
        data-aos-delay={400}
        data-aos-offset={40}
      >
        <div className="trusted-clients-marquee-mask">
          <div className="trusted-clients-marquee-track">
            {loop.map((client, idx) => (
              <div className="trusted-clients-marquee__item" key={`${client.name}-${idx}`}>
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  width={200}
                  height={120}
                  className="trusted-clients-marquee__img"
                  sizes="140px"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
