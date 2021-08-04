import React from 'react';
import { ReactComponent as MenuButton } from './media/menu-header-global.svg';
import Banner from './Banner';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import './App.scss';

const App = () => {
	return (
		<div className="app">
			<header className="header-global">
				<p className="header-global-title">Jakub Piskiewicz</p>
				<MenuButton className="header-global-menu-button" />
			</header>
			<Banner />
			<About />
			<Blog />
			<Projects />
		</div>
	);
};

export default App;
