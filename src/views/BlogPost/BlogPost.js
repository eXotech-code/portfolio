import React from 'react';
import './BlogPost.scss';
import Banner from './Banner';
import SidebarShare from './SidebarShare';
import SidebarProjectInfo from './SidebarProjectInfo';
import Body from './Body';

const BlogPost = () => {
	return (
		<div>
			<Banner />
			<div className="blog-post-content">
				<SidebarShare />
				<Body />
				<SidebarProjectInfo />
			</div>
		</div>
	)
}

export default BlogPost;