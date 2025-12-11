import React, { useEffect, useState } from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import InternationalTransportMain from '../section/international-transport/InternationalTransportMain';



// Breadcrumbs Background Image

const InternationalTransport = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="International Transport"
            pageName="International Transport"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <InternationalTransportMain/>
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default InternationalTransport;