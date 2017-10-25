// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';

import * as CommentActionCreator from '../../ActionCreators/CommentActionCreator';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
	return {
		isLogin: state.authReducer.isLogin,
		user: state.authReducer.user,
		commentsList: state.movieReducer.commentsList,
	};
};

class MainSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentValue: '',
		};
	}

	handleSubmitReviewButtonClick() {
		const { user, movie } = this.props;
		this.props.dispatch(CommentActionCreator.createComment(user._id, movie.id, this.state.commentValue));
	}

	handleReivewTextAreaChange(e) {
		this.setState({
			commentValue: e.target.value,
		});
	}

	renderReviewComment() {
		return (
			<div className="mainSlider__body__content__right__review">
				<textarea
					value={this.state.commentValue}
					onChange={e => this.handleReivewTextAreaChange(e)}
				>
				</textarea>
				<Button
					onClick={() => this.handleSubmitReviewButtonClick()}
				>
					Click Here
				</Button>
			</div>
		);
	}

	render() {
		const { isLogin, movie } = this.props;
		if (!movie) {
			return (
				<div className="mainSlider"/>
			);
		}
		return (
			<div className="mainSlider clear">
				<div className="mainSlider__bg"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2/${movie.backdrop_path})`,
					}}
				/>
				<div className="mainSlider__body">
					<div className="mainSlider__body__content">
						<div className="mainSlider__body__content__left">
							<img
								className="mainSlider__body__content__left__poster"
								src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
							/>
						</div>
						<div className="mainSlider__body__content__right">
							<Header
								as='h1'
								className="mainSlider__body__content__right__title"
								size='huge'
							>
								{movie.title.trim()}
								<Header.Subheader
									className="mainSlider__body__content__right__title__subtitle"
								>
									{movie.original_title.trim()} | {movie.release_date.slice(0, 4)}
								</Header.Subheader>
							</Header>
							<div className="mainSlider__body__content__right__overview">
								{movie.overview.trim()}
							</div>
							{ isLogin && this.renderReviewComment() }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

MainSlider.defaultProps = defaultProps;
MainSlider.propTypes = propTypes;

export default MainSlider = connect(mapStateToProps)(MainSlider);
