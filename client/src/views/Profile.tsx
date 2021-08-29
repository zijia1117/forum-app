import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserSchema } from "./../models/UserModel";
import "../styles/Profile.scss";
export default function Profile(props: any) {
	const history = useHistory();

	const [currentUser, setCurrentUser] = useState<UserSchema>();

	let stored = sessionStorage.getItem("user");

	if (!stored) {
		alert("Please login first");

		history.replace("/login");
	}

	useEffect(() => {
		if (currentUser) return;
		const user = JSON.parse(stored!);

		setCurrentUser(user);
	}, [currentUser, stored]);

	function userProfile() {
		const fields = [];
		for (const key in currentUser) fields.push(key);

		return (
			<ul>
				{fields.map((key, index) => (
					<li key={index}>
						<span>{key}:</span>
						{currentUser![key]}
					</li>
				))}
			</ul>
		);
	}
	return (
		<div className="profile">
			<h1>Profile</h1>
			{userProfile()}
		</div>
	);
}
