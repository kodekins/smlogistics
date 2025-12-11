import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import EmergencyTransportMain from '../section/warehouse-facility/WarehouseFacilityMain';



// Breadcrumbs Background Image

const EmergencyTransport = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Emergency Transport"
            pageName="Emergency Transport"
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