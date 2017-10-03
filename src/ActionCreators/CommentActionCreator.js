/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const GET_MOVIE_COMMENT_LIST = 'GET_MOVIE_COMMENT_LIST';

// Search a movie comment

// Update a movie comment searched by User's UID and Movie ID

export const createComment = (uid, movieId, text) => {
	return createComment_request(uid, movieId, text);
};

const createComment_request = (uid, movieId, text) => {
	const url = 'api/Comment/createComment/';
	const headers = { uid };
	const body = { movieId, text };
	return WebRequestUtil.postJson(url, createComment_response, headers, body);
};

const createComment_response = (json) => {
	return {
		type: CREATE_COMMENT,
		result: json,
	};
};

// Get comments list searched by Movie ID

export const getMovieCommentList = (movieId) => {
	return getMovieCommentList_request(movieId);
};

const getMovieCommentList_request = (movieId) => {
	const url = 'api/Comment/getCommentList/';
	const body = { movieId };
	return WebRequestUtil.postJson(url, getMovieCommentList_response, null, body);
};

const getMovieCommentList_response = (json) => {
	return {
		type: GET_MOVIE_COMMENT_LIST,
		result: json,
	};
};
