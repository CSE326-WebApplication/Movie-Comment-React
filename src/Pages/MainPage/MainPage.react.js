
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Search, Loader, Header } from 'semantic-ui-react';

import { MainSlider, Navigation, SearchResultRenderer } from '../../Components';

import * as CommentActionCreator from '../../ActionCreators/CommentActionCreator';
import * as NaverMovieActionCreator from '../../ActionCreators/NaverMovieActionCreator';
import * as TMDBActionCreator from '../../ActionCreators/TMDBActionCreator';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
	return {
		isLogin: state.authReducer.isLogin,
		user: state.authReducer.user,
		boxoffices: state.movieReducer.boxoffices,
		searchedMovies: state.movieReducer.searchedMovies,
		searchedList: state.movieReducer.searchedList,
		commentsList: state.movieReducer.commentsList,
	};
};

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedMovie: null,
		};
	}

	componentWillReceiveProps(nextProps) {
		// const { boxoffices } = this.props;
		//
		// if (boxoffices !== nextProps.boxoffices) {
		// 	const movieNm = nextProps.boxoffices.boxOfficeResult.dailyBoxOfficeList[0].movieNm;
		// 	this.props.dispatch(NaverMovieActionCreator.getMovieInformation(movieNm));
		// }
	}

	resetComponent() {
		this.setState({
			searchedMovies: null,
		});
	}

	handleResultSelect(e, { result }) {
		this.setState({
			movieId: result.id,
			value: result.title,
			backdrop: result.backdrop_path,
			selectedMovie: result,
		}, () => {
			this.props.dispatch(CommentActionCreator.getMovieCommentList(this.state.selectedMovie.id));
			this.props.dispatch(CommentActionCreator.getScore(this.state.selectedMovie.id));
		});
	}

	handleSearchChange(e, { value }) {
		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.setState({ isLoading: true, value }, () => {
			this.timer = setTimeout(() => {
				if (this.state.value.length < 1) return this.resetComponent();
				this.props.dispatch(TMDBActionCreator.getSearchedList(this.state.value));
			}, 500);
		});
	}

	renderCommentsList() {
		const { commentsList } = this.props;

		return (
			<div className="mainPage__commentsList">
				<Header
					as='h2'
					className="mainPage__commentsList__header"
					content='Comments'
					subheader='영화에 댓글을 남기면 자동으로 평점을 매겨줍니다.'
				/>

				<div className="mainPage__commentsList__body">
					{
						commentsList.length === 0 ?
						(
							<p className="mainPage__commentsList__body__empty">
								영화에 대한 댓글이 없습니다. 처음으로 댓글을 남겨 보세요.
							</p>
						) :
						commentsList.map((item, i) => {
							return (
								<Card key={i}>
									<Card.Content>
										<Card.Header>
											{item.username}
										</Card.Header>
										<Card.Meta>
											{item.rating}점
										</Card.Meta>
										<Card.Description>
											{item.text}
										</Card.Description>
									</Card.Content>
								</Card>
							);
						})
					}
				</div>

			</div>
		);
	}

	render() {
		const { boxoffices, searchedList, isLogin, user, commentsList } = this.props;
		const { backdrop, selectedMovie } = this.state;
		return (
			<div className="mainPage">
				<Navigation isLogin={isLogin} user={user}>
					<Search
						className="navigation__body__search"
						icon="search"
						size="huge"
						onResultSelect={(e, result) => this.handleResultSelect(e, result)}
						onSearchChange={(e, value) => this.handleSearchChange(e, value)}
						value={this.state.value}
						placeholder="영화, 감독, 출연진 검색..."
						results={searchedList}
						resultRenderer={item => (<SearchResultRenderer item={item}/>)}
					/>
				</Navigation>
				<MainSlider
					backdrop={backdrop}
					movie={selectedMovie}
				/>
				{
					this.props.information && (
						<img src={this.props.information.items[0].image}/>
					)
				}
				{ commentsList && selectedMovie && this.renderCommentsList() }
			</div>
		);
	}
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage = connect(mapStateToProps)(MainPage);
