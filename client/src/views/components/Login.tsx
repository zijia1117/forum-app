import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import UserModel from "../../models/UserModel";

export default function Login() {
	const history = useHistory();
	const model = new UserModel();

	const onFinish = async (values: any) => {
		const json = await model.login(values);

		if (json["error"] !== undefined) {
			message.error(json["error"], 2);
		} else {
			message.success("Successfully logged in.", 2);
			// session storage
			sessionStorage.setItem("user", JSON.stringify(json));
			// redirect to home page
			history.replace("/");
		}
	};

	return (
		<div className="form-wrapper">
			<h1>Welcome!</h1>

			<hr />
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={onFinish}>
				<Form.Item
					name={"email"}
					rules={[
						{
							required: true,
							type: "email",
						},
					]}>
					<Input
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Email"
					/>
				</Form.Item>

				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please input your Password!" }]}>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>

				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					{/* TODO: forgot password page */}
					<a className="login-form-forgot" href="/">
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button">
						Log in
					</Button>
					Or <Link to="/register">register now!</Link>
				</Form.Item>
			</Form>
		</div>
	);
}
