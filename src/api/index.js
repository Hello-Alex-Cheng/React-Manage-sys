import service from '../utils/request';
import { Modal } from 'antd';

export function ApiGet(url, params) {
	return new Promise((resolve, reject) => {
		service
			.get(url, params)
			.then(res => {
				if (res.status === 200) {
					Modal.success({
						title: res.status,
						content: "请求成功!"
					});
					resolve(res);
				} else {
					Modal.warning({
						title: res.status,
						content: res.statusText
					});
					reject(res);
				}
			})
			.catch(err => {
				console.log("err", err)
				Modal.warning({
					title: "Error",
					content: "请求错误!"
				})
				reject(err);
			});
	});
}