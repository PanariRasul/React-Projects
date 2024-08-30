import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();

const port = 3000;


//set pg db
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  password: "Rasul@2002",
  database: "world",
  port: "5432",

});

db.connect();

//create quiz array

let quiz = [];

//write query for select the question from db
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

let totalCorrect = 0;

//add middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};
//get home page

app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion })
});

//post a new post

app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }
  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  })
});

//write function for new question or next question
async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
};


app.listen(port, () => {
  console.log(`Server rinning port ${port}`)
});