var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
	let data = {
		message: 'Express and Nunjucks',
		layout: 'layout.njk',
		title: 'Nunjucks example'
	}

  res.render('index.njk', data);
});

/* About */
router.get('/nosotros', function(req, res, next) {
	let data = {
		layout: 'layout.njk',
		title: 'Sobre nosotros'
	}
	res.render('about.njk', data);
})

/* Services */
router.get('/servicios', function(req, res, next) {
	let data = {
		layout: 'layout.njk',
		title: 'Servicios'
	}
	res.render('services.njk', data);
})

/* Contact */
router.get('/contacto', function(req, res, next) {
	let data = {
		layout: 'layout.njk',
		title: 'Contacto'
	}
	res.render('contact.njk', data);
})

module.exports = router;
