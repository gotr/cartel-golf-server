var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var Round = require('../models/round');


router.post('/signin', function(req, res) {
  // req.body.token
  res.json({});
});

module.exports = router;
