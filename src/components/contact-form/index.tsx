"use client"

import { FormEvent, useState } from "react"
import { CustomSelect, type FieldChangeEvent } from "./CustomSelect"
import { getNigerianStateOptions } from "./nigerianStates"
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
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleInputChange = (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      | FieldChangeEvent,
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
      setShowSuccessModal(true)
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
      setShowSuccessModal(false)
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      )
    } finally {
      setLoading(false)
    }
  }

  const roleOptions = [
    { value: "Owner/MD/CEO/Director", label: "Owner / MD / CEO / Director" },
    {
      value: "Facility/Operations Manager",
      label: "Facility / Operations Manager",
    },
    { value: "Procurement/ Purchasing", label: "Procurement / Purchasing" },
    { value: "Project / Technical Lead", label: "Project / Technical Lead" },
    {
      value: "Consultant/Contractor (for a client)",
      label: "Consultant / Contractor (for a client)",
    },
    { value: "Other", label: "Other" },
  ]

  const projectTypeOptions = [
    { value: "New facility", label: "New facility" },
    { value: "Upgrade existing system", label: "Upgrade existing system" },
    { value: "Repair/maintain existing", label: "Repair / maintain existing" },
  ]

  const siteTypeOptions = [
    {
      value: "Airport / Seaport / transport terminal",
      label: "Airport / Seaport / transport terminal",
    },
    { value: "Toll road/highway", label: "Toll road / highway" },
    {
      value: "Shopping mall / major retail",
      label: "Shopping mall / major retail",
    },
    {
      value: "Stadium/arena / event venue",
      label: "Stadium / arena / event venue",
    },
    {
      value: "Government institution / agency",
      label: "Government institution / agency",
    },
    {
      value: "Corporate HQ / large campus",
      label: "Corporate HQ / large campus",
    },
    {
      value: "Private institution/club/gated community",
      label: "Private institution / club / gated community",
    },
    {
      value: "Small office / SME premises",
      label: "Small office / SME premises",
    },
    { value: "Residential/private home", label: "Residential / private home" },
    { value: "Other", label: "Other" },
  ]

  const scaleOptions = [
    { value: "1-5", label: "1-5 doors" },
    { value: "6-10", label: "6-10 doors" },
    { value: "11-20", label: "11-20 doors" },
    { value: "20+", label: "20+ doors" },
  ]

  const automatedEntrancesOptions = [
    { value: "1", label: "1 point" },
    { value: "2-4", label: "2-4 points" },
    { value: "5-10", label: "5-10 points" },
    { value: "10+", label: "10+ points" },
  ]

  const tollOptions = [
    { value: "1-2", label: "1-2 lanes" },
    { value: "3-6", label: "3-6 lanes" },
    { value: "7+", label: "7+ lanes" },
  ]

  const securityOptions = [
    { value: "1", label: "1 point" },
    { value: "2-4", label: "2-4 points" },
    { value: "5+", label: "5+ points" },
  ]

  const dailyTrafficOptions = [
    { value: "Under 500", label: "Under 500" },
    { value: "500-2,000", label: "500 - 2,000" },
    { value: "2,000-10,000", label: "2,000 - 10,000" },
    { value: "10,000+", label: "10,000+" },
  ]

  const budgetOptions = [
    { value: "Under NGN 10M", label: "Under NGN 10M" },
    { value: "NGN 10M-50M", label: "NGN 10M - 50M" },
    { value: "NGN 50M-100M", label: "NGN 50M - 100M" },
    { value: "Above NGN 100M", label: "Above NGN 100M" },
  ]

  const budgetStatusOptions = [
    { value: "Approved", label: "Approved / Allocated" },
    { value: "Being budgeted now", label: "Being budgeted now" },
    { value: "Not allocated yet", label: "Not allocated yet" },
  ]

  const timelineOptions = [
    {
      value: "Active need ready to proceed now",
      label: "Active need ready to proceed now",
    },
    {
      value: "Planning & budgeting (next 1-6 months)",
      label: "Planning & budgeting (next 1-6 months)",
    },
    {
      value: "Just researching for the future",
      label: "Just researching for the future",
    },
  ]

  const decisionRoleOptions = [
    { value: "I make the decision", label: "I make the decision" },
    {
      value: "I recommend; someone else approves",
      label: "I recommend; someone else approves",
    },
    { value: "I'm gathering information", label: "I'm gathering information" },
  ]

  const nigerianStateOptions = getNigerianStateOptions()

  return (
    <div className="contact2-section-area sp1" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div>
            {showSuccessModal && (
              <div
                className="contact-success-modal-backdrop"
                role="presentation"
                onClick={() => setShowSuccessModal(false)}
              >
                <div
                  className="contact-success-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="contact-success-title"
                  aria-describedby="contact-success-description"
                  onClick={(event) => event.stopPropagation()}
                >
                  <h1 className="contact-success-modal-eyebrow">Thank you</h1>
                  <h3 id="contact-success-title">
                    Your submission was received
                  </h3>
                  <p id="contact-success-description">
                    Thanks for reaching out. Our team will review your project
                    details and get back to you shortly with the next steps.
                  </p>
                  <div>
                    <button
                      className="header-btn4"
                      style={{
                        width: "fit-content",
                        padding: "14px",
                        fontWeight: 600,
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
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
                    <CustomSelect
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      placeholder="Select your position"
                      options={roleOptions}
                    />
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
                    <CustomSelect
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      required
                      placeholder="Select a state"
                      options={nigerianStateOptions}
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

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>What kind of project is this?</p>
                    <CustomSelect
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      placeholder="Select status"
                      options={projectTypeOptions}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Site Type / Profile</p>
                    <CustomSelect
                      name="siteType"
                      value={formData.siteType}
                      onChange={handleInputChange}
                      required
                      placeholder="Select asset profile"
                      options={siteTypeOptions}
                    />
                  </div>
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
                            <CustomSelect
                              name="scaleAccessControl"
                              value={formData.scaleAccessControl}
                              onChange={handleInputChange}
                              placeholder="Select scope"
                              options={scaleOptions}
                            />
                          </div>
                        )}

                        {formData.servicesNeeded.includes(
                          "Automated Entrances",
                        ) && (
                          <div className="col-md-6">
                            <p className="m-0 small text-muted">
                              Gates / Turnstiles / Barriers
                            </p>
                            <CustomSelect
                              name="scaleAutomatedEntrances"
                              value={formData.scaleAutomatedEntrances}
                              onChange={handleInputChange}
                              placeholder="Select scope"
                              options={automatedEntrancesOptions}
                            />
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
                            <CustomSelect
                              name="scaleTollLanes"
                              value={formData.scaleTollLanes}
                              onChange={handleInputChange}
                              placeholder="Select scope"
                              options={tollOptions}
                            />
                          </div>
                        )}

                        {formData.servicesNeeded.includes(
                          "Security Systems",
                        ) && (
                          <div className="col-md-6 mt-2">
                            <p className="m-0 small text-muted">
                              Screening Points
                            </p>
                            <CustomSelect
                              name="scaleSecurityScreening"
                              value={formData.scaleSecurityScreening}
                              onChange={handleInputChange}
                              placeholder="Select scope"
                              options={securityOptions}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-lg-12">
                  <div className="input-area">
                    <p>Approx. daily volume (people / vehicles)</p>
                    <CustomSelect
                      name="dailyTraffic"
                      value={formData.dailyTraffic}
                      onChange={handleInputChange}
                      required
                      placeholder="Select footprint volume"
                      options={dailyTrafficOptions}
                    />
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
                    <CustomSelect
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleInputChange}
                      required
                      placeholder="Select financial range"
                      options={budgetOptions}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Budget Status</p>
                    <CustomSelect
                      name="budgetStatus"
                      value={formData.budgetStatus}
                      onChange={handleInputChange}
                      required
                      placeholder="Select financial status"
                      options={budgetStatusOptions}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Deployment Timeline</p>
                    <CustomSelect
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      placeholder="Select target timeline"
                      options={timelineOptions}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Your Role in Decision Making</p>
                    <CustomSelect
                      name="decisionRole"
                      value={formData.decisionRole}
                      onChange={handleInputChange}
                      required
                      placeholder="Select mandate type"
                      options={decisionRoleOptions}
                    />
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
