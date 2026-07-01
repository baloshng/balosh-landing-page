import { z, type ZodError } from "zod"

const userTypeValues = ["Organization", "Individual"] as const
const roleValues = [
  "Owner/MD/CEO/Director",
  "Facility/Operations Manager",
  "Procurement/ Purchasing",
  "Project / Technical Lead",
  "Consultant/Contractor (for a client)",
  "Other",
] as const
const projectTypeValues = [
  "New facility",
  "Upgrade existing system",
  "Repair/maintain existing",
] as const
const siteTypeValues = [
  "Airport / Seaport / transport terminal",
  "Toll road/highway",
  "Shopping mall / major retail",
  "Stadium/arena / event venue",
  "Government institution / agency",
  "Corporate HQ / large campus",
  "Private institution/club/gated community",
  "Small office / SME premises",
  "Residential/private home",
  "Other",
] as const
const accessControlScaleValues = ["1-5", "6-10", "11-20", "20+"] as const
const automatedEntrancesScaleValues = ["1", "2-4", "5-10", "10+"] as const
const tollLaneScaleValues = ["1-2", "3-6", "7+"] as const
const securityScaleValues = ["1", "2-4", "5+"] as const
const dailyTrafficValues = [
  "Under 500",
  "500-2,000",
  "2,000-10,000",
  "10,000+",
] as const
const estimatedBudgetValues = [
  "Under NGN 10M",
  "NGN 10M-50M",
  "NGN 50M-100M",
  "Above NGN 100M",
] as const
const budgetStatusValues = [
  "Approved",
  "Being budgeted now",
  "Not allocated yet",
] as const
const timelineValues = [
  "Active need ready to proceed now",
  "Planning & budgeting (next 1-6 months)",
  "Just researching for the future",
] as const
const decisionRoleValues = [
  "I make the decision",
  "I recommend; someone else approves",
  "I'm gathering information",
] as const
const referralValues = ["Yes", "No"] as const
const serviceValues = [
  "Access Control",
  "Automated Entrances",
  "Car Parking Solutions",
  "Toll Road Management",
  "Security Systems",
  "Custom software / integration",
  "Equipment rental",
  "Time and Attendance",
] as const

const requiredText = (message: string) =>
  z.string().trim().min(1, message)

const requiredSelection = <TValues extends readonly [string, ...string[]]>(
  values: TValues,
  message: string,
) =>
  z
    .string()
    .trim()
    .min(1, message)
    .refine(
      (value) => values.includes(value as TValues[number]),
      "Choose a valid option.",
    )

const optionalText = z.string().trim()

const optionalUrl = z
  .string()
  .trim()
  .refine(
    (value) => value === "" || /^https?:\/\/.+/i.test(value),
    "Enter a valid website URL starting with http:// or https://.",
  )
  .refine(
    (value) => {
      if (value === "") {
        return true
      }

      try {
        new URL(value)
        return true
      } catch {
        return false
      }
    },
    "Enter a valid website URL starting with http:// or https://.",
  )

const phoneNumberSchema = z
  .string()
  .trim()
  .min(1, "Phone number is required.")
  .regex(/^[0-9+()\-\s]{7,20}$/, "Enter a valid phone number.")

const positiveWholeNumberText = (message: string) =>
  z
    .string()
    .trim()
    .min(1, message)
    .regex(/^\d+$/, "Enter a whole number.")

export type ContactFormData = {
  fullName: string
  userType: string
  organizationName: string
  role: string
  otherRoleDetails: string
  workEmail: string
  phoneNumber: string
  website: string
  projectLocation: string
  servicesNeeded: string[]
  projectType: string
  siteType: string
  otherSiteType: string
  scaleAccessControl: string
  scaleAutomatedEntrances: string
  scaleCarParkingLanes: string
  scaleCarParkingSpaces: string
  scaleCarParkingPayments: string
  scaleTollLanes: string
  scaleSecurityScreening: string
  dailyTraffic: string
  estimatedBudget: string
  budgetStatus: string
  timeline: string
  decisionRole: string
  isReferred: string
  referrerName: string
  referrerOrganization: string
  referrerContact: string
  projectDescription: string
}

export type ContactFormFieldName = keyof ContactFormData
export type ContactFormFieldErrors = Partial<
  Record<ContactFormFieldName, string>
>

export function createEmptyContactFormData(): ContactFormData {
  return {
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
  }
}

function getObjectRecord(value: unknown) {
  return value && typeof value === "object"
    ? (value as Record<string, unknown>)
    : {}
}

function getStringValue(value: unknown) {
  return typeof value === "string" ? value : ""
}

function getStringArrayValue(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : []
}

