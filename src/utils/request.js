import axios from "axios";
import { Modal } from "antd";
const service = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 10000
})

// 请求拦截
service.interceptors.request.use(config => {
	console.log("config", config);
	config.headers["Authorization"] = "token";
	return config;
}, error => {
	console.log("请求拦截error", error);
	Promise.reject(error);
})

service.interceptors.response.use(response => {
	let { data, statusText, status } = response;

	return {
		statusText,
		status,
		data: JSON.parse(data)
	}
}, error => {
	console.log(error)
	Modal.warning({
		title: error.response.status,
		content: error.response.statusText
	})
	Promise.reject(error);
})

export default service;
