import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
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
  const [isOpen, setOpen] = useState(false);

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
          <div className="why-choose-two__video-box">
            <button
              onClick={() => setOpen(true)}
              className="video-popup"
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <div className="why-choose-two__video-box-icon">
                <span className="icon-video"></span>
                <i className="ripple"></i>
              </div>
            </button>
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
                  <span className="icon-plane2 float-bob-x3"></span>
                </div>
              </div>
              <h2 className="sec-title__title tg-element-title">
                Transportation Services We <br /> Are Often{" "}
                <span>Considered</span>
              </h2>
            </div>

            <div className="why-choose-two__content-text">
              <p>
                Logistic service provider company plays a pivotal role in the
                global supply chain ecosystem by efficiently managing the
                movement of goods from origin to final destination. These
                companies offer a diverse.
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
                          Global Logistics <br /> Operation
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        A logistic service provider company <br /> plays a role
                        in the global chain
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-two__single">
                    <div className="why-choose-two__single-top">
                      <div className="icon">
                        <span className="icon-protection"></span>
                      </div>
                      <div className="title">
                        <h4>
                          Safety & Security <br /> Delivery
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        A logistic service provider company <br /> plays a role
                        in the global chain
                      </p>
                    </div>
                  </li>
                </ul>

                <ul>
                  <li className="why-choose-two__single">
                    <div className="why-choose-two__single-top">
                      <div className="icon">
                        <span className="icon-professional-services"></span>
                      </div>
                      <div className="title">
                        <h4>
                          Professional Logistics <br /> Management
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        A logistic service provider company <br /> plays a role
                        in the global chain
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
                          Real Time location <br /> Tracking
                        </h4>
                      </div>
                    </div>
                    <div className="text-box">
                      <p>
                        A logistic service provider company <br /> plays a role
                        in the global chain
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="kJQP7kiw5Fk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};
export default WhyChooseUs;
