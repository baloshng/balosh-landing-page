export default function HomeContactSection() {
  return (
    <div className="contact2-section-area sp1" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-header heading6">
              <h5 data-aos="fade-left" data-aos-duration={800} data-aos-delay={600} data-aos-offset={40}><img src="/assets/img/icons/finger2.svg" alt="" />Contact Us</h5>
              <h2 className="text-anime-style-3">Reach Out for Reliable Security Solutions We&apos;re Here to Help</h2>
              <p data-aos="fade-left" data-aos-duration={1000} data-aos-delay={700} data-aos-offset={40}>Ready to take the next step in securing your property? Our team is here to assist you every step of the way. Whether you have questions about </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={800} data-aos-delay={600} data-aos-offset={40}>
                  <div className="contact-boxarea">
                    <div className="all-content">
                      <div className="img1">
                        <img src="/assets/img/icons/call-icons3.svg" alt="" />
                      </div>
                      <div className="content">
                        <p>Phone</p>
                        <a href="tel:+2348022596060">0802 259 6060</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={900} data-aos-delay={600} data-aos-offset={40}>
                  <div className="contact-boxarea">
                    <div className="all-content">
                      <div className="img1">
                        <img src="/assets/img/icons/email-icons3.svg" alt="" />
                      </div>
                      <div className="content">
                        <p>Email</p>
                        <a href="mailto:info@balosh.com">info@balosh.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={600} data-aos-offset={40}>
                  <div className="contact-boxarea">
                    <div className="all-content">
                      <div className="img1">
                        <img src="/assets/img/icons/location-icons2.svg" alt="" />
                      </div>
                      <div className="content">
                        <p>Address</p>
                        <a href="#">9, Osaro Isokpan Street, Lekki Phase 1, Lagos.</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration={1100} data-aos-delay={600} data-aos-offset={40}>
                  <div className="contact-boxarea">
                    <div className="all-content">
                      <div className="img1">
                        <img src="/assets/img/icons/linkedin-icons1.svg" alt="" />
                      </div>
                      <div className="content">
                        <p>Instagram</p>
                        <a href="https://www.instagram.com/baloshng/" target="_blank" rel="noreferrer">@baloshng</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1200} data-aos-delay={600} data-aos-offset={40}>
            <div className="contact-form-area">
              <h3>Request A Quote</h3>
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" defaultValue="0cd32fff-eda2-4da3-be43-37d47fbb396b" />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <p>Name (required)</p>
                      <input type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <p>Number (required)</p>
                      <input type="number" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Email (required)</p>
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <p>Additional Details  (Optional)</p>
                      <textarea placeholder="Message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area text-start">
                      <button type="submit" className="header-btn3">Submit Now <i className="fa-solid fa-arrow-right" /></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
