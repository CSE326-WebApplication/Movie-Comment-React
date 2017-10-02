/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';
import * as EncryptUtil from '../Utils/EncryptUtil';

export const AUTHENTICATION = 'AUTHENTICATION';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
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
		result: json,
	};
};

// Sign In

export const signin = (userId, password) => {
	return signin_request(userId, password);
};

const signin_request = (userId, password) => {
	const url = 'auth/Signin/';
	const body = {
		userId: userId,
		password: EncryptUtil.encrypt(password, userId),
	};
	return WebRequestUtil.postJson(url, signin_response, null, body);
};

const signin_response = (json) => {
	return {
		type: SIGNIN,
		signinResult: json,
	};
};

// Sign Up

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
	return WebRequestUtil.postJson(url, signup_response, null, body);
};

const signup_response = (json) => {
	return {
		type: SIGNUP,
		signupResult: json,
	};
};
