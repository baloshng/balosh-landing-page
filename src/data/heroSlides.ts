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
    title: "We Open Important Doors",
    description: "Securing and managing Nigeria's most critical spaces — since 2005.",
  },
]
