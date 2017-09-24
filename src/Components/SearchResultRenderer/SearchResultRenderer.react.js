// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component, PropTypes } from 'react';
import { Header } from 'semantic-ui-react';

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
					<img
						className="searchResultRenderer__left__poster"
						src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
					/>
				</div>
				<div className="searchResultRenderer__right">
					<Header as='h1'
						className="searchResultRenderer__right__title"
					>
						{item.title.trim()}
						<Header.Subheader>
							{item.original_title.trim()}
						</Header.Subheader>
					</Header>
				<p className="searchResultRenderer__right__overview"
						dangerouslySetInnerHTML={{ __html: item.overview.trim() }}
					/>
					<br/>
				</div>
			</div>
		);
	}
}

DefaultComponent.defaultProps = defaultProps;
DefaultComponent.propTypes = propTypes;

export default DefaultComponent;
