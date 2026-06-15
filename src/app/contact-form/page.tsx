import type { Metadata } from "next"
import Footer from "@/components/Footer"
import InternalHeader from "@/components/InternalHeader"
import CourseFormHeroSection from "@/components/contact-form/CourseFormHeroSection"
import { absoluteUrl, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo"
import { ProjectEvaluationForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Project Enquiry",
  description: "Submit your Balosh project enquiry and consultation request.",
  alternates: {
    canonical: "/contact-form",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/contact-form",
    siteName: SITE_NAME,
    title: "Balosh Project Enquiry",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "Balosh Integrated Services project enquiry preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balosh Project Enquiry",
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
}

export default function ContactFormPage() {
  return (
    <>
      <InternalHeader />
      <main className="inner-page-flow blog-page-flow">
        <CourseFormHeroSection
          title="Project Enquiry & Consultation Request"
          breadcrumbLabel="Project Enquiry"
        />
        <ProjectEvaluationForm />
      </main>
      <Footer />
    </>
  )
}
