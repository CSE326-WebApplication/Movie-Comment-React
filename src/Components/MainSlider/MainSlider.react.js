// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';

const defaultProps = {};
const propTypes = {};

class MainSlider extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mainSlider">
				<img
					className="mainSlider__slideImage"
					src={require('../../Static/Images/Slider01.jpg')}
				/>
			</div>
		);
	}
}

MainSlider.defaultProps = defaultProps;
MainSlider.propTypes = propTypes;

export default MainSlider;
