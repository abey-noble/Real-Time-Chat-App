// we need to connect to our server


var socket = io.connect("http://localhost:9000");

socket.on("connect", function(data) {
    socket.emit("join", "Hello server from client");
});