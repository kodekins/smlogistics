import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import ProductsMain from '../section/products/ProductsMain';

// Breadcrumbs Background Image

const Products = ({isVisible}) => {

    return (
        <React.Fragment>
            <HeaderStyleOne />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Products"
                pageName="Products"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}
            <ProductsMain />
            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );
}

export default Products;