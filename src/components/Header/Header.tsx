import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import SearchPopup from './SearchPopup';
import Sidebar from './Sidebar';
const navLogo = "/mslogistics-logo.png";

const Header = (props) => {
    const { parentMenu, secondParentMenu, activeMenu } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        if (!isMobileMenu) {
            document.body.classList.add("mobile-menu-visible");
        } else {
            document.body.classList.remove("mobile-menu-visible");
        }
    }

    const handlePopup = () => {
        setIsPopup(!isPopup);
    }

    const handleSidebar = () => {
        setIsSidebar(!isSidebar);
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <React.Fragment>
            <header className={`main-header main-header-three ${isVisible ? "fixed-header" : ""}`}>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-header-three__top">
                                <div className="container">
                                    <div className="main-header-three__top-inner">

                                        <div className="header-contact-style1">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-phone"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p><span>Talk to Us</span> <Link to="tel:+18477891170">847-789-1170</Link></p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-email"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p><span>Mail Us</span> <Link
                                                                to="mailto:contact@starmslogistics.com">contact@starmslogistics.com</Link>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-phone"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p><span>Talk to Us</span> <Link to="tel:+18477891170">847-789-1170</Link></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-truck"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p><span>Talk to Us</span> <Link to="tel:+18477891170">847-789-1170</Link></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="main-header-three__right">
                                            <div className="main-header__language-switcher">
                                                <div className="icon">
                                                    <span className="fa fa-globe"></span>
                                                </div>

                                                <div className="language-switcher clearfix">
                                                    <form  className="clearfix">
                                                        <div className="select-box clearfix">
                                                            <select className="selectmenu wide">
                                                                <option>ENG</option>
                                                                <option>FRA</option>
                                                                <option>GER</option>
                                                                <option>BAN</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="header-social-links">
                                                <Link to="#"><span className="icon-facebook-f"></span></Link>
                                                <Link to="#"><span className="icon-twitter1"></span></Link>
                                                <Link to="#"><span className="icon-instagram"></span></Link>
                                                <Link to="#"><span className="icon-linkedin"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-header-three__bottom">
                                <div className="container">
                                    <div className="main-header-three__bottom-inner">
                                        <div className="main-header-three__bottom-left">
                                            <div className="logo-box">
                                                <Link to="/"><img src={navLogo} alt="" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }} /></Link>
                                            </div>
                                        </div>

                                        <div className="main-header-three__bottom-middle">
                                            <div className="main-header-three__menu">
                                                <div className="main-menu__main-menu-box">
                                                    <Link to="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                                    <MenuItems
                                                        parentMenu={parentMenu}
                                                        secondParentMenu={secondParentMenu}
                                                        activeMenu={activeMenu}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="main-header-three__bottom-right">
                                            <div className="header-search-box-two">
                                                <Link to="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                            </div>

                                            <div className="btn-box">
                                                <Link className="thm-btn" to="contact">Track Order
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
                        </div>
                    </div>
                </nav>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
            

            <div className={`stricky-header stricky-header--style3 stricked-menu main-menu ${isVisible ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-header-three__top">
                            <div className="container">
                                <div className="main-header-three__top-inner">

                                    <div className="header-contact-style1">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-phone"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><span>Talk to Us</span> <Link to="tel:+18477891170">847-789-1170</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-email"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><span>Mail Us</span> <Link
                                                            to="mailto:starmslogistics@gmail.com">starmslogistics@gmail.com</Link>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="main-header-three__right">
                                        <div className="main-header__language-switcher">
                                            <div className="icon">
                                                <span className="fa fa-globe"></span>
                                            </div>

                                            <div className="language-switcher clearfix">
                                                <form action="#" className="clearfix">
                                                    <div className="select-box clearfix">
                                                        <select className="selectmenu wide">
                                                            <option>ENG</option>
                                                            <option>FRA</option>
                                                            <option>GER</option>
                                                            <option>BAN</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="header-social-links">
                                            <Link to="#"><span className="icon-facebook-f"></span></Link>
                                            <Link to="#"><span className="icon-twitter1"></span></Link>
                                            <Link to="#"><span className="icon-instagram"></span></Link>
                                            <Link to="#"><span className="icon-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-three__bottom">
                            <div className="container">
                                <div className="main-header-three__bottom-inner">
                                    <div className="main-header-three__bottom-left">
                                        <div className="logo-box">
                                            <Link to="/"><img src={navLogo} alt="" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }} /></Link>
                                        </div>
                                    </div>

                                    <div className="main-header-three__bottom-middle">
                                        <div className="main-header-three__menu">
                                            <div className="main-menu__main-menu-box">
                                                <Link to="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                                <MenuItems
                                                    parentMenu={parentMenu}
                                                    secondParentMenu={secondParentMenu}
                                                    activeMenu={activeMenu}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main-header-three__bottom-right">
                                        <div className="header-search-box-two">
                                            <Link to="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                        </div>

                                        <div className="btn-box">
                                            <Link className="thm-btn" to="contact">Track Order
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
                    </div>
                </div>
            </div>{/* /.sticky-header__content */}
                </div>
            <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        </React.Fragment>
    );
}

export default Header;
