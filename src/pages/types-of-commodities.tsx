import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/sm-toc2.png';
import TypeOfCommoditiesMain from '../section/type-of-commodities/TypeOfCommoditiesMain';

const TypesOfCommodities = ({ isVisible }) => {
    return (
        <React.Fragment>
            <HeaderStyleOne />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Types of Commodities"
                pageName="Types of Commodities"
                breadcrumbsImg={bannerbg}
            />
            {/* TypeOfCommoditiesMain */}
            <TypeOfCommoditiesMain />
            
            <BackToTop scroll={isVisible} />
            <FooterTwo />
        </React.Fragment>
    );
}

export default TypesOfCommodities;

