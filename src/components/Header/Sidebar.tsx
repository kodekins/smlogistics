
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { emailApi } from '../../api/emailApi';
const logo = "/mslogistics-logo.png";

const Sidebar = ({ isSidebar, handleSidebar }) => {
    const [isActivee, setIsActivee] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        setIsActivee(isSidebar) // Directly set the state based on prop
    }, [isSidebar])

    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isActivee ? "isActive" : ""}`}>
            <div className="xs-overlay xs-bg-black" onClick={handleSidebar}></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <Link to="#" onClick={() => setIsActivee(false)} className="close-side-widget">X</Link>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <Link to="/"><img src={logo}
                                        alt="" /></Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old.
                                        </p>
                                    </div>
                                </div>

                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form
                                        onSubmit={async (e) => {
                                            e.preventDefault();
                                            setIsSubmitting(true);
                                            setSubmitMessage({ type: '', text: '' });

                                            try {
                                                await emailApi.submitContact({
                                                    name: formData.name,
                                                    email: formData.email,
                                                    phone: '',
                                                    subject: 'Quick Quote Request',
                                                    message: formData.message
                                                });
                                                
                                                setSubmitMessage({
                                                    type: 'success',
                                                    text: 'Thank you! Your message has been sent.'
                                                });
                                                setFormData({ name: '', email: '', message: '' });
                                            } catch (error: any) {
                                                setSubmitMessage({
                                                    type: 'error',
                                                    text: error.message || 'Failed to send message'
                                                });
                                            } finally {
                                                setIsSubmitting(false);
                                            }
                                        }}
                                    >
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                required 
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="Email" 
                                                required 
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea 
                                                name="message" 
                                                placeholder="Message..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                                disabled={isSubmitting}
                                            ></textarea>
                                        </div>
                                        {submitMessage.text && (
                                            <div style={{
                                                padding: '10px',
                                                marginBottom: '10px',
                                                borderRadius: '4px',
                                                fontSize: '14px',
                                                backgroundColor: submitMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                                                color: submitMessage.type === 'success' ? '#155724' : '#721c24'
                                            }}>
                                                {submitMessage.text}
                                            </div>
                                        )}
                                        <div className="form-group message-btn">
                                            <button className="thm-btn" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Submit Now'}
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li>
                                            <span className="icon-location1"></span> 1348 Tiger Lily Drive, Bartlett, IL 60193
                                        </li>
                                        <li>
                                            <span className="icon-phone"></span>
                                            <Link to="tel:+18477891170">847-789-1170</Link>
                                        </li>
                                        <li>
                                            <span className="fa fa-envelope"></span>
                                            <Link to="mailto:contact@starmslogistics.com">contact@starmslogistics.com</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="thm-social-link1">
                                    <ul className="social-box">
                                        <li className="facebook">
                                            <Link to="#"><i className="icon-facebook-f" aria-hidden="true"></i></Link>
                                        </li>
                                        <li className="twitter">
                                            <Link to="#"><i className="icon-twitter" aria-hidden="true"></i></Link>
                                        </li>
                                        <li className="linkedin">
                                            <Link to="#"><i className="icon-instagram" aria-hidden="true"></i></Link>
                                        </li>
                                        <li className="gplus">
                                            <Link to="#"><i className="icon-linkedin" aria-hidden="true"></i></Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;