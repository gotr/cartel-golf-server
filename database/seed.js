require('./database');
var mongoose = require('mongoose');
var User = require('../models/user');
var Cartel = require('../models/cartel');

User.remove({}).exec().then(() => {
  console.log('users removed');
  return Cartel.remove({}).exec();
}).then(() => {
  console.log('cartels removed');
  
}).then(() => {
  mongoose.disconnect(() => {
    console.log('disconnected from db');
  });
});

