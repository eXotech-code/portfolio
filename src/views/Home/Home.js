import React from 'react';
import Banner from './Banner';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';

const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Blog />
			<Projects />
		</div>
	)
};

export default Home;