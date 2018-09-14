var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('userprofile', { title: 'User Profile' });
});

router.post('/profile', function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
