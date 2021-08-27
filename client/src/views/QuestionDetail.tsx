import react from "react";
import { Divider } from "antd";
import { useParams } from "react-router-dom";
import { AnswerItem } from "./components/AnswerItem";
import "./../styles/QuestionDetail.scss";

export function QuestionDetail(props: any) {
	const { id: postId } = useParams<{ id: string }>();

	console.log(postId);

	return (
		<div className="post-detail">
			<h1 className="title">title</h1>
			<div className="user-info">
				<span className="user-name">zijia</span>
				<span className="time">{new Date().toUTCString()}</span>
			</div>
			<div className="content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat
					odio nec viverra dignissim. Aliquam erat volutpat. Fusce eget risus
					vel ante molestie elementum id a neque. Aenean diam eros, mollis a est
					a, facilisis feugiat odio.Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Duis placerat odio nec viverra dignissim. Aliquam
					erat volutpat. Fusce eget risus vel ante molestie elementum id a
					neque. Aenean diam eros, mollis a est a, facilisis feugiat odio.Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat odio
					nec viverra dignissim. Aliquam erat volutpat. Fusce eget risus vel
					ante molestie elementum id a neque. Aenean diam eros, mollis a est a,
					facilisis feugiat odio.Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Duis placerat odio nec viverra dignissim. Aliquam
					erat volutpat. Fusce eget risus vel ante molestie elementum id a
					neque. Aenean diam eros, mollis a est a, facilisis feugiat odio.
				</p>
				<div className="comments">
					<div className="comment-item">
						<p>
							comments Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Duis placerat odio nec viverra dignissim --
							<span className="user-name">zijia</span>
							<span className="time">{new Date().toUTCString()}</span>
						</p>
					</div>
					<div className="comment-item">
						<p>
							comments Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Duis placerat odio nec viverra dignissim --
							<span className="user-name">zijia</span>
							<span className="time">{new Date().toUTCString()}</span>
						</p>
					</div>
					<div className="comment-item">
						<p>
							comments Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Duis placerat odio nec viverra dignissim --
							<span className="user-name">zijia</span>
							<span className="time">{new Date().toUTCString()}</span>
						</p>
					</div>
				</div>
			</div>
			<Divider
				orientation="left"
				style={{ fontWeight: "bold", fontSize: "24px" }}>
				Answer(s)
			</Divider>

			<AnswerItem></AnswerItem>
			<AnswerItem></AnswerItem>
			<AnswerItem></AnswerItem>
			<AnswerItem></AnswerItem>
		</div>
	);
}
