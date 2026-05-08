import Image from "next/image"
import Link from "next/link"
import { solutionsPageIntro } from "@/data/solutions"
import type { SolutionItem } from "@/data/solutions"

type SolutionsHubSectionProps = {
  solutions: SolutionItem[]
}

export default function SolutionsHubSection({
  solutions,
}: SolutionsHubSectionProps) {
  return (
    <div className="service3-section-area solutions-hub-section sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header heading6 text-center">
              <h5>
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Our Solutions
              </h5>
              <h2>{solutionsPageIntro.title}</h2>
              <p>{solutionsPageIntro.description}</p>
            </div>
            <div className="space44 d-lg-block d-none" />
            <div className="space24 d-lg-none d-block" />
          </div>
        </div>
        <div className="row service-carousel-area solutions-carousel gy-4">
          {solutions.map((solution) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={solution.id}>
              <div className="service-boxarea">
                <div className="img1">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={false}
                  />
                </div>
                <div className="content-area">
                  <div className="icons">
                    <Image src={solution.icon} alt="" width={48} height={48} />
                  </div>
                  <div className="content-area-pera">
                    <Link href={`/solutions/${solution.slug}`}>
                      {solution.title}
                    </Link>
                    <p>{solution.excerpt}</p>
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
