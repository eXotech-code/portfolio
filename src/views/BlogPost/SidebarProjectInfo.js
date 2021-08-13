import React from 'react';
import Link from '../../components/Link';

class SidebarProjectInfo extends React.Component {
	render() {
		return (
			<div className="blog-post-sidebar-info">
				<p className="blog-post-sidebar-info-name">Featured project</p>
				<h3 className="blog-post-sidebar-info-project">
					{this.props.project}
				</h3>
				<Link>Check it out</Link>
			</div>
		)
	}
}

export default SidebarProjectInfo;