export function coerceContactFormData(value: unknown): ContactFormData {
  const record = getObjectRecord(value)

  return {
    fullName: getStringValue(record.fullName),
    userType: getStringValue(record.userType),
    organizationName: getStringValue(record.organizationName),
    role: getStringValue(record.role),
    otherRoleDetails: getStringValue(record.otherRoleDetails),
    workEmail: getStringValue(record.workEmail),
    phoneNumber: getStringValue(record.phoneNumber),
    website: getStringValue(record.website),
    projectLocation: getStringValue(record.projectLocation),
    servicesNeeded: getStringArrayValue(record.servicesNeeded),
    projectType: getStringValue(record.projectType),
    siteType: getStringValue(record.siteType),
    otherSiteType: getStringValue(record.otherSiteType),
    scaleAccessControl: getStringValue(record.scaleAccessControl),
    scaleAutomatedEntrances: getStringValue(record.scaleAutomatedEntrances),
    scaleCarParkingLanes: getStringValue(record.scaleCarParkingLanes),
    scaleCarParkingSpaces: getStringValue(record.scaleCarParkingSpaces),
    scaleCarParkingPayments: getStringValue(record.scaleCarParkingPayments),
    scaleTollLanes: getStringValue(record.scaleTollLanes),
    scaleSecurityScreening: getStringValue(record.scaleSecurityScreening),
    dailyTraffic: getStringValue(record.dailyTraffic),
    estimatedBudget: getStringValue(record.estimatedBudget),
    budgetStatus: getStringValue(record.budgetStatus),
    timeline: getStringValue(record.timeline),
    decisionRole: getStringValue(record.decisionRole),
    isReferred: getStringValue(record.isReferred),
    referrerName: getStringValue(record.referrerName),
    referrerOrganization: getStringValue(record.referrerOrganization),
    referrerContact: getStringValue(record.referrerContact),
    projectDescription: getStringValue(record.projectDescription),
  }
}

export function normalizeContactFormData(
  value: ContactFormData,
): ContactFormData {
  const normalized = {
    ...value,
    servicesNeeded: Array.from(new Set(value.servicesNeeded)),
  }

  if (normalized.userType !== "Organization") {
    normalized.organizationName = ""
  }

  if (normalized.role !== "Other") {
    normalized.otherRoleDetails = ""
  }

  if (normalized.siteType !== "Other") {
    normalized.otherSiteType = ""
  }

  if (!normalized.servicesNeeded.includes("Access Control")) {
    normalized.scaleAccessControl = ""
  }

  if (!normalized.servicesNeeded.includes("Automated Entrances")) {
    normalized.scaleAutomatedEntrances = ""
  }

  if (!normalized.servicesNeeded.includes("Car Parking Solutions")) {
    normalized.scaleCarParkingLanes = ""
    normalized.scaleCarParkingSpaces = ""
    normalized.scaleCarParkingPayments = ""
  }

  if (!normalized.servicesNeeded.includes("Toll Road Management")) {
    normalized.scaleTollLanes = ""
  }

  if (!normalized.servicesNeeded.includes("Security Systems")) {
    normalized.scaleSecurityScreening = ""
  }

  if (normalized.isReferred !== "Yes") {
    normalized.referrerName = ""
    normalized.referrerOrganization = ""
    normalized.referrerContact = ""
  }

  return normalized
}

