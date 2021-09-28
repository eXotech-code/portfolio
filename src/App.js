import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/Home/Home';
import BlogPost from './views/BlogPost/BlogPost';
import Login from './views/Login/Login';
import Editor from './views/Editor/Editor';
import NotFound from './components/NotFound';
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
					<Route path="/admin">
						<Editor />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/post">
						<BlogPost />
					</Route>
					<Route path="/404">
						<NotFound />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		);
};

export default App;
