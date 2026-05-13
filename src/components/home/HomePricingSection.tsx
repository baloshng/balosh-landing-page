import Image from "next/image"
import Link from "next/link"
import { marketPageIntro, markets } from "@/data/markets"

export default function HomePricingSection() {
  return (
    <div className="pricing-section-area sp2" id="market">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="pricing-header text-center heading6">
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
                  className="mr-2 inline-block align-middle"
                />
                {marketPageIntro.eyebrow}
              </h5>
              <h2 className="text-anime-style-3">{marketPageIntro.title}</h2>
              {marketPageIntro.description.map((paragraph) => (
                <p
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {markets.slice(0, 3).map((market, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800 + index * 100}
              data-aos-delay={400}
              data-aos-offset={40}
              key={market.title}
            >
              <div className="pricing-boxarea market-card">
                <div className="img1">
                  <Image
                    src={market.image}
                    alt={market.title}
                    width={800}
                    height={440}
                    className="rounded-[8px] object-cover"
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="space20" />
                <h3>{market.title}</h3>
                <p>{market.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="btn-area mt-4">
              <Link href="/market" className="header-btn4">
                View More <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
