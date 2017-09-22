/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import fetch from 'isomorphic-fetch';
import { ServerEndPoint } from '../Configs/Server';

export const getJson = (url, responseActionCreator, headers) => {
	return dispatch => {
		fetch(ServerEndPoint + url, headers)
		.then(response => response.json())
		.then(json => dispatch(responseActionCreator(json)));
	};
};
