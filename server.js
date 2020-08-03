//required the module express
var express = require("express");

//creating an instance of express
var app = express();

var server = require("http").createServer(app);

var io = require("socket.io")(server);


//app.get files deliver HTML files easily

app.get("/", function(request, response, next){
    response.sendFile(__dirname + "/public/index.html");
});


//lets express know all our static files are in the public folder
app.use(express.static("public"));

//client is connected
io.on("connection", function(client) {
    console.log("Client connected ...");

    client.on("join", function(data){
        console.log(data);
    });
});

server.listen(9000);

console.log('app available on http://localhost:9000');








