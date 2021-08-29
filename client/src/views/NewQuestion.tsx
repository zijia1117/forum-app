// import react from "react";
import { Input, Button, Form, message } from "antd";
import { TextAreaRef } from "antd/lib/input/TextArea";
import { createRef } from "react";
import { useHistory } from "react-router-dom";
import "./../styles/NewQuestion.css";
const { TextArea } = Input;

function NewPost() {
	const history = useHistory();

	if (!sessionStorage.getItem("user")) {
		message.warn("please login first");
		history.replace("/login");
	}

	const titleRef = createRef<Input>();
	const contentRef = createRef<TextAreaRef>();

	function postQuestion() {
		const title = titleRef.current?.input.value;
		const content = contentRef.current?.resizableTextArea?.textArea.textContent;
		const username = JSON.parse(sessionStorage.getItem("user")!).username;
		const question = { title, content, username };

		console.log(question);

		fetch("http://localhost:5000/questions/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				...question,
			}),
			mode: "cors",
			cache: "default",
		}).then((res) =>
			res.json().then((json) => {
				if (json._id) {
					message.success("question posted");
					setTimeout(() => {
						history.replace("/");
					}, 500);
				}
			})
		);
	}

	return (
		<div className="new-post">
			<h1>Ask Your Question</h1>
			<hr />
			<Form>
				<Form.Item name={"title"}>
					<div className="flex-row">
						<h2>Title:</h2>

						<Input
							ref={titleRef}
							placeholder="tile of the question"
							allowClear
							className="title"
							size="large"
						/>
					</div>
				</Form.Item>

				<Form.Item name={"content"}>
					<div className="flex-col">
						<h2>Content:</h2>
						<TextArea
							ref={contentRef}
							placeholder="Content of your question"
							allowClear
							showCount
							maxLength={400}
							rows={18}
						/>
					</div>
				</Form.Item>
				<Form.Item>
					<Button type="primary" onClick={postQuestion}>
						Publish
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default NewPost;
