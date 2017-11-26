// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';

const defaultProps = {};
const propTypes = {};

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer">
				<div className="footer__logo">
					Movie Comment
				</div>
        2017 WebApplication Term Project
			</footer>
		);
	}
}

Footer.defaultProps = defaultProps;
Footer.propTypes = propTypes;

export default Footer;
