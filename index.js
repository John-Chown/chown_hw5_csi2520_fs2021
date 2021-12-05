const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const alert = require("alert");


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




app.post("", (req,res) => {
    var score = 0;
   
        if (req.body.answer1 == "a"){            
            score ++;
        }

        if (req.body.answer2 == "d"){
            score ++;
        }

        if (req.body.answer3 == "c"){ 
            score ++;
        }

        if (req.body.answer4 == "c"){ 
            score ++;
        }

        if (req.body.answer5 == "b"){ 
            score ++;
        }

        if (req.body.answer6 == "d"){ 
            score ++;
        }

        console.log(score);
       alert(`You got a score of ${score}/6!`);
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));