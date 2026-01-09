import { Link } from 'react-router-dom';
// Import images
import skillShape1 from '../../assets/images/shapes/skill-v1-shape1.png';
import skillShape2 from '../../assets/images/shapes/skill-v1-shape2.png';
import skillImg1 from '/sm-home4.png';
import skillImg2 from '/dumptrucks-2.jpeg';

const SkillOne = () => {
  return (
    <section className="skill-one">
      <div className="container">
        <div className="row">
          {/* Skill Images Section */}
          <div className="col-xl-5">
            <div className="skill-one__img">
              <div className="shape1 float-bob-y">
                <img src={skillShape1} alt="Decorative shape" />
              </div>
              <div className="shape2 float-bob-y">
                <img src={skillShape2} alt="Decorative shape" />
              </div>
              <div className="skill-one__img1">
                <img 
                  src={skillImg1} 
                  alt="Skill demonstration"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <div className="skill-one__img2">
                <div className="inner">
                  <img 
                    src={skillImg2} 
                    alt="Skill demonstration"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Skill Content Section */}
          <div className="col-xl-7">
            <div className="skill-one__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>Our Skills</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  Freight Brokerage Excellence <br /> You Can Rely On
                </h2>
              </div>

              <div className="skill-one__content-text">
                <p>
                  With years of hands-on experience in the freight industry, our team specializes 
                  in managing shipments through strong carrier relationships, disciplined processes, 
                  and clear communication. We focus on coordinating freight efficiently while 
                  protecting our clients’ interests at every stage of the move.
                </p>
                <h3 style={{ marginTop: '20px', marginBottom: '15px', color: 'var(--logistiq-black)' }}>What We Do Best</h3>
              </div>

              <div className="skill-one__content-list" style={{ marginBottom: '30px' }}>
                <ul className="list-unstyled">
                  <li style={{ marginBottom: '15px' }}>
                    <p><strong>✔ Carrier Vetting & Compliance Oversight:</strong><br />
                    We work with carefully screened carriers that meet required safety, insurance, and compliance standards.</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <p><strong>✔ Shipment Coordination & Monitoring:</strong><br />
                    From pickup to delivery, we manage freight movements with proactive updates and close coordination.</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <p><strong>✔ Problem Solving & Exception Handling:</strong><br />
                    Our team is trained to address delays, changes, and challenges quickly and professionally.</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <p><strong>✔ Customer Focused Logistics Support:</strong><br />
                    We prioritize responsiveness, transparency, and long-term shipper relationships over volume.</p>
                  </li>
                </ul>
              </div>

              <div className="skill-one__content-btn">
                <Link className="thm-btn" to="/contact">
                  Request Quote
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
      </div>
    </section>
  );
};

export default SkillOne;