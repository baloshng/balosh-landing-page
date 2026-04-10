import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const html = `<!--===== PRELOADER STARTS =======-->
<div class="preloader">
  <div class="loading-container">
    <div id="loading-icon">
      <svg id="icon-cctv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.051 60.051">
        <path
           d="M56.963 32.026H55.14a3.091 3.091 0 0 0-3.088 3.088v3.912h-10v-6.219c3.646-1.177 5.957-6.052 5.957-12.781 0-7.235-2.669-12.333-6.8-12.988a1.028 1.028 0 0 0-.157-.012h-40a1 1 0 0 0-.982.816H.069c-.02.107-.472 2.648 1.243 4.714 1.138 1.371 2.92 2.169 5.292 2.395a23.298 23.298 0 0 0-.552 5.075c0 7.29 3.075 13 7 13h21v12.967a3.036 3.036 0 0 0 3.033 3.033h1.935a3.03 3.03 0 0 0 2.84-2h10.193v2.912a3.091 3.091 0 0 0 3.088 3.088h1.823a3.091 3.091 0 0 0 3.088-3.088V35.114a3.093 3.093 0 0 0-3.089-3.088zm-15.996-23c2.397.436 4.788 3.683 5.018 10h-20.52l-3.707-3.707a1 1 0 0 0-.707-.293h-7.404l-.029-.042a7.071 7.071 0 0 0-.34-.495c-.067-.09-.142-.18-.215-.27-.033-.041-.064-.082-.098-.123a7.743 7.743 0 0 0-.123-.141c-.044-.05-.08-.099-.125-.149-.017-.019-.039-.032-.058-.05a11.85 11.85 0 0 0-.593-.596 15.053 15.053 0 0 0-1.191-1.005c-.087-.067-.173-.134-.263-.201-1.513-1.131-3.265-2.134-4.846-2.928h35.201zm-26.916 9.666c0 2.09-.6 3.471-1 4.073-.4-.603-1-1.983-1-4.073 0-.806.087-1.489.21-2.053.004.006.012.008.017.013a.982.982 0 0 0 .378.28.987.987 0 0 0 .396.092h.862c.091.534.137 1.092.137 1.668zM2.864 11.296c-.482-.574-.696-1.218-.791-1.773 1.508.648 3.509 1.606 5.354 2.716-.098.246-.188.501-.276.759-2.004-.128-3.443-.699-4.287-1.702zm5.187 8.73c0-2.422.382-4.745 1.086-6.671l.06.042c.617.445 1.133.879 1.576 1.303-.351.861-.723 2.197-.723 3.992 0 3.374 1.402 6.333 3 6.333s3-2.959 3-6.333c0-.571-.048-1.125-.124-1.667h1.92a22.2 22.2 0 0 1 .204 3c0 6.195-2.688 11-5 11-2.363.001-4.999-4.517-4.999-10.999zm8.673 11c.028-.033.053-.075.081-.109.191-.231.376-.479.554-.742.03-.044.061-.082.091-.127.205-.313.399-.65.585-1.003.05-.094.095-.195.143-.292a15.117 15.117 0 0 0 .537-1.216c.119-.304.229-.618.334-.94.034-.106.072-.208.104-.315.131-.43.249-.872.354-1.328.021-.091.036-.185.056-.276.079-.371.15-.749.211-1.135.024-.155.045-.311.067-.467.047-.349.086-.703.117-1.061.013-.152.029-.303.039-.457a22.72 22.72 0 0 0 .056-1.532v-3h.586l3.707 3.707a1 1 0 0 0 .707.293h20.934c-.23 6.317-2.621 9.564-5.018 10H16.724zm22.295 16h-1.935a1.034 1.034 0 0 1-1.033-1.033V33.026h4V45.993c0 .569-.463 1.033-1.032 1.033zm3.032-2v-4h10v4h-10zm16 4.911c0 .6-.488 1.088-1.088 1.088H55.14a1.09 1.09 0 0 1-1.088-1.088V35.113c0-.6.488-1.088 1.088-1.088h1.823c.6 0 1.088.488 1.088 1.088v14.824z" />
        <circle class="led-blink-1" cx="28.051" cy="27.026" r="1" />
        <circle class="led-blink-2" cx="24.051" cy="27.026" r="1" />
     </svg>
    </div>
  </div>
  <div id="ctn-preloader" class="ctn-preloader">
    <div class="animation-preloader">
        <div class="txt-loading">
            <span data-text-preloader="S" class="letters-loading">
                S
            </span>
            <span data-text-preloader="E" class="letters-loading">
               E
            </span>
            <span data-text-preloader="C" class="letters-loading">
                C
            </span>
            <span data-text-preloader="U" class="letters-loading">
                U
            </span>
            <span data-text-preloader="R" class="letters-loading">
                R
            </span>
            <span data-text-preloader="I" class="letters-loading">
                I
            </span>
            <span data-text-preloader="X" class="letters-loading">
               X
            </span>
        </div>
    </div>
  </div>
</div>
<!--===== PRELOADER ENDS =======-->

<!--===== PROGRESS STARTS=======-->
<div class="paginacontainer">
     <div class="progress-wrap">
       <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
         <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
       </svg>
     </div>
   </div>
 <!--===== PROGRESS ENDS=======-->

   

<!--===== HERO AREA STARTS =======-->
<div id="home" class="carousel-area owl-carousel">
  <div class="hero3-section-area">
    <img src="/assets/img/all-images/header-img4.png" alt="" class="header-img4">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-main-content heading5">
            <h5><img src="/assets/img/icons/finger1.svg" alt="">Top #1 Security Expert In The World </h5>
            <h1 class="text-anime-style-3">Stay Safe, Stay Secure Expert CCTV Services</h1>
            <p>Whether it's deterring intruders, monitoring activity, or providing evidence <br class="d-lg-block d-none"> in the event of an incident, our tailored security systems are designed</p>
            <div class="btn-area">
              <a href="#contact" class="header-btn4">Get a Free Quote <i class="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" class="header-btn1">Get a Free Quote <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="header-bottom-images">
              <div class="img1">
                <img src="/assets/img/all-images/bottom-img1.png" alt="">
              </div>
              <div class="text">
                <p><span>4K</span>Happy Client</p>
                <ul>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/elements/elements23.png" alt="" class="elements23">
    <img src="/assets/img/elements/elements24.png" alt="" class="elements24">
  </div>

  <div class="hero3-section-area">
    <img src="/assets/img/all-images/header-img4.png" alt="" class="header-img4">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-main-content heading5">
            <h5><img src="/assets/img/icons/finger1.svg" alt="">Top #1 Security Expert In The World </h5>
            <h1 class="text-anime-style-3">Stay Safe, Stay Secure Expert CCTV Services</h1>
            <p>Whether it's deterring intruders, monitoring activity, or providing evidence <br class="d-lg-block d-none"> in the event of an incident, our tailored security systems are designed</p>
            <div class="btn-area">
              <a href="#contact" class="header-btn4">Get a Free Quote <i class="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" class="header-btn1">Get a Free Quote <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="header-bottom-images">
              <div class="img1">
                <img src="/assets/img/all-images/bottom-img1.png" alt="">
              </div>
              <div class="text">
                <p><span>4K</span>Happy Client</p>
                <ul>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/elements/elements23.png" alt="" class="elements23">
    <img src="/assets/img/elements/elements24.png" alt="" class="elements24">
  </div>

  <div class="hero3-section-area">
    <img src="/assets/img/all-images/header-img4.png" alt="" class="header-img4">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-main-content heading5">
            <h5><img src="/assets/img/icons/finger1.svg" alt="">Top #1 Security Expert In The World </h5>
            <h1 class="text-anime-style-3">Stay Safe, Stay Secure Expert CCTV Services</h1>
            <p>Whether it's deterring intruders, monitoring activity, or providing evidence <br class="d-lg-block d-none"> in the event of an incident, our tailored security systems are designed</p>
            <div class="btn-area">
              <a href="#contact" class="header-btn4">Get a Free Quote <i class="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" class="header-btn1">Get a Free Quote <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="header-bottom-images">
              <div class="img1">
                <img src="/assets/img/all-images/bottom-img1.png" alt="">
              </div>
              <div class="text">
                <p><span>4K</span>Happy Client</p>
                <ul>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/elements/elements23.png" alt="" class="elements23">
    <img src="/assets/img/elements/elements24.png" alt="" class="elements24">
  </div>
</div>
<!--===== HERO AREA ENDS =======-->
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary rounded-2" tabindex="0">

<!--===== ABOUT AREA STARTS =======-->
<div class="about3-section-area sp1" id="about">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="about-images-area">
          <div class="img1 reveal">
            <img src="/assets/img/all-images/about-img4.png" alt="">
          </div>
          <div class="img2 reveal">
            <img src="/assets/img/all-images/about-img5.png" alt="">
          </div>
          <div class="about-pera">
            <p>WE ARE TRUSTED BY MORE THAN 3500 CLIENTS</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="about-header-area heading6">
          <h5 data-aos="fade-left" data-aos-duration="800" data-aos-delay="300"><img src="/assets/img/icons/finger2.svg" alt="">Why Choose Us</h5>
          <h2 class="text-anime-style-3">Innovating Security Partner  <br class="d-lg-block d-none">In Protection</h2>
          <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">With years of experience & passion for innovation, our team committed to delivering top-notch security and CCTV solutions tailored to your unique needs.</p>
          <div class="space32"></div>
          <div class="all-progress-area" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="00">
            <div class="progres-section-area">
              <div class="check">
                <span><i class="fa-solid fa-check"></i></span>
              </div>
              <div class="about5-boxes">
                <h3>Product Development</h3>
                 <div class="about5-bar">
                     <span class="about5-per">
                          <span class="per">95%</span>
                     </span>
                 </div>
              </div>
            </div>
            <div class="space20"></div>
            <div class="progres-section-area">
              <div class="check">
                <span><i class="fa-solid fa-check"></i></span>
              </div>
              <div class="about5-boxes">
                <h3>Company Investment</h3>
                 <div class="about5-bar2">
                     <span class="about5-per2">
                          <span class="per">97%</span>
                     </span>
                 </div>
              </div>
            </div>
            <div class="space20"></div>
            <div class="progres-section-area">
              <div class="check">
                <span><i class="fa-solid fa-check"></i></span>
              </div>
              <div class="about5-boxes">
                <h3>Business Marketing</h3>
                 <div class="about5-bar">
                     <span class="about5-per">
                          <span class="per">94%</span>
                     </span>
                 </div>
              </div>
            </div>
          </div>
          <div class="btn-area" data-aos="fade-left" data-aos-duration="1300" data-aos-delay="500">
            <a href="#about" class="header-btn4">Learn About Us <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--===== ABOUT AREA ENDS =======-->

<!--===== SERVICE AREA STARTS =======-->
<div class="service3-section-area sp1" id="service">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="service-header heading6">
          <h5 data-aos="fade-left" data-aos-duration="800" data-aos-delay="300"><img src="/assets/img/icons/finger2.svg" alt="">Our Service</h5>
          <h2 class="text-anime-style-3">Complete Protection Services</h2>
          <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">With advanced technology, 24/7 surveillance capabilities personalized <br class="d-lg-block d-none"> service, we're committed to safeguarding what matters most to you.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
        <div class="service-carousel-area owl-carousel">
          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/Access-Control_3.jpg" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-img7.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Tripod Bridge Turnstiles</a>
                <p>Integrated access control solution for secure and controlled movement.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/ASC.png" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-icons8.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Linear Tripod Turnstiles</a>
                <p>Integrated access control solution for secure and controlled movement.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/carpark.jpg" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-icons9.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Automated Ticketing Terminals</a>
                <p>Smart car park solution for automated vehicle entry, ticketing, and exit.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/CarPark-1.jpg" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-img7.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Structured Parking Arrangements</a>
                <p>Smart car park solution for automated vehicle entry, ticketing, and exit.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/Digital-Door-Access.jpg" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-icons8.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Digital Door Access</a>
                <p>Secure entrance control system with digital authentication access points.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/Access-Control_2.jpg" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-icons9.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Entrance Control</a>
                <p>Secure entrance control system with digital authentication access points.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/evm.png" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-img7.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Rentals</a>
                <p>Short-term and event-based security equipment rental services.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/maintenance.png" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-icons8.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Maintenance Service</a>
                <p>Preventive and corrective maintenance for deployed security systems.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="service-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/balosh-solutions/Wings_m_ee.jpg" alt="">
            </div>
            <div class="content-area">
              <div class="icons">
                <img src="/assets/img/icons/service-icons9.svg" alt="">
              </div>
              <div class="content-area-pera">
                <a href="#service">Toll roads &amp; Traffic Management</a>
                <p>Traffic control solutions for toll operations and roadway flow management.</p>
                <a href="#service" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--===== SERVICE AREA ENDS =======-->

<!--===== PRICING AREA STARTS =======-->
<div class="pricing-section-area sp2" id="pricing">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 m-auto">
        <div class="pricing-header text-center heading6">
          <h5 data-aos="fade-left" data-aos-duration="800" data-aos-delay="300"><img src="/assets/img/icons/finger2.svg" alt="">Pricing Plan</h5>
          <h2 class="text-anime-style-3">Clear Pricing for Peace of Mind</h2>
          <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Whether you're looking to secure your home, office, or commercial <br class="d-lg-block d-none"> property, we offer a range of packages designed to meet</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-offset="40">
        <div class="pricing-boxarea">
          <h3>Starter Pack</h3>
          <p>Explore our pricing options below & choose the plan that best fits your requirements</p>
          <h2>$129.00 <span>/month</span></h2>
          <div class="btn-area">
            <a href="#pricing" class="header-btn4">Choose Plan <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="list-area">
            <ul>
              <li><img src="/assets/img/icons/check1.svg" alt="">4/7 system monitoring</li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Security management </li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Patch management </li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Remote support</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="space30 d-md-none d-block"></div>
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-offset="50">
        <div class="pricing-boxarea">
          <h3>Regular Pack</h3>
          <p>From basic surveillance systems advanced monitoring solutions, each plan is crafted</p>
          <h2>$189.00 <span>/month</span></h2>
          <div class="btn-area">
            <a href="#pricing" class="header-btn4">Choose Plan <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="list-area">
            <ul>
              <li><img src="/assets/img/icons/check1.svg" alt="">Preventive maintenance</li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Asset management  </li>
              <li><img src="/assets/img/icons/check1.svg" alt=""> Secure cloud backup</li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Server/Network support </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="space30 d-md-none d-block"></div>
      <div class="space30 d-lg-none d-md-block d-none"></div>
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800" data-aos-offset="60">
        <div class="pricing-boxarea">
          <h3>Advancer Pack</h3>
          <p>We believe in providing transparent and affordable pricing plans for our security</p>
          <h2>$299.00 <span>/month</span></h2>
          <div class="btn-area">
            <a href="#pricing" class="header-btn4">Choose Plan <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="list-area">
            <ul>
              <li><img src="/assets/img/icons/check1.svg" alt=""> Reporting </li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Vendor management </li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Virtual CIO (VCIO)</li>
              <li><img src="/assets/img/icons/check1.svg" alt="">Workstation support</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="space30 d-md-none d-block"></div>
    </div>
  </div>
</div>
<!--===== PRICING AREA ENDS =======-->

<!--===== TESTIMONIAL AREA STARTS =======-->
<div class="testimonial3-section-area sp1" id="project">
  <div class="container">
    <div class="row">
      <div class="col-lg-5">
        <div class="testimonial-header heading5">
          <h5 data-aos="fade-left" data-aos-duration="800" data-aos-delay="600" data-aos-offset="40"><img src="/assets/img/icons/finger1.svg" alt="">Our Projects</h5>
          <h2 class="text-anime-style-3">Stories Hear From Our Clients</h2>
          <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="600" data-aos-offset="40">Crafting an engaging paragraph to showcase testimonials on your security and CCTV landing page can help build trust and credibility</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-offset="40">
        <div class="testimonial-author-slider owl-carousel">
          <div class="testimonial-author-box">
            <div class="images">
              <div class="content">
                <img src="/assets/img/all-images/testimonial-img6.png" alt="">
                <a href="#project">Shreyas Rana</a>
                <p>CEO & Founder</p>
              </div>
              <div class="img1">
                <img src="/assets/img/icons/quito-icons2.svg" alt="">
              </div>
            </div>
            <ul>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
            </ul>
            <div class="space16"></div>
            <p>“From prompt and professional service to reliable <br class="d-lg-block d-none"> surveillance systems, our clients consistently praise our <br class="d-lg-block d-none"> expertise, reliability, & dedication to their safety security”</p>
          </div>

          <div class="testimonial-author-box">
            <div class="images">
              <div class="content">
                <img src="/assets/img/all-images/testimonial-img7.png" alt="">
                <a href="#project">Anshul Kamboj</a>
                <p>CEO & Founder</p>
              </div>
              <div class="img1">
                <img src="/assets/img/icons/quito-icons2.svg" alt="">
              </div>
            </div>
            <ul>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
            </ul>
            <div class="space16"></div>
            <p>“Take a moment to read through their testimonials <br class="d-lg-block d-none"> below and discover why Your Company Name is the <br class="d-lg-block d-none"> trusted choice for all your security needs”</p>
          </div>

          <div class="testimonial-author-box">
            <div class="images">
              <div class="content">
                <img src="/assets/img/all-images/testimonial-img8.png" alt="">
                <a href="#project">Matthew C. Lansberry </a>
                <p>CEO & Founder</p>
              </div>
              <div class="img1">
                <img src="/assets/img/icons/quito-icons2.svg" alt="">
              </div>
            </div>
            <ul>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
            </ul>
            <div class="space16"></div>
            <p>“See what our satisfied customers have to say about <br class="d-lg-block d-none"> their experiences with Our commitment to providing top-notch <br class="d-lg-block d-none"> security and CCTV solutions has earned us rave”</p>
          </div>

          <div class="testimonial-author-box">
            <div class="images">
              <div class="content">
                <img src="/assets/img/all-images/testimonial-img6.png" alt="">
                <a href="#project">Shreyas Rana</a>
                <p>CEO & Founder</p>
              </div>
              <div class="img1">
                <img src="/assets/img/icons/quito-icons2.svg" alt="">
              </div>
            </div>
            <ul>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
            </ul>
            <div class="space16"></div>
            <p>“From prompt and professional service to reliable <br class="d-lg-block d-none"> surveillance systems, our clients consistently praise our <br class="d-lg-block d-none"> expertise, reliability, & dedication to their safety security”</p>
          </div>

          <div class="testimonial-author-box">
            <div class="images">
              <div class="content">
                <img src="/assets/img/all-images/testimonial-img7.png" alt="">
                <a href="#project">Matthew C. Lansberry </a>
                <p>CEO & Founder</p>
              </div>
              <div class="img1">
                <img src="/assets/img/icons/quito-icons2.svg" alt="">
              </div>
            </div>
            <ul>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
            </ul>
            <div class="space16"></div>
            <p>“Take a moment to read through their testimonials <br class="d-lg-block d-none"> below and discover why Your Company Name is the <br class="d-lg-block d-none"> trusted choice for all your security needs”</p>
          </div>

          <div class="testimonial-author-box">
            <div class="images">
              <div class="content">
                <img src="/assets/img/all-images/testimonial-img8.png" alt="">
                <a href="#project">Anshul Kamboj</a>
                <p>CEO & Founder</p>
              </div>
              <div class="img1">
                <img src="/assets/img/icons/quito-icons2.svg" alt="">
              </div>
            </div>
            <ul>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-star"></i></a></li>
            </ul>
            <div class="space16"></div>
            <p>“See what our satisfied customers have to say about <br class="d-lg-block d-none"> their experiences with Our commitment to providing top-notch <br class="d-lg-block d-none"> security and CCTV solutions has earned us rave”</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--===== TESTIMONIAL AREA ENDS =======-->

<!--===== CONTACT AREA STARTS =======-->
<div class="contact2-section-area sp1" id="contact">
  <div class="container">
      <div class="row align-items-center">
          <div class="col-lg-6">
              <div class="contact-header heading6">
                  <h5 data-aos="fade-left" data-aos-duration="800" data-aos-delay="600" data-aos-offset="40"><img src="/assets/img/icons/finger2.svg" alt="">Contact Us</h5>
                  <h2 class="text-anime-style-3">Reach Out for Reliable Security Solutions We're Here to Help</h2>
                  <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" data-aos-offset="40">Ready to take the next step in securing your property? Our team is here to assist you every step of the way. Whether you have questions about </p>
                  <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-offset="40">
                          <div class="contact-boxarea">
                              <div class="all-content">
                                <div class="img1">
                                  <img src="/assets/img/icons/call-icons3.svg" alt="">
                              </div>
                              <div class="content">
                                  <p>Phone</p>
                                  <a href="tel:1234567890">123 456 7890</a>
                              </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="900" data-aos-delay="600" data-aos-offset="40">
                        <div class="contact-boxarea">
                            <div class="all-content">
                              <div class="img1">
                                <img src="/assets/img/icons/email-icons3.svg" alt="">
                            </div>
                            <div class="content">
                                <p>Email</p>
                                <a href="mailto:Securix@gmail.com">Securix@gmail.com</a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-offset="40">
                      <div class="contact-boxarea">
                          <div class="all-content">
                            <div class="img1">
                              <img src="/assets/img/icons/location-icons2.svg" alt="">
                          </div>
                          <div class="content">
                              <p>Address</p>
                              <a href="#">London Eye ,London</a>
                          </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="600" data-aos-offset="40">
                    <div class="contact-boxarea">
                        <div class="all-content">
                          <div class="img1">
                            <img src="/assets/img/icons/linkedin-icons1.svg" alt="">
                        </div>
                        <div class="content">
                            <p>Instagram</p>
                            <a href="#">Fleexstudio</a>
                        </div>
                        </div>
                    </div>
                </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-6" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="600" data-aos-offset="40">
              <div class="contact-form-area">
                  <h3>Request A Quote</h3>
                  <form  action="https://api.web3forms.com/submit" method="POST">
                      <input type="hidden" name="access_key" value="0cd32fff-eda2-4da3-be43-37d47fbb396b">
                      <div class="row">
                          <div class="col-lg-6">
                              <div class="input-area">
                                  <p>Name (required)</p>
                                  <input type="text" placeholder="First Name">
                              </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="input-area">
                              <p>Number (required)</p>
                                <input type="number" placeholder="Phone">
                            </div>
                        </div>

                          <div class="col-lg-12">
                              <div class="input-area">
                                <p>Email (required)</p>
                                  <input type="email" placeholder="Email">
                              </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-area">
                              <p>Additional Details  (Optional)</p>
                                <textarea placeholder="Message"></textarea>
                            </div>
                        </div>
                          <div class="col-lg-12">
                            <div class="input-area text-start">
                                <button type="submit" class="header-btn3">Submit Now <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>
<!--===== CONTACT AREA ENDS =======-->

<!--===== FAQ AREA STARTS =======-->
<div class="faq-section-area sp1" id="faq">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 m-auto">
        <div class="faq-header-area text-center heading6">
          <h5 data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-offset="40"><img src="/assets/img/icons/finger2.svg" alt="">FAQ’s</h5>
          <h2 class="text-anime-style-3">Your Guide to Security & CCTV</h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-offset="40">Have questions about our security and CCTV services? Explore our FAQ section below to find answers to commonly asked questions.</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="faq-author-area">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600" data-aos-offset="40">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What are the benefits of installing CCTV cameras?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">From understanding how CCTV surveillance works to choosing the <br class="d-lg-block d-none"> right security solution for your needs, we've compiled</div>
              </div>
            </div>
            <div class="space20"></div>
            <div class="accordion-item" data-aos="fade-left" data-aos-duration="900" data-aos-delay="600" data-aos-offset="40">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  How many CCTV cameras do I need for my property?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">From understanding how CCTV surveillance works to choosing the <br class="d-lg-block d-none"> right security solution for your needs, we've compiled</div>
              </div>
            </div>
            <div class="space20"></div>
            <div class="accordion-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" data-aos-offset="40">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Can CCTV cameras be used indoors and outdoors?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">From understanding how CCTV surveillance works to choosing the <br class="d-lg-block d-none"> right security solution for your needs, we've compiled</div>
              </div>
            </div>
            <div class="space20"></div>
            <div class="accordion-item" data-aos="fade-left" data-aos-duration="1100" data-aos-delay="600" data-aos-offset="40">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  How do I choose the right CCTV system for my needs?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">From understanding how CCTV surveillance works to choosing the <br class="d-lg-block d-none"> right security solution for your needs, we've compiled</div>
              </div>
            </div>
            <div class="space20"></div>
            <div class="accordion-item" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="600" data-aos-offset="40">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Are there any legal requirements for CCTV signage?
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">From understanding how CCTV surveillance works to choosing the <br class="d-lg-block d-none"> right security solution for your needs, we've compiled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <div class="faq-images-area">
          <div class="row">
            <div class="col-lg-8">
              <div class="img1 reveal">
                <img src="/assets/img/all-images/faq-img1.png" alt="">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="faq-progress-area">
                <div class="progresbar">
                  <div class="progressbar">
                     <div class="circle" data-percent="90">
                      <canvas></canvas>
                         <div>90%</div>
                    </div>
                  </div>
                  <p>Cameras Installed</p>
                </div>
                <div class="space24"></div>
                <div class="progresbar">
                  <div class="progressbar">
                     <div class="circle" data-percent="90">
                      <canvas></canvas>
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
<!--===== FAQ AREA ENDS =======-->

<!--===== BLOG AREA STARTS =======-->
<div class="blog3-section-area sp1" id="blog">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="blog-header-area heading6">
          <h5 data-aos="fade-up" data-aos-duration="800"><img src="/assets/img/icons/finger2.svg" alt="">Our Blogs</h5>
          <h2 class="text-anime-style-3">Surveillance Stories Exploring Security Solutions</h2>
          <p data-aos="fade-up" data-aos-duration="1000">Welcome to our Security and CCTV Blog, your go-to resource for staying updated on the latest trends, tips, and insights in the world of security.</p>
        </div>
      </div>
      <div class="col-lg-8" data-aos="fade-up" data-aos-duration="1200">
        <div class="blog-slider-area owl-carousel">
          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img10.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">Protecting Your Privacy: Best Practices for CCTV Camera Placement</a>
              <p>Our blog covers a wide range of topics, Best  including surveillance technology, </p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img11.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">The Impact of CCTV Surveillance on Crime Prevention and Public Safety</a>
              <p>Whether you're homeowner looking enhance your property's security or a business owner</p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img12.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">The CCTV Corner: Expert Analysis and Tips Watchful Eye</a>
              <p>Stay informed, stay secure, and explore our articles to learn how you can protect what</p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img10.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">Protecting Your Privacy: Best Practices for CCTV Camera Placement</a>
              <p>Our blog covers a wide range of topics, Best  including surveillance technology, </p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img11.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">The Impact of CCTV Surveillance on Crime Prevention and Public Safety</a>
              <p>Whether you're homeowner looking enhance your property's security or a business owner</p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img12.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">The CCTV Corner: Expert Analysis and Tips Watchful Eye</a>
              <p>Stay informed, stay secure, and explore our articles to learn how you can protect what</p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img10.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">Protecting Your Privacy: Best Practices for CCTV Camera Placement</a>
              <p>Our blog covers a wide range of topics, Best  including surveillance technology, </p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img11.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">The Impact of CCTV Surveillance on Crime Prevention and Public Safety</a>
              <p>Whether you're homeowner looking enhance your property's security or a business owner</p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="blog-boxarea">
            <div class="img1">
              <img src="/assets/img/all-images/blog-img12.png" alt="">
            </div>
            <div class="content-area">
              <div class="date" style="background-image: url(/assets/img/bg/blog-date.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
                <a href="#">12 <br> Jun</a>
              </div>
              <a href="#blog">The CCTV Corner: Expert Analysis and Tips Watchful Eye</a>
              <p>Stay informed, stay secure, and explore our articles to learn how you can protect what</p>
              <a href="#blog" class="readmore">Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--===== BLOG AREA ENDS =======-->

<!--===== CTA AREA STARTS =======-->
<div class="cta3-section-area">
  <img src="/assets/img/elements/elements23.png" alt="" class="elements23">
  <img src="/assets/img/elements/elements24.png" alt="" class="elements24">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="cta-author-area">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="heading2">
                <h2 class="text-anime-style-3">Empower Your Security Request Information</h2>
                <div class="space16"></div>
                <form>
                  <input type="text" placeholder="Email Address..">
                  <button>Subscribe Now <i class="fa-solid fa-arrow-right"></i></button>
                </form>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
              <div class="cta-images">
                <div class="img1 reveal">
                  <img src="/assets/img/all-images/cta-img1.png" alt="">
                </div>
                <div class="img2">
                  <img src="/assets/img/bg/cta-bg1.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--===== CTA AREA ENDS =======-->


</div>
<!--===== JS SCRIPT LINK =======-->`;

  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  );
}
