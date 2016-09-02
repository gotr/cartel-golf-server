var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

mongoose.connection.once('open', function(){
  console.log('connected to mongodb:', mongoose.connection);
});