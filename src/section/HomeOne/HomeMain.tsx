import React from 'react';
import Banner from "./Banner"
import About from "./About"
import ServicesOne from './ServicesOne';
import ProjectOne from './ProjectOne';
import WhyChooseOne from './WhyChooseOne';
import SkillOne from './SkillOne';
import TestimonialOne from './TestimonialOne';
import FaqOne from './FaqOne';
import CTAOne from './CTAOne';
import CounterOne from './CounterOne';
import TeamOne from './TeamOne';
import BrandOne from './BrandOne';
import FeaturesTwo from './FeaturesTwo ';
import Blog from './Blog';

const HomeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			<About />
			<ServicesOne />
			<ProjectOne />
			<WhyChooseOne />
			<SkillOne />
			<TestimonialOne />
			<FaqOne />
			<CTAOne />
			<CounterOne />
			<TeamOne />
			<FeaturesTwo />
			<Blog />
			<BrandOne />
		</React.Fragment>
	);
}

export default HomeMain;