import type { Metadata } from "next"
import Footer from "@/components/Footer"
import InternalHeader from "@/components/InternalHeader"
import CourseFormHeroSection from "@/components/contact-form/CourseFormHeroSection"
import { DEFAULT_OG_IMAGE } from "@/lib/seo"
import { ProjectEvaluationForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Project Enquiry",
  description: "Submit your Balosh project enquiry and consultation request.",
  alternates: {
    canonical: "/contact-form",
  },
  openGraph: {
    title: "Balosh Project Enquiry",
    description: "Submit your Balosh project enquiry and consultation request.",
    url: "/contact-form",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Balosh Project Enquiry",
    description: "Submit your Balosh project enquiry and consultation request.",
    images: [DEFAULT_OG_IMAGE],
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
