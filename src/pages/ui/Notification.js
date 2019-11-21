import React, { Component } from 'react';
import { Card, Button, notification } from "antd";
import './ui.less';

class ButtonComp extends Component {
	state = {}

	handleNotification = type => {
		notification[type]({
			message: 'hello',
			description: '你好啊，很高心认识你!'
		})
	}
	render() {
		return (
			<div>
				<Card title="基础按钮">
					<h3>通过 placement 属性来控制 notification 的弹出位置</h3>
					<Button type="primary" onClick={() => this.handleNotification('success')}> 点我</Button>
					<Button type="primary" onClick={() => this.handleNotification('warning')}> 点我</Button>
				</Card>
			</div>
		);
	}
}

export default ButtonComp;