import React from "react";
import { Link } from 'react-router-dom';
import CountUp from "react-countup";

// Import all images
import shape5 from '../../assets/images/shapes/about-v2-shape5.png';
import shape2 from '../../assets/images/shapes/about-v2-shape2.png';
import shape3 from '../../assets/images/shapes/about-v2-shape3.png';
import shape4 from '../../assets/images/shapes/about-v2-shape4.png';
import aboutImg1 from '/sm-home2.jpg';
import aboutImg2 from '/sm-home3.png';
import aboutImg3 from '../../assets/images/about/about-v2-img3.png';
import shape1 from '../../assets/images/shapes/about-v2-shape1.png';

const AboutTwo = () => {
  return (
    <section className="about-two">
      <div className="shape5">
        <img src={shape5} alt="" />
      </div>
      <div className="container">
        <div className="row">
          {/* Start About Two Img */}
          <div className="col-xl-6">
            <div className="about-two__img">
              <div className="shape2 float-bob-x">
                <img src={shape2} alt="" />
              </div>
              <div className="shape3 float-bob-y">
                <img src={shape3} alt="" />
              </div>
              <div className="shape4 float-bob-y">
                <img src={shape4} alt="" />
              </div>
              <div className="about-two__img1" style={{ position: 'relative', zIndex: 1, maxWidth: '90%' }}>
                <div className="inner" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src={aboutImg1} alt="" style={{ width: '100%', height: '420px', objectFit: 'cover' }} />
                </div>
                <div className="about-two__counter">
                  <div className="shape1">
                    <img src={shape1} alt="" />
                  </div>
                  <div className="count-text-box count-box">
                    <h2>
                      <CountUp end={25} duration={2} />+
                    </h2>
                  </div>
                  <p>
                    Years Of <br />
                    Experience
                  </p>
                </div>
              </div>
              <div className="about-two__img2" style={{ 
                position: 'absolute', 
                bottom: '-50px', 
                right: '-20px', 
                zIndex: 2,
                width: '70%',
                maxWidth: '350px',
                border: '10px solid #fff',
                borderRadius: '15px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                overflow: 'hidden'
              }}>
                <img src={aboutImg2} alt="" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
          {/* End About Two Img */}

          {/* Start About Two Content */}
          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>Our Story</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-shipment float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  Star MS Logistics <br />
                  Delivering the Trust
                </h2>
              </div>

              <div className="about-two__content-text1">
                <p>
                  Star MS Logistics began with a clear purpose: to build a freight brokerage where trust, 
                  transparency, and reliability are not just promises, but standard practice. We connect 
                  shippers with carefully vetted carriers to ensure freight moves safely, on time, and 
                  at competitive rates across the USA.
                </p>
                <p style={{ marginTop: '15px' }}>
                  From day one, we believed that great logistics is driven by great people. Instead 
                  of rushing to launch a brand, we spent nearly six years building and refining our 
                  team — carefully gathering talent, strengthening industry knowledge, and developing 
                  professionals who understand the importance of accountability, communication, and 
                  customer care.
                </p>
                <p style={{ marginTop: '15px' }}>
                  Before bringing Star MS Logistics to market, our focus remained on people excellence 
                  and operational readiness — investing time in carrier relationships, process discipline, 
                  and real-world freight experience. This foundation allows us to act in the best interest 
                  of our shippers on every load we manage.
                </p>
              </div>

              <div className="about-two__content-text2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p><span className="icon-check1"></span> <strong>Transparency & Trust</strong><br />
                        We operate with honest communication and full shipment visibility.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p><span className="icon-check1"></span> <strong>Customer-First Service</strong><br />
                        Our dedicated team delivers reliable, tailored freight solutions.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-two__content-bottom">
                <div className="btn-box">
                  <Link className="thm-btn" to="/about">
                    Discover More
                    <i className="icon-right-arrow21"></i>
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </Link>
                </div>

                <div className="author-info">
                  <div className="img-box">
                    <img src={aboutImg3} alt="" />
                  </div>
                  <div className="text-box">
                    <h3>Marks Daniel</h3>
                    <p>MANAGER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End About Two Content */}
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
