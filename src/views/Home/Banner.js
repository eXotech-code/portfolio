import React from 'react';
import Button from '../../components/Button';
import './Banner.scss';
import bannerImage from '../../media/banner-image.webp';

class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bannerTaglineWidth: {} };
	}

	componentDidMount() {
		const width = this.calcWidth();

		this.setState({ bannerTaglineWidth: `${width}px` });
	}

	/* Calculate width of banner tagline based on
	 * width of the buttons and their right padding. */
	calcWidth() {
		const primaryButtonWidth = this.primaryButton.sizeRef.current
			.offsetWidth;
		const outlineButtonWidth = this.outlineButton.sizeRef.current
			.offsetWidth;

		return primaryButtonWidth + outlineButtonWidth;
	}

	render() {
		return (
			<div className="banner">
				<div>
					<h1 className="banner-heading">Hello there</h1>
					{/* This text will change according to the country you"re in. */}
					<p
						className="banner-tagline"
						style={{ width: this.state.bannerTaglineWidth }}>
						I am passionate about building simple things that just
						work
					</p>
					<Button
						ref={(primaryButton) => {
							this.primaryButton = primaryButton;
						}}>
						Explore my projects
					</Button>
					<Button
						ref={(outlineButton) => {
							this.outlineButton = outlineButton;
						}}
						variant="outline">
						Contact me
					</Button>
				</div>
				<div className="banner-image-container">
					<img
						src={bannerImage}
						className="banner-image"
						alt="portfolio banner"></img>
				</div>
			</div>
		);
	}
}

export default Banner;
