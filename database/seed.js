require('./database');
var mongoose = require('mongoose');

var Course = require('../models/course');
var User = require('../models/user');
var Cartel = require('../models/cartel');

var course, cartel, user;

Promise.all([
  Course.remove({}).exec(),
  User.remove({}).exec(),
  Cartel.remove({}).exec()
])
.then(() => {
  console.log('Deleted all Courses, Users & Cartels removed');
})
.then(() => {
  mongoose.disconnect(() => {
    console.log('Disconnected from db');
  });
});

