// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';
import { Link } from 'react-router';

import history from '../../history';

const defaultProps = {};
const propTypes = {};

class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	handleLogoutButtonClick() {
		console.log('logout');
		localStorage.removeItem('token');
		history.push('/');
	}

	renderRightItems() {
		const { isLogin, user } = this.props;
		if (isLogin) {
			// When it is logged in
			return (
				<ul className="navigation__right__items">
					<li className="navigation__right__items__item">
						{ user.username }
					</li>
					<li className="navigation__right__items__item">
						<Link to="/" onClick={ () => this.handleLogoutButtonClick() }>Logout</Link>
					</li>
				</ul>
			);
		} else {
			// When it is logged out
			return (
				<ul className="navigation__right__items">
					<li className="navigation__right__items__item">
						<Link to="/signup">SignUp</Link>
					</li>
					<li className="navigation__right__items__item">
						<Link to="/signin">SignIn</Link>
					</li>
				</ul>
			);
		}
	}

	render() {
		return (
			<div className="navigation">
				<div className="clear">
					<div className="navigation__left">
						<div className="navigation__left__logo">
							<Link to="/">MovieComment</Link>
						</div>
					</div>
					<div className="navigation__right">
						{ this.renderRightItems() }
					</div>
				</div>
				<div className="navigation__body">
					<h1 className="navigation__body__title">당신의 영화를 검색하세요</h1>
					{this.props.children}
				</div>
			</div>
		);
	}
}

Navigation.defaultProps = defaultProps;
Navigation.propTypes = propTypes;

export default Navigation;
