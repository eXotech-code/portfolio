import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/Home/Home';
import BlogPost from './views/BlogPost/BlogPost';
import { ReactComponent as MenuButton } from './media/menu-header-global.svg';
import './App.scss';

const App = () => {
		return (
			<div className="app">
				<header className="header-global">
					<p className="header-global-title">Jakub Piskiewicz</p>
					<MenuButton className="header-global-menu-button" />
				</header>
				<Switch>
					<Route path="/post">
						<BlogPost />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		);
};

export default App;
