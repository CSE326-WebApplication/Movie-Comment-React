/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';

export const GET_BOXOFFICES = 'GET_BOXOFFICES';

export const getBoxoffices = () => {
	return getBoxoffices_request();
};

const getBoxoffices_request = () => {
	const url = 'api/openMovie';
	return WebRequestUtil.getJson(url, getBoxoffices_response);
};

const getBoxoffices_response = (json) => {
	return {
		type: GET_BOXOFFICES,
		boxoffices: json,
	};
};
