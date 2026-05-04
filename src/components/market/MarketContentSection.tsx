import Image from "next/image"
import { marketPageIntro, markets } from "@/data/markets"

export default function MarketContentSection() {
  return (
    <section className="pricing-section-area market-page-section sp2" id="market">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="pricing-header text-center heading6">
              <h5>
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 inline-block align-middle"
                />
                {marketPageIntro.eyebrow}
              </h5>
              <h2>{marketPageIntro.title}</h2>
              {marketPageIntro.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {markets.map((market, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800 + index * 100}
              data-aos-delay={200}
              key={market.title}
            >
              <article className="pricing-boxarea market-card market-page-card">
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
                <span className="market-card-kicker">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{market.title}</h3>
                <p>{market.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
