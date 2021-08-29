import { useHistory } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import UserModel from "./../../models/UserModel";

export default function Register() {
	const history = useHistory();
	const model = new UserModel();

	const onFinish = async (values: any) => {
		// validate
		if (values.password != values.confirm_password) {
			message.warn("password mismatch");
			return;
		}

		const res = await model.register(values);
		if (res.error) {
			const errs: [] = res.errors;
			errs.forEach((e) => {
				message.error(e);
			});
			return;
		}

		message.success("Registered, please login");
		history.replace("/login");
	};

	const onFinishFailed = (errorInfo: any) => {
		message.error(errorInfo);
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
					name="confirm_password"
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
