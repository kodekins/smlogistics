import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import CartMain from '../section/cart/CartMain';

// Breadcrumbs Background Image

const Cart = ({isVisible}) => {
    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Cart"
            pageName="Cart"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <CartMain/>
       <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default Cart;