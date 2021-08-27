import cors from "cors";
import express, { json } from "express";
import { ObjectId } from "mongodb";
import { Answer, Comment, Question } from "./dataSchema";
import { QuestionModel } from "./model";

const app = express();
const PORT = process.env.PORT || 5000;

export const model = new QuestionModel();

app.use(json({ type: "application/json" }));
app.use(cors({ allowedHeaders: "*" }));
app.use((req, res, next) => {
	console.log(`${req.method} - ${req.url}`);
	next();
});

// get all questions
app.get("/questions", async (req, res) => {
	res.json(await model.getAllQuestions());
});

// ask question
app.post("/questions", async (req, res) => {
	const question: Question = req.body;
	res.json(await model.askQuestion(question));
});

// get question detail by id
app.get("/questions/:id", async (req, res) => {
	const { id } = req.params;
	res.json(await model.getQuestionDetail(new ObjectId(id)));
});

// comment on question
app.post("/questions/comment/:id", async (req, res) => {
	const { id: qId } = req.params;
	const _qId = new ObjectId(qId);

	const { username, content }: Comment = req.body;

	res.json(await model.commentOnQuestion(_qId, { username, content }));
});

// answer question
app.post("/questions/answer/:id", async (req, res) => {
	const { id: qId } = req.params;
	const _id = new ObjectId(qId);

	const { username, content }: Answer = req.body;

	res.json(await model.answerQuestion(_id, { username, content }));
});

app.get("/", (req, res) => res.send("Hello World!"));

// connect to db
model.setup().then(() => {
	// start server
	app.listen(PORT, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
	});
});
