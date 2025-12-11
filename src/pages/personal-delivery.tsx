import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import PersonalDeliveryMain from '../section/personal-delivery/PersonalDeliveryMain';



// Breadcrumbs Background Image

const PersonalDelivery = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Fast Personal Delivery"
            pageName="Fast Personal Delivery"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <PersonalDeliveryMain/>
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default PersonalDelivery;