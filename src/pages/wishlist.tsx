import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import WishlistMain from '../section/wishlist/WishlistMain';

// Breadcrumbs Background Image

const Wishlist = ({isVisible}) => {
    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Wishlist"
            pageName="Wishlist"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <WishlistMain/>
       <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default Wishlist;