require('./database');
var mongoose = require('mongoose');

var Round = require('../models/round');
var Course = require('../models/course');
var User = require('../models/user');
var Cartel = require('../models/cartel');

var course, cartel, user, round;

Promise.all([
  Round.remove({}).exec(),
  Course.remove({}).exec(),
  User.remove({}).exec(),
  Cartel.remove({}).exec()
])
.then(() => {
  console.log('Deleted all Courses, Users & Cartels removed');
  return Course.create({
    name: 'South Hills Country Club',
    abbreviation: 'SHCC'
  }, (err, doc) => {
    course = doc;
  });
})
.then(() => {
  console.log('Created Course: SHCC');
  return Cartel.create({
    name: 'The Cartel',
    defaultCourse: course
  }, (err, doc) => {
    cartel = doc;
  });
})
.then(() => {
  console.log('Created Cartel: The Cartel');
  return User.create({
    nickname: 'Clarkie',
    cartel: cartel
  }, (err, doc) => {
    user = doc;
  });
})
.then(() => {
  console.log('Created User: Clarkie');
  return Round.create({
    course: course,
    cartel: cartel
  }, (err, doc) => {
    round = doc;
  });
})
.then(() => {
  console.log('Created a Round for The Cartel');
  mongoose.disconnect(() => {
    console.log('Disconnected from db');
  });
});

