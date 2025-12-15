import React from 'react';
import whyImg from '../../assets/images/resources/why-choose-v2-img1.png';

const WhyUs: React.FC = () => {
  return (
    <section className="why-us-area pt-120 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="why-us-thumb mb-40">
              <img src={whyImg} alt="Why SM Logistics" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-us-content mb-40">
              <div className="sec-title">
                <span className="sec-title__tagline">Why Choose SM Logistics</span>
                <h2 className="sec-title__title">Trusted Logistics Partner for Your Supply Chain</h2>
              </div>

              <p>
                At SM Logistics we combine industry expertise with modern technology to deliver
                efficient, reliable, and cost-effective logistics solutions. Whether you're shipping
                locally or internationally, our team is committed to handling your freight with care
                and transparency.
              </p>

              <div className="why-us-list mt-30">
                <ul>
                  <li>
                    <h4>Expertise & Experience</h4>
                    <p>Years of experience in the logistics and freight industry — knowledgeable teams to guide your shipments.</p>
                  </li>
                  <li>
                    <h4>Reliable Partners</h4>
                    <p>We work with trusted carriers and partners to ensure smooth operations across the globe.</p>
                  </li>
                  <li>
                    <h4>Cost-Effective Solutions</h4>
                    <p>Competitive pricing without compromising service quality; tailored plans to fit your budget.</p>
                  </li>
                  <li>
                    <h4>Customer-Centric Approach</h4>
                    <p>Dedicated support team to handle queries and ensure satisfaction at every step.</p>
                  </li>
                  <li>
                    <h4>End-to-End Tracking</h4>
                    <p>Real-time monitoring of shipments so you have full visibility from pickup to delivery.</p>
                  </li>
                </ul>
              </div>

              <div className="why-us-cta mt-30">
                <a href="/contact" className="thm-btn">Get A Quote</a>
                <a href="/services" className="thm-btn thm-btn--outline ml-15">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
