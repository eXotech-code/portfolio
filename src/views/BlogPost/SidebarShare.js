import React from 'react';
import './SidebarShare.scss';
import {ReactComponent as ShareIcon} from '../../media/link.svg';
import {ReactComponent as ExportIcon} from '../../media/document-export.svg';

class SidebarElem extends React.Component {
	render() {
		return (
			<div className="blog-post-sidebar-share-elem">
				<h3 className="blog-post-sidebar-share-elem-text">{this.props.text}</h3>
				<div>
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
				<div>
					<SidebarElem text="Share this post" icon={<ShareIcon className="blog-post-sidebar-share-elem-icon"/>}/>
					<SidebarElem text="Export" icon={<ExportIcon className="blog-post-sidebar-share-elem-icon"/>}/>
				</div>
			</div>
		)
	}
}

export default SidebarShare;