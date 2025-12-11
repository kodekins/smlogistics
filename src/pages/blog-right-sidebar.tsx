import React  from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import BlogRightSidebarMain from '../section/blog-right-sidebar/BlogRightSidebarMain';

// Breadcrumbs Background Image

const BlogRightSidebar = ({isVisible}) => {
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
        <BlogRightSidebarMain/>
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default BlogRightSidebar;