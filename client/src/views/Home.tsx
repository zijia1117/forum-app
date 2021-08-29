import React, { useEffect, useState } from "react";
import { List, Avatar, Divider } from "antd";
import "./../styles/Home.scss";
import { Question } from "../models/QuestionModel";

function Home() {
	const [questions, setQuestions] = useState<Question[]>();

	useEffect(() => {
		if (questions) return;

		fetch("http://localhost:5000/questions").then((res) => {
			res.json().then((r) => {
				setQuestions(r);
			});
		});
		return () => {};
	});

	return (
		<div className="question-list">
			<Divider orientation="left">
				<h1 className="title">Questions</h1>
			</Divider>

			<List
				bordered
				itemLayout="vertical"
				dataSource={questions}
				renderItem={(item) => (
					<List.Item className="question">
						<List.Item.Meta
							style={{ textAlign: "start", marginBottom: "5px" }}
							className="content"
							title={<a href={"/questions/" + item._id}>{item.title}</a>}
							description={item.content}
						/>

						<div className="user-info">
							<span className="user-name"> {item.username} </span>
							<span className="time-posted">{item.time}</span>
						</div>
					</List.Item>
				)}
			/>
		</div>
	);
}

export default Home;
