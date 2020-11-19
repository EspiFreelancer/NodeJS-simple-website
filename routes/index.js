var express = require('express');
var Robot = require('../models/robotModel')
var router = express.Router();

var home = require('../controllers/homeController.js');
var about = require('../controllers/aboutController.js');
var contact = require('../controllers/contactController.js');
var product = require('../controllers/productController.js');


/* GET home page. */
router.get('/', home.show);

/* GET About page. */
router.get('/nosotros', about.show);

/* GET Contact page. */
router.get('/contacto', contact.show);

/* GET list of products. */
router.get('/robots', product.list);

/* GET detail of product. */
router.get('/robot/:id', product.show);

module.exports = router;
