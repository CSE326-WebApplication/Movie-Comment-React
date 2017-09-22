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
			<div className="navigation clear">
				<div className="navigation__left">
					<div className="navigation__left__logo">
						MovieComment
					</div>
				</div>
				<div className="navigation__right">
					<ul className="navigation__right__items">
						<li className="navigation__right__items__item">Menu</li>
						<li className="navigation__right__items__item">Menu</li>
						<li className="navigation__right__items__item">Menu</li>
					</ul>
				</div>
			</div>
		);
	}
}

Navigation.defaultProps = defaultProps;
Navigation.propTypes = propTypes;

export default Navigation;
