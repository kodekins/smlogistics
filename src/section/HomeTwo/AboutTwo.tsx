import React from "react";
import { Link } from 'react-router-dom';
import CountUp from "react-countup";

// Import all images
import shape5 from '../../assets/images/shapes/about-v2-shape5.png';
import shape2 from '../../assets/images/shapes/about-v2-shape2.png';
import shape3 from '../../assets/images/shapes/about-v2-shape3.png';
import shape4 from '../../assets/images/shapes/about-v2-shape4.png';
import aboutImg1 from '/smlogistics-4.jpg';
import aboutImg2 from '/smlogistics-5.jpg';
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
              <div className="about-two__img1">
                <div className="inner">
                  <img src={aboutImg1} alt="" />
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
              <div className="about-two__img2">
                <img src={aboutImg2} alt="" />
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
                    <h4>About Us</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  The Transportation and <br />
                  Logistics <span>Industry</span>
                </h2>
              </div>

              <div className="about-two__content-text1">
                <p>
                  Logistic service provider company plays a pivotal role in the global supply chain of
                  ecosystem by efficiently managing the movement of goods from point
                  of origin to final destination.
                </p>
              </div>

              <div className="about-two__content-text2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p><span className="icon-check1"></span> Safety And Reliability</p>
                      </li>
                      <li>
                        <p><span className="icon-check1"></span> End-to-End Transportation</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <ul className="about-two__content-text2-list">
                      <li>
                        <p><span className="icon-check1"></span> Warehousing & Distribution</p>
                      </li>
                      <li>
                        <p><span className="icon-check1"></span> Fast Transportation</p>
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
