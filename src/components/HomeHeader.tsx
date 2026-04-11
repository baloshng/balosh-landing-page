"use client"

import { useEffect, useState } from "react"

const SECTION_IDS = ["home", "about", "service", "market", "project", "contact", "faq", "blog"] as const

type SectionId = (typeof SECTION_IDS)[number]

function useHomeActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>("home")

  useEffect(() => {
    const headerEl = () => document.getElementById("header")
    const offset = () => {
      const h = headerEl()
      return h ? h.getBoundingClientRect().height + 12 : 100
    }

    const update = () => {
      const y = offset()
      let current: SectionId = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= y) {
          current = id
        }
      }
      setActiveId(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return activeId
}

function navClass(activeId: SectionId, section: SectionId) {
  return activeId === section ? "nav-link active" : "nav-link"
}

export default function HomeHeader() {
  const activeId = useHomeActiveSection()

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
                  <div className="header-elements">
                    <div className="site-logo">
                      <a href="/#home">
                        <img src="/assets/img/logo/balosh.png" alt="" style={{ width: "200px" }} />
                      </a>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li className="nav-item">
                          <a href="/#about" className={navClass(activeId, "about")}>
                            <span>About</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/#service" className={navClass(activeId, "service")}>
                            <span>Services</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/#market" className={navClass(activeId, "market")}>
                            <span>Our Market</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/#project" className={navClass(activeId, "project")}>
                            <span>Projects</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/#faq" className={navClass(activeId, "faq")}>
                            <span>FAQ</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/#blog" className={navClass(activeId, "blog")}>
                            <span>Blogs</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-area">
                      <a href="/#contact" className="header-btn4">
                        Contact Us
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </a>
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
                <a href="/#home">
                  <img src="/assets/img/logo/balosh.png" alt="" style={{ width: "200px" }} />
                </a>
              </div>
              <div className="mobile-nav-icon dots-menu">
                <i className="fa-solid fa-bars-staggered" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-sidebar mobile-sidebar3">
        <div className="logosicon-area">
          <div className="logos">
            <img src="/assets/img/logo/balosh.png" alt="" style={{ width: "200px" }} />
          </div>
          <div className="menu-close">
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li>
              <a href="#">Home </a>
              <ul className="sub-menu">
                <li>
                  <a href="/#home">Home One</a>
                </li>
                <li>
                  <a href="/#home">Home Two</a>
                </li>
                <li>
                  <a href="/#home">Home Three</a>
                </li>
                <li>
                  <a href="/#home">Home Four</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/#about" className={navClass(activeId, "about")}>
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#service" className={navClass(activeId, "service")}>
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#market" className={navClass(activeId, "market")}>
                <span>Our Market</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#project" className={navClass(activeId, "project")}>
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#faq" className={navClass(activeId, "faq")}>
                <span>FAQ</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#blog" className={navClass(activeId, "blog")}>
                <span>Blogs</span>
              </a>
            </li>
          </ul>
          <div className="allmobilesection">
            <a href="/#contact" className="header-btn4">
              Get Started{" "}
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>
            <div className="single-footer">
              <h3>Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:+2348022596060">0802 259 6060</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@balosh.com">info@balosh.com</a>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="contact-info-text">
                      <a href="#">
                        9, Osaro Isokpan Street, <br /> Lekki Phase 1, Lagos.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/balosh1/" target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/baloshng/" target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/balosh-integrated-services" target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/baloshng" target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
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
