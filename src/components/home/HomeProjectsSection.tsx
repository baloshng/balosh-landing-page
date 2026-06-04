import Image from "next/image"
import Link from "next/link"
import { ProjectItem } from "@/data/projects"
import { projectCoverImageUrl } from "@/lib/projectCoverImage"

type HomeProjectsSectionProps = {
  projects: ProjectItem[]
}

export default function HomeProjectsSection({
  projects,
}: HomeProjectsSectionProps) {
  return (
    <div className="testimonial3-section-area home-projects-section sp1" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="testimonial-header heading5">
              <h5
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={400}
                data-aos-offset={40}
              >
                <Image
                  src="/assets/img/icons/finger1.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Our Projects
              </h5>
              <h2 className="text-anime-style-3">
                Access &amp; Mobility Project Portfolio
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={400}
                data-aos-offset={40}
              >
                Explore selected Balosh projects across airports, retail, hospitality, residential estates, healthcare, ports, 
                events, and education environments. Each one a testament to what the right partner, the right 
                technology, and the right commitment can deliver.
              </p>
              <div
                className="btn-area mt-3"
                data-aos="fade-left"
                data-aos-duration={900}
                data-aos-delay={400}
                data-aos-offset={40}
              >
                <Link href="/projects" className="header-btn4">
                  View All <i className="fa-solid fa-arrow-right " />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={400}
            data-aos-offset={40}
          >
            <div className="testimonial-author-slider owl-carousel">
              {projects.map((project) => (
                <div className="testimonial-author-box home-project-card" key={project.slug}>
                  <div className="images">
                    <div className="content">
                      <div className="home-project-media">
                        <Image
                          src={projectCoverImageUrl(project.slug)}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="home-project-media-image"
                          sizes="(max-width: 768px) 80vw, 320px"
                        />
                      </div>
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                      <p>{project.client}</p>
                    </div>
                    <div className="img1">
                      <Image
                        src="/assets/img/icons/quito-icons2.svg"
                        alt=""
                        width={48}
                        height={48}
                        style={{ width: "48px", height: "48px" }}
                      />
                    </div>
                  </div>
                  <div className="space16" />
                  <p>{project.excerpt}</p>
                  <div className="space16" />
                  <Link href={`/projects/${project.slug}`} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
