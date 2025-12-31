import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/reefer-2.jpeg';
import EmergencyTransportMain from '../section/emergency-transport/EmergencyTransportMain';



// Breadcrumbs Background Image

const EmergencyTransport = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Warehouse Facility"
            pageName="Warehouse Facility"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <EmergencyTransportMain/>
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default EmergencyTransport;