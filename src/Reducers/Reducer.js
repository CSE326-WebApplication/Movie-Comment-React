/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { GET_BOXOFFICES } from '../ActionCreators/MovieActionCreator';
import { combineReducers } from 'redux';

const initialState = {
	text: 'initial State',
	boxoffices: null,
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BOXOFFICES:
			return Object.assign({}, state, {
				boxoffices: action.boxoffices,
			});
		default:
			return state;
	}
};

const Reducer = combineReducers({ movieReducer });
export default Reducer;
