'use client'

import Image from "next/image"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function HomeContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="contact2-section-area sp1" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-header heading6">
              <h5
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={400}
                data-aos-offset={40}
              >
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Contact Us
              </h5>
              <h2 className="text-anime-style-3">
                Start Your Access &amp; Mobility Project with Balosh
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-delay={500}
                data-aos-offset={40}
              >
                Speak with our team about access control, parking, tolling, or
                security systems. We will assess your environment and recommend
                a solution tailored to your operational goals.
              </p>
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-delay={400}
                  data-aos-offset={40}
                >
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
                        <Image
                          src="/assets/img/icons/call-icons3.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                      </div>
                      <div className="content">
                        <p>Phone</p>
                        <Link href="tel:+2348022596060">0802 259 6060</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={900}
                  data-aos-delay={400}
                  data-aos-offset={40}
                >
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
                        <Image
                          src="/assets/img/icons/email-icons3.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                      </div>
                      <div className="content">
                        <p>Email</p>
                        <Link href="mailto:info@balosh.com">
                          info@balosh.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={400}
                  data-aos-offset={40}
                >
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
                        <Image
                          src="/assets/img/icons/linkedin-icons1.svg"
                          alt=""
                          width={22}
                          height={22}
                          style={{ width: "22px", height: "22px" }}
                        />
                      </div>
                      <div className="content">
                        <p>Showroom</p>
                        <Link href="/#contact">
                          9, Osaro Isokpan Street, Lekki Phase 1, Lagos.
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={1100}
                  data-aos-delay={400}
                  data-aos-offset={40}
                >
                  <div className="contact-boxarea">
                    <div
                      className="all-content"
                      style={{
                        paddingTop: "11px",
                      }}
                    >
                      <div
                        className="img1"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src="/assets/img/icons/location-icons2.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                      </div>
                      <div className="content">
                        <p>Instagram</p>
                        <Link
                          href="https://www.instagram.com/baloshng/"
                          target="_blank"
                          rel="noreferrer"
                          className="d-flex "
                        >
                          @baloshng
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="zoom-out"
            data-aos-duration={1200}
            data-aos-delay={400}
            data-aos-offset={40}
          >
            <div className="contact-form-area">
              <h3>Request A Quote</h3>
              {status === 'success' && (
                <div style={{ padding: '12px', marginBottom: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }}>
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{ padding: '12px', marginBottom: '15px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
                  ✗ Error: {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <p>Name (required)</p>
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <p>Number (required)</p>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Email (required)</p>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Additional Details (Optional)</p>
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area text-start">
                      <button type="submit" className="header-btn3" disabled={loading}>
                        {loading ? 'Sending...' : 'Submit Now'} <i className="fa-solid fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
