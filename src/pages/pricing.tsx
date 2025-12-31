import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-2.jpg';
import PricingMain from '../section/pricing/PricingMain';
import BrandOne from '../section/pricing/BrandOne';


// Breadcrumbs Background Image

const Pricing = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Pricing"
            pageName="Pricing"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <PricingMain/>
        <BrandOne/>
        {/*cta-section */}
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default Pricing;