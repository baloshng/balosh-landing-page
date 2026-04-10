export default function HomePricingSection() {
  return (
    <div className="pricing-section-area sp2" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="pricing-header text-center heading6">
              <h5 data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}><img src="/assets/img/icons/finger2.svg" alt="" />Pricing Plan</h5>
              <h2 className="text-anime-style-3">Clear Pricing for Peace of Mind</h2>
              <p data-aos="fade-left" data-aos-duration={1000} data-aos-delay={500}>Whether you&apos;re looking to secure your home, office, or commercial <br className="d-lg-block d-none" /> property, we offer a range of packages designed to meet</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={800} data-aos-delay={600} data-aos-offset={40}>
            <div className="pricing-boxarea">
              <h3>Starter Pack</h3>
              <p>Explore our pricing options below &amp; choose the plan that best fits your requirements</p>
              <h2>$129.00 <span>/month</span></h2>
              <div className="btn-area">
                <a href="#pricing" className="header-btn4">Choose Plan <i className="fa-solid fa-arrow-right" /></a>
              </div>
              <div className="list-area">
                <ul>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />4/7 system monitoring</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Security management&nbsp;</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Patch management&nbsp;</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Remote support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space30 d-md-none d-block" />
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={600} data-aos-offset={50}>
            <div className="pricing-boxarea">
              <h3>Regular Pack</h3>
              <p>From basic surveillance systems advanced monitoring solutions, each plan is crafted</p>
              <h2>$189.00 <span>/month</span></h2>
              <div className="btn-area">
                <a href="#pricing" className="header-btn4">Choose Plan <i className="fa-solid fa-arrow-right" /></a>
              </div>
              <div className="list-area">
                <ul>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Preventive maintenance</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Asset management&nbsp;&nbsp;</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />&nbsp;Secure cloud backup</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Server/Network support&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space30 d-md-none d-block" />
          <div className="space30 d-lg-none d-md-block d-none" />
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={800} data-aos-offset={60}>
            <div className="pricing-boxarea">
              <h3>Advancer Pack</h3>
              <p>We believe in providing transparent and affordable pricing plans for our security</p>
              <h2>$299.00 <span>/month</span></h2>
              <div className="btn-area">
                <a href="#pricing" className="header-btn4">Choose Plan <i className="fa-solid fa-arrow-right" /></a>
              </div>
              <div className="list-area">
                <ul>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />&nbsp;Reporting&nbsp;</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Vendor management&nbsp;</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Virtual CIO (VCIO)</li>
                  <li><img src="/assets/img/icons/check1.svg" alt="" />Workstation support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space30 d-md-none d-block" />
        </div>
      </div>
    </div>
  );
}
