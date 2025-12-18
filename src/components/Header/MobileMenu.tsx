"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
const navLogo = "/start-ms-logo.png";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({ status: false, key: "", subMenuKey: "" });
    } else {
      setIsActive({ status: true, key, subMenuKey });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>

        <div className="mobile-nav__content">
          {/* Close Button */}
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          {/* Logo */}
          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src={navLogo} alt="Logo" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }} />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li className={isActive.key === 1 ? 'dropdown current' : 'dropdown'}>
                  <Link to="/">Home</Link>
                  <ul style={{ display: `${isActive.key === 1 ? 'block' : 'none'}` }}>
                    <li><Link to="/">Home One</Link></li>
                    <li><Link to="/home-2">Home Two</Link></li>
                    <li><Link to="/home-3">Home Three</Link></li>
                    <li className={isActive.subMenuKey === 'header' ? 'dropdown current-menu-item' : 'dropdown'}>
                      <Link to="">Header Styles</Link>
                      <ul style={{ display: `${isActive.subMenuKey === 'header' ? 'block' : 'none'}` }}>
                        <li><Link to="/">Header One</Link></li>
                        <li><Link to="/home-2">Header Two</Link></li>
                        <li><Link to="/home-3">Header Three</Link></li>
                      </ul>
                      <button className={isActive.subMenuKey === 'header' ? 'expanded open' : ''} onClick={() => handleToggle(1, 'header')}>
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                  </ul>
                  <button className={isActive.key === 1 ? 'expanded open' : ''} onClick={() => handleToggle(1)}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/why-us">Why Us</Link></li>

                <li className={isActive.key === 2 ? 'dropdown current' : 'dropdown'}>
                  <Link to="/service">Shipping Solutions</Link>
                  <ul style={{ display: `${isActive.key === 2 ? 'block' : 'none'}` }}>
                    <li><Link to="/track-transport">LTL (Less Than Truckload)</Link></li>
                    <li><Link to="/international-transport">FTL (Full Truckload)</Link></li>
                    <li><Link to="/personal-delivery">Interstate Transport</Link></li>
                    <li><Link to="/warehouse-facility">Intrastate Transport</Link></li>
                    <li><Link to="/ocean-transport">Reefer Transport</Link></li>
                    <li><Link to="/emergency-transport">Air-Conditioned Transport</Link></li>
                    <li><Link to="/ocean-transport">Container Drayage</Link></li>
                    <li><Link to="/international-transport">Dry Van</Link></li>
                    <li><Link to="/emergency-transport">Flat Bed</Link></li>
                    <li><Link to="/track-transport">Dump Truck</Link></li>
                    <li><Link to="/personal-delivery">Oversize/Overweight</Link></li>
                    <li><Link to="/warehouse-facility">Warehousing & Storage</Link></li>
                  </ul>
                  <button className={isActive.key === 2 ? 'expanded open' : ''} onClick={() => handleToggle(2)}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:needhelp@elitecons.com">
                needhelp@elitecons.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-facebook-square"></Link>
              <Link to="#" className="fab fa-pinterest-p"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
