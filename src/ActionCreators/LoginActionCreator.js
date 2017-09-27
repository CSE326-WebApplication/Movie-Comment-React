/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';
import * as EncryptUtil from '../Utils/EncryptUtil';

export const LOGIN = 'LOGIN';

export const login = (userId, password) => {
	return login_request(userId, password);
};

const login_request = (userId, password) => {
	const url = 'api/Login/';
	const body = {
		userId: userId,
		password: EncryptUtil.encrypt(password, userId),
	};
	return WebRequestUtil.postJson(url, login_response, body);
};

const login_response = (json) => {
	return {
		type: LOGIN,
		loginResult: json,
	};
};
