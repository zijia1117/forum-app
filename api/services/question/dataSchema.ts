import { ObjectId } from "mongodb";

export class User {
	_id: ObjectId;
	username: string;
	email: string;
	password: string;
	questions?: ObjectId[];
	comments?: ObjectId[];
	answers?: ObjectId[];
}

export class Question {
	_id?: ObjectId;
	username: string;
	title: string;
	content: string;
	answers?: ObjectId[];
	comments?: ObjectId[];
	time?: Date;
}

export class Answer {
	_id?: ObjectId;
	username: string;
	content: string;
	comments?: ObjectId[];
	time?: Date;
}

export class Comment {
	_id?: ObjectId;
	username: string;
	content: string;
	time?: Date;
}
