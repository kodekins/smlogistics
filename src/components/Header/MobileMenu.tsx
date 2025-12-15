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
                {/* Home */}
                <li
                  className={
                    isActive.key === 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link to="/">Home</Link>
                  <ul
                    style={{
                      display: `${isActive.key === 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link to="/">Home One</Link>
                    </li>
                    <li>
                      <Link to="/home-2">Home Two</Link>
                    </li>
                    <li>
                      <Link to="/home-3">Home Three</Link>
                    </li>

                    {/* Nested submenu - Header Styles */}
                    <li
                      className={
                        isActive.subMenuKey === "header"
                          ? "dropdown current-menu-item"
                          : "dropdown"
                      }
                    >
                      <Link to="">Header Styles</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey === "header" ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link to="/">Header One</Link>
                        </li>
                        <li>
                          <Link to="/home-2">Header Two</Link>
                        </li>
                        <li>
                          <Link to="/home-3">Header Three</Link>
                        </li>
                      </ul>
                      <button
                        className={
                          isActive.subMenuKey === "header" ? "expanded open" : ""
                        }
                        onClick={() => handleToggle(1, "header")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                  </ul>
                  <button
                    className={isActive.key === 1 ? "expanded open" : ""}
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                {/* About */}
                <li>
                  <Link to="/about/">About</Link>
                </li>

                {/* Services */}
                <li
                  className={
                    isActive.key === 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link to={""}>Services</Link>
                  <ul
                    style={{
                      display: `${isActive.key === 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <Link to="/international-transport">
                        International Transport
                      </Link>
                    </li>
                    <li>
                      <Link to="/track-transport">Local Track Transport</Link>
                    </li>
                    <li>
                      <Link to="/personal-delivery">
                        Fast Personal Delivery
                      </Link>
                    </li>
                    <li>
                      <Link to="/ocean-transport">Safe Ocean Transport</Link>
                    </li>
                    <li>
                      <Link to="/warehouse-facility">Warehouse Facility</Link>
                    </li>
                    <li>
                      <Link to="/emergency-transport">
                        Emergency Transport
                      </Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key === 2 ? "expanded open" : ""}
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                {/* Projects */}
                <li
                  className={
                    isActive.key === 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link to="">Projects</Link>
                  <ul
                    style={{
                      display: `${isActive.key === 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link to="/project">Projects</Link>
                    </li>
                    <li>
                      <Link to="/project-details">Project Details</Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key === 3 ? "expanded open" : ""}
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                {/* Pages */}
                <li
                  className={
                    isActive.key === 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link to="">Pages</Link>
                  <ul
                    style={{
                      display: `${isActive.key === 4 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/team-details">Team Details</Link>
                    </li>
                    <li>
                      <Link to="/testimonial">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="/404">404 Error</Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key === 4 ? "expanded open" : ""}
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                {/* Blog */}
                <li
                  className={
                    isActive.key === 5 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link to="">Blog</Link>
                  <ul
                    style={{
                      display: `${isActive.key === 5 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-standard">Blog Standard</Link>
                    </li>
                    <li>
                      <Link to="/blog-left-sidebar">Blog Left Sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blog-right-sidebar">Blog Right Sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key === 5 ? "expanded open" : ""}
                    onClick={() => handleToggle(5)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                {/* Contact */}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
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
