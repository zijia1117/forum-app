import React from "react";
import { List, Avatar, Divider } from "antd";
import "./../styles/Home.scss";

function Home() {
	const data = [
		{
			title: "Title 1",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								placerat odio nec viverra dignissim. Aliquam erat volutpat.
								Fusce eget risus vel ante molestie elementum id a neque. Aenean
								diam eros, mollis a est a, facilisis feugiat odio.`,
			author: "zijia",
			url: "/post/id",
			time: new Date(),
		},
		{
			title: "Title 2",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								placerat odio nec viverra dignissim. Aliquam erat volutpat.
								Fusce eget risus vel ante molestie elementum id a neque. Aenean
								diam eros, mollis a est a, facilisis feugiat odio.`,
			author: "zijia",
			time: new Date(),
		},
		{
			title: "Title 3",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								placerat odio nec viverra dignissim. Aliquam erat volutpat.
								Fusce eget risus vel ante molestie elementum id a neque. Aenean
								diam eros, mollis a est a, facilisis feugiat odio.`,
			author: "zijia",
			time: new Date(),
		},
		{
			title: "Title 4",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								placerat odio nec viverra dignissim. Aliquam erat volutpat.
								Fusce eget risus vel ante molestie elementum id a neque. Aenean
								diam eros, mollis a est a, facilisis feugiat odio.`,
			author: "zijia",
			time: new Date(),
		},
		{
			title: "Title 5",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								placerat odio nec viverra dignissim. Aliquam erat volutpat.
								Fusce eget risus vel ante molestie elementum id a neque. Aenean
								diam eros, mollis a est a, facilisis feugiat odio.`,
			author: "zijia",
			time: new Date(),
		},
	];

	return (
		<div className="question-list">
			<Divider orientation="left">
				<h1 className="title">Questions</h1>
			</Divider>

			<List
				bordered
				itemLayout="vertical"
				dataSource={data}
				renderItem={(item) => (
					<List.Item className="question">
						<List.Item.Meta
							style={{ textAlign: "start", marginBottom: "5px" }}
							className="content"
							title={<a href={item.url}>{item.title}</a>}
							description={item.content}
						/>

						<div className="user-info">
							<span className="user-name"> {item.author} </span>
							<span className="time-posted">{item.time.toUTCString()}</span>
						</div>
					</List.Item>
				)}
			/>
		</div>
	);
}

export default Home;
