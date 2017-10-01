/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';
import * as EncryptUtil from '../Utils/EncryptUtil';

export const SIGNIN = 'SIGNIN';

export const signin = (userId, password) => {
	return signin_request(userId, password);
};

const signin_request = (userId, password) => {
	const url = 'auth/Signin/';
	const body = {
		userId: userId,
		password: EncryptUtil.encrypt(password, userId),
	};
	return WebRequestUtil.postJson(url, signin_response, body);
};

const signin_response = (json) => {
	return {
		type: SIGNIN,
		signinResult: json,
	};
};
