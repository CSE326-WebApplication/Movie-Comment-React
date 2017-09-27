/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { LOGIN } from '../ActionCreators/LoginActionCreator';
import { GET_BOXOFFICES } from '../ActionCreators/MovieActionCreator';
import { GET_MOVIE_INFORMATION } from '../ActionCreators/NaverMovieActionCreator';
import { GET_SEARCHED_LIST } from '../ActionCreators/TMDBActionCreator';
import { combineReducers } from 'redux';

const initialState = {
	text: 'initial State',
	boxoffices: null,
	searchedMovies: null,
	searchedList: null,
	loginResult: null,
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return Object.assign({}, state, {
				loginResult: action.loginResult,
			});
		case GET_BOXOFFICES:
			return Object.assign({}, state, {
				boxoffices: action.boxoffices,
			});
		case GET_MOVIE_INFORMATION:
			return Object.assign({}, state, {
				searchedMovies: action.searchedMovies.items,
			});
		case GET_SEARCHED_LIST:
			return Object.assign({}, state, {
				searchedList: action.searchedList.results,
			});
		default:
			return state;
	}
};

const Reducer = combineReducers({ movieReducer });
export default Reducer;
