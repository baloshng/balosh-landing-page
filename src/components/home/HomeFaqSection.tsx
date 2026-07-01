"use client"

import Image from "next/image"
import Link from "next/link"
import { Fragment, useState, type ReactElement } from "react"

type FaqListGroup = {
  heading: string
  items: string[]
}

type FaqAnswerContent = string | ReactElement

type GroupedFaqAnswer = {
  intro?: FaqAnswerContent
  groups: FaqListGroup[]
  outro?: FaqAnswerContent
}

type FaqAnswer = FaqAnswerContent | GroupedFaqAnswer

const FAQ_ITEMS: { id: string; question: string; answer: FaqAnswer }[] = [
  {
    id: "faq-1",
    question: "What services does Balosh Integrated Services provide?",
    answer: {
      intro:
        "Balosh Integrated Services specializes in electronic security and access control solutions, including:",
      groups: [
        {
          heading: "Services",
          items: [
            "Access Control Systems",
            "Biometric Time & Attendance Systems",
            "Automatic Gates & Barrier Systems",
            "ANPR (Automatic Number Plate Recognition)",
            "Turnstiles",
            "Face Recognition & Fingerprint Devices",
            "Smart Locks",
            "CCTV Surveillance Systems",
            "Parking Management Systems",
            "Automatic Doors",
            "Visitor Management Systems",
            "System Maintenance & Technical Support",
          ],
        },
      ],
    },
  },
  {
    id: "faq-2",
    question: "What is an Access Control System?",
    answer:
      "An access control system regulates who can enter or exit a building, room, or restricted area using credentials such as fingerprint, facial recognition, RFID cards, PIN codes, mobile credentials, or vehicle number plates.",
  },
  {
    id: "faq-3",
    question: "Which industries do you serve?",
    answer: {
      intro: "We provide solutions for:",
      groups: [
        {
          heading: "Industries",
          items: [
            "Corporate Offices",
            "Banks & Financial Institutions",
            "Residential Estates",
            "Schools & Universities",
            "Hospitals",
            "Hotels",
            "Government Agencies",
            "Manufacturing Facilities",
            "Shopping Malls",
            "Warehouses",
            "Logistics Companies",
          ],
        },
      ],
    },
  },
  {
    id: "faq-4",
    question: "Do you provide installation services?",
    answer:
      "Yes. Our certified engineers handle site surveys, installation, system configuration, testing, and user training to ensure optimal performance.",
  },
  {
    id: "faq-5",
    question: "Do you offer maintenance and after-sales support?",
    answer:
      "Absolutely. We provide preventive maintenance, technical support, software updates, repairs, and emergency troubleshooting to keep your systems operating efficiently.",
  },
  {
    id: "faq-6",
    question: "How do I report a fault?",
    answer: {
      intro: (
        <p>
          You can report a fault using the details below, or contact us{" "}
          <Link className="faq-answer-link" href="/contact-form">
            here
          </Link>
          .
        </p>
      ),
      groups: [
        {
          heading: "You can report a fault by:",
          items: [
            "Calling our support team",
            "Sending an email",
            "Contacting us via WhatsApp",
            "Filling out our online support request form",
          ],
        },
        {
          heading: "Please include:",
          items: [
            "Company Name",
            "Site Location",
            "Device Type",
            "Description of the issue",
            "Photos or videos (where applicable)",
          ],
        },
      ],
    },
  },
  {
    id: "faq-7",
    question: "Why do you sometimes request a video of the fault?",
    answer: {
      intro:
        "Videos help our engineers diagnose the issue before visiting your site. This allows us to:",
      groups: [
        {
          heading: "Benefits",
          items: [
            "Prepare the correct tools and spare parts",
            "Resolve minor issues remotely where possible",
            "Reduce downtime",
            "Speed up repairs",
          ],
        },
      ],
    },
  },
  {
    id: "faq-8",
    question: "How long does it take to respond to support requests?",
    answer:
      "Response times depend on the service agreement and severity of the issue. Critical faults are prioritized, and our support team provides updates throughout the resolution process.",
  },
  {
    id: "faq-9",
    question: "Can your systems integrate with existing security systems?",
    answer: {
      intro: "Yes. Our solutions can integrate with:",
      groups: [
        {
          heading: "Supported integrations",
          items: [
            "CCTV Systems",
            "Fire Alarm Systems",
            "Visitor Management Systems",
            "HR & Payroll Software",
            "Elevator Control",
            "Automatic Gates",
            "Boom Barriers",
            "Building Management Systems",
          ],
        },
      ],
    },
  },
  {
    id: "faq-10",
    question: "What types of authentication do your access control systems support?",
    answer: {
      intro: "Our systems support:",
      groups: [
        {
          heading: "Authentication methods",
          items: [
            "Fingerprint Recognition",
            "Facial Recognition",
            "RFID Cards",
            "PIN Codes",
            "QR Codes",
            "Mobile Access",
            "ANPR (Vehicle Number Plate Recognition)",
            "Multi-factor Authentication",
          ],
        },
      ],
    },
  },
  {
    id: "faq-11",
    question: "What is ANPR?",
    answer:
      "Automatic Number Plate Recognition (ANPR) uses intelligent cameras to identify vehicle license plates automatically, enabling seamless vehicle access, parking management, and security monitoring.",
  },
  {
    id: "faq-12",
    question: "Can your attendance devices integrate with payroll software?",
    answer:
      "Yes. Our attendance systems can export reports and integrate with compatible HR and payroll applications to simplify workforce management.",
  },
  {
    id: "faq-13",
    question: "Do your systems work during power outages?",
    answer:
      "Yes. Most installations can be configured with UPS systems or backup power solutions to ensure continuous operation during power interruptions.",
  },
  {
    id: "faq-14",
    question: "Can users access doors using their smartphones?",
    answer:
      "Yes. Depending on the installed solution, users can gain access using mobile credentials, Bluetooth, NFC, or QR codes.",
  },
  {
    id: "faq-15",
    question: "Do you provide training after installation?",
    answer:
      "Yes. We train administrators and end users on system operation, report generation, user enrollment, and basic troubleshooting.",
  },
  {
    id: "faq-16",
    question: "Can I monitor my access control system remotely?",
    answer:
      "Yes. Many of our systems support remote management through desktop software or mobile applications, allowing authorized users to monitor activity from anywhere.",
  },
  {
    id: "faq-17",
    question: "How often should access control systems be serviced?",
    answer: (
      <>
        We recommend preventive maintenance every 3&ndash;6 months to ensure
        optimal performance, improve system lifespan, and prevent unexpected
        failures.
      </>
    ),
  },
  {
    id: "faq-18",
    question: "Do you customize solutions for different businesses?",
    answer:
      "Yes. We conduct site assessments and recommend solutions tailored to your organization's size, security requirements, operational workflow, and budget.",
  },
  {
    id: "faq-19",
    question: "How can I request a quotation?",
    answer: {
      intro:
        "Simply contact our sales team or support with your project requirements, including:",
      groups: [
        {
          heading: "Project requirements",
          items: [
            "Type of facility",
            "Number of access points",
            "Preferred authentication method",
            "Estimated number of users",
            "Project location",
          ],
        },
      ],
      outro:
        "We will prepare a customized quotation after assessing your needs.",
    },
  },
  {
    id: "faq-20",
    question: "Why choose Balosh Integrated Services?",
    answer: {
      intro: "Balosh Integrated Services is committed to delivering:",
      groups: [
        {
          heading: "Why clients choose us",
          items: [
            "Professional installation",
            "High-quality security solutions",
            "Reliable technical support",
            "Customized system designs",
            "Experienced engineers",
            "Prompt after-sales service",
            "Innovative access control technologies",
          ],
        },
      ],
    },
  },
]

function isGroupedAnswer(answer: FaqAnswer): answer is GroupedFaqAnswer {
  return typeof answer === "object" && answer !== null && "groups" in answer
}

function AnswerText({ children }: { children: FaqAnswerContent }) {
  return typeof children === "string" ? <p>{children}</p> : <>{children}</>
}

function FaqAnswer({
  answer,
  answerId,
  isExpanded,
  onToggleExpanded,
}: {
  answer: FaqAnswer
  answerId: string
  isExpanded: boolean
  onToggleExpanded: () => void
}) {
  if (!isGroupedAnswer(answer)) {
    return <AnswerText>{answer}</AnswerText>
  }

  const contentId = `${answerId}-details`

  return (
    <div className="faq-answer-rich">
      {answer.intro ? <AnswerText>{answer.intro}</AnswerText> : null}
      <button
        type="button"
        className="faq-show-more"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={onToggleExpanded}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
      <div id={contentId} hidden={!isExpanded}>
        <ul className="faq-nested-list">
          {answer.groups.map((group) => (
            <li key={group.heading}>
              <h4 className="faq-nested-heading">{group.heading}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {answer.outro ? <AnswerText>{answer.outro}</AnswerText> : null}
      </div>
    </div>
  )
}

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(
    () => new Set(),
  )

  const toggleExpandedAnswer = (id: string) => {
    setExpandedAnswers((current) => {
      const next = new Set(current)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      return next
    })
  }

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
                Everything you need to know about working with Balosh, from how our systems work to what 
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
                              <FaqAnswer
                                answer={item.answer}
                                answerId={item.id}
                                isExpanded={expandedAnswers.has(item.id)}
                                onToggleExpanded={() =>
                                  toggleExpandedAnswer(item.id)
                                }
                              />
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
              <div className="img1 reveal relative w-full max-[991px]:aspect-square min-[992px]:aspect-4/5">
                <Image
                  src="/assets/img/all-images/balosh-solutions/Access-Control_3.jpg"
                  alt="Access control turnstiles"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
