"use client"

import { FormEvent, useState } from "react"
import { CustomSelect, type FieldChangeEvent } from "./CustomSelect"
import { getNigerianStateOptions } from "./nigerianStates"
import {
  contactFormSchema,
  createEmptyContactFormData,
  getContactFormFieldErrors,
  normalizeContactFormData,
  type ContactFormData,
  type ContactFormFieldErrors,
  type ContactFormFieldName,
} from "@/lib/contactFormSchema"
import "./form-style.css"

export function ProjectEvaluationForm() {
  const [formData, setFormData] = useState<ContactFormData>(
    createEmptyContactFormData(),
  )
  const [fieldErrors, setFieldErrors] = useState<ContactFormFieldErrors>({})

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const fieldErrorIds = {
    fullName: "contact-form-error-full-name",
    userType: "contact-form-error-user-type",
    organizationName: "contact-form-error-organization-name",
    role: "contact-form-error-role",
    otherRoleDetails: "contact-form-error-other-role-details",
    workEmail: "contact-form-error-work-email",
    phoneNumber: "contact-form-error-phone-number",
    website: "contact-form-error-website",
    projectLocation: "contact-form-error-project-location",
    servicesNeeded: "contact-form-error-services-needed",
    projectType: "contact-form-error-project-type",
    siteType: "contact-form-error-site-type",
    otherSiteType: "contact-form-error-other-site-type",
    scaleAccessControl: "contact-form-error-scale-access-control",
    scaleAutomatedEntrances: "contact-form-error-scale-automated-entrances",
    scaleCarParkingLanes: "contact-form-error-scale-car-parking-lanes",
    scaleCarParkingSpaces: "contact-form-error-scale-car-parking-spaces",
    scaleCarParkingPayments: "contact-form-error-scale-car-parking-payments",
    scaleTollLanes: "contact-form-error-scale-toll-lanes",
    scaleSecurityScreening: "contact-form-error-scale-security-screening",
    dailyTraffic: "contact-form-error-daily-traffic",
    estimatedBudget: "contact-form-error-estimated-budget",
    budgetStatus: "contact-form-error-budget-status",
    timeline: "contact-form-error-timeline",
    decisionRole: "contact-form-error-decision-role",
    isReferred: "contact-form-error-is-referred",
    referrerName: "contact-form-error-referrer-name",
    referrerOrganization: "contact-form-error-referrer-organization",
    referrerContact: "contact-form-error-referrer-contact",
    projectDescription: "contact-form-error-project-description",
  } satisfies Record<ContactFormFieldName, string>

  const conditionalFieldDependencies: Partial<
    Record<ContactFormFieldName, ContactFormFieldName[]>
  > = {
    userType: ["organizationName"],
    role: ["otherRoleDetails"],
    siteType: ["otherSiteType"],
    isReferred: [
      "referrerName",
      "referrerOrganization",
      "referrerContact",
    ],
  } satisfies Partial<Record<ContactFormFieldName, ContactFormFieldName[]>>

  const serviceScaleDependencies: Partial<
    Record<ContactFormFieldName, ContactFormFieldName[]>
  > = {
    servicesNeeded: [
      "scaleAccessControl",
      "scaleAutomatedEntrances",
      "scaleCarParkingLanes",
      "scaleCarParkingSpaces",
      "scaleCarParkingPayments",
      "scaleTollLanes",
      "scaleSecurityScreening",
    ],
  }

  const clearFieldErrors = (fields: ContactFormFieldName[]) => {
    setFieldErrors((previous) => {
      const next = { ...previous }
      for (const field of fields) {
        delete next[field]
      }
      return next
    })
  }

  const hasFieldError = (fieldName: ContactFormFieldName) =>
    fieldErrors[fieldName] !== undefined

  const getInputClassName = (fieldName: ContactFormFieldName) =>
    hasFieldError(fieldName)
      ? "contact-form-input contact-form-input-error"
      : "contact-form-input"

  const getErrorId = (fieldName: ContactFormFieldName) =>
    fieldErrorIds[fieldName]

  const renderFieldError = (fieldName: ContactFormFieldName) => {
    const error = fieldErrors[fieldName]

    if (!error) {
      return null
    }

    return (
      <p
        id={getErrorId(fieldName)}
        className="contact-form-error"
        role="alert"
      >
        {error}
      </p>
    )
  }

  const handleInputChange = (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      | FieldChangeEvent,
  ) => {
    const { name, value } = e.target
    const fieldName = name as ContactFormFieldName

    setFormData((prev) =>
      normalizeContactFormData({
        ...prev,
        [fieldName]: value,
      }),
    )
    clearFieldErrors([
      fieldName,
      ...(conditionalFieldDependencies[fieldName] ?? []),
    ])
  }

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const servicesNeeded = prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service]
      return normalizeContactFormData({ ...prev, servicesNeeded })
    })
    clearFieldErrors([
      "servicesNeeded",
      ...(serviceScaleDependencies.servicesNeeded ?? []),
    ])
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("idle")
    setErrorMessage("")
    setShowSuccessModal(false)

    const normalizedFormData = normalizeContactFormData(formData)
    const validation = contactFormSchema.safeParse(normalizedFormData)

    if (!validation.success) {
      setFieldErrors(getContactFormFieldErrors(validation.error))
      setStatus("error")
      setErrorMessage("Please correct the highlighted fields and try again.")
      setFormData(normalizedFormData)
      return
    }

    setFieldErrors({})
    setFormData(validation.data)
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors as ContactFormFieldErrors)
        }
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      setShowSuccessModal(true)
      setFieldErrors({})
      // Reset form on success
      setFormData(createEmptyContactFormData())
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
                      type="button"
                      onClick={() => setShowSuccessModal(false)}
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
                className="contact-form-error-summary"
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

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
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
                      className={getInputClassName("fullName")}
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      aria-invalid={hasFieldError("fullName") || undefined}
                      aria-describedby={getErrorId("fullName")}
                    />
                    {renderFieldError("fullName")}
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
                            aria-describedby={getErrorId("userType")}
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                    {renderFieldError("userType")}
                  </div>
                </div>

                {formData.userType === "Organization" && (
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Organization Name (required)</p>
                      <input
                        className={getInputClassName("organizationName")}
                        type="text"
                        name="organizationName"
                        placeholder="Company Name"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
                        aria-invalid={
                          hasFieldError("organizationName") || undefined
                        }
                        aria-describedby={getErrorId("organizationName")}
                      />
                      {renderFieldError("organizationName")}
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
                      className={hasFieldError("role") ? "is-invalid" : ""}
                      ariaInvalid={hasFieldError("role")}
                      ariaDescribedBy={getErrorId("role")}
                    />
                    {renderFieldError("role")}
                  </div>
                </div>

                {formData.role === "Other" && (
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Please specify position (required)</p>
                      <input
                        className={getInputClassName("otherRoleDetails")}
                        type="text"
                        name="otherRoleDetails"
                        placeholder="Specify your role"
                        value={formData.otherRoleDetails}
                        onChange={handleInputChange}
                        required
                        aria-invalid={
                          hasFieldError("otherRoleDetails") || undefined
                        }
                        aria-describedby={getErrorId("otherRoleDetails")}
                      />
                      {renderFieldError("otherRoleDetails")}
                    </div>
                  </div>
                )}

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Work Email (required)</p>
                    <input
                      className={getInputClassName("workEmail")}
                      type="email"
                      name="workEmail"
                      placeholder="you@company.com"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      required
                      aria-invalid={hasFieldError("workEmail") || undefined}
                      aria-describedby={getErrorId("workEmail")}
                    />
                    {renderFieldError("workEmail")}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Phone Number (required)</p>
                    <input
                      className={getInputClassName("phoneNumber")}
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      aria-invalid={hasFieldError("phoneNumber") || undefined}
                      aria-describedby={getErrorId("phoneNumber")}
                    />
                    {renderFieldError("phoneNumber")}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-area">
                    <p>Website or Social Page (Optional)</p>
                    <input
                      className={getInputClassName("website")}
                      type="url"
                      name="website"
                      placeholder="https://..."
                      value={formData.website}
                      onChange={handleInputChange}
                      aria-invalid={hasFieldError("website") || undefined}
                      aria-describedby={getErrorId("website")}
                    />
                    {renderFieldError("website")}
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
                      className={
                        hasFieldError("projectLocation") ? "is-invalid" : ""
                      }
                      ariaInvalid={hasFieldError("projectLocation")}
                      ariaDescribedBy={getErrorId("projectLocation")}
                    />
                    {renderFieldError("projectLocation")}
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
                      className={hasFieldError("projectType") ? "is-invalid" : ""}
                      ariaInvalid={hasFieldError("projectType")}
                      ariaDescribedBy={getErrorId("projectType")}
                    />
                    {renderFieldError("projectType")}
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
                      className={hasFieldError("siteType") ? "is-invalid" : ""}
                      ariaInvalid={hasFieldError("siteType")}
                      ariaDescribedBy={getErrorId("siteType")}
                    />
                    {renderFieldError("siteType")}
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
                              aria-invalid={
                                hasFieldError("servicesNeeded") || undefined
                              }
                              aria-describedby={getErrorId("servicesNeeded")}
                            />
                            <span>{service}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                    {renderFieldError("servicesNeeded")}
                  </div>
                </div>

                {formData.siteType === "Other" && (
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Please specify site profile (required)</p>
                      <input
                        className={getInputClassName("otherSiteType")}
                        type="text"
                        name="otherSiteType"
                        value={formData.otherSiteType}
                        onChange={handleInputChange}
                        required
                        aria-invalid={hasFieldError("otherSiteType") || undefined}
                        aria-describedby={getErrorId("otherSiteType")}
                      />
                      {renderFieldError("otherSiteType")}
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
                              className={
                                hasFieldError("scaleAccessControl")
                                  ? "is-invalid"
                                  : ""
                              }
                              ariaInvalid={hasFieldError("scaleAccessControl")}
                              ariaDescribedBy={getErrorId("scaleAccessControl")}
                            />
                            {renderFieldError("scaleAccessControl")}
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
                              className={
                                hasFieldError("scaleAutomatedEntrances")
                                  ? "is-invalid"
                                  : ""
                              }
                              ariaInvalid={hasFieldError("scaleAutomatedEntrances")}
                              ariaDescribedBy={getErrorId("scaleAutomatedEntrances")}
                            />
                            {renderFieldError("scaleAutomatedEntrances")}
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
                                className={`form-control form-control-sm mt-1 ${getInputClassName("scaleCarParkingLanes")}`}
                                aria-invalid={
                                  hasFieldError("scaleCarParkingLanes") ||
                                  undefined
                                }
                                aria-describedby={getErrorId("scaleCarParkingLanes")}
                              />
                              {renderFieldError("scaleCarParkingLanes")}
                            </div>
                            <div className="col-md-4">
                              <p className="m-0 small text-muted">Spaces</p>
                              <input
                                type="text"
                                name="scaleCarParkingSpaces"
                                placeholder="e.g. 150"
                                value={formData.scaleCarParkingSpaces}
                                onChange={handleInputChange}
                                className={`form-control form-control-sm mt-1 ${getInputClassName("scaleCarParkingSpaces")}`}
                                aria-invalid={
                                  hasFieldError("scaleCarParkingSpaces") ||
                                  undefined
                                }
                                aria-describedby={getErrorId("scaleCarParkingSpaces")}
                              />
                              {renderFieldError("scaleCarParkingSpaces")}
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
                                className={`form-control form-control-sm mt-1 ${getInputClassName("scaleCarParkingPayments")}`}
                                aria-invalid={
                                  hasFieldError("scaleCarParkingPayments") ||
                                  undefined
                                }
                                aria-describedby={getErrorId("scaleCarParkingPayments")}
                              />
                              {renderFieldError("scaleCarParkingPayments")}
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
                              className={
                                hasFieldError("scaleTollLanes")
                                  ? "is-invalid"
                                  : ""
                              }
                              ariaInvalid={hasFieldError("scaleTollLanes")}
                              ariaDescribedBy={getErrorId("scaleTollLanes")}
                            />
                            {renderFieldError("scaleTollLanes")}
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
                              className={
                                hasFieldError("scaleSecurityScreening")
                                  ? "is-invalid"
                                  : ""
                              }
                              ariaInvalid={hasFieldError("scaleSecurityScreening")}
                              ariaDescribedBy={getErrorId("scaleSecurityScreening")}
                            />
                            {renderFieldError("scaleSecurityScreening")}
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
                      className={hasFieldError("dailyTraffic") ? "is-invalid" : ""}
                      ariaInvalid={hasFieldError("dailyTraffic")}
                      ariaDescribedBy={getErrorId("dailyTraffic")}
                    />
                    {renderFieldError("dailyTraffic")}
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
                      className={
                        hasFieldError("estimatedBudget") ? "is-invalid" : ""
                      }
                      ariaInvalid={hasFieldError("estimatedBudget")}
                      ariaDescribedBy={getErrorId("estimatedBudget")}
                    />
                    {renderFieldError("estimatedBudget")}
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
                      className={hasFieldError("budgetStatus") ? "is-invalid" : ""}
                      ariaInvalid={hasFieldError("budgetStatus")}
                      ariaDescribedBy={getErrorId("budgetStatus")}
                    />
                    {renderFieldError("budgetStatus")}
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
                      className={hasFieldError("timeline") ? "is-invalid" : ""}
                      ariaInvalid={hasFieldError("timeline")}
                      ariaDescribedBy={getErrorId("timeline")}
                    />
                    {renderFieldError("timeline")}
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
                      className={hasFieldError("decisionRole") ? "is-invalid" : ""}
                      ariaInvalid={hasFieldError("decisionRole")}
                      ariaDescribedBy={getErrorId("decisionRole")}
                    />
                    {renderFieldError("decisionRole")}
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
                            aria-describedby={getErrorId("isReferred")}
                          />
                          <span>{choice}</span>
                        </label>
                      ))}
                    </div>
                    {renderFieldError("isReferred")}
                  </div>
                </div>

                {formData.isReferred === "Yes" && (
                  <>
                    <div className="col-lg-4">
                      <div className="input-area">
                        <p>Referrer Full Name Context</p>
                        <input
                          className={getInputClassName("referrerName")}
                          type="text"
                          name="referrerName"
                          placeholder="Name"
                          value={formData.referrerName}
                          onChange={handleInputChange}
                          aria-invalid={hasFieldError("referrerName") || undefined}
                          aria-describedby={getErrorId("referrerName")}
                        />
                        {renderFieldError("referrerName")}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-area">
                        <p>Organization / Entity Context</p>
                        <input
                          className={getInputClassName("referrerOrganization")}
                          type="text"
                          name="referrerOrganization"
                          placeholder="Company"
                          value={formData.referrerOrganization}
                          onChange={handleInputChange}
                          aria-invalid={
                            hasFieldError("referrerOrganization") || undefined
                          }
                          aria-describedby={getErrorId("referrerOrganization")}
                        />
                        {renderFieldError("referrerOrganization")}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-area">
                        <p>Contact Details (Email/Phone)</p>
                        <input
                          className={getInputClassName("referrerContact")}
                          type="text"
                          name="referrerContact"
                          placeholder="Contact channel"
                          value={formData.referrerContact}
                          onChange={handleInputChange}
                          aria-invalid={
                            hasFieldError("referrerContact") || undefined
                          }
                          aria-describedby={getErrorId("referrerContact")}
                        />
                        {renderFieldError("referrerContact")}
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
                      aria-invalid={
                        hasFieldError("projectDescription") || undefined
                      }
                      aria-describedby={getErrorId("projectDescription")}
                      className={
                        hasFieldError("projectDescription")
                          ? "contact-form-textarea contact-form-input-error"
                          : "contact-form-textarea"
                      }
                      style={{
                        padding: "12px",
                        width: "100%",
                        borderRadius: "4px",
                        border: hasFieldError("projectDescription")
                          ? "1px solid #d92d20"
                          : "1px solid #d0d5dd",
                      }}
                    />
                    {renderFieldError("projectDescription")}
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
