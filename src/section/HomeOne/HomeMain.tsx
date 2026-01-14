import React from 'react';
import Banner from "./Banner"
import About from "./About"
import ServicesOne from './ServicesOne';
import WhyChooseOne from './WhyChooseOne';
import SkillOne from './SkillOne';
import TestimonialOne from './TestimonialOne';
import FaqOne from './FaqOne';
import CTAOne from './CTAOne';
import CTABrokering from './CTABrokering';
import CounterOne from './CounterOne';
import TeamOne from './TeamOne';
import BrandOne from './BrandOne';
import FeaturesTwo from './FeaturesTwo ';

const HomeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			<About />
			<ServicesOne />
			<WhyChooseOne />
			<SkillOne />
			
			
			<FaqOne />
			<CTAOne />
			<CounterOne />
			<TeamOne />
			<FeaturesTwo />
			<CTABrokering />
			
		</React.Fragment>
	);
}

export default HomeMain;