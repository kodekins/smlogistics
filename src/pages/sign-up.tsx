import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import SignUpMain from '../section/sign-up/SignUpMain';

// Breadcrumbs Background Image

const SignUp = ({isVisible}) => {
    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Sign Up"
            pageName="Sign Up"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <SignUpMain/>
       <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default SignUp;