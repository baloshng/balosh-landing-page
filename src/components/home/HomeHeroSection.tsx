import Image from "next/image"
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
              sizes="(max-width: 991px) 100vw, 92vw"
              className="header-img4 object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 0, 0, 0.42)",
                pointerEvents: "none",
              }}
            />
          </div>
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">
                <div className="header-main-content heading5 text-center home-hero-content">
                  <h1
                    className="text-anime-style-3"
                    style={{ color: "var(--why-balosh-orange)" }}
                  >
                    {slide.id === "important-doors" ? (
                      <>
                        ...We open{" "}
                        <span
                          style={{
                            color: "var(--why-balosh-orange)",
                            WebkitTextFillColor: "var(--why-balosh-orange)",
                          }}
                        >
                          important doors!
                        </span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  <p>{slide.description}</p>
                  {/* <div className="btn-area hero-cta-grid">
                    <Link href="/solutions" className="header-btn4">
                      Explore Our Solutions <i className="fa-solid fa-arrow-right" />
                    </Link>
                    <Link href="/#contact" className="header-btn1">
                      Schedule a Site Assessment <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div> */}
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
          />
          <Image
            src="/assets/img/elements/elements24.png"
            alt=""
            width={400}
            height={140}
            className="elements24"
            style={{ width: "400px", height: "140px" }}
          />
        </div>
      ))}
    </div>
  )
}
