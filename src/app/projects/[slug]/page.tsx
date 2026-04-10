import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectDetailContentSection from "@/components/projects/ProjectDetailContentSection";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsRelatedSection from "@/components/projects/ProjectsRelatedSection";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Header />
      <ProjectsHeroSection title={project.title} breadcrumbLabel={project.title} titleColumnClassName="col-lg-7" />
      <ProjectDetailContentSection project={project} />
      <ProjectsRelatedSection projects={relatedProjects} />
      <Footer />
    </>
  );
}
