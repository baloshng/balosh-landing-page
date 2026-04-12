"use client"

import Image from "next/image"
import { Fragment, useState } from "react"

const FAQ_ITEMS: { id: string; question: string }[] = [
  {
    id: "faq-1",
    question: "What are the benefits of installing CCTV cameras?",
  },
  {
    id: "faq-2",
    question: "How many CCTV cameras do I need for my property?",
  },
  {
    id: "faq-3",
    question: "Can CCTV cameras be used indoors and outdoors?",
  },
  {
    id: "faq-4",
    question: "How do I choose the right CCTV system for my needs?",
  },
  {
    id: "faq-5",
    question: "Are there any legal requirements for CCTV signage?",
  },
]

function FaqAnswer() {
  return (
    <>
      From understanding how CCTV surveillance works to choosing the{" "}
      <br className="d-lg-block d-none" /> right security solution for your
      needs, we&apos;ve compiled
    </>
  )
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
                  unoptimized
                />
                FAQ’s
              </h5>
              <h2 className="text-anime-style-3">
                Your Guide to Security &amp; CCTV
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={400}
                data-aos-offset={40}
              >
                Have questions about our security and CCTV services? Explore our
                FAQ section below to find answers to commonly asked questions.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-author-area">
              <div className="accordion accordion-flush" id="accordionFlushExample">
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
                              <FaqAnswer />
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
                      unoptimized
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
