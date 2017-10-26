// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';
import { Link } from 'react-router';
import history from '../../history';

import { connect } from 'react-redux';

import * as AuthActionCreator from '../../ActionCreators/AuthActionCreator';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = () => {
	return {};
};

class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	handleLogoutButtonClick() {
		localStorage.removeItem('token');
		this.props.dispatch(AuthActionCreator.logout());
		history.push('/');
	}

	renderRightItems() {
		const { isLogin, user } = this.props;
		if (isLogin) {
			// When it is logged in
			return (
				<ul className="navigation__top__right__items">
					<li className="navigation__top__right__items__item">
						{ user.username }
					</li>
					<li className="navigation__top__right__items__item">
						<Link to="/" onClick={ () => this.handleLogoutButtonClick() }>Logout</Link>
					</li>
				</ul>
			);
		} else {
			// When it is logged out
			return (
				<ul className="navigation__top__right__items">
					<li className="navigation__top__right__items__item">
						<Link to="/signup">SignUp</Link>
					</li>
					<li className="navigation__top__right__items__item">
						<Link to="/signin">SignIn</Link>
					</li>
				</ul>
			);
		}
	}

	render() {
		return (
			<div className="navigation">
				<div className="navigation__top clear">
					<div className="navigation__top__left">
						<div className="navigation__top__left__logo">
							<Link to="/">Movie Comment</Link>
						</div>
					</div>
					<div className="navigation__top__right">
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

export default Navigation = connect(mapStateToProps)(Navigation);
