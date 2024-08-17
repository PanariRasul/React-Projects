import express from "express";

const app = express();
const port  = 3000;


app.get( "/", (req, res) => {
    res.send("<h1>Hello I am From BackEnd!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Hello this is about page!</h1>")
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
});