import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsListSection from "@/components/projects/ProjectsListSection";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <InternalHeader />
      <ProjectsHeroSection title="Our Projects" breadcrumbLabel="Our Projects" />
      <ProjectsListSection projects={projects} />
      <Footer />
    </>
  );
}
