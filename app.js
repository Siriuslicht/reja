console.log(`Web Serverni boshlash`);
const express = require("express");
const app = express();


// MongoDB connect


// Expressning 4 ta bo'limi
// 1: Entry codes 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2: Session code 
      // lovely
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.get("/hello", function(req, res){
   res.end(`<h1 style="background-color: red"> Hello World! by Stein</h1>`);

});  

app.get("/", function(req, res) {
   res.render("reja");
});

app.post("/create-item", (req, res) => {
   // code with db here
});

app.get("/", function (req, res) {
   res.render("author");
})

app.get("/gift", function(req, res){
   res.end(`<h1> GIFT page by Stein</h1>`);

});

module.exports = app;
