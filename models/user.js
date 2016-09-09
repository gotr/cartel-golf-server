var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  nickname: { type: String, required: true },
  cartel: {
    type: Schema.Types.ObjectId,
    ref: 'Cartel',
    required: true
  },
  active: { type: Boolean, default: true },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);