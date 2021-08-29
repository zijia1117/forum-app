import { ObjectId } from "bson";

export interface Question {
	_id?: ObjectId;
	title: string;
	content: string;
	time: Date;
	username: string;
	comments?: ObjectId[] | Comment[];
	answers?: ObjectId[] | Answer[];
}

export interface QuestionDetail {
	_id?: ObjectId;
	title: string;
	content: string;
	time: Date;
	username: string;
	comments?: Comment[];
	answers?: Answer[];
}
export interface Answer {
	_id?: ObjectId;
	username: string;
	content: string;
	comments?: ObjectId[];
	time?: Date;
}

interface Comment {
	_id?: ObjectId;
	username: string;
	content: string;
	time?: Date;
}

export {};
