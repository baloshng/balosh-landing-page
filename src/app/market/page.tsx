import type { Metadata } from "next"
import Footer from "@/components/Footer"
import InternalHeader from "@/components/InternalHeader"
import BlogHeroSection from "@/components/blog/BlogHeroSection"
import MarketContentSection from "@/components/market/MarketContentSection"
import { marketPageIntro } from "@/data/markets"
import { DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Our Market",
  description: marketPageIntro.description.join(" "),
  alternates: {
    canonical: "/market",
  },
  openGraph: {
    title: marketPageIntro.title,
    description: marketPageIntro.description.join(" "),
    url: "/market",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: marketPageIntro.title,
    description: marketPageIntro.description.join(" "),
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function MarketPage() {
  return (
    <>
      <InternalHeader />
      <main className="inner-page-flow market-page-flow">
        <BlogHeroSection title="Our Market" breadcrumbLabel="Our Market" />
        <MarketContentSection />
      </main>
      <Footer />
    </>
  )
}
