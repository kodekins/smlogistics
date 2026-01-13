import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/ms-about2.png';
import AboutOne from '../section/about/AboutOne';
import ServicesOne from '../section/HomeOne/ServicesOne';
import WhyChooseOne from '../section/about/WhyChooseOne';

// 🔹 Props type
interface AboutProps {
  isVisible: boolean;
}

const About: React.FC<AboutProps> = ({ isVisible }) => {
  return (
    <React.Fragment>
      <HeaderStyleOne />
      {/* SiteBreadcrumb */}
      <SiteBreadcrumb
        pageTitle="About US"
        pageName="About US"
        breadcrumbsImg={bannerbg}
      />
      {/* SiteBreadcrumb */}
      <AboutOne />
      <ServicesOne />
      <WhyChooseOne />

      <BackToTop scroll={isVisible} />
       <FooterTwo />
    </React.Fragment>
  );
};

export default About;
