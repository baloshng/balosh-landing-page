import type { Metadata } from "next"
import Footer from "@/components/Footer"
import InternalHeader from "@/components/InternalHeader"
import AboutExtendedSections from "@/components/about/AboutExtendedSections"
import BlogHeroSection from "@/components/blog/BlogHeroSection"
import { DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Balosh Integrated Services, including who we are, what we stand for, our journey, the Balosh Allstars, our difference, and leadership direction.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Balosh",
    description:
      "Learn about Balosh Integrated Services, including who we are, what we stand for, our journey, the Balosh Allstars, our difference, and leadership direction.",
    url: "/about",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "About Balosh",
    description:
      "Learn about Balosh Integrated Services, including who we are, what we stand for, our journey, the Balosh Allstars, our difference, and leadership direction.",
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function AboutPage() {
  return (
    <>
      <InternalHeader />
      <main className="inner-page-flow about-page-flow">
        <BlogHeroSection title="About Us" breadcrumbLabel="About Us" />
        <AboutExtendedSections />
      </main>
      <Footer />
    </>
  )
}
