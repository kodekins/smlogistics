import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ReactCurvedText from "react-curved-text";
import gsap from "gsap";

// Images
import About_shape1 from "../../assets/images/shapes/about-v1-shape1.png";
import About_shape2 from "../../assets/images/shapes/about-v1-shape2.png";
import About_shape3 from "/smlogistics-4.jpg";
import About_Image from "/smlogistics-5.jpg";
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
                      <span className="icon-plane2 float-bob-x3" />
                    </div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">
                   Star MS Logistics<br />
                    <span>End-to-End Logistics</span>
                  </h2>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Star MS Logistics is a professional freight brokerage committed to providing efficient,
                    reliable, and cost-effective shipping solutions. Our goal is to simplify logistics for
                    businesses and individuals by offering end-to-end services tailored to your needs. With
                    a focus on transparency, timeliness, and customer satisfaction, we ensure that your
                    cargo reaches its destination safely and on schedule.
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
                            <h3>Worldwide Service</h3>
                          </div>
                        </div>
                        <p>
                          Logistic service provider company plays a pivotal role
                          in the global
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
                            <h3>24/7 Online Support</h3>
                          </div>
                        </div>
                        <p>
                          Logistic service provider company plays a pivotal role
                          in the global
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
+92 331 343 5042</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Image */}
            <div className="col-xl-5">
              <div className="about-one__img">
                <div className="shape1 float-bob-y">
                  <img src={About_shape1} alt="Shape1" />
                </div>
                <div className="shape2 float-bob-y">
                  <img src={About_shape2} alt="Shape2" />
                </div>
                <div className="about-one__img1" ref={addToRefs}>
                  <img src={About_shape3} alt="About1" />
                </div>
                <div className="about-one__img2">
                  <div className="about-one__img2-inner" ref={addToRefs}>
                    <img src={About_Image} alt="About2" />
                  </div>
                  <div className="about-one__circle-text">
                    <div className="about-one__round-text-box">
                      <div className="inner">
                        <div className="about-one__curved-circle rotate-me">
                          <ReactCurvedText
                            width={150}
                            height={150}
                            cx={75}
                            cy={75}
                            rx={55}
                            ry={55}
                            startOffset={0}
                            reversed={true}
                            text="WELCOME TO OUR COMPANY SINCE 2002"
                            textProps={{ style: { fontSize: "14" } }}
                            textPathProps={{ fill: "#ffffff" }}
                            tspanProps={null}
                            ellipseProps={null}
                            svgProps={null}
                          />
                        </div>
                      </div>
                      <div className="overlay-icon-box">
                        <Link to="#">
                          <i className="icon-location1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="shape3 float-bob-y">
                    <img src={About_shape4} alt="Shape3" />
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
