import Image from "next/image"
import Link from "next/link"
import { ProjectItem } from "@/data/projects"

type HomeProjectsSectionProps = {
  projects: ProjectItem[]
}

export default function HomeProjectsSection({ projects }: HomeProjectsSectionProps) {
  return (
    <div className="testimonial3-section-area sp1" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="testimonial-header heading5">
              <h5 data-aos="fade-left" data-aos-duration={800} data-aos-delay={600} data-aos-offset={40}>
                <Image src="/assets/img/icons/finger1.svg" alt="" width={20} height={20} className="inline-block align-middle" unoptimized />
                Our Projects
              </h5>
              <h2 className="text-anime-style-3">Access &amp; Mobility Project Portfolio</h2>
              <p data-aos="fade-left" data-aos-duration={800} data-aos-delay={600} data-aos-offset={40}>
                Explore selected Balosh projects across events, healthcare, residential estates, ports, hospitality, and education environments.
              </p>
              <div className="btn-area" data-aos="fade-left" data-aos-duration={900} data-aos-delay={600} data-aos-offset={40}>
                <Link href="/projects" className="header-btn4">
                  View All <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={600} data-aos-offset={40}>
            <div className="testimonial-author-slider owl-carousel">
              {projects.map((project) => (
                <div className="testimonial-author-box" key={project.slug}>
                  <div className="images">
                    <div className="content">
                      <Image src={project.image} alt={project.title} width={400} height={300} className="h-auto max-w-full" unoptimized />
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                      <p>{project.client}</p>
                    </div>
                    <div className="img1">
                      <Image src="/assets/img/icons/quito-icons2.svg" alt="" width={48} height={48} unoptimized />
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
