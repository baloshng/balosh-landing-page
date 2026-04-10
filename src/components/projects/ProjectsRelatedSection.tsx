import Link from "next/link";
import { ProjectItem } from "@/data/projects";

type ProjectsRelatedSectionProps = {
  projects: ProjectItem[];
};

export default function ProjectsRelatedSection({ projects }: ProjectsRelatedSectionProps) {
  return (
    <div className="project-main-inner-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="project-header heading2 text-center">
              <h2>View More Projects</h2>
            </div>
            <div className="space44 d-lg-block d-none" />
            <div className="space14 d-lg-none d-block" />
          </div>
        </div>
        <div className="row">
          {projects.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="project-boxarea-inner">
                <div className="img1">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content-area">
                  <div className="all-content">
                    <div className="icons">
                      <Link href={`/projects/${item.slug}`}><i className="fa-solid fa-arrow-right" /></Link>
                    </div>
                    <Link href={`/projects/${item.slug}`}>{item.title}</Link>
                    <p>{item.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
