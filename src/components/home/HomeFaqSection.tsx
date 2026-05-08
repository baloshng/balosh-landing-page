"use client"

import Image from "next/image"
import { Fragment, useState } from "react"

const FAQ_ITEMS: { id: string; question: string; answer: string }[] = [
  {
    id: "faq-1",
    question:
      "Can your security doors and turnstiles be customized for different environments?",
    answer:
      "Yes. We design and deploy solutions based on each environment's operational realities, traffic volume, security profile, and integration requirements.",
  },
  {
    id: "faq-2",
    question:
      "Can your turnstiles integrate with biometric, card, or remote access systems?",
    answer:
      "Yes. Our systems support biometric authentication, card credentials, QR workflows, and remote access control through integrated platforms.",
  },
  {
    id: "faq-3",
    question: "Do you offer installation, maintenance, and after-sales support?",
    answer:
      "Yes. Balosh delivers end-to-end services including design, installation, preventive maintenance, corrective support, and long-term service coverage.",
  },
  {
    id: "faq-4",
    question:
      "How secure and compliant are your products with industry standards?",
    answer:
      "Our solutions are built for high-security operations and are deployed using tested hardware, robust software controls, and auditable operating processes.",
  },
  {
    id: "faq-5",
    question: "Do you supply and install nationwide or internationally?",
    answer:
      "We deploy and support projects across Nigeria with nationwide service coverage. International opportunities can be reviewed based on project scope.",
  },
  {
    id: "faq-6",
    question: "What is your typical project turnaround time?",
    answer:
      "Turnaround depends on project size, integration depth, and site readiness. After assessment, we provide a clear implementation plan and timeline.",
  },
  {
    id: "faq-7",
    question: "How can I request a consultation or get a quote for my project?",
    answer:
      "Use the contact form or call our team directly. We will review your requirements, schedule a consultation, and provide a tailored proposal.",
  },
]

function FaqAnswer({ answer }: { answer: string }) {
  return <>{answer}</>
}

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="faq-section-area sp1" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="faq-header-area text-center heading6">
              <h5
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={400}
                data-aos-offset={40}
              >
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 inline-block align-middle"
                />
                FAQ’s
              </h5>
              <h2 className="text-anime-style-3">
                Frequently Asked Questions
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={400}
                data-aos-offset={40}
              >
                Everything you need to know about working with Balosh — from how our systems work to what 
                happens after installation.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-author-area">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openIndex === index
                  const panelId = `flush-collapse-${item.id}`

                  return (
                    <Fragment key={item.id}>
                      {index > 0 ? <div className="space20" /> : null}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className={
                              isOpen
                                ? "accordion-button"
                                : "accordion-button collapsed"
                            }
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            id={`${panelId}-heading`}
                            onClick={() =>
                              setOpenIndex((prev) =>
                                prev === index ? null : index,
                              )
                            }
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={`${panelId}-heading`}
                          className="faq-panel-wrap grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                          style={{
                            gridTemplateRows: isOpen ? "1fr" : "0fr",
                          }}
                        >
                          <div className="min-h-0">
                            <div className="accordion-body">
                              <FaqAnswer answer={item.answer} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-images-area">
              <div className="row">
                <div className="col-lg-8">
                  <div className="img1 reveal relative w-full max-[991px]:aspect-square min-[992px]:aspect-4/5">
                    <Image
                      src="/assets/img/logo/cam.jpg"
                      alt="CCTV camera"
                      width={1200}
                      height={1200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faq-progress-area">
                    <div className="progresbar">
                      <div className="progressbar">
                        <div className="circle" data-percent={90}>
                          <canvas />
                          <div>90%</div>
                        </div>
                      </div>
                      <p>Cameras Installed</p>
                    </div>
                    <div className="space24" />
                    <div className="progresbar">
                      <div className="progressbar">
                        <div className="circle" data-percent={90}>
                          <canvas />
                          <div>90%</div>
                        </div>
                      </div>
                      <p>Qualified Safe</p>
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
