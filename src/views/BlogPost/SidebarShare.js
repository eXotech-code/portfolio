import React from 'react';
import {ReactComponent as ShareIcon} from '../../media/link.svg';
import {ReactComponent as ExportIcon} from '../../media/document-export.svg';

class SidebarElem extends React.Component {
	render() {
		return (
			<div className="blog-post-sidebar-share-elem">
				<h3 className="blog-post-sidebar-share-elem-text">{this.props.text}</h3>
				<div className="blog-post-sidebar-share-elem-icon-holder">
					{this.props.icon}
				</div>
			</div>
		)
	}
}

class SidebarShare extends React.Component {
	render() {
		return (
			<div className="blog-post-sidebar-share">
				<SidebarElem text="Share this post" icon={ShareIcon}/>
				<SidebarElem text="Export" icon={ExportIcon}/>
			</div>
		)
	}
}

export default SidebarShare;