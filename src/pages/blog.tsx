import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-1.jpg';
import BlogMain from '../section/blog/BlogMain';

// Breadcrumbs Background Image

const Blog = ({isVisible}) => {
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
            <BlogMain />
            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );
}

export default Blog;