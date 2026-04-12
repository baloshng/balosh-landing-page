export type HeroSlide = {
  id: string
  bannerSrc: string
  eyebrow: string
  title: string
  description: string
}

/**
 * Hero carousel slides: imagery at /assets/img/logo/banner1–3.jpg; copy aligned
 * with solution pillars on balosh.com (Access Control, Automated Entrances, Car Parking).
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "access-control",
    bannerSrc: "/assets/img/logo/banner1.webp",
    eyebrow: "Balosh Integrated Services",
    title: "Access Control That Matches How Your Site Really Works",
    description:
      "From credentials and lanes to audit-ready reporting, we design and deploy access systems for corporate, residential, institutional, and high-footfall environments—so the right people get through, every time.",
  },
  {
    id: "automated-entrances",
    bannerSrc: "/assets/img/logo/banner1.webp",
    eyebrow: "Automated Entrances",
    title: "Barriers, Turnstiles & Speed Gates Built for Throughput",
    description:
      "Automated entrance solutions that improve flow, reduce tailgating risk, and keep operations moving—whether it is a single lane or a busy mixed-use development.",
  },
  {
    id: "car-parking",
    bannerSrc: "/assets/img/logo/banner1.jpg",
    eyebrow: "Car Parking",
    title: "Reliable Parking Infrastructure & Revenue Operations",
    description:
      "Ticketing, access regulation, and car park management for malls, hospitals, estates, and event venues—backed by responsive support and workmanship Balosh is known for.",
  },
]
