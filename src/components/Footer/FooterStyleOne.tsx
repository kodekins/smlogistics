import React from 'react';
import { Link } from 'react-router-dom';
import Footershape from '../../assets/images/pattern/footer-v1-pattern.png';
const footerLogo = "/ovaim-corp-logo.png";

const FooterStyleOne = () => {

    return (
        <>
            {/*Start Footer One*/}
            <footer className="footer-one">
                <div className="footer-one__pattern">
                    <img src={Footershape} alt="#" />
                </div>
                <div className="footer-one__top">
                    <div className="container">
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
                                                <p>Call For Quote</p>
                                                <h4>
                                                    <Link to="tel:+923313435042">+92 331 343 5042</Link>
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
                                                Quick Links <span className="icon-plane3" />
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
                                                <Link to="/about">
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
                                                <Link to="/contact">
                                                    <span className="icon-right-arrow1" /> Request a Quote
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
                                                Get In Touch <span className="icon-plane3" />
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
                                                            <Link to="mailto:starmslogistics@gmail.com">
                                                                starmslogistics@gmail.com
                                                            </Link>
                                                        </p>
                                                        <p>
                                                            <Link to="mailto:support@starmslogistics.com">
                                                                support@starmslogistics.com
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
                                                            <Link to="tel:1234567890">+880 123 456 789 </Link>
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
                                                Subscribe Us <span className="icon-plane3" />
                                            </h2>
                                        </div>
                                        <p className="footer-one__subscribe-text">
                                            Subscribe for freight updates, <br />
                                            industry news and special offers
                                        </p>
                                        <div className="footer-one__subscribe-form">
                                            <form className="subscribe-form"
                                                onSubmit={(e) => {
                                                    return (
                                                        e.preventDefault(),
                                                        alert("Subcribe")
                                                    )
                                                }}
                                            >
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your E-mail"
                                                />
                                                <button type="submit" className="thm-btn">
                                                    Subcribe
                                                    <i className="icon-right-arrow21" />
                                                    <span className="hover-btn hover-bx" />
                                                    <span className="hover-btn hover-bx2" />
                                                    <span className="hover-btn hover-bx3" />
                                                    <span className="hover-btn hover-bx4" />
                                                </button>
                                            </form>
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
            {/*End Footer One*/}
        </>
    );
};

export default FooterStyleOne;
