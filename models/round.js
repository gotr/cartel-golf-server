var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roundSchema = Schema({
  course: { type: Schema.Types.ObjectId, ref: 'Course'},
  cartel: { type: Schema.Types.ObjectId, ref: 'Cartel'},
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Round', roundSchema);