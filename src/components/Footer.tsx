export default function Footer() {
  const html = `<!--===== FOOTER AREA STARTS =======-->
<div class="footer3-section-area">
  <img src="/assets/img/bg/bg1.png" alt="" class="bg1">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="logo-content">
          <img src="/assets/img/logo/logo4.png" alt="">
          <p>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
          <ul>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
        <div class="space30 d-lg-none d-block"></div>
      </div>
      <div class="col-lg-1 d-lg-block d-none"></div>
      <div class="col-lg-2 col-md-6">
        <div class="footer-list">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Cyber Security Specialist </a></li>
            <li><a href="#"> Institute CCTV Security  </a></li>
            <li><a href="#">Banking Sector Outside</a></li>
            <li><a href="#">Private Sector Security </a></li>
            <li><a href="#">School & Hospital Security </a></li>
          </ul>
        </div>
        <div class="space30 d-lg-none d-block"></div>
      </div>
      <div class="col-lg-1 d-lg-block d-none"></div>
      <div class="col-lg-2 col-md-6">
        <div class="footer-list">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home">Home </a></li>
            <li><a href="#about"> About Us  </a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#project">Testimonial </a></li>
            <li><a href="#contact">Contact US</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="head">
          <h4>Contact Us </h4>
        </div>
        <div class="location-area">
          <div class="img1">
            <a href="#"><i class="fa-solid fa-phone"></i></a>
          </div>
          <div class="text">
            <a href="tel:+880123456789">+880 123 456 789</a>
          </div>
        </div>
        <div class="location-area">
          <div class="img1">
            <a href="#"><i class="fa-regular fa-envelope"></i></a>
          </div>
          <div class="text">
            <a href="mailto:info@mail.com">info@mail.com</a>
          </div>
        </div>
        <div class="location-area">
          <div class="img1">
            <a href="#"><i class="fa-solid fa-location-dot"></i></a>
          </div>
          <div class="text">
            <a href="tel:+880123456789">8502 Preston Rd. <br class="d-lg-block d-none"> Inglewoo Maine 98380</a>
          </div>
        </div>
      </div>
      <div class="space50"></div>
      <div class="col-lg-12 m-auto">
        <div class="copyright text-center">
          <p>© Copyright 2024 -Securix. All Right Reserved</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!--===== FOOTER AREA ENDS =======-->`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
