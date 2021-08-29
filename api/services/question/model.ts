import { Collection, MongoClient, ObjectId } from "mongodb";
import { Answer, Comment, Question } from "./dataSchema";

export class QuestionModel {
	private CONN_STR: string =
		"mongodb://root:rootooroot@10.10.0.21:27017/?authSource=admin&readPreference=primary&ssl=false";

	constructor() {
		this.client = new MongoClient(this.CONN_STR);
		this.questions = this.client.db("QA").collection("questions");
		this.answers = this.client.db("QA").collection("answers");
		this.comments = this.client.db("QA").collection("comments");
	}

	private client!: MongoClient;
	private questions!: Collection;
	private answers!: Collection;
	private comments!: Collection;

	public setup = async () => await this.client.connect();
	public cleanup = async () => await this.client.close();

	async askQuestion(question: Question) {
		const { _id, answers, comments, ...newQuestion } = question;
		newQuestion.time = new Date();
		const res = await this.questions.insertOne(newQuestion);
		return await this.questions.findOne({ _id: res.insertedId });
	}

	async getAllQuestions() {
		return this.questions.find({}).toArray();
	}

	async getQuestionDetail(_id: ObjectId) {
		let resQ = await this.questions.findOne<Question>({ _id });

		if (resQ && !resQ.answers) resQ.answers = [];
		if (resQ && !resQ.comments) resQ.comments = [];

		let { answers, comments, ...rest } = resQ!;

		const resAs = await Promise.all(
			answers!.map(async (a: ObjectId) => {
				return await this.answers.findOne<Answer>({ _id: a });
			})
		);
		const resCs = await Promise.all(
			comments!.map(async (c: ObjectId) => {
				return await this.comments.findOne<Comment>({ _id: c });
			})
		);

		return { ...rest, answers: resAs, comments: resCs };
	}

	async answerQuestion(
		_id: ObjectId,
		_content: { username: string; content: string }
	) {
		const { username, content } = _content;

		const resAId = (
			await this.answers.insertOne({ username, content, time: new Date() })
		).insertedId;

		const resQ = await this.questions.updateOne(
			{ _id },
			{ $push: { answers: resAId } }
		);

		return this, this.questions.findOne({ _id });
	}

	async commentOnQuestion(
		_id: ObjectId,
		_content: { username: string; content: string }
	) {
		const { username, content } = _content;
		const resCId = (
			await this.comments.insertOne({
				username,
				content,
				time: new Date(),
			})
		).insertedId;

		const resQ = await this.questions.updateOne(
			{ _id: _id },
			{ $push: { comments: resCId } }
		);

		return this.questions.findOne<Question>({ _id: _id });
	}
}
