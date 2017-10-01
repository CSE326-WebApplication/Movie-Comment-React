/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import fetch from 'isomorphic-fetch';
import { ServerEndPoint } from '../Configs/Server';

export const getJson = (url, responseActionCreator, headers) => {
	return dispatch => {
		fetch(ServerEndPoint + url, { headers })
		.then(response => response.json())
		.then(json => dispatch(responseActionCreator(json)));
	};
};

export const postJson = (url, responseActionCreator, body) => {
	return dispatch => {
		fetch(ServerEndPoint + url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body),
		})
		.then(response => response.json())
		.then(json => dispatch(responseActionCreator(json)));
	};
};
