const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/resume", (req, res) => {
    res.render("../views/html/my_resume");
});

app.get("/funfacts", (req, res) => {
    res.render("../views/html/my_fun_facts");
});

app.get("/trivia", (req, res) => {
    res.render("../views/html/trivia");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));