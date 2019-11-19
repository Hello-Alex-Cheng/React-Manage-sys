import React from 'react';
import { Button } from 'antd';

import Child from './Child';
import './index.less';

class Life extends React.Component {
	state = {
		count: 0
	}

	handleCountClick = () => {
		// 如果不给方法 bind this, 就必须将方法写成箭头函数
		// 否则 this 就是 undefined
		this.setState(function (state, props) {
			// state 是老的 state
			// props 是此次更新被应用时的 props
			return {
				count: state.count + 1
			}
		});
	}

	render() {
		return (
			<div className="content">
				<h1>生命周期</h1>
				<Button onClick={this.handleCountClick}>点击</Button>
				{this.state.count}
				<Child value={this.state.count} name='alex' />
			</div>
		);
	}
}

export default Life;