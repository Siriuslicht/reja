console.log(`Web Serverni boshlash`);
const express = require("express");
const app = express();
const http = require("http");


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

app.get("/gift", function(req, res){
   res.end(`<h1> GIFT page by Stein</h1>`);

});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
   console.log(`The server is running successfully on port: ${PORT}`);
});