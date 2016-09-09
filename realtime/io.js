var io = require('socket.io')();
var messageTypes = require('./message-types');

var User = require('../models/user');

var connectedUsers = {};

// Listen for new connections from clients (socket)
io.on('connection', function (socket) {
  
  socket.on(messageTypes.signIn, token => {
    User.findById(token, (err, user) => {
      if (!err) {
        if (user.active) {
          socket.user = user;
          connectedUsers[user.id] = Date.now();
          // return object with headers for past rounds for the user's cartel
          // and a complete pendingRound if there is one
          socket.emit(messageTypes.setRound, {
            rounds: [],
            pendingRound: null
          })
        } else {
          // user has been deactivated
          // send message that will remove the token from the device
          socket.emit(messageTypes.deactivate);
        }
      }
    });
  });

});

// io represents socket.io on the server - let's export it
module.exports = io;
