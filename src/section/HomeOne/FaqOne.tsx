"use client";
import React, { useState, useEffect, useRef } from "react";
import ModalVideo from "react-modal-video";

// Import images
import faqShape from "../../assets/images/shapes/faq-v1-shape1.png";
import faqImage from "../../assets/images/resources/faq-v1-img1.jpg";
import slidingTextIcon from "../../assets/images/icon/sliding-text-icon-1.png";

const FaqOne = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(1);
  const slidingTextRef = useRef(null);

  const faqItems = [
    {
      id: 0,
      question: "What is Star MS Logistics?",
      answer:
        "Star MS Logistics is a professional freight brokerage providing reliable and transparent shipping solutions across the U.S.",
    },
    {
      id: 1,
      question: "Are you a licensed freight broker?",
      answer:
        "Yes, we operate in compliance with FMCSA regulations and follow all federal freight brokerage requirements.",
    },
    {
      id: 2,
      question: "What areas do you serve?",
      answer:
        "We provide freight services across the entire United States through our trusted network of carriers.",
    },
    {
      id: 3,
      question: "What types of freight do you specialize in?",
      answer:
        "We handle dry van, flatbed, reefer, hotshot, oversized/overweight, machinery, consumer goods, industrial materials, and specialized loads.",
    },
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // Sliding text animation
  useEffect(() => {
    const slidingText = slidingTextRef.current;
    if (!slidingText) return;

    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      const firstElementWidth = slidingText.children[0]?.offsetWidth || 0;
      if (position <= -firstElementWidth) {
        position = 0;
      }
      slidingText.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="faq-one">
      <div className="shape1 float-bob-x">
        <img src={faqShape} alt="Decorative shape" />
      </div>

      <div className="container">
        <div className="row">
          {/* FAQ Content */}
          <div className="col-xl-6">
            <div className="faq-one__content">
              <div className="faq-one__content-faq">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <div className="line"></div>
                    <div className="text tg-element-title">
                      <h4>Company's FAQ</h4>
                    </div>
                    <div className="icon">
                      <span className="icon-plane2 float-bob-x3"></span>
                    </div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">
                    Common Questions About <br />
                    Our Trucking Services?
                  </h2>
                </div>

                <div className="accrodion-grp faq-one-accrodion">
                  {faqItems.map((item) => (
                    <div
                      key={item.id}
                      className={`accrodion ${
                        activeAccordion === item.id ? "active" : ""
                      }`}
                    >
                      <div
                        className="accrodion-title"
                        onClick={() => toggleAccordion(item.id)}
                      >
                        <h4>{item.question}</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display:
                            activeAccordion === item.id ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Image + Video */}
          <div className="col-xl-6">
            <div className="faq-one__img">
              <div className="faq-one__img-box">
                <img src={faqImage} alt="FAQ visual" />

                <div className="faq-one__video-link">
                  <button
                    onClick={() => setOpen(true)}
                    className="video-popup"
                    style={{ background: "none", border: "none" }}
                  >
                    <div className="faq-one__video-icon">
                      <span className="icon-video"></span>
                      <i className="ripple"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sliding Text */}
        <div className="sliding-text-one">
          <div className="sliding-text-one__wrap">
            <ul
              ref={slidingTextRef}
              className="sliding-text__list list-unstyled marquee_mode"
            >
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <h2
                    data-hover="100% TRUSTED TRUCKING SERVICE"
                    className="sliding-text__title"
                  >
                    100% TRUSTED TRUCKING SERVICE
                    <img src={slidingTextIcon} alt="icon" />
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="kJQP7kiw5Fk"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default FaqOne;
