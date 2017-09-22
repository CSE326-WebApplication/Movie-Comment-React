/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import fetch from 'isomorphic-fetch';
// import { ServerEndPoint } from '../Configs/Server';

export const getJson = (url, responseActionCreator) => {
	return dispatch => {
		fetch(url)
		.then(response => response.json())
		.then(json => dispatch(responseActionCreator(json)));
	};
};
