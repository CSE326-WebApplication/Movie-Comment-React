/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { AUTHENTICATION, LOGOUT } from '../ActionCreators/AuthActionCreator';
import { SIGNIN } from '../ActionCreators/SigninActionCreator';
import { SIGNUP } from '../ActionCreators/SignupActionCreator';
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
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATION:
			return Object.assign({}, state, {
				isLogin: action.authResult.result,
				user: action.authResult.data,
			});
		case LOGOUT:
			return Object.assign({}, state, {
				isLogin: false,
			});
		case SIGNIN:
			localStorage.setItem('token', action.signinResult.token);
			console.log('localStorage', localStorage.getItem('token'));
			console.log(action.signinResult.token);
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

const Reducer = combineReducers({ movieReducer });
export default Reducer;
