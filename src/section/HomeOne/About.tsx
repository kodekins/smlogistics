import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ReactCurvedText from 'react-curved-text'

// Images
import About_shape1 from '../../assets/images/shapes/about-v1-shape1.png';
import About_shape2 from '../../assets/images/shapes/about-v1-shape2.png';
import About_shape3 from '/sm-home2.jpg';
import About_Image from '/sm-home3.png';
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
                      <span className="icon-shipment float-bob-x3" />
                    </div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">
                    Star MS Logistics <br />
                    Delivering the Trust
                  </h2>
                </div>

                <div className="about-one__content-text1" ref={addToRefs}>
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
                  <p style={{ marginTop: '15px' }}>
                    Today, every shipment we handle is supported by a customer-first mindset, proactive 
                    updates, and a commitment to transparency, giving our clients confidence from pickup 
                    to delivery.
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
                          We operate with honest communication and full shipment 
                          visibility throughout the transportation process.
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
                          Our dedicated logistics team delivers reliable, tailored 
                          freight solutions designed around your shipping needs.
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