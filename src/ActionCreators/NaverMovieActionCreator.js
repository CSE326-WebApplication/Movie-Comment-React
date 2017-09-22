/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';

export const GET_MOVIE_INFORMATION = 'GET_MOVIE_INFORMATION';

export const getMovieInformation = (query) => {
	return getMovieInformation_request(query);
};

const getMovieInformation_request = (query) => {
	const url = `api/naverMovie?movieName=${query}`;
	return WebRequestUtil.getJson(url, getMovieInformation_response);
};

const getMovieInformation_response = (json) => {
	return {
		type: GET_MOVIE_INFORMATION,
		infomation: json,
	};
};
