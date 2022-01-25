const AuthController = require('../controllers/authController');
var express = require('express');
var router = express.Router();

const LangController = require('../controllers/LangajeController');
router.get('/changeLang/:lang', LangController.changeLang);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' });
});

router.post('/login',AuthController.login);
router.get('/logout',AuthController.logout)

module.exports = router;
