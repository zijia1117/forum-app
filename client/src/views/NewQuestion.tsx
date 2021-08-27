// import react from "react";
import { Input, Button, Form } from "antd";
import "./../styles/NewQuestion.css";

function NewPost() {
	const { TextArea } = Input;
	const onChange = (e: any) => {
		console.log(e);
	};

	return (
		<div className="new-post">
			<h1>Ask Your Question</h1>
			<hr />
			<Form>
				<Form.Item>
					<div className="flex-row">
						<h2>Title:</h2>

						<Input
							placeholder="tile of the question"
							allowClear
							onChange={onChange}
							className="title"
							size="large"
						/>
					</div>
				</Form.Item>

				<Form.Item>
					<div className="flex-col">
						<h2>Content:</h2>
						<TextArea
							placeholder="Content of your question"
							allowClear
							showCount
							maxLength={400}
							rows={18}
							onChange={onChange}
						/>
					</div>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Publish
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default NewPost;
