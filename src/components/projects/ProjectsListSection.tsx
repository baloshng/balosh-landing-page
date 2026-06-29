import Image from "next/image"
import Link from "next/link"
import { ProjectItem } from "@/data/projects"
import { projectCoverImageUrl } from "@/lib/projectCoverImage"
import ProjectVideoEmbed from "./ProjectVideoEmbed"

type ProjectsListSectionProps = {
  projects: ProjectItem[]
}

export default function ProjectsListSection({ projects }: ProjectsListSectionProps) {
  return (
    <div className="project-main-inner-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading6 text-center">
              <h5 data-aos="fade-up" data-aos-duration="800">
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Our Projects
              </h5>
              <h2 data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
                Access &amp; Mobility Project Portfolio
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="180">
                Explore selected Balosh projects across airports, retail,
                hospitality, residential estates, healthcare, ports, events, and
                education environments. Each one a testament to what the right
                partner, the right technology, and the right commitment can
                deliver.
              </p>
            </div>
            <div className="space44 d-lg-block d-none" />
            <div className="space24 d-lg-none d-block" />
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="project-boxarea-inner">
                <div
                  className={
                    project.detailEmbed?.type === "youtube"
                      ? "img1 project-list-video-media"
                      : "img1"
                  }
                >
                  {project.detailEmbed?.type === "youtube" ? (
                    <ProjectVideoEmbed
                      permalink={project.detailEmbed.permalink}
                      provider={project.detailEmbed.type}
                      title={`${project.title} video cover`}
                      variant="cover"
                    />
                  ) : (
                    <Image
                      src={projectCoverImageUrl(project.slug)}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  )}
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
