var io = require('socket.io')();

// Listen for new connections from clients (socket)
io.on('connection', function (socket) {
  
  // all-data: return all data for the cartel the userToken
  socket.on('all-data', token => {
    socket.emit('all-data', {data: 'you sent: ' + token });
  });

});

// io represents socket.io on the server - let's export it
module.exports = io;
