import React from 'react';
import './SidebarProjectInfo.scss';
import Link from '../../components/Link';

class SidebarProjectInfo extends React.Component {
	render() {
		return (
			<div className="blog-post-sidebar-info">
				<div>
					<p className="blog-post-sidebar-info-name">Featured project</p>
					<h3>
						{this.props.project ? this.props.project : 'ERROR: Project ID could not be found.'}
					</h3>
					<Link>Check it out</Link>
				</div>
			</div>
		)
	}
}

export default SidebarProjectInfo;