var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = Schema({
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);