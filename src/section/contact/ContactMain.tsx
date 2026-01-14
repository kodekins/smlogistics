import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactBg from '../../assets/images/pattern/contact-page-top-pattern.png';
import { emailApi } from '../../api/emailApi';

const ContactMain = () => {
  const [currentValue, setValue] = useState("Sub");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });


  return (
    <React.Fragment>
      <section className="contact-page">
        {/* Contact Page Top */}
        <div className="contact-page__top">
          <div
            className="contact-page__top-pattern"
            style={{ backgroundImage: `url(${ContactBg})` }}
          ></div>
          <div className="container">
            <div className="row">
              {/* Contact Page Top Content */}
              <div className="col-xl-6">
                <div className="contact-page__top-content">
                  <div className="sec-title tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                      <div className="line"></div>
                      <div className="text tg-element-title">
                        <h4>Contact us</h4>
                      </div>
                      <div className="icon">
                        <span className="icon-shipment float-bob-x3"></span>
                      </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">
                      Get in Touch And We’ll <br /> Help Your Business
                    </h2>
                  </div>

                  <div className="contact-page__top-content-text1">
                    <p>
                      Our dedicated team of experts is here to guide you through every step of the
                      insurance journey, ensuring you make informed choices tailored to your unique
                      needs choices tailored to your unique needs.
                    </p>
                  </div>

                  <div className="social-links">
                    <Link to="#"><span className="icon-facebook-f"></span></Link>
                    <Link to="#"><span className="icon-instagram"></span></Link>
                    <Link to="#"><span className="icon-twitter"></span></Link>
                    <Link to="#"><span className="icon-linkedin"></span></Link>
                  </div>
                </div>
              </div>
              {/* Contact Page Top Form */}
              <div className="col-xl-6">
                <div className="contact-page__top-form">
                  <form
                    className="contact-form-validated why-choose-one__form"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      setSubmitMessage({ type: '', text: '' });

                      try {
                        const response = await emailApi.submitContact({
                          name: formData.name,
                          email: formData.email,
                          phone: formData.phone,
                          subject: currentValue === "Sub" ? "General Inquiry" : `Services ${currentValue}`,
                          message: formData.message
                        });

                        setSubmitMessage({
                          type: 'success',
                          text: response.message || 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
                        });
                        
                        // Reset form
                        setFormData({ name: '', email: '', phone: '', message: '' });
                        setValue("Sub");
                      } catch (error: any) {
                        setSubmitMessage({
                          type: 'error',
                          text: error.message || 'Failed to send message. Please try again later.'
                        });
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="input-box">
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            required 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            disabled={isSubmitting}
                          />
                          <div className="icon"><span className="icon-user"></span></div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="input-box">
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            required 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            disabled={isSubmitting}
                          />
                          <div className="icon"><span className="icon-email"></span></div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="input-box">
                          <input 
                            type="text" 
                            name="phone" 
                            placeholder="Phone" 
                            required 
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            disabled={isSubmitting}
                          />
                          <div className="icon"><span className="icon-phone2"></span></div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="input-box">
                          <div className="select-box">
                            <select 
                              value={currentValue} 
                              onChange={(e) => setValue(e.target.value)} 
                              className="selectmenu wide"
                              disabled={isSubmitting}
                            >
                              <option value={"Sub"}>Subject</option>
                              <option value={"01"}>Services - FTL</option>
                              <option value={"02"}>Services - LTL</option>
                              <option value={"03"}>Services - Reefer</option>
                              <option value={"04"}>Services - Interstate Transport</option>
                              <option value={"05"}>Services - Specialized</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="input-box">
                          <textarea 
                            name="message" 
                            placeholder="Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            disabled={isSubmitting}
                          ></textarea>
                          <div className="icon style2"><span className="icon-pen"></span></div>
                        </div>
                      </div>

                      {submitMessage.text && (
                        <div className="col-xl-12">
                          <div style={{
                            padding: '15px',
                            marginBottom: '15px',
                            borderRadius: '5px',
                            backgroundColor: submitMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                            color: submitMessage.type === 'success' ? '#155724' : '#721c24',
                            border: `1px solid ${submitMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                          }}>
                            {submitMessage.text}
                          </div>
                        </div>
                      )}

                      <div className="col-xl-12">
                        <div className="why-choose-one__form-btn">
                          <button type="submit" className="thm-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Submit Now'}
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
        {/* Contact Page Bottom */}
        <div className="contact-page__bottom">
          <div className="container">
            <div className="contact-page__bottom-inner">
              <ul className="list-unstyled">
                <li className="contact-page__bottom-single">
                  <div className="icon">
                    <span className="icon-address"></span>
                  </div>
                  <div className="content">
                    <h2>Location</h2>
                    <p>
                      280 Granite Run Drive <br /> SuiteHobert, LA 90010, USA.
                    </p>
                  </div>
                </li>

                <li className="contact-page__bottom-single">
                  <div className="icon">
                    <span className="icon-clock2"></span>
                  </div>
                  <div className="content">
                    <h2>Working Hours</h2>
                    <p>
                      24/7 (365 days)
                    </p>
                  </div>
                </li>

                <li className="contact-page__bottom-single">
                  <div className="icon">
                    <span className="icon-email"></span>
                  </div>
                  <div className="content">
                    <h2>Email</h2>
                    <p>
                      <Link to="mailto:Contact@starmslogistics.com">Contact@starmslogistics.com</Link> <br />
                      <Link to="mailto:Contact@starmslogistics.com">Contact@starmslogistics.com</Link>
                    </p>
                  </div>
                </li>

                <li className="contact-page__bottom-single">
                  <div className="icon">
                    <span className="icon-phone"></span>
                  </div>
                  <div className="content">
                    <h2>Phone</h2>
                    <p>
                      <Link to="tel:+18477891170">847-789-1170</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Start Google Map One*/}
      <section className="google-map-one">
        <iframe
          title="Company Location on Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6209.242755903148!2d-77.04363602434464!3d38.90977276948481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1394992895496"
          className="google-map-one__map"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
      {/*End Google Map One*/}
    </React.Fragment>
  );
};

export default ContactMain;
