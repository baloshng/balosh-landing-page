import type { Metadata } from "next";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import HomeCtaSection from "@/components/home/HomeCtaSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import HomeEntryReset from "@/components/home/HomeEntryReset";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomePreloaderProgress from "@/components/home/HomePreloaderProgress";
import HomePricingSection from "@/components/home/HomePricingSection";
import HomeProjectsSection from "@/components/home/HomeProjectsSection";
import HomeServicesSection from "@/components/home/HomeServicesSection";
import HomeStatusBarSection from "@/components/home/HomeStatusBarSection";
import HomeTrustedClientsSection from "@/components/home/HomeTrustedClientsSection";
import WhyBaloshWheelSection from "@/components/WhyBaloshWheelSection";
import { blogPosts } from "@/data/blogPosts";
import { projects } from "@/data/projects";
import { trustedClients } from "@/data/trustedClients";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, DEFAULT_TITLE } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <HomeEntryReset />
      <HomeHeader />
      <main className="home-page-flow">
        <HomePreloaderProgress />
        <HomeHeroSection />

        <div className="home-section-stack">
          <HomeStatusBarSection />
          <HomeAboutSection />
          <WhyBaloshWheelSection />
          <HomeServicesSection />
          <HomePricingSection />
          <HomeProjectsSection projects={projects} />
          <HomeTrustedClientsSection clients={trustedClients} />
          <HomeContactSection />
          <HomeFaqSection />
          <HomeBlogSection posts={blogPosts} />
          <HomeCtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
