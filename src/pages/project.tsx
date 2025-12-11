import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import ProjectMain from '../section/project/ProjectMain';
import type { IsVisible } from '../types/tiny-slider';

// Breadcrumbs Background Image

const Project = ({ isVisible }: IsVisible) => {

    return (
        <React.Fragment>
            <HeaderStyleOne />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Project"
                pageName="Project"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}
            <ProjectMain />
            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );
}

export default Project;