var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});


router.route('/bhola')
.post(function (req, res) {
  console.log("called by bhola"+JSON.stringify(req.body));

  res.send({ title: 'Express from bhola' });
});


module.exports = router;
