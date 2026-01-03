import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/flatbed-4.jpeg';
import InternationalTransportMain from '../section/international-transport/InternationalTransportMain';



// Breadcrumbs Background Image

const InternationalTransport = ({isVisible}) => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('type') || 'ftl';
    
    const serviceData = {
        ftl: {
            title: 'FTL (Full Truckload)',
            description: 'Dedicated trucks for large shipments'
        },
        dryvan: {
            title: 'Dry Van',
            description: 'Standard enclosed trailer freight services'
        }
    };
    
    const service = serviceData[serviceType as keyof typeof serviceData] || serviceData.ftl;

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
        <InternationalTransportMain serviceType={serviceType} />
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default InternationalTransport;