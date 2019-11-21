import React, { Component } from 'react';
import { Form, Card, Input, Button, message, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends Component {
	state = {}

	handleSubmit = () => {
		const form = this.props.form;
		const userInfo = form.getFieldsValue(); // 获取表单信息

		form.validateFields((err, values) => {
			if (!err) {
				message.success(`登录成功 ${userInfo.username}`);
			} else {
				message.error(`登录失败!`);
			}
		})
	}
	render() {
		const { getFieldDecorator } = this.props.form;

		// 表单布局
		const formItemlayout = {
			labelCol: { // label 的布局
				xs: 24,
				sm: 8
			},
			wrapperCol: { // 文本框的布局
				xs: 24,
				sm: 16
			}
		}
		// 如果没有 label 就要设置 sm 的偏移了
		const offsetLayout = {
			wrapperCol: {
				xs: 24,
				sm: {
					span: 16,
					offset: 8 // 文本框偏移量
				}
			}
		}


		return (
			<div>
				<Card title="使用方式">
					<h3>从 this.props.form 中获取 getFieldDecorator</h3>
					<h3>导出 From.create()(Login)</h3>
					<h3>通过 this.props.form.getFieldsValue 获取表单的值</h3>
					<h3>通过 this.props.form.validateFiedlds 校验</h3>
					<h3>通过 this.props.form.setFieldsValue 进行表单重置</h3>
				</Card>
				<Card title="登录表单" style={{ marginTop: 30 }}>
					<Form style={{ width: 400 }}>
						<FormItem label="Username" {...formItemlayout}>
							{
								getFieldDecorator('username', {
									initialValue: 'alex',
									rules: [{
										required: true,
										message: '用户名不能为空'
									}, {
										min: 5,
										max: 10,
										message: '长度在 3 ~ 10 的范围内'
									}, {
										pattern: /^\w+$/g, // new RegExp('^\\w+$', 'g')
										message: '正则校验不通过'
									}]
								})(<Input prefix={<Icon type="user" />} placeholder="请输入..." />)
							}
						</FormItem>
						<FormItem label="Password" {...formItemlayout}>
							{
								getFieldDecorator('password', {
									initialValue: '123456',
									rules: [{
										required: true,
										message: '密码不能为空'
									}, {
										min: 5,
										max: 10,
										message: '长度在 3 ~ 10 的范围内'
									}]
								})(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入..." />)
							}
						</FormItem>
						<FormItem {...offsetLayout}>
							{
								getFieldDecorator('remenber', {
									valuePropName: 'checked', // 一定要加上这个属性，否则不会生效
									initialValue: true
								})(<Checkbox>Remenber password</Checkbox>)
							}
							<a href="#" style={{ float: 'right' }}>Forget password</a>
						</FormItem>
						<FormItem {...offsetLayout}>
							<Button type="primary" onClick={this.handleSubmit}>Login</Button>
						</FormItem>
					</Form>
				</Card>
			</div>
		);
	}
}

export default Form.create()(Login);