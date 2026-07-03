"use client"

import { FormEvent, useState } from "react"
import Image from "next/image"

export default function HomeCtaSection() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "home_cta",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send request")
      }

      setEmail("")
      setStatus("success")
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="cta3-section-area">
      <Image
        src="/assets/img/elements/elements23.png"
        alt=""
        width={206}
        height={107}
        className="elements23"
        unoptimized
      />
      <Image
        src="/assets/img/elements/elements24.png"
        alt=""
        width={228}
        height={166}
        className="elements24"
        unoptimized
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-author-area">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="heading2">
                    <h2 className="text-anime-style-3">
                      Need a Reliable Access &amp; Security Partner?
                    </h2>
                    <div className="space16" />
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address.."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                      <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Subscribe to our newsletter"}{" "}
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    </form>
                    {status === "success" && (
                      <p className="home-cta-status home-cta-status--success">
                        Subscription successful. Thank you for subscribing to our newsletter.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="home-cta-status home-cta-status--error">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="cta-images">
                    <div
                      className="img1 reveal"
                      style={{ width: "300px", height: "300px" }}
                    ></div>
                    <div className="img2">
                      <Image
                        src="/assets/img/bg/cta-bg1.png"
                        alt=""
                        width={600}
                        height={500}
                        className="h-auto max-w-full"
                      />
                    </div>
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
