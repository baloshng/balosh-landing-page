import Image from "next/image"
import { ProjectItem } from "@/data/projects"
import { projectCoverImageUrl } from "@/lib/projectCoverImage"

type ProjectDetailContentSectionProps = {
  project: ProjectItem
}

export default function ProjectDetailContentSection({
  project,
}: ProjectDetailContentSectionProps) {
  const heroSrc = projectCoverImageUrl(project.slug)
  return (
    <div className="service-single-inner-area sp8">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-right-single-area">
              <div className="img1">
                <Image
                  src={heroSrc}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="space24" />
              <h2>{project.title}</h2>
              <div className="space16" />
              <p>
                <strong>Client:</strong> {project.client}
              </p>
              <div className="space16" />
              <h3>Products Used</h3>
              <div
                className="lista-area"
                style={{ padding: 0, border: "none" }}
              >
                <div className="space16" />
                <ul>
                  {project.products.map((product) => (
                    <li key={product}>
                      <Image
                        src="/assets/img/icons/check3.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="mr-2 inline-block align-middle"
                      />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space24" />
              <h3>Project Description</h3>
              <div className="space16" />
              {project.caseStudy
                ? project.caseStudy.map((section) => (
                    <div key={section.heading}>
                      <h4>{section.heading}</h4>
                      <div className="space16" />
                      {section.paragraphs.map((paragraph) => (
                        <div key={paragraph}>
                          <p>{paragraph}</p>
                          <div className="space16" />
                        </div>
                      ))}
                      {section.bullets ? (
                        <>
                          <div
                            className="lista-area"
                            style={{ padding: 0, border: "none" }}
                          >
                            <ul>
                              {section.bullets.map((bullet) => (
                                <li key={bullet}>
                                  <Image
                                    src="/assets/img/icons/check3.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    className="mr-2 inline-block align-middle"
                                  />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space16" />
                        </>
                      ) : null}
                    </div>
                  ))
                : project.description.map((paragraph, index) => (
                    <div key={`${project.slug}-${index}`}>
                      <p>{paragraph}</p>
                      <div className="space16" />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
