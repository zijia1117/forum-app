import { ObjectId } from "bson";
class UserSchema {
	[key: string]: string | Date | ObjectId | undefined;

	_id?: ObjectId;
	dateModified?: Date;
	username?: string;
	password?: string;
	email?: string;
}

export default class UserModel {
	public async login(values: UserSchema) {
		const { _id, dateModified, ...registerInfo } = values;

		const res = await fetch("http://localhost:5000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				...registerInfo,
			}),
			mode: "cors",
			cache: "default",
		});
		return res.json();
	}

	public async register(values: UserSchema) {
		const { _id, dateModified, username, ...loginInfo } = values;

		const res = await fetch("http://localhost:5000/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				...loginInfo,
			}),
			mode: "cors",
			cache: "default",
		});
		return res.json();
	}
}

export { UserSchema };
