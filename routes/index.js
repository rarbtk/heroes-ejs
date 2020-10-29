var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

module.exports = router;

router.get('/heroes', function(req, res, next) {
  res.render('heroes', { title: 'Express' });
});

module.exports = router;
