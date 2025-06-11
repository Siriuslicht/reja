console.log("Web Serverni boshlash");

const express = require("express");
const app = express();
const fs = require('fs');
const { render } = require("ejs");

let user; 
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    }else {
        user = JSON.parse(data);
    }
});

//MongoDB choqirish
const db = require("./server").db();

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Session code
//3: Views code
app.set("views","views");
app.set("view engine","ejs");

//4: Runing code

app.get('/author',(req, res) => {
    res.render("author", { user: user });
})


app.post("/create-item",function(req, res){
    console.log('user enetred /create-item');
    console.log(req.body);
    const new_reja = req.body.reja
    db.collection("plans").insertOne({reja: new_reja}, (err,data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.get('/', function(req , res){
    console.log('user enetred /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err)
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data});            
        }
    })
});

console.log("passed all");
module.exports = app;