type ContactEmailPayload = {
  fullName: string
  userType?: string
  organizationName?: string
  role?: string
  otherRoleDetails?: string
  workEmail: string
  phoneNumber: string
  website?: string
  projectLocation: string
  servicesNeeded?: string[]
  projectType?: string
  siteType?: string
  otherSiteType?: string
  scaleAccessControl?: string
  scaleAutomatedEntrances?: string
  scaleCarParkingLanes?: string
  scaleCarParkingSpaces?: string
  scaleCarParkingPayments?: string
  scaleTollLanes?: string
  scaleSecurityScreening?: string
  dailyTraffic?: string
  estimatedBudget?: string
  budgetStatus?: string
  timeline?: string
  decisionRole?: string
  isReferred?: string
  referrerName?: string
  referrerOrganization?: string
  referrerContact?: string
  projectDescription: string
}

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

const formatMessage = (value: unknown) =>
  escapeHtml(value).replace(/\r\n|\r|\n/g, "<br>")

const BALOSH_EMAIL_LOGO_URL =
  "https://res.cloudinary.com/dnzqxpmct/image/upload/v1780556540/luqa/orgs/504a6f6d-fe9c-4f12-892c-73ec13316728/1780556540104-career-logo.png"
const BALOSH_EMAIL_BACKGROUND_URL =
  "https://res.cloudinary.com/dnzqxpmct/image/upload/v1780556520/luqa/orgs/504a6f6d-fe9c-4f12-892c-73ec13316728/1780556519734-bg3.png"
const BALOSH_EMAIL_FAVICON_URL =
  "https://res.cloudinary.com/dnzqxpmct/image/upload/v1780557441/luqa/orgs/504a6f6d-fe9c-4f12-892c-73ec13316728/1780557440865-favicon.png"

export function generateEmailTemplate(payload: ContactEmailPayload) {
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
  } = payload

  const safeName = escapeHtml(fullName)
  const safeEmail = escapeHtml(workEmail)
  const safePhone = escapeHtml(phoneNumber)
  const safeDescription = formatMessage(projectDescription)

  const emailSubject = `Project Evaluation Request - ${safeName}`
  const enquiryIntro =
    "A detailed evaluation inquiry has been submitted via the evaluation application portal. Review the structured summary details below."

  const formattedServices =
    Array.isArray(servicesNeeded) && servicesNeeded.length > 0
      ? servicesNeeded.map((service) => `• ${escapeHtml(service)}`).join("<br>")
      : "None selected"

  const logoUrl = BALOSH_EMAIL_LOGO_URL
  const backgroundUrl = BALOSH_EMAIL_BACKGROUND_URL
  const faviconUrl = BALOSH_EMAIL_FAVICON_URL

  const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<link rel="icon" href="${faviconUrl}" type="image/png" />
