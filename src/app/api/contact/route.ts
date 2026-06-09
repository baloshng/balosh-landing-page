import { NextRequest, NextResponse } from 'next/server'

const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const formatMessage = (value: unknown) =>
  escapeHtml(value).replace(/\r\n|\r|\n/g, '<br>')

const BALOSH_EMAIL_LOGO_URL =
  'https://res.cloudinary.com/dnzqxpmct/image/upload/v1780556540/luqa/orgs/504a6f6d-fe9c-4f12-892c-73ec13316728/1780556540104-career-logo.png'
const BALOSH_EMAIL_BACKGROUND_URL =
  'https://res.cloudinary.com/dnzqxpmct/image/upload/v1780556520/luqa/orgs/504a6f6d-fe9c-4f12-892c-73ec13316728/1780556519734-bg3.png'
const BALOSH_EMAIL_FAVICON_URL =
  'https://res.cloudinary.com/dnzqxpmct/image/upload/v1780557441/luqa/orgs/504a6f6d-fe9c-4f12-892c-73ec13316728/1780557440865-favicon.png'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, message, source } = body
    const isCtaRequest = source === 'home_cta'

    if (!email || (!isCtaRequest && (!name || !phone))) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(name || '')
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || '')
    const safeMessage = formatMessage(message || '')
    const enquiryIntro = isCtaRequest
      ? 'A new consultation request has arrived through the Balosh website. Review the email below and follow up directly.'
      : 'A new enquiry has arrived through the Balosh website. Review the details below and follow up directly.'
    const emailSubject = isCtaRequest
      ? 'New Consultation Request from Website'
      : 'New Enquiry from Website'
    const contactFieldsHtml = isCtaRequest
      ? `
</td></tr><tr><td class=t33 align=center>
<table class=t32 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t31 style="width:600px;">
<table class=t30 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t29><p class=t28 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class=t27 style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Email address</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t39 align=center>
<table class=t38 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t37 style="width:600px;">
<table class=t36 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t35 style="padding:0 0 22px 0;"><p class=t34 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><a href="mailto:${safeEmail}" style="color:#333333;text-decoration:none;font-family:Afacad,Arial,Helvetica,sans-serif;font-size:16px;font-weight:400;line-height:22px;font-style:normal;">${safeEmail}</a></p></td></tr></table>
</td></tr></table>
`
      : `
</td></tr><tr><td class=t20 align=center>
<table class=t19 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t18 style="width:600px;">
<table class=t17 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t16><p class=t15 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class=t14 style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Contact name</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t26 align=center>
<table class=t25 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t24 style="width:600px;">
<table class=t23 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t22 style="padding:0 0 22px 0;"><p class=t21 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${safeName}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t33 align=center>
<table class=t32 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t31 style="width:600px;">
<table class=t30 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t29><p class=t28 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class=t27 style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Reply email</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t39 align=center>
<table class=t38 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t37 style="width:600px;">
<table class=t36 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t35 style="padding:0 0 22px 0;"><p class=t34 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><a href="mailto:${safeEmail}" style="color:#333333;text-decoration:none;font-family:Afacad,Arial,Helvetica,sans-serif;font-size:16px;font-weight:400;line-height:22px;font-style:normal;">${safeEmail}</a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t46 align=center>
<table class=t45 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t44 style="width:600px;">
<table class=t43 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t42><p class=t41 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class=t40 style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Phone number</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t52 align=center>
<table class=t51 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t50 style="width:600px;">
<table class=t49 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t48 style="padding:0 0 22px 0;"><p class=t47 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><a href="tel:${safePhone}" style="color:#333333;text-decoration:none;font-family:Afacad,Arial,Helvetica,sans-serif;font-size:16px;font-weight:400;line-height:22px;font-style:normal;">${safePhone}</a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t58 align=center>
<table class=t57 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t56 style="width:600px;">
<table class=t55 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t54><p class=t53 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Message</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t64 align=center>
<table class=t63 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t62 style="width:600px;">
<table class=t61 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t60 style="padding:0 0 22px 0;"><p class=t59 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${safeMessage || 'No additional details were provided in the form.'}</p></td></tr></table>
</td></tr></table>
`
    const logoUrl = BALOSH_EMAIL_LOGO_URL
    const backgroundUrl = BALOSH_EMAIL_BACKGROUND_URL
    const faviconUrl = BALOSH_EMAIL_FAVICON_URL

    const htmlContent = `
<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
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
<!--[if !mso]><!---->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
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
<!--[if !mso]><!---->
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id=body class=t142 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class=t141 style="background-color:#242424;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t140 style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign=top align=center>
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color=#242424/>
</v:background>
<![endif]-->
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
${contactFieldsHtml}
</td></tr><tr><td><div class=t65 style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td class=t71 align=center>
<table class=t70 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t69 style="width:600px;">
</td></tr></table>
</td></tr><tr><td><div class=t72 style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td class=t78 align=center>
<table class=t77 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=250 class=t76 style="width:250px;">
<table class=t75 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t74 style="background-color:#ff7a00;text-align:center;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;padding:10px 10px 10px 10px;"><a class=t73 href="mailto:${safeEmail}" style="display:block;margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;direction:ltr;color:#ffffff;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;" target=_blank>REPLY TO ENQUIRY</a></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t139 align=center>
<table class=t138 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=600 class=t137 style="width:600px;">
<table class=t136 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t135 style="background-color:#242424;padding:42px 50px 44px 50px;"><table role=presentation width=100% cellpadding=0 cellspacing=0 style="width:100% !important;"><tr><td class=t90 align=center>
<table class=t89 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t88 style="width:600px;">
<table class=t87 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t86><p class=t85 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:24px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#ff7a00;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">...we open important doors!</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t125 align=center>
<table class=t124 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t123 style="width:600px;">
<table class=t122 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t121 style="padding:10px 0 18px 0;"><p class=t120 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:13px;text-decoration:none;text-transform:none;direction:ltr;color:#b7b7b7;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Balosh Integrated Services Limited delivers access control, parking, tolling, automated entrances, and security infrastructure for critical spaces across Nigeria.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td class=t125 align=center>
<table class=t124 role=presentation cellpadding=0 cellspacing=0 style="Margin-left:auto;Margin-right:auto;"><tr><td width=500 class=t123 style="width:600px;">
<table class=t122 role=presentation cellpadding=0 cellspacing=0 width=100% style="width:100%;"><tr><td class=t121><p class=t120 style="margin:0;Margin:0;font-family:Afacad,Arial,Helvetica,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">9, Osaro Isokpan Street, Lekki Phase 1, Lagos.</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr>
</table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
    `

    const brevoApiKey = process.env.BREVO_API_KEY
    const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL
    const contactReceipientEmail = process.env.CONTACT_RECIPIENT_EMAIL

    if (!brevoApiKey) {
      console.error('BREVO_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          email: brevoSenderEmail,
          name: 'Balosh',
        },
        to: [
          {
            email: contactReceipientEmail,
            name: 'Balosh Operations',
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: emailSubject,
        htmlContent,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
