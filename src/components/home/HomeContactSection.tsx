"use client"

import Image from "next/image"
import Link from "next/link"

export default function HomeContactSection() {
  return (
    <div className="contact2-section-area sp1" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-header heading6">
              <h5>
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Contact Us
              </h5>

              <h2>Start Your Access &amp; Mobility Project with Balosh</h2>

              <p>
                Speak with our team about access control, parking, tolling, or
                security systems. Complete our project enquiry form and a
                specialist will respond quickly.
              </p>

              <div className="row">
                <ContactBox
                  icon="/assets/img/icons/call-icons3.svg"
                  label="Phone"
                  href="tel:+2348022596060"
                  text="0802 259 6060"
                />

                <ContactBox
                  icon="/assets/img/icons/email-icons3.svg"
                  label="Email"
                  href="mailto:info@balosh.com"
                  text="info@balosh.com"
                />

                <ContactBox
                  icon="/assets/img/icons/linkedin-icons1.svg"
                  label="Showroom"
                  href="/#contact"
                  text="9, Osaro Isokpan Street, Lekki Phase 1, Lagos."
                />

                <ContactBox
                  icon="/assets/img/icons/instagram-black.svg"
                  label="Instagram"
                  href="https://www.instagram.com/baloshng/"
                  text="@baloshng"
                  external
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column gap-8">
            {/* Added flex, flex-direction column, and a vertical gap of 6 or 8 */}
            <div className="contact-form-area d-flex flex-column gap-6">
              <h3>Request A Consultation</h3>
              <p>
                Tell us about your project, site type, budget, timeline, and
                referral details so we can route your enquiry to the right
                specialist.
              </p>

              {/* Using w-fit ensures the block-level flex button doesn't stretch to 100% width */}
              <Link href="/contact-form" className="header-btn1 w-fit">
                Make Enquiry
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactBox({
  icon,
  label,
  href,
  text,
  external = false,
}: {
  icon: string
  label: string
  href: string
  text: string
  external?: boolean
}) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="contact-boxarea">
        <div className="all-content">
          <div
            className="img1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={icon} alt="" width={22} height={22} />
          </div>

          <div className="content">
            <p>{label}</p>
            <Link
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
