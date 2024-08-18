import express from "express";

const port = 3000;
const app = express();

//app.set("view engine", "ejs");

app.get("/", (req, res) => {

    const today = new Date();
    const day = today.getDate();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (today === 0 || today === 6) {
        type = "the weekend";
        adv = "it's time to have some fun"
    }

    res.render("index.ejs",{
        dayType:type,
        advice: adv,
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});