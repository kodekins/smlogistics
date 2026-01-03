import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ReactCurvedText from 'react-curved-text'

// Images
import About_shape1 from '../../assets/images/shapes/about-v1-shape1.png';
import About_shape2 from '../../assets/images/shapes/about-v1-shape2.png';
import About_shape3 from '/smlogistics-4.jpg';
import About_Image from '/smlogistics-5.jpg';
import About_shape4 from '../../assets/images/shapes/about-v1-shape3.png';

const AboutOne = () => {
  const revealRef = useRef([]);

  useEffect(() => {
    // GSAP animation for reveal elements
    revealRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          ease: 'power2.out',
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <>
      {/*Start About One*/}
      <section className="about-one" id="about">
        <div className="container">
          <div className="row">
            {/* About Content */}
            <div className="col-xl-7">
              <div className="about-one__content">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <div className="line" />
                    <div className="text tg-element-title">
                      <h4>Our Story</h4>
                    </div>
                    <div className="icon">
                      <span className="icon-plane2 float-bob-x3" />
                    </div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">
                    Star MS Logistics <br />
                    Delivering the Trust
                  </h2>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
                  <p>
                    Star MS Logistics didn't begin as a company — it began as a <strong>vision</strong>. 
                    A vision to build a freight service where every customer feels valued, every shipment is 
                    handled with care, and every promise is truly honored.
                  </p>
                  <p style={{ marginTop: '15px' }}>
                    From day one, we believed that great logistics can only come from great people. 
                    So instead of rushing to launch a brand, <strong>we spent years developing our team — year 
                    by year, person by person — polishing our people into true industry professionals.</strong>
                  </p>
                  <p style={{ marginTop: '15px' }}>
                    We focused on creating a team that knows how to act in the best interest of shippers, 
                    one that prioritizes communication, dependability, and customer care above everything else.
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
                            <h3>Transparency & Trust</h3>
                          </div>
                        </div>
                        <p>
                          Every shipment is handled with honest communication 
                          and complete transparency throughout the journey.
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
                            <h3>Customer-First Service</h3>
                          </div>
                        </div>
                        <p>
                          Dedicated support team prioritizing your needs with 
                          reliable solutions for every shipping requirement.
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
                        <a href="tel:1234567890">+880 123 456 789</a>
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
                  <img 
                    src={About_shape3} 
                    alt="About1"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
                <div className="about-one__img2">
                  <div className="about-one__img2-inner" ref={addToRefs}>
                    <img 
                      src={About_Image} 
                      alt="About2"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                  <div className="about-one__circle-text">
                    <div className="about-one__round-text-box">
                      <div className="inner">
                        <div className="about-one__curved-circle rotate-me">
                          <ReactCurvedText width='150'
                            height='150'
                            cx='75'
                            cy='75'
                            rx='55'
                            ry='55'
                            startOffset='0'
                            reversed={true}
                            text='TRUSTED TRUCKING COMPANY SINCE 2002'
                            textProps={{ "style": { "fontSize": "14" } }}
                            textPathProps={{ "fill": "#ffffff" }}
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
}
export default AboutOne;