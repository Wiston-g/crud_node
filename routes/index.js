var express = require('express');
var router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Libreria W' });
});


/* GET about page (about.ejs). */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Nosotros',
                        description: 'Somos una empresa.' });
});


module.exports = router;
