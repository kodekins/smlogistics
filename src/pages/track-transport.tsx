import React, { useEffect, useState } from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-6.jpg';
import TrackTransportMain from '../section/track-transport/TrackTransportMain';



// Breadcrumbs Background Image

const TrackTransport = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Local Track Transport"
            pageName="Local Track Transport"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <TrackTransportMain/>
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default TrackTransport;