import React from 'react';
import {Redirect} from 'react-router-dom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import {ReactComponent as RightArrow} from '../../media/arrow-right.svg'
import './Login.scss';

const Input = (props) => {
	return (
		<div>
			<label>
				{props.name}
				<input
					type={props.pass ? "password" : "text"}
					value={props.value}
					onChange={props.handler}
					name={props.name.toLowerCase()}
					placeholder={props.placeholder}
				/>
			</label>
		</div>
	)
}

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: { username: '', password: '' },
			bad: false,
			redirect: false // This is for the 'Go back' button.
		}

		// To get rid of the 'this is undefined' errors.
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirect = this.redirect.bind(this);
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
		/* Remove token as it still might be valid.
		   This is to prevent the ability of still using protected APIs
		   by unintended users.
		 */
		sessionStorage.removeItem('token');

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

	redirect() {
		this.setState({ redirect: true });
	}

	render() {
		return (
			<div className="login-form-holder">
				<div className="login-form-box">

					<div className="login-form-area">
						<h2>Please authenticate</h2>
						<p className="login-form-flavour">
							This mission is too important for me to
							allow you to jeopardize it.
						</p>
					</div>

					<div className="login-form-area">
						<Input
							name="Username"
							value={this.state.username}
							handler={this.handleChange}
							placeholder="Probably something corny"
						/>
						<Input
							pass={true}
							name="Password"
							value={this.state.password}
							handler={this.handleChange}
							placeholder="You didn't forget it, right?"
						/>
						{
							this.state.bad &&
								<p className="login-error">
									I'm sorry Dave, I'm afraid I can't do that.
								</p>
						}
					</div>

					<div className="login-form-button-area">
						<Button variant="ghost" action={this.redirect}>
							Go back
						</Button>
						{this.state.redirect && <Redirect push to={'/'} />}
						<Button action={this.handleSubmit}>
							Login
							<RightArrow />
						</Button>
					</div>

				</div>
			</div>
		)
	}
}

const Login = () => {
	return (
		<div>
			<Form />
			<Footer />
		</div>
	)
}

export default Login;