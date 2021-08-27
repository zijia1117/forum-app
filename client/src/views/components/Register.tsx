import { useHistory } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import UserModel from "./../../models/UserModel";

export default function Register() {
	const history = useHistory();
	const model = new UserModel();

	const onFinish = async (values: any) => {
		await model.register(values);
	};

	const onFinishFailed = (errorInfo: any) => {
		message.error(errorInfo);
		// console.log("Failed:", errorInfo);
	};

	return (
		<div className="form-wrapper">
			<h1>Create Your Account.</h1>
			<hr />
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className="register-form">
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}>
					<Input />
				</Form.Item>

				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message: "Please input your username!" }]}>
					<Input type="email" />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}>
					<Input.Password />
				</Form.Item>

				<Form.Item
					label="Confirm Pwd"
					name="confirm-password"
					rules={[{ required: true, message: "Please input your password!" }]}>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 6, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
