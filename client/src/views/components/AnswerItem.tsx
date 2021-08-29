import { Answer } from "../../models/QuestionModel";
import "./../../styles/AnswerItem.scss";

export function AnswerItem(props: any) {
	const { answer }: { answer: Answer } = props;

	return (
		<div className="answer-item">
			<div className="content">{answer.content}</div>
			<div className="answer-info">
				<div className="user-name">{answer.username}</div>
				<div className="time">{answer.time}</div>
			</div>
		</div>
	);
}
