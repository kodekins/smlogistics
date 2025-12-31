import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-6.jpg';
import BlogDetailsMain from '../section/blog-details/BlogDetailsMain';

// Breadcrumbs Background Image

const BlogDetails = ({isVisible}) => {
    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Blog Details"
            pageName="Blog Details"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <BlogDetailsMain/>
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default BlogDetails;