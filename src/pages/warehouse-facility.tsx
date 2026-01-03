import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/dumptrucks-3.jpeg';
import EmergencyTransportMain from '../section/warehouse-facility/WarehouseFacilityMain';



// Breadcrumbs Background Image

const EmergencyTransport = ({isVisible}) => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('type') || 'intrastate';
    
    const serviceData = {
        intrastate: {
            title: 'Intrastate Transport',
            description: 'Reliable local and statewide deliveries'
        },
        warehousing: {
            title: 'Warehousing & Storage',
            description: 'Secure storage and distribution facilities'
        }
    };
    
    const service = serviceData[serviceType as keyof typeof serviceData] || serviceData.intrastate;

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