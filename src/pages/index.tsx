
import React from 'react';
import HomeMain from '../section/HomeOne/HomeMain';
import FooterStyleOne from '../components/Footer/FooterStyleOne';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import BackToTop from '../components/elements/BackToTop';

interface IsVisible {
    isVisible: boolean
}

const HomeOne = ({ isVisible }: IsVisible) => {
    return (
        <React.Fragment>
            <HeaderStyleOne />
            <HomeMain />
            <BackToTop scroll={isVisible} />
            <FooterStyleOne />
        </React.Fragment>
    );
}

export default HomeOne;
