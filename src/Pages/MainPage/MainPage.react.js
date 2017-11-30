
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Search, Loader, Header } from 'semantic-ui-react';

import history from '../../history';
import {
	BoxOffice,
	Footer,
	MainSlider,
	MovieViewer,
	Navigation,
	SearchResultRenderer,
} from '../../Components';

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
		moviesSortedByCount: state.movieReducer.moviesSortedByCount,
		moviesSortedByRating: state.movieReducer.moviesSortedByRating,
	};
};

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedMovie: null,
			timer: null,
		};
	}

	componentDidMount() {
		this.props.dispatch(TMDBActionCreator.getBoxoffices());
		this.props.dispatch(CommentActionCreator.getMoviesSortedByCount(5));
		this.props.dispatch(CommentActionCreator.getMoviesSortedByRating(5));
	}

	resetComponent() {
		this.setState({
			searchedMovies: null,
			selectedMovie: null,
		});
	}

	handleResultSelect(e, { result }) {
		this.setState({
			movieId: result.id,
			value: result.title,
			backdrop: result.backdrop_path,
			selectedMovie: result,
		}, () => {
			history.push(`/movie/${result.id}`);
		});
	}

	handleSearchChange(e, { value }) {
		if (this.state.timer) {
			clearTimeout(this.state.timer);
		}

		const timer = setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();
			this.props.dispatch(TMDBActionCreator.getSearchedList(this.state.value));
		}, 500);

		this.setState({
			isLoading: true,
			timer: timer,
			value
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
		const { boxoffices, searchedList, isLogin, user } = this.props;
		const { selectedMovie } = this.state;
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
				{
					!selectedMovie && (
						<BoxOffice boxOffices={boxoffices}/>
					)
				}
				{
					!selectedMovie && (
						<MovieViewer
							className="movieViewerByCount"
							movies={this.props.moviesSortedByCount}
							title="가장 댓글이 많이 달린 영화는 무엇일까요?"
						/>
					)
				}
				{
					!selectedMovie && (
						<MovieViewer
							className="movieViewerByRating"
							movies={this.props.moviesSortedByRating}
							title="가장 평점이 좋은 영화는 무엇일까요?"
						/>
					)
				}
				<Footer/>
			</div>
		);
	}
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage = connect(mapStateToProps)(MainPage);
