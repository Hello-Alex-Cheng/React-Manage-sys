import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from "antd";
import './ui.less';

class ButtonComp extends Component {
	state = {}
	render() {
		const icon = <Icon type="loading" style={{ fontSize: 24 }} />
		return (
			<div>
				<Card title="Spin 实现 loading 效果">
					<h3>通过 indicator 设置自定义 laoding 图标</h3>
					<Spin />
				</Card>
				<Card title="内容遮套" style={{ marginTop: 20 }}>
					<h3>Alert 组件</h3>
					<Alert message="Hello" description="欢迎使用Alert" type="info" />

					<Spin tip="loading..." indicator={icon}>
						<Alert
							message="嵌套在 Spin 组件内部"
							description="加上 tip 属性显示 loading 的文字"
							type="warning" />
					</Spin>
				</Card>
			</div>
		);
	}
}

export default ButtonComp;