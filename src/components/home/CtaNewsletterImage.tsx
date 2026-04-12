"use client"

import { faker } from "@faker-js/faker"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BALOSH_WP_CONTENT_IMAGES } from "@/data/baloshWpImages"

/**
 * Random trusted-client logo per visit. Picks after mount so SSR/client markup match
 * (avoids hydration errors from differing random values).
 */
export default function CtaNewsletterImage() {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    faker.seed(Date.now())
    setSrc(faker.helpers.arrayElement([...BALOSH_WP_CONTENT_IMAGES]))
  }, [])

  if (!src) {
    return (
      <span
        className="inline-block max-w-full bg-neutral-100"
        style={{ height: 325, width: 288.94 }}
        aria-hidden
      />
    )
  }

  return (
    <Image
      src={src}
      alt=""
      width={289}
      height={325}
      className="h-auto max-w-full object-contain"
      sizes="289px"
    />
  )
}
