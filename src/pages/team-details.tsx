import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-2.jpg';
import TeamDetailsMain from '../section/team-details/TeamDetailsMain';


// Breadcrumbs Background Image

const TeamDetails = ({isVisible}) => {

    return (
        <React.Fragment>
        <HeaderStyleOne />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Team Details"
            pageName="Team Details"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <TeamDetailsMain/>
        <BackToTop scroll={isVisible} />
        <FooterTwo />
    </React.Fragment>
    );
}

export default TeamDetails;