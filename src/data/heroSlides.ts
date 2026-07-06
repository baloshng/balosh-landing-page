export type HeroSlide = {
  id: string
  bannerSrc: string
  title: string
  description: string
}

/**
 * Home hero slide: imagery at /assets/img/logo/banner1.jpg.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "important-doors",
    bannerSrc: "/assets/img/logo/banner1.jpg",
    title: "...We open important doors!",
    description: "Securing and managing Nigeria's most critical spaces since 2005.",
  },
]
