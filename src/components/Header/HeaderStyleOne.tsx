import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import SearchPopup from './SearchPopup'; // Uncommented this, since you're using it below
import Sidebar from './Sidebar';
const navLogo = "/mslogistics-logo.png";

const HeaderStyleOne = (props) => {
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
    };

    const handlePopup = () => {
        setIsPopup(!isPopup);
    };

    const handleSidebar = () => {
        setIsSidebar(!isSidebar);
    };

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
            <header className={`main-header main-header-one ${isVisible ? "fixed-header" : ""}`}>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-header-one__inner">
                                <div className="main-header-one__top">
                                    <div className="main-header-one__top-inner">
                                        <div className="main-header-one__top-left">
                                            <div className="header-contact-style1">
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-phone" />
                                                        </div>
                                                        <div className="text-box">
                                                            <p>
                                                                <span>Talk to Us</span>{" "}
                                                                <Link to="tel:+18477891170">847-789-1170</Link>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-email" />
                                                        </div>
                                                        <div className="text-box">
                                                            <p>
                                                                <span>Mail Us</span>{" "}
                                                                <Link to="mailto:contact@starmslogistics.com">
                                                                    contact@starmslogistics.com
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-dot" />
                                                        </div>
                                                        <div className="text-box">
                                                            <p>
                                                                <span>Talk to Us</span>{"USDOT Number : "}
                                                                <Link to="tel:+18477891170">4493768</Link>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-dot" />
                                                        </div>
                                                        <div className="text-box">
                                                            <p>
                                                                <span>Talk to Us</span>{"MC Number : "}
                                                                <Link to="tel:+18477891170">1779397</Link>
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="main-header-one__top-right">
                                            <div className="header-social-links">
                                                <Link to="#"><span className="icon-whatsapp" /></Link>
                                                
                                                <Link to="#"><span className="icon-linkedin" /></Link>
                                            </div>
                                            <div className="header-search-box">
                                                <Link to="#" className="main-menu__search search-toggler" onClick={handlePopup}>
                                                    Search <i className="icon-search" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-header-one__bottom">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="main-header-one__bottom-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <div className="main-header-one__bottom-left">
                                                <div className="logo-box">
                                                    <Link to="/">
                                                        <img src={navLogo} alt="Logo" style={{ maxHeight: '80px', width: 'auto', objectFit: 'contain' }} />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="main-header-one__bottom-menu" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                                <div className="main-menu__main-menu-box">
                                                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                                        <i className="fa fa-bars" />
                                                    </div>
                                                    <ul className="main-menu__list">
                                                        <MenuItems
                                                            parentMenu={parentMenu}
                                                            secondParentMenu={secondParentMenu}
                                                            activeMenu={activeMenu}
                                                        />
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="main-header-one__bottom-right">
                                                <div className="main-header-one__bottom-right-btn">
                                                    <Link to="/contact">
                                                        Get A Quote <i className="icon-right-arrow21" />
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

                <div className={`stricky-header stricked-menu main-menu ${isVisible ? "stricky-fixed" : ""}`}>
                    <div className="sticky-header__content">
                        <nav className="main-menu">
                            <div className="main-menu__wrapper">
                                <div className="container">
                                    <div className="main-header-one__inner">
                                        <div className="main-header-one__bottom">
                                            <div className="main-menu__wrapper-inner">
                                                <div className="main-header-one__bottom-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                                    <div className="main-header-one__bottom-left">
                                                        <div className="logo-box">
                                                            <Link to="/">
                                                                <img src={navLogo} alt="Logo" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="main-header-one__bottom-menu" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                                        <div className="main-menu__main-menu-box">
                                                            <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                                                <i className="fa fa-bars" />
                                                            </div>
                                                            <ul className="main-menu__list">
                                                                <MenuItems
                                                                    parentMenu={parentMenu}
                                                                    secondParentMenu={secondParentMenu}
                                                                    activeMenu={activeMenu}
                                                                />
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="main-header-one__bottom-right">
                                                        <div className="main-header-one__bottom-right-btn">
                                                            <Link to="/contact">
                                                                Get A Quote <i className="icon-right-arrow21" />
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
                    </div>
                </div>

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>

            <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        </React.Fragment>
    );
};

export default HeaderStyleOne;
