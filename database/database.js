var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

mongoose.connection.once('open', function(){
  console.log(`Connected to mongodb\nserver: ${mongoose.connection.host}:${mongoose.connection.port}\ndatabse: ${mongoose.connection.name}`);
});