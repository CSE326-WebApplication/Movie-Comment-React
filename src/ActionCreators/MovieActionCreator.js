/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';

export const GET_MOVIE = 'GET_MOVIE';

export const getMovie = () => {
	return getMovie_request();
};

const getMovie_request = () => {
	const key = '5281b2b7c2077e72f60db74d3773b6c0';
	const targetDate = '20170921';
	const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDate}`;
	return WebRequestUtil.getJson(url, getMovie_response);
};

const getMovie_response = (json) => {
	return {
		type: GET_MOVIE,
		movie: json,
	};
};
