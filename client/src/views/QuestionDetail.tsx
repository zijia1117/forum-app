import { useEffect, useState } from "react";
import { Divider, message } from "antd";
import { useParams } from "react-router-dom";
import { AnswerItem } from "./components/AnswerItem";
import "./../styles/QuestionDetail.scss";
import { QuestionDetail as QuestionDetailModel } from "../models/QuestionModel";

export function QuestionDetail(props: any) {
	const { id: postId } = useParams<{ id: string }>();

	const [question, setQuestion] = useState<QuestionDetailModel>();

	useEffect(() => {
		if (question) {
			if (postId === ":id") {
				message.warn("please go back to Home and click on a question.", 2);
			}
			return;
		}

		fetch("http://localhost:5000/questions/" + postId).then((res) => {
			res.json().then((json) => {
				setQuestion(json);
			});
		});
	});

	return (
		<div className="post-detail">
			<h1 className="title">{question?.title}</h1>
			<div className="user-info">
				<span className="user-name">{question?.username}</span>
				<span className="time">{question?.time}</span>
			</div>
			<div className="content">
				<p>{question?.content}</p>

				<div className="comments">
					{question?.comments && question.comments.length > 0
						? question?.comments?.map((comment, index) => {
								return (
									<div key={index} className="comment-item">
										<p>
											{comment.content} --
											<span className="user-name">{comment.username}</span>
											<span className="time">{comment.time}</span>
										</p>
									</div>
								);
						  })
						: "No comments"}
				</div>
			</div>
			<Divider
				orientation="left"
				style={{ fontWeight: "bold", fontSize: "24px" }}>
				Answer(s)
			</Divider>
			{question?.answers?.map((answer, index) => {
				return <AnswerItem key={index} answer={answer}></AnswerItem>;
			})}
		</div>
	);
}
