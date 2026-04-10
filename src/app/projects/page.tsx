import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsListSection from "@/components/projects/ProjectsListSection";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsHeroSection title="Our Projects" breadcrumbLabel="Our Projects" />
      <ProjectsListSection projects={projects} />
      <Footer />
    </>
  );
}
