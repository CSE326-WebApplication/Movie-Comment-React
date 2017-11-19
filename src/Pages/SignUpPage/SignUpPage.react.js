
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import history from '../../history';

import { connect } from 'react-redux';

import { Button, Form, Header, Message } from 'semantic-ui-react';
import { Navigation } from '../../Components';

import * as AuthActionCreator from '../../ActionCreators/AuthActionCreator';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
	return {
		isLogin: state.authReducer.isLogin,
	};
};

class SignUpPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: null,
			validUsername: false,
			validId: false,
			validPassword: false,
		};
	}

	componentWillMount() {
		const token = localStorage.getItem('token');
		if (token) {
			history.replace('/');
		}
	}

	handleLoginButtonClick() {
		const { username, id, pw } = this.state;
		new Promise(resolve => {
			this.props.dispatch(AuthActionCreator.signup({
				username: username,
				userId: id,
				password: pw,
			}, resolve));
		}).then(() => {
			const token = localStorage.getItem('token');
			if (token) {
				this.props.dispatch(AuthActionCreator.auth(token));
			}
			history.replace('/');
		});
	}

	handleSignupButtonClick() {
		const { id, pw } = this.state;
		this.props.dispatch(AuthActionCreator.signup(id, pw));
	}

	handleInputChange(event, data, type) {
		if (type === 'USERNAME') {
			this.setState({
				username: data.value,
				validUsername: !!data.value.match(/^[0-9a-zA-Z]{4,16}$/)
			});
		} else if (type === 'ID') {
			// Initialize timer
			if (this.state.timer) clearTimeout(this.state.timer);

			// Check duplicated userId from the server every .5sec
			this.setState({
				id: data.value,
			}, () => {
				const timer = setTimeout(() => {
					AuthActionCreator.checkDuplicatedUserId(this.state.id).then(res => {
						this.setState({
							isUserIdDuplicated: res.data,
							validId: !!data.value.match(/^[0-9a-zA-Z]{4,16}$/)
						});
					});
				}, 500);

				this.setState({
					timer: timer,
				});
			});
		} else if (type === 'PW') {
			this.setState({
				pw: data.value,
				validPassword: !!data.value.match(/^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/)
			});
		}
	}

	render() {
		const {
			validUsername,
			validId,
			validPassword,
			isUserIdDuplicated,
		} = this.state;

		const enableSubmitButton = validUsername && validId && validPassword && !isUserIdDuplicated;
		console.log(enableSubmitButton);

		return (
			<div className="signUpPage">
				<Navigation/>
				<div
					className="signUpPage__body"
					style={{
						backgroundImage: `url(${require('../../Static/Images/theater.jpg')})`,
					}}
				>
					<Form
						error={isUserIdDuplicated}
						className="signUpPage__body__form"
					>
						<Header
							as='h2'
							className="signUpPage__body__form__header"
							content='Sign Up'
							subheader='당신을 위한 영화 평점 서비스에 회원가입하세요.'
						/>
						<Form.Input
							label="Username"
							placeholder='Username'
							size='large'
							fluid={true}
							error={!validUsername}
							onChange={
								(event, data) => this.handleInputChange(event, data, 'USERNAME')
							}
						/>
						<Form.Input
							label="ID"
							placeholder='ID'
							size='large'
							fluid={true}
							error={!validId || isUserIdDuplicated}
							onChange={
								(event, data) => this.handleInputChange(event, data, 'ID')
							}
						/>
						<Form.Input
							label="Password"
							placeholder='Password'
							size='large'
							fluid={true}
							type='password'
							error={!validPassword}
							onChange={
								(event, data) => this.handleInputChange(event, data, 'PW')
							}
						/>
						<Message
							error
							header='아이디 중복 에러'
							content='중복된 아이디입니다. 다른 아이디를 입력하세요'
						/>
						<div className="signUpPage__body__form__footer">
							<Button
								primary
								fluid
								disabled={!enableSubmitButton}
								onClick={() => this.handleLoginButtonClick()}
							>
								SIGN UP
							</Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

SignUpPage.defaultProps = defaultProps;
SignUpPage.propTypes = propTypes;

export default SignUpPage = connect(mapStateToProps)(SignUpPage);
