// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';

import { Poster } from '../';

const defaultProps = {};
const propTypes = {};

class BoxOffice extends Component {
	constructor(props) {
		super(props);
	}

	renderPosterImages(boxOffices) {
		return (
			<div className="boxOffice__posters">
				{
					boxOffices.results.slice(0, 3).map((movie, i) => {
						return (
							<div
								className="boxOffice__posters__item"
								key={i}
							>
								<Poster
									className="boxOffice__posters__item__posterImg"
									imagePath={movie.poster_path}
									movieId={movie.id}
								/>
							</div>
						);
					})
				}
				<br />
				{
					boxOffices.results.slice(3, 6).map((movie, i) => {
						return (
							<div
								className="boxOffice__posters__item"
								key={i}

							>
								<Poster
									className="boxOffice__posters__item__posterImg"
									imagePath={movie.poster_path}
									movieId={movie.id}
								/>
							</div>
						);
					})
				}
			</div>
		);
	}

	render() {
		const { boxOffices } = this.props;

		return (
			<div className="boxOffice">
				<div className="boxOffice__title">
					Today's Box Office
				</div>
				{ boxOffices && this.renderPosterImages(boxOffices) }
			</div>
		);
	}
}

BoxOffice.defaultProps = defaultProps;
BoxOffice.propTypes = propTypes;

export default BoxOffice;
