import React from "react";
import CountUp from "react-countup";

// Import images directly
import bgImage from "../../assets/images/backgrounds/why-choose-v2-bg.jpg";
import shape1 from "../../assets/images/shapes/why-choose-v2-shape1.png";
import shape2 from "../../assets/images/shapes/why-choose-v2-shape2.png";
import shape3 from "../../assets/images/shapes/why-choose-v2-shape3.png";
import pattern2 from "../../assets/images/pattern/why-choose-v2-pattern2.png";
import img1 from "../../assets/images/resources/why-choose-v2-img1.png";
import img2 from "../../assets/images/resources/why-choose-v2-img2.png";
import img3 from "../../assets/images/resources/why-choose-v2-img3.png";
import img4 from "../../assets/images/resources/why-choose-v2-img4.png";

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-two">
        <div
          className="why-choose-two__bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="shape3 float-bob-x">
            <img src={shape3} alt="" />
          </div>
        </div>
        <div className="shape1">
          <img src={shape1} alt="" />
        </div>
        <div className="container">
          <div className="why-choose-two__content">
            <div className="sec-title tg-heading-subheading animation-style2">
              <div className="sec-title__tagline">
                <div className="line"></div>
                <div className="text tg-element-title">
                  <h4>Why choose us</h4>
                </div>
                <div className="icon">
                  <span className="icon-shipment float-bob-x3"></span>
                </div>
              </div>
              <h2 className="sec-title__title tg-element-title">
                Trusted Freight Brokerage <br /> Built on <span>Reliability</span>
              </h2>
            </div>

            <div className="why-choose-two__content-text">
              <p>
                At Star MS Logistics, we focus on what matters most to shippers — dependable 
                carrier partnerships, transparent communication, and disciplined freight 
                management from pickup to delivery.
              </p>
            </div>

            <div className="why-choose-two__content-bottom">
              <div className="shape2 float-bob-x">
                <img src={shape2} alt="" />
              </div>
              <div className="client-box">
                <ul>
                  <li>
                    <div className="img-box">
                      <img src={img1} alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img src={img2} alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img src={img3} alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img src={img4} alt="" />
                    </div>
                  </li>
                </ul>

                <div className="count-text-box count-box">
                  <h2>
                    <CountUp end={1500} duration={2} />
                  </h2>
                  <span className="plus">+</span>
                </div>
                <h3>Happy Clients</h3>
              </div>

              <div
                className="why-choose-two__content-bottom-content wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="why-choose-two__pattern2"
                  style={{ backgroundImage: `url(${pattern2})` }}
                ></div>
                <ul>
                  <li className="why-choose-two__single">
                    <div className="why-choose-two__single-top">
                      <div className="icon">
                        <span className="icon-international-shipping"></span>
                      </div>
                      <div className="title">
                        <h4>
                          Vetted Carrier <br /> Network
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        We work with carefully screened carriers <br /> to ensure freight is handled by partners.
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-two__single">
                    <div className="why-choose-two__single-top">
                      <div className="icon">
                        <span className="icon-tracking"></span>
                      </div>
                      <div className="title">
                        <h4>
                          Real-Time <br /> Communication
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        Proactive updates throughout the <br /> shipment lifecycle — no surprises.
                      </p>
                    </div>
                  </li>
                </ul>

                <ul>
                  <li className="why-choose-two__single">
                    <div className="why-choose-two__single-top">
                      <div className="icon">
                        <span className="icon-protection"></span>
                      </div>
                      <div className="title">
                        <h4>
                          Brokerage <br /> Compliance
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        Operations align with U.S. standards <br /> for responsible load management.
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-two__single">
                    <div className="why-choose-two__single-top">
                      <div className="icon">
                        <span className="icon-phone2"></span>
                      </div>
                      <div className="title">
                        <h4>
                          Customer-First <br /> Support
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        Dedicated team focused on <br /> responsiveness and problem-solving.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyChooseUs;
