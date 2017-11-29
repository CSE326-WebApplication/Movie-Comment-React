// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';
import classnames from 'classnames';

const defaultProps = {};
const propTypes = {};

class Poster extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isHover: false,
		};
	}

	handleMouseEnter() {
		console.log('enter');
		this.setState({
			isHover: true,
		});
	}

	handleMouseLeave() {
		this.setState({
			isHover: false,
		})
	}

	render() {
		const { className, imagePath } = this.props;
		const { isHover } = this.state;
		return (
			<div
				className={
					classnames(
						'posterImage', className,
					)
				}
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${imagePath})`
				}}
				onMouseEnter={() => this.handleMouseEnter()}
				onMouseLeave={() => this.handleMouseLeave()}
			>
			</div>
		);
	}
}

Poster.defaultProps = defaultProps;
Poster.propTypes = propTypes;

export default Poster;
