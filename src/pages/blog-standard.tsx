import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-3.jpg';
import BlogStandardMain from '../section/blog-standard/BlogStandardMain';

// Breadcrumbs Background Image

const BlogStandard = ({isVisible}) => {
    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Blog & News"
            pageName="Blog & News"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <BlogStandardMain/>
       <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default BlogStandard;