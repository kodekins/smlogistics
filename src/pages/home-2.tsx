import React from 'react';
import HomeTwoMain from '../section/HomeTwo/HomeTwoMain';
import FooterTwo from '../components/Footer/FooterStyleTwo';
import HeaderStyleTwo from '../components/Header/HeaderStyleTwo';
import BackToTop from '../components/elements/BackToTop';

interface IsVisible {
	isVisible: boolean
}
const HomeTwo = ({ isVisible }: IsVisible) => {

	return (
		<div className="body-bg-color-2">
			<React.Fragment>
				<HeaderStyleTwo />
				<HomeTwoMain />
				<BackToTop scroll={isVisible} />
				<FooterTwo />
			</React.Fragment>
		</div>
	);
}

export default HomeTwo;
