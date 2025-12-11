import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import ctaImage from '../../assets/images/resources/cta-v1-img1.png';
import ctaPattern from '../../assets/images/pattern/cta-v1-pattern.png';
import shape1 from '../../assets/images/shapes/cta-v1-shape1.png';
import shape2 from '../../assets/images/shapes/cta-v1-shape2.png';
import shape3 from '../../assets/images/shapes/cta-v1-shape3.png';

const CtaOne = () => {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__inner">
          {/* CTA Image */}
          <div className="cta-one__img">
            <img src={ctaImage} alt="CTA illustration" />
          </div>
          
          {/* Pattern and Shapes */}
          <div className="cta-one__pattern">
            <img src={ctaPattern} alt="Decorative pattern" />
          </div>
          <div className="shape1 float-bob-x">
            <img src={shape1} alt="Decorative shape" />
          </div>
          <div className="shape2">
            <img src={shape2} alt="Decorative shape" />
          </div>
          <div className="shape3">
            <img src={shape3} alt="Decorative shape" />
          </div>
          
          {/* CTA Content */}
          <div className="cta-one__content">
            <h2>
              Ready to work with a freight partner <br /> built on <span>trust and experience?</span>
            </h2>
            <p>
              Choose Star MS Logistics and let our team of trained professionals <br />
              handle your shipment with the care, honesty, and precision you deserve.
            </p>
            <div className="btn-box">
              <Link className="thm-btn" to="/contact">
                Contact Us
                <i className="icon-right-arrow21"></i>
                <span className="hover-btn hover-bx"></span>
                <span className="hover-btn hover-bx2"></span>
                <span className="hover-btn hover-bx3"></span>
                <span className="hover-btn hover-bx4"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;