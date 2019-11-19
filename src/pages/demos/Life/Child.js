import React, { Component } from 'react';

class Child extends Component {
	// 以下生命周期按顺序执行
	// 首次会执行 componentWillMount、render、componentDidMount
	// mount 钩子只会在组件中调用一次，其他的调用多次

	componentWillReceiveProps(newProps) {
		console.log('will use newProps', newProps);
	}

	shouldComponentUpdate(newProps) {
		// 接受新的 props，如果返回 false, 就不会再调用 render 生命周期了

		console.log('should update', newProps);
		return newProps.value === 3 ? false : true;
	}

	componentWillUpdate(newProps) {
		console.log('will update', newProps);
	}

	componentWillMount() {
		console.log('will mount');
	}

	render() {
		console.log('render');
		return (
			<div>Child</div>
		);
	}

	componentDidMount() {
		console.log('did mount');
	}

	componentDidUpdate(oldProps) {
		// 接收老的 props
		// 比如父组件设置了 state 里面的值，这里的 oldProps 里面的值就是 state 之前的值

		console.log('did update', oldProps);
	}
}

export default Child;