"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MouseEvent } from "react"
import { useEffect, useState } from "react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const active = useInternalNavActive()
  
  // Sync React state with DOM
  useEffect(() => {
    const sidebar = document.querySelector(".mobile-sidebar")
    if (sidebar) {
      if (mobileMenuOpen) {
        sidebar.classList.add("mobile-menu-active")
      } else {
        sidebar.classList.remove("mobile-menu-active")
      }
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }
  
  const hardNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      window.location.assign(href)
    }

  const handleAnchorClick =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (href.includes("#")) {
        closeMobileMenu()
      }
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
                      <Link
                        href="/"
                        onClick={hardNavigate("/")}
                        style={{
                          display: "inline-block",
                          lineHeight: 0,
                          position: "relative",
                          width: "100px",
                        }}
                      >
                        <Image
                          src="/assets/img/logo/balosh.png"
                          alt=""
                          width={286}
                          height={88}
                          style={{ width: "100px", height: "auto" }}
                        />
                        <span
                          style={{
                            color: "#ff7a00",
                            fontSize: "9px",
                            fontWeight: 700,
                            left: "50%",
                            lineHeight: 1,
                            pointerEvents: "none",
                            position: "absolute",
                            textAlign: "center",
                            textTransform: "lowercase",
                            top: "calc(100% + 2px)",
                            transform: "translateX(-50%)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          ...we open important doors!
                        </span>
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
                <Link
                  href="/"
                  style={{
                    display: "inline-block",
                    lineHeight: 0,
                    position: "relative",
                    width: "120px",
                  }}
                >
                  <Image
                    src="/assets/img/logo/balosh.png"
                    alt=""
                    width={286}
                    height={88}
                    className="mobile-header-logo"
                    style={{ width: "120px", height: "auto" }}
                  />
                  <span
                    style={{
                      color: "#ff7a00",
                      fontSize: "9px",
                      fontWeight: 700,
                      left: "50%",
                      lineHeight: 1,
                      pointerEvents: "none",
                      position: "absolute",
                      textAlign: "center",
                      textTransform: "lowercase",
                      top: "calc(100% + 2px)",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ...we open important doors!
                  </span>
                </Link>
              </div>
              <div className="mobile-header-actions">
                <div className="mobile-nav-icon dots-menu" onClick={toggleMobileMenu}>
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
            <Link
              href="/"
              style={{
                display: "inline-block",
                lineHeight: 0,
                position: "relative",
                width: "120px",
              }}
            >
              <Image
                src="/assets/img/logo/balosh.png"
                alt=""
                width={286}
                height={88}
                className="mobile-header-logo"
                style={{ width: "120px", height: "auto" }}
              />
              <span
                style={{
                  color: "#ff7a00",
                  fontSize: "9px",
                  fontWeight: 700,
                  left: "50%",
                  lineHeight: 1,
                  pointerEvents: "none",
                  position: "absolute",
                  textAlign: "center",
                  textTransform: "lowercase",
                  top: "calc(100% + 2px)",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                }}
              >
                ...we open important doors!
              </span>
            </Link>
          </div>
          <div className="menu-close" onClick={closeMobileMenu}>
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
                onClick={handleAnchorClick("/#faq")}
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
              onClick={handleAnchorClick("/#contact")}
            >
              Contact Us{" "}
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
                        onClick={handleAnchorClick("/#contact")}
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
