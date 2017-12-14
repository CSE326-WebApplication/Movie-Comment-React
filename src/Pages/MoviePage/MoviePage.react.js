
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Search, Loader, Header } from 'semantic-ui-react';

import history from '../../history';
import {
	Footer,
	MainSlider,
	Navigation,
	SearchResultRenderer,
} from '../../Components';

import * as CommentActionCreator from '../../ActionCreators/CommentActionCreator';
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
			timer: null,
		};
	}

	componentDidMount() {
		if (!this.state.selectedMovie && this.props.params.movieId) {
			TMDBActionCreator.getMovie(this.props.params.movieId).then(res => {
				this.setState({
					selectedMovie: res.data,
				}, () => {
					this.props.dispatch(CommentActionCreator.getMovieCommentList(this.state.selectedMovie.id));
					this.props.dispatch(CommentActionCreator.getScore(this.state.selectedMovie.id));
				});
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		// const { boxoffices } = this.props;
		//
		// if (boxoffices !== nextProps.boxoffices) {
		// 	const movieNm = nextProps.boxoffices.boxOfficeResult.dailyBoxOfficeList[0].movieNm;
		// 	this.props.dispatch(NaverMovieActionCreator.getMovieInformation(movieNm));
		// }
		// console.log(this.props.params, nextProps.params);
		// if (!this.state.selectedMovie && nextProps.params.movieId) {
		// 	console.log('ttt');
		// 	TMDBActionCreator.getMovie(nextProps.params.movieId).then(res => {
		// 		console.log(this.state.selectedMovie);
		// 		this.setState({
		// 			selectedMovie: res.data,
		// 		}, () => {
		// 			console.log(this.state.selectedMovie);
		// 		})
		// 	})
		// }
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
			<div className="moviePage__commentsList">
				<Header
					as='h2'
					className="moviePage__commentsList__header"
					content='Comments'
					subheader='영화에 댓글을 남기면 자동으로 평점을 매겨줍니다.'
				/>

			<div className="moviePage__commentsList__body">
					{
						commentsList.length === 0 ?
						(
							<p className="moviePage__commentsList__body__empty">
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
		const { searchedList, isLogin, user, commentsList } = this.props;
		const { backdrop, selectedMovie } = this.state;
		return (
			<div className="moviePage">
				<Navigation isLogin={isLogin} user={user}>
					<Search
						className="navigation__body__search"
						icon="search"
						size="huge"
						onResultSelect={(e, result) => this.handleResultSelect(e, result)}
						onSearchChange={(e, value) => this.handleSearchChange(e, value)}
						value={this.state.value}
						placeholder="영화 제목 검색..."
						results={searchedList}
						resultRenderer={item => (<SearchResultRenderer item={item}/>)}
					/>
				</Navigation>
				{
					selectedMovie && (
						<MainSlider
							backdrop={backdrop}
							movie={selectedMovie}
						/>
					)
				}
				{
					this.props.information && (
						<img src={this.props.information.items[0].image}/>
					)
				}
				{ commentsList && selectedMovie && this.renderCommentsList() }
				<Footer/>
			</div>
		);
	}
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage = connect(mapStateToProps)(MainPage);
