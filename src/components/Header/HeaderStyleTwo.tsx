import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import SearchPopup from './SearchPopup';
import Sidebar from './Sidebar';
const navLogo = "/mslogistics-logo.png";

const HeaderStyleTwo = (props) => {
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
            <header className={`main-header main-header-two ${isVisible ? "fixed-header" : ""}`}>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-header-two__inner">
                                    
                                        <Link to="/"><img src={navLogo} alt="" style={{ maxHeight: '70px', width: 'auto', objectFit: 'contain' }} /></Link>
                                    

                                    <div className="main-header-two__top">
                                        <div className="main-header-two__top-inner">
                                            <div className="main-header-two__top-left">
                                                <div className="header-contact-style2">
                                                    <ul>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-clock"></span>
                                                            </div>

                                                            <div className="text-box">
                                                                <p className="text1">Opening Hours</p>
                                                                <p className="text2">Mon - Sat: 8am - 5pm</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-email"></span>
                                                            </div>

                                                            <div className="text-box">
                                                                <p className="text1">Send Us Mail</p>
                                                                <p className="text2"><Link
                                                                        to="mailto:Contact@starmslogistics.com">Contact@starmslogistics.com</Link>
                                                                </p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-phone2"></span>
                                                            </div>

                                                            <div className="text-box">
                                                                <p className="text1">Make A Call</p>
                                                                <p className="text2"><Link to="tel:+18477891170">847-789-1170</Link></p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="main-header-two__top-right">
                                                <div className="header-social-link-style2">
                                                    <div className="title-box">
                                                        <p>Follow Us On:</p>
                                                    </div>
                                                    <ul>
                                                        <li><Link to="#"><span className="icon-facebook-f"></span></Link></li>
                                                        <li><Link to="#"><span className="icon-instagram"></span></Link></li>
                                                        <li><Link to="#"><span className="icon-twitter1"></span></Link></li>
                                                        <li><Link to="#"><span className="icon-linkedin"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main-header-two__bottom">
                                        <div className="shape1"></div>
                                        <div className="main-header-two__bottom-inner">

                                            <div className="main-header-two__bottom-left">
                                                <div className="main-header-two__menu">
                                                    <div className="main-menu__main-menu-box">
                                                        <Link to="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i
                                                                className="fa fa-bars"></i></Link>
                                                        <MenuItems
                                                            parentMenu={parentMenu}
                                                            secondParentMenu={secondParentMenu}
                                                            activeMenu={activeMenu}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="main-header-two__bottom-right">
                                                <div className="header-search-box-two">
                                                    <Link to="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                                </div>


                                                <div className="sidebar-icon">
                                                    <Link className="navSidebar-button icon2" to="#" onClick={handleSidebar}>
                                                        <span className="nav-sidebar-menu-1"></span>
                                                        <span className="nav-sidebar-menu-2"></span>
                                                        <span className="nav-sidebar-menu-3"></span>
                                                    </Link>
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
                    </div>
                </nav>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
                    <div className={`stricky-header stricky-header--style2 stricked-menu main-menu ${isVisible ? "stricky-fixed" : ""}`}>
                        <div className="sticky-header__content">
                            <div className="main-menu__wrapper">
                                <div className="container">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="main-header-two__inner">
                                            <div className="logo-box-two">
                                                 <Link to="/"><img src={navLogo} alt="" style={{ maxHeight: '100px', width: 'auto', objectFit: 'contain' }} /></Link>
                                            </div>

                                            <div className="main-header-two__top">
                                                <div className="main-header-two__top-inner">
                                                    <div className="main-header-two__top-left">
                                                        <div className="header-contact-style2">
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <span className="icon-clock"></span>
                                                                    </div>

                                                                    <div className="text-box">
                                                                        <p className="text1">Opening Hours</p>
                                                                        <p className="text2">Mon - Sat: 8am - 5pm</p>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="icon">
                                                                        <span className="icon-email"></span>
                                                                    </div>

                                                                    <div className="text-box">
                                                                        <p className="text1">Send Us Mail</p>
                                                                        <p className="text2"><Link
                                                                                to="mailto:Contact@starmslogistics.com">Contact@starmslogistics.com</Link>
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="icon">
                                                                        <span className="icon-phone2"></span>
                                                                    </div>

                                                                    <div className="text-box">
                                                                        <p className="text1">Make A Call</p>
                                                                        <p className="text2"><Link to="tel:+18477891170">847-789-1170</Link></p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="main-header-two__top-right">
                                                        <div className="header-social-link-style2">
                                                            <div className="title-box">
                                                                <p>Follow Us On:</p>
                                                            </div>
                                                            <ul>
                                                                <li><Link to="#"><span className="icon-facebook-f"></span></Link></li>
                                                                <li><Link to="#"><span className="icon-instagram"></span></Link></li>
                                                                <li><Link to="#"><span className="icon-twitter1"></span></Link></li>
                                                                <li><Link to="#"><span className="icon-linkedin"></span></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="main-header-two__bottom">
                                                <div className="shape1"></div>
                                                <div className="main-header-two__bottom-inner">

                                                    <div className="main-header-two__bottom-left">
                                                        <div className="main-header-two__menu">
                                                            <div className="main-menu__main-menu-box">
                                                                <Link to="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i
                                                                        className="fa fa-bars"></i></Link>
                                                                <MenuItems
                                                                    parentMenu={parentMenu}
                                                                    secondParentMenu={secondParentMenu}
                                                                    activeMenu={activeMenu}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="main-header-two__bottom-right">
                                                        <div className="header-search-box-two">
                                                            <Link to="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                                        </div>


                                                        <div className="sidebar-icon">
                                                            <Link className="navSidebar-button icon2" to="#" onClick={handleSidebar}>
                                                                <span className="nav-sidebar-menu-1"></span>
                                                                <span className="nav-sidebar-menu-2"></span>
                                                                <span className="nav-sidebar-menu-3"></span>
                                                            </Link>
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
                            </div>
                        </div>{/* /.sticky-header__content */}
                    </div>{/* /.stricky-header */}
            <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        </React.Fragment>
    );
}

export default HeaderStyleTwo;
