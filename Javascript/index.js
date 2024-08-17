import express from "express";

const port = 8000;

app.get("/", (res, req) => {
    res.send("This Is Home Page!");
});

app.post("register",(req, res)=>{
    res.sendStatus(200);
});

app.patch("user/rasul",(req, res)=>{
    res.sendStatus(200);
});

app.put("user/rasul",(req, res)=>{
    res.sendStatus(200);
});

app.delete("user/rasul", (req, res) =>{
    res.sendStatus(200);
});


app.listen("3000", ()=>{
    console.log("server up on port 3000")
});


app.listen(port,()=>{
    console.log("server run on port 800");
});