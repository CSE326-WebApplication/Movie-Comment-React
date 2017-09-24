// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';

const defaultProps = {};
const propTypes = {};

class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="navigation">
				<div className="clear">
					<div className="navigation__left">
						<div className="navigation__left__logo">
							MovieComment
						</div>
					</div>
					<div className="navigation__right">
						<ul className="navigation__right__items">
							<li className="navigation__right__items__item">SignUp</li>
							<li className="navigation__right__items__item">SignIn</li>
						</ul>
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
