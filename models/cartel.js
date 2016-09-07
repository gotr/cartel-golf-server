var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartelSchema = Schema({
  name: { type: String, required: true },
  defaultCourse: { type: Schema.Types.ObjectId, ref: 'Course'},
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cartel', cartelSchema);