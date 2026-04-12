import Image from "next/image"
import Link from "next/link"
import { ProjectItem } from "@/data/projects"
import { projectCoverImageUrl } from "@/lib/projectCoverImage"

type ProjectsListSectionProps = {
  projects: ProjectItem[]
}

export default function ProjectsListSection({ projects }: ProjectsListSectionProps) {
  return (
    <div className="project-main-inner-area sp1">
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="project-boxarea-inner">
                <div className="img1">
                  <Image
                    src={projectCoverImageUrl(project.slug)}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="content-area">
                  <div className="all-content">
                    <div className="icons">
                      <Link href={`/projects/${project.slug}`}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    <p>{project.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
