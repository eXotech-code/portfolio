import React from 'react';
import Banner from './Banner';
import SidebarShare from './SidebarShare';
import SidebarProjectInfo from './SidebarProjectInfo';
import Body from './Body';

const BlogPost = () => {
	return (
		<div>
			<Banner />
			<SidebarShare />
			<SidebarProjectInfo />
			<Body />
		</div>
	)
}

export default BlogPost;