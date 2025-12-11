import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import ContactMain from '../section/contact/ContactMain';

// Breadcrumbs Background Image

const Contact = ({ isVisible }) => {
    return (
        <React.Fragment>
            <HeaderStyleOne />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Contact"
                pageName="Contact"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}
            <ContactMain />
            {/*cta-section end */}
            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );
}

export default Contact;