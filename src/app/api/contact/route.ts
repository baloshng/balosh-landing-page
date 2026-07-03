import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { z } from "zod"

import { generateEmailTemplate } from "./generateEmailTemplate"
import {
  coerceContactFormData,
  contactFormSchema,
  getContactFormFieldErrors,
  normalizeContactFormData,
} from "@/lib/contactFormSchema"

export const runtime = "nodejs"

const homeCtaSchema = z.object({
  email: z.string().trim().min(1).email(),
  source: z.literal("home_cta"),
})

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim()
  const port = Number(process.env.SMTP_PORT)
  const user = process.env.SMTP_USER?.trim()
  const password = process.env.SMTP_PASSWORD
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL?.trim() || user

  if (!host || !port || !user || !password || !recipient) {
    return null
  }

  return { host, port, user, password, recipient }
}

async function sendHomeCtaEmail(
  body: unknown,
  smtp: NonNullable<ReturnType<typeof getSmtpConfig>>,
) {
  const validation = homeCtaSchema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please correct the highlighted fields and try again.",
      },
      { status: 400 },
    )
  }

  const safeEmail = escapeHtml(validation.data.email)
  const transport = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.password,
    },
  })

  await transport.sendMail({
    from: {
      name: "Balosh Evaluation System",
      address: smtp.user,
    },
    to: smtp.recipient,
    replyTo: validation.data.email,
    subject: "New Consultation Request from Website",
    html: `
      <p>A new consultation request has arrived through the Balosh website.</p>
      <p><strong>Email address</strong></p>
      <p><a href="mailto:${safeEmail}">${safeEmail}</a></p>
    `,
  })

  return NextResponse.json({
    ok: true,
    message: "Contact email sent successfully.",
  })
}

export async function POST(request: Request) {
  try {
    const smtp = getSmtpConfig()
    if (!smtp) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 },
      )
    }

    const requestBody = await request.json()
    if (
      requestBody &&
      typeof requestBody === "object" &&
      "source" in requestBody &&
      requestBody.source === "home_cta"
    ) {
      return sendHomeCtaEmail(requestBody, smtp)
    }

    const body = normalizeContactFormData(
      coerceContactFormData(requestBody),
    )
    const validation = contactFormSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please correct the highlighted fields and try again.",
          fieldErrors: getContactFormFieldErrors(validation.error),
        },
        { status: 400 },
      )
    }

    const {
      fullName,
      userType,
      organizationName,
      role,
      otherRoleDetails,
      workEmail,
      phoneNumber,
      website,
      projectLocation,
      servicesNeeded,
      projectType,
      siteType,
      otherSiteType,
      scaleAccessControl,
      scaleAutomatedEntrances,
      scaleCarParkingLanes,
      scaleCarParkingSpaces,
      scaleCarParkingPayments,
      scaleTollLanes,
      scaleSecurityScreening,
      dailyTraffic,
      estimatedBudget,
      budgetStatus,
      timeline,
      decisionRole,
      isReferred,
      referrerName,
      referrerOrganization,
      referrerContact,
      projectDescription,
    } = validation.data

    const { emailSubject, htmlContent } = generateEmailTemplate({
      fullName,
      userType,
      organizationName,
      role,
      otherRoleDetails,
      workEmail,
      phoneNumber,
      website,
      projectLocation,
      servicesNeeded,
      projectType,
      siteType,
      otherSiteType,
      scaleAccessControl,
      scaleAutomatedEntrances,
      scaleCarParkingLanes,
      scaleCarParkingSpaces,
      scaleCarParkingPayments,
      scaleTollLanes,
      scaleSecurityScreening,
      dailyTraffic,
      estimatedBudget,
      budgetStatus,
      timeline,
      decisionRole,
      isReferred,
      referrerName,
      referrerOrganization,
      referrerContact,
      projectDescription,
    })

    const transport = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.port === 465,
      auth: {
        user: smtp.user,
        pass: smtp.password,
      },
    })

    await transport.sendMail({
      from: {
        name: "Balosh Evaluation System",
        address: smtp.user,
      },
      to: smtp.recipient,
      replyTo: workEmail,
      subject: emailSubject,
      html: htmlContent,
    })

    return NextResponse.json({
      ok: true,
      message: "Contact email sent successfully.",
    })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process contact request." },
      { status: 500 },
    )
  }
}
