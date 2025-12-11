import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import ProductDetailsMain from '../section/product-details/ProductDetailsMain';

// Breadcrumbs Background Image

const ProductDetails = ({isVisible}) => {

    return (
        <React.Fragment>

            <HeaderStyleOne />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Product Details"
                pageName="Product Details"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}
            <ProductDetailsMain />
            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );


}

export default ProductDetails;