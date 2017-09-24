
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Loader } from 'semantic-ui-react';

import { MainSlider, Navigation, SearchResultRenderer } from '../../Components';

import * as MovieActionCreator from '../../ActionCreators/MovieActionCreator';
import * as NaverMovieActionCreator from '../../ActionCreators/NaverMovieActionCreator';
import * as TMDBActionCreator from '../../ActionCreators/TMDBActionCreator';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
	return {
		value: state.movieReducer.text,
		boxoffices: state.movieReducer.boxoffices,
		searchedMovies: state.movieReducer.searchedMovies,
		searchedList: state.movieReducer.searchedList,
	};
};

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: null,
		};
	}

	componentDidMount() {
		// this.props.dispatch(MovieActionCreator.getBoxoffices());
		// this.props.dispatch(NaverMovieActionCreator.getMovieInformation('it'));
	}

	componentWillReceiveProps(nextProps) {
		const { boxoffices } = this.props;

		if (boxoffices !== nextProps.boxoffices) {
			const movieNm = nextProps.boxoffices.boxOfficeResult.dailyBoxOfficeList[0].movieNm;
			this.props.dispatch(NaverMovieActionCreator.getMovieInformation(movieNm));
		}
	}

	resetComponent() {
		this.setState({
			searchedMovies: null,
		});
	}

	handleResultSelect(e, { result }) {
		this.setState({
			value: result.title,
			backdrop: result.backdrop_path,
			selected: result,
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

	render() {
		const { boxoffices, searchedList } = this.props;
		return (
			<div className="mainPage">
				<Navigation>
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
					backdrop={this.state.backdrop}
					item={this.state.selected}
				/>
				<ol>
					{
						boxoffices !== null ? boxoffices.boxOfficeResult.dailyBoxOfficeList.map((item, i) => {
							return (
								<li key={i}>{item.movieNm}</li>
							);
						})
						:(<Loader inverted>Loading</Loader>)
					}
				</ol>
				{
					this.props.information && (<img src={this.props.information.items[0].image}/>)
				}
				<Loader inverted>Loading</Loader>
				<Loader>Loading</Loader>
			</div>
		);
	}
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage = connect(mapStateToProps)(MainPage);
