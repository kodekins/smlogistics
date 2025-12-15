import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
const navImg1 = "/start-ms-logo.png";
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import ErrorMain from '../components/Error/ErrorMain';
import FooterTwo from '../components/Footer/FooterStyleTwo';

// Breadcrumbs Background Image

const NoPage = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne
            navImg={navImg1}
            parentMenu='error'
            activeMenu="/error"
        />
        <SiteBreadcrumb
            pageTitle="404 Error"
            pageName="404 Error"
            breadcrumbsImg={bannerbg}
        />
        <ErrorMain/>
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default NoPage;