// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const defaultProps = {
	backdrop: 'Ytv7P13rbwQ3mLpCAY8lBTqI5s.jpg',
};
const propTypes = {};

class MainSlider extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { item } = this.props;
		if (!item) {
			return (
				<div className="mainSlider"/>
			);
		}
		return (
			<div className="mainSlider">
				<div className="mainSlider__bg"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2/${item.backdrop_path})`,
					}}
				/>
				<div className="mainSlider__body">
					<div className="mainSlider__body__content">
						<div className="mainSlider__body__content__left">
							<img
								className="mainSlider__body__content__left__poster"
								src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
							/>
						</div>
						<div className="mainSlider__body__content__right">
							<Header
								as='h1'
								className="mainSlider__body__content__right__title"
								size='huge'
							>
								{item.title.trim()}
								<Header.Subheader
									className="mainSlider__body__content__right__title__subtitle"
								>
									{item.original_title.trim()} | {item.release_date.slice(0, 4)}
								</Header.Subheader>
							</Header>
							<div className="mainSlider__body__content__right__overview">
								{item.overview.trim()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

MainSlider.defaultProps = defaultProps;
MainSlider.propTypes = propTypes;

export default MainSlider;
