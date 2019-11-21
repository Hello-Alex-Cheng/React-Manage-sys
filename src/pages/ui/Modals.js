import React, { Component } from 'react';
import { Modal, Button, Card } from "antd";
import './ui.less';

class ButtonComp extends Component {
	state = {
		showModal: false
	}

	handleOpen = type => {
		this.setState({
			[type]: true
		})
	}
	render() {
		return (
			<div>
				<Card title="弹窗">
					<h2>okText cancelText 设 置自定义页脚</h2>
					<h3>添加自定义样式 wrapClassName 表示modal外层容器的样式</h3>
					<h3>通过 Modal['confirm'] 来配置需要弹出什么类型的 modak 框 </h3>
					<Button type="primary" onClick={() => this.handleOpen('showModal')}>Open</Button>
				</Card>
				<Modal
					title='Modal'
					wrapClassName="vertical-center-modal"
					visible={this.state.showModal}
					onCancel={() => {
						this.setState({
							showModal: false
						})
					}}
				></Modal>
			</div>
		);
	}
}

export default ButtonComp;