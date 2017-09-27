/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { AES, SHA256 } from 'crypto-js';

export const encrypt = (password, key) => {
	return AES.encrypt(SHA256(password).toString(), key).toString();
};
