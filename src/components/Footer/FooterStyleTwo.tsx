import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import { emailApi } from '../../api/emailApi';

// Import images
const footerLogo = "/mslogistics-logo.png";
import pattern1 from '../../assets/images/pattern/footer-v1-pattern.png'; // Replace with your actual path
import pattern2 from '../../assets/images/shapes/footer-v2-shape3.png'; // Replace with your actual path
import pattern3 from '../../assets/images/shapes/footer-v2-shape2.png'; // Replace with your actual path
import pattern4 from '../../assets/images/shapes/footer-v2-shape1.png'; // Replace with your actual path
const FooterTwo = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  return (
    <>
      {/*Start Footer Two*/}
      <footer className="footer-one footer-one--two">
        <div className="footer-one__pattern">
          <img src={pattern1} alt="#" />
        </div>
        <div className="shape3 float-bob-y">
          <img src={pattern2} alt="" />
        </div>
        <div className="footer-one__top">
          <div className="container">
            <div className="footer-one--two__cta">
              <div className="shape1">
                <img
                  className="float-bob-x3"
                  src={pattern3}
                  alt=""
                />
              </div>
              
              <div className="footer-one--two__cta-inner">
                <div className="text-box">
                  <h2>Reliable Brokering With Industry-Leading Performance!</h2>
                </div>
                <div className="btn-box">
                  <Link className="thm-btn" to="/contact">
                    Contact with Us
                    <i className="icon-right-arrow21" />
                    <span className="hover-btn hover-bx" />
                    <span className="hover-btn hover-bx2" />
                    <span className="hover-btn hover-bx3" />
                    <span className="hover-btn hover-bx4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-one__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__single footer-one__about">
                    <div className="footer-one__about-logo">
                      <Link to="/">
                        <img src={footerLogo} alt="" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }} />
                      </Link>
                    </div>
                    <p className="footer-one__about-text">
                      Star MS Logistics is a professional freight brokerage committed to providing efficient, 
                      reliable, and cost-effective shipping solutions tailored to your needs.
                    </p>
                    <div className="footer-one__about-contact-info">
                      <div className="icon">
                        <span className="icon-support" />
                      </div>
                      <div className="text-box">
                        <p>Make a Call</p>
                        <h4>
                          <Link to="tel:+18477891170">847-789-1170</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__single footer-one__quick-links">
                    <div className="title">
                      <h2>
                        Quick Links <span className="icon-shipment" />
                      </h2>
                    </div>
                    <ul className="footer-one__quick-links-list">
                      <li>
                        <Link to="/">
                          <span className="icon-right-arrow1" /> Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <span className="icon-right-arrow1" /> About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/why-us">
                          <span className="icon-right-arrow1" /> Why Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <span className="icon-right-arrow1" /> Our Story
                        </Link>
                      </li>
                      <li>
                        <Link to="/service">
                          <span className="icon-right-arrow1" /> Freight Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/why-us">
                          <span className="icon-right-arrow1" /> Why Choose Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <span className="icon-right-arrow1" /> Request a Quote
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <span className="icon-right-arrow1" /> Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__single footer-one__contact">
                    <div className="title">
                      <h2>
                        Get In Touch <span className="icon-shipment" />
                      </h2>
                    </div>
                    <div className="footer-one__contact-box">
                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-address" />
                          </div>
                          <div className="text-box">
                            <p>
                              United States <br /> Nationwide Coverage
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-email" />
                          </div>
                          <div className="text-box">
                            <p>
                              <Link to="mailto:contact@starmslogistics.com">
                               contact@starmslogistics.com
                              </Link>
                            </p>
                            
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-phone" />
                          </div>
                          <div className="text-box">
                            <p>
                              <Link to="tel:+18477891170">847-789-1170</Link>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__single footer-one__subscribe">
                    <div className="title">
                      <h2>
                        Subscribe Us <span className="icon-shipment" />
                      </h2>
                    </div>
                    <p className="footer-one__subscribe-text">
                      Sign up for alerts, our latest blogs, <br />
                      thoughts, and insights
                    </p>
                    <div className="footer-one__subscribe-form">
                      <form className="subscribe-form"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          setIsSubmitting(true);
                          setMessage({ type: '', text: '' });

                          try {
                            await emailApi.subscribeNewsletter(email);
                            setMessage({ 
                              type: 'success', 
                              text: 'Successfully subscribed!' 
                            });
                            setEmail('');
                          } catch (error: any) {
                            setMessage({ 
                              type: 'error', 
                              text: error.message || 'Failed to subscribe' 
                            });
                          } finally {
                            setIsSubmitting(false);
                          }
                        }}
                      >
                        <input
                          type="email"
                          name="email"
                          placeholder="Your E-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                        <button type="submit" className="thm-btn" disabled={isSubmitting}>
                          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                          <i className="icon-right-arrow21" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </button>
                      </form>
                      {message.text && (
                        <div style={{
                          marginTop: '10px',
                          padding: '10px',
                          borderRadius: '4px',
                          fontSize: '14px',
                          backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
                          color: message.type === 'success' ? '#155724' : '#721c24'
                        }}>
                          {message.text}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-one__bottom">
          <div className="container">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text">
                <p>
                  © Copyright 2025 <Link to="/">Star MS Logistics.</Link> All Rights
                  Reserved
                </p>
              </div>
              <div className="footer-one__social-links">
                <ul>
                  <li>
                    <Link to="#">
                      <span className="icon-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon-twitter1" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*End Footer Two*/}
    </>

  );
};

export default FooterTwo;