import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsListSection from "@/components/projects/ProjectsListSection";
import { projects } from "@/data/projects";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Balosh projects delivered across airports, estates, ports, healthcare, and enterprise facilities.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Balosh Projects",
    description: "Explore Balosh projects delivered across airports, estates, ports, healthcare, and enterprise facilities.",
    url: "/projects",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Balosh Projects",
    description: "Explore Balosh projects delivered across airports, estates, ports, healthcare, and enterprise facilities.",
    images: [DEFAULT_OG_IMAGE],
  },
};

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
