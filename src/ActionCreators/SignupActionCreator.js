/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';
import * as EncryptUtil from '../Utils/EncryptUtil';

export const SIGNUP = 'SIGNUP';

export const signup = (userId, password) => {
	return signup_request(userId, password);
};

const signup_request = (userId, password) => {
	const url = 'auth/Signup/';
	const body = {
		username: 'test',
		userId: userId,
		password: EncryptUtil.encrypt(password, userId),
	};
	return WebRequestUtil.postJson(url, signup_response, body);
};

const signup_response = (json) => {
	return {
		type: SIGNUP,
		signupResult: json,
	};
};
