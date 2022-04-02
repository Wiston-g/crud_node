var express = require('express');
var router = express.Router();

const productsController = require('../controller/productsController');

var multer = require('multer');
var fecha = Date.now();

var rutaAmacenImagen = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './public/images/');
    },
    filename:function (request, file, callback) {
        console.log(file);
        callback(null, fecha+"-"+file.originalname);
    }
});

var cargarImagen = multer({ storage:rutaAmacenImagen });

/* GET about page (products.ejs). */
router.get('/', productsController.index);
router.get('/create', productsController.create);
router.post('/',cargarImagen.single("imagen"), productsController.save);
router.post('/edit/:id', productsController.edit);
router.post('/update',cargarImagen.single("imagen"), productsController.update);
router.post('/delete/:id', productsController.delete);

module.exports = router;


