var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', urlencodedParser, function(req, res) {

  console.log(req.body);

  res.send('POST received!');
});

module.exports = router;