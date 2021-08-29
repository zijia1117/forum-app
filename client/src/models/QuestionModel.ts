import { ObjectId } from "bson";

export interface Question {
	_id?: ObjectId;
	title: string;
	content: string;
	time: Date;
	username: string;
	comments: ObjectId[];
	answers?: ObjectId[];
}

export {};
