import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/flatbed-2.jpeg';
import ProjectDetailsMain from '../section/project-details/ProjectDetailsMain';

// Breadcrumbs Background Image

const ProjectDetails = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Project Details"
            pageName="Project Details"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <ProjectDetailsMain/>
       <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default ProjectDetails;