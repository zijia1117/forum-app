import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import apiMapping from "./services.json";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json({ type: "application/json" }));
app.use(cors({ allowedHeaders: "*" }));

app.use((req, res, next) => {
	console.log(`${req.method} - ${req.url}`);
	next();
});

const authUrl = apiMapping.endpoints.auth;
const questionUrl = apiMapping.endpoints.question;

app.post("/login", async (req, res) => {
	const loginRes = await axios.post(`${authUrl}/login`, req.body);
	res.json(loginRes.data);
});

app.post("/register", async (req, res) => {
	const registerRes = await axios.post(`${authUrl}/register`, req.body);
	res.json(registerRes.data);
});

app.get("/user/:username", async (req, res) => {
	const username = req.params["username"];
	const userProfileRes = await axios.get(`${authUrl}/user/${username}`);
	res.json(userProfileRes.data);
});

// get all questions
app.get("/questions", async (req, res) => {
	const resQs = await axios.get(`${questionUrl}/questions`);
	res.json(resQs.data);
});

// get question detail by id
app.get("/questions/:id", async (req, res) => {
	const _res = await axios.get(`${questionUrl}/questions/${req.params["id"]}`);
	res.json(_res.data);
});

// ask question
app.post("/questions", async (req, res) => {
	const newQuestionRes = await axios.post(`${questionUrl}/questions`, req.body);
	res.json(newQuestionRes.data);
});

// answer question
app.post("/questions/answer/:id", async (req, res) => {
	const resQ = await axios.post(
		`${questionUrl}/questions/answer/${req.params["id"]}`,
		req.body
	);
	res.json(resQ.data);
});

// comment on question
app.post("/questions/comment/:id", async (req, res) => {
	const _res = await axios.post(
		`${questionUrl}/questions/comment/${req.params["id"]}`,
		req.body
	);
	res.json(_res.data);
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
