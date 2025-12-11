import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import TestimonialsMain from '../section/testimonial/TestimonialsMain';


// Breadcrumbs Background Image

const Testimonials = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Testimonial"
            pageName="Testimonial"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <TestimonialsMain/>

        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default Testimonials;