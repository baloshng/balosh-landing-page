import type { Metadata } from "next"
import Footer from "@/components/Footer"
import InternalHeader from "@/components/InternalHeader"
import AboutExtendedSections from "@/components/about/AboutExtendedSections"
import BlogHeroSection from "@/components/blog/BlogHeroSection"
import HomeAboutSection from "@/components/home/HomeAboutSection"
import { DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Balosh Integrated Services, including our company story, mission, values, team, milestones, and leadership direction.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Balosh",
    description:
      "Learn about Balosh Integrated Services, including our company story, mission, values, team, milestones, and leadership direction.",
    url: "/about",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "About Balosh",
    description:
      "Learn about Balosh Integrated Services, including our company story, mission, values, team, milestones, and leadership direction.",
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function AboutPage() {
  return (
    <>
      <InternalHeader />
      <BlogHeroSection title="About Us" breadcrumbLabel="About Us" />
      <HomeAboutSection />
      <AboutExtendedSections />
      <Footer />
    </>
  )
}
