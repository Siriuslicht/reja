const http = require('http');
const mongodb = require("mongodb")
console.log("passed here");

let db;
const connectionString = 
      "mongodb+srv://Licht:Siriuslicht2143@cluster0.tr1raml.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
   connectionString, 
   {
    useNewUrlParser:true, 
    UseUnifiedTopology:true
   }
, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MogoDB connection succed");
        module.exports = client;
         console.log(client);
        const app = require("./app");

        const  server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
        console.log(`The server is runing succesfuly on port: ${PORT}, http://localhost:${PORT}`)
        });          
    }
})     