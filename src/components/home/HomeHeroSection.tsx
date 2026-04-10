export default function HomeHeroSection() {
  return (
    <div id="home" className="carousel-area owl-carousel">
      {[1, 2, 3].map((item) => (
        <div className="hero3-section-area" key={item}>
          <img src="/assets/img/all-images/header-img4.png" alt="" className="header-img4" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-main-content heading5">
                  <h5><img src="/assets/img/icons/finger1.svg" alt="" />Top #1 Security Expert In The World </h5>
                  <h1 className="text-anime-style-3">Stay Safe, Stay Secure Expert CCTV Services</h1>
                  <p>Whether it&apos;s deterring intruders, monitoring activity, or providing evidence <br className="d-lg-block d-none" /> in the event of an incident, our tailored security systems are designed</p>
                  <div className="btn-area">
                    <a href="#contact" className="header-btn4">Get a Free Quote <i className="fa-solid fa-arrow-right" /></a>
                    <a href="#contact" className="header-btn1">Get a Free Quote <i className="fa-solid fa-arrow-right" /></a>
                  </div>
                  <div className="header-bottom-images">
                    <div className="img1">
                      <img src="/assets/img/all-images/bottom-img1.png" alt="" />
                    </div>
                    <div className="text">
                      <p><span>4K</span>Happy Client</p>
                      <ul>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                    </div>
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
