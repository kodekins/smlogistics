import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import OceanTransportMain from '../section/ocean-transport/OceanTransportMain';
import type { IsVisible } from '../types/tiny-slider';



// Breadcrumbs Background Image

const OceanTransport = ({ isVisible }: IsVisible) => {

    return (
        <React.Fragment>
            <HeaderStyleOne />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Safe Ocean Transport"
                pageName="Safe Ocean Transport"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}
            <OceanTransportMain />

            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );
}

export default OceanTransport;