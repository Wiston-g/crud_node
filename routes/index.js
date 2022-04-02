var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController');

/* GET home page (index.ejs). */
router.get('/', indexController.index);
router.post('/', indexController.obtener);


/* GET about page (about.ejs). */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Nosotros',
                        description: 'Somos una empresa.' });
});


module.exports = router;
