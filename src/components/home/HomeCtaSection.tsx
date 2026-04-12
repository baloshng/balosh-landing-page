import Image from "next/image"
import CtaNewsletterImage from "@/components/home/CtaNewsletterImage"

export default function HomeCtaSection() {
  return (
    <div className="cta3-section-area">
      <Image
        src="/assets/img/elements/elements23.png"
        alt=""
        width={206}
        height={107}
        className="elements23"
      />
      <Image
        src="/assets/img/elements/elements24.png"
        alt=""
        width={228}
        height={166}
        className="elements24"
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
                      <CtaNewsletterImage />
                    </div>
                    <div className="img2">
                      <Image
                        src="/assets/img/bg/cta-bg1.png"
                        alt=""
                        width={800}
                        height={600}
                        className="h-auto max-w-full"
                      />
                    </div>
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
