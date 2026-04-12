import Image from "next/image"
import Link from "next/link"

export default function HomeHeroSection() {
  return (
    <div id="home" className="carousel-area owl-carousel">
      {[1, 2, 3].map((item) => (
        <div className="hero3-section-area" key={item}>
          <Image
            src="/assets/img/logo/banner1.jpg"
            alt=""
            width={1920}
            height={1080}
            className="header-img4 h-auto w-full max-w-full"
            unoptimized
            priority={item === 1}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-main-content heading5">
                  <h5>
                    <Image src="/assets/img/icons/finger1.svg" alt="" width={20} height={20} className="mr-2 inline-block align-middle" unoptimized />
                    <span className="align-middle">Balosh Integrated Services</span>
                  </h5>
                  <h1 className="text-anime-style-3">Access Control, Parking &amp; Traffic Management Solutions</h1>
                  <p>We deploy secure access control systems, automated entrances, car park infrastructure, and event entry solutions for corporate, residential, institutional, and high-traffic environments.</p>
                  <div className="btn-area">
                    <Link href="/#contact" className="header-btn4">
                      Request a Quote <i className="fa-solid fa-arrow-right" />
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
