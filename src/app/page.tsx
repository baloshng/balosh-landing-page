import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import HomeCtaSection from "@/components/home/HomeCtaSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomePreloaderProgress from "@/components/home/HomePreloaderProgress";
import HomePricingSection from "@/components/home/HomePricingSection";
import HomeProjectsSection from "@/components/home/HomeProjectsSection";
import HomeServicesSection from "@/components/home/HomeServicesSection";
import { blogPosts } from "@/data/blogPosts";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div>
        <HomePreloaderProgress />
        <HomeHeroSection />

        <div>
          <HomeAboutSection />
          <HomeServicesSection />
          <HomePricingSection />
          <HomeProjectsSection projects={projects} />
          <HomeContactSection />
          <HomeFaqSection />
          <HomeBlogSection posts={blogPosts} />
          <HomeCtaSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
