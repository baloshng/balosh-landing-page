"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MouseEvent } from "react"
import { aboutNavigationLinks } from "@/data/aboutSections"
import { socialLinks } from "@/data/socialLinks"
import { solutionNavigationLinks } from "@/data/solutions"

type NavKey = "about" | "solutions" | "market" | "blog"

function useInternalNavActive(): NavKey | null {
  const pathname = usePathname()
  if (pathname.startsWith("/about")) return "about"
  if (pathname.startsWith("/solutions")) return "solutions"
  if (pathname.startsWith("/market")) return "market"
  if (pathname.startsWith("/blog")) return "blog"
  return null
}

function linkClass(isActive: boolean) {
  return isActive ? "nav-link active" : "nav-link"
}

export default function InternalHeader() {
  const active = useInternalNavActive()
  const hardNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      window.location.assign(href)
    }

  return (
    <div>
      <header>
        <div
          className="header-area homepage3 single-page3 header header-sticky d-none d-lg-block "
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav id="navbar-example2" className="navbar">
                  <div className="header-elements internal-header-elements">
                    <div className="site-logo">
                      <Link href="/">
                        <Image
                          src="/assets/img/logo/balosh.png"
                          alt=""
                          width={286}
                          height={88}
                          className="w-[100px] h-auto"
                          style={{ width: "100px", height: "auto" }}
                        />
                      </Link>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li className="nav-item">
                          <Link
                            href="/"
                            className="nav-link"
                            onClick={hardNavigate("/")}
                          >
                            <span>Home</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/about"
                            className={linkClass(active === "about")}
                          >
                            <span>About</span>
                          </Link>
                          <ul className="dropdown-padding">
                            {aboutNavigationLinks.map((item) => (
                              <li key={item.id}>
                                <Link href={item.href}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/solutions"
                            className={linkClass(active === "solutions")}
                          >
                            <span>Solutions</span>
                          </Link>
                          <ul className="dropdown-padding">
                            {solutionNavigationLinks.map((item) => (
                              <li key={item.id}>
                                <Link href={item.href}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/market"
                            className={linkClass(active === "market")}
                          >
                            <span>Our Market</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/#faq"
                            className="nav-link"
                            onClick={hardNavigate("/#faq")}
                          >
                            <span>FAQ</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/blog"
                            className={linkClass(active === "blog")}
                          >
                            <span>Blogs</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action-area">
                      <ul className="header-social-links" aria-label="Balosh social media">
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
                      <div className="btn-area">
                        <Link
                          href="/#contact"
                          className="header-btn4"
                          onClick={hardNavigate("/#contact")}
                        >
                          Contact Us
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header mobile-haeder3 d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/">
                  <Image
                    src="/assets/img/logo/balosh.png"
                    alt=""
                    width={286}
                    height={88}
                    className="w-[100px] h-auto"
                    style={{ width: "100px", height: "auto" }}
                  />
                </Link>
              </div>
              <div className="mobile-header-actions">
                <div className="mobile-nav-icon dots-menu">
                  <i className="fa-solid fa-bars-staggered" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-sidebar mobile-sidebar3">
        <div className="logosicon-area">
          <div className="logos">
            <Link href="/">
              <Image
                src="/assets/img/logo/balosh.png"
                alt=""
                width={286}
                height={88}
                className="w-[100px] h-auto"
                style={{ width: "100px", height: "auto" }}
              />
            </Link>
          </div>
          <div className="menu-close">
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={hardNavigate("/")}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClass(active === "about")}>
                <span>About</span>
              </Link>
              <ul className="sub-menu">
                {aboutNavigationLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link
                href="/solutions"
                className={linkClass(active === "solutions")}
              >
                <span>Solutions</span>
              </Link>
              <ul className="sub-menu">
                {solutionNavigationLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/market" className={linkClass(active === "market")}>
                <span>Our Market</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#faq"
                className="nav-link"
                onClick={hardNavigate("/#faq")}
              >
                <span>FAQ</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={linkClass(active === "blog")}>
                <span>Blogs</span>
              </Link>
            </li>
          </ul>
          <div className="allmobilesection">
            <Link
              href="/#contact"
              className="header-btn4"
              onClick={hardNavigate("/#contact")}
            >
              Get Started{" "}
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
            <div className="single-footer">
              <h3>Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="contact-info-text">
                    <Link href="tel:+2348022596060">0802 259 6060</Link>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <Link href="mailto:info@balosh.com">info@balosh.com</Link>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="contact-info-text">
                      <Link
                        href="/#contact"
                        onClick={hardNavigate("/#contact")}
                      >
                        9, Osaro Isokpan Street, <br /> Lekki Phase 1, Lagos.
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
