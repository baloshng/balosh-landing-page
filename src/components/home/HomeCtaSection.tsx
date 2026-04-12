import Image from "next/image"
export default function HomeCtaSection() {
  return (
    <div className="cta3-section-area">
      <Image
        src="/assets/img/elements/elements23.png"
        alt=""
        width={206}
        height={107}
        className="elements23"
        unoptimized
      />
      <Image
        src="/assets/img/elements/elements24.png"
        alt=""
        width={228}
        height={166}
        className="elements24"
        unoptimized
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-author-area">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="heading2">
                    <h2 className="text-anime-style-3">
                      Empower Your Security Request Information
                    </h2>
                    <div className="space16" />
                    <form>
                      <input type="text" placeholder="Email Address.." />
                      <button type="button">
                        Subscribe Now <i className="fa-solid fa-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="cta-images">
                    <div className="img1 reveal">
                      <Image
                        src="/assets/img/all-images/cta-img1.png"
                        alt=""
                        width={600}
                        height={500}
                        className="h-auto max-w-full"
                        unoptimized
                      />
                    </div>
                    <div className="img2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
