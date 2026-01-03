import React  from 'react';
import { useSearchParams } from 'react-router-dom';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-2.jpg';
import PersonalDeliveryMain from '../section/personal-delivery/PersonalDeliveryMain';



// Breadcrumbs Background Image

const PersonalDelivery = ({isVisible}) => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('type') || 'interstate';
    
    const serviceData = {
        interstate: {
            title: 'Interstate Transport',
            description: 'Efficient trucking services across states'
        },
        oversized: {
            title: 'Oversize/Overweight Transport',
            description: 'Specialized hauling for oversized loads'
        }
    };
    
    const service = serviceData[serviceType as keyof typeof serviceData] || serviceData.interstate;

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
        <PersonalDeliveryMain serviceType={serviceType} />
        
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default PersonalDelivery;