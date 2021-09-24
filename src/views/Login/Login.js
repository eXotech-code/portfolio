import React from 'react';
import Button from '../../components/Button';
import {ReactComponent as RightArrow} from '../../media/arrow-right.svg'
import Link from '../../components/Link';
import Footer from '../../components/Footer';

class Input extends React.Component {
	render() {
		return (
			<div className="input">
				<label>
					{this.props.name}
					<input type="text" value={this.props.value} onChange={this.props.handler} name={this.props.name.toLowerCase()} placeholder={this.props.placeholder} />
				</label>
			</div>
		)
	}
}

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: { username: '', password: '' },
			bad: false
		}

		// To rid of the 'this is undefined' errors.
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// Handles change on input and saves it into state.
	handleChange(e) {
		/* Set state of username or password according to
		 which field is being typed into. */
		let tempState = this.state.userInfo;

		if (e.target.name === 'username') {
			tempState.username = e.target.value;
		} else {
			tempState.password = e.target.value;
		}

		this.setState({ userInfo: tempState });
	}

	saveToken(token) {
		sessionStorage.setItem('token', token)

		this.setState({ bad: false })
	}

	loginError(err) {
		this.setState({ bad: true });

		console.log(err);
	}

	checkResponse(res) {
		if (!res.ok) {
			throw res.status;
		}

		return res.json();
	}


	/* Submits the POST request with x-www-form-urlencoded string
	   containing login info and then saves API token into sessionStorage.
	 */
	handleSubmit() {
		const content = new URLSearchParams(this.state.userInfo);

		const apiURL = '/api/admin/auth';

		// Post the form to auth API
		fetch(apiURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: content
		})
			.then(response => this.checkResponse(response))
			.then(response => this.saveToken(response.token))
			.catch(err => this.loginError(err))
	}

	render() {
		return (
			<div className="login-form-box">
				<h2>Please authenticate</h2>
				<p>This mission is too important for me to allow you to jeopardize it.</p>
					<Input
						name="Username"
					   value={this.state.username}
					   handler={this.handleChange}
					   placeholder="Probably something corny"
					/>
					<Input
						name="Password"
						value={this.state.password}
						handler={this.handleChange}
						placeholder="You didn't forget it, right?"
					/>
					<Button action={this.handleSubmit}>
						Login
						<RightArrow />
					</Button>
					<Link link="/" icon={false}>Go back</Link>
				{this.state.bad ?
					<p className="login-error">
						I'm sorry Dave, I'm afraid I can't do that.
					</p>
				: null}
			</div>
		)
	}
}

class Login extends React.Component {
	render() {
		return (
			<div>
				<div className="login-form-section">
					<Form />
				</div>
				<Footer />
			</div>
		)
	}
}

export default Login;