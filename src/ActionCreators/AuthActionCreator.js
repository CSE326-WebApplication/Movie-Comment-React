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
export const CHECK_DUPLICATED_USERID = 'CHECK_DUPLICATED_USERID';

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
export const signin = (userId, password, callback) => {
	return signin_request(userId, password, callback);
};

const signin_request = (userId, password, callback) => {
	const url = 'auth/Signin/';
	const body = {
		userId: userId,
		password: EncryptUtil.encrypt(password, userId),
	};
	return WebRequestUtil.postJson(url, signin_response, null, body, callback);
};

const signin_response = (json) => {
	return {
		type: SIGNIN,
		signinResult: json,
	};
};

// Sign Up
export const signup = (userId, password, callback) => {
	return signup_request(userId, password, callback);
};

const signup_request = (userId, password, callback) => {
	const url = 'auth/Signup/';
	const body = {
		username: 'test',
		userId: userId,
		password: EncryptUtil.encrypt(password, userId),
	};
	return WebRequestUtil.postJson(url, signup_response, null, body, callback);
};

const signup_response = (json) => {
	return {
		type: SIGNUP,
		signupResult: json,
	};
};

// Logout
export const logout = () => {
	return {
		type: LOGOUT,
	};
};

// Check the userId is duplicated

// Sign Up
export const checkDuplicatedUserId = (userId, callback) => {
	return checkDuplicatedUserId_request(userId, callback);
};

const checkDuplicatedUserId_request = (userId, callback) => {
	const url = 'auth/Signup/checkDuplicatedUserId';
	const body = {
		userId: userId,
	};
	return WebRequestUtil.postJson(url, checkDuplicatedUserId_response, null, body, callback);
};

const checkDuplicatedUserId_response = (json) => {
	return {
		type: CHECK_DUPLICATED_USERID,
		result: json,
	};
};
