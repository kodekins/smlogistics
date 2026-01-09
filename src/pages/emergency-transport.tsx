import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/reefer-2.jpeg';
import EmergencyTransportMain from '../section/emergency-transport/EmergencyTransportMain';



// Breadcrumbs Background Image

const EmergencyTransport = ({isVisible}) => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('type') || 'flatbed';
    
    const serviceData = {
        flatbed: {
            title: 'Flatbed Transport',
            description: 'Open trailer transport for large cargo'
        }
    };
    
    const service = serviceData[serviceType as keyof typeof serviceData] || serviceData.flatbed;

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
        <EmergencyTransportMain serviceType={serviceType} />
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default EmergencyTransport;