import Image from "next/image"
import Link from "next/link"
import { solutions, solutionsPageIntro } from "@/data/solutions"

export default function HomeServicesSection() {
  return (
    <div className="service3-section-area sp1" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-header heading6">
              <h5
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={100}
              >
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Our Solutions
              </h5>
              <h2 className="text-anime-style-3">
                {solutionsPageIntro.title}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                {solutionsPageIntro.description}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
            data-aos-delay={100}
          >
            <div className="service-carousel-area owl-carousel">
              {solutions.map((card) => (
                <div className="service-boxarea" key={card.title}>
                  <div className="img1">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="content-area">
                    <div className="icons">
                      <Image src={card.icon} alt="" width={48} height={48} />
                    </div>
                    <div className="content-area-pera">
                      <Link href={`/solutions/${card.slug}`}>{card.title}</Link>
                      <p>{card.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
