/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { GET_MOVIE } from '../ActionCreators/MovieActionCreator';
import { combineReducers } from 'redux';

const initialState = {
	text: 'initial State',
	movie: {},
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIE:
			return Object.assign({}, state, {
				movie: action.movie,
			});
		default:
			return state;
	}
};

const Reducer = combineReducers({ movieReducer });
export default Reducer;
