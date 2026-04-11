export default function HomeHeroSection() {
  return (
    <div id="home" className="carousel-area owl-carousel">
      {[1, 2, 3].map((item) => (
        <div className="hero3-section-area" key={item}>
          <img src="/assets/img/logo/banner1.jpg" alt="" className="header-img4" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-main-content heading5">
                  <h5><img src="/assets/img/icons/finger1.svg" alt="" />Balosh Integrated Services</h5>
                  <h1 className="text-anime-style-3">Access Control, Parking &amp; Traffic Management Solutions</h1>
                  <p>We deploy secure access control systems, automated entrances, car park infrastructure, and event entry solutions for corporate, residential, institutional, and high-traffic environments.</p>
                  <div className="btn-area">
                    <a href="#contact" className="header-btn4">Request a Quote <i className="fa-solid fa-arrow-right" /></a>
                    <a href="#project" className="header-btn1">View Projects <i className="fa-solid fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/img/elements/elements23.png" alt="" className="elements23" />
          <img src="/assets/img/elements/elements24.png" alt="" className="elements24" />
        </div>
      ))}
    </div>
  );
}
