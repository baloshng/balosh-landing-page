import { projectDetailPlaceholderImage } from "@/lib/projectDetailPlaceholderImage";
import { ProjectItem } from "@/data/projects";

type ProjectDetailContentSectionProps = {
  project: ProjectItem;
};

export default function ProjectDetailContentSection({ project }: ProjectDetailContentSectionProps) {
  return (
    <div className="service-single-inner-area sp8">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-right-single-area">
              <div className="img1">
                <img src={projectDetailPlaceholderImage(project.slug)} alt={project.title} />
              </div>
              <div className="space24" />
              <h2>{project.title}</h2>
              <div className="space16" />
              <p><strong>Client:</strong> {project.client}</p>
              <div className="space16" />
              <h3>Products Used</h3>
              <div className="lista-area" style={{ padding: 0, border: "none" }}>
                <div className="space16" />
                <ul>
                  {project.products.map((product) => (
                    <li key={product}><img src="/assets/img/icons/check3.svg" alt="" />{product}</li>
                  ))}
                </ul>
              </div>
              <div className="space24" />
              <h3>Project Description</h3>
              <div className="space16" />
              {project.description.map((paragraph, index) => (
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
  );
}
