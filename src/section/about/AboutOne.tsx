import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

// Images
import About_shape3 from "/ms-about2.png";
import About_Image from "/ms-about3.png";
import About_shape4 from "../../assets/images/shapes/about-v1-shape3.png";

const AboutOne: React.FC = () => {
  const revealRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // GSAP animation for reveal elements
    revealRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <>
      {/*Start About One*/}
      <section className="about-one">
        <div className="container">
          <div className="row">
            {/* About Content */}
            <div className="col-xl-7">
              <div className="about-one__content">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <div className="line" />
                    <div className="text tg-element-title">
                      <h4>Our Company</h4>
                    </div>
                    <div className="icon">
                      <span className="icon-shipment float-bob-x3" />
                    </div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">
                   Star MS Logistics<br />
                    End-to-End Logistic Solutions
                  </h2>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Star MS Logistics is a U.S.–based freight brokerage company officially licensed in December 2025, 
                    built on a foundation of over 10 years of hands-on experience in the U.S. freight and logistics market.
                  </p>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Before launching under the Star MS Logistics name, our leadership and core operations team spent 
                    more than a decade working as freight broker agents, dispatch professionals, and carrier coordinators 
                    within the U.S. transportation industry. While our brokerage license is recent, our people, systems, 
                    and market knowledge are deeply established.
                  </p>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Star MS Logistics was formed to bring that experience under one independent, fully compliant brokerage 
                    — combining industry expertise with modern processes, transparency, and accountability.
                  </p>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    As a freight broker, we do not own trucks. Our role is to professionally connect reliable carriers 
                    with shippers, ensuring every load is handled with precision, compliance, and care. From rate 
                    negotiation to dispatch, documentation, and delivery follow-up, we manage the process end-to-end.
                  </p>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Our experienced staff and management team understand the real challenges of freight movement — delays, 
                    capacity shortages, compliance risks, and cargo protection. We work only with verified carriers, 
                    supported by active insurance validation and compliance checks.
                  </p>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Every shipment we arrange is protected through strict carrier vetting, insurance verification, and 
                    risk-control procedures — giving our customers confidence that their freight is not only moving, 
                    but fully protected.
                  </p>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Today, Star MS Logistics provides nationwide freight solutions across the United States, including 
                    FTL, LTL, dry van, reefer, flatbed, and specialized freight. We serve businesses that value reliability, 
                    clear communication, and long-term logistics partnerships.
                  </p>
                </div>

                <div className="about-one__content-text2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6" ref={addToRefs}>
                      <div className="about-one__content-text2-single">
                        <div className="about-one__content-text2-single-top">
                          <div className="icon">
                            <span className="icon-worldwide-shipping-1" />
                          </div>
                          <div className="title-box">
                            <h3>Nationwide Coverage</h3>
                          </div>
                        </div>
                        <p>
                          Comprehensive freight solutions across all U.S. states through our verified carrier network
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6" ref={addToRefs}>
                      <div className="about-one__content-text2-single">
                        <div className="about-one__content-text2-single-top">
                          <div className="icon">
                            <span className="icon-24-hours-service" />
                          </div>
                          <div className="title-box">
                            <h3>Experienced Team</h3>
                          </div>
                        </div>
                        <p>
                          Over 10 years of combined expertise in freight brokerage and carrier coordination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-one__content-bottom" ref={addToRefs}>
                  <div className="btn-box">
                    <Link className="thm-btn" to="/about">
                      More About Us
                      <i className="icon-right-arrow21" />
                      <span className="hover-btn hover-bx" />
                      <span className="hover-btn hover-bx2" />
                      <span className="hover-btn hover-bx3" />
                      <span className="hover-btn hover-bx4" />
                    </Link>
                  </div>
                  <div className="contact-box">
                    <div className="icon">
                      <span className="icon-phone2" />
                    </div>
                    <div className="text-box">
                      <p>Make A Phone Call</p>
                      <h4>
                        <a href="tel:1234567890">
847-789-1170</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Image */}
            <div className="col-xl-5">
              <div className="about-one__img">
                <div className="about-one__img1" ref={addToRefs}>
                  <img src={About_shape3} alt="About1" />
                </div>
                <div className="about-one__img2">
                  <div className="about-one__img2-inner" ref={addToRefs}>
                    <img src={About_Image} alt="About2" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End About One*/}
    </>
  );
};

export default AboutOne;
