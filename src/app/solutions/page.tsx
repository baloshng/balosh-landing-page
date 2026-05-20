import type { Metadata } from "next"
import Footer from "@/components/Footer"
import InternalHeader from "@/components/InternalHeader"
import BlogHeroSection from "@/components/blog/BlogHeroSection"
import SolutionsHubSection from "@/components/solutions/SolutionsHubSection"
import { solutions, solutionsPageIntro } from "@/data/solutions"
import { DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Solutions",
  description: solutionsPageIntro.description,
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Balosh Solutions",
    description: solutionsPageIntro.description,
    url: "/solutions",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Balosh Solutions",
    description: solutionsPageIntro.description,
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function SolutionsPage() {
  return (
    <>
      <InternalHeader />
      <main className="inner-page-flow solutions-page-flow">
        <BlogHeroSection title="Solutions" breadcrumbLabel="Solutions" />
        <SolutionsHubSection solutions={solutions} />
      </main>
      <Footer />
    </>
  )
}