<meta property="og:image" content="${faviconUrl}" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body {
min-width: 100%;
Margin: 0px;
padding: 0px;
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: Afacad !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: Afacad;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t7,.t79{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t80{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t76{width:353px!important}.t135{padding:40px 30px!important}.t115{padding-bottom:36px!important}.t111{text-align:center!important}.t102,.t106,.t110,.t94,.t98{vertical-align:top!important;width:24px!important}.t2{padding-bottom:16px!important}.t4{width:163px!important}
}
</style>
</head>
<body id=body class=t142 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class=t141 style="background-color:#242424;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t140 style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign=top align=center>
<table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center id=innerTable><tr><td><div class=t79 style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td class=t84 align=center>
<table class=t83 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=600 class=t82 style="width:600px;">
<table class=t81 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t80 background="${backgroundUrl}" style="background-color:#F8F8F8;background-image:url(${backgroundUrl});background-repeat:repeat;background-size:auto;background-position:center center;padding:0 50px 60px 50px;"><table role=presentation width=100% cellpadding=0 cellspacing=0 style="width:100% !important;"><tr><td><div class=t1 style="mso-line-height-rule:exactly;mso-line-height-alt:68px;line-height:68px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td class=t6 align=left>
<table class=t5 role=presentation cellpadding=0 cellspacing=0 style="Margin-right:auto;"><tr><td width=264 class=t4 style="width:264px;">
<table class=t3 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t2 style="padding:0 0 4px 0;"><div style="font-size:0px;"><img class=t0 style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width=264 height=99 alt="Balosh" src="${logoUrl}"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class=t7 style="mso-line-height-rule:exactly;mso-line-height-alt:37px;line-height:37px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td class=t13 align=center>
<table class=t12 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t11 style="width:600px;">
<table class=t10 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t9 style="padding:0 0 22px 0;"><p class=t8 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${enquiryIntro}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t20 align=center>
<table class=t19 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t18 style="width:600px;">
<table class=t17 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t16><p class=t15 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
<span style="font-weight:700;color:#ff7a00;font-size:17px;display:block;margin-bottom:12px;border-bottom:1px dashed #ddd;padding-bottom:4px;">SECTION A: ABOUT THE USER</span>
<span class=t14 style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Full Name:</span> ${safeName}<br>
<span style="font-weight:700;">Account Profile Type:</span> ${escapeHtml(userType)}<br>
${userType === "Organization" ? `<span style="font-weight:700;">Organization Name:</span> ${escapeHtml(organizationName)}<br>` : ""}
<span style="font-weight:700;">Position Role:</span> ${escapeHtml(role === "Other" ? otherRoleDetails : role)}<br>
<span style="font-weight:700;">Work Email:</span> <a href="mailto:${safeEmail}" style="color:#004EEB;text-decoration:underline;">${safeEmail}</a><br>
<span style="font-weight:700;">Phone Line:</span> <a href="tel:${safePhone}" style="color:#004EEB;text-decoration:underline;">${safePhone}</a><br>
<span style="font-weight:700;">Digital Portal URL:</span> ${website ? `<a href="${escapeHtml(website)}" target="_blank" style="color:#004EEB;text-decoration:underline;">${escapeHtml(website)}</a>` : "Not provided"}<br>
<span style="font-weight:700;">Target State/Location:</span> ${escapeHtml(projectLocation)}<br><br>

<span style="font-weight:700;color:#ff7a00;font-size:17px;display:block;margin-bottom:12px;border-bottom:1px dashed #ddd;padding-bottom:4px;">SECTION B: SPECIFIC PROJECT METRICS</span>
<span style="font-weight:700;">Selected Ecosystem Core Requirements:</span><br>${formattedServices}<br>
<span style="font-weight:700;">Infrastructure Assignment Intent:</span> ${escapeHtml(projectType)}<br>
<span style="font-weight:700;">Site Allocation Profile:</span> ${escapeHtml(siteType === "Other" ? otherSiteType : siteType)}<br>

${
  scaleAccessControl ||
  scaleAutomatedEntrances ||
  scaleCarParkingLanes ||
  scaleCarParkingSpaces ||
  scaleCarParkingPayments ||
  scaleTollLanes ||
  scaleSecurityScreening
    ? `
<span style="font-weight:700;margin-top:6px;display:inline-block;">Scale Parameters & Asset Bounds:</span><br>
${scaleAccessControl ? `• Access Control Points: ${escapeHtml(scaleAccessControl)}<br>` : ""}
${scaleAutomatedEntrances ? `• Perimeter Entry Points: ${escapeHtml(scaleAutomatedEntrances)}<br>` : ""}
${scaleCarParkingLanes ? `• Parking Lanes Configured: ${escapeHtml(scaleCarParkingLanes)}<br>` : ""}
${scaleCarParkingSpaces ? `• Total Space Volume Allocation: ${escapeHtml(scaleCarParkingSpaces)}<br>` : ""}
${scaleCarParkingPayments ? `• POS Payment Point Totals: ${escapeHtml(scaleCarParkingPayments)}<br>` : ""}
${scaleTollLanes ? `• Tolling Lane Boundaries: ${escapeHtml(scaleTollLanes)}<br>` : ""}
${scaleSecurityScreening ? `• Checkpoint Inspection Arrays: ${escapeHtml(scaleSecurityScreening)}<br>` : ""}
`
    : ""
}
<span style="font-weight:700;">Approximate Site Footprint Daily Volume:</span> ${escapeHtml(dailyTraffic)}<br><br>

<span style="font-weight:700;color:#ff7a00;font-size:17px;display:block;margin-bottom:12px;border-bottom:1px dashed #ddd;padding-bottom:4px;">SECTION C: FINANCIAL STATUS &amp; TIMELINE</span>
<span style="font-weight:700;">Financial Scope Window Valuation:</span> ${escapeHtml(estimatedBudget)}<br>
<span style="font-weight:700;">Allocation Budgetary Security:</span> ${escapeHtml(budgetStatus)}<br>
<span style="font-weight:700;">Target Deployment Window:</span> ${escapeHtml(timeline)}<br>
<span style="font-weight:700;">User Authority Mandate Rank:</span> ${escapeHtml(decisionRole)}<br><br>

<span style="font-weight:700;color:#ff7a00;font-size:17px;display:block;margin-bottom:12px;border-bottom:1px dashed #ddd;padding-bottom:4px;">SECTION D: REFERRAL ASSISTANCE INFORMATION</span>
<span style="font-weight:700;">Client Network Ecosystem Connection:</span> ${escapeHtml(isReferred)}<br>
${
  isReferred === "Yes"
    ? `
• Referrer Name Context: ${escapeHtml(referrerName)}<br>
• Entity Association Context: ${escapeHtml(referrerOrganization)}<br>
• Channel Identification Contact: ${escapeHtml(referrerContact)}<br><br>
`
    : "<br>"
}

<span style="font-weight:700;color:#ff7a00;font-size:17px;display:block;margin-bottom:12px;border-bottom:1px dashed #ddd;padding-bottom:4px;">SECTION E: ADDITIONAL TECHNICAL SPECIFICATIONS</span>
</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t64 align=center>
<table class=t63 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t62 style="width:600px;">
<table class=t61 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t60 style="padding:0 0 22px 0;"><p class=t59 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${safeDescription}</p></td></tr></table>
</td></tr></table>
`

  return { emailSubject, htmlContent }
}
