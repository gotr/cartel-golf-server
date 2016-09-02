var express = require('express');
var router = express.Router();

var Cat = require('../models/cat');

/* GET home page. */
router.get('/', function(req, res, next) {
  var kitty = new Cat({name: 'cat ' + Date.now().toString()});
  kitty.save(function() {
    res.render('index', { title: 'Express', cat: kitty });
  });
});

module.exports = router;
