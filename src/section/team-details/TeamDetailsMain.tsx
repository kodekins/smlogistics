import React from 'react';
import teamImg from '../../assets/images/team/team-details-img1.jpg';
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
                <div className="inner">
                  <img src={teamImg} alt="Team Member" />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="team-details__top-content">
                <div className="title-box">
                  <div className="tagline">
                    <div className="text">
                      <p>CONSULTANT</p>
                    </div>
                    <div className="line"></div>
                  </div>
                  <h2>Esther Howard</h2>
                </div>
                <div className="team-details__top-content-text">
                  <p>
                    With a passion for innovation, we stay abreast of the latest industry trends to
                    ensure our clients benefit from cutting-edge insurance solutions. At ABC Insurance Services,
                  </p>
                </div>

                <div className="team-details__top-content-contact">
                  <ul>
                    <li>
                      <h4>Make A Call</h4>
                      <p><Link to="tel:1234567890">680 123 456 789</Link></p>
                    </li>
                    <li>
                      <h4>Send Us Mail</h4>
                      <p><Link to="mailto:support@logistra.com">support@logistra.com</Link></p>
                    </li>
                    <li>
                      <h4>Web Address</h4>
                      <p><Link to="https://www.google.com/">www.google.com</Link></p>
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
                <h2>My Skills</h2>
                <p>
                  With a passion for innovation, we stay abreast of the latest industry trends to
                  ensure our clients benefit from cutting-edge insurance solutions.
                </p>

                <ul className="skill-one__progress">
                  {[
                    { title: 'Product Delivery', percent: 85 },
                    { title: 'Quick Response', percent: 90 },
                    { title: 'Customer Satisfaction', percent: 70 },
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
                    Our dedicated team of experts is here to guide you through every step of the
                    insurance journey, ensuring you make informed choices tailored to your unique needs.
                  </p>
                </div>

                <form
                  className="why-choose-one__form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submitted! (Implement your logic)");
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
                            <option>Freight Type 01</option>
                            <option>Freight Type 02</option>
                            <option>Freight Type 03</option>
                            <option>Freight Type 04</option>
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
