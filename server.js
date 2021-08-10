var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var usocket = [];
// var username;
// var tokens[];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected')

  socket.on("join", function (name) {
    usocket[name] = socket
    io.emit("join", name)
    // username = name;
  })

  socket.on("message", function (msg, username) {
    io.emit("message",  msg, username) //将新消息广播出去
  })

});

http.listen(80, function() {
  console.log('listening on port:80');
});
