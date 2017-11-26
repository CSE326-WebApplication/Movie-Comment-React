/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { AUTHENTICATION, SIGNIN, SIGNUP, LOGOUT } from '../ActionCreators/AuthActionCreator';
import { CREATE_COMMENT, GET_MOVIE_COMMENT_LIST, GET_SCORE } from '../ActionCreators/CommentActionCreator';
import { GET_MOVIE_INFORMATION } from '../ActionCreators/NaverMovieActionCreator';
import { GET_SEARCHED_LIST, GET_BOXOFFICES } from '../ActionCreators/TMDBActionCreator';
import { combineReducers } from 'redux';

const authState = {
	isLogin: false,
	isExpired: false,
	user: null,
	signinResult: null,
	signupResult: null,
};

const initialState = {
	text: 'initial State',
	boxoffices: null,
	searchedMovies: null,
	searchedList: null,
	commentsList: null,
	movieScore: null,
};

const authReducer = (state = authState, action) => {
	switch (action.type) {
		case AUTHENTICATION:
			// When the JWT is expired
			if (action.result.expiredAt) {
				return Object.assign({}, state, {
					isExpired: true,
				});
			}
			// When success the authentication
			return Object.assign({}, state, {
				isLogin: action.result.signinResult,
				user: action.result.data,
			});
		case LOGOUT:
			return Object.assign({}, state, {
				isLogin: false,
			});
		case SIGNIN:
			localStorage.setItem('token', action.signinResult.token);
			return Object.assign({}, state, {
				signinResult: action.signinResult,
			});
		case SIGNUP:
			return Object.assign({}, state, {
				signupResult: action.signupResult,
			});
		default:
			return state;
	}
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_COMMENT:
			return Object.assign({}, state);
		case GET_MOVIE_COMMENT_LIST:
			return Object.assign({}, state, {
				commentsList: action.result.data,
			});
		case GET_SCORE:
			return Object.assign({}, state, {
				movieScore: action.result.data,
			});
		case GET_BOXOFFICES:
			return Object.assign({}, state, {
				boxoffices: action.result,
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

const Reducer = combineReducers({ authReducer, movieReducer });
export default Reducer;
