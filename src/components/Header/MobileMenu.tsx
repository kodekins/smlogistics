"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
const navLogo = "/mslogistics-logo.png";

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
                <li><Link to="/" onClick={handleMobileMenu}>Home</Link></li>

                <li><Link to="/about" onClick={handleMobileMenu}>About Us</Link></li>
                <li><Link to="/why-us" onClick={handleMobileMenu}>Why Us</Link></li>

                <li className={isActive.key === 2 ? 'dropdown current' : 'dropdown'}>
                  <Link to="/service" onClick={handleMobileMenu}>Shipping Solutions</Link>
                  <ul style={{ display: `${isActive.key === 2 ? 'block' : 'none'}` }}>
                    <li><Link to="/track-transport" onClick={handleMobileMenu}>LTL (Less Than Truckload)</Link></li>
                    <li><Link to="/international-transport" onClick={handleMobileMenu}>FTL (Full Truckload)</Link></li>
                    <li><Link to="/personal-delivery" onClick={handleMobileMenu}>Interstate Transport</Link></li>
                    <li><Link to="/warehouse-facility" onClick={handleMobileMenu}>Intrastate Transport</Link></li>
                    <li><Link to="/ocean-transport" onClick={handleMobileMenu}>Reefer Transport</Link></li>
                    <li><Link to="/emergency-transport" onClick={handleMobileMenu}>Air-Conditioned Transport</Link></li>
                    <li><Link to="/ocean-transport" onClick={handleMobileMenu}>Container Drayage</Link></li>
                    <li><Link to="/international-transport" onClick={handleMobileMenu}>Dry Van</Link></li>
                    <li><Link to="/emergency-transport" onClick={handleMobileMenu}>Flat Bed</Link></li>
                    <li><Link to="/track-transport" onClick={handleMobileMenu}>Dump Truck</Link></li>
                    <li><Link to="/personal-delivery" onClick={handleMobileMenu}>Oversize/Overweight</Link></li>
                    <li><Link to="/warehouse-facility" onClick={handleMobileMenu}>Warehousing & Storage</Link></li>
                  </ul>
                  <button className={isActive.key === 2 ? 'expanded open' : ''} onClick={() => handleToggle(2)}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                <li><Link to="/faq" onClick={handleMobileMenu}>FAQs</Link></li>
                <li><Link to="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:starmslogistics@gmail.com" onClick={handleMobileMenu}>
                starmslogistics@gmail.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to="tel:+923313435042" onClick={handleMobileMenu}>+92 331 343 5042</Link>
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
