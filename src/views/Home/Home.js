import React from 'react';
import Banner from './Banner';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Footer from '../../components/Footer';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { posts: []};
	}

	componentDidMount() {
		// Fetch three most recent posts from API.
		const apiURL = '/api/posts/3'

		// Fire the request with fetch method.
		fetch(apiURL)
			.then(response => response.json())
			.then(data => this.setState({ posts: data }))
			.catch(console.log)
	}

	render() {
		return (
			<div>
				<Banner />
				<About />
				<Blog posts={this.state.posts} />
				<Projects />
				<Footer />
			</div>
		)
	}
}

export default Home;