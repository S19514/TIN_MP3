const AuthController = require('../controllers/authController');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' });
});

router.post('/login',AuthController.login);
router.post('/logout',AuthController.logout)

module.exports = router;
