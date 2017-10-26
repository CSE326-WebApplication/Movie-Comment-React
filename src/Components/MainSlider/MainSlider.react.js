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
		movieScore: state.movieReducer.movieScore,
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
		new Promise(resolve => {
			this.props.dispatch(CommentActionCreator.createComment(user._id, movie.id, this.state.commentValue, resolve));
		}).then(() => {
			this.props.dispatch(CommentActionCreator.getMovieCommentList(movie.id));
			this.props.dispatch(CommentActionCreator.getScore(movie.id));
		});
	}

	handleReivewTextAreaChange(e) {
		this.setState({
			commentValue: e.target.value,
		});
	}

	renderMovieScore() {
		const { movieScore } = this.props;

		return (
			<div className="mainSlider__body__content__right__score">
				<h2 className="mainSlider__body__content__right__score__header">
					영화 평점
				</h2>
				<div className="mainSlider__body__content__right__score__body">
					{
						movieScore.commentCount !== 0 ?
						movieScore.avgScore.toFixed(2) :
						'None'
					}
				</div>
			</div>
		);
	}
	renderReviewComment() {
		return (
			<div className="mainSlider__body__content__right__review">
				<h2 className="mainSlider__body__content__right__review__header">
					댓글
				</h2>
				<textarea
					value={this.state.commentValue}
					onChange={e => this.handleReivewTextAreaChange(e)}
					placeholder='이 영화에 대한 생각을 자유롭게 작성해주세요.'
				>
				</textarea>
				<Button
					primary
					onClick={() => this.handleSubmitReviewButtonClick()}
				>
					댓글 남기기
				</Button>
			</div>
		);
	}

	render() {
		const { isLogin, movie, movieScore } = this.props;
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
								{ movie.title.trim() }
								<Header.Subheader
									className="mainSlider__body__content__right__title__subtitle"
								>
									{ movie.original_title.trim()} | {movie.release_date.slice(0, 4) }
								</Header.Subheader>
							</Header>
							<p className="mainSlider__body__content__right__overview">
								{ movie.overview.trim() }
							</p>
							{ movieScore && this.renderMovieScore() }
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
