import React, { useEffect, useState } from 'react';
import HomeThreeMain from '../section/home-3/HomeThreeMain';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import BackToTop from '../components/elements/BackToTop';
import Header from '../components/Header/Header';

const HomeThree = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		if (scrollTop > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className="homestyle2">
			<React.Fragment>
				<Header />
				<HomeThreeMain />
				<BackToTop scroll={isVisible} />
				<FooterTwo />
			</React.Fragment>
		</div>
	);
}

export default HomeThree;
