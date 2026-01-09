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
    const serviceType = searchParams.get('type') || 'ltl';
    
    const serviceData = {
        ltl: {
            title: 'LTL (Less Than Truckload)',
            description: 'Cost-effective option for smaller shipments'
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
        <EmergencyTransportMain serviceType={serviceType} />
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default EmergencyTransport;