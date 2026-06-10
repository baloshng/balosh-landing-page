"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import "./form-style.css"

export function ProjectEvaluationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    userType: "",
    organizationName: "",
    role: "",
    otherRoleDetails: "",
    workEmail: "",
    phoneNumber: "",
    website: "",
    projectLocation: "",

    servicesNeeded: [] as string[],
    projectType: "",
    siteType: "",
    otherSiteType: "",

    scaleAccessControl: "",
    scaleAutomatedEntrances: "",
    scaleCarParkingLanes: "",
    scaleCarParkingSpaces: "",
    scaleCarParkingPayments: "",
    scaleTollLanes: "",
    scaleSecurityScreening: "",
    dailyTraffic: "",

    estimatedBudget: "",
    budgetStatus: "",
    timeline: "",
    decisionRole: "",

    isReferred: "",
    referrerName: "",
    referrerOrganization: "",
    referrerContact: "",

    projectDescription: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const servicesNeeded = prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service]
      return { ...prev, servicesNeeded }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      // Reset form on success
      setFormData({
        fullName: "",
        userType: "",
        organizationName: "",
        role: "",
        otherRoleDetails: "",
        workEmail: "",
        phoneNumber: "",
        website: "",
        projectLocation: "",
        servicesNeeded: [],
        projectType: "",
        siteType: "",
        otherSiteType: "",
        scaleAccessControl: "",
        scaleAutomatedEntrances: "",
        scaleCarParkingLanes: "",
        scaleCarParkingSpaces: "",
        scaleCarParkingPayments: "",
        scaleTollLanes: "",
        scaleSecurityScreening: "",
        dailyTraffic: "",
        estimatedBudget: "",
        budgetStatus: "",
        timeline: "",
        decisionRole: "",
        isReferred: "",
        referrerName: "",
        referrerOrganization: "",
        referrerContact: "",
        projectDescription: "",
      })
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
    <div className="contact2-section-area sp1" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div>
            {status === "success" && (
              <div
                style={{
                  padding: "12px",
                  marginBottom: "20px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              >
                ✓ Request submitted successfully! A specialist will respond
                within one business day.
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  padding: "12px",
                  marginBottom: "20px",
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              >
                ✗ Submission Error: {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row g-3">
                {/* SECTION A: ABOUT YOU */}
                <div className="col-lg-12 mt-2">
                  <h2
                    className="form-section-title"
                    style={{
                      fontWeight: 600,
                      color: "#101828",
                      borderBottom: "1px solid #eaecf0",
                      paddingBottom: "6px",
                    }}
                  >
                    A. About You
                  </h2>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>Full Name (required)</p>
                    <input
                      className="contact-form-input"
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>You are a / an: (required)</p>
                    <div className="d-flex gap-4 mt-2">
                      {["Organization", "Individual"].map((type) => (
                        <label
                          key={type}
                          className="d-inline-flex align-items-center cursor-pointer"
                          style={{ gap: "8px", fontWeight: "400" }}
                        >
                          <input
                            className="contact-form-input"
                            type="radio"
                            name="userType"
                            value={type}
                            required
                            checked={formData.userType === type}
                            onChange={handleInputChange}
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {formData.userType === "Organization" && (
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Organization Name (required)</p>
                      <input
                        className="contact-form-input"
                        type="text"
                        name="organizationName"
                        placeholder="Company Name"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>Your Role / Position (required)</p>
                    <select
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.role === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select your position
                      </option>
                      <option value="Owner/MD/CEO/Director">
                        Owner / MD / CEO / Director
                      </option>
                      <option value="Facility/Operations Manager">
                        Facility / Operations Manager
                      </option>
                      <option value="Procurement/ Purchasing">
                        Procurement / Purchasing
                      </option>
                      <option value="Project / Technical Lead">
                        Project / Technical Lead
                      </option>
                      <option value="Consultant/Contractor (for a client)">
                        Consultant / Contractor (for a client)
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {formData.role === "Other" && (
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Please specify position (required)</p>
                      <input
                        className="contact-form-input"
                        type="text"
                        name="otherRoleDetails"
                        placeholder="Specify your role"
                        value={formData.otherRoleDetails}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Work Email (required)</p>
                    <input
                      className="contact-form-input"
                      type="email"
                      name="workEmail"
                      placeholder="you@company.com"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Phone Number (required)</p>
                    <input
                      className="contact-form-input"
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Website or Social Page (Optional)</p>
                    <input
                      className="contact-form-input"
                      type="url"
                      name="website"
                      placeholder="https://..."
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Project Location State (required)</p>
                    <input
                      className="contact-form-input"
                      type="text"
                      name="projectLocation"
                      placeholder="e.g. Lagos"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* SECTION B: YOUR PROJECT */}
                <div className="col-lg-12 mt-4">
                  <h2
                    className="form-section-title"
                    style={{
                      fontWeight: 600,
                      color: "#101828",
                      borderBottom: "1px solid #eaecf0",
                      paddingBottom: "6px",
                    }}
                  >
                    B. Your Project
                  </h2>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>Which service(s) do you need? (Select all that apply)</p>
                    <div className="row mt-2">
                      {[
                        "Access Control",
                        "Automated Entrances",
                        "Car Parking Solutions",
                        "Toll Road Management",
                        "Security Systems",
                        "Custom software / integration",
                        "Equipment rental",
                        "Time and Attendance",
                      ].map((service) => (
                        <div key={service} className="col-md-6 mb-2">
                          <label
                            className="d-flex cursor-pointer"
                            style={{
                              display: "flex",
                              width: "100%",
                              gap: "8px",
                              fontWeight: "400",
                              fontSize: "14px",
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={formData.servicesNeeded.includes(
                                service,
                              )}
                              onChange={() => handleCheckboxChange(service)}
                              className="checkbox-input"
                            />
                            <span>{service}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>What kind of project is this?</p>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.projectType === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select status
                      </option>
                      <option value="New facility">New facility</option>
                      <option value="Upgrade existing system">
                        Upgrade existing system
                      </option>
                      <option value="Repair/maintain existing">
                        Repair / maintain existing
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Site Type / Profile</p>
                    <select
                      name="siteType"
                      required
                      value={formData.siteType}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.siteType === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select asset profile
                      </option>
                      <option value="Airport / Seaport / transport terminal">
                        Airport / Seaport / transport terminal
                      </option>
                      <option value="Toll road/highway">
                        Toll road / highway
                      </option>
                      <option value="Shopping mall / major retail">
                        Shopping mall / major retail
                      </option>
                      <option value="Stadium/arena / event venue">
                        Stadium / arena / event venue
                      </option>
                      <option value="Government institution / agency">
                        Government institution / agency
                      </option>
                      <option value="Corporate HQ / large campus">
                        Corporate HQ / large campus
                      </option>
                      <option value="Private institution/club/gated community">
                        Private institution / club / gated community
                      </option>
                      <option value="Small office / SME premises">
                        Small office / SME premises
                      </option>
                      <option value="Residential/private home">
                        Residential / private home
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {formData.siteType === "Other" && (
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Please specify site profile (required)</p>
                      <input
                        className="contact-form-input"
                        type="text"
                        name="otherSiteType"
                        value={formData.otherSiteType}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Dynamic Scaling Sub-metrics based on chosen products */}
                {formData.servicesNeeded.length > 0 && (
                  <div className="col-lg-12">
                    <div
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "15px",
                        borderRadius: "6px",
                        border: "1px solid #e4e7ec",
                      }}
                    >
                      <p
                        className="mb-2"
                        style={{
                          fontWeight: 600,
                          fontSize: "13px",
                          color: "#475467",
                        }}
                      >
                        Project Scale Metrics
                      </p>
                      <div className="row g-2">
                        {formData.servicesNeeded.includes("Access Control") && (
                          <div className="col-md-6">
                            <p className="m-0 small text-muted">
                              Access Entry Points
                            </p>
                            <select
                              name="scaleAccessControl"
                              value={formData.scaleAccessControl}
                              onChange={handleInputChange}
                              className={`form-select form-select-sm mt-1 ${formData.scaleAccessControl === "" ? "contact-form-select-placeholder" : ""}`}
                              style={{ height: 52 }}
                            >
                              <option value="" style={{ color: "#98a2b3" }}>
                                Select scope
                              </option>
                              <option value="1-5">1-5 doors</option>
                              <option value="6-10">6-10 doors</option>
                              <option value="11-20">11-20 doors</option>
                              <option value="20+">20+ doors</option>
                            </select>
                          </div>
                        )}

                        {formData.servicesNeeded.includes(
                          "Automated Entrances",
                        ) && (
                          <div className="col-md-6">
                            <p className="m-0 small text-muted">
                              Gates / Turnstiles / Barriers
                            </p>
                            <select
                              name="scaleAutomatedEntrances"
                              value={formData.scaleAutomatedEntrances}
                              onChange={handleInputChange}
                              className={`form-select form-select-sm mt-1 ${formData.scaleAutomatedEntrances === "" ? "contact-form-select-placeholder" : ""}`}
                              style={{ height: 52 }}
                            >
                              <option value="" style={{ color: "#98a2b3" }}>
                                Select scope
                              </option>
                              <option value="1">1 point</option>
                              <option value="2-4">2-4 points</option>
                              <option value="5-10">5-10 points</option>
                              <option value="10+">10+ points</option>
                            </select>
                          </div>
                        )}

                        {formData.servicesNeeded.includes(
                          "Car Parking Solutions",
                        ) && (
                          <div className="col-md-12 row g-2 mt-1">
                            <div className="col-md-4">
                              <p className="m-0 small text-muted">
                                Parking Lanes
                              </p>
                              <input
                                type="text"
                                name="scaleCarParkingLanes"
                                placeholder="e.g. 2"
                                value={formData.scaleCarParkingLanes}
                                onChange={handleInputChange}
                                className="form-control form-control-sm contact-form-input mt-1"
                              />
                            </div>
                            <div className="col-md-4">
                              <p className="m-0 small text-muted">Spaces</p>
                              <input
                                type="text"
                                name="scaleCarParkingSpaces"
                                placeholder="e.g. 150"
                                value={formData.scaleCarParkingSpaces}
                                onChange={handleInputChange}
                                className="form-control form-control-sm contact-form-input mt-1"
                              />
                            </div>
                            <div className="col-md-4">
                              <p className="m-0 small text-muted">
                                Payment Points
                              </p>
                              <input
                                type="text"
                                name="scaleCarParkingPayments"
                                placeholder="e.g. 3"
                                value={formData.scaleCarParkingPayments}
                                onChange={handleInputChange}
                                className="form-control form-control-sm contact-form-input mt-1"
                              />
                            </div>
                          </div>
                        )}

                        {formData.servicesNeeded.includes(
                          "Toll Road Management",
                        ) && (
                          <div className="col-md-6 mt-2">
                            <p className="m-0 small text-muted">Toll Lanes</p>
                            <select
                              name="scaleTollLanes"
                              value={formData.scaleTollLanes}
                              onChange={handleInputChange}
                              className={`form-select form-select-sm mt-1 ${formData.scaleTollLanes === "" ? "contact-form-select-placeholder" : ""}`}
                              style={{ height: 52 }}
                            >
                              <option value="" style={{ color: "#98a2b3" }}>
                                Select scope
                              </option>
                              <option value="1-2">1-2 lanes</option>
                              <option value="3-6">3-6 lanes</option>
                              <option value="7+">7+ lanes</option>
                            </select>
                          </div>
                        )}

                        {formData.servicesNeeded.includes(
                          "Security Systems",
                        ) && (
                          <div className="col-md-6 mt-2">
                            <p className="m-0 small text-muted">
                              Screening Points
                            </p>
                            <select
                              name="scaleSecurityScreening"
                              value={formData.scaleSecurityScreening}
                              onChange={handleInputChange}
                              className={`form-select form-select-sm mt-1 ${formData.scaleSecurityScreening === "" ? "contact-form-select-placeholder" : ""}`}
                              style={{ height: 52 }}
                            >
                              <option value="" style={{ color: "#98a2b3" }}>
                                Select scope
                              </option>
                              <option value="1">1 point</option>
                              <option value="2-4">2-4 points</option>
                              <option value="5+">5+ points</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>Approx. daily volume (people / vehicles)</p>
                    <select
                      name="dailyTraffic"
                      required
                      value={formData.dailyTraffic}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.dailyTraffic === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select footprint volume
                      </option>
                      <option value="Under 500">Under 500</option>
                      <option value="500-2,000">500 - 2,000</option>
                      <option value="2,000-10,000">2,000 - 10,000</option>
                      <option value="10,000+">10,000+</option>
                    </select>
                  </div>
                </div>

                {/* SECTION C: BUDGET & TIMELINE */}
                <div className="col-lg-12 mt-4">
                  <h2
                    className="form-section-title"
                    style={{
                      fontWeight: 600,
                      color: "#101828",
                      borderBottom: "1px solid #eaecf0",
                      paddingBottom: "6px",
                    }}
                  >
                    C. Budget &amp; Timeline
                  </h2>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Estimated Project Budget</p>
                    <select
                      name="estimatedBudget"
                      required
                      value={formData.estimatedBudget}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.estimatedBudget === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select financial range
                      </option>
                      <option value="Under NGN 10M">Under NGN 10M</option>
                      <option value="NGN 10M-50M">NGN 10M - 50M</option>
                      <option value="NGN 50M-100M">NGN 50M - 100M</option>
                      <option value="Above NGN 100M">Above NGN 100M</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Budget Status</p>
                    <select
                      name="budgetStatus"
                      required
                      value={formData.budgetStatus}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.budgetStatus === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select financial status
                      </option>
                      <option value="Approved">Approved / Allocated</option>
                      <option value="Being budgeted now">
                        Being budgeted now
                      </option>
                      <option value="Not allocated yet">
                        Not allocated yet
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Deployment Timeline</p>
                    <select
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.timeline === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select target timeline
                      </option>
                      <option value="Active need ready to proceed now">
                        Active need ready to proceed now
                      </option>
                      <option value="Planning & budgeting (next 1-6 months)">
                        Planning & budgeting (next 1-6 months)
                      </option>
                      <option value="Just researching for the future">
                        Just researching for the future
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Your Role in Decision Making</p>
                    <select
                      name="decisionRole"
                      required
                      value={formData.decisionRole}
                      onChange={handleInputChange}
                      className={`form-select w-100 contact-form-select ${formData.decisionRole === "" ? "contact-form-select-placeholder" : ""}`}
                      style={{ height: 52 }}
                    >
                      <option value="" style={{ color: "#98a2b3" }}>
                        Select mandate type
                      </option>
                      <option value="I make the decision">
                        I make the decision
                      </option>
                      <option value="I recommend; someone else approves">
                        I recommend; someone else approves
                      </option>
                      <option value="I'm gathering information">
                        I'm gathering information
                      </option>
                    </select>
                  </div>
                </div>

                {/* SECTION D: REFERRAL */}
                <div className="col-lg-12 mt-4">
                  <h2
                    className="form-section-title"
                    style={{
                      fontWeight: 600,
                      color: "#101828",
                      borderBottom: "1px solid #eaecf0",
                      paddingBottom: "6px",
                    }}
                  >
                    D. Referral
                  </h2>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>Were you referred by an existing Balosh customer?</p>
                    <div className="d-flex gap-4 mt-2">
                      {["Yes", "No"].map((choice) => (
                        <label
                          key={choice}
                          className="d-inline-flex align-items-center cursor-pointer"
                          style={{ gap: "8px", fontWeight: "400" }}
                        >
                          <input
                            type="radio"
                            name="isReferred"
                            value={choice}
                            checked={formData.isReferred === choice}
                            onChange={handleInputChange}
                            required
                          />
                          <span>{choice}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {formData.isReferred === "Yes" && (
                  <>
                    <div className="col-lg-4">
                      <div className="input-area">
                        <p>Referrer Full Name Context</p>
                        <input
                          className="contact-form-input"
                          type="text"
                          name="referrerName"
                          placeholder="Name"
                          value={formData.referrerName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-area">
                        <p>Organization / Entity Context</p>
                        <input
                          className="contact-form-input"
                          type="text"
                          name="referrerOrganization"
                          placeholder="Company"
                          value={formData.referrerOrganization}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-area">
                        <p>Contact Details (Email/Phone)</p>
                        <input
                          className="contact-form-input"
                          type="text"
                          name="referrerContact"
                          placeholder="Contact channel"
                          value={formData.referrerContact}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* SECTION E: ANYTHING ELSE */}
                <div className="col-lg-12 mt-4">
                  <h2
                    className="form-section-title"
                    style={{
                      fontWeight: 600,
                      color: "#101828",
                      borderBottom: "1px solid #eaecf0",
                      paddingBottom: "6px",
                    }}
                  >
                    E. Additional Specifications
                  </h2>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>Project Description & Scope Details (required)</p>
                    <textarea
                      name="projectDescription"
                      rows={5}
                      placeholder="Provide deep structural project requirements or notes here..."
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      style={{
                        padding: "12px",
                        width: "100%",
                        borderRadius: "4px",
                        border: "1px solid #d0d5dd",
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="header-btn4"
                    style={{
                      width: "100%",
                      padding: "14px",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading
                      ? "Processing Submission..."
                      : "Submit Evaluation Inquiry"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
