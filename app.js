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
const mongodb = require("mongodb");

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Session code
//3: Views code
app.set("views","views");
app.set("view engine","ejs");

//4: Running code

// edit me is connected to "last update was here" part!!!
app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
         { $set: {reja: data.new_input }}, 
         function(err, data){
            res.json({state: "success"});
    });

});
// delete all 
app.post("/delete-all", (req, res) => {
    if(req.body.delete_all){
        db.collection("plans").deleteMany(function () {
            res.json({state: "All clear!!!"});
        })
    }
});

app.get('/author',(req, res) => {
    res.render("author", { user: user});
})


app.post("/create-item",function(req, res){
    console.log('user entered /create-item');
    console.log(req.body);
    const new_reja = req.body.reja
    db.collection("plans").insertOne({reja: new_reja}, (err,data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
        res.json({state: "success"});  // json haqida
    }) 
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
