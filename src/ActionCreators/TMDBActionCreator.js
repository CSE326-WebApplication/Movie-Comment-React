/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';

export const GET_SEARCHED_LIST = 'GET_SEARCHED_LIST';
export const GET_BOXOFFICES = 'GET_BOXOFFICES';

export const getSearchedList = (query) => {
	return getSearchedList_request(query);
};

const getSearchedList_request = (query) => {
	const url = `api/TMDB/search?movieName=${query}`;
	return WebRequestUtil.getJson(url, getSearchedList_response);
};

const getSearchedList_response = (json) => {
	return {
		type: GET_SEARCHED_LIST,
		searchedList: json,
	};
};

export const getBoxoffices = () => {
	return getBoxoffices_request();
};

const getBoxoffices_request = () => {
	const url = 'api/TMDB/getBoxoffices';
	return WebRequestUtil.getJson(url, getBoxoffices_response);
};

const getBoxoffices_response = (json) => {
	return {
		type: GET_BOXOFFICES,
		result: json,
	};
};
