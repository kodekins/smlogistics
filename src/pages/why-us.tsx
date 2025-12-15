import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import WhyUs from '../section/about/WhyUs';

interface Props {
  isVisible: boolean;
}

const WhyUsPage: React.FC<Props> = ({ isVisible }) => {
  return (
    <>
      <HeaderStyleOne />

      <SiteBreadcrumb pageTitle="Why Us" pageName="Why Us" breadcrumbsImg={bannerbg} />

      <WhyUs />

      <BackToTop scroll={isVisible} />
      <FooterTwo />
    </>
  );
};

export default WhyUsPage;
