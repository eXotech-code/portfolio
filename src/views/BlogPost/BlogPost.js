import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import './BlogPost.scss';
import Banner from './Banner';
import SidebarShare from './SidebarShare';
import SidebarProjectInfo from './SidebarProjectInfo';
import Body from './Body';

const BlogPost = () => {
	// Extract the content of the blog post from React Router.
	const location = useLocation();
	const { data } = location.state;

	if (!data.content) {
		return (
			<Redirect to="/404" />
		)
	}

	return (
		<div>
			<Banner />
			<div className="blog-post-content">
				<SidebarShare />
				<Body content={data.content}/>
				<SidebarProjectInfo />
			</div>
		</div>
	)
}

export default BlogPost;