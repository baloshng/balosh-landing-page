export default function Header() {
  return (
    <div>
      {/*=====HEADER START=======*/}
      <header>
        <div className="header-area homepage3 single-page3 header header-sticky d-none d-lg-block " id="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav id="navbar-example2" className="navbar">
                  <div className="header-elements">
                    <div className="site-logo">
                      <a href="/#home"><img src="/assets/img/logo/balosh.png" alt="" /></a>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li className="nav-item"><a href="/#about" className="nav-link active"><span>About</span></a></li>
                        <li className="nav-item"><a href="/#service" className="nav-link"><span>Services</span></a></li>
                        <li className="nav-item"><a href="/#pricing" className="nav-link"><span>Pricing</span></a></li>
                        <li className="nav-item"><a href="/#project" className="nav-link"><span>Projects</span></a></li>
                        <li className="nav-item"><a href="/#faq" className="nav-link"><span>FAQ</span></a></li>
                        <li className="nav-item"><a href="/#blog" className="nav-link"><span>Blogs</span></a></li>
                      </ul>
                    </div>
                    <div className="btn-area">
                      <a href="/#contact" className="header-btn4">Contact Us<span><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*=====HEADER END =======*/}
      {/*===== MOBILE HEADER STARTS =======*/}
      <div className="mobile-header mobile-haeder3 d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="/#home"><img src="/assets/img/logo/balosh.png" alt="" /></a>
              </div>
              <div className="mobile-nav-icon dots-menu">
                <i className="fa-solid fa-bars-staggered" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-sidebar mobile-sidebar3">
        <div className="logosicon-area">
          <div className="logos">
            <img src="/assets/img/logo/balosh.png" alt="" />
          </div>
          <div className="menu-close">
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li><a href="#">Home </a>
              <ul className="sub-menu">
                <li><a href="/#home">Home One</a></li>
                <li><a href="/#home">Home Two</a></li>
                <li><a href="/#home">Home Three</a></li>
                <li><a href="/#home">Home Four</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="/#about" className="nav-link active"><span>About</span></a></li>
            <li className="nav-item"><a href="/#service" className="nav-link"><span>Services</span></a></li>
            <li className="nav-item"><a href="/#pricing" className="nav-link"><span>Pricing</span></a></li>
            <li className="nav-item"><a href="/#project" className="nav-link"><span>Projects</span></a></li>
            <li className="nav-item"><a href="/#faq" className="nav-link"><span>FAQ</span></a></li>
            <li className="nav-item"><a href="/#blog" className="nav-link"><span>Blogs</span></a></li>
          </ul>
          <div className="allmobilesection">
            <a href="/#contact" className="header-btn4">Get Started <span><i className="fa-solid fa-arrow-right" /></span></a>
            <div className="single-footer">
              <h3>Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:+3(924)4596512">+3(924)4596512</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="contact-info-text">
                      <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br /> New York 11201,United States</a>
                    </div>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== MOBILE HEADER STARTS =======*/}
    </div>
    
    
  );
}
