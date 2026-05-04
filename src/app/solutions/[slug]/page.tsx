import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Footer from "@/components/Footer"
import InternalHeader from "@/components/InternalHeader"
import BlogHeroSection from "@/components/blog/BlogHeroSection"
import SolutionDetailContentSection from "@/components/solutions/SolutionDetailContentSection"
import { getSolutionBySlug, solutions } from "@/data/solutions"
import { slugToTitle } from "@/lib/seo"

type SolutionDetailProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }))
}

export async function generateMetadata({
  params,
}: SolutionDetailProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return {
      title: slugToTitle(slug),
      robots: { index: false, follow: false },
    }
  }

  return {
    title: solution.title,
    description: solution.excerpt,
    alternates: {
      canonical: `/solutions/${solution.slug}`,
    },
    openGraph: {
      title: solution.title,
      description: solution.excerpt,
      url: `/solutions/${solution.slug}`,
      images: [solution.image],
    },
    twitter: {
      title: solution.title,
      description: solution.excerpt,
      images: [solution.image],
    },
  }
}

export default async function SolutionDetailPage({
  params,
}: SolutionDetailProps) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    notFound()
  }

  return (
    <>
      <InternalHeader />
      <BlogHeroSection
        title={solution.title}
        breadcrumbLabel={solution.title}
        titleColumnClassName="col-lg-6"
      />
      <SolutionDetailContentSection solution={solution} />
      <Footer />
    </>
  )
}
