import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="footer3-section-area">
        <Image src="/assets/img/bg/bg1.png" alt="" fill className="bg1 object-cover" sizes="100vw" unoptimized />
        <div className="container relative z-[1]">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="logo-content">
                <Image src="/assets/img/logo/logo4.png" alt="" width={200} height={60} className="h-auto w-auto max-w-full" unoptimized />
                <p>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
                <ul>
                  <li>
                    <Link href="https://www.facebook.com/balosh1/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/balosh-integrated-services" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/baloshng/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://x.com/baloshng" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space30 d-lg-none d-block" />
            </div>
            <div className="col-lg-1 d-lg-block d-none" />
            <div className="col-lg-2 col-md-6">
              <div className="footer-list">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/#service">Cyber Security Specialist&nbsp;</Link>
                  </li>
                  <li>
                    <Link href="/#service">&nbsp;Institute CCTV Security&nbsp;&nbsp;</Link>
                  </li>
                  <li>
                    <Link href="/#market">Banking Sector Outside</Link>
                  </li>
                  <li>
                    <Link href="/#market">Private Sector Security&nbsp;</Link>
                  </li>
                  <li>
                    <Link href="/#faq">School &amp; Hospital Security&nbsp;</Link>
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
                    <Link href="/#about">&nbsp;About Us&nbsp;&nbsp;</Link>
                  </li>
                  <li>
                    <Link href="/#service">Service</Link>
                  </li>
                  <li>
                    <Link href="/#project">Testimonial&nbsp;</Link>
                  </li>
                  <li>
                    <Link href="/#contact">Contact US</Link>
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
                    9, Osaro Isokpan Street, <br className="d-lg-block d-none" /> Lekki Phase 1, Lagos.
                  </Link>
                </div>
              </div>
            </div>
            <div className="space50" />
            <div className="col-lg-12 m-auto">
              <div className="copyright text-center">
                <p>© Copyright 2024 -Securix. All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
