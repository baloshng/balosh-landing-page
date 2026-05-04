import Image from "next/image"
import Link from "next/link"
import { socialLinks } from "@/data/socialLinks"
import { solutionNavigationLinks } from "@/data/solutions"

export default function Footer() {
  return (
    <>
      <div className="footer3-section-area">
        <Image
          src="/assets/img/bg/bg1.png"
          alt=""
          fill
          className="bg1 object-cover"
          sizes="100vw"
        />
        <div className="container relative z-1">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="logo-content">
                <Image
                  src="/assets/img/logo/balosh.png"
                  alt="Balosh logo"
                  width={200}
                  height={60}
                  className="h-auto w-auto max-w-full"
                />
                <p>
                  Since 2005, Balosh has delivered reliable access control,
                  parking, and security solutions for critical environments
                  across Nigeria.
                </p>
                <ul>
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                      >
                        <i className={item.iconClass} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space30 d-lg-none d-block" />
            </div>
            <div className="col-lg-1 d-lg-block d-none" />
            <div className="col-lg-2 col-md-6">
              <div className="footer-list">
                <h4>Quick Links</h4>
                <ul>
                  {solutionNavigationLinks.slice(0, 4).map((item) => (
                    <li key={item.id}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/market">Industries We Serve</Link>
                  </li>
                </ul>
              </div>
              <div className="space30 d-lg-none d-block" />
            </div>
            <div className="col-lg-1 d-lg-block d-none" />
            <div className="col-lg-2 col-md-6">
              <div className="footer-list">
                <h4>Explore</h4>
                <ul>
                  <li>
                    <Link href="/#home">Home&nbsp;</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/market">Our Market</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/#contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="head">
                <h4>Contact Us </h4>
              </div>
              <div className="location-area">
                <div className="img1">
                  <Link href="tel:+2348022596060">
                    <i className="fa-solid fa-phone" />
                  </Link>
                </div>
                <div className="text">
                  <Link href="tel:+2348022596060">0802 259 6060</Link>
                </div>
              </div>
              <div className="location-area">
                <div className="img1">
                  <Link href="mailto:info@balosh.com">
                    <i className="fa-regular fa-envelope" />
                  </Link>
                </div>
                <div className="text">
                  <Link href="mailto:info@balosh.com">info@balosh.com</Link>
                </div>
              </div>
              <div className="location-area">
                <div className="img1">
                  <Link href="/#contact">
                    <i className="fa-solid fa-location-dot" />
                  </Link>
                </div>
                <div className="text">
                  <Link href="/#contact">
                    9, Osaro Isokpan Street,{" "}
                    <br className="d-lg-block d-none" /> Lekki Phase 1, Lagos.
                  </Link>
                </div>
              </div>
            </div>
            <div className="space50" />
            <div className="col-lg-12 m-auto">
              <div className="copyright text-center">
                <p>© Copyright 2026 - Balosh. All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
