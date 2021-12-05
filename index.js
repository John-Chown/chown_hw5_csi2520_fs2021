const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');

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

app.post('/trivia', (req, res) => {

    var score1 = 0;
    var score2 = 0;
    
    console.log(req.body.answer1 + req.body.answer2);
    
        // if (req.body.answer1 == "a"){
            
        //     score1+= 1;
           
            
            
        // }
        
        //  if (req.body.answer2 == "d"){
            
        //     score2+= 1;
            
            
        // }
        
    // sum = (score1 + score2)

    // console.log(sum);
   
    
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));