import react from "react";
import "./../../styles/AnswerItem.scss";

export function AnswerItem(props: any) {
	return (
		<div className="answer-item">
			<div className="content">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat
				odio nec viverra dignissim. Aliquam erat volutpat. Fusce eget risus vel
				ante molestie elementum id a neque.
			</div>
			<div className="answer-info">
				<div className="user-name">zijia</div>
				<div className="time">{new Date().toUTCString()}</div>
			</div>
		</div>
	);
}
