import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

import { generateEmailTemplate } from "./generateEmailTemplate"

export const runtime = "nodejs"

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

export async function POST(request: Request) {
  try {
    const smtp = getSmtpConfig()
    if (!smtp) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 },
      )
    }

    const body = await request.json()

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
    } = body

    if (
      !fullName ||
      !workEmail ||
      !phoneNumber ||
      !projectLocation ||
      !projectDescription
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required validation fields" },
        { status: 400 },
      )
    }

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
