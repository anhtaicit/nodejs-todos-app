var express = require('express');
var router = express.Router();
var setupController = require('../api/controllers/setupController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Setup Todo
// router.get('/api/setupTodos', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
