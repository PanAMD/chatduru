var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  nicknames = {};

server.listen(process.env.PORT, process.env.IP);

app.get('/',function(req,res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
              socket.on('sendMessage',function(data){
                io.sockets.emit('newMessage',{msg:data});
              });
  socket.on('newUser', function(data,callback){
    if(data in nicknames){
      callback(false);
    }
    else{
      callback(true);
      socket.nickname = data;
      nicknames[socket.nickname] =1;
      updateNicknames();
    }
  });
  function updateNicknames(){
    io.sockets.emit('usernames',nicknames);
  }
});
 

