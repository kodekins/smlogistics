
import React from 'react';
import ownerImg from '/owner.jpg';
import patternImg from '../../assets/images/pattern/team-details__bottom-pattern.png';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="team-details__top">
          <div className="row">
            <div className="col-xl-6">
              <div className="team-details__top-img">
                <div className="inner" style={{ borderRadius: '20px', overflow: 'hidden', border: '10px solid #fff', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src={ownerImg} alt="Muzaffar A. Shaikh" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="team-details__top-content">
                <div className="title-box">
                  <div className="tagline">
                    <div className="text">
                      <p>MANAGING DIRECTOR</p>
                    </div>
                    <div className="line"></div>
                  </div>
                  <h2>Muzaffar A. Shaikh</h2>
                </div>
                <div className="team-details__top-content-text">
                  <p>
                    With a vision to redefine freight brokerage through trust and reliability, 
                    Muzaffar A. Shaikh leads Star MS Logistics with a commitment to excellence, 
                    ensuring every shipment is managed with the highest level of accountability and care. 
                    He believes that great logistics is driven by great people and a customer-first mindset.
                  </p>
                </div>

                <div className="team-details__top-content-contact">
                  <ul>
                    <li>
                      <h4>Make A Call</h4>
                      <p><Link to="tel:+18477891170">847-789-1170</Link></p>
                    </li>
                    <li>
                      <h4>Send Us Mail</h4>
                      <p><Link to="mailto:contact@starmslogistics.com">contact@starmslogistics.com</Link></p>
                    </li>
                    <li>
                      <h4>Working Hours</h4>
                      <p>24/7 (365 days)</p>
                    </li>
                  </ul>
                </div>

                <div className="team-details__top-social-links">
                  <Link to="#"><span className="icon-facebook-f"></span></Link>
                  <Link to="#"><span className="icon-instagram"></span></Link>
                  <Link to="#"><span className="icon-twitter"></span></Link>
                  <Link to="#"><span className="icon-linkedin"></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-details__bottom">
        <div
          className="team-details__bottom-pattern"
          style={{ backgroundImage: `url(${patternImg})` }}
        ></div>
        <div className="container">
          <div className="row">
            {/* Skills */}
            <div className="col-xl-6">
              <div className="team-details__bottom-progress">
                <h2>Our Commitment</h2>
                <p>
                  At Star MS Logistics, we are dedicated to providing the most reliable 
                  and transparent brokerage services in the industry. Our focus remains 
                  on people excellence and operational readiness.
                </p>

                <ul className="skill-one__progress">
                  {[
                    { title: 'Brokerage Compliance', percent: 100 },
                    { title: 'Real-Time Visibility', percent: 95 },
                    { title: 'Customer Satisfaction', percent: 98 },
                  ].map((skill, index) => (
                    <li key={index}>
                      <div className="skill-one__progress-single">
                        <div className="title-box"><p>{skill.title}</p></div>
                        <div className="bar">
                          <div className="bar-inner count-bar" style={{ width: `${skill.percent}%` }}>
                            <div className="count-text">{skill.percent}%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-xl-6">
              <div className="team-details__bottom-contact">
                <div className="title-box">
                  <h2>Give Us A Message</h2>
                  <p>
                    Our dedicated team of experts is here to guide you through every step of your 
                    logistics journey, ensuring you make informed choices tailored to your unique needs.
                  </p>
                </div>

                <form
                  className="why-choose-one__form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message sent! We will get back to you shortly.");
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-box">
                        <input type="text" name="name" placeholder="Name" required />
                        <div className="icon"><span className="icon-user"></span></div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-box">
                        <input type="email" name="email" placeholder="Email" required />
                        <div className="icon"><span className="icon-email"></span></div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-box">
                        <input type="text" name="phone" placeholder="Phone" required />
                        <div className="icon"><span className="icon-phone2"></span></div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-box">
                        <div className="select-box">
                          <select className="selectmenu wide" name="subject" required>
                            <option value="">Subject</option>
                            <option>LTL Transport</option>
                            <option>FTL Transport</option>
                            <option>Interstate Transport</option>
                            <option>Other Services</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="input-box">
                        <textarea name="message" placeholder="Message" required></textarea>
                        <div className="icon style2"><span className="icon-pen"></span></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="why-choose-one__form-btn">
                        <button type="submit" className="thm-btn">
                          Submit Now
                          <i className="icon-right-arrow21"></i>
                          <span className="hover-btn hover-bx"></span>
                          <span className="hover-btn hover-bx2"></span>
                          <span className="hover-btn hover-bx3"></span>
                          <span className="hover-btn hover-bx4"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
