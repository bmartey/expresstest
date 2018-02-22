var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brians Sample Express App' });
});
// router.get('/', function (req, res, next) {
//   res.render('index', { othertitle: 'Brians Sample Express App' });
// });

module.exports = router;
