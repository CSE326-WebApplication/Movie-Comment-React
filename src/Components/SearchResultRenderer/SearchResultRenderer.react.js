// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component, PropTypes } from 'react';

const defaultProps = {
	item: null
};
const propTypes = {
	item: PropTypes.object,
};

class DefaultComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { item } = this.props;
		return (
			<div className="searchResultRenderer clear">
				<div className="searchResultRenderer__left">
					<img src={item.image}/>
				</div>
				<div className="searchResultRenderer__right">
					<h1
						className="searchResultRenderer__right__title"
						dangerouslySetInnerHTML={{ __html: item.title.trim() }}
					/>
					<h2 className="searchResultRenderer__right__subtitle"
						dangerouslySetInnerHTML={{ __html: item.subtitle.trim() }}
					/>
					<br/>
					<h2 className="searchResultRenderer__right__subtitle"
						dangerouslySetInnerHTML={{ __html: item.director.trim() }}
					/>
					<h2 className="searchResultRenderer__right__subtitle"
						dangerouslySetInnerHTML={{ __html: item.actor.trim() }}
					/>
				</div>
			</div>
		);
	}
}

DefaultComponent.defaultProps = defaultProps;
DefaultComponent.propTypes = propTypes;

export default DefaultComponent;
