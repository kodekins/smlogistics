import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-6.jpg';
import TrackTransportMain from '../section/track-transport/TrackTransportMain';



// Breadcrumbs Background Image

const TrackTransport = ({isVisible}) => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('type') || 'ltl';
    
    const serviceData = {
        ltl: {
            title: 'LTL (Less Than Truckload)',
            description: 'Cost-effective option for smaller shipments'
        },
        dumptruck: {
            title: 'Dump Truck Services',
            description: 'Bulk material transport and delivery'
        }
    };
    
    const service = serviceData[serviceType as keyof typeof serviceData] || serviceData.ltl;

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle={service.title}
            pageName={service.title}
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <TrackTransportMain serviceType={serviceType} />
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default TrackTransport;