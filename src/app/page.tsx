import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      <Header />
      <div>
        <HomePreloaderProgress />
        <HomeHeroSection />

        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-body-tertiary rounded-2"
          tabIndex={0}
        >
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
