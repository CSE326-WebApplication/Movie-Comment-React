/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { AUTHENTICATION, SIGNIN, SIGNUP, LOGOUT } from '../ActionCreators/AuthActionCreator';
import { UPDATE_MOVIE_COMMENT, GET_MOVIE_COMMENT_LIST } from '../ActionCreators/CommentActionCreator';
import { GET_BOXOFFICES } from '../ActionCreators/MovieActionCreator';
import { GET_MOVIE_INFORMATION } from '../ActionCreators/NaverMovieActionCreator';
import { GET_SEARCHED_LIST } from '../ActionCreators/TMDBActionCreator';
import { combineReducers } from 'redux';

const initialState = {
	text: 'initial State',
	isLogin: false,
	user: null,
	boxoffices: null,
	searchedMovies: null,
	searchedList: null,
	signinResult: null,
	signupResult: null,
	commentsList: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATION:
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
			console.log('localStorage', localStorage.getItem('token'));
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
		case AUTHENTICATION:
			return Object.assign({}, state, {
				isLogin: action.result.result,
				user: action.result.data,
			});
		case UPDATE_MOVIE_COMMENT:
			return ({});
		case GET_MOVIE_COMMENT_LIST:
			return Object.assign({}, state, {
				commentsList: action.result,
			});
		case LOGOUT:
			return Object.assign({}, state, {
				isLogin: false,
			});
		case SIGNIN:
			localStorage.setItem('token', action.signinResult.token);
			console.log('localStorage', localStorage.getItem('token'));
			return Object.assign({}, state, {
				signinResult: action.signinResult,
			});
		case SIGNUP:
			return Object.assign({}, state, {
				signupResult: action.signupResult,
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

const Reducer = combineReducers({ authReducer, movieReducer });
export default Reducer;
