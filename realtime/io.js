var io = require('socket.io')();
var messageTypes = require('./message-types');

var User = require('../models/user');

var connectedUsers = {};

// Listen for new connections from clients (socket)
io.on('connection', function (socket) {
  
  socket.on(messageTypes.signIn, token => {
    User.findById(token, (err, user) => {
      if (user) {
        if (user.active) {
          socket.user = user;
          connectedUsers[user.id] = Date.now();
          // Return all rounds for the user's cartel.
          // Sort pendingRound (if there is one) at the top.
          socket.emit(messageTypes.setRounds, {
            rounds: [],
            pendingRound: null
          })
        } else {
          // user has been deactivated
          // send message that will remove the token from the device
          socket.emit(messageTypes.deactivate);
        }
      } else {
        socket.emit(messageTypes.deactivate);
      }
    });
  });

});

// io represents socket.io on the server - let's export it
module.exports = io;
