// we need to connect to our server


var socket = io.connect("http://localhost:9000");

socket.on("connect", function(data) {
    socket.emit("join", "Hello server from client");
});
// receives messages from the server
socket.on("thread", function(data){
    $("#chatHistory").append("<li>" + data + "</li>");
});

// send messages to server
$("form").submit(function() {
    var message = $("#textMessage").val();
    socket.emit("messages", message);
    this.reset();
    return false;
});

