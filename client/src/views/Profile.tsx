import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserSchema } from "./../models/UserModel";

export default function Profile(props: any) {
	const history = useHistory();

	const [currentUser, setCurrentUser] = useState<UserSchema>();

	let stored = sessionStorage.getItem("user");

	if (!stored) {
		alert("Please login first");
		// TODO: go back to login
		history.replace("/login");
	}

	useEffect(() => {
		if (currentUser) return;
		const user = JSON.parse(stored!);

		setCurrentUser(user);
	});

	function userProfile() {
		const fields = [];
		for (const key in currentUser) fields.push(key);

		return (
			<ul>
				{fields.map((key, index) => (
					<li key={index}>
						{key}:{currentUser![key]}
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
