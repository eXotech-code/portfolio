import React from 'react';
import './Banner.scss';

class Banner extends React.Component {
	constructor(props) {
		super(props);
		// Initialize background image to placeholder.
		this.state = {style: {backgroundImage: 'url(/media/default.webp)'}};
	}

	// If an image has been passed to this element. Render it as background.
	setBackgroundStyle() {
		if (this.props.image) {
			this.setState({style: {backgroundImage: `url(${this.props.image})`}});
		}
	}

	componentDidMount() {
		this.setBackgroundStyle();
	}

	render() {
		return (
			<div className="blog-post-banner" style={this.state.style}>
				<div>
					<p className="blog-post-banner-tagline">January 1, 1970 at 0:00</p>
					<h1 className="blog-post-banner-heading">My thoughts about Macs with M1</h1>
				</div>
			</div>
		)
	}
}

export default Banner;