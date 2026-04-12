import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import ProjectDetailContentSection from "@/components/projects/ProjectDetailContentSection";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsRelatedSection from "@/components/projects/ProjectsRelatedSection";
import { getProjectBySlug, projects } from "@/data/projects";
import { slugToTitle } from "@/lib/seo";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: slugToTitle(slug),
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.title,
    description: project.excerpt,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.excerpt,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [project.image],
    },
    twitter: {
      title: project.title,
      description: project.excerpt,
      images: [project.image],
    },
  };
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
      <InternalHeader />
      <ProjectsHeroSection title={project.title} breadcrumbLabel={project.title} titleColumnClassName="col-lg-7" />
      <ProjectDetailContentSection project={project} />
      <ProjectsRelatedSection projects={relatedProjects} />
      <Footer />
    </>
  );
}
