import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../media/logo.svg';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="footer">
					<div>
						<h3 className="footer-section-title">Links</h3>
						<RouterLink className="footer-link" to="/">Home</RouterLink>
						<RouterLink className="footer-link" to="#">Projects</RouterLink>
						<RouterLink className="footer-link" to="#">Blog</RouterLink>
						<RouterLink className="footer-link" to="#">Photography</RouterLink>
						<RouterLink className="footer-link" to="#">Contact me</RouterLink>
					</div>
					<div>
						<h3 className="footer-section-title">Contact info</h3>
						<p>Jakub Piskiewicz</p>
						<p><a href="mailto:jakub@piskiewicz.org">jakub@piskiewicz.org</a></p>
						<p><a href="https://github.com/eXotech-code">https://github.com/eXotech-code</a></p>
					</div>
					<div>
						<p>
							This website’s design is based on IBM Design Language and Carbon Design System.
							Carbon is built by IBM and you can find out more about it
							<a href="https://www.carbondesignsystem.com/"> here.</a>
						</p>
						<p>
							<a href="https://www.ibm.com/design/language/">IBM Design Language website</a>
						</p>
						<p>
							Copyright © 2020 Jakub Piskiewicz
						</p>
					</div>
				</div>
				<div className="footer-end">
					<div>
						<Logo/>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;