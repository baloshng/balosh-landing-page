import Image from "next/image"
import type { SolutionItem } from "@/data/solutions"

type SolutionDetailContentSectionProps = {
  solution: SolutionItem
}

export default function SolutionDetailContentSection({
  solution,
}: SolutionDetailContentSectionProps) {
  return (
    <div className="service-single-inner-area sp8">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-right-single-area">
              <div className="img1">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="space24" />
              <div className="heading6 solution-detail-heading">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  {solution.eyebrow}
                </h5>
                <h2>{solution.title}</h2>
                <div className="space16" />
                {solution.description.map((paragraph) => (
                  <div key={paragraph}>
                    <p>{paragraph}</p>
                    <div className="space16" />
                  </div>
                ))}
              </div>
              <div className="lista-area" style={{ padding: 0, border: "none" }}>
                <ul>
                  {solution.features.map((feature) => (
                    <li key={feature}>
                      <Image
                        src="/assets/img/icons/check3.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="mr-2 inline-block align-middle"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space24" />
              <div className="heading6 solution-equipment-heading">
                <h5>
                  <Image
                    src="/assets/img/icons/finger2.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="inline-block align-middle"
                  />
                  Relevant Equipment
                </h5>
                <h3>Equipment in this Category</h3>
              </div>
              <div className="space16" />
              <div className="about-page-pillars">
                {solution.equipment.map((item, index) => (
                  <article className="about-page-pillar-card" key={item}>
                    <span className="solution-equipment-card-icon">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item}</h3>
                  </article>
                ))}
              </div>
              <div className="space24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
