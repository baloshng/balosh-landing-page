import Image from "next/image"

export default function HomeFaqSection() {
  return (
    <div className="faq-section-area sp1" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="faq-header-area text-center heading6">
              <h5 data-aos="fade-up" data-aos-duration={800} data-aos-delay={600} data-aos-offset={40}>
                <Image src="/assets/img/icons/finger2.svg" alt="" width={20} height={20} className="mr-2 inline-block align-middle" unoptimized />
                FAQ’s
              </h5>
              <h2 className="text-anime-style-3">Your Guide to Security &amp; CCTV</h2>
              <p data-aos="fade-up" data-aos-duration={1000} data-aos-delay={600} data-aos-offset={40}>Have questions about our security and CCTV services? Explore our FAQ section below to find answers to commonly asked questions.</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-author-area">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                      What are the benefits of installing CCTV cameras?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">From understanding how CCTV surveillance works to choosing the <br className="d-lg-block d-none" /> right security solution for your needs, we&apos;ve compiled</div>
                  </div>
                </div>
                <div className="space20" />
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      How many CCTV cameras do I need for my property?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">From understanding how CCTV surveillance works to choosing the <br className="d-lg-block d-none" /> right security solution for your needs, we&apos;ve compiled</div>
                  </div>
                </div>
                <div className="space20" />
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Can CCTV cameras be used indoors and outdoors?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">From understanding how CCTV surveillance works to choosing the <br className="d-lg-block d-none" /> right security solution for your needs, we&apos;ve compiled</div>
                  </div>
                </div>
                <div className="space20" />
                <div className="accordion-item" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={600} data-aos-offset={40}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      How do I choose the right CCTV system for my needs?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">From understanding how CCTV surveillance works to choosing the <br className="d-lg-block d-none" /> right security solution for your needs, we&apos;ve compiled</div>
                  </div>
                </div>
                <div className="space20" />
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      Are there any legal requirements for CCTV signage?
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">From understanding how CCTV surveillance works to choosing the <br className="d-lg-block d-none" /> right security solution for your needs, we&apos;ve compiled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-images-area">
              <div className="row">
                <div className="col-lg-8">
                  <div className="img1 reveal">
                    <Image src="/assets/img/all-images/faq-img1.png" alt="" width={800} height={900} className="h-auto w-full" unoptimized />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faq-progress-area">
                    <div className="progresbar">
                      <div className="progressbar">
                        <div className="circle" data-percent={90}>
                          <canvas />
                          <div>90%</div>
                        </div>
                      </div>
                      <p>Cameras Installed</p>
                    </div>
                    <div className="space24" />
                    <div className="progresbar">
                      <div className="progressbar">
                        <div className="circle" data-percent={90}>
                          <canvas />
                          <div>90%</div>
                        </div>
                      </div>
                      <p>Qualified Safe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
