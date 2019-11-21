import React, { Component } from 'react';
import { Card, Button } from "antd";
import './ui.less';

class ButtonComp extends Component {
	state = {}
	render() {
		return (
			<div>
				<Card title="基础按钮">
					<Button type="primary">AlexCc</Button>
					<Button>AlexCc</Button>
					<Button type="dashed">AlexCc</Button>
					<Button type="dang er">AlexCc</Button>
				</Card>
				<Card title="图形按钮">
					<h3>icon 设置图标，shape 设置形状</h3>
					<h3>loading 时是无法点击的</h3>
					<Button icon="plus" loading>AlexCc</Button>
					<Button icon="edit">AlexCc</Button>
					<Button shape="circle" icon="search" />
				</Card>
			</div>
		);
	}
}

export default ButtonComp;