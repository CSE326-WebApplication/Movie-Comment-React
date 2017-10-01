/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';
import * as EncryptUtil from '../Utils/EncryptUtil';

export const AUTHENTICATION = 'AUTHENTICATION';
export const LOGOUT = 'LOGOUT';

export const auth = (token) => {
	return auth_request(token);
};

const auth_request = (token) => {
	const url = 'auth/Signin/Check/';
	const headers = { token };
	return WebRequestUtil.getJson(url, auth_response, headers);
};

const auth_response = (json) => {
	return {
		type: AUTHENTICATION,
		authResult: json,
	};
};