export const contactFormSchema = z
  .object({
    fullName: requiredText("Full name is required."),
    userType: requiredSelection(userTypeValues, "Select whether you are an organization or an individual."),
    organizationName: optionalText,
    role: requiredSelection(roleValues, "Select your role or position."),
    otherRoleDetails: optionalText,
    workEmail: z
      .string()
      .trim()
      .min(1, "Work email is required.")
      .email("Enter a valid work email address."),
    phoneNumber: phoneNumberSchema,
    website: optionalUrl,
    projectLocation: requiredText("Project location state is required."),
    servicesNeeded: z
      .array(z.enum(serviceValues))
      .min(1, "Select at least one service."),
    projectType: requiredSelection(projectTypeValues, "Select the project type."),
    siteType: requiredSelection(siteTypeValues, "Select the site type."),
    otherSiteType: optionalText,
    scaleAccessControl: optionalText,
    scaleAutomatedEntrances: optionalText,
    scaleCarParkingLanes: optionalText,
    scaleCarParkingSpaces: optionalText,
    scaleCarParkingPayments: optionalText,
    scaleTollLanes: optionalText,
    scaleSecurityScreening: optionalText,
    dailyTraffic: requiredSelection(dailyTrafficValues, "Select the approximate daily volume."),
    estimatedBudget: requiredSelection(estimatedBudgetValues, "Select the estimated project budget."),
    budgetStatus: requiredSelection(budgetStatusValues, "Select the budget status."),
    timeline: requiredSelection(timelineValues, "Select the deployment timeline."),
    decisionRole: requiredSelection(decisionRoleValues, "Select your role in decision-making."),
    isReferred: requiredSelection(referralValues, "Select whether you were referred."),
    referrerName: optionalText,
    referrerOrganization: optionalText,
    referrerContact: optionalText,
    projectDescription: z
      .string()
      .trim()
      .min(10, "Project description must be at least 10 characters."),
  })
  .superRefine((data, ctx) => {
    if (data.userType === "Organization" && data.organizationName === "") {
      ctx.addIssue({
        code: "custom",
        path: ["organizationName"],
        message: "Organization name is required.",
      })
    }

    if (data.role === "Other" && data.otherRoleDetails === "") {
      ctx.addIssue({
        code: "custom",
        path: ["otherRoleDetails"],
        message: "Please specify your position.",
      })
    }

    if (data.siteType === "Other" && data.otherSiteType === "") {
      ctx.addIssue({
        code: "custom",
        path: ["otherSiteType"],
        message: "Please specify the site profile.",
      })
    }

    if (
      data.servicesNeeded.includes("Access Control") &&
      data.scaleAccessControl === ""
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleAccessControl"],
        message: "Select the access control scope.",
      })
    }

    if (
      data.servicesNeeded.includes("Automated Entrances") &&
      data.scaleAutomatedEntrances === ""
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleAutomatedEntrances"],
        message: "Select the automated entrance scope.",
      })
    }

    if (data.servicesNeeded.includes("Car Parking Solutions")) {
      const lanesResult = positiveWholeNumberText(
        "Parking lanes are required.",
      ).safeParse(data.scaleCarParkingLanes)
      if (!lanesResult.success) {
        ctx.addIssue({
          code: "custom",
          path: ["scaleCarParkingLanes"],
          message: lanesResult.error.issues[0]?.message ?? "Enter parking lanes.",
        })
      }

      const spacesResult = positiveWholeNumberText(
        "Parking spaces are required.",
      ).safeParse(data.scaleCarParkingSpaces)
      if (!spacesResult.success) {
        ctx.addIssue({
          code: "custom",
          path: ["scaleCarParkingSpaces"],
          message: spacesResult.error.issues[0]?.message ?? "Enter parking spaces.",
        })
      }

      const paymentPointsResult = positiveWholeNumberText(
        "Payment points are required.",
      ).safeParse(data.scaleCarParkingPayments)
      if (!paymentPointsResult.success) {
        ctx.addIssue({
          code: "custom",
          path: ["scaleCarParkingPayments"],
          message:
            paymentPointsResult.error.issues[0]?.message ??
            "Enter payment points.",
        })
      }
    }

    if (
      data.servicesNeeded.includes("Toll Road Management") &&
      data.scaleTollLanes === ""
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleTollLanes"],
        message: "Select the toll lane scope.",
      })
    }

    if (
      data.servicesNeeded.includes("Security Systems") &&
      data.scaleSecurityScreening === ""
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleSecurityScreening"],
        message: "Select the screening scope.",
      })
    }

    if (
      data.scaleAccessControl !== "" &&
      !accessControlScaleValues.includes(
        data.scaleAccessControl as (typeof accessControlScaleValues)[number],
      )
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleAccessControl"],
        message: "Choose a valid access control scope.",
      })
    }

    if (
      data.scaleAutomatedEntrances !== "" &&
      !automatedEntrancesScaleValues.includes(
        data.scaleAutomatedEntrances as (typeof automatedEntrancesScaleValues)[number],
      )
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleAutomatedEntrances"],
        message: "Choose a valid automated entrance scope.",
      })
    }

    if (
      data.scaleTollLanes !== "" &&
      !tollLaneScaleValues.includes(
        data.scaleTollLanes as (typeof tollLaneScaleValues)[number],
      )
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleTollLanes"],
        message: "Choose a valid toll lane scope.",
      })
    }

    if (
      data.scaleSecurityScreening !== "" &&
      !securityScaleValues.includes(
        data.scaleSecurityScreening as (typeof securityScaleValues)[number],
      )
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["scaleSecurityScreening"],
        message: "Choose a valid screening scope.",
      })
    }

    if (
      data.isReferred === "Yes" &&
      data.referrerName === "" &&
      data.referrerOrganization === "" &&
      data.referrerContact === ""
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["referrerName"],
        message: "Provide at least one referrer detail.",
      })
    }
  })

export function getContactFormFieldErrors(
  error: ZodError,
): ContactFormFieldErrors {
  const fieldErrors: ContactFormFieldErrors = {}

  for (const issue of error.issues) {
    const fieldName = issue.path[0]
    if (
      typeof fieldName === "string" &&
      fieldErrors[fieldName as ContactFormFieldName] === undefined
    ) {
      fieldErrors[fieldName as ContactFormFieldName] = issue.message
    }
  }

  return fieldErrors
}
