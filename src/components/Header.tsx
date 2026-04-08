export default function Header() {
  const html = `<!--=====HEADER START=======-->
   <header>
    <div class="header-area homepage3 single-page3 header header-sticky d-none d-lg-block " id="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav id="navbar-example2" class="navbar">
            <div class="header-elements">
              <div class="site-logo">
                <a href="#home"><img src="/assets/img/logo/logo3.png" alt=""></a>
              </div>
              <div class="main-menu">
                <ul>
                    <li class="nav-item"><a href="#about" class="nav-link active"><span>About</span></a></li>
                    <li class="nav-item"><a href="#service" class="nav-link"><span>Services</span></a></li>
                    <li class="nav-item"><a href="#pricing" class="nav-link"><span>Pricing</span></a></li>
                    <li class="nav-item"><a href="#project" class="nav-link"><span>Projects</span></a></li>
                    <li class="nav-item"><a href="#faq" class="nav-link"><span>FAQ</span></a></li>
                    <li class="nav-item"><a href="#blog" class="nav-link"><span>Blogs</span></a></li>
                </ul>
              </div>
              <div class="btn-area">
                <a href="#contact" class="header-btn4">Contact Us<span><i class="fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
        </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--=====HEADER END =======-->

  <!--===== MOBILE HEADER STARTS =======-->
 <div class="mobile-header mobile-haeder3 d-block d-lg-none">
  <div class="container-fluid">
    <div class="col-12">
      <div class="mobile-header-elements">
        <div class="mobile-logo">
          <a href="#home"><img src="/assets/img/logo/logo3.png" alt=""></a>
        </div>
        <div class="mobile-nav-icon dots-menu">
          <i class="fa-solid fa-bars-staggered"></i>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mobile-sidebar mobile-sidebar3">
  <div class="logosicon-area">
    <div class="logos">
      <img src="/assets/img/logo/logo3.png" alt="">
    </div>
    <div class="menu-close">
      <i class="fa-solid fa-xmark"></i>
    </div>
   </div>
  <div class="mobile-nav mobile-nav1">
    <ul class="mobile-nav-list nav-list1">
      <li><a href="#" >Home </a>
        <ul class="sub-menu">
          <li><a href="#home">Home One</a></li>
          <li><a href="#home">Home Two</a></li>
          <li><a href="#home">Home Three</a></li>
          <li><a href="#home">Home Four</a></li>
        </ul>
      </li>
      <li class="nav-item"><a href="#about" class="nav-link active"><span>About</span></a></li>
      <li class="nav-item"><a href="#service" class="nav-link"><span>Services</span></a></li>
      <li class="nav-item"><a href="#pricing" class="nav-link"><span>Pricing</span></a></li>
      <li class="nav-item"><a href="#project" class="nav-link"><span>Projects</span></a></li>
      <li class="nav-item"><a href="#faq" class="nav-link"><span>FAQ</span></a></li>
      <li class="nav-item"><a href="#blog" class="nav-link"><span>Blogs</span></a></li>
    </ul>

    <div class="allmobilesection">
      <a href="#contact"  class="header-btn4">Get Started <span><i class="fa-solid fa-arrow-right"></i></span></a>
      <div class="single-footer">
        <h3>Contact Info</h3>
        <div class="footer1-contact-info">
          <div class="contact-info-single">
            <div class="contact-info-icon">
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <div class="contact-info-text">
              <a href="tel:+3(924)4596512">+3(924)4596512</a>
            </div>
          </div>

          <div class="contact-info-single">
            <div class="contact-info-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="contact-info-text">
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
          </div>

          <div class="single-footer">
            <h3>Our Location</h3>

            <div class="contact-info-single">
              <div class="contact-info-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="contact-info-text">
                <a href="mailto:info@example.com" >55 East Birchwood Ave.Brooklyn, <br> New York 11201,United States</a>
              </div>
            </div>

          </div>
          <div class="single-footer">
            <h3>Social Links</h3>

            <div class="social-links-mobile-menu">
              <ul>
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</div>
<!--===== MOBILE HEADER STARTS =======-->`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
