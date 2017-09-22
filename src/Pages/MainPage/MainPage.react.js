
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Navigation } from '../../Components';

const defaultProps = {};
const propTypes = {};

class DefaultPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navigation/>
			</div>
		);
	}
}

DefaultPage.defaultProps = defaultProps;
DefaultPage.propTypes = propTypes;

export default DefaultPage;
