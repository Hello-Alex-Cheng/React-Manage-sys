/**
 * @param 校验当前用户是否已经登录
 * @return { Boolean } 如果已经登录: true
 */

const TOKEN_KEY = 'TOKEN_KEY';

export function AuthLogin() {
	// sessionStorage 存储当前的登录信息
	const token = sessionStorage.getItem(TOKEN_KEY);

	return token ? true : false;
}

export function setToken() {
	sessionStorage.setItem(TOKEN_KEY, 'fasdfas123hj45gj4k1j23h4j@#4234$%');
}

export function removeToken() {
	const res = sessionStorage.removeItem(TOKEN_KEY);
	return res;
}