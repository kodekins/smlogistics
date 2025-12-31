import React from 'react';
import BackToTop from '../components/elements/BackToTop';
import HeaderStyleOne from '../components/Header/HeaderStyleOne';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import SiteBreadcrumb from '../components/Breadcumb';
import bannerbg from '/smlogistics-5.jpg';
import AboutOne from '../section/about/AboutOne';
import ServiceOne from '../section/about/ServiceOne';
import ProjectOne from '../section/about/ProjectOne';
import WhyChooseOne from '../section/about/WhyChooseOne';
import TestimonialOne from '../section/about/TestimonialOne';

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
      <ServiceOne />
      <ProjectOne />
      <WhyChooseOne />
      <TestimonialOne />

      <BackToTop scroll={isVisible} />
       <FooterTwo />
    </React.Fragment>
  );
};

export default About;
