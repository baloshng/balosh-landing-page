import Image from "next/image"
import Link from "next/link"
import { heroSlides } from "@/data/heroSlides"

export default function HomeHeroSection() {
  return (
    <div id="home" className="carousel-area owl-carousel">
      {heroSlides.map((slide, index) => (
        <div className="hero3-section-area" key={slide.id}>
          <div className="hero3-bg-cover" aria-hidden>
            <Image
              src={slide.bannerSrc}
              alt=""
              fill
              sizes="100vw"
              className="header-img4 object-cover object-center"
              unoptimized
              priority={index === 0}
            />
          </div>
          <div className="container relative z-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-main-content heading5">
                  <h5>
                    <Image
                      src="/assets/img/icons/finger1.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2 inline-block align-middle"
                      unoptimized
                    />
                    <span className="align-middle">{slide.eyebrow}</span>
                  </h5>
                  <h1 className="text-anime-style-3">{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="btn-area hero-cta-grid">
                    <Link href="/#contact" className="header-btn4">
                      Request Quote <i className="fa-solid fa-arrow-right" />
                    </Link>
                    <Link href="/#project" className="header-btn1">
                      View Projects <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assets/img/elements/elements23.png"
            alt=""
            width={400}
            height={140}
            className="elements23"
            style={{ width: "400px", height: "140px" }}
            unoptimized
          />
          <Image
            src="/assets/img/elements/elements24.png"
            alt=""
            width={400}
            height={140}
            className="elements24"
            style={{ width: "400px", height: "140px" }}
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}
