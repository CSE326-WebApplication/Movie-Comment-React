
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import history from '../../history';

import { connect } from 'react-redux';

import { Button, Input, Header } from 'semantic-ui-react';
import { Footer, Navigation } from '../../Components';

import * as AuthActionCreator from '../../ActionCreators/AuthActionCreator';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
	return {
		isLogin: state.authReducer.isLogin,
		signinResult: state.authReducer.signinResult,
	};
};

class LoginPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const token = localStorage.getItem('token');
		if (token) {
			history.replace('/');
		}
	}

	handleLoginButtonClick() {
		const { id, pw } = this.state;
		new Promise(resolve => {
			this.props.dispatch(AuthActionCreator.signin(id, pw, resolve));
		}).then(() => {
			const { signinResult } = this.props;
			const token = localStorage.getItem('token');
			if (token) {
				this.props.dispatch(AuthActionCreator.auth(token));
				history.goBack();
			} else {
				if (signinResult.message.includes("Wrong password")) {
					alert("비밀번호가 틀렸습니다.");
				} else if (signinResult.message.includes("Can't find userId")) {
					alert("일치하는 회원이 없습니다.");
				}
			}
		});
	}

	handleInputChange(event, data, type) {
		if (type === 'ID') {
			this.setState({
				id: data.value,
			});
		} else if (type === 'PW') {
			this.setState({
				pw: data.value,
			});
		}
	}

	render() {
		return (
			<div className="loginPage">
				<Navigation/>
				<div
					className="loginPage__body"
					style={{
						backgroundImage: `url(${require('../../Static/Images/theater.jpg')})`,
					}}
				>

					<div className="loginPage__body__form">
						<Header
							as='h2'
							className="loginPage__body__form__header"
							content='Sign In'
							subheader='당신을 위한 영화 평점 서비스에 로그인해주세요.'
						/>
						<Input
							icon='user'
							iconPosition='left'
							placeholder='ID'
							size='large'
							fluid={true}
							onChange={
								(event, data) => this.handleInputChange(event, data, 'ID')
							}
						/>
						<Input
							icon='protect'
							iconPosition='left'
							placeholder='Password'
							size='large'
							fluid={true}
							type='password'
							onChange={
								(event, data) => this.handleInputChange(event, data, 'PW')
							}
						/>
						<div className="loginPage__body__form__footer">
							<Button
								primary
								fluid
								onClick={() => this.handleLoginButtonClick()}
							>
								SIGN IN
							</Button>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;

export default LoginPage = connect(mapStateToProps)(LoginPage);
