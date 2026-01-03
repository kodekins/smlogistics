import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/reefer-4.jpeg';
import OceanTransportMain from '../section/ocean-transport/OceanTransportMain';
import type { IsVisible } from '../types/tiny-slider';



// Breadcrumbs Background Image

const OceanTransport = ({ isVisible }: IsVisible) => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('type') || 'reefer';
    
    const serviceData = {
        reefer: {
            title: 'Reefer Transport',
            description: 'Temperature-controlled shipments for perishables'
        },
        container: {
            title: 'Container Drayage',
            description: 'Port-to-warehouse container transport services'
        }
    };
    
    const service = serviceData[serviceType as keyof typeof serviceData] || serviceData.reefer;

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
            <OceanTransportMain serviceType={serviceType} />

            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );
}

export default OceanTransport;