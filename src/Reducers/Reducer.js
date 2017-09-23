/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { GET_BOXOFFICES } from '../ActionCreators/MovieActionCreator';
import { GET_MOVIE_INFORMATION } from '../ActionCreators/NaverMovieActionCreator';
import { combineReducers } from 'redux';

const initialState = {
	text: 'initial State',
	boxoffices: null,
	searchedMovies: null,
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BOXOFFICES:
			return Object.assign({}, state, {
				boxoffices: action.boxoffices,
			});
		case GET_MOVIE_INFORMATION:
			return Object.assign({}, state, {
				searchedMovies: action.searchedMovies.items,
			});
		default:
			return state;
	}
};

const Reducer = combineReducers({ movieReducer });
export default Reducer;